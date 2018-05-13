<template>
  <div class="hello">
    <router-link to='login'>登录界面看看</router-link>
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      message: 'Hello，主页'
    }
  }
}
</script>