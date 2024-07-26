'use client';

import TeachersList from '@/components/TeachersList';
import { fetchTeachers } from 'lib/operations';
import { useEffect, useState } from 'react';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetchTeachers().then(res => setTeachers(res));
  }, []);

  return (
    <div className="">
      <TeachersList teachers={teachers} />
    </div>
  );
};

export default Teachers;
