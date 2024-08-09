'use client';

import CustomButton from '@/components/CustomButton';
import Filters from '@/components/Filters';
import TeachersList from '@/components/TeachersList';
import { fetchTeachers } from 'lib/operations';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [languages, setLanguages] = useState([]);
  const [filters, setFilters] = useState({
    language: '',
    level: '',
    price: '',
  });
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/teachers')) {
      document.body.classList.remove('bg-white');
      document.body.classList.add('bg-snow-white');
    }
  }, [pathname]);

  // useEffect(() => {
  //   const loadTeachers = async () => {
  //     console.log('On filters change');

  //     try {
  //       setLoading(true);
  //       const { teachers, totalPages, languages } = await fetchTeachers({ page, ...filters });
  //       setTeachers(prevTeachers => [...prevTeachers, ...teachers]);
  //       setTotalPages(totalPages);
  //       setLanguages(languages);
  //     } catch (error) {
  //       console.error('Error loading teachers: ', error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadTeachers();
  // }, [page, filters]);

  useEffect(() => {
    const loadTeachers = async () => {
      try {
        setLoading(true);
        // Reset page number and teachers list when filters change
        setPage(1);
        const { teachers, totalPages, languages } = await fetchTeachers({ page: 1, ...filters });
        setTeachers(teachers);
        setTotalPages(totalPages);
        setLanguages(languages);
      } catch (error) {
        console.error('Error loading teachers: ', error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, [filters]);

  useEffect(() => {
    const loadTeachers = async () => {
      if (page === 1) return;
      try {
        setLoading(true);
        const { teachers, totalPages } = await fetchTeachers({ page, ...filters });
        setTeachers(prevTeachers => [...prevTeachers, ...teachers]);
        setTotalPages(totalPages);
      } catch (error) {
        console.error('Error loading teachers: ', error.message);
      } finally {
        setLoading(false);
      }
    };

    loadTeachers();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const updateFilter = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  return (
    <div className="w-full">
      <Filters languages={languages} updateFilter={updateFilter} />
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

export default Teachers;
