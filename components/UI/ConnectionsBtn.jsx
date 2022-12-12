import React from 'react';
import { FaDiscord, FaGoogle, FaGithub } from 'react-icons/fa';
import { signIn } from 'next-auth/react';

const ConnectionsBtn = () => {
	return (
		<button
			type='button'
			className='btn p-2 text-center cursor-pointer border rounded-2xl bg-blue-200 hover:bg-blue-300'
			onClick={() => signIn()}
		>
			<p>Login/Register with:</p>
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
		</button>
	);
};

export default ConnectionsBtn;
