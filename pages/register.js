import RegisterForm from '../components/Forms/RegisterForm';
import ConnectionsBtn from '../components/UI/ConnectionsBtn';
const Register = () => {
	const handleRegistrationSubmit = async (data) => {
		try {
			create(data);
		} catch (error) {
			console.log(error);
		}
	};

	// CREATE Customer
	const create = async (data) => {
		await fetch('/api/customer/create', {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json; charset=utf8',
			},
		})
			.then(console.log('done'))
			.catch((err) => console.log(err));
	};
	
	return (
		<div>
			<RegisterForm handleRegistrationSubmit={handleRegistrationSubmit} />
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
