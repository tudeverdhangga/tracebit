import HTTP from './http'

const GET_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.get(path, data, headers)
      .then(result => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
  return promise
}

const POST_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.post(path, data, headers)
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
  return promise
}

const PUT_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.put(path, data, headers)
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
  return promise
}

const DELETE_API = (path, data, headers) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.delete(path, data, headers)
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
  return promise
}

const GET_DOWNLOAD_API = (path, responseType) => {
  const promise = new Promise((resolve, reject) => {
    HTTP.getDownload(path, responseType)
      .then((result) => {
        resolve(result.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
  return promise
}

const methods = {
  GET_API,
  POST_API,
  PUT_API,
  DELETE_API,
  GET_DOWNLOAD_API
}

export default methods
