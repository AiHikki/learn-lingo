'use client';

import CustomButton from '@/components/CustomButton';
import FeaturesItem from '@/components/FeaturesItem';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      document.body.classList.remove('bg-snow-white');
      document.body.classList.add('bg-white');
    }
  }, [pathname]);

  const features = [
    {
      title: '32,000',
      subtitle: 'Experienced tutors',
    },
    {
      title: '300,000',
      subtitle: '5-star tutor reviews',
    },
    {
      title: '120',
      subtitle: 'Subjects taught',
    },
    {
      title: '200',
      subtitle: 'Tutor nationalities',
    },
  ];

  return (
    <div className="bg-white">
      <motion.div
        className="flex gap-6 mb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.div
          className="bg-snow-white rounded-3xl px-16 py-[98px]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        >
          <motion.h1
            className="font-medium text-5xl leading-tight text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          >
            Unlock your potential with the best
            <i className="font-normal bg-orange-100 rounded-xl mx-2 px-2">language</i>
            tutors
          </motion.h1>
          <motion.p
            className="text-primary font-normal text-base mb-16"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: 'easeOut' }}
          >
            Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your
            language proficiency to new heights by connecting with highly qualified and experienced
            tutors.
          </motion.p>

          {/* No animation on button */}
          <CustomButton handleClick={() => router.push('/teachers')} otherStyles="px-[88px]">
            Get started
          </CustomButton>
        </motion.div>
        <div className="flex flex-shrink-0">
          {/* No animation on image */}
          <Image
            src="/assets/images/hero-image.png"
            alt="Smiling girl with a laptop"
            width={568}
            height={530}
            quality={100}
          />
        </div>
      </motion.div>

      <motion.ul
        className="py-10 flex justify-center gap-[100px] border border-orange-300 rounded-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1, ease: 'easeOut' }}
      >
        {features.map(({ title, subtitle }, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2, ease: 'easeOut' }}
          >
            <FeaturesItem title={title} subtitle={subtitle} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Home;
