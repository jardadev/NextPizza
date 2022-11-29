import LoginForm from '../components/Forms/LoginForm';
import ConnectionsBtn from '../components/UI/ConnectionsBtn';

const Home = () => {
	return (
		<div>
			<h2 className='text-center font-bold'>Welcome Back!</h2>
			<LoginForm />
	
				<div>
					<div className='py-3'>
						<p className='text-center'>OR</p>
						<hr />
					</div>
					<ConnectionsBtn/>
				</div>
		</div>
	);
};

export default Home;
