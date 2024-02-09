This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
Before anything, run those commands to install the different packages:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


Some features will throw an error, since you didn't add a data env.
- Go to `vercel.com` to deploy your project and start a database. 
- Then add the credentials of your database in a `.env`
- Run the following commands to create and seeds the tables needed:


```bash
npm run seed
# or
yarn run seed
# or
pnpm run seed
# or
bun run seed
```
