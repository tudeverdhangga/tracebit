import methods from '../methods'

const END_POINT = 'forms-inputs'

const getTopMarketingChannel = (data) => methods.GET_API(`${END_POINT}/get-top-marketing-channel?${data}`)

export default {
  getTopMarketingChannel
}
