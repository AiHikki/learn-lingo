import EmptyState from './EmptyState';
import TeacherCard from './TeacherCard';

const TeachersList = ({ teachers }) => {
  return (
    <ul className="flex flex-col gap-8">
      {teachers?.length > 0 ? (
        teachers.map(teacher => <TeacherCard teacher={teacher} key={teacher._id} />)
      ) : (
        <EmptyState />
      )}
    </ul>
  );
};

export default TeachersList;
