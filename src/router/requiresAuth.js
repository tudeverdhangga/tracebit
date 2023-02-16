import store from 'store'
import cookieServices from '@/utils/cookieServices'

const requiresAuth = (to, from, next) => {
  const isLoggedIn = cookieServices.getAccessToken()
  const isSession = store.get('session')
  const isAuthenticated = !isLoggedIn.isEmpty() && !isSession.isEmpty()

  const logout = () => {
    cookieServices.clearCookie()
    store.remove('session')
    return next('/login')
  }

  console.log(isAuthenticated)
  if (!isAuthenticated) {
    return logout()
  }

  return next()
}

export default requiresAuth
