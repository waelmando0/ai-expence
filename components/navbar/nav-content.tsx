'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface MenuLink {
	route: string;
	label: string;
	active: React.ReactNode;
}

const NavContent = () => {
	const pathname = usePathname();

	const links: MenuLink[] = [
		{ route: '/', label: 'Home', active: pathname === `/` },
		{ route: '/about', label: 'About', active: pathname === `/about` },
	];

	return (
		<nav className='hidden sm:flex items-center'>
			<ul className='flex items-center gap-2.5'>
				{links.map((item) => (
					<li key={item.route}>
						<Link
							href={item.route}
							className={cn(
								'text-base font-medium transition-colors hover:text-black inline-flex items-center p-2',
								item.active
									? 'text-black dark:text-white'
									: 'text-neutral-500 dark:hover:text-white'
							)}
						>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavContent;
