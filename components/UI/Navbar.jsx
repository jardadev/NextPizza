import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import UserCard from './UserCard';
const Navbar = () => {
	const router = useRouter();
	const session = useSession();

	return (
		<>
			{!session.data && (
				<header className='w-full flex justify-between border-b border-grey p-4 items-center text-lg'>
					<>
						<h1 className='text-4xl'>Pizza Time</h1>
					</>
					<>
						{router.pathname === '/' && (
							<Link
								className='underline text-blue-500 '
								href={'/register'}
							>
								Don&apos;t have an Account? Register.
							</Link>
						)}
						{router.pathname === '/register' && (
							<Link
								className='underline text-blue-500 '
								href={'/'}
							>
								Already have an Account? Sign in.
							</Link>
						)}
					</>
				</header>
			)}
			{session.data && (
				<header className='flex justify-between w-full px-4 border-b border-grey p-4 text-2xl items-center'>
					<div>
						<UserCard session={session} />
					</div>

					<nav className='flex gap-3'>
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
							<Link href={'/cart'}>Order(0)</Link>
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
			)}
		</>
	);
};

export default Navbar;
