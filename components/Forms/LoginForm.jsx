import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const LoginForm = (props) => {
	return (
		<form
			className='bg-grey-lighter'
			onSubmit={(e) => handleRegisterFormSubmission(e)}
		>
			<div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
				<div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
					<h1 className='mb-8 text-3xl text-center'>Log In</h1>

					<input
						type='text'
						className='block border border-grey-light w-full p-3 rounded mb-4'
						name='email'
						placeholder='Email'
					/>

					<input
						type='password'
						className='block border border-grey-light w-full p-3 rounded mb-4'
						name='password'
						placeholder='Password'
					/>

					<button className='flex justify-center w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-dark focus:outline-none my-1'>
						<FaArrowCircleRight size={24} />
					</button>
				</div>
			</div>
		</form>
	);
};

export default LoginForm;
