'use client';
import { Josefin_Sans } from 'next/font/google';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';

export interface NavButtonProps {
    children: React.ReactNode;
    href?: string;
}

const josefin_sans = Josefin_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function NavButton({ children, href }: NavButtonProps) {
    const router = useRouter();
    const pathname = usePathname();

    const handleScrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    };

    const handleRouteChange = () => {
        if (href) router.push(href);
    };

    const handleNavButtonClick = () => {
        if (href === '/impressum') return handleScrollToBottom();
        handleRouteChange();
    };
    return (
        <button
            onClick={handleNavButtonClick}
            className={`${josefin_sans.className} group relative font-bold cursor-pointer`}
        >
            {children}

            <div
                className={`${pathname === href ? 'w-full' : ''} w-0 absolute transition-all duration-300 h-1 group-hover:w-full rounded-full bg-black`}
            ></div>
        </button>
    );
}
