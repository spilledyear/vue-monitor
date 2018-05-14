import fetch from '@/config/fetch'

/**
 * 登录
 * @param {*} data 
 */
export const login = data => fetch('/auth', data, 'POST');



/**
 * 获取用户列表
 * @param {*} data 
 */
export const getUserList = data => fetch('/api/user/query', data,'POST');
