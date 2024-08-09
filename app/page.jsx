'use client';

import CustomButton from '@/components/CustomButton';
import FeaturesItem from '@/components/FeaturesItem';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

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
      <div className="flex gap-6 mb-6">
        <div className="bg-snow-white rounded-3xl px-16 py-[98px]">
          <h1 className="font-medium text-5xl leading-tight text-primary mb-8">
            Unlock your potential with the best
            <i className="font-normal bg-orange-100 rounded-xl mx-2 px-2">language</i>
            tutors
          </h1>
          <p className="text-primary font-normal text-base mb-16">
            Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your
            language proficiency to new heights by connecting with highly qualified and experienced
            tutors.
          </p>

          <CustomButton handleClick={() => router.push('/teachers')} otherStyles="px-[88px]">
            Get started
          </CustomButton>
        </div>
        <div className="flex flex-shrink-0">
          <Image
            src="/assets/images/hero-image.png"
            alt="Smiling girl with a laptop"
            width={568}
            height={530}
            quality={100}
          />
        </div>
      </div>

      <ul className="py-10 flex justify-center gap-[100px] border border-orange-300 rounded-3xl">
        {features.map(({ title, subtitle }, i) => (
          <FeaturesItem key={i} title={title} subtitle={subtitle} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
