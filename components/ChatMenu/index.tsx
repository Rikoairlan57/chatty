import React from "react"

import HorizontalLine from "../UI/HorizontalLine"
import Search from "./Search"
import ChatTopMenu from "./ChatTopMenu"


const ChatMenu: React.FunctionComponent = () => {
    return (
        <div className=' text-white h-screen basis-1/4 border-r-4 border-r-neutral-500 '>
            <ChatTopMenu />
            <HorizontalLine />
            <Search />
            <HorizontalLine />

        </div>
    )
}

export default ChatMenu