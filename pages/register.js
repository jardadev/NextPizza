import RegisterForm from '../components/Forms/RegisterForm';
import ConnectionsBtn from '../components/UI/ConnectionsBtn';
const Register = () => {
	return (
		<div>
			<RegisterForm />
			<div>
				<div className='py-3'>
					<p className='text-center'>OR</p>
					<hr />
				</div>
				<ConnectionsBtn />
			</div>
		</div>
	);
};

export default Register;
