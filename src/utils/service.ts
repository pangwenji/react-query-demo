import axios, {
    AxiosError,
    InternalAxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import { axios_configs } from './config'
// import { AxiosRequestConfigs } from "@/types";

export const axioInstance = axios.create({
    ...axios_configs,
})

const requestInterceptors = (config: InternalAxiosRequestConfig) => {
    console.log(config, '做一下请求配置')
    return config
}

const requestInterceptorsError = (error: AxiosError) => {
    return Promise.reject(error)
}

// 请求拦截
axioInstance.interceptors.request.use(
    (config) => requestInterceptors(config),
    (error) => requestInterceptorsError(error)
)

const responseInterceptors = (response: AxiosResponse) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response
}

const responseInterceptorsError = (error: AxiosError) => {
    // 状态2xx 以外状态码都触发
    return error
}

// 响应拦截

axioInstance.interceptors.response.use(
    (response) => responseInterceptors(response),
    (error) => responseInterceptorsError(error)
)
