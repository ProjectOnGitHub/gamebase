<template>
  <div class="app">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app {
  @include gridable(100%);
  font-family: 'Inter', Arial, sans-serif;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr min-content;
  justify-items: center;
  box-sizing: border-box;
  min-height: 100vh;
  height: 100%;
  background-color: $color-bg-main;
  font-weight: 400;
  line-height: 1.21;
  font-style: normal;
  color: $color-text-main;
}
</style>
