<template>
  <div>
    <head-top></head-top>
    <section class="data_section">
      <header class="section_title">数据统计</header>
      <el-row :gutter="24">
        <el-col :span="6">
          <div class="data_list all_head">
            <span class="data_num head">总数据：</span>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="data_list">
            <span class="data_num">{{userCount}}</span> 注册用户</div>
        </el-col>
        <el-col :span="6">
          <div class="data_list">
            <span class="data_num">{{userCount}}</span> 订单</div>
        </el-col>
        <el-col :span="6">
          <div class="data_list">
            <span class="data_num">{{userCount}}</span> 管理员</div>
        </el-col>
      </el-row>
    </section>

    <tendency :sevenDay='sevenDay'></tendency>
  </div>
</template>

<script>
  import dtime from 'time-formater'
  import headTop from '../components/HeadTop'
  import tendency from '../components/Tendency'
  export default {
    name: 'Home',
    data() {
      return {
        userCount: 0,
        sevenDay: [],
      }
    },
    components: {
      headTop,
      tendency,
    },
    mounted() {
      for (let i = 6; i > -1; i--) {
        const date = dtime(new Date().getTime() - 86400000 * i).format('YYYY-MM-DD')
        this.sevenDay.push(date)
      }
    },
    computed: {},
    methods: {}
  }

</script>

<style lang="less">
  @import '../style/mixin';
  .data_section {
    padding: 20px;
    margin-bottom: 40px;
    .section_title {
      text-align: center;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .data_list {
      text-align: center;
      font-size: 14px;
      color: #666;
      border-radius: 6px;
      background: #E5E9F2;
      .data_num {
        color: #333;
        font-size: 26px;

      }
      .head {
        border-radius: 6px;
        font-size: 22px;
        padding: 4px 0;
        color: #fff;
        display: inline-block;
      }
    }
    .today_head {
      background: #FF9800;
    }
    .all_head {
      background: #20A0FF;
    }
  }

  .wan {
    .sc(16px, #333)
  }
</style>

