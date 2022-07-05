import React from "react";
import ButtonProps from "./ButtonInterface";

const SecondaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <button className="mt-4 w-full px-4 py-2 border-2 hover:bg-neutral-100 rounded whitespace-nowrap focus:outline-none transition-all"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default SecondaryButton