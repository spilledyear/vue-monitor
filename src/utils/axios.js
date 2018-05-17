import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { TOKEN_KEY, getToken } from '@/utils/auth'

/**
 * 创建一个 axios 实例
 */
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 50000
})

// 请求 拦截器，在请求之前执行一些逻辑
service.interceptors.request.use(request => {
  if (store.getters.token) {
    // 让每个请求携带{TOKEN_KEY: xxx} TOKEN_KEY为自定义key，在 @/utils/auth 中定义， 请根据实际情况自行修改
    request.headers[TOKEN_KEY] = getToken();
  }
  return request
}, error => {
  Promise.reject(error)
});

// 响应 拦截器，返回结果之后处理一些亲求
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中 
     */
    const res = response.data;
    if (response.status !== 200) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      });
      // 50008:非法的token; 50012:其他客户端登录了; 50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            // 为了重新实例化vue-router对象 避免bug
            location.reload(); 
          });
        })
      }
      return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  error => {
    console.log('error' + error);
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
});


export default service
