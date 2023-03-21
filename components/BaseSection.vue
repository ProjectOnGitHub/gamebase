<template>
  <section
    class="section"
    :class="className"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  @include gridable(100%);
  gap: 35px;
  box-sizing: border-box;
  max-width: $max-width;
  padding: 35px 20px;
  justify-items: center;
  align-content: start;
  &__title {
    margin: 0;
    font-weight: 500;
    font-size: 28px;
    padding-top: 15px;
  }
}
</style>
