import './globals.css';
import Nav from '@/components/Nav';
import NextAuthProvider from '@/components/NextAuthProvider';
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
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(roboto.variable, 'font-sans')}>
        <NextAuthProvider>
          <Nav />
          <main className="app ">{children}</main>
          <div id="modals"></div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
