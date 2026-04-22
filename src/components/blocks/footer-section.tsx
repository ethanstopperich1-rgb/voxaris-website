'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, LinkedinIcon, TwitterIcon } from 'lucide-react';
import voxarisLogo from '@/assets/logo.png';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Products',
		links: [
			{ title: 'AEO Services', href: '/products/aeo' },
			{ title: 'AI-Ready Websites', href: '/products/websites' },
			{ title: 'Talking Postcard', href: '/products/talking-postcard' },
			{ title: 'Staffing Agent', href: '/products/staffing' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'How It Works', href: '/how-it-works' },
			{ title: 'Why Voxaris', href: '/why-voxaris' },
			{ title: 'Blog', href: '/blog' },
			{ title: 'Contact', href: '/contact' },
			{ title: 'Book a Demo', href: '/book-demo' },
		],
	},
	{
		label: 'Platform',
		links: [
			{ title: 'See Your AI Visibility Score', href: 'https://audit.voxaris.io' },
			{ title: 'Customer App', href: 'https://app.voxaris.io' },
			{ title: 'Privacy', href: '/privacy' },
			{ title: 'Terms', href: '/terms' },
		],
	},
	{
		label: 'Social',
		links: [
			{ title: 'LinkedIn', href: 'https://www.linkedin.com/company/voxaris', icon: LinkedinIcon },
			{ title: 'X', href: 'https://x.com/voxaris', icon: TwitterIcon },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
			<div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

			<div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
				<AnimatedContainer className="space-y-4">
					<a href="/" aria-label="Voxaris home" className="inline-flex items-center">
						<img src={voxarisLogo} alt="Voxaris" className="h-20 md:h-24 w-auto object-contain" />
					</a>
					<p className="text-muted-foreground text-[15px] leading-relaxed max-w-[42ch]">
						AI voice, video, staffing, and AEO infrastructure that handles leads, books
						appointments, and makes your business visible to AI.
					</p>
					<a
						href="https://audit.voxaris.io"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-[13px] font-medium text-[hsl(var(--accent))] hover:opacity-80 transition"
					>
						See Your AI Visibility Score <ArrowRight className="h-3.5 w-3.5" />
					</a>
					<p className="text-muted-foreground mt-8 text-sm md:mt-0">
						© {new Date().getFullYear()} Voxaris, LLC. All rights reserved. · Last updated{' '}
						<time dateTime="2026-04-22">April 22, 2026</time>
					</p>
				</AnimatedContainer>

				<div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="mb-10 md:mb-0">
								<h3 className="text-xs">{section.label}</h3>
								<ul className="text-muted-foreground mt-4 space-y-2 text-sm">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												target={link.href.startsWith('http') ? '_blank' : undefined}
												rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
												className="hover:text-foreground inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
};
