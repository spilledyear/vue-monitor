import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/Login')), 'Login');
const Manage = r => require.ensure([], () => r(require('@/page/Manage')), 'Manage');
const Home = r => require.ensure([], () => r(require('@/page/Home')), 'Home');
const UserList = r => require.ensure([], () => r(require('@/page/UserList')), 'UserList');
const Role = r => require.ensure([], () => r(require('@/page/Role')), 'Role');
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
        meta: ['用户管理', '用户列表'],
      }, {
        path: 'role',
        component: Role,
        meta: ['用户管理', '角色列表'],
      }, {
        path: 'userChart',
        component: Task,
        meta: ['图表预览', '用户分布'],
      }, {
        path: 'task',
        component: Task,
        meta: ['计划任务', '任务明细'],
      }, {
        path: 'taskHistory',
        component: Task,
        meta: ['计划任务', '执行记录'],
      }, {
        path: 'setting',
        component: Task,
        meta: ['系统设置', '系统配置'],
      }, {
        path: 'logout',
        component: Task,
        meta: ['系统设置', '退出登录'],
      }]
    },

    {
      path: '/login',
      component: Login
    },
  ]
})
