import Link from 'next/link';

const PageNav = ({ session }) => {
	return (
		<div>
			<div>
				<Link href={'/'}>Home</Link>
			</div>
			<div>
				<Link href={'/cart'}>Order (0)</Link>
			</div>
			<div>
				<Link href={'/account'}>Account</Link>
			</div>
			<div>
				<Link href={'/api/auth/logout'}>Logout</Link>
			</div>
		</div>
	);
};

export default PageNav;
