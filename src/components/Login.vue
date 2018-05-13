<template>
  <el-form :rules="rules" class="login-container" label-position="left" label-width="0px" v-loading="loading">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="checkName">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" @click.native.prevent="loginClick" style="width: 100%">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import * as service from '@/service/system';
  export default {
    name: 'Login',
    data() {
      return {
        rules: {
          checkName: [{required: true, message: '请输入用户名', trigger: 'blur'}],
          checkPass: [{required: true, message: '请输入密码', trigger: 'blur'}]
        },
        loginForm: {
          username: 'admin',
          password: '123'
        },
        checked: true,
        loading: false
      }
    },
    methods: {
      async loginClick(user) {
        this.loading = true;
        const result = await service.login({username: this.loginForm.username, password: this.loginForm.password});
        this.loading = false;
 
        var path = this.$route.query.redirect;
        if(result.success){
          this.$router.replace({path: path == '/' || path == undefined ? '/home' : path});
        }else{
          this.$router.replace({path: 'login'});
        }
      },
    }
  }

</script>


<style>
  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .login_remember {
    margin: 0px 0px 35px 0px;
    text-align: left;
  }
</style>
