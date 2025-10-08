/*
  Warnings:

  - You are about to drop the column `categoria` on the `movimientos` table. All the data in the column will be lost.
  - You are about to drop the `stocks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipo` to the `movimientos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "public"."Categorias" ADD VALUE 'MERCADERIA_EGRESO';
ALTER TYPE "public"."Categorias" ADD VALUE 'MERCADERIA_TEMPORAL';

-- DropForeignKey
ALTER TABLE "public"."reservas" DROP CONSTRAINT "reservas_stockId_fkey";

-- AlterTable
ALTER TABLE "public"."movimientos" DROP COLUMN "categoria",
ADD COLUMN     "codOperacion" INTEGER,
ADD COLUMN     "precioUnitario" INTEGER,
ADD COLUMN     "tipo" "public"."Categorias" NOT NULL;

-- DropTable
DROP TABLE "public"."stocks";

-- CreateTable
CREATE TABLE "public"."stock" (
    "id" SERIAL NOT NULL,
    "empresa" INTEGER NOT NULL,
    "sucursal" INTEGER NOT NULL,
    "articulo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."temporary_movimientos" (
    "id" SERIAL NOT NULL,
    "empresa" INTEGER NOT NULL,
    "sucursal" INTEGER NOT NULL,
    "articulo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "descripcion" TEXT,
    "tipo" "public"."Categorias" NOT NULL,
    "comentario" TEXT,
    "codOperacion" INTEGER,
    "precioUnitario" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "temporary_movimientos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."reservas" ADD CONSTRAINT "reservas_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "public"."stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
