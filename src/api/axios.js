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
 * 查询角色信息
 * @param {*} data 
 */
export function getRoleList(data) {
  return axios({
    url: '/api/role/query',
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


/**
 * 获取Job信息
 * @param {*} data 
 */
export function getJobList(data) {
  return axios({
    url: '/api/job/query',
    method: 'post',
    data
  });
}

/**
 * 获取Job执行记录
 * @param {*} data 
 */
export function getJobRunningInfo(data) {
  return axios({
    url: '/api/job/jobinfo/query',
    method: 'post',
    data
  });
}

