<template>
  <div class="input__wrapper">
    <div class="input__icon--left">
      <slot name="leftIcon"></slot>
    </div>
    <input
      :placeholder="placeholder"
      :class="['input', `size_${size}`, `iconInput_${iconInput}`]"
      type="text"
    />
    <div class="input__icon--right">
      <slot name="rightIcon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    size: {
      typo: String,
      default: "m",
    },

    label: {
      type: Boolean,
      require: false,
    },

    placeholder: {
      type: String,
      require: true,
    },

    iconInput: {
      type: String,
      require: false,
    },
  },
};
</script>

<style scoped>
.input {
  border: 1px solid rgb(191, 191, 191);
  background: rgb(255, 255, 255);
  padding: 8px 16px 8px 16px;
  border-radius: 4px;
  width: 100%;
}

.input::placeholder {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0%;
}

.input__wrapper {
  display: flex;
  align-items: center;
}

.input__icon--left {
  left: 40px;
  position: relative;
}

.input__icon--right {
  position: relative;
  right: 40px;
}

.iconInput_leftIconM {
  padding: 8px 16px 8px 40px;
}

.iconInput_leftIconL {
  padding: 12px 16px 12px 52px;
}

.iconInput_rightIconM {
  padding: 8px 40px 8px 16px;
}

.iconInput_rightIconL {
  padding: 12px 52px 12px 16px;
}

.iconInput_dableIconL {
  padding: 8px 40px 8px 40px;
}

.iconInput_dableIconM {
  padding: 12px 52px 12px 52px;
}
</style>
