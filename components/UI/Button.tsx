
import React from "react";

export interface ButtonProps {
    children: React.ReactNode
    onClick?: React.MouseEventHandler
    buttonStyle?: String
    className?: String
}

/** 
 * Collection of button styles. Use it for <Button/>
* @attribute Primary: Black button
* @attribute Secondary: White button
* @attribute ghostWhite: Transparent button with white border and text
* @attribute ghostBlack: Transparent button with black border and text
*/
export const BUTTON_STYLES: ButtonStyles = {
    primary: "bg-neutral-800 text-white hover:bg-neutral-700",
    secondary: "bg-white text-black hover:bg-neutral-200 border border-solid border-black hover:border-neutral-700",
    ghostBlack: "bg-white text-black hover:bg-neutral-200 border border-solid border-black hover:border-neutral-700 hover:bg-neutral-700",
    ghostWhite: "bg-transparent text-white border border-solid border-white hover:bg-neutral-700"
}

/** 
 * Normal button with 2 types of style
* @prop children: Something to put inside the button
* @prop onClick: function listener when the click button fired
* @prop styleType: the type of button you have to use BUTTON_STYLE from 'components/UI/Button.tsx
* @prop className: css class
*/
const Button: React.FC<ButtonProps> = ({ buttonStyle = BUTTON_STYLES.primary, className, children, onClick }) => {

    return (
        <button
            className={`mt-8 w-full px-4 py-2 rounded whitespace-nowrap transition-all  ${buttonStyle} ${className}`}
            type="submit"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

interface ButtonStyles {
    primary: String,
    secondary: String,
    ghostWhite: String,
    ghostBlack: String
}

export default Button