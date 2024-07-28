import { UserButton } from '@clerk/nextjs';
import React from 'react';

const DashboardHeader = () => {
	return (
		<div className='fp-5 shadow-sm border-b flex justify-between'>
			<div></div>
			<div>
				<UserButton afterSignOutUrl='/' />
			</div>
		</div>
	);
};

export default DashboardHeader;
