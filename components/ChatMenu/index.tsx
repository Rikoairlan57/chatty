import React from "react"
import Image from "next/image"
import DummyProfileAvatar from "../../public/download.jpg"
import { BsChatLeftText } from 'react-icons/bs'
import HorizontalLine from "../UI/HorizontalLine"
import Search from "../UI/Search"


const ChatMenu: React.FunctionComponent = () => {
    return (
        <div className=' text-white h-screen basis-1/4 border-r-4 border-r-neutral-500 '>
            <div className="flex justify-between m-4">
                <Image className="rounded-full" width={50} height={50} src={DummyProfileAvatar} alt="Profile Image"></Image>
                <div className="flex flex-col justify-center items-center">
                    <BsChatLeftText size={24} />
                    <p>New Chat</p>
                </div>
            </div>
            <HorizontalLine />
            <Search />
            <HorizontalLine />


        </div>
    )
}

export default ChatMenu