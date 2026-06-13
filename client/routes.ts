import {index, layout, route} from '@react-router/dev/routes'
import type {RouteConfig} from '@react-router/dev/routes'

export default [
  layout('./layouts/Default.tsx', {id: 'home'}, [index('./routes/home.tsx')]),
  route('users', './layouts/Default.tsx', [index('./routes/users.tsx')]),
] satisfies RouteConfig
