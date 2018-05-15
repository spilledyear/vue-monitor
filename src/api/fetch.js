import fetch from '@/utils/fetch'

/**
 * 登录
 * @param {*} data 
 */
export const login = data => fetch('/auth', data, 'POST');

export const logout = data => fetch('/auth', data, 'POST');

export const loginByUsername = data => fetch('/auth', data, 'POST');

export const getUserInfo = data => fetch('/auth', data, 'POST');



/**
 * 获取用户列表
 * @param {*} data 
 */
export const getUserList = data => fetch('/api/user/query', data,'POST');
