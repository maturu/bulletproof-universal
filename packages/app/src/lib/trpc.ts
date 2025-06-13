import { AppRouter } from '@repo/api'
import { createTRPCReact } from '@trpc/react-query'

type Client = ReturnType<typeof createTRPCReact<AppRouter>>

export const client: Client = createTRPCReact<AppRouter>()
