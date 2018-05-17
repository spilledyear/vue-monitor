import { login, logout, getUserList} from '@/api/axios'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    user: {
      avatar: 'default.jpg',
      username: '',
      status: '',
      code: '',
      roles: [],
      token: getToken(),
    },
  },

  mutations: {
    SET_TOKEN: (state,token) => {
      state.token = token
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 用户名登录
    login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(data => {
          commit('SET_TOKEN');
          setToken(data.token);
          resolve();
        }).catch(error => {
          console.log(error);
          reject(error)
        })
      })
    },

    // 获取用户信息
    getUserList({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserList().then(data => {
           // 由于mockjs 不支持自定义状态码只能这样hack
          if (!data) {
            reject('error')
          }
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    /**
     * 退出登录！清楚token，清除角色
     * @param {*} param0 
     */
    logout({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default user
