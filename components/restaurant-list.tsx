"use client";

import { Restaurant } from "~/components/restaurant";
import { ScrollArea } from "~/components/ui/scroll-area";
import { api } from "~/trpc/client";
import { Skeleton } from "~/components/ui/skeleton";
import { LoadingBar } from "~/components/loading-bar";

export function RestaurantList() {
  const restaurants = api.restaurant.getRestaurants.useQuery();

  if (restaurants.isLoading) {
    return <RestaurantSkeletons length={3} />;
  }

  return (
    <>
      {restaurants.isFetching && <LoadingBar />}
      <ScrollArea>
        <div className="p-2 space-y-4">
          {restaurants.data?.map((r, index) => (
            <Restaurant key={index} {...r} />
          ))}
        </div>
      </ScrollArea>
    </>
  );
}

function RestaurantSkeletons({ length }: { length: number }) {
  return (
    <div className="space-y-4 h-dvh">
      {Array.from({ length }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-2">
          <Skeleton className="h-40 w-full rounded-md" />
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="h-6 w-10 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
}
