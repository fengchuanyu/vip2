<template>
  <div class="container" v-loading="loading">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px">
      <el-form-item label="活动名称" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <!-- <div ref="test">hello</div> -->
  </div>
</template>
<script>
import { addLevel } from '@/api/level'
export default {
  data() {
    return {
        loading:false,
      form: {
        title: "",
      },
      rules: {
        title: [{ required: true, message: "请填写等级名称", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 提交
    onSubmit() {
        
      // console.log(this.$refs);
      // this.$refs.test.style.color="red";
      this.$refs.form.validate((valid) => {
        if (valid) {
            this.loading = true
          addLevel({levelname:this.form.title}).then((res)=>{
              console.log(res);
              this.loading = false
              this.$router.push('/level/list');
          })
        } else {
          this.$message.error('表单验证不通过');
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
$color: red;
.container {
  width: 500px;
  margin: 100px auto;
}
</style>