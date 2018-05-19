import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/Login')), 'Login');
const Manage = r => require.ensure([], () => r(require('@/page/Manage')), 'Manage');
const Home = r => require.ensure([], () => r(require('@/page/Home')), 'Home');
const UserList = r => require.ensure([], () => r(require('@/page/UserList')), 'Home');
const Task = r => require.ensure([], () => r(require('@/page/Task')), 'Task');



export default new Router({
  routes: [{
      path: '/',
      name: 'Manage',
      component: Manage,
      children: [{
        path: '',
        component: Home,
        meta: [],
      }, {
        path: 'userList',
        component: UserList,
        meta: ['数据管理', '用户列表'],
      }, {
        path: 'task',
        component: Task,
        meta: ['数据管理', '任务明细'],
      }]
    },

    {
      path: '/login',
      component: Login
    },
  ]
})
