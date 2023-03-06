<template>
  <section class="games">
    <slot></slot>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.games {
  @include gridable(100%);
  gap: 20px;
  box-sizing: border-box;
  max-width: $max-width;
  padding: 35px 20px;
  justify-items: center;
  &__title {
    margin: 0;
    font-weight: 500;
    font-size: 28px;
    padding-top: 15px;
  }
}
</style>
