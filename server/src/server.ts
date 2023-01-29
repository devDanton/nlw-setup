import Fastify from 'fastify'
import cors from '@fastify/cors'

import { PrismaClient } from '@prisma/client'
import { appRoutes } from './routes'

const app = Fastify()

//Permiti a conexão do front-end com o back-end
app.register(cors)

app.register(appRoutes)

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('HTTP Server Running')
  })
