<template>
  <div class="header">
    <div class="header__content">
      <my-container class="header__container">
        <div class="header__wrapper">
          <div class="header__logo-inner">
            <my-logo
              class="header__logo"
              bgColor="white"
              :textPresent="isTablet ? false : true"
              :orientation="isTablet ? 'vertical' : 'horizontal'"
            ></my-logo>
          </div>
          <my-button
            @mouseenter="isOpenCanalog = true"
            class="header__button"
            size="m"
            color="secondary"
          >
            <template #leftIcon>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="feather-icon / menu"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Shape (Stroke)"
                  d="M2.5 12C2.5 11.72 2.72 11.5 3 11.5L21 11.5C21.27 11.5 21.5 11.72 21.5 12C21.5 12.27 21.27 12.5 21 12.5L3 12.5C2.72 12.5 2.5 12.27 2.5 12Z"
                  fill="#FFFFFF"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Shape (Stroke)"
                  d="M2.5 6C2.5 5.72 2.72 5.5 3 5.5L21 5.5C21.27 5.5 21.5 5.72 21.5 6C21.5 6.27 21.27 6.5 21 6.5L3 6.5C2.72 6.5 2.5 6.27 2.5 6Z"
                  fill="#FFFFFF"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Shape (Stroke)"
                  d="M2.5 18C2.5 17.72 2.72 17.5 3 17.5L21 17.5C21.27 17.5 21.5 17.72 21.5 18C21.5 18.27 21.27 18.5 21 18.5L3 18.5C2.72 18.5 2.5 18.27 2.5 18Z"
                  fill="#FFFFFF"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>
            </template>
            <my-typography
              class="header__button-text"
              :tagName="'span'"
              size="xs"
              color="background"
              >Каталог</my-typography
            >
          </my-button>

          <my-input
            class="header__input"
            iconInput="rightIconL"
            placeholder="Найти товар"
          >
            <template #rightIcon>
              <svg
                width="24.000000"
                height="24.000000"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <rect
                  id="feather-icon / search"
                  width="24.000000"
                  height="24.000000"
                  fill="#FFFFFF"
                  fill-opacity="0"
                />
                <path
                  id="Oval (Stroke)"
                  d="M2.5 10.5C2.5 6.08 6.08 2.5 10.5 2.5C14.91 2.5 18.5 6.08 18.5 10.5C18.5 14.91 14.91 18.5 10.5 18.5C6.08 18.5 2.5 14.91 2.5 10.5ZM10.5 3.5C6.63 3.5 3.5 6.63 3.5 10.5C3.5 14.36 6.63 17.5 10.5 17.5C14.36 17.5 17.5 14.36 17.5 10.5C17.5 6.63 14.36 3.5 10.5 3.5Z"
                  fill="#414141"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
                <path
                  id="Shape (Stroke)"
                  d="M15.44 15.44C15.64 15.25 15.95 15.25 16.15 15.44L21.35 20.64C21.54 20.84 21.54 21.15 21.35 21.35C21.15 21.54 20.84 21.54 20.64 21.35L15.44 16.15C15.25 15.95 15.25 15.64 15.44 15.44Z"
                  fill="#414141"
                  fill-opacity="1.000000"
                  fill-rule="evenodd"
                />
              </svg>
            </template>
          </my-input>

          <my-navigation :navigations="navigations"></my-navigation>

          <div class="header__user-wrapper">
            <my-user-menu
              v-if="personStore && personStore.isAuth"
              class="header__user-menu"
              :data="userMenu"
            ></my-user-menu>

            <my-button
              v-else
              @click="toggleUserMenu"
              class="header__user-button"
              size="m"
              color="primary"
            >
              <template #rightIcon>
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="feather-icon / log-in"
                    width="24.000000"
                    height="24.000000"
                    fill="#FFFFFF"
                    fill-opacity="0"
                  />
                  <path
                    id="Shape (Stroke)"
                    d="M13.5 2C13.5 1.72 13.72 1.5 14 1.5L19 1.5C20.37 1.5 21.5 2.61 21.5 4L21.5 20C21.5 21.38 20.37 22.5 19 22.5L14 22.5C13.72 22.5 13.5 22.27 13.5 22C13.5 21.72 13.72 21.5 14 21.5L19 21.5C19.82 21.5 20.5 20.82 20.5 20L20.5 4C20.5 3.17 19.82 2.5 19 2.5L14 2.5C13.72 2.5 13.5 2.27 13.5 2Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Shape (Stroke)"
                    d="M10.64 7.64C10.83 7.45 11.16 7.45 11.35 7.64L15.35 11.64C15.54 11.84 15.54 12.15 15.35 12.35L11.35 16.35C11.16 16.54 10.83 16.54 10.64 16.35C10.45 16.15 10.45 15.84 10.64 15.64L14.29 12L10.64 8.35C10.45 8.15 10.45 7.84 10.64 7.64Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                  <path
                    id="Shape (Stroke)"
                    d="M2.5 12C2.5 11.72 2.72 11.5 3 11.5L15 11.5C15.27 11.5 15.5 11.72 15.5 12C15.5 12.27 15.27 12.5 15 12.5L3 12.5C2.72 12.5 2.5 12.27 2.5 12Z"
                    fill="#FFFFFF"
                    fill-opacity="1.000000"
                    fill-rule="evenodd"
                  />
                </svg>
              </template>
              <my-typography :tagName="'span'" size="xs" color="background"
                >Войти</my-typography
              >
            </my-button>
          </div>
        </div>
      </my-container>
    </div>
    <div
      v-show="isOpenCanalog"
      @mouseleave="isOpenCanalog = false"
      class="header__dropdown-menu"
    >
      <my-dropdown></my-dropdown>
    </div>
  </div>
</template>

<script>
import MyNavigation from "@/features/header/navigation/MyNavigation.vue";
import MyUserMenu from "@/features/header/user-menu/MyUserMenu.vue";
import MyDropdown from "@/features/header/dropdown-menu/MyDropdown.vue";
import { usePersonStore } from "@/entities/person/model/store.js";
import { useScreenStore } from "@/entities/screen/model/store.js";
import { useUserMenuStore } from "@/features/header/user-menu/model/store.js";
import MyButton from "@/shared/button/MyButton.vue";
import MyTypography from "@/shared/MyTypography/MyTypography.vue";
import MyLogo from "@/shared/logo/MyLogo.vue";
import MyInput from "@/shared/input/MyInput.vue";
import MyContainer from "@/shared/container/MyContainer.vue";

export default {
  components: {
    MyButton,
    MyTypography,
    MyLogo,
    MyInput,
    MyContainer,
    MyNavigation,
    MyUserMenu,
    MyDropdown,
  },
  name: "MyHeader",

  data() {
    return {
      isOpenCanalog: false,
      navigations: [
        { label: "Избранное", icon: "favorites", count: 0, link: "/favorites" },
        { label: "Заказы", icon: "orders", count: 0, link: "/orders" },
        { label: "Корзина", icon: "cart", count: 1, link: "/cart" },
      ],
    };
  },

  mounted() {
    this.screenStore.updateWidth(window.innerWidth);
    return window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },

  computed: {
    isTablet() {
      return (
        this.screenStore.platform === "tablet" ||
        this.screenStore.platform === "mobile"
      );
    },

    screenStore() {
      return useScreenStore();
    },

    personStore() {
      return usePersonStore();
    },

    userMenuStore() {
      return useUserMenuStore();
    },

    userMenu() {
      return {
        avatar: this.personStore.person.avatar,
        name: this.personStore.person.name,
        menu: this.userMenuStore.menu,
      };
    },
  },

  methods: {
    toggleUserMenu() {
      this.personStore.isAuth = !this.personStore.isAuth;
    },

    handleResize() {
      this.screenStore.updateWidth(window.innerWidth);
    },
  },
};
</script>

<style scoped>
.header__content {
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.1);
  background-color: rgb(255, 255, 255);
  position: relative;
  z-index: 2;
}

.header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 14px 0 11px 0;
}

.header__logo-inner {
  margin-right: 10px;
}

.header__button {
  margin-left: 40px;
  margin-right: 16px;
}

.header__input {
  max-width: 375px;
  width: 100%;
  margin-right: -10px;
}

.header__user-button {
  width: 157px;
  margin-left: 32px;
}

@media screen and (max-width: 1207px) {
  .header__wrapper {
    justify-content: space-evenly;
  }

  .header__button-text {
    display: none;
  }

  .header__button {
    margin-left: 20px;
    margin-right: 8px;
  }

  .header__button:deep(.btn) {
    width: 43px;
    justify-content: center;
  }

  .header__button:deep(.button__icon--left),
  .header__button:deep(.button__icon--right) {
    margin: 0;
  }

  .header__user-button {
    width: 90px;
    margin-left: 16px;
  }
}

@media screen and (max-width: 767px) {
  .header__button,
  .header__nav,
  .header__user-wrapper {
    display: none;
  }
}
</style>
