import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import { connectToDB } from 'lib/database';
import User from 'models/user';

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ profile }) {
      try {
        await connectToDB();

        // check if a user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new user
        if (!userExists) {
          await User.create({
            email: profile.email,
            name: profile.name,
            image: profile.picture,
          });
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    async session({ session }) {
      const sessionUser = User.findOne({ email: session.user.email });

      session.user.id = sessionUser._id.toString();

      return session;
    },
  },
});

export { handler as GET, handler as POST };
