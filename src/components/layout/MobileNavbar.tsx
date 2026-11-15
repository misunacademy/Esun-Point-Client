'use client';

import { useEffect, useRef, useState } from 'react';
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

  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const panel = panelRef.current;
    const firstFocusable = panel?.querySelector<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        setIsOpen(false);
        toggleRef.current?.focus();
        return;
      }

      if (e.key !== 'Tab' || !panel) return;

      const focusables = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter(el => el.offsetParent !== null);

      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleLogout = async () => {
    await signOut();
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={toggleRef}
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[var(--z-modal)] p-3 -m-1.5 transition-colors text-blue-500 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation-menu"
        type="button"
      >
        {isOpen ? <X className="text-blue-500" size={24} /> : <AlignLeft className="text-blue-500" size={24} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[var(--z-overlay)]"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        ref={panelRef}
        id="mobile-navigation-menu"
        inert={!isOpen}
        className={cn(
          'absolute right-0 top-14 w-[calc(100vw-2rem)] max-w-sm bg-surface-darker border border-blue-500/20 shadow-2xl rounded-2xl px-6 pb-8 pt-5 flex flex-col transition-all z-[var(--z-modal)]',
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        )}
      >
        <Link onClick={() => setIsOpen(false)} href="/" className="text-base h-12 flex items-center border-b border-blue-500/20 hover:text-blue-400 transition-colors">Home</Link>
        <Link onClick={() => setIsOpen(false)} href="/course-details" className="text-base h-12 flex items-center border-b border-blue-500/20 hover:text-blue-400 transition-colors">Courses</Link>
        <Link onClick={() => setIsOpen(false)} href="/about" className="text-base h-12 flex items-center border-b border-blue-500/20 hover:text-blue-400 transition-colors">About Us</Link>
        <Link onClick={() => setIsOpen(false)} href={getGraphicDesignHref()} className="text-base h-12 flex items-center border-b border-blue-500/20 hover:text-blue-400 transition-colors">Graphic Design</Link>

        {safeUser ? (
          <>
            <div className="py-3 border-b border-blue-500/20 flex items-center gap-3">
              <div className="h-9 w-9 rounded-full overflow-hidden border border-blue-500/40 flex items-center justify-center">
                {safeUser.image ? (
                  <Image src={safeUser.image} alt={safeUser.name || 'User profile'} width={36} height={36} className="h-full w-full object-cover" />
                ) : (
                  <User className="h-5 w-5 text-blue-400" />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold truncate">{safeUser.name || 'User'}</p>
                <p className="text-xs text-white/60 truncate">{safeUser.email}</p>
              </div>
            </div>
            <Link onClick={() => setIsOpen(false)} href={getProfileHref()} className="text-base h-12 flex items-center gap-2 border-b border-blue-500/20 hover:text-blue-400 transition-colors">Profile</Link>
            {userRole === 'learner' && canSeeClasses && isEnrolled && (
              <Link onClick={() => setIsOpen(false)} href={getEnrollmentPostersHref()} className="text-base h-12 flex items-center gap-2 border-b border-blue-500/20 hover:text-blue-400 transition-colors">Your Enrollment Posters</Link>
            )}
            {userRole === 'learner' && canSeeClasses && isEnrolled && (
              <Link onClick={() => setIsOpen(false)} href={getCertificatesHref()} className="text-base h-12 flex items-center gap-2 border-b border-blue-500/20 hover:text-blue-400 transition-colors">Certificates</Link>
            )}
            {isAdminRole(userRole) && (
              <Link onClick={() => setIsOpen(false)} href={getDashboardHref(userRole || 'admin')} className="text-base h-12 flex items-center border-b border-primary/20 hover:text-blue-400 transition-colors">
                Dashboard
              </Link>
            )}
            <button type="button" onClick={handleLogout} className="text-base h-12 flex items-center gap-2 border-b border-blue-500/20 text-red-400 hover:text-red-300 transition-colors">
              <LogOut className="h-4 w-4" /> Logout
            </button>
          </>
        ) : (
          <Link onClick={() => setIsOpen(false)} href={getLoginHref()} className="text-base h-12 flex items-center border-b border-blue-500/20 text-blue-400 hover:text-blue-300 transition-colors">Login</Link>
        )}
        <div className="pt-5 pb-1">
          <Button asChild className="w-full bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600 hover:from-blue-600 hover:via-blue-400 hover:to-blue-600 border-none text-white font-bold">
            <Link onClick={() => setIsOpen(false)} href="/checkout" className="flex w-full items-center justify-center">
              Enroll Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
