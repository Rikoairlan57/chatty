import React from "react";
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
            <ContactItem />
        </SideDrawer>
    )
}

export default ContactList