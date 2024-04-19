<template>
  <div class="dropdown-menu">
    <my-container>
      <ul class="dropdown-menu__list">
        <li
          class="dropdown-menu__item"
          v-for="section in catalogSections.catalog"
          :key="section.label"
        >
          <router-link class="dropdown-menu__link" :to="section.link">
            <my-typography
              class="dropdown-menu__text"
              tagName="p"
              bold
              size="s"
              color="onSurface"
            >
              {{ section.label }}
            </my-typography>
          </router-link>
        </li>
      </ul>
    </my-container>
  </div>
</template>

<script>
import { useCatalogStore } from "@/entities/catalog/model/store.js";
import MyContainer from "@/shared/container/MyContainer.vue";
import MyTypography from "@/shared/MyTypography/MyTypography.vue";

export default {
  components: { MyContainer, MyTypography },
  name: "MyDropdownMenu",

  data() {
    return {
      catalogSections: [],
    };
  },

  mounted() {
    const catalogStore = useCatalogStore();
    this.catalogSections = catalogStore;
  },
};
</script>

<style scoped>
.dropdown-menu {
  position: fixed;
  top: 70px;
  left: 0;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.15);
  width: 100%;
}

.dropdown-menu__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 40px 0;
  grid-gap: 24px 40px;
}

.dropdown-menu {
  animation: dropdown-menu 1s forwards;
}

@keyframes dropdown-menu {
  from {
    top: 0;
    opacity: 0;
  }
  to {
    top: 70px;
    opacity: 1;
  }
}

.dropdown-menu__text {
  transition: color 0.5s;
}

.dropdown-menu__text:hover {
  color: rgb(255, 102, 51);
}
</style>
