import { Prisma } from "../../../generated/prisma";






export const userData: Prisma.StockCreateInput[] = [
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
]


