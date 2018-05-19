import axios from '@/utils/axios'


/**
 * 登录
 * @param {*} data 
 */
export function login(data) {
  return axios({
    url: '/auth',
    method: 'post',
    data
  })
}

/**
 * 退出登录
 * @param {*} data 
 */
export function logout() {
  return request({
    url: '/api/sys/logout',
    method: 'post'
  })
}


/**
 * 查询用户信息
 * @param {*} data 
 */

export function getUserList(data) {
  return axios({
    url: '/api/user/',
    method: 'post',
    data
  });
}

/**
 * 查询用户信息
 * @param {*} data 
 */

export function addJob(data) {
  return axios({
    url: '/job/addjob/',
    method: 'get',
    params: data
  });
}

