<template>
  <div id="app">
    <div id="nav">
      <Nav :page='nPage'></Nav>
    </div>
    <router-view @nowPage="changePage"/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  data() {
    return {
      nPage:'index'
    }
  },
    components:{
      Nav
    },
    methods: {
      changePage(page){
        this.nPage = page
      }
    },
}
</script>
<style>
body {
  background-color: #f5f6f7;
  padding:1rem 0;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
