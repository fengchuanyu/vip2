<template>
  <div class="app-container">
    <div class="form-bar">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="地址">
          <el-select v-model="addressId" placeholder="选择地址">
            <el-option
              v-for="item in addressList"
              :key="item.addressid"
              :label="item.addressname"
              :value="item.addressid"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchHandle">查询</el-button>
          <el-button @click="resetSearch">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-bar">
      <el-table :data="messageList" style="width: 100%">
        <el-table-column type="index" width="150"> </el-table-column>
        <el-table-column prop="jrname" label="姓名"> </el-table-column>
        <el-table-column prop="addressname" label="地址"> </el-table-column>
        <el-table-column prop="levelname" label="等级"> </el-table-column>
        <el-table-column prop="jrtel" label="手机号"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="180">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="updateBtn(scope.row)"
              type="text"
              size="small"
              icon="el-icon-edit"
            >
              修改
            </el-button>
            <el-button
              @click.native.prevent="deleteBtn(scope.row)"
              type="text"
              size="small"
              icon="el-icon-delete"
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
import { messageList, messageByAddress, delMessage } from "@/api/message";
import { addressList } from "@/api/address";
export default {
  data() {
    return {
      addressId: "",
      messageList: [],
      addressList: [],
    };
  },
  created() {
    this.getMessageList();
    this.getAddressData();
  },
  methods: {
    //删除信息
    deleteBtn(item) {
      this.$confirm("此操作将永久删除该记录, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.loading = true;
          delMessage({ id: item.jrid }).then(() => {
            this.getMessageList();
            this.$message({
              type: "success",
              message: "删除成功!",
            });
            this.loading = false;
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 修改按钮
    updateBtn(item) {
      this.$router.push({
        path: "/message/add",
        query: {
          id: item.jrid,
        },
      });
    },
    // 重置筛选
    resetSearch() {
      this.getMessageList();
      this.addressId = "";
    },
    // 按地址筛选
    searchHandle() {
      messageByAddress({ searchid: this.addressId }).then((res) => {
        console.log(res);
        // res.data.data.map((item)=>{
        //   item.addressname
        // })
        let thisAddressName = "";
        this.addressList.map((item) => {
          if (item.addressid == this.addressId) {
            thisAddressName = item.addressname;
          }
        });
        this.messageList = res.data.data.map((item) => {
          item.addressname = thisAddressName;
          return item;
        });
      });
    },
    // 获取地址列表
    getAddressData() {
      addressList().then((res) => {
        this.addressList = res.data.data;
      });
    },
    //   获取信息列表
    getMessageList() {
      messageList().then((res) => {
        console.log(res);
        this.messageList = res.data.data;
      });
    },
  },
};
</script>