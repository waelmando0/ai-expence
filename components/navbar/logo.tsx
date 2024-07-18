import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
	return (
		<>
			<Link href='/' className='flex items-center'>
				<Image src={'/logo.svg'} alt='logo' width={40} height={25} />
				<span className='text-blue-800  font-bold text-xl ml-1'>
					FinanSmart
				</span>
			</Link>
		</>
	);
};

export default Logo;
