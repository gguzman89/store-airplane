import { Prisma } from "../../../generated/prisma";






export const stockData: Prisma.StockCreateInput[] = [
  {
    empresa: 15,
    sucursal: 1,
    articulo: 22,
    cantidad: 100,
    reservas: { 
      create: [
        {
          empresa: 15,
          sucursal: 1,
          articulo: 22,
          cantidad: 6,
        },
        {
          empresa: 15,
          sucursal: 1,
          articulo: 22,
          cantidad: 4,
        },
      ]
    },
  },
  {
    empresa: 13,
    sucursal: 3,
    articulo: 22,
    cantidad: 20,
  },
  {
    empresa: 7,
    sucursal: 2,
    articulo: 22,
    cantidad: 11,
  }
]


