'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

import { navLinks } from '@/constants';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className='sidebar'>
      <div className='flex size-full flex-col gap-4'>
        <Link href='/' className='sidebar-logo'>
          <Image src='/logo-icon.png' alt='logo' width={28} height={28} />
          <span className='uppercase text-[#624cf5] font-semibold text-xl'>
            Quantum Snap AI
          </span>
        </Link>

        <nav className='sidebar-nav'>
          <SignedIn>
            <ul className='sidebar-nav_elements'>
              {navLinks.slice(0, 6).map((navLink) => {
                const isActive = navLink.route === pathname;

                return (
                  <li
                    key={navLink.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <Link className='sidebar-link' href={navLink.route}>
                      <Image
                        src={navLink.icon}
                        alt='icon'
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {navLink.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <Separator />

            <ul className='sidebar-nav_elements'>
              {navLinks.slice(6).map((navLink) => {
                const isActive = navLink.route === pathname;

                return (
                  <li
                    key={navLink.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? 'bg-purple-gradient text-white'
                        : 'text-gray-700'
                    }`}
                  >
                    <Link className='sidebar-link' href={navLink.route}>
                      <Image
                        src={navLink.icon}
                        alt='icon'
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {navLink.label}
                    </Link>
                  </li>
                );
              })}
              <li className='flex-center cursor-pointer gap-2 p-4'>
                <UserButton afterSignOutUrl='/' showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className='button bg-purple-gradient bg-cover'>
              <Link href='/sign-in'>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};
export default Sidebar;
