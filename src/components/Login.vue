<template>
  <div>
    <el-radio-group v-model="labelPosition" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>

    <div style="margin: 20px;"></div>

    <el-form :label-position="labelPosition" label-width="80px" :model="user" ref="user" style="width:1200px;margin: 0 auto">
      <el-form-item label="用户名">
        <el-input v-model="user.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="user.password"></el-input>
      </el-form-item>
      <el-button type="primary" round @click="login('user')">登录</el-button>
      <el-button type="primary" round @click="register('user')">注册</el-button>
    </el-form>
  </div>
</template>

<script>
  import {login} from '@/service/system';
  export default {
    data() {
      return {
        labelPosition: 'right',
        user: {
          username: '',
          password: '',
        }
      };
    },
    methods: {
      login(user){
        console.log(this.user.username);
        const result = login({});

      },
      register(user){
        console.log(this.user.password);
      }
    }
  }
</script>

