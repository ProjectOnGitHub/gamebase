<template>
  <nuxt-link
    class="logo"
    to="/">
    {{ logo }}
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

<style lang="scss" scoped></style>
