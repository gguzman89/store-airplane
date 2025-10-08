import { Prisma } from "../../../generated/prisma";






export const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Hernan',
    email: 'hernan@prisma.io',
    posts: { 
      create: [
        { 
          title: 'Join the Prisma Discord',
          content: 'https://pris.ly/discord',
          published: true
        } 
      ]
    },
    profile: { create: { bio: 'I like butterflys' } },
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    posts: { 
      create: [
        {
          title: 'Follow Prisma on Twitter',
          content: 'https://pris.ly/twitter',
          published: true
        }
      ]
    }
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    posts: { 
      create: [
        {
          title: 'Prisma on YouTube',
          content: 'https://pris.ly/youtube',
        },
        {
          title: 'Ask a question about Prisma on GitHub',
          content: 'https://www.github.com/prisma/prisma/discussions',
          published: true
        }
      ]
    }
  },
]


