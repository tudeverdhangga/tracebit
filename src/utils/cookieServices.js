import Cookie from 'js-cookie'

const cookieServices = (() => {
  const setCookie = (data) => {
    Cookie.set('accessToken', data.accessToken)
    Cookie.set('refreshToken', data.refreshToken)
  }

  const setSpecificCookie = (name, data) => {
    Cookie.set(name, data)
  }

  const getAccessToken = () => {
    return Cookie.get('accessToken')
  }

  const getRefreshToken = () => {
    return Cookie.get('refreshToken')
  }

  const getSpecificCookie = (name) => {
    return Cookie.get(name)
  }

  const clearCookie = () => {
    Cookie.remove('accessToken')
    Cookie.remove('refreshToken')
  }

  return {
    setCookie,
    setSpecificCookie,
    getAccessToken,
    getRefreshToken,
    getSpecificCookie,
    clearCookie
  }
})()

export default cookieServices
