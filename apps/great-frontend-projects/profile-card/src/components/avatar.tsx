interface AvatarProps {
  imageUrl: string;
}

const Avatar = ({imageUrl}: AvatarProps) => {
    return (
        <img src={imageUrl} alt="Avatar" className="w-24 h-24 rounded-full mx-auto" />
    );
}

export default Avatar;