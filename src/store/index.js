import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import job from './modules/job'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    job
  },
  getters:{
		token: state => state.user.token,
	}
})