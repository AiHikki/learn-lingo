'use server';

import { connectDB } from 'lib/mongodb';
import User from 'models/User';
import Teacher from 'models/Teacher';

export const GET = async request => {
  try {
    // Connect to the database
    await connectDB();

    // Extract the user's email from the query parameters (assuming you pass it this way)
    const url = new URL(request.url);
    const userEmail = url.searchParams.get('email');

    if (!userEmail) {
      return new Response('Email is required', { status: 400 });
    }

    // Find the user by their email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      return new Response('User not found', { status: 404 });
    }

    // Find teachers liked by the user
    const favoriteTeachers = await Teacher.find({ liked: user._id });

    // Return the favorite teachers as JSON
    return new Response(JSON.stringify({ favoriteTeachers }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Failed to fetch favorite teachers:', error);
    return new Response('Failed to fetch favorite teachers', { status: 500 });
  }
};
