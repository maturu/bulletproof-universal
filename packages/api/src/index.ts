import { TRPCError } from '@trpc/server'
import { publicProcedure, router } from './lib/trpc'
import { createUserRepository, createUserService, UserSchema } from '@repo/model'

export const appRouter = router({
  health: publicProcedure.query(() => {
    console.log('health check')
    return { ok: true }
  }),
  userById: publicProcedure
    .input(UserSchema.pick({ id: true }))
    .output(UserSchema.nullable())
    .query(async ({ input }) => {
      try {
        const userRepository = createUserRepository()
        const userService = createUserService(userRepository)
        const user = await userService.get(input.id)
        return user
      } catch (error) {
        console.log(error)
        throw new TRPCError({ code: 'NOT_FOUND', cause: error })
      }
    }),
})

export type AppRouter = typeof appRouter
