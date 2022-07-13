import React from "react";
import HorizontalLine from "../UI/HorizontalLine";
import ProfileImage from "../User/ProfileImage";
import { AiOutlineMore } from "react-icons/ai"

const ContactItem = () => {
    return (
        <div>
            <div className="flex gap-8 items-center justify-between px-4 py-1">
                <div className="flex gap-4">
                    <ProfileImage size={50} />
                    <div>
                        <h3>Username</h3>
                        <p>🍔 User Status</p>
                    </div>
                </div>
                <AiOutlineMore size={30} />
            </div>
            <HorizontalLine />
        </div>
    )
}

export default ContactItem