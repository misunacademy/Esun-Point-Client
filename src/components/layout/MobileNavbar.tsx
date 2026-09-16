'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { AlignLeft, LogOut, User, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { AuthUser } from '@/types/auth';
import {
  canSeeClasses as checkCanSeeClasses,
  isAdminRole,
  getLoginHref,
  getProfileHref,
  getDashboardHref,
  getEnrollmentPostersHref,
  getCertificatesHref,
  getGraphicDesignHref,
} from '@/lib/auth-urls';

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const safeUser = user as AuthUser | null;
  const userRole = safeUser?.role;
  const isEnrolled = (user?.enrolledCourses?.length ?? 0) > 0;
  const canSeeClasses = checkCanSeeClasses(userRole);

  const handleLogout = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="transition-colors text-blue-500"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        type="button"
      >
        {isOpen ? <X className="text-blue-500" size={28} /> : <AlignLeft className="text-blue-500" size={28} />}
      </button>

      <div
        id="mobile-navigation-menu"
        className={cn(
          'absolute right-0 top-14 w-[365px] bg-[#040a07] mr-1 border border-blue-500/20 shadow-lg rounded-lg px-8 pb-10 pt-6 flex flex-col transition-all',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <Link onClick={() => setIsOpen(!isOpen)} href="/" className="text-lg h-14 flex items-center border-b border-blue-500/20">Home</Link>
        <Link onClick={() => setIsOpen(!isOpen)} href="/courses" className="text-lg h-14 flex items-center border-b border-blue-500/20">Courses</Link>
        <Link onClick={() => setIsOpen(!isOpen)} href="/about" className="text-lg h-14 flex items-center border-b border-blue-500/20">About Us</Link>
        <Link onClick={() => setIsOpen(!isOpen)} href={getGraphicDesignHref()} className="text-lg h-14 flex items-center border-b border-blue-500/20">Graphic Design</Link>

        {safeUser ? (
          <>
            <div className="py-4 border-b border-blue-500/20 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-blue-500/40 flex items-center justify-center">
                {safeUser.image ? (
                  <Image src={safeUser.image} alt={safeUser.name || 'User profile'} width={40} height={40} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-5 w-5 text-blue-400" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{safeUser.name || 'User'}</p>
                <p className="text-xs text-white/60 truncate">{safeUser.email}</p>
              </div>
            </div>
            <Link onClick={() => setIsOpen(false)} href={getProfileHref()} className="text-lg h-14 flex items-center gap-2 border-b border-blue-500/20">Profile</Link>
            {userRole === 'learner' && canSeeClasses && isEnrolled && (
              <Link href={getEnrollmentPostersHref()} className="text-lg h-14 flex items-center gap-2 border-b border-blue-500/20">Your Enrollment Posters</Link>
            )}
            {userRole === 'learner' && canSeeClasses && isEnrolled && (
              <Link href={getCertificatesHref()} className="text-lg h-14 flex items-center gap-2 border-b border-blue-500/20">Certificates</Link>
            )}
            {isAdminRole(userRole) && (
              <Link onClick={() => setIsOpen(!isOpen)} href={getDashboardHref(userRole || 'admin')} className="text-lg h-14 flex items-center border-b border-primary/20">
                Dashboard
              </Link>
            )}
            <button type="button" onClick={handleLogout} className="text-lg h-14 flex items-center gap-2 border-b border-blue-500/20 text-red-400">
              <LogOut className="h-5 w-5" /> Logout
            </button>
          </>
        ) : (
          <Link href={getLoginHref()} className="text-lg h-14 flex items-center border-b border-blue-500/20 text-blue-500">Login</Link>
        )}
        <div className="flex space-x-4 pt-6 pb-2">
          <Link onClick={() => setIsOpen(!isOpen)} href="/checkout">
            <Button className="w-28 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 hover:from-blue-600 hover:via-blue-400 hover:to-blue-600 border-none text-white">Enroll Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
