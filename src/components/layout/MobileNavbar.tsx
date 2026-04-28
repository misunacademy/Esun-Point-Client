'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { AlignLeft, LogOut, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import Image from 'next/image';
import { AuthUser } from '@/types/auth';

export default function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, signOut } = useAuth();
    const redirectBackUrl = process.env.NEXT_PUBLIC_EP_FRONTEND_URL!;
    const loginHref = `${process.env.NEXT_PUBLIC_MA_FRONTEND_URL || ''}/auth/login?redirect_url=${encodeURIComponent(redirectBackUrl)}`;
    const profileHref = `${process.env.NEXT_PUBLIC_MA_FRONTEND_URL || ''}/profile`;
    const isEnrolled = (user?.enrolledCourses?.length ?? 0) > 0;
    const userRole = (user as AuthUser | null)?.role;
    const canSeeClasses = !!userRole && userRole.toLowerCase() === 'learner';

    const handleLogout = async () => {
        await signOut();
        setIsOpen(false);
    };

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
                <Link
                    onClick={() => setIsOpen(!isOpen)}
                    href={`${process.env.NEXT_PUBLIC_MA_FRONTEND_URL}/`}
                    className="text-lg h-14 flex items-center border-b border-blue-500/20"
                >
                    Graphic Design path
                </Link>
                {user ? (
                    <>
                        <div className="py-4 border-b border-blue-500/20 flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full overflow-hidden border border-blue-500/40 flex items-center justify-center">
                                {user.image ? (
                                    <Image
                                        src={user.image}
                                        alt={user.name || 'User profile'}
                                        width={40}
                                        height={40}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <User className="h-5 w-5 text-blue-400" />
                                )}
                            </div>
                            <div className="min-w-0">
                                <p className="text-sm font-semibold truncate">{user.name || 'User'}</p>
                                <p className="text-xs text-white/60 truncate">{user.email}</p>
                            </div>
                        </div>
                        <Link
                            onClick={() => setIsOpen(false)}
                            href={profileHref}
                            className="text-lg h-14 flex items-center gap-2 border-b border-blue-500/20"
                        >
                            {/* <UserCircle className="h-5 w-5 text-blue-400" /> */}
                            Profile
                        </Link>
                        {
                            userRole === 'learner' && canSeeClasses && isEnrolled &&
                            <Link href={`${process.env.NEXT_PUBLIC_MA_FRONTEND_URL}/enrollment-posters`} className='text-lg h-14 flex items-center gap-2 border-b border-blue-500/20'>
                                {/* <FaRegFileAlt className=" h-5 w-5 text-blue-400" /> */}
                                Your Enrollment Posters
                            </Link>
                        }
                        {
                            userRole === 'learner' && canSeeClasses && isEnrolled &&
                            <Link href={`${process.env.NEXT_PUBLIC_MA_FRONTEND_URL}/my-classes/certificates`} className='text-lg h-14 flex items-center gap-2 border-b border-blue-500/20'>
                                {/* <FaRegFileAlt className=" h-5 w-5 text-blue-400" /> */}
                                Certificates
                            </Link>
                        }
                            {(userRole === 'admin' || userRole === 'superadmin' || userRole === 'instructor') ? (
                            <Link
                                onClick={() => setIsOpen(!isOpen)}
                                href={`${process.env.NEXT_PUBLIC_MA_FRONTEND_URL}/dashboard/${userRole}`}
                                className="text-lg h-14 flex items-center border-b border-primary/20 font-bangla"
                            >
                                Dashboard
                            </Link>
                        ) : null}
                        <button
                            type="button"
                            onClick={handleLogout}
                            className="text-lg h-14 flex items-center gap-2 border-b border-blue-500/20 text-red-400"
                        >
                            <LogOut className="h-5 w-5" />
                            Logout
                        </button>
                    </>
                ) : (
                    <Link
                        href={loginHref}
                        className="text-lg h-14 flex items-center border-b border-blue-500/20 text-blue-500"
                    >
                        Login
                    </Link>
                )}
                <div className='flex space-x-4 pt-6 pb-2'>
                    <Link
                        onClick={() => setIsOpen(!isOpen)}
                        href="/checkout"
                    >
                        <Button className='w-28 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 hover:from-blue-600 hover:via-blue-400 hover:to-blue-600 border-none text-white'>Enroll Now</Button>
                    </Link>
                </div>
            </div>
        </div >
    );
}
