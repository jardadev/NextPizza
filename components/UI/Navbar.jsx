import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import PageNav from './PageNav';
const Navbar = ({ children }) => {
	const router = useRouter();
	const session = useSession();

	return (
		<header className='w-full flex justify-between border-b border-grey p-4'>
			<>
				<h1 className='text-2xl'>Pizza Time</h1>
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
					<Link className='underline text-blue-500 ' href={'/'}>
						Already have an Account? Sign in.
					</Link>
				)}
			</>
		</header>
	);
};

export default Navbar;
