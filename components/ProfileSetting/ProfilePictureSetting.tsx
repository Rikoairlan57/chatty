import ProfileImage from "../User/ProfileImage";

// TODO ADD edit button to change picture
export function ProfilePictureSetting() {
    return (<div className="flex justify-center">
        <ProfileImage size={180} />
    </div>);
}
