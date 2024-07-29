import TeacherCard from './TeacherCard';

const TeachersList = ({ teachers }) => {
  return (
    <ul className="flex flex-col gap-8">
      {teachers.map(teacher => (
        <TeacherCard teacher={teacher} key={teacher._id} />
      ))}
    </ul>
  );
};

export default TeachersList;
