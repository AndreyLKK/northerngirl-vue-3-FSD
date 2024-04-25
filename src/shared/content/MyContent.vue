<template>
  <main class="main"></main>
</template>

<script>
export default {
  name: "MyContent",
};
</script>

<style scoped>
.main {
  min-height: calc(100vh - 126px - 70px);
}

@media screen and (max-width: 767px) {
  .main {
    min-height: calc(100vh - 189px - 70px - 75px);
  }
}
</style>
