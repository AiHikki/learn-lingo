'use server';

import bcrypt from 'bcryptjs';
import { connectDB } from 'lib/mongodb';
import User from 'models/user';

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
  } catch (e) {
    console.log(e);
  }
};
