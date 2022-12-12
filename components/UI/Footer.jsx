import React from 'react';
import Link from 'next/link';
const Footer = () => {
	return (
		<footer>
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
