<template>
  <header class="header">
    <div class="header__container">
      <Logo logo="logoText" />
      <Navigation />
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';
import Navigation from './Navigation.vue';

export default {
  components: {
    Logo,
    Navigation,
  },
  data() {
    return {
      logoText: 'Лого',
    };
  },
};
</script>

<style lang="scss" scoped></style>
