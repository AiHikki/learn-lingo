'use client';

import Link from 'next/link';
import Logo from './Logo';
import LoginButton from './LoginButton';
import RegistrationButton from './RegistrationButton';
import { signOut, useSession } from 'next-auth/react';
import LoginModal from './LoginModal';
import { useState } from 'react';
import SignUpModal from './SignUpModal';

const Nav = () => {
  const { status } = useSession();
  const [loginIsOpen, setLoginIsOpen] = useState(false);
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);

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
          {status === 'authenticated' && (
            <li>
              <Link href="/favorites" className="nav_link">
                Favorites
              </Link>
            </li>
          )}
        </ul>

        {status === 'authenticated' ? (
          <div>
            <button onClick={signOut}>Log Out</button>
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
