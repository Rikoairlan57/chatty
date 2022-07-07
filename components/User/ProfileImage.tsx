import Image from "next/image";

interface ProfileImage {
    className?: String,
    onClick?: React.MouseEventHandler<HTMLImageElement>
}

const ProfileImage: React.FC<ProfileImage> = (props) => {
    return (
        <Image onClick={props.onClick} className={`rounded-full ${props.className}`} width={50} height={50} src="/download.jpg" alt="Profile Image" />
    );
}

export default ProfileImage;