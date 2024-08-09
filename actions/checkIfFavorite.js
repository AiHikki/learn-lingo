'use server';

import { connectDB } from '@/lib/mongodb';
import User from '@/models/User';

export const checkIfFavorite = async (userEmail, teacherId) => {
  try {
    // Connect to the database
    await connectDB();

    // Find the user by their email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error('User not found');
    }

    // Check if the teacher's ID is in the user's favoriteTeachers list
    const isFavorite = user.favoriteTeachers.includes(teacherId);

    // Return true if the teacher is in the favorites, otherwise false
    return isFavorite;
  } catch (error) {
    console.log('Error checking favorite status:', error.message);
    return false; // Return false if there's an error
  }
};
