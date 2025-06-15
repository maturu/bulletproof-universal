import { userFactory } from '@/test/factories/user'
import { PrismaClient, Prisma } from '@prisma/client'
import { resetSequence } from './generated/fabbrica'

const prisma = new PrismaClient()

export async function main() {
  resetSequence()
  const userData: Prisma.UserCreateInput[] = await userFactory.buildList(5)

  for (const u of userData) {
    await prisma.user.create({ data: u })
  }
}

main()
