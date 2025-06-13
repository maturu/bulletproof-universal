import { publicProcedure, router } from './lib/trpc'
import { UserSchema } from '@repo/model/schema'
import { createUserRepository, createUserService } from '@repo/model'

export const appRouter = router({
  health: publicProcedure.query((args) => {
    console.log('health check')
    return args.signal
  }),
  userById: publicProcedure
    .input(UserSchema.pick({ id: true }))
    .output(UserSchema.nullable())
    .query(async ({ input }) => {
      const userRepository = createUserRepository()
      const userService = createUserService(userRepository)
      const user = await userService.get(input.id)
      return user
    }),
})

export type AppRouter = typeof appRouter
