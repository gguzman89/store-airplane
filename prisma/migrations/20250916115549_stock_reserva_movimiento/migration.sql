-- CreateEnum
CREATE TYPE "public"."EstadosReserva" AS ENUM ('PENDIENTE', 'COMPLETADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "public"."Categorias" AS ENUM ('MERCADERIA', 'ANULACION', 'VENTAS');

-- CreateTable
CREATE TABLE "public"."stocks" (
    "id" SERIAL NOT NULL,
    "empresa" INTEGER NOT NULL,
    "sucursal" INTEGER NOT NULL,
    "articulo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stocks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."reservas" (
    "id" SERIAL NOT NULL,
    "empresa" INTEGER NOT NULL,
    "sucursal" INTEGER NOT NULL,
    "articulo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "estado" "public"."EstadosReserva" NOT NULL DEFAULT 'PENDIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."movimientos" (
    "id" SERIAL NOT NULL,
    "empresa" INTEGER NOT NULL,
    "sucursal" INTEGER NOT NULL,
    "articulo" INTEGER NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "descripcion" TEXT,
    "categoria" "public"."Categorias" NOT NULL,
    "comentario" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movimientos_pkey" PRIMARY KEY ("id")
);
