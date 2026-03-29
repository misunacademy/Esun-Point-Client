'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import Container from '../ui/container';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import MobileNavbar from './MobileNavbar';
import Image from 'next/image';
import MisunLogo from '@/assets/svg/esun-logo.svg';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { User, LogOut, Settings, UserCircle, LayoutDashboard, Sparkles } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import type { AuthUser } from '@/types/auth';

export default function Navbar() {
  const [isHydrated, setIsHydrated] = useState(false); // ensure SSR/CSR markup match
  const navbarRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();
  const router = useRouter();

  // Normalize role to the dashboard segment used in routes
  const getDashboardSegment = (role?: AuthUser['role']) => {
    const map: Record<AuthUser['role'], string> = {
      superadmin: 'admin',
      admin: 'admin',
      instructor: 'admin',
      learner: 'student',
    };
    return map[role ?? 'learner'] ?? 'student';
  };

  const handleLogout = async () => {
    const result = await signOut();
    if (result.success) {
      router.push('/');
    }
  };

  const handleEnrollClick = () => {
    import('@/lib/metaPixel').then(({ track }) =>
      track('InitiateCheckout', {
        content_name: 'English for Professional Communication',
        content_type: 'course',
        value: 3000,
        currency: 'BDT',
      })
    );
  };

  const redirectBackUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://english.maindomain.com';
  const loginHref = `${process.env.NEXT_PUBLIC_MA_FRONTEND_URL || ''}/auth/login?redirect_url=${encodeURIComponent(redirectBackUrl)}`;

  useEffect(() => {
    // Defer to next paint to avoid synchronous setState warning
    const id = requestAnimationFrame(() => setIsHydrated(true));
    return () => cancelAnimationFrame(id);
  }, []);


  // Use a safe user value that matches the server render until hydration completes
  const safeUser = isHydrated ? user : null;

  const userRole = (safeUser as AuthUser | null)?.role;
  const canSeeClasses = !!userRole && userRole.toLowerCase() === 'learner';

  return (
    <div
      ref={navbarRef}
      className="fixed text-white top-0 z-[999] w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#040a07] backdrop-blur-xl border-b border-blue-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
    >
      <Container className="relative z-50 max-w-7xl mx-auto">
        <nav className="h-16 flex items-center justify-between">
          <Link href="/">
            {/* <Logo /> */}
            <Image
              src={MisunLogo}
              alt="Misun Academy"
              width={100}
              height={100}
              priority
              fetchPriority="high"
              className="h-8 w-auto pl-4 md:pl-0"
            />
            {/* <h1 className="text-2xl font-bold text-primary">Misun Academy</h1> */}
          </Link>
          <div className="flex items-center space-x-8">
            <div
              className={cn(
                'transition-all duration-500 hidden md:flex items-center space-x-10 font-bold tracking-wide text-white text-xs',

              )}
            >
              {[
                { name: 'Home', path: '/' },
                { name: 'Course Details', path: '/courses' },
                // { name: 'Student Feedback', path: '/feedback' },
                { name: 'About Us', path: '/about' },
                { name: 'Graphic Design', path: `${process.env.NEXT_PUBLIC_MA_FRONTEND_URL}/` },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="relative group py-2"
                >
                  <span className="group-hover:text-blue-500 transition-colors duration-300">
                    {link.name}
                  </span>
                  {/* Hover Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ))}
              {canSeeClasses &&
                <Link
                  href={`${process.env.NEXT_PUBLIC_MA_FRONTEND_URL}/my-classes`}
                  className="relative group py-2"
                >
                  <span className="group-hover:text-blue-500 transition-colors duration-300">
                    My Classes
                  </span>
                  {/* Hover Underline effect */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              }
              {!safeUser ? (
                <Link
                  href={loginHref}
                  className={cn("relative group py-2 font-bold text-blue-400 ")}
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-500">Login</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300 ease-out" />
                </Link>
              ) : null}
              {/* <div className='flex items-end justify-end space-x-4'>
                <Link href={"/checkout"}>
                  <Button variant="creative" className='w-full sm:w-auto px-6 py-2 h-auto text-sm' onClick={() => {
                    // Use helper to ensure event is queued even if pixel isn't loaded yet
                    import('@/lib/metaPixel').then(({ track }) => track('InitiateCheckout', {
                      content_name: 'Graphic Design Course',
                      content_type: 'course',
                      value: 4000,
                      currency: 'BDT',
                    }));
                  }}>Enroll Now</Button>
                </Link>
              </div> */}
              <div className="flex items-center justify-end">
                <Link href="/checkout" className="w-full sm:w-auto block" onClick={handleEnrollClick} aria-label="Enroll now">
                  {/* Spinning glowing border wrapper */}
                  <div className="relative inline-flex p-[1.5px] rounded-full overflow-hidden
                    shadow-[0_4px_24px_rgba(59,130,246,0.35)]
                    hover:shadow-[0_8px_36px_rgba(59,130,246,0.60)]
                    hover:scale-105 hover:-translate-y-0.5
                    active:scale-95 active:translate-y-0
                    transition-all duration-300 ease-out">
                    {/* Rotating conic-gradient border */}
                    <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(217_91%_60%)_25%,hsl(217_85%_70%)_50%,hsl(217_91%_60%)_75%,transparent_100%)]" />
                    <span className="group relative overflow-hidden
                      inline-flex items-center gap-2
                      px-6 py-2
                      text-sm font-bold tracking-wide rounded-full
                      bg-gradient-to-r from-blue-700 via-blue-500 to-blue-600
                      text-white
                      hover:from-blue-600 hover:via-blue-400 hover:to-blue-600
                      transition-all duration-300 ease-out">
                      <span className="relative z-10 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-white animate-pulse" />
                        Enroll Now
                      </span>
                      {/* Shine sweep */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </span>
                  </div>
                </Link>
              </div>

              {/* User Menu */}
              {/* {safeUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" aria-label="Open user menu" className="relative h-10 w-10 rounded-full border border-blue-500/40 transition-all duration-300 p-0 overflow-hidden hover:border-blue-500 hover:shadow-[0_0_15px_hsl(217_91%_60%/0.4)]">
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
                    </Button>
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
                      <Link href={`/profile`} className="flex items-center">
                        <UserCircle className="mr-2 h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/${getDashboardSegment(userRole)}`} className="flex items-center">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/dashboard/${getDashboardSegment(userRole)}/settings`} className="flex items-center">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="flex items-center text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      Log out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : null} */}
            </div>
            <div className="md:hidden px-3">
              {/* <PhoneNavbar /> */}
              <MobileNavbar />
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
