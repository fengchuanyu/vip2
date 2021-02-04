<template>
  <div class="nav-content">
    <div class="nav-header">
      {{ title }}
    </div>
    <div class="nav-tab">
      <div class="tab-btn" @click="changeTab('index')">
        <div v-if="activeTab == 'index'" class="active">
          <img src="../assets/indexs.png" />
          <span>首页</span>
        </div>
        <div v-else>
          <img src="../assets/index.png" />
          <span>首页</span>
        </div>
      </div>
      <div class="tab-btn" @click="changeTab('users')">
        <div v-if="activeTab == 'users'" class="active">
          <img src="../assets/users.png" />
          <span>职员</span>
        </div>
        <div v-else>
          <img src="../assets/user.png" />
          <span>职员</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: "index",
      title: "银行列表",
    };
  },
  props: ["page"],
  watch: {
    page(val) {
      let _title = val == "index" ? "银行列表" : "职员列表";
      this.activeTab = val;
      this.title = _title;
    },
  },
  methods: {
    changeTab(type) {
      if (type != this.activeTab) {
        let _path = type == "index" ? "/" : "/users";
        let _title = type == "index" ? "银行列表" : "职员列表";
        this.activeTab = type;
        this.title = _title;
        this.$router.push(_path);
      }
    },
  },
};
</script>
<style scoped>

.nav-content .nav-header {
  position: fixed;
  top:0;
  left: 0;
  z-index: 10;
  height: 1rem;
  line-height: 1rem;
  width: 100%;
  background-color: #fff;
  color: #333;
  text-align: center;
  font-size: 24px;
}
.nav-content .nav-tab {
  display: flex;
  z-index: 10;
  height: 1rem;
  background-color: #fff;
  width: 100%;
  font-size: 13px;
  position: fixed;
  left: 0;
  bottom: 0;
  color: #aaa;
}
.nav-content .nav-tab .tab-btn {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-content .nav-tab .tab-btn div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.nav-content .nav-tab img {
  width: 25px;
}
.nav-content .nav-tab .active {
  color: #333;
}
</style>