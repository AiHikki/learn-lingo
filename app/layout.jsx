import './globals.css';
import Nav from '@/components/Nav';
import clsx from 'clsx';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '500', '700', '900'],
});

export const metadata = {
  title: 'LearnLingo',
  description:
    'Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className={clsx('app', roboto.variable, 'font-sans')}>
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
