<template>
  <header class="header">
    <div class="header__container">
      <base-logo logo="logoText" />
    </div>
  </header>
</template>

<script>
import BaseLogo from './BaseLogo.vue';

export default {
  components: { BaseLogo },
  data() {
    return {
      logoText: 'Лого'
    };
  }
};
</script>

<style lang="scss" scoped>
.header {
  @include gridable(100%);
  justify-items: center;
  box-sizing: border-box;
  background-color: $color-bg-element;
  &__container {
    @include gridable(100%);
    grid-template-columns: repeat(2, min-content);
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    max-width: $max-width;
    padding: 10px 20px;
    gap: 20px 0;
    height: $header-height;
  }
}
</style>
