Red Hat Developer Intelligence is a proof of concept prototype to demonstrate advanced analytics and insights, designed specifically for developers. It empowers them with valuable data-driven insights to enhance productivity and efficiency.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The user interface is built with [ShadCN UI](https://ui.shadcn.com/) and extended with [Tailwind CSS](https://tailwindcss.com/).

Note: These libraries are strictly used for rapid prototyping purposes. For long-term production use-cases, other libraries may be recommended.

## Getting Started

### Environment variables

First, you'll want to store environment variables locally so you can authenticate and access the application. Create a `.env.local` file in the root of your repository and add the following code:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

To create a `NEXTAUTH_SECRET` you can refer to [NextAuth options](https://next-auth.js.org/configuration/options)

To create a `GITHUB_ID` and `GITHUB_SECRET` you can refer to [GitHub provider options](https://next-auth.js.org/providers/github)

To create a `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` you can refer to [Google provider options](https://next-auth.js.org/providers/google)

### Run the local server

Next, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Sign in

The following sign in providers are supported:

- `GitHub`
- `Google (Red Hat accounts only)`

## Deployment

The application is deployed on [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) using auto deployment scripts. The production environment can be viewed at [https://developer-intelligence.vercel.app/](https://developer-intelligence.vercel.app/)