<template>
  <footer class="footer">
    <my-container>
      <div class="footer__wrapper">
        <div class="footer__logo">
          <my-logo
            bgColor="white"
            :textPresent="true"
            orientation="vertical"
          ></my-logo>
        </div>
        <ul class="footer__list">
          <li class="footer__item" v-for="link in links" :key="link.label">
            <router-link :to="link.href">
              <my-typography tagName="p" size="xs" color="onSurface">
                {{ link.label }}</my-typography
              >
            </router-link>
          </li>
        </ul>
        <ul class="footer__socials">
          <li
            class="footer__social"
            v-for="social in socials"
            :key="social.icon"
          >
            <router-link :to="social.link">
              <my-icon :icon="social.icon"></my-icon>
            </router-link>
          </li>
        </ul>
        <div class="footer__contact">
          <a href="tel: 88007773333" class="footer__contact-link"
            ><my-icon icon="phone"></my-icon>
            <my-typography tagName="p" size="s" color="onSurface"
              >8 800 777 33 33
            </my-typography>
          </a>
        </div>
        <div class="footer__create">
          <my-typography tagName="p" size="xs" color="onSurface"
            >Дизайн</my-typography
          >
          <my-icon icon="zasovskiy"></my-icon>
        </div>
      </div>
    </my-container>
  </footer>
</template>

<script>
import MyLogo from "@/shared/logo/MyLogo.vue";
import MyTypography from "@/shared/MyTypography/MyTypography.vue";
import MyIcon from "@/shared/Icon/MyIcon.vue";
import MyContainer from "@/shared/container/MyContainer.vue";

export default {
  components: { MyLogo, MyTypography, MyIcon, MyContainer },
  name: "MyFooter",

  data() {
    return {
      links: [
        { label: "О компании", href: "/" },
        { label: "Контакты", href: "/" },
        { label: "Вакансии", href: "/" },
        { label: "Статьи", href: "/" },
        { label: "Политика обработки персональных данных", href: "/" },
      ],

      socials: [
        { icon: "inst", link: "/asd" },
        { icon: "vk", link: "/zxc" },
        { icon: "fb", link: "/nbm" },
        { icon: "ok", link: "/nm," },
      ],
    };
  },
};
</script>

<style scoped>
.footer {
  padding: 20px 0;
  background-color: #f9f4e2;
  background-image: url("@/assets/img/bg-footer-pattern.png");
  min-height: 126px;
}

.footer__wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.footer__logo {
  margin-right: 15px;
}

.footer__list {
  display: flex;
  grid-gap: 40px;
  margin-right: 43px;
}

.footer__socials {
  display: flex;
  grid-gap: 16px;
}

.footer__contact-link {
  display: flex;
  grid-gap: 8px;
}

.footer__create {
  display: flex;
  order: 1;
  grid-gap: 8px;
  margin-left: auto;
}

@media screen and (max-width: 1207px) {
  .footer__wrapper {
    display: grid;
    grid-auto-flow: column;
  }

  .footer__logo {
    grid-column: 1;
    grid-row: 1 / 3;
  }

  .footer__list {
    flex-wrap: wrap;
    width: 338px;
    grid-row-gap: 8px;
  }

  .footer__list {
    grid-row: 1 / 3;
  }

  .footer__socials {
    flex-wrap: wrap;
    width: 72px;
    grid-gap: 8px;
    grid-row: 1 / 3;
    margin-left: 35px;
  }

  .footer__contact {
    grid-row: 1 / 2;
  }

  .footer__create {
    grid-row: 2 / 3;
  }
}

@media screen and (max-width: 767px) {
  .footer__wrapper {
    grid-gap: 8px;
    justify-content: center;
  }

  .footer__logo {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  .footer__logo:deep(svg) {
    height: 94px;
    width: 94px;
  }

  .footer__list {
    grid-column: 1 / -1;
    grid-row: 3;
    width: 341px;
    grid-column: span 2;
    margin-right: 0;
  }

  .footer__socials {
    flex-wrap: nowrap;
    grid-column: 2;
    grid-row: 1;
  }

  .footer__contact {
    grid-column: 2;
    grid-row: 2;
  }

  .footer__create {
    display: none;
  }
}
</style>
