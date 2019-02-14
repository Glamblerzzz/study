import request from '@/utils/request';
// import {Basic} from '@/interface/basic';
export function test(params: object) {
  const url = '';
  console.log(request);
  return request({
    url,
    data: params,
    method: 'get'
  });
}
