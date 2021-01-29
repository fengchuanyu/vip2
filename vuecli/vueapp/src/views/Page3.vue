<template>
  <div v-loading="loading" element-loading-text="拼命加载中">
    <h1>这是页面三</h1>
    <h1>用户名:{{ $route.params.username }}</h1>
    <el-table :data="dataList" style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="id" label="ID"> </el-table-column>
      <el-table-column prop="title" label="名称"> </el-table-column>
      <el-table-column prop="infotext" label="信息"> </el-table-column>
    </el-table>
    <!-- <ul>
        <li v-for="(item) in dataList" :key="item.id"> {{item.title}}</li>
    </ul> -->
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      loading:false,
      dataList: [],
    };
  },
  methods: {
    testHandle(){

    },
    getData() {
      this.loading = true;  
      axios
        .get(
          "https://bird.ioliu.cn/v2?url=https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=0&count=5"
        )
        .then((res) => {
          console.log(res);
          let newArr = res.data.subject_collection_items.map((item) => {
            return {
              id: item.id,
              title: item.title,
              infotext: item.info + item.episodes_info,
            };
          });
          this.dataList = newArr;
          this.loading = false;
        });
    },
  },
  created() {
    // console.log(this.$route);
    // console.log(this.$router);
    this.getData();
  },
};
</script>