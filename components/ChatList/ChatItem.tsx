import React from "react";
import HorizontalLine from "../UI/HorizontalLine";
import ProfileImage from "../User/ProfileImage";

/** 
 * Chat item for Chat list
*/
const ChatItem = () => {
    return (
        <>
            <div className="flex flex-row px-2 items-center gap-4">
                <ProfileImage />
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium">Username</h3>
                    <p className="text-sm">Chatting words...</p>
                </div>
            </div>
            <HorizontalLine />
        </>
    );
}

export default ChatItem;