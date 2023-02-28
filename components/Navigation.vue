<template>
  <nav class="header__navigation">
    <Button
      className="header__button"
      buttonType="button"
      buttonName="header-button">
      <Cross />
    </Button>
    <Overlay />
    <HeaderMenu />
  </nav>
</template>

<script>
import Button from './Button.vue';
import HeaderMenu from './HeaderMenu.vue';
import Overlay from './Overlay.vue';
import Cross from './Cross.vue';
export default {
  components: {
    Button,
    HeaderMenu,
    Overlay,
    Cross,
  },
};
</script>

<style lang="scss" scoped>
.header__button {
  color: red;
}
</style>
