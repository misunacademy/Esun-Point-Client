'use client';

import { memo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { AuthUser } from '@/types/auth';
import { canSeeClasses as checkCanSeeClasses, getMyClassesHref, getGraphicDesignHref, getLoginHref } from '@/lib/auth-urls';
import { cn } from '@/lib/utils';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Course Details', path: '/course-details' },
  { name: 'About Us', path: '/about' },
  { name: 'Graphic Design', path: getGraphicDesignHref() },
];

function NavLinks() {
  const pathname = usePathname();
  const { user } = useAuth();
  const safeUser = user as AuthUser | null;
  const userRole = safeUser?.role;
  const canSeeClasses = checkCanSeeClasses(userRole);

  return (
    <>
      {LINKS.map((link) => {
        const isActive = pathname === link.path;
        return (
          <Link
            key={link.path}
            href={link.path}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
              "relative group py-2 transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              isActive ? "text-blue-400 font-extrabold" : "text-white/80 hover:text-white"
            )}
          >
            <span className="transition-colors duration-300">
              {link.name}
            </span>
            <span
              className={cn(
                "absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ease-out",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
      {canSeeClasses && (
        <Link
          href={getMyClassesHref()}
          className="relative group py-2 text-white/80 hover:text-white transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="transition-colors duration-300">
            My Classes
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
      )}
      {!safeUser && (
        <Link
          href={getLoginHref()}
          className="relative group py-2 font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <span className="transition-colors duration-300">Login</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
      )}
    </>
  );
}

export default memo(NavLinks);
