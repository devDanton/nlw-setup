import Fastify from 'fastify'
import cors from '@fastify/cors'

import { PrismaClient } from '@prisma/client'

const app = Fastify()
//Conexão com o banco de dados
const prisma = new PrismaClient()

//Permiti a conexão do front-end com o back-end
app.register(cors)

/* Metodos HTTP: Get, Post, Put, Patch, Delete*/
app.get('/hello', async () => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running')
})