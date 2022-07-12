import React, { useState } from "react"
import { BsChatLeftText } from 'react-icons/bs'
import ContactList from "../ContactList"
import ProfileSetting from "../ProfileSetting"
import ProfileImage from "../User/ProfileImage"


/** 
 * Subcomponent for Chat Menu. See the design in figma
*/

const ChatTopMenu: React.FunctionComponent = () => {

    const [isProfileSettingOpen, setIsProfileSettingOpen] = useState(false);
    const [isContactListOpen, setIsContactListOpen] = useState(false);

    function openProfileSetting() {
        setIsProfileSettingOpen(true)
        setIsContactListOpen(false)
    }

    function closeProfileSetting() {
        setIsProfileSettingOpen(false)
    }

    function openContactList() {
        setIsContactListOpen(true)
        setIsProfileSettingOpen(false)
    }

    function closeContactList() {
        setIsContactListOpen(false)
    }

    return (
        <>
            {
                isContactListOpen
                && <ContactList onClose={closeContactList} />
            }
            {
                isProfileSettingOpen
                && <ProfileSetting onClose={closeProfileSetting} />
            }
            <div className="flex justify-between m-4 bg-neutral-800 text-white" >
                <ProfileImage onClick={openProfileSetting} size={50} />
                <div onClick={openContactList} className="flex flex-col justify-center items-center hover:cursor-pointer gap-1">
                    <BsChatLeftText size={24} />
                    <p className="text-sm">Contact List</p>
                </div>
            </div >
        </>
    )
}

export default ChatTopMenu