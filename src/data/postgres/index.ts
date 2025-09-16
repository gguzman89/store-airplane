import { PrismaClient as Postgres } from '../../../generated/prisma'





export const postgres = new Postgres({
  log: ['query', 'info', 'warn', 'error'],
});


