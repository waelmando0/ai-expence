import type { Metadata } from 'next';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '../components/header';
import { cn } from '@/lib/utils';
import { fontSans } from '@/lib/fonts';

export const metadata: Metadata = {
	title: 'Financial Smart',
	description: 'AI powered financial advisor',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body
					className={cn('antialiased font-sans', fontSans.variable)}
					suppressHydrationWarning={true}
				>
					<div className='relative flex min-h-screen flex-col'>
						<Header />
						<main className='flex-1'>{children}</main>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
