'use client';

import React, { useRef } from 'react';
import AppScreen from '../public/dashboard1.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
	const appImage = useRef<HTMLImageElement>(null);
	const { scrollYProgress } = useScroll({
		target: appImage,
		offset: ['start end', 'end end'],
	});
	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

	return (
		<section className='bg-gray-50'>
			<div className='max-w-7xl mx-auto px-6 py-16 md:py-20'>
				<div className='flex flex-col items-center justify-center overflow-hidden'>
					<div className='text-center'>
						<h1 className='font-bold text-6xl md:text-8xl tracking-tighter text-primary'>
							Finance Advisor
						</h1>
						<p className='mt-4 text-xl md:text-2xl'>
							Manage your money with AI-Driven personal
						</p>
					</div>
					<motion.div
						style={{
							opacity: opacity,
							rotateX: rotateX,
							transformPerspective: '500px',
						}}
					>
						<Image
							src={AppScreen}
							alt='The product screenshot'
							className='mt-8 sm:mt-14 border border-gray-200 rounded-2xl'
							height={720}
							width={1080}
							ref={appImage}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
