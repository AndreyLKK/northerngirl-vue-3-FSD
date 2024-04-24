<template>
  <main class="main">
    <my-header></my-header>
    <my-bottom-tag-navigator></my-bottom-tag-navigator>
  </main>
</template>

<script>
import MyHeader from "@/wigets/MyHeader.vue";
import MyBottomTagNavigator from "@/wigets/MyBottomTagNavigator.vue";

export default {
  components: {
    MyHeader,
    MyBottomTagNavigator,
  },
  name: "MyHome",
};
</script>

<style scoped></style>
