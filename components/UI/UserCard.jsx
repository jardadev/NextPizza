import Image from 'next/image';
import Link from 'next/link';


const UserCard = ({session}) => {
	return (
		<div>
			<Image
				className='rounded-full w-8 mr-4'
				src={session.data.user.image}
				alt={session.data.user.name + "'s image"}
				height={80}
				width={80}
			/>
			<span className='text-gray-500 mr-4'>{session.data.user.name}</span>
			<Link className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900' href='/api/auth/signout'>
					Sign Out
				
			</Link>
		</div>
	);
};

export default UserCard;
