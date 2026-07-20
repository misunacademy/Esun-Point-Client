'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../ui/container';
import MisunLogo from '@/assets/svg/esun-logo.svg';
import NavLinks from './NavLinks';
import UserDropdownMenu from './UserDropdownMenu';
import AnimatedEnrollButton from './AnimatedEnrollButton';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [isHydrated, setIsHydrated] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsHydrated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <header
      ref={navbarRef}
      role="banner"
      className="fixed text-white top-0 z-[999] w-full transition-all duration-700 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] bg-[#040a07] backdrop-blur-xl border-b border-blue-500/20 shadow-[0_4px_24px_rgba(0,0,0,0.6)]"
    >
      <Container className="relative z-50 max-w-7xl mx-auto">
        <nav className="h-16 flex items-center justify-between" role="navigation" aria-label="Main navigation">
          <Link href="/">
            <Image
              src={MisunLogo}
              alt="Misun Academy"
              width={100}
              height={100}
              priority
              fetchPriority="high"
              className="h-8 w-auto pl-4 md:pl-0"
            />
          </Link>
          <div className="flex items-center space-x-8">
            <div className="transition-all duration-500 hidden md:flex items-center space-x-10 font-bold tracking-wide text-white text-xs">
              {isHydrated && <NavLinks />}
            </div>
            <div className="flex items-center justify-end gap-3">
              <AnimatedEnrollButton />
              {isHydrated && <UserDropdownMenu />}
            </div>
            <div className="md:hidden px-3">
              <MobileNavbar />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
