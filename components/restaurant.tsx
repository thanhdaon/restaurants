"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { ImageWithFallback } from "~/components/image-fallback";
import { Button } from "~/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/client";

interface RestaurantProps {
  id: string;
  rating: number;
  ratingCount: number;
  description: string;
  images: string[];
  name: string;
  isFavorite: boolean;
}

export function Restaurant(props: RestaurantProps) {
  return (
    <div className="space-y-2 max-w-fit relative">
      <FavoriteButton
        id={props.id}
        isFavorite={props.isFavorite}
        className="absolute top-0 right-0 rounded-full z-50 p-2 m-2"
      />
      <RestaurantCarousel images={props.images} />
      <div className="flex items-center justify-between">
        <p className="truncate font-bold max-w-72">{props.name}</p>
        <div className="flex items-center">
          <span className="text-yellow-400 mr-1">★</span>
          <span className="font-bold">
            {props.rating} ({props.ratingCount})
          </span>
        </div>
      </div>
      <p className="font-light">{props.description}</p>
    </div>
  );
}

interface FavoriteButtonProps {
  isFavorite: boolean;
  id: string;
  className?: string;
}

function FavoriteButton({ id, className, isFavorite }: FavoriteButtonProps) {
  const utils = api.useUtils();
  const addFavorite = api.restaurant.addFavorite.useMutation({
    onMutate: async () => {
      await utils.restaurant.getRestaurants.cancel();
      const snapshot = utils.restaurant.getRestaurants.getData();
      utils.restaurant.getRestaurants.setData(undefined, (restaurants) => {
        return restaurants?.map((r) =>
          r.id === id ? { ...r, isFavorite: true } : r
        );
      });

      return () => {
        utils.restaurant.getRestaurants.setData(undefined, snapshot);
      };
    },
    onError: (error, variables, rollback) => {
      rollback?.();
    },
    onSettled: () => {
      return utils.restaurant.getRestaurants.invalidate();
    },
  });

  const onAddFavorite = () => {
    if (isFavorite) {
      return;
    }
    addFavorite.mutate(id);
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(className, isFavorite ? "bg-white" : "bg-white/25")}
      onClick={onAddFavorite}
    >
      {isFavorite ? (
        <Heart className="h-6 w-6 text-red-700" style={{ fill: "#b91c1c" }} />
      ) : (
        <Heart className="h-6 w-6 text-white" />
      )}
    </Button>
  );
}

function RestaurantCarousel({ images }: { images: string[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel className="relative" setApi={setApi}>
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={image + index}>
            <ImageWithFallback
              priority
              alt=""
              src={image}
              fallbackSrc="/fallback.png"
              width={500}
              height={300}
              className="rounded-lg object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-2 left-1/2 flex space-x-2 transform -translate-x-1/2 bg-white/25 p-1.5 rounded-lg">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 w-1 rounded-full ${
              i + 1 === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
}
