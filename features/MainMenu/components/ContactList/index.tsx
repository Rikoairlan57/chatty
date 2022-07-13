import React from "react";
import HorizontalLine from "../UI/HorizontalLine";
import Search from "../UI/Search";
import SideDrawer from "../UI/SideDrawer";
import ContactItem from "./ContactItem";

interface ContactListProps {
    onClose: React.MouseEventHandler
}

/** 
 * Side drawer for Contact List. See figma design
*/

const ContactList: React.FC<ContactListProps> = (props) => {
    return (
        <SideDrawer drawerTitle="Contact List" onClose={props.onClose}>
            <div>
                <HorizontalLine />
                <Search />
                <HorizontalLine />
            </div>
            <div className="flex flex-col gap-2">
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
                <ContactItem />
            </div>
        </SideDrawer>
    )
}

export default ContactList