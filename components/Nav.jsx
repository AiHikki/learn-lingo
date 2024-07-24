import Link from 'next/link';
import Logo from './Logo';
import LoginButton from './LoginButton';
import RegistrationButton from './RegistrationButton';

const Nav = () => {
  // ?
  const isLoggedIn = false;

  return (
    <nav className="w-full px-32 mb-[30px] mt-5 flex justify-between items-center">
      <Logo />

      <ul className="flex gap-7 items-center">
        <li>
          <Link href="/" className="text-primary font-normal text-base">
            Home
          </Link>
        </li>
        <li>
          <Link href="/teachers" className="text-primary font-normal text-base">
            Teachers
          </Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link href="/favorites" className="text-primary font-normal text-base">
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
