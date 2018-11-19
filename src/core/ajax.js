import axios from 'axios'
import qs from 'qs'
import { Toast } from 'mint-ui';
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ?
    process.env.VUE_APP_BASE_URL :
    ''
    || process.env.VUE_APP_BASE_URL;
// 配置超时时间
axios.defaults.timeout = 300e3
// 请求拦截器
axios.interceptors.request.use(
  config => {
    if (sessionStorage.token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.common['token'] = sessionStorage.token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// 响应拦截器
axios.interceptors.response.use(
  ({ data: response }) => {
    if (!response.header) {
      // 没有header说明可能是文件流
      return Promise.resolve(response)
    }
    const {
      code,
      message
    } = response.header // 自定义状态位
    if (code == 200) {
      return Promise.resolve(response.data)
    }
    return Promise.reject({ code, message })
  },
  error => {
    if (error.toString().includes('timeout of')) {
     //'请求超时';
        Toast({
            message: '请求超时',
            position: 'middle',
            duration: 3000
        });
    }
    console.log(`请求失败 => ${error}`)
    return Promise.reject()
  }
)


export const get = (url, arg = {}) => axios.get(`${url}?${qs.stringify(arg)}`)

export const post = (url, arg = {}) => axios.post(url, qs.stringify(arg))

export const postForm = (url, arg = {}) => {
  const formData = new FormData()
  Object.entries(arg).forEach(([key, value]) => formData.append(key, value))
  return axios.post(url, formData, {
    'Content-Type': 'multipart/form-data'
  })
}

export const put = (url, arg = {}) => axios.put(url, qs.stringify(arg))

export const del = (url, arg = {}) => {
  return axios.delete(url, {
    params: arg
  })
}

export const postJson = (url, arg = {}) => {
  return axios.post(url, arg, {
    headers: {
      'Content-type': 'application/json;charset=UTF-8'
    }
  })
}

export const getBlob = (url, arg) => {
  return axios.get(`${url}?${qs.stringify(arg)}`, {
      responseType: 'blob'
    }
  )
}

export const postBlob = (url, arg) => {
  return axios.post(url, qs.stringify(arg), {
    responseType: 'blob'
  })
}
