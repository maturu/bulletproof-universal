import { definePostFactory, UserFactoryInterface } from '../../../prisma/generated/fabbrica'
import { userFactory } from './user'
import { faker } from '@faker-js/faker'

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
