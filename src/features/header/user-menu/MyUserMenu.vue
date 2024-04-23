<template>
  <div @click="toggleMenu" :class="['user-menu', `is-open_${isOpen}`]">
    <my-avatar
      :img="data.avatar"
      alt="Аватар пользователя"
      class="user-menu__avatar"
    ></my-avatar>
    <my-typography
      :tagName="'p'"
      size="s"
      color="onSurface"
      class="user-menu__name"
      >{{ data.name }}</my-typography
    >
    <my-button size="m" decoration="no" :text="false" class="user-menu__btn">
      <template #centerIcon>
        <svg
          width="13.000000"
          height="7.000000"
          viewBox="0 0 13 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <desc>Created with Pixso.</desc>
          <defs />
          <path
            id="Shape (Stroke)"
            d="M-0.36 -0.36C-0.16 -0.55 0.15 -0.55 0.35 -0.36L6 5.29L11.64 -0.36C11.84 -0.55 12.15 -0.55 12.35 -0.36C12.54 -0.16 12.54 0.15 12.35 0.35L6.35 6.35C6.15 6.54 5.84 6.54 5.64 6.35L-0.36 0.35C-0.55 0.15 -0.55 -0.16 -0.36 -0.36Z"
            fill="#414141"
            fill-opacity="1.000000"
            fill-rule="evenodd"
          />
        </svg>
      </template>
    </my-button>
    <ul v-if="isOpen" class="user-menu__list">
      <li v-for="item in data.menu" :key="item.label" class="user-menu__item">
        <router-link v-if="item.link" :to="item.link" class="user-menu__link"
          ><my-typography
            :tagName="'p'"
            size="m"
            color="onSurface"
            class="user-menu__link-text"
            >{{ item.label }}</my-typography
          ></router-link
        >
        <my-typography
          @click="onClickItem"
          v-else
          :tagName="'p'"
          size="m"
          color="onSurface"
          class="user-menu__link-text"
          >{{ item.label }}</my-typography
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { usePersonStore } from "@/entities/person/model/store.js";
import MyAvatar from "@/shared/avatar/MyAvatar.vue";
import MyTypography from "@/shared/MyTypography/MyTypography.vue";
import MyButton from "@/shared/button/MyButton.vue";

export default {
  components: { MyAvatar, MyTypography, MyButton },
  name: "MyUserMenu",

  data() {
    return {
      isOpen: false,
      state: null,
    };
  },

  props: {
    data: {
      avatar: String,
      name: String,
      menu: Array,
    },
  },

  mounted() {
    this.store = usePersonStore();
  },

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    onClickItem() {
      this.store.isAuth = !this.store.isAuth;
    },
  },
};
</script>

<style scoped>
.user-menu {
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  align-items: center;
  grid-gap: 10px;
  margin-left: 40px;
  cursor: pointer;
  width: 217px;
  position: relative;
}

.user-menu__btn {
  margin-left: 32px;
}

.user-menu__list {
  display: grid;
  grid-gap: 10px;
  grid-column: 1 / 4;
  position: absolute;
  top: 50px;
  background-color: rgb(255, 255, 255);
  box-shadow: 4px 12px 16px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  border-radius: 5px;
}

.user-menu__item {
  padding: 8px;
}

@media screen and (max-width: 1207px) {
  .user-menu__name {
    display: none;
  }

  .user-menu__btn {
    display: none;
  }

  .user-menu {
    width: max-content;
  }

  .user-menu__list {
    width: max-content;
    right: 0;
  }
}
</style>
