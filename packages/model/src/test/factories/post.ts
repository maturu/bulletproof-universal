import { UserFactoryInterface, definePostFactory } from '@/prisma/generated/fabbrica'
import { faker } from '@faker-js/faker'
import { userFactory } from './user'

const getUserFactory = (): UserFactoryInterface => userFactory

export const postFactory = definePostFactory({
  defaultData: () => ({
    author: getUserFactory(),
    content: faker.internet.url(),
    createdAt: faker.date.past(),
    published: false,
    title: faker.string.sample(),
    updatedAt: faker.date.recent(),
  }),
})
