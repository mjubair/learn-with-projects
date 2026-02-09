interface AvatarProps {
  imageUrl: string;
}

const Avatar = ({imageUrl}: AvatarProps) => {
    return (
					<img
						src={imageUrl}
						alt="Avatar"
						className="w-16 h-16 rounded-full mx-auto"
					/>
				);
}

export default Avatar;