'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutDashboard, LogOut, UserCircle, User } from 'lucide-react';
import { FaCertificate, FaRegFileAlt } from 'react-icons/fa';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { AuthUser } from '@/types/auth';
import { canSeeClasses as checkCanSeeClasses, isAdminRole, getProfileHref, getDashboardHref, getEnrollmentPostersHref, getCertificatesHref } from '@/lib/auth-urls';

function UserDropdownMenu() {
  const { user, signOut } = useAuth();
  const safeUser = user as AuthUser | null;
  const userRole = safeUser?.role;
  const isEnrolled = (user?.enrolledCourses?.length ?? 0) > 0;
  const canSeeClasses = checkCanSeeClasses(userRole);

  if (!safeUser) return null;

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label="Open user menu"
          className="relative h-10 w-10 rounded-full border border-blue-500/40 transition-all duration-300 p-0 overflow-hidden hover:border-blue-500 hover:shadow-[0_0_15px_hsl(217_91%_60%/0.4)] flex items-center justify-center"
          type="button"
        >
          {safeUser.image ? (
            <Image
              src={safeUser.image}
              alt="User Avatar"
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          ) : (
            <User className="h-6 w-6 text-blue-500" />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2 z-[9999]" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{safeUser.name || 'User'}</p>
            <p className="text-xs leading-none text-muted-foreground">{safeUser.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={getProfileHref()} className="flex items-center">
            <UserCircle className="mr-2 h-4 w-4" />
            Profile
          </Link>
        </DropdownMenuItem>
        {userRole === 'learner' && canSeeClasses && isEnrolled && (
          <DropdownMenuItem asChild>
            <Link href={getEnrollmentPostersHref()}>
              <FaRegFileAlt className="mr-2 h-4 w-4" />
              Your Enrollment Posters
            </Link>
          </DropdownMenuItem>
        )}
        {userRole === 'learner' && canSeeClasses && isEnrolled && (
          <DropdownMenuItem asChild>
            <Link href={getCertificatesHref()}>
              <FaCertificate className="mr-2 h-4 w-4" />
              Certificates
            </Link>
          </DropdownMenuItem>
        )}
        {isAdminRole(userRole) && (
          <DropdownMenuItem asChild>
            <Link href={getDashboardHref(userRole || 'admin')} className="flex items-center">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem onClick={handleLogout} className="flex items-center text-red-600">
          <LogOut className="mr-2 h-4 w-4" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default memo(UserDropdownMenu);
