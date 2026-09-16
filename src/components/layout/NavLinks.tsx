'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { AuthUser } from '@/types/auth';
import { canSeeClasses as checkCanSeeClasses, getMyClassesHref, getGraphicDesignHref, getLoginHref } from '@/lib/auth-urls';

const LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Course Details', path: '/courses' },
  { name: 'About Us', path: '/about' },
  { name: 'Graphic Design', path: getGraphicDesignHref() },
];

function NavLinks() {
  const { user } = useAuth();
  const safeUser = user as AuthUser | null;
  const userRole = safeUser?.role;
  const canSeeClasses = checkCanSeeClasses(userRole);

  return (
    <>
      {LINKS.map((link) => (
        <Link key={link.path} href={link.path} className="relative group py-2">
          <span className="group-hover:text-blue-500 transition-colors duration-300">
            {link.name}
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
      ))}
      {canSeeClasses && (
        <Link href={getMyClassesHref()} className="relative group py-2">
          <span className="group-hover:text-blue-500 transition-colors duration-300">
            My Classes
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
      )}
      {!safeUser && (
        <Link href={getLoginHref()} className="relative group py-2 font-bold text-blue-400">
          <span className="transition-colors duration-300 group-hover:text-blue-500">Login</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
        </Link>
      )}
    </>
  );
}

export default memo(NavLinks);
