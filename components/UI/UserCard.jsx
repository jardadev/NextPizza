import Image from 'next/image';

const UserCard = ({ session }) => {
	return (
		<>
			<Image
				className='rounded-full'
				src={session.data?.user.image}
				alt={session.data?.user.name + "'s image"}
				height={80}
				width={80}
			/>
		</>
	);
};

export default UserCard;
