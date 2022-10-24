/*
  Warnings:

  - You are about to drop the column `qtdAccomodations` on the `hotels` table. All the data in the column will be lost.
  - Added the required column `qtdAccommodations` to the `hotels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hotels" DROP COLUMN "qtdAccomodations",
ADD COLUMN     "qtdAccommodations" INTEGER NOT NULL;
