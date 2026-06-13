import {Link} from '@common/components/Link'
import {UserList} from '@features/UserList'

export const UserPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <Link to="/">Wróć</Link>
      <h1 className="text-3xl text-slate-700 font-semibold">Statyczna lista użytkowników (bazy jeszcze ni mo)</h1>
      <UserList />
    </section>
  )
}
