import {dehydrate, queryOptions, useQuery} from '@tanstack/react-query'

import type {QueryClient as QueryClientType} from '@tanstack/react-query'
import type {User} from '@shared/types/user'
// import {apiRequest} from '@common/util/api-request'
import {createQueryClientForServer} from '@common/util/query-client'
import {uuidv4} from 'zod/v4'

// Jeżeli server będzie już gdzieś zahostowany i będzie działał poprawnie - to trzeba będzie usunąć te mocki.
const users: User[] = [
  {
    id: uuidv4(),
    firstName: 'Mariusz',
    lastName: 'Alkoholik',
    role: 'host',
  },
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

export const getUserQueryOptions = () => {
  return queryOptions<User[]>({
    queryKey: ['users-list'],
    // Jeżeli będzie gotowy backend to zmienić to na `queryFn: () => apiRequest('/users'),`
    queryFn: () => {
      return users
    },
  })
}

// Docelowo używać będę SPA zamiast SSR, więc będzie to zakomentowane. Jakby mi się odwidziało - odkomentować
// export const fetchUserData = async () => {
//   const queryClient = createQueryClientForServer()

//   const data = await queryClient.ensureQueryData(getUserQueryOptions())
//   return {data, queryClient}
// }

export const dehydrateUserState = (queryClient: QueryClientType) => {
  return dehydrate(queryClient)
}

export const useUserQuery = () => {
  return useQuery(getUserQueryOptions())
}
