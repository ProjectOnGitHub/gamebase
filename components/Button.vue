<template>
  <button
    :class="className"
    :name="buttonName"
    :type="buttonType">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
    buttonName: {
      type: String,
      default: '',
    },
    buttonType: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped></style>
