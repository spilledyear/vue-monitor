<template>
  <div class="fillcontain">
    <Header></Header>
    <div class="table_container">
      <el-table :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" label="标题" style="width: 20%"/>
        <el-table-column property="registe_time" label="注册日期" style="width: 20%" />
        <el-table-column property="username" label="用户姓名" style="width: 20%"/>
        <el-table-column property="city" label="注册地址" style="width: 20%"/>
      </el-table>
      <div class="Pagination" style="text-align: left;margin-top: 10px;">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20"
          layout="total, prev, pager, next" :total="count">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header';
  export default {
    data() {
      return {
        tableData: [{
          registe_time: '2016-05-02',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1518 弄'
        }, {
          registe_time: '2016-05-04',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1517 弄'
        }, {
          registe_time: '2016-05-01',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1519 弄'
        }, {
          registe_time: '2016-05-03',
          username: '王小虎',
          city: '上海市普陀区金沙江路 1516 弄'
        }],
        currentRow: 0,
        offset: 0,
        limit: 20,
        count: 0,
        currentPage: 1,
      }
    },
    components: {
      Header,
    },
    created() {
      this.initData();
    },
    methods: {
      initData() {
        this.$store.dispatch('getUserList', {}).then((data) => {
          console.log(data);
        }).catch((error) => {
            console.log('获取数据失败', error);
            this.loading = false
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.offset = (val - 1) * this.limit;
        this.getUsers()
      },
    },
  }

</script>

<style lang="less">
  @import '../style/mixin';
  .table_container {
    padding: 20px;
  }

</style>

