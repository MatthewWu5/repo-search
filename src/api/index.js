import axios from 'axios'

const request = axios.create({
    // baseURL: process.env.VUE_APP_API_BASE_URL, // api base_url
    timeout: 6000, // 请求超时时间
})

request.interceptors.response.use(response => {
    return response.data
})

export default request