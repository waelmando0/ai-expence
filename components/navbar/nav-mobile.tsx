import React from 'react';
import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { SignedOut } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet';
import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog';
import './nav-mobile.css';

const NavMobile = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<button aria-expanded='true'>
					<MenuIcon
						className='w-6 h-6 cursor-pointer'
						aria-hidden='true'
						focusable='false'
					/>
				</button>
			</SheetTrigger>
			<SheetContent side='top' className='dark:bg-accent bg-secondary px-6'>
				<DialogTitle asChild>
					<div className='visually-hidden'>Navigation Menu</div>
				</DialogTitle>
				<DialogDescription asChild>
					<div className='visually-hidden'>
						Main navigation menu for the application.
					</div>
				</DialogDescription>

				<Link href='/' className='text-bold text-2xl'>
					FinanSmart
				</Link>

				<div className='flex flex-col h-[50vh] gap-4 mt-8'>
					<div className='flex-1'>
						<SheetClose asChild>
							<ul>
								<li className='text-lg border-b border-gray-300 py-4'>
									<Link href='/'>test</Link>
								</li>
								<li className='text-lg border-b border-gray-300 py-4'>
									<Link href='/'>test</Link>
								</li>
								<li className='text-lg py-4'>
									<Link href='/'>test</Link>
								</li>
							</ul>
						</SheetClose>
					</div>

					<SignedOut>
						<div className='flex flex-col gap-4'>
							<SheetClose asChild>
								<Link href='/sign-in'>
									<Button
										className='w-full rounded-full'
										variant='outline'
										size='lg'
									>
										Log In
									</Button>
								</Link>
							</SheetClose>
							<SheetClose asChild>
								<Link href='/sign-up'>
									<Button className='w-full rounded-full' size='lg'>
										Sign Up
									</Button>
								</Link>
							</SheetClose>
						</div>
					</SignedOut>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default NavMobile;
