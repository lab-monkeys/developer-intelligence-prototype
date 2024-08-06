import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

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

const providers = [
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
]

// Conditionally add the basic auth provider in development mode
if (process.env.NODE_ENV === "development") {
  providers.push(
    CredentialsProvider({
      id: "local",
      name: "Local",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize(credentials) {
        if (credentials.username === "pelorus" && credentials.password === "pelorus") {
          return { id: 1, name: "pelorus", email: "pelorus@example.com" }
        }
        return null
      }
    })
  )
}

export const options = {
  providers,
  pages: {
    signIn: '/',
    signOut: '/',
  }
}

export default NextAuth(options)