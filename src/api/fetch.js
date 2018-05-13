import fetch from '@/config/fetch'

/**
 * 登录
 * @param {*} data 
 */
export const login = data => fetch('/api/system/login', data, 'POST');



/**
 * 获取用户列表
 * @param {*} data 
 */
export const getUserList = data => fetch('/api/user/query', data);
