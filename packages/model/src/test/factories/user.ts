import { defineUserFactory } from '@/prisma/generated/fabbrica'
import { faker } from '@faker-js/faker'

export const userFactory = defineUserFactory({
  defaultData: () => ({
    createdAt: faker.date.past(),
    email: faker.internet.email(),
    name: faker.internet.displayName(),
    updatedAt: faker.date.recent(),
  }),
})
