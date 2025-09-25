import { envs } from "./config";
import { postgres as prisma } from "./data";
import { userData } from "./data/postgres/seed";
import { stockData } from "./data/postgres/seed.stocks";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";






(async () => {
  main();
})();

async function main() {

  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  })

  await server.start()

  console.log("Hello World");

  // CREATE
  // await prisma.user.create({
  //   data: {
  //     name: "Alice",
  //     email: "alice@prisma.io",
  //     posts: {
  //       create: { title: "Hello World" },
  //     },
  //     profile: { 
  //       create: { bio: "I like turtles" } 
  //     },
  //   },
  // });

  // await prisma.post.create({
  //   data: {
  //     title: "My second post",
  //     author: { 
  //       connect: { email: 'alice@prisma.io' }
  //     }
  //   },
  // });

  // UPDATE
  // const post = await prisma.post.update({
  //   where: { id: 1 },
  //   data: { published: true },
  // });

  // READ
  // const rs = await prisma.stock.findMany({
    
  // });
  // const rs = await prisma.reserva
  // .findUnique({ where: { id: 2 }})
  // .stock()
  // .reservas();
  // const rs = await prisma.post.findMany({
  //   where:{
  //     OR: [
  //       { title: { contains: 'Prisma' } },
  //       { content: { contains: 'https' } }
  //     ]
  //   }
  // });
  
  // console.dir(rs, { depth: null });

  // SEED
  // const inserts = stockData.forEach(async (stock) => 
  //   await prisma.stock.create({ data: stock }));


  // console.log(`Inserted users records`);
  // console.log({ post });
}


