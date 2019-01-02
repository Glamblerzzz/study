import axios from 'axios';
// import fs from 'fs';
// if(process.env.NODE_ENV === 'development') 
const baseURL: string = process.env.VUE_APP_BASE_API;
const service: any = axios.create({
  timeout: 5000
});

// 请求拦截
service.interceptors.request.use(
  (config: any) => {
    config.url = baseURL + config.url;
    if (config.method === 'get') {
      config.params = config.data;
      config.data = undefined;
    }
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: any) => {
    const res: any = response.data;
    if (response.status === 429) {
      return Promise.reject('系统繁忙，稍后再试');
    } else {
      return Promise.resolve(res);
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default service;
