import Navbar from './Navbar';
import Footer from './Footer';

import React from 'react';

const AppLayout = ({ children }) => {
	return (
		<div className={'min-h-screen flex flex-col'}>
			{children}
		</div>
	);
};

export default AppLayout;
