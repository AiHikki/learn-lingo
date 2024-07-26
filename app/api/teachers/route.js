import { connectToDB } from 'lib/database';
import Teacher from 'models/teacher';

export const GET = async request => {
  try {
    await connectToDB();

    const teachers = await Teacher.find();

    return new Response(JSON.stringify(teachers), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all teachers', { status: 500 });
  }
};
