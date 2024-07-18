'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { Button } from '../ui/button';

const ClerkButton = () => {
	const { user, isSignedIn } = useUser();
	return (
		<>
			{isSignedIn ? (
				<UserButton
					appearance={{
						elements: {
							avatarBox: 'h-10 w-10',
						},
						variables: {
							colorPrimary: '#ff7000',
						},
					}}
				/>
			) : (
				<div className='flex items-center gap-2.5'>
					<Link href={'/dashboard'} className='outline-none'>
						<Button variant='outline' className='rounded-full font-semibold'>
							Dashboard
						</Button>
					</Link>
					<Link href={'/sign-in'} className='outline-none'>
						<Button className='rounded-full bg-primary font-semibold'>
							Get Started
						</Button>
					</Link>
				</div>
			)}
		</>
	);
};

export default ClerkButton;
