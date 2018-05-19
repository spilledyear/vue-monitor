<template>
  <div class="fillcontain">
    <Header></Header>
    <div class="table_container">
      <el-button type="primary" plain @click="todo">主要按钮</el-button>
      <el-table :data="tableData" highlight-current-row style="width: 100%">
        <el-table-column type="index" label="标题"/>
        <el-table-column property="jobName" label="任务名称" style="width: 10%"/>
        <el-table-column property="jobGroup" label="任务组名" style="width: 10%"/>
        <el-table-column property="jobStatus" label="任务状态" style="width: 10%"/>
        <el-table-column property="cronExpression" label="Corn表达式" style="width: 10%"/>
        <el-table-column property="description" label="任务描述" style="width:10%" />
        <el-table-column property="jobClassName" label="任务类名" style="width: 50%" />
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
          jobName: '任务1',
          status: 'ACTIVE',
          jobGroup: 'GROUP1',
          jobClassName: 'com.hand.sxy.job.example.HelloJob',
          description: '任务1',
        }, {
          jobName: '任务2',
          status: 'ACTIVE',
          jobGroup: 'GROUP2',
          jobClassName: 'com.hand.sxy.job.example.HelloJob',
          description: '任务2',
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
        this.$store.dispatch('getJobList', {}).then((data) => {
          this.tableData = data.rows;
          this.count = data.rows.length;
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
      todo(){
        console.log(1111111)

        this.$store.dispatch('addJob', {jobGroup:'GROUP1', jobName:'任务2', jobClassName:'com.hand.sxy.job.example.HelloJob', cronExpression: '0/5 * * * * ?'}).then((data) => {
          // this.tableData = data.rows;
          // this.count = data.rows.length;
        }).catch((error) => {
            console.log('获取数据失败', error);
            this.loading = false
        });
      }
    },

  }

</script>

<style lang="less">
  @import '../style/mixin';
  .table_container {
    padding: 20px;
  }

</style>

