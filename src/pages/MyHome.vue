<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "@/wigets/MyHeader.vue";

export default {
  components: {
    MyHeader,
  },
  name: "MyHome",
};
</script>

<style scoped></style>
