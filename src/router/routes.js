import { routes as auth } from '../modules/auth'
import { routes as user } from '../modules/user'
import { routes as dashboard } from '../pages/Dashboard'

export default [
  ...auth,
  ...user,
  ...dashboard
]
