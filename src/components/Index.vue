<template>
  <div class="hello">
    <router-link to='Login'>登录界面看看</router-link>
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      message: 'Hello，主页'
    }
  }
}
</script>