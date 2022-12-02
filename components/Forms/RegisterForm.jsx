import { useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';


const RegisterForm = ({handleRegistrationSubmit}) => {
	
	const [form, setForm] = useState({fullName: '', email: '', password: ''});
	const [confirmPassword, setConfirmPassword] = useState('');

	return (
		<form
			className='bg-grey-lighter'
			onSubmit={(e) => {
				e.preventDefault()
				handleRegistrationSubmit(form)
			}}
		>
			<div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
				<div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
					<h1 className='mb-8 text-3xl text-center'>Sign up</h1>
					<input
						type='text'
						className='block border border-grey-light w-full p-3 rounded mb-4'
						placeholder='Full Name'
						value={form.fullName}
						onChange={(e) => setForm({...form, fullName: e.target.value})}
					/>

					<input
						type='text'
						className='block border border-grey-light w-full p-3 rounded mb-4'
						placeholder='Email'
						value={form.email}
						onChange={(e) => setForm({...form, email: e.target.value})}
					/>

					<input
						type='password'
						className='block border border-grey-light w-full p-3 rounded mb-4'
						placeholder='Password'
						value={form.password}
						onChange={(e) => setForm({...form, password: e.target.value})}
					/>
					<input
						type='password'
						className='block border border-grey-light w-full p-3 rounded mb-4'
						placeholder='Confirm Password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
					/>
					<button
						type='submit'
						className='flex justify-center w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'
					>
						<FaArrowCircleRight size={24} />
					</button>
				</div>
			</div>
		</form>
	);
};

export default RegisterForm;
