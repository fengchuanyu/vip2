<template>
  <div class="app-container">
    <el-table :data="addressData" style="width: 100%">
      <el-table-column type="index" width="150" label="序号"> </el-table-column>
      <el-table-column prop="addressname" label="地址"> </el-table-column>
      <el-table-column prop="latitude" label="经度"> </el-table-column>
      <el-table-column prop="longitude" label="纬度"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="120">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="deleteRow(scope.row)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { addressList, delAddress } from "@/api/address";
export default {
  data() {
    return {
      addressData: [],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    // 删除地址
    deleteRow(item) {
      this.$confirm("此操作将永久删除该地址, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delAddress({ addressid: item.addressid }).then((res) => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.getList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    // 获取列表
    getList() {
      addressList().then((res) => {
        console.log(res);
        this.addressData = res.data.data;
      });
    },
  },
};
</script>