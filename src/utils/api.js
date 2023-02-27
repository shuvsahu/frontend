//make apis here
//axios interceptor
import axios from 'axios'

const httpRequest = (method, url, request) => {
    return new Promise((resolve, reject) => {
      axios[method](url, request)
      .then(response => {
          resolve(response)
        })
      .catch(error => {
          reject(error)
        })
    })
}


const getAPI = (url, request) =>{
    return httpRequest('get', url, request)
}

const postAPI = (url, request) =>{
    return httpRequest('post', url, request)
}

const putAPI = (url, request) =>{
    return httpRequest('put', url, request)
}

const deleteAPI = (url, request) =>{
    return httpRequest('delete', url, request)
}

export {getAPI,postAPI,putAPI,deleteAPI}

    //   const token = localStorage.getItem('token')
    //   if (token) {
    //     request.headers.Authorization = `Bearer ${token}`
    //   }

// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });