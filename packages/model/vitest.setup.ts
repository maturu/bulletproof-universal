import { initialize, resetSequence } from '@/prisma/generated/fabbrica'

beforeAll(() => {
  vi.mock('@/lib/prisma', async () => ({
    default: vPrisma.client,
  }))

  initialize({ prisma: () => vPrisma.client })
})

beforeEach(() => {
  resetSequence()
})
