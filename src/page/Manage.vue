<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100%;">
      <el-col :span="4" style="min-height: 100%; background-color: #324057;">
        <el-menu router :default-active="defaultActive" style="min-height: 1000px;"  background-color="#324057" text-color="#B4B5C4" active-text-color="#4485F6">
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-document"></i>数据管理
            </template>
            <el-menu-item index="userList">用户列表</el-menu-item>
            <el-menu-item index="task">商家列表</el-menu-item>
            <el-menu-item index="foodList">食品列表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-star-on"></i>图表预览</template>
            <el-menu-item index="visitor">用户分布</el-menu-item>
            <el-menu-item index="newMember">用户数据</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑管理</template>
            <el-menu-item index="uploadImg">图片上传</el-menu-item>
            <el-menu-item index="vueEdit">文本编辑</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-setting"></i>系统设置</template>
            <el-menu-item index="adminSet">系统配置</el-menu-item>
            <el-menu-item index="sendMessage">退出登录</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'Manage',
    computed: {
      defaultActive: function () {
        return this.$route.path.replace('/', '');
      }
    },
  }

</script>


<style lang="less" scoped>
  @import '../style/mixin';
  .manage_page {}

</style>

