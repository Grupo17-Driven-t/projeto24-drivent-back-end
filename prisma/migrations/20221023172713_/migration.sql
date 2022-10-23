/*
  Warnings:

  - You are about to drop the column `eventId` on the `Ticket` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_eventId_fkey";

-- DropIndex
DROP INDEX "Ticket_eventId_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "eventId";
