import {User} from './User'
import {useUserQuery} from '@queries/users'

export const UserList = () => {
  const {data, isPending, isError} = useUserQuery()

  if (isPending) {
    return <p className="text-slate-700 text-sm">loading users...</p>
  }
  if (isError) {
    return <p className="text-slate-700 text-sm">there was an error</p>
  }

  return (
    <ul className="flex flex-col gap-4">
      {data.map((item) => {
        return (
          <li key={item.id.format?.toString()}>
            <User
              role={item.role}
              firstName={item.firstName}
              lastName={item.lastName}
            />
          </li>
        )
      })}
    </ul>
  )
}
