'use server';

import { connectDB } from 'lib/mongodb';
import User from 'models/User';
import Teacher from 'models/Teacher';
import buildFilter from 'lib/buildFilter';

export const GET = async request => {
  try {
    // Connect to the database
    await connectDB();

    // Extract query parameters
    const { searchParams } = new URL(request.url);
    const userEmail = searchParams.get('email');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 4;
    const language = searchParams.get('language');
    const level = searchParams.get('level');
    const price = searchParams.get('price');

    const startIndex = (page - 1) * limit;

    if (!userEmail) {
      return new Response('Email is required', { status: 400 });
    }

    // Find the user by their email and populate the favoriteTeachers field
    const user = await User.findOne({ email: userEmail }).populate({
      path: 'favoriteTeachers',
      match: buildFilter(language, level, price), // Apply filter to favorite teachers
    });

    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    const filteredFavoriteTeachers = user.favoriteTeachers || [];
    const totalCount = filteredFavoriteTeachers.length;
    const totalPages = Math.ceil(totalCount / limit);

    const teachersToReturn = filteredFavoriteTeachers.slice(startIndex, startIndex + limit);

    const languages = await Teacher.aggregate([
      { $unwind: '$languages' },
      { $group: { _id: '$languages' } },
      { $sort: { _id: 1 } },
    ]);

    return new Response(
      JSON.stringify({ favoriteTeachers: teachersToReturn, totalPages, languages }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to fetch favorite teachers:', error);
    return new Response('Failed to fetch favorite teachers', { status: 500 });
  }
};
