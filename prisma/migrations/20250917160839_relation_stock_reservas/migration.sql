/*
  Warnings:

  - Added the required column `stockId` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."reservas" ADD COLUMN     "stockId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."reservas" ADD CONSTRAINT "reservas_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "public"."stocks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
