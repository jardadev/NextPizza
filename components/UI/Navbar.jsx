import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import PageNav from './PageNav';
const Navbar = ({ children }) => {
	const router = useRouter();
	const session = useSession();

	return (
		<div className='grid grid-rows-2'>
			<div className='flex justify-between flex-row items-center'>
				<>
					<h1 className='text-2xl'>Pizza Time</h1>
				</>
				<>
					{session.status === 'unauthenticated' &&
						router.pathname === '/' && (
							<Link
								className='underline text-blue-500 '
								href={'/register'}
							>
								Don&apos;t have an Account? Register.
							</Link>
						)}
					{session.status === 'unauthenticated' &&
						router.pathname === '/register' && (
							<Link
								className='underline text-blue-500 '
								href={'/register'}
							>
								Already have an Account? Sign in.
							</Link>
						)}
					{session.status === 'authenticated' && <PageNav />}
				</>
			</div>
			<div className='flex justify-center items-center'>{children}</div>
		</div>
	);
};

export default Navbar;
