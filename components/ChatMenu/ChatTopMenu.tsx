import React, { useState } from "react"
import { BsChatLeftText } from 'react-icons/bs'
import ProfileSetting from "../ProfileSetting"
import SideDrawer from "../UI/SideDrawer"
import ProfileImage from "../User/ProfileImage"


/** 
 * Subcomponent for Chat Menu. See the design in figma
*/

const ChatTopMenu: React.FunctionComponent = () => {

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    function profileImageClickHandler() {
        setIsOpenDrawer(true)
    }

    function closeProfileSettings() {
        setIsOpenDrawer(false)
    }

    //TODO show contact list when the chat button is clicked

    return (
        <>
            {isOpenDrawer && <ProfileSetting onClose={closeProfileSettings} />}
            <div className="flex justify-between m-4 bg-neutral-800 text-white" >
                <ProfileImage onClick={profileImageClickHandler} size={50} />
                <div className="flex flex-col justify-center items-center">
                    <BsChatLeftText size={24} />
                    <p>New Chat</p>
                </div>
            </div >
        </>
    )
}

export default ChatTopMenu