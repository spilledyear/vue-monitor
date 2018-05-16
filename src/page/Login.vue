<template>
  <el-form class="login-container" :model="loginForm" ref="loginForm" :rules="loginRules" label-position="left" label-width="0px" v-loading="loading">
    <h3 class="login_title">系统登录</h3>
    <el-form-item prop="checkName">
      <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="checkPass">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox class="login_remember" v-model="checked" label-position="left">记住密码</el-checkbox>
    <el-form-item style="width: 100%">
      <el-button type="primary" @click.native.prevent="handleLogin" style="width: 100%">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { login } from '@/api/fetch';
  import Cookies from 'js-cookie'
  export default {
    name: 'Login',
    data() {
      return {
        loginForm: {
          username: 'admin',
          password: 'admin'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', message: '请输入用户名',}],
          password: [{ required: true, trigger: 'blur', message: '请输入密码',}]
        },
        checked: true,
        loading: false
      }
    },
    methods: {
      async loginClick(user) {
        this.loading = true;
        const result = await login({username: this.loginForm.username, password: this.loginForm.password});
        this.loading = false;
 
        // var path = this.$route.query.redirect;

        if(result.success){
          localStorage.setItem('TOKEN_KEY', result.token);
          // this.$router.replace({path: path == '/' || path == undefined ? '/home' : path});
          this.$router.push({ path: '/' });
        }else{
          this.$router.replace({path: 'login'});
        }
      },
      handleLogin(user){
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('login', {username: this.loginForm.username, password: this.loginForm.password}).then(() => {
              this.loading = false;
              this.$router.push({ path: '/' });
              console.log(this)
              console.log(Cookies)
              console.log(Cookies.get())
            }).catch((error) => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        });
      }
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
