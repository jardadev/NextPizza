import React from 'react';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer className='w-full h-16 bg-gray-600 border-t-2 border-white
		fixed left-0 bottom-0
		flex justify-center items-center
		text-white text-2xl'>
			<br />
			<span className='flex justify-center items-center text-sm underline p-1'>
				<Link href={'https://github.com/jardadev'}>
					Created by Aaron Jarda Johnson
				</Link>
			</span>
		</footer>
	);
};

export default Footer;
