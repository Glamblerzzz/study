import request from '@/utils/request';
export function test(params: object) {
  const url = '';
  return request({
    url,
    data: params,
    method: 'get'
  });
}
