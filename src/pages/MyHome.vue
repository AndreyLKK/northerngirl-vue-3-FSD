<template>
  <my-header></my-header>
  <my-content></my-content>
  <my-footer></my-footer>
  <my-bottom-tag-navigator></my-bottom-tag-navigator>
</template>

<script>
import MyHeader from "@/wigets/MyHeader.vue";
import MyFooter from "@/wigets/MyFooter.vue";
import MyBottomTagNavigator from "@/wigets/MyBottomTagNavigator.vue";
import MyContent from "@/shared/content/MyContent.vue";

export default {
  components: {
    MyHeader,
    MyBottomTagNavigator,
    MyFooter,
    MyContent,
  },
  name: "MyHome",
};
</script>

<style scoped></style>
