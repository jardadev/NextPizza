import { signIn } from 'next-auth/react';
import { FaDiscord, FaGoogle, FaGithub } from 'react-icons/fa';
const Home = () => {
	return (
		<div>
			<h2 className='text-center font-bold'>Welcome Back!</h2>

			<div className='w-full max-w-xs flex flex-col items-center'>
				<form class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
					<div class='mb-4'>
						<label
							class='block text-gray-700 text-sm font-bold mb-2'
							for='username'
						>
							E-mail
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
							id='username'
							type='text'
							placeholder='john@example.com'
						/>
					</div>
					<div class='mb-6'>
						<label
							class='block text-gray-700 text-sm font-bold mb-2'
							for='password'
						>
							Password
						</label>
						<input
							class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
							id='password'
							type='password'
							placeholder='******************'
						/>
					</div>
					<div class='flex items-center justify-between'>
						<button
							class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
							type='button'
						>
							Sign In
						</button>
						{/* <a
							class='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800'
							href='#'
						>
							Forgot Password?
						</a> */}
					</div>
				</form>
				<div>
					<div className='py-3'>
						<p className='text-center'>OR</p>
						<hr />
					</div>
					<div
						className='p-2 flex flex-col text-center cursor-pointer border rounded-2xl justify-center items-center bg-blue-200'
						onClick={() => signIn()}
					>
						<p>Sign in with:</p>
						<ul className='flex justify-center'>
							<div className='flex gap-1'>
								<li>
									<FaDiscord size={16} />
								</li>
								<li>
									<FaGoogle size={16} />
								</li>
								<li>
									<FaGithub size={16} />
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
