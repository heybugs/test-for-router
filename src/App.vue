<template>
  <div id="app">
    <router-link to="/home">Go to Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  beforeCreate() {
    console.log("App组件 beforeCreate");
  },
  created() {
    console.log("App组件 created");
  },
  beforeMount() {
    console.log("App组件 beforeMount");
  },
  mounted() {
    console.log("App组件 mounted");
  },
  beforeDestroy() {
    console.log("App组件 beforeDestroy");
  },
  destroyed() {
    console.log("App组件 destroyed");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
