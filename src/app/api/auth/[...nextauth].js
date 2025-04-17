// import { authController } from "@/api/controllers/auth";
// import NextAuth from "next-auth";
// import Credentials from "next-auth/providers/credentials";

// export const handler = NextAuth({
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { username, password } = credentials;
//         try {
//           const res = await authController().signIn({ username, password });
//           return res.data;
//         } catch (err) {
//           console.log(err);
//           throw new Error(JSON.stringify(err));
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.access_token = user.access_token;
//         token.profile = user.profile;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (token && token.access_token) {
//         session.access_token = token.access_token;
//         session.profile = token.profile;
//       }
//       return session;
//     },
//   },
//   pages: {
//     signIn: "/sign-in",
//   },
//   secret: process.env.NEXT_PUBLIC_SECRET_KEY,
// });

// export { handler as GET, handler as POST };
