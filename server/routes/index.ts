import { restaurentRouter as restaurant } from "~/server/routes/restaurent";
import { createRouter } from "~/server/trpc";

export const appRouter = createRouter({
  restaurant,
});

export type AppRouter = typeof appRouter;
