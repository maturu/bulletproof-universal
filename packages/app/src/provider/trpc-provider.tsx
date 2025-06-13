import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { client } from '../lib/trpc'
import { httpBatchLink } from '@trpc/client'

export function TRPCProvider({ children }: { children: React.ReactNode }): React.ReactNode {
  const [queryClient] = useState(() => new QueryClient({}))
  const [trpcClient] = useState(() =>
    client.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/api/trpc',
        }),
      ],
    })
  )

  return (
    <client.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </client.Provider>
  )
}
