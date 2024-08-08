'use server';

import { connectDB } from 'lib/mongodb';
import User from 'models/User';

export const toggleFavorite = async (userEmail, teacherId) => {
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

    if (isFavorite) {
      // If the teacher is already a favorite, remove them from the list
      user.favoriteTeachers.pull(teacherId);
    } else {
      // If the teacher is not a favorite, add them to the list
      user.favoriteTeachers.push(teacherId);
    }

    // Save the updated user document
    await user.save();

    // Return the new state (true if added to favorites, false if removed)
    return !isFavorite;
  } catch (error) {
    console.log('Error toggling favorite status:', error.message);
    throw new Error('Failed to toggle favorite');
  }
};
