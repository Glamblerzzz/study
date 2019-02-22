import axios from 'axios';
import {Basic} from '@/interface/basic';
// import fs from 'fs';
interface ErrMsg {
  code: number;
  data?: any;
  msg: string;
}
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
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  (response: any) => {
    const res: any = response.data;
    return Promise.resolve(res);
  },
  (error: any) => {
    let info: ErrMsg;
    const { status, statusText, data } = error.response;
    if (!error.response) { // 网络超时
      info = {
        code: 5000,
        msg: 'Network Error'
      };
    } else {
      info = {
        code: status,
        data,
        msg: statusText
      };
    }
    return Promise.reject(info);
  }
);

export default service;
