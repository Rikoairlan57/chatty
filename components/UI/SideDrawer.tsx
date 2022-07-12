
import { BiArrowBack } from "react-icons/bi"

interface SideDrawerProps {
    onClose?: React.MouseEventHandler
    children?: React.ReactNode
    className?: String
    drawerTitle: String
}

//TODO Slide animation from the left

/** 
 * Drawer template that will slide from the left with dark backdrop
 * @props onBackdropClick: function listener when user click outside of the drawer / the backdrop shadow
*/
const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    return (
        <>
            <div onClick={props.onClose} className="bg-neutral-900 opacity-50 fixed z-10 w-screen h-screen">
            </div>
            <div className={`bg-neutral-800 w-1/3 fixed z-20 top-0 left-0 h-screen p-4 flex flex-col gap-10 ${props.className}`}>
                <div className="flex gap-2 items-center">
                    <BiArrowBack onClick={props.onClose} size={32} /> <p>{props.drawerTitle}</p>
                </div>
                {props.children}
            </div>
        </>
    )
}

export default SideDrawer