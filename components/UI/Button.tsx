
import React from "react";

export interface ButtonProps {
    children: React.ReactNode
    onClick?: React.MouseEventHandler
    styleType?: String
    className?: String
}

/** 
 * Normal button with 2 types of style
* @prop children Something to put inside the button
* @prop onClick function that will be fired when the button is clicked
* @prop styleType the type of button. See BUTTON_STYLES_TYPES
* @prop className css class
*/
const Button: React.FC<ButtonProps> = ({ styleType = BUTTON_STYLES_TYPES.primary, children, onClick, className }) => {

    const buttonStyle = getButtonStyle(styleType)

    return (
        <button
            className={`mt-8 w-full px-4 py-2 ${buttonStyle} rounded whitespace-nowrap transition-all ${className}`}
            type="submit"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export const BUTTON_STYLES_TYPES: ButtonStyles = {
    primary: "Primary",
    secondary: "Secondary"
}

function getButtonStyle(type: String): String {
    const primaryStyle = "bg-neutral-800 text-white hover:bg-neutral-700"
    const secondaryStyle = "bg-white text-black hover:bg-neutral-200 border border-solid border-black hover:border-neutral-700"
    return type == BUTTON_STYLES_TYPES.primary ? primaryStyle : secondaryStyle;
}

interface ButtonStyles {
    primary: String,
    secondary: String
}

export default Button