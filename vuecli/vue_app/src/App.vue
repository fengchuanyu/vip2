<template>
  <div id="app">
    <div id="nav">
      <Nav></Nav>
    </div>
    <router-view />
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
    components:{
      Nav
    }
}
</script>
<style>
body {
  background-color: #f5f6f7;
}
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>
