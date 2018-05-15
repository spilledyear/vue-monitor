import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import {login} from '@/api/fetch'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  getters:{
		token: state => state.user.token,
	}
})