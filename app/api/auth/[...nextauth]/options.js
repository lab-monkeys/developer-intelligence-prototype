import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import KeycloakProvider from "next-auth/providers/keycloak";

export const options = {
  providers: [
    {
      id: "openshift",
      name: "OpenShift",
      type: "oauth",
      issuer: "https://oauth-openshift.apps.sno-2.clg.lab",
      authorization: {
        url: "https://oauth-openshift.apps.sno-2.clg.lab/oauth/authorize",
        params: { scope: "user:full"}
      },
      token: "https://oauth-openshift.apps.sno-2.clg.lab/oauth/token",
      userinfo: "https://api.sno-2.clg.lab:6443/apis/user.openshift.io/v1/users/~",
      async profile(profile) {
        return {
          id: profile.metadata.name,
          name: profile.metadata.name
        }},
      clientId: process.env.OPENSHIFT_ID,
      clientSecret: process.env.OPENSHIFT_SECRET
    },
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_ID,
      clientSecret: process.env.KEYCLOAK_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  pages: {
    signIn: '/',
    signOut: '/',
  }
}
export default NextAuth(options)