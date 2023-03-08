<template>
  <nav class="header__navigation">
    <base-button
      class-name="header__button"
      button-name="header-button"
      button-type="button"
      @click="handleToggleMenu"
    >
      <base-cross :class="{ cross_active: active }" />
    </base-button>
    <the-overlay
      :class="{ overlay_opened: active }"
      @click="handleToggleMenu"
    />
    <header-menu
      :class="{ header__menu_opened: active }"
      @click="handleToggleMenu"
    />
  </nav>
</template>

<script>
import BaseCross from './BaseCross.vue';

export default {
  components: { BaseCross },
  data() {
    return {
      active: false
    };
  },
  methods: {
    handleToggleMenu() {
      this.active = !this.active;
    }
  }
};
</script>

<style lang="scss" scoped></style>
