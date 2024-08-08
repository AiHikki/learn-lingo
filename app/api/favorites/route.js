'use server';

import { connectDB } from 'lib/mongodb';
import User from 'models/User';
import Teacher from 'models/Teacher';

export const GET = async request => {
  try {
    // Connect to the database
    await connectDB();

    // Extract the user's email from the query parameters (assuming you pass it this way)
    const { searchParams } = new URL(request.url);
    const userEmail = searchParams.get('email');
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 4;

    const startIndex = (page - 1) * limit;

    if (!userEmail) {
      return new Response('Email is required', { status: 400 });
    }

    // Find the user by their email and populate the favoriteTeachers field
    const user = await User.findOne({ email: userEmail })
      .populate('favoriteTeachers')
      .skip(startIndex)
      .limit(limit);

    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    const totalCount = user.favoriteTeachers.length;
    const totalPages = Math.ceil(totalCount / limit);

    const languages = await Teacher.aggregate([
      { $unwind: '$languages' },
      { $group: { _id: '$languages' } },
      { $sort: { _id: 1 } },
    ]);

    // Return the favorite teachers as JSON
    return new Response(
      JSON.stringify({ favoriteTeachers: user.favoriteTeachers, totalPages, languages }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error('Failed to fetch favorite teachers:', error);
    return new Response('Failed to fetch favorite teachers', { status: 500 });
  }
};
