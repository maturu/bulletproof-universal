import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
  const client = new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : undefined,
  })
  // 接続はインスタンス生成時に 1 度だけ行う
  client.$connect().catch((e) => {
    console.error('[Prisma] Connection error:', e)
  })
  return client
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
}

export default prisma
