'use client';

import CustomButton from '@/components/CustomButton';
import TeachersList from '@/components/TeachersList';
import { fetchTeachers } from 'lib/operations';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalTeachers, setTotalTeachers] = useState(0);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/teachers')) {
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-snow-white');
    }
  }, [pathname]);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        setLoading(true);
        const { teachers, totalCount } = await fetchTeachers({ page });
        setTeachers(prevTeachers => [...prevTeachers, ...teachers]);
        setTotalTeachers(totalCount);
      } catch (error) {
        console.error('Error loading teachers: ', error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, [page]);

  console.log(teachers);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      {teachers.length > 0 && <TeachersList teachers={teachers} />}
      {teachers.length < totalTeachers && (
        <div className="mt-16 w-full flex justify-center">
          <CustomButton handleClick={handleLoadMore} otherStyles="px-12" isLoading={loading}>
            Load More
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default Teachers;
