import axios from 'axios'

import cookieServices from '@/utils/cookieServices'

const HTTP = {
  request(method, url, data, headers = {}) {
    // perform axios request
    return axios.request({
      url,
      data: data,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        headers
      )
    })
  },
  requestPost(method, url, data, headers = {}) {
    // perform axios request
    return axios.request({
      url,
      data,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/json'
        },
        headers
      )
    })
  },
  requestDownload(method, url, responseType) {
    // perform axios request
    return axios.request({
      url,
      method,
      headers: Object.assign({
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      }),
      responseType
    })
  },
  get(url, data, headers = {}) {
    return this.request('get', `${url}`, data, headers)
  },
  getDownload(url, responseType) {
    return this.requestDownload('get', `${url}`, responseType)
  },
  post(url, data, headers = {}) {
    return this.request('post', `${url}`, data, headers)
  },
  put(url, data, headers = {}) {
    return this.request('put', `${url}`, data, headers)
  },
  postReq(url, data, headers = {}) {
    return this.requestPost('post', `${url}`, data, headers)
  },
  patch(url, data, headers = {}) {
    return this.requestPost('patch', `${url}`, data, headers)
  },
  delete(url, data, headers = {}) {
    return this.request('delete', `${url}`, data, headers)
  },
  init() {
    // Intercept the request to make sure the token is injected into the header.
    axios.interceptors.request.use((config) => {
      const token = cookieServices.getAccessToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    })

    // Intercept the response
    axios.interceptors.response.use((response) => {
      return response
    })
  }
}

export default HTTP
