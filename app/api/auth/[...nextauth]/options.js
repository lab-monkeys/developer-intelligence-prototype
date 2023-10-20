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
      wellKnown: "https://oauth-openshift.openshift-authentication.svc.cluster.local/.well-known/openid-configuration",
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