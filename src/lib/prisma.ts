import { PrismaClient } from '@prisma/client'

//Conexão com o banco de dados
export const prisma = new PrismaClient({
  log: ['query']
})
