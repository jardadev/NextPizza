import Link from 'next/link';
import { useRouter } from 'next/router';

const PageNav = ({  }) => {
	const router = useRouter();
	return (
		<div className='gap-3 m-2 flex flex-row justify-between items-center rounded border-2 border-gray-500'>
			<div
				className={
					router.pathname === '/'
						? 'bg-blue-500'
						: 'hover:bg-blue-300'
				}
			>
				<Link href={'/'}>Home</Link>
			</div>
			<div
				className={
					router.pathname === '/order'
						? 'bg-blue-500'
						: 'hover:bg-blue-300'
				}
			>
				<Link href={'/cart'}>Order (0)</Link>
			</div>
			<div
				className={
					router.pathname === '/account'
						? 'bg-blue-500'
						: 'hover:bg-blue-300'
				}
			>
				<Link href={'/account'}>Account</Link>
			</div>
			<div
				className={
					router.pathname === '/signout'
						? 'bg-blue-500'
						: 'hover:bg-blue-300'
				}
			>
				<Link href={'/api/auth/logout'}>Logout</Link>
			</div>
		</div>
	);
};

export default PageNav;
