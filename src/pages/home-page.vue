<template>
  <div>
    <p>home 主页 </p>
    <router-link to="/home/about">Go to About</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
   beforeCreate() {
    console.log('home组件 beforeCreate');
  },
  created() {
    console.log('home组件 created');
  },
  beforeMount() {
    console.log('home组件 beforeMount');
  },
  mounted() {
    console.log('home组件 mounted');
  },
  beforeDestroy() {
    console.log('home组件 beforeDestroy');
  },
  destroyed() {
    console.log('home组件 destroyed');
  },
};
</script>

<style lang="scss" scoped>
</style>