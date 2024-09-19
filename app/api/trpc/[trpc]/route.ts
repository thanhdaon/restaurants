import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { prisma } from "~/server/db/db";
import { appRouter } from "~/server/routes";

// export const runtime = "edge";
// export const preferredRegion = ["sin1"];

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => {
      return { prisma };
    },
  });

export { handler as GET, handler as POST };
