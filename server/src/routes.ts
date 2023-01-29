import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'
import { z } from 'zod'
import dayjs from 'dayjs'

export async function appRoutes(app: FastifyInstance) {
  /* Metodos HTTP: Get, Post, Put, Patch, Delete*/
  app.post('/habits', async request => {
    const createHabitBody = z.object({
      title: z.string(),
      weekdays: z.array(z.number().min(0).max(6))
    })

    const today = dayjs().startOf('day').toDate()

    const { title, weekdays } = createHabitBody.parse(request.body)

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekdays.map(weekdays => {
            return {
              week_day: weekdays
            }
          })
        }
      }
    })
  })

  app.get('/day', async request => {
    const getDayParams = z.object({
      date: z.coerce.date()
    })

    const { date } = getDayParams.parse(request.query)

    const parsedDate = dayjs(date).startOf('day')
    const weekDay = parsedDate.get('day')

    console.log(date, weekDay)

    // todos hábitos possíveis
    // habitos que ja foram completados

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date
        },
        weekDays: {
          some: {
            week_day: weekDay
          }
        }
      }
    })

    const day = await prisma.day.findUnique({
      where: {
        date: parsedDate.toDate()
      },
      include: {
        dayHabits: true
      }
    })

    const completedHabits = day?.dayHabits.map(dayHabit => {
      return dayHabit.habit_id
    })

    return {
      possibleHabits,
      completedHabits
    }
  })
}
