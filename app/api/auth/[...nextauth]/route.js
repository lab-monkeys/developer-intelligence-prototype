import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const options = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  debug: false
}

export default NextAuth(options)