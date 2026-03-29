'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { AlignLeft, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const redirectBackUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://english.maindomain.com';
    const loginHref = `${process.env.NEXT_PUBLIC_MA_FRONTEND_URL || ''}/auth/login?redirect_url=${encodeURIComponent(redirectBackUrl)}`;

    return (
        <div className="relative ">
            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="transition-colors text-blue-500"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isOpen}
                aria-controls="mobile-navigation-menu"
                type="button"
            >
                {isOpen ? <X className='text-blue-500' size={28} /> : <AlignLeft className='text-blue-500' size={28} />}
            </button>

            {/* Mobile Menu */}
            <div
                id="mobile-navigation-menu"
                className={cn(
                    'absolute right-0 top-14 w-[365px] bg-[#040a07] mr-1 border border-blue-500/20 shadow-lg rounded-lg px-8 pb-10 pt-6 flex flex-col transition-all',
                    isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                )}
            >
                {/* <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/"
                    className="text-lg h-14 flex items-center border-b border-dark">
                    Home
                </Link> */}
                <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/"
                    className="text-lg h-14 flex items-center border-b border-blue-500/20"
                >
                    Home
                </Link>
                <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/courses"
                    className="text-lg h-14 flex items-center border-b border-blue-500/20"
                >
                    Courses
                </Link>
                {/* <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/feedback"
                    className="text-lg h-14 flex items-center border-b border-blue-500/20"
                >
                    Student Feedback
                </Link> */}
                <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/about"
                    className="text-lg h-14 flex items-center border-b border-blue-500/20"
                >
                    About Us
                </Link>
                {/* <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href="/blogs"
                    className="text-lg h-14 flex items-center border-b border-blue-500/20"
                >
                    Blogs
                </Link> */}
                <Link href={loginHref}
                    className="text-lg h-14 flex items-center border-b border-blue-500/20 text-blue-500"
                >
                    Login
                </Link>
                <div className='flex space-x-4 pt-6 pb-2'>
                    <Link
                        onClick={() => setIsOpen(!isOpen)}
                        href="/checkout"
                    >
                        <Button className='w-28 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 hover:from-blue-600 hover:via-blue-400 hover:to-blue-600 border-none text-white'>Enroll Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
