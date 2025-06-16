import prisma from '@/lib/prisma'
import { User, Prisma } from '@prisma/client'

export const createUserRepository = () => {
  return {
    findById: async (id: User['id']) => {
      const user = await prisma.user.findUnique({ where: { id } })
      return user
    },
    post: async (data: Prisma.UserCreateInput) => {
      return await prisma.user.create({ data })
    },
    put: async (id: User['id'], data: Prisma.UserUpdateInput) => {
      return await prisma.user.update({ where: { id }, data })
    },
    delete: async (id: User['id']) => {
      return await prisma.user.delete({ where: { id } })
    },
  }
}

export type UserRepository = ReturnType<typeof createUserRepository>
