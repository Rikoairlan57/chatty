import React from "react"
import Image from "next/image"
import { BsChatLeftText } from 'react-icons/bs'
import ProfileImage from "../User/ProfileImage"


/** 
 * Subcomponent for Chat Menu. See the design in figma
*/

const ChatTopMenu: React.FunctionComponent = () => {
    return (
        <div className="flex justify-between m-4 bg-neutral-800 text-white" >
            <ProfileImage />
            <div className="flex flex-col justify-center items-center">
                <BsChatLeftText size={24} />
                <p>New Chat</p>
            </div>
        </div >
    )
}

export default ChatTopMenu