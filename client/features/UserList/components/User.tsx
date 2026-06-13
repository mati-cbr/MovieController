import type {User as UserProps} from '@shared/types/user'

type Props = {
  firstName: UserProps['firstName'],
  lastName: UserProps['lastName']
  role: UserProps['role']
}

export const User = ({firstName, lastName, role}: Props) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-slate-500 text-sm">{role}</p>
      <p className="text-slate-700">{firstName}</p>
      <p className="text-slate-700">{lastName}</p>
    </div>
  )
}
