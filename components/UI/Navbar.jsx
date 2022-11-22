import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import PageNav from './PageNav';
const Navbar = ({ children }) => {
	const router = useRouter();
	const session = useSession();

	return (
		<div className='h-screen flex flex-col'>
			<div className='flex justify-between flex-row items-center p-3'>
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
								href={'/'}
							>
								Already have an Account? Sign in.
							</Link>
						)}
					{session.status === 'authenticated' && <PageNav />}
				</>
			</div>
			<div className='grid place-items-center p-8'>{children}</div>
			<footer>
				<br />
				<span className='flex justify-center items-center text-sm underline p-1'>
					<Link href={'https://github.com/jardadev'}>
						Created by Aaron Johnson
					</Link>
				</span>
			</footer>
		</div>
	);
};

export default Navbar;
