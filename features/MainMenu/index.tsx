import React from "react";
import ChatSideBarMenu from "./components/ChatSideBarMenu";

const MainMenu: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <ChatSideBarMenu className={className} />
    )
}

export default MainMenu;