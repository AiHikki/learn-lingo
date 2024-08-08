import { connectDB } from 'lib/mongodb';
import Teacher from 'models/Teacher';

export const GET = async request => {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 4;

  const startIndex = (page - 1) * limit;

  try {
    await connectDB();

    const totalCount = await Teacher.countDocuments();
    const totalPages = Math.ceil(totalCount / limit);
    const teachers = await Teacher.find().skip(startIndex).limit(limit);

    const languages = await Teacher.aggregate([
      { $unwind: '$languages' },
      { $group: { _id: '$languages' } },
      { $sort: { _id: 1 } },
    ]);

    return new Response(JSON.stringify({ teachers, totalPages, languages }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch all teachers', { status: 500 });
  }
};
