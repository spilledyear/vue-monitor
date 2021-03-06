import * as service from '@/api/axios'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    avatar: 'default.jpg',
    username: '',
    status: '',
    code: '',
    roles: [],
    token: getToken(),
  },

  mutations: {
    SET_USER_INFO: (state, userInfo) => {
      state.token = userInfo.token || '';
      let user = userInfo.rows[0] || {};
      state.username = user.username;
    },
  },

  actions: {
    /**
     * 用户登录
     * 
     * @param {*} param0 
     * @param {*} userInfo 
     */
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        service.login(userInfo).then(data => {
          if(data.success){
            commit('SET_USER_INFO',data);
            setToken(data.token);
          }
          resolve();
        }).catch(error => {
          console.log(error);
          reject(error)
        })
      })
    },

    /**
     * 退出登录！清除token，清除角色
     * @param {*} param0 
     */
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        service.logout(state.token).then(() => {
          commit('SET_USER_INFO', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    getUserList({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        service.getUserList(userInfo).then(data => {
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取角色信息
    getRoleList({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        service.getRoleList(userInfo).then(data => {
          resolve(data)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default user
