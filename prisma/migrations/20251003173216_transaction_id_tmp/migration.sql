/*
  Warnings:

  - Added the required column `transactionId` to the `temporary_movimientos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."temporary_movimientos" ADD COLUMN     "transactionId" TEXT NOT NULL;
