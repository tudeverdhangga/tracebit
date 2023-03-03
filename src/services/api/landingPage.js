import methods from '../methods'

const END_POINT = 'landing-pages'

const getLandingPage = (data) => methods.GET_API(`${END_POINT}?${data}`)

export default {
  getLandingPage
}
