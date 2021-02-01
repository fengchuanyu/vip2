<template>
  <div class="app-container">
    <div class="tabale-data">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="序号" type="index" width="150">
        </el-table-column>
        <el-table-column prop="levelname" label="级别名称"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { levelList } from "@/api/level";
export default {
    data() {
        return {
            tableData:[]
        }
    },
  created() {
      this.getList()
  },
  methods: {
    // 获取列表
    getList() {
      levelList().then((res) => {
        console.log(res);
        this.tableData = res.data.data
      });
    },
  },
};
</script>