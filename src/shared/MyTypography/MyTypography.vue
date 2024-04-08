<template>
  <component
    :is="tagName"
    :class="[
      'typography',
      size ? `size_${size}` : '',
      bold ? 'bold' : '',
      `tag_${tagName}`,
      color ? `color_${color}` : color,
    ]"
  >
    <slot></slot
  ></component>
</template>

<script>
export default {
  name: "MyTypography",

  props: {
    tagName: {
      type: String,
      required: true,
      validator: function (value) {
        return ["span", "p", "h1", "h2", "h3", "h4", "h5"].includes(value);
      },
    },
    bold: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      size: function (value) {
        return ["xs", "s", "m", "l", "xl"].includes(value);
      },
    },

    color: {
      color: (value) =>
        [
          "background",
          "surface",
          "primary",
          "secondary",
          "onBackground",
          "onSurface",
          "onPrimary",
          "onSecondary",
          "lightest",
          "light",
          "hard",
          "hardest",
          "success",
          "info",
          "warning",
          "error",
        ].includes(value),
        default: "hardest"
    },
  },
};
</script>

<style scoped>
.typography {
  font-family: Rubik, "sans-serif";
  font-weight: 400;
  line-height: 150%;
}

.size_xs {
  font-size: 12px;
}

.size_s {
  font-size: 16px;
}

.size_m {
  font-size: 18px;
}

.size_l {
  font-size: 24px;
}

.size_xl {
  font-size: 36px;
}

.size_2xl {
  font-size: 48px;
}

.size_3xl {
  font-size: 64px;
}

.bold {
  font-weight: 700;
}

.color_background {
  color: rgb(244, 244, 242);
}
.color_surface {
  color: rgb(255, 255, 255);
}
.color_primary {
  color: rgb(255, 102, 51);
}
.color_secondary {
  color: rgb(112, 192, 91);
}
.color_onBackground {
  color: rgb(41, 30, 15);
}
.color_onSurface {
  color: rgb(65, 65, 65);
}
.color_onPrimary {
  color: rgb(255, 255, 255);
}
.color_onSecondary {
  color: rgb(255, 255, 255);
}
.color_lightest {
  color: rgb(243, 242, 241);
}
.color_light {
  color: rgb(191, 191, 191);
}
.color_hard {
  color: rgb(143, 143, 143);
}
.color_hardest {
  color: rgb(96, 96, 96);
}
.color_success {
  color: rgb(0, 140, 73);
}
.color_info {
  color: rgb(28, 185, 252);
}
.color_warning {
  color: rgb(252, 162, 28);
}
.color_error {
  color: rgb(216, 0, 0);
}
</style>
