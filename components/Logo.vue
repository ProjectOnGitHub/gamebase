<template>
  <nuxt-link
    class="logo"
    to="/">
    <svg-icon
      name="logo-icon"
      class="logo__icon" />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.logo {
  @include flexible(100%);
  align-items: center;
  &:hover .logo__icon {
    stroke: $color-text-main;
  }
  &__icon {
    stroke: $color-link-main;
    fill: $color-bg;
    width: 40px;
    height: 40px;
  }
}
</style>
