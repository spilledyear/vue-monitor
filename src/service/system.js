import fetch from '@/config/fetch'

/**
 * 
 * @param {*} data 
 */
export const login = data => fetch('/api/system/login', data, 'POST');
