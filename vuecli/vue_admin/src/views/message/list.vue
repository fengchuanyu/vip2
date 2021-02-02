<template>
  <div class="app-container">
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
import {messageList} from '@/api/message'
export default {
  data() {
    return {
      messageList: [],
    };
  },
  created() {
      this.getMessageList();
  },
  methods: {
    //   获取信息列表
    getMessageList(){
        messageList().then((res)=>{
            console.log(res);
            this.messageList = res.data.data
        })
    }
  },
};
</script>