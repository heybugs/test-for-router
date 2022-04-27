<template>
  <div>
    <p>about 页面</p>
    <compa></compa>
    <compb></compb>
  </div>
</template>

<script>
import compa from "./components/page-a.vue";
import compb from "./components/page-b.vue";

export default {
  components: {
    compa,
    compb,
  },
  beforeCreate() {
    console.log("about组件 beforeCreate");
  },
  created() {
    console.log("about组件 created");
  },
  beforeMount() {
    console.log("about组件 beforeMount");
  },
  mounted() {
    console.log("about组件 mounted");
  },
  beforeDestroy() {
    console.log("about组件 beforeDestroy");
  },
  destroyed() {
    console.log("about组件 destroyed");
  },
};
</script>

<style scoped>
</style>