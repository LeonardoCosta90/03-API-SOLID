import { PrismaClient } from '@prisma/client'
import { beforeAll, afterAll, beforeEach } from 'vitest'

const prisma = new PrismaClient()

beforeAll(async () => {
  await prisma.$connect()
})

beforeEach(async () => {
  await prisma.user.deleteMany()
})

afterAll(async () => {
  await prisma.$disconnect()
})

export default prisma
