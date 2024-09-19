## Environments

- Nodejs 22
- Pnpm

## Scripts

### `dev`

Starts the development server using Next.js. This script enables hot-reloading and provides a development environment for building and testing your application.

### `start`

Starts the development server using Next.js. This script enables hot-reloading and provides a development environment for building and testing your application.

### `build`

Runs a sequence of commands to prepare the application for production:

1. prisma generate: Generates Prisma client code based on your Prisma schema.
2. prisma migrate deploy: Applies pending migrations to the database.
3. next build: Builds the Next.js application for production.

### `db:generate`

Generates Prisma client code based on your Prisma schema. This is typically used when you make changes to your schema and need to update the client code.

### `db:seed`

This script populates the database with mock data.

### `db:studio`

Opens Prisma Studio, a GUI for interacting with your database. This allows you to view and manage your data through an interactive interface.

### `db:migrate-dev`

Runs a sequence of commands for development database management:

1. prisma migrate dev: Applies any pending migrations and updates the database schema in development.
2. prisma generate: Generates Prisma client code based on the updated schema.

## Techstack

- NextJS 14 (App Router)
- TypeScript
- React 18
- PostgreSQL (Vercel)
- Prisma (Neon serverless adapter)
- tRPC + React-Query
- Tailwind CSS
- Radix UI (Shadcn-ui components collection build on top of Radix UI and Tailwindcss)
- Deployment on Vercel with trpc run on edge functions

## Main requirements

- Frontend

  1. [x] **React and TypeScript**: The frontend should be built using React and TypeScript.
  2. [x] **Restaurant List**: Display a list of restaurants identical to the provided Figma design. Each restaurant should have a name, description, rating, and an image.
  3. [x] **Mark as Favorite**: Allow users to mark a restaurant as a favorite. Favorites should be indicated with a heart icon.

- Backend
  1. [x] **TRPC**: The backend should be built using TRPC. If you are using nextjs, use edge functions to serve trpc endpoint.
  2. [x] **Database**: Use PostgreSQL to store restaurant data.
  3. [x] **Prisma ORM**: Use Prisma as the ORM for database interactions.
  4. [x] **Mock Data**: Use the provided mock data for the restaurant list. This data should be stored in the PostgreSQL database.
  5. [x] **API Endpoints**: Implement the following TRPC procedures:
  - `getRestaurants`: Retrieve all restaurants
  - `addFavorite`: Mark a restaurant as a favorite

## Additional UX

- Loading bar to indicate background Fetching of RQ
- Optimistic update when user click to **Mark as Favorite** heart icon.

## Known issue:

I'm experiencing an issue where the tRPC endpoint timesout after each successful requests. The issue may relate to connection pooling, serverless timeouts, or the Neon driver. I'm investigating potential solutions to handle this issue.

Note: This issue does not occur when using the Node.js runtime on Vercel.
