<template>
  <div>
    page -a
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log("pageA组件 beforeCreate");
  },
  created() {
    console.log("pageA组件 created");
  },
  beforeMount() {
    console.log("pageA组件 beforeMount");
  },
  mounted() {
    console.log("pageA组件 mounted");
  },
  beforeDestroy() {
    console.log("pageA组件 beforeDestroy");
  },
  destroyed() {
    console.log("pageA组件 destroyed");
  },
};
</script>

<style scoped>
</style>