import { UserRepository } from '@/repositories'
import { User, Prisma } from '@prisma/client'

export const createUserService = (userRepository: UserRepository) => {
  return {
    get: async (id: User['id']): Promise<User | null> => {
      return await userRepository.findById(id)
    },
    create: async (data: Prisma.UserCreateInput) => {
      return await userRepository.post(data)
    },
    edit: async (id: User['id'], data: Prisma.UserUpdateInput) => {
      return await userRepository.put(id, data)
    },
    destroy: async (id: User['id']) => {
      return await userRepository.delete(id)
    },
  }
}
