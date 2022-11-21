import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import UserCard from './UserCard';
import LoginBtn from './LoginBtn';
const Navbar = () => {
	const router = useRouter();
	const session = useSession();

	return (
		<div className='flex justify-between flex-row underline'>
			<div>
				<h1>Pizza Time</h1>
			</div>

			<div>
				{session.status === 'unauthenticated' &&
					router.pathname === '/' && (
						<Link href={'/register'}>
							Don&apos;t have an Account? Register.
						</Link>
					)}
				{/* {session.status === 'authenticated' && } */}
			</div>
		</div>
	);
};

export default Navbar;
