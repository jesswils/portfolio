import React from 'react';
import Wrapper from './_components/Wrapper';
import Navbar from '../components/Navbar';

const page = () => {
	return (
		<div className='flex place-items-baseline my-auto items-baseline mx-auto'>
			<Navbar />
			<Wrapper />
		</div>
	);
};

export default page;
