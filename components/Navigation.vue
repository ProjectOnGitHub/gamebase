<template>
  <nav class="header__navigation">
    <Button
      className="header__button"
      buttonName="header-button"
      buttonType="button"
      @click="handleToggleMenu">
      <Cross :class="{cross_active: active}" />
    </Button>
    <Overlay
      :class="{overlay_opened: active}"
      @click="handleToggleMenu" />
    <HeaderMenu
      :class="{header__menu_opened: active}"
      @click="handleToggleMenu" />
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
  data() {
    return {
      active: false,
    };
  },
  methods: {
    handleToggleMenu() {
      this.active = !this.active;
      console.log(this.active);
    },
  },
};
</script>

<style lang="scss" scoped></style>
