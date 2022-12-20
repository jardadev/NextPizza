import LoginForm from '../components/Forms/LoginForm';
import ConnectionsBtn from '../components/UI/ConnectionsBtn';

import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Home = () => {
	const session = useSession();
	const router = useRouter();

	// if User authenticated already, take user to dashboard page.
	if (session.status === 'authenticated') {
		router.push('/dashboard');
	}

	return (
		<div className='flex flex-col justify-center items-center pb-32'>
			<h2 className='text-4xl text-center font-bold pb-16'>
				Welcome Back!
			</h2>
			<LoginForm />

			<div className='flex flex-col w-96'>
				<div className='py-3'>
					<p className='text-center'>OR</p>
					<hr />
				</div>
				<ConnectionsBtn />
			</div>
		</div>
	);
};

export default Home;
