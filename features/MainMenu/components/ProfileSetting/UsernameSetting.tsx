
import { MdEdit } from "react-icons/md"
/** 
 * subcomponent for profile setting. it is used for changing user name
*/
function UsernameSetting() {
    return (<div>
        <p className="text-sm font-light">Your Name</p>
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Username</h1>
            <MdEdit size={24} />
        </div>
    </div>);
}

export default UsernameSetting