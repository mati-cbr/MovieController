import type {MetaFunction} from 'react-router'
import {UserPage} from '@pages/UserPage'
import {generatePageTitle} from '@common/util/page-title'

export const meta: MetaFunction = () => {
  return [{title: generatePageTitle('Users')}]
}

export default function UsersRoute() {
  return <UserPage />
}
