<template>
  <div>
    <button
      :class="[
        'btn',
        `size_${size}`,
        `color_${color}`,
        `decoration_${decoration}`,
        `iconCenter_${iconCenter}`,
        `text_${text}`,
      ]"
      :disabled="disabled"
    >
      <div class="button__icon--left">
        <slot name="leftIcon"></slot>
      </div>

      <slot v-if="text"></slot>

      <div class="button__icon--center" v-else>
        <slot name="centerIcon"></slot>
      </div>

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
      default: "s",
    },

    color: {
      type: String,
      default: "primary",
    },

    decoration: {
      type: String,
      default: "default",
    },

    disabled: {
      type: Boolean,
      required: false,
    },

    text: {
      type: Boolean,
      default: true,
    },

    iconLeft: {
      type: Boolean,
      default: false,
    },

    iconRight: {
      type: Boolean,
      default: false,
    },
    iconCenter: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.btn {
  padding: 8px;
  color: rgb(255, 255, 255);
  border-radius: 4px;
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
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

.color_primary {
  background-color: rgb(255, 102, 51);
}

.color_secondary {
  background-color: rgb(112, 192, 91);
}

.color_grayscale {
  background-color: rgb(243, 242, 241);
}

.color_error {
  background-color: rgb(216, 0, 0);
}

.decoration_outline {
  border: 1px solid rgb(255, 102, 51);
  background-color: transparent;
}

.decoration_no {
  border: none;
  background-color: transparent;
}

.btn:disabled {
  opacity: 0.5;
  cursor: default;
}

.button__icon--left {
  margin-right: 8px;
}

.button__icon--right {
  margin-left: 8px;
}
.text_false {
  display: block;
}
</style>
