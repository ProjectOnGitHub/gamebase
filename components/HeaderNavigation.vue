<template>
  <nav class="header__navigation">
    <BaseButton
      className="header__button"
      buttonName="header-button"
      buttonType="button"
      @click="handleToggleMenu">
      <BaseCross :class="{cross_active: active}" />
    </BaseButton>
    <TheOverlay
      :class="{overlay_opened: active}"
      @click="handleToggleMenu" />
    <HeaderMenu
      :class="{header__menu_opened: active}"
      @click="handleToggleMenu" />
  </nav>
</template>

<script>
export default {
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
