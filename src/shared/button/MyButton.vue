<template>
  <div class="">
    <button
      :class="[
        'header__btn',
        size ? `size_${size}` : size,
        state ? `state_${state}` : state,
        decoration ? `decoration_${decoration}` : decoration,
        disable ? `disable_${disable}` : disable,
      ]"
    >
      <div class="button__icon--left">
        <slot name="leftIcon"></slot>
      </div>
      <slot></slot>
      <div class="button__icon--right">
        <slot name="rightIcon"></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    size: {
      type: String,
      validator: function (value) {
        return ["s", "m", "l"].includes(value);
      },
    },

    state: {
      type: String,
      validator: function (value) {
        return ["primary", "secondary", "grayscale", "error"].includes(value);
      },
    },

    decoration: {
      type: String,
      validator: function (value) {
        return ["default", "outline", "of"].includes(value);
      },
    },

    disable: {
      type: Boolean,
      default: false,
    },

    iconLeft: {
      type: Boolean,
      default: false,
    },

    iconRight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {},
};
</script>

<style scoped>
.header__btn {
  padding: 8px;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  background: rgb(112, 192, 91);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.button__icon--left {
  margin-right: 8px;
}

.button__icon--right {
  margin-left: 8px;
}

.size_l {
  padding: 14px 16px;
}

.size_m {
  padding: 8px;
}

.size_s {
  padding: 4px 8px;
}

.state_primary {
  background-color: rgb(255, 102, 51);
}
.state_secondary {
  background-color: rgb(112, 192, 91);
}
.state_grayscale {
  background-color: rgb(243, 242, 241);
}

.state_error {
  background-color: rgb(216, 0, 0);
}

.decoration_default {
  border: 1px solid rgb(255, 102, 51);
  background-color: transparent;
}

.disable_true {
  opacity: 0.5;
}
</style>
