import React from "react";
import HorizontalLine from "../UI/HorizontalLine";
import ProfileImage from "../User/ProfileImage";

/** 
 * Chat item for Chat list
*/
const ChatItem = () => {
    return (
        <div>
            <div className="flex flex-row px-4 items-center gap-4">
                <ProfileImage size={42} />
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium">Username</h3>
                    <p className="text-sm">Just some ordinary chatting words...</p>
                </div>
            </div>
            <HorizontalLine />
        </div>
    );
}

export default ChatItem;