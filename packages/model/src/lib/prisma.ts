import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  return new PrismaClient({ log: process.env.NODE_ENV == 'development' ? ['query'] : undefined })
}

let prisma: PrismaClient

declare global {
  // eslint-disable-next-line no-var
  var __db__: PrismaClient | undefined
}

if (process.env.NODE_ENV === 'production') {
  prisma = prismaClientSingleton()
} else {
  if (!global.__db__) {
    global.__db__ = prismaClientSingleton()
  }
  prisma = global.__db__
  prisma.$connect()
}

export default prisma
