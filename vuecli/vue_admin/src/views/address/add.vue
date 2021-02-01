<template>
  <div class="app-container">
    <el-form
      :model="form"
      :rules="rules"
      ref="form"
      label-width="100px"
    >
      <el-form-item label="地址名称" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="纬度" prop="latitude">
        <el-input v-model="form.latitude"></el-input>
      </el-form-item>
      <el-form-item label="经度" prop="longitude">
        <el-input v-model="form.longitude"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button type="primary" @click="submitForm()"
          >立即创建</el-button
        >
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { addAddress } from '@/api/address'
export default {
  data() {
    return {
      form: {
        title: "",
        latitude:"",
        longitude:""
      },
      rules: {
        title: [
          { required: true, message: "请输入地址", trigger: "blur" },
        ],
        latitude: [
          { required: true, message: "请输入纬度", trigger: "blur" },
        ],
        longitude: [
          { required: true, message: "请输入经度", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
      submitForm() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            addAddress({
                address:this.form.title,
                longitude:this.form.longitude,
                latitude:this.form.latitude
            }).then((res)=>{
                this.$router.push('/address/list')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.form.resetFields();
      }
  },
};
</script>
<style lang="scss" scoped>
    .app-container{
        width: 500px;
        margin: 100px auto;
    }
</style>