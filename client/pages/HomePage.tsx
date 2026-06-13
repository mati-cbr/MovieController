import {Link} from '@common/components/Link'

export const HomePage = () => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-3xl text-slate-700 font-semibold">MovieController</h1>
      <Link to="/users">Pokaż cokolwiek co tutaj działa, bo byłem zbyt leniwy by zrobić coś więcej</Link>
    </section>
  )
}
