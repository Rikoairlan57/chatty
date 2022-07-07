import Image from "next/image";

const ProfileImage: React.FC = () => {
    return (
        <div>
            <Image className="rounded-full" width={50} height={50} src="/download.jpg" alt="Profile Image" />
        </div>
    );
}

export default ProfileImage;