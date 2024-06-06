import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import KeycloakProvider from "next-auth/providers/keycloak";

async function makeUserinfoRequest(context) {
  console.log(context)

  const res = await fetch(
    'https://kubernetes.default.svc/apis/user.openshift.io/v1/users/~',
    {
      headers: new Headers({
        'Authorization': 'Bearer '+context.tokens.access_token, 
        'Content-Type': 'application/json'
      }), 
    }
  )

  return res.json()
}

export const options = {
  providers: [
    {
      id: "openshift",
      name: "OpenShift",
      type: "oauth",
      wellKnown: "https://openshift.default.svc/.well-known/oauth-authorization-server",
      authorization: { params: { scope: "user:info" } },
      userinfo: {
        url: "https://kubernetes.default.svc/apis/user.openshift.io/v1/users/~",
        // The result of this method will be the input to the `profile` callback.
        async request(context) {
          // context contains useful properties to help you make the request.
          return await makeUserinfoRequest(context)
        }
      },
      profile(profile) {
        return {
          id: profile.metadata.uid,
          username: profile.metadata.name,
          name: profile.metadata.name,
          email: profile.metadata.name,
          groups: profile.groups
        }
      },
      clientId: process.env.OPENSHIFT_CLIENT_ID, // this should be a service account with name format system:serviceaccount:<namespace>:<serviceaccount name>
      clientSecret: process.env.OPENSHIFT_CLIENT_SECRET // this is the service account token, which can be extracted from a secret
    }
    // KeycloakProvider({
    //   clientId: process.env.KEYCLOAK_ID,
    //   clientSecret: process.env.KEYCLOAK_SECRET,
    //   issuer: process.env.KEYCLOAK_ISSUER,
    // }),
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // })
  ],
  pages: {
    signIn: '/',
    signOut: '/',
  }
}
export default NextAuth(options)