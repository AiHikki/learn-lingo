'use server';

import bcrypt from 'bcryptjs';
import { connectDB } from 'lib/mongodb';
import User from 'models/user';
import { signIn } from 'next-auth/react';

export const register = async values => {
  const { email, password, name } = values;

  try {
    await connectDB();
    const userFound = await User.findOne({ email });
    if (userFound) {
      return {
        error: 'Email already exists!',
      };
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (signInResult?.error) {
      return {
        error: 'Failed to sign in after registration',
      };
    }

    return {
      success: true,
    };
  } catch (e) {
    console.log(e);
  }
};
