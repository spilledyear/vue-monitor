<template>
  <div class="header_container">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
    </el-breadcrumb>
    
    <el-dropdown menu-align='start'>
     <a href="/"><img :src="baseImgPath" class="avator" href="/"></a>
    </el-dropdown>
  </div>
</template>

<script>
  import logoSrc from '../assets/image/avator.jpg'
  export default {
    name: 'Header',
    data() {
      return {
        baseImgPath: logoSrc
      }
    },
    created() {
    },
    computed: {
    },
    methods: {
    }
  }
</script>

<style lang="less">
  @import '../style/mixin';
  .header_container {
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }

  .avator {
    .wh(36px, 36px);
    border-radius: 50%;
    margin-right: 37px;
  }

  .el-dropdown-menu__item {
    text-align: center;
  }

</style>

