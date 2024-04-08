<template>
  <div class="avatar">
    <img :src="img" alt="Аватар пользователя" />
  </div>
</template>

<script>
export default {
  name: "MyAvatar",

  props: {
    img: String,
  },
};
</script>

<style scoped>

</style>
