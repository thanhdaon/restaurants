import { z } from "zod";
import { createRouter, publicProcedure } from "~/server/trpc";

export const restaurentRouter = createRouter({
  getRestaurants: publicProcedure.query(async ({ ctx }) => {
    const returns = await ctx.prisma.restaurant.findMany({
      orderBy: {
        rating: "desc",
      },
    });
    return returns;
  }),
  addFavorite: publicProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.restaurant.update({
        where: { id: input },
        data: {
          isFavorite: true,
        },
      });
    }),
});
