import Homepage from '@/components/Homepage'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import Books from '@/components/Books'

export default [
  {
    path: '/',
    name: 'index',
    component: Homepage
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/books',
    name: 'books',
    component: Books,
    meta: {
      requiresAuth: true
    }
  }
]
