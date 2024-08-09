import { connectDB } from 'lib/mongodb';
import Teacher from 'models/Teacher';
import buildFilter from 'lib/buildFilter';

export const GET = async request => {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page')) || 1;
  const limit = parseInt(searchParams.get('limit')) || 4;

  const startIndex = (page - 1) * limit;

  // Extract filtration parameters from the query string
  const language = searchParams.get('language');
  const level = searchParams.get('level');
  const price = searchParams.get('price');

  try {
    await connectDB();

    // Build the filter object based on provided criteria
    const filter = buildFilter(language, level, price);

    const filteredCount = await Teacher.countDocuments(filter);
    const totalPages = Math.ceil(filteredCount / limit);

    const languages = await Teacher.aggregate([
      { $unwind: '$languages' },
      { $group: { _id: '$languages' } },
      { $sort: { _id: 1 } },
    ]);

    const teachers = await Teacher.find(filter).skip(startIndex).limit(limit);

    return new Response(JSON.stringify({ teachers, totalPages, languages }), {
      status: 200,
    });
  } catch (error) {
    return new Response('Failed to fetch all teachers', { status: 500 });
  }
};
