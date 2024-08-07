'use server';

import { connectDB } from 'lib/mongodb';
import Teacher from 'models/Teacher';
import User from 'models/User';

export const addToFavorites = async (userEmail, teacherId) => {
  try {
    // Connect to the database
    await connectDB();

    // Find the user by their email
    const user = await User.findOne({ email: userEmail });

    if (!user) {
      throw new Error('User not found');
    }

    // Find the teacher by their ID
    const teacher = await Teacher.findById(teacherId);

    if (!teacher) {
      throw new Error('Teacher not found');
    }

    // Check if the teacher is already in the user's favorites
    const isFavorite = teacher.liked.includes(user._id);

    if (isFavorite) {
      // If the teacher is already a favorite, remove them from the favorites
      teacher.liked.pull(user._id);
    } else {
      // If the teacher is not a favorite, add them to the favorites
      teacher.liked.push(user._id);
    }

    // Save the updated teacher document
    await teacher.save();

    // Return a boolean indicating the new state of the favorite
    return !isFavorite;
  } catch (error) {
    console.error('Error toggling favorite:', error);
    throw new Error('Error toggling favorite');
  }
};
