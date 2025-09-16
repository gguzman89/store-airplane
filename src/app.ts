import { postgres as prisma } from "./data";
import { userData } from "./data/postgres/seed";






(async () => {
  main();
})();

async function main() {
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
  const rs = await prisma.user.findMany({
    include: { posts: true, profile: true },
  });
  // const rs = await prisma.profile
  // .findUnique({ where: { id: 1 }})
  // .user()
  // .posts();
  // const rs = await prisma.post.findMany({
  //   where:{
  //     OR: [
  //       { title: { contains: 'Prisma' } },
  //       { content: { contains: 'https' } }
  //     ]
  //   }
  // });
  
  console.dir(rs, { depth: null });

  // SEED
  // const inserts = userData.forEach(async (user) => 
  //   await prisma.user.create({ data: user }));


  // console.log(`Inserted users records`);
  // console.log({ post });
}


