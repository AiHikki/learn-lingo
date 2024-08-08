'use client';

import Link from 'next/link';
import Logo from './Logo';
import LoginButton from './LoginButton';
import RegistrationButton from './RegistrationButton';
import { signOut, useSession } from 'next-auth/react';
import LoginModal from './LoginModal';
import { useState } from 'react';
import SignUpModal from './SignUpModal';
import { IoPerson } from 'react-icons/io5';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const Nav = () => {
  const { status, data: session } = useSession();
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <LoginModal
        isOpen={loginIsOpen}
        closeModal={() => setLoginIsOpen(false)}
        openSignUpModal={() => setSignUpIsOpen(true)}
      />
      <SignUpModal
        isOpen={signUpIsOpen}
        closeModal={() => setSignUpIsOpen(false)}
        openLoginModal={() => setLoginIsOpen(true)}
      />

      <nav className="w-full px-32 mb-16 mt-5 flex justify-between items-center">
        <Logo />

        <ul className="flex gap-7 items-center">
          <li className={clsx(pathname === '/' && 'active_link_dot')}>
            <Link href="/" className="nav_link">
              Home
            </Link>
          </li>
          <li className={clsx(pathname === '/teachers' && 'active_link_dot')}>
            <Link href="/teachers" className="nav_link">
              Teachers
            </Link>
          </li>
          {status === 'authenticated' && (
            <li className={clsx(pathname === '/favorites' && 'active_link_dot')}>
              <Link href="/favorites" className="nav_link">
                Favorites
              </Link>
            </li>
          )}
        </ul>

        {status === 'authenticated' ? (
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-300 flex items-center justify-center">
                <IoPerson size={20} color="#fff" />
              </div>
              <span className="font-medium text-primary text-base">{session?.user?.name}</span>
            </div>
            <button
              className="border border-primary border-opacity-20 rounded-full h-12 px-10 text-base font-medium text-primary hover:border-orange-300 focus:border-orange-300 transition-colors"
              onClick={signOut}
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <LoginButton handleClick={() => setLoginIsOpen(true)} />
            <RegistrationButton handleClick={() => setSignUpIsOpen(true)} />
          </div>
        )}
      </nav>
    </>
  );
};

export default Nav;
