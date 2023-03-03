import methods from '../methods'

const END_POINT = 'forms'

const getForms = (data) => methods.GET_API(`${END_POINT}?${data}`)

export default {
  getForms
}
