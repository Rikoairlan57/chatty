import React from "react";
import ButtonProps from "./ButtonInterface";


const PrimaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <button
            className="mt-8 w-full px-4 py-2 text-white border rounded whitespace-nowrap bg-neutral-800 hover:bg-neutral-600 transition-all"
            type="submit"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default PrimaryButton