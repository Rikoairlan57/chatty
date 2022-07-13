import React from "react";

const Chat: React.FC<{ className?: string }> = ({ className }) => {

    //TODO Chat Area UI Structure

    return (
        <div className={`flex justify-center items-center text-center text-white h-screen w-full bg-neutral-900 ${className}`}>
            <div>
                <h1>Chatty</h1>
                <h3>Start a New Chat</h3>
            </div>
        </div>
    )
}

export default Chat