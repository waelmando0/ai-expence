import React from 'react';
import Logo from './navbar/logo';
import ClerkButton from './navbar/clerk-button';
import NavMobile from './navbar/nav-mobile';

const Header = () => {
	return (
		<header className='relative bg-white shadow-sm border-b border-gray-200'>
			<div className='max-w-7xl mx-auto px-6'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo */}
					<Logo />

					<div className='flex items-center space-x-5'>
						{/* BIGGER SCREENS */}
						<ClerkButton />

						{/* Mobile Menu */}
						{/* <div className='sm:hidden'>
							<NavMobile />
						</div> */}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
