
import { BiArrowBack } from "react-icons/bi"

interface SideDrawerProps {
    onBackdropClick?: React.MouseEventHandler
    children?: React.ReactNode
    className?: String
}

/** 
 * Drawer template that will slide from the left with dark backdrop
*/
const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    return (
        <>
            <div onClick={props.onBackdropClick} className="bg-neutral-900 opacity-50 fixed z-10 w-screen h-screen">
            </div>
            <div className={`bg-neutral-800 w-1/3 fixed z-20 top-0 left-0 h-screen p-4 ${props.className}`}>
                {props.children}
            </div>
        </>
    )
}

export default SideDrawer