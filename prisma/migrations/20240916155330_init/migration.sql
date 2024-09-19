-- CreateTable
CREATE TABLE "Restaurant" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "ratingCount" INTEGER NOT NULL,
    "priceRange" TEXT NOT NULL,
    "isFavorite" BOOLEAN NOT NULL,
    "images" TEXT[],
    "featured" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Restaurant_pkey" PRIMARY KEY ("id")
);
