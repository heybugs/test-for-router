<template>
  <div>
    page -b
  </div>
</template>

<script>
export default {
   beforeCreate() {
    console.log("pageB组件 beforeCreate");
  },
  created() {
    console.log("pageB组件 created");
  },
  beforeMount() {
    console.log("pageB组件 beforeMount");
  },
  mounted() {
    console.log("pageB组件 mounted");
  },
  beforeDestroy() {
    console.log("pageB组件 beforeDestroy");
  },
  destroyed() {
    console.log("pageB组件 destroyed");
  },
};
</script>

<style scoped>
</style>