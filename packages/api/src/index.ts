import { publicProcedure, router } from './lib/trpc'
import { createUserRepository, createUserService, UserSchema } from '@repo/model'

export const appRouter = router({
  health: publicProcedure.query((args) => {
    console.log('health check')
    return args.signal
  }),
  userById: publicProcedure
    .input(UserSchema.pick({ id: true }))
    .output(UserSchema.nullable())
    .query(async ({ input }) => {
      try {
        const userRepository = createUserRepository()
        const userService = createUserService(userRepository)
        const user = await userService.get(input.id)
        console.log(user)
        return user
      } catch (error) {
        console.log(error)
        return null
      }
    }),
})

export type AppRouter = typeof appRouter
