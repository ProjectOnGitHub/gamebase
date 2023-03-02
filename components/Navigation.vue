<template>
  <nav class="header__navigation">
    <HeaderButton
      className="header__button"
      buttonName="header-button"
      buttonType="button"
      @click="handleToggleMenu">
      <Cross :class="{cross_active: active}" />
    </HeaderButton>
    <Overlay :class="{overlay_opened: active}" />
    <HeaderMenu :class="{header__menu_opened: active}" />
  </nav>
</template>

<script>
import HeaderButton from './Button.vue';
import HeaderMenu from './HeaderMenu.vue';
import Overlay from './Overlay.vue';
import Cross from './Cross.vue';
export default {
  components: {
    HeaderButton,
    HeaderMenu,
    Overlay,
    Cross,
  },
  props: {
    active: {
      type: Boolean,
      default: false,
    },
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
