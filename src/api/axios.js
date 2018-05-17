import axios from '@/utils/axios'


/**
 * 登录接口
 * @param {*} data 
 */
export function login(data) {
  return axios({
    url: '/auth',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}


/**
 * 查询用户信息
 * @param {*} data 
 */

export function getUserList(data){
  return axios({
    url: '/api/user/query',
    method: 'post',
    data:{}
  });
}

