import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/Login')), 'Login');
const Manage = r => require.ensure([], () => r(require('@/page/Manage')), 'Manage');
const Home = r => require.ensure([], () => r(require('@/page/Home')), 'Home');



export default new Router({
  routes: [{
      path: '/',
      name: 'Manage',
      component: Manage,
      children: [{
        path: '',
        component: Home,
        meta: [],
      }]
    },
    {
      path: '/login',
      component: Login
    },
  ]
})