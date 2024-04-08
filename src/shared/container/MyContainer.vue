<template>
  <div class="container"><slot></slot></div>
</template>

<script>
export default {
  components: {},
  name: "MyContainer",
  props: {},
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
