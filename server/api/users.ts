import type {FastifyInstance} from 'fastify'
import type {User} from '@shared/types/user'
import {uuidv4} from 'zod/v4'

/**
 * W tym miejscu należy dorobić serwis łączący się z bazą danych w celu dodania nowego użytkownika.
 * Na ten moment zostaje tylko wyświetlanie statyczne listy użytkowników.
 */

export const usersRouter = async (fastify: FastifyInstance) => {
  fastify.get('/users', async (request, reply) => {
    console.log('Information about request: ', request)
    const users: User[] = [
      {id: uuidv4(), firstName: 'Mariusz', lastName: 'Alkoholik', role: 'host'},
      {
        id: uuidv4(),
        firstName: 'Cyprian',
        lastName: 'Nietrzeźwiejący',
        role: 'guest',
      },
      {
        id: uuidv4(),
        firstName: 'Mścichuj',
        lastName: 'Białogłowy',
        role: 'guest',
      },
    ]
    reply.status(200).send(users)
  })
}
