import methods from '../methods'

const END_POINT = 'auth'

const login = (data) => methods.POST_API(`${END_POINT}/login`, data)

export default {
  login
}
