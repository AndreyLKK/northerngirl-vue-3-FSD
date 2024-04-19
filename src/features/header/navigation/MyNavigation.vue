<template>
  <nav class="header__nav">
    <ul class="header__list">
      <li
        class="header__item"
        v-for="navigation in navigations"
        :key="navigation.label"
      >
        <router-link :to="navigation.link">
          <my-icon :icon="navigation.icon"></my-icon>
          <my-typography tagName="p" size="xs">{{
            navigation.label
          }}</my-typography>
          <my-typography
            class="header__item-count"
            tagName="span"
            size="xs"
            v-if="navigation.count"
          >
            {{ navigation.count }}
          </my-typography>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import MyTypography from "@/shared/MyTypography/MyTypography.vue";
import MyIcon from "@/shared/Icon/MyIcon.vue";

export default {
  components: { MyTypography, MyIcon },
  name: "MyNavigation",
  props: {
    navigations: Array,
  },
};
</script>

<style scoped>
.header__list {
  display: flex;
  grid-gap: 24px;
}

.header__item {
  position: relative;
  text-align: center;
}

.header__item-count {
  position: absolute;
  top: -15%;
  right: 27%;
  background-color: rgb(255, 102, 51);
  padding: 1px 4px;
  border-radius: 4px;
  line-height: 1;
  color: rgb(255, 255, 255);
}
</style>
