import SideDrawer from "../UI/SideDrawer"
import { BiArrowBack } from "react-icons/bi"

interface ProfileSettingProps {
    onClose: React.MouseEventHandler
}

const ProfileSetting: React.FC<ProfileSettingProps> = (props) => {

    return (
        <SideDrawer className="flex flex-col gap-2" onBackdropClick={props.onClose}>
            <BiArrowBack onClick={props.onClose} />
            <p>Drawer</p>
        </SideDrawer>
    )

}

export default ProfileSetting