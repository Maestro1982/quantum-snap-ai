'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { navLinks } from '@/constants';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className='header'>
      <Link href='/' className='flex items-center gap-2 md:py-2'>
        <Image src='/logo-icon.png' alt='logo icon' width={26} height={26} />
        <span className='uppercase text-[#624cf5] font-semibold text-xl'>
          Quantum Snap AI
        </span>
      </Link>

      <nav className='flex gap-2'>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />

          <Sheet>
            <SheetTrigger>
              <Image
                src='/assets/icons/menu.svg'
                alt='menu'
                width={32}
                height={32}
                className='cursor-pointer'
              />
            </SheetTrigger>
            <SheetContent className='sheet-content sm:w-64'>
              <div className='flex'>
                <Image
                  src='/logo-icon.png'
                  alt='logo icon'
                  width={26}
                  height={26}
                />
                <span className='uppercase text-[#624cf5] font-semibold text-xl ml-1'>
                  Quantum Snap AI
                </span>
              </div>
              <>
                <ul className='header-nav_elements'>
                  {navLinks.map((navLink) => {
                    const isActive = navLink.route === pathname;

                    return (
                      <li
                        key={navLink.route}
                        className={`${
                          isActive && 'gradient-text'
                        } p-18 flex whitespace-nowrap text-dark-700`}
                      >
                        <Link
                          className='sidebar-link cursor-pointer'
                          href={navLink.route}
                        >
                          <Image
                            src={navLink.icon}
                            alt='icon'
                            width={24}
                            height={24}
                          />
                          {navLink.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className='button bg-purple-gradient bg-cover'>
            <Link href='/sign-in'>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};
export default MobileNav;
