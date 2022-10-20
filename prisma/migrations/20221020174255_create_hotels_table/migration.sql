-- CreateTable
CREATE TABLE "hotels" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "price" INTEGER NOT NULL,
    "qtdAccomodations" INTEGER NOT NULL,

    CONSTRAINT "hotels_pkey" PRIMARY KEY ("id")
);
