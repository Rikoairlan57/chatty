import React from "react"
import Image from "next/image"
import DummyProfileAvatar from "../../public/download.jpg"
import { BsChatLeftText } from 'react-icons/bs'

const ChatTopMenu: React.FunctionComponent = () => {
    return (
        <div className="flex justify-between m-4">
            <Image className="rounded-full" width={50} height={50} src={DummyProfileAvatar} alt="Profile Image"></Image>
            <div className="flex flex-col justify-center items-center">
                <BsChatLeftText size={24} />
                <p>New Chat</p>
            </div>
        </div>
    )
}

export default ChatTopMenu