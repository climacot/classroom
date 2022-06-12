import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  theme: {
    colorScheme: 'light'
  },
  callbacks: {
    async session({ session, token }) {
      session.user.uid = token.sub
      return session
    }
  },
  async jwt({ token, account }) {
    console.log(token)
    // Persist the OAuth access_token to the token right after signin
    if (account) {
      token.accessToken = account.access_token
    }
    return token
  }
})
