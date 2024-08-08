'use client';

import CustomButton from '@/components/CustomButton';
import Filters from '@/components/Filters';
import TeachersList from '@/components/TeachersList';
import { fetchFavoriteTeachers } from 'lib/operations';
import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const FavoriteTeachers = () => {
  const { data: session } = useSession();
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/favorites')) {
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-snow-white');
    }
  }, [pathname]);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        setLoading(true);
        const { favoriteTeachers, totalPages, languages } = await fetchFavoriteTeachers({
          email: session?.user.email,
          page,
        });
        setTeachers(prevTeachers => [...prevTeachers, ...favoriteTeachers]);
        setLanguages(languages);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error loading teachers: ', error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, [session?.user.email, page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="w-full">
      <Filters languages={languages} />
      {teachers.length > 0 && <TeachersList teachers={teachers} />}
      {page < totalPages && teachers.length > 0 && (
        <div className="mt-16 w-full flex justify-center">
          <CustomButton handleClick={handleLoadMore} otherStyles="px-12" isLoading={loading}>
            Load More
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default FavoriteTeachers;
