import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 select-none outline-none">
      <motion.div
        whileHover={{ rotate: [0, 5, -5, 0], transition: { duration: 0.6 } }}
        className="flex items-center"
      >
        <Image src="/assets/icons/ukraine.svg" alt="Ukrainian flag" width={28} height={28} />
      </motion.div>
      <span className="font-medium text-xl text-primary">LearnLingo</span>
    </Link>
  );
};

export default Logo;
