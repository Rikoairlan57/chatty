import Image from "next/image";

interface ProfileImage {
    className?: string,
    onClick?: React.MouseEventHandler<HTMLImageElement>
    size?: string | number
}

/** 
 * Circular Profile Image
 * @props size: width and height of the image
*/

const ProfileImage: React.FC<ProfileImage> = (props) => {
    return (
        <Image onClick={props.onClick} className={`rounded-full ${props.className}`} width={props.size} height={props.size} src="/download.jpg" alt="Profile Image" />
    );
}

export default ProfileImage;