import React from "react"

import HorizontalLine from "../UI/HorizontalLine"
import Search from "../UI/Search"
import ChatTopMenu from "./ChatTopMenu"
import ChatList from "./ChatList"

/** 
 * Chat menu on the left side of the screen, See figma design
*/
const ChatMenu: React.FunctionComponent = () => {
    return (
        <div className=' bg-neutral-800 text-white h-screen basis-1/3 border-r-4 border-r-neutral-500 overflow-hidden'>
            <ChatTopMenu />
            <HorizontalLine />
            <Search />
            <HorizontalLine />
            <ChatList />
        </div>
    )
}

export default ChatMenu