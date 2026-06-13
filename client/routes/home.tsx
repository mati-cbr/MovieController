import {generatePageTitle} from '@common/util/page-title'
import {HomePage} from '@pages/HomePage'
import type {MetaFunction} from 'react-router'

export const meta: MetaFunction = () => {
  return [{title: generatePageTitle('Home')}]
}

export default () => {
  return <HomePage />
}
