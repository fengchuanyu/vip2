<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>｜
      <!-- <router-link to="/pageone">页面一</router-link> -->
      <router-link v-bind:to="{name:'PageOne',params:{username:'小明'}}">页面一</router-link>|
      <router-link v-bind:to="{name:'PageTwo',query:{username:'小刚'}}">页面二</router-link>｜
      <router-link to="/pagethree/小红">页面三</router-link>|
      <router-link to="/redirect/xiao">重定向</router-link>|
      <router-link to="/detail">别名</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
