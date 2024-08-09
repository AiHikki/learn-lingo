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
import { motion } from 'framer-motion';

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

      <motion.nav
        className="w-full px-32 mb-16 mt-5 flex justify-between items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Logo />

        <motion.ul
          className="flex gap-7 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          <motion.li
            className={clsx(pathname === '/' && 'active_link_dot')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/" className="nav_link">
              Home
            </Link>
          </motion.li>
          <motion.li
            className={clsx(pathname === '/teachers' && 'active_link_dot')}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="/teachers" className="nav_link">
              Teachers
            </Link>
          </motion.li>
          {status === 'authenticated' && (
            <motion.li
              className={clsx(pathname === '/favorites' && 'active_link_dot')}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link href="/favorites" className="nav_link">
                Favorites
              </Link>
            </motion.li>
          )}
        </motion.ul>

        {status === 'authenticated' ? (
          <motion.div
            className="flex items-center gap-7"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-orange-300 flex items-center justify-center">
                <IoPerson size={20} color="#fff" />
              </div>
              <span className="font-medium text-primary text-base">{session?.user?.name}</span>
            </div>
            <button className="log_out_btn" onClick={signOut}>
              Log Out
            </button>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: 'easeOut' }}
          >
            <LoginButton handleClick={() => setLoginIsOpen(true)} />
            <RegistrationButton handleClick={() => setSignUpIsOpen(true)} />
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Nav;
