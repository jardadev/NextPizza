import Navbar from './UI/Navbar';
import Footer from './UI/Footer';

import React from 'react';

const AppLayout = ({ children }) => {
	return (
		<div className={'min-h-screen justify-between flex flex-col'}>
			{children}
		</div>
	);
};

export default AppLayout;
