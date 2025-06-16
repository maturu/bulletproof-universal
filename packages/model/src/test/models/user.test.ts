import prisma from '@/lib/prisma'
import { createUserRepository } from '@/repositories'
import { createUserService } from '@/services'
import { userFactory } from '../factories/user'

describe('user', () => {
  const userRepository = createUserRepository()
  const userService = createUserService(userRepository)

  describe('.get', () => {
    it('response user data', async () => {
      const user = await userFactory.create()
      const response = await userService.get(user.id)

      expect(response).toBeDefined()
    })
  })

  describe('.create', () => {
    it('response user data', async () => {
      const user = await userFactory.build()
      await userService.create(user)

      expect(await prisma.user.count()).toBe(1)
    })
  })

  describe('.edit', () => {
    it('response user data', async () => {
      const defaultUser = await userFactory.create()
      const user = await userFactory.build({ name: 'rename user' })
      const res = await userService.edit(defaultUser.id, user)

      expect(user.name).toBe(res.name)
    })
  })

  describe('.destroy', () => {
    it('response user data', async () => {
      const user = await userFactory.create()
      await userService.destroy(user.id)

      expect(await prisma.user.count()).toBe(0)
    })
  })
})
