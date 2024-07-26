'use client';

import Link from 'next/link';
import Logo from './Logo';
import LoginButton from './LoginButton';
import RegistrationButton from './RegistrationButton';
import { useSession } from 'next-auth/react';

const Nav = () => {
  const session = useSession();

  return (
    <nav className="w-full px-32 mb-[30px] mt-5 flex justify-between items-center">
      <Logo />

      <ul className="flex gap-7 items-center">
        <li>
          <Link href="/" className="nav_link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/teachers" className="nav_link">
            Teachers
          </Link>
        </li>
        {session && (
          <li>
            <Link href="/favorites" className="nav_link">
              Favorites
            </Link>
          </li>
        )}
      </ul>

      <div className="flex items-center gap-4">
        <LoginButton />
        <RegistrationButton />
      </div>
    </nav>
  );
};

export default Nav;
