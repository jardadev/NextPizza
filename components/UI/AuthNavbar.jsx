import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UserCard from '../UI/UserCard'
const AuthNavbar = ({}) => {
	const router = useRouter();
	const session = useSession();
	return (
		<header>
		<div>
			<UserCard session={session}/>
		</div>

		<nav className='w-full gap-3 flex flex-row justify-end px-4 border-b border-grey p-4 text-2xl'>
			<div
				className={
					router.pathname === '/dashboard'
						? 'border-b border-blue-500'
						: 'hover:border-b'
				}
			>
				<Link href={'/dashboard'}>Home</Link>
			</div>
			<div
				className={
					router.pathname === '/order'
						? 'border-b border-blue-500'
						: 'hover:border-b'
				}
			>
				<Link href={'/cart'}>Order (0)</Link>
			</div>
			<div
				className={
					router.pathname === '/account'
						? 'border-b border-blue-500'
						: 'hover:border-b'
				}
			>
				<Link href={'/account'}>Account</Link>
			</div>
			<div
				className={
					router.pathname === '/signout'
						? 'border-b border-blue-500'
						: 'hover:border-b'
				}
			>
				<Link href={'/api/auth/signout'}>Logout</Link>
			</div>
		</nav>
		</header>
	);
};

export default AuthNavbar;
