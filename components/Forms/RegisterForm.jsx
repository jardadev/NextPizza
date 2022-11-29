import FormContainer from './FormContainer';
import { FaArrowCircleRight } from 'react-icons/fa';


const RegisterForm = () => {
	return (
		<FormContainer>
			<h1 class='mb-8 text-3xl text-center'>Sign up</h1>
			<input
				type='text'
				class='block border border-grey-light w-full p-3 rounded mb-4'
				name='fullname'
				placeholder='Full Name'
			/>

			<input
				type='text'
				class='block border border-grey-light w-full p-3 rounded mb-4'
				name='email'
				placeholder='Email'
			/>

			<input
				type='password'
				class='block border border-grey-light w-full p-3 rounded mb-4'
				name='password'
				placeholder='Password'
			/>
			<input
				type='password'
				class='block border border-grey-light w-full p-3 rounded mb-4'
				name='confirm_password'
				placeholder='Confirm Password'
			/>
			<button className='flex justify-center w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'>
						<FaArrowCircleRight size={24} />
					</button>
		</FormContainer>
	);
};

export default RegisterForm;
