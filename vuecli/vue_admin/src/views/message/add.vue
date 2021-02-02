<template>
  <div class="app-container" v-loading="loading">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="150px"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="tel">
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
          name="sfile"
          class="upload-demo"
          action="http://47.92.82.13:4000/getMessageA"
          multiple
          :on-success="sfileSuccess"
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
          action="http://47.92.82.13:4000/getMessageB"
          multiple
          name="sweixin"
          :limit="1"
          :on-success="weixinSuccess"
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
import { messageAdd } from '@/api/message'
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
        tcoin:'',
        weixin:''
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
    // 头像上传成功
    sfileSuccess(response){
        this.ruleForm.tcoin = response.headerurl;
    },
    // 微信二维码上传
    weixinSuccess(response){
        console.log(response);
        this.ruleForm.weixin = response.weixinurl
    },
    

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
         messageAdd({
             uname:this.ruleForm.name,
             addressid:this.ruleForm.address,
             levelid:this.ruleForm.level,
             tel:this.ruleForm.tel,
             tcoin:this.ruleForm.tcoin,
             weixin:this.ruleForm.weixin
         }).then((res)=>{
             console.log(res);
             this.$router.push("/message/list")
         })
        } else {
          this.$message.error('表单内容有误');
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