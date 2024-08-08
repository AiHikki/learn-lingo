import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 select-none outline-none">
      <Image src="/assets/icons/ukraine.svg" alt="Ukrainian flag" width={28} height={28} />
      <span className="font-medium text-xl text-primary">LearnLingo</span>
    </Link>
  );
};

export default Logo;
