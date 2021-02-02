<template>
  <div class="app-container" v-loading="loading">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动名称" prop="tel">
        <el-input v-model="ruleForm.tel"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-select v-model="ruleForm.address" placeholder="请选择地址">
          <el-option 
            v-for="item in addressData" :key="item.addressid"
            :label="item.addressname"
            :value="item.addressid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="等级" prop="level">
        <el-select v-model="ruleForm.level" placeholder="请选择等级">
          <el-option 
            v-for="item in levelData" :key="item.jrid"
            :label="item.levelname"
            :value="item.jrid"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上传头像">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="1"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item label="上传微信二维码">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple
          :limit="1"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { levelList } from "@/api/level"
import { addressList } from '@/api/address'
export default {
  data() {
    return {
      fileList: [],
      loading:false,
      levelData:[],
      addressData:[],
      ruleForm: {
        name: "",
        tel: "",
        address: "",
        level: "",
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        tel: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        address: [{ required: true, message: "请选择地址", trigger: "change" }],
        level: [{ required: true, message: "请选择等级", trigger: "change" }],
      },
    };
  },
  created() {
      this.getSelData();
  },
  methods: {
    // 获取下拉列表信息
    getSelData(){
        this.loading = true;
        let promiseLevel = new Promise((resolve,reject)=>{
            levelList().then((res)=>{
                this.levelData = res.data.data;
                resolve(res.data.data)
            });
        })
        let promiseAddress = new Promise((resolve,reject)=>{
            addressList().then((res)=>{
                this.addressData = res.data.data
                resolve(res.data.data)
            })
        })

        Promise.all([promiseLevel,promiseAddress]).then((res)=>{
            console.log(res);
            this.loading = false
        })
        
        

    },
    // 提交操作
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.app-container {
  width: 500px;
  margin: 50px auto;
}
</style>