<template>
  <div class="app">
    <slot />
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
  justify-items: center;
  align-content: space-between;
  box-sizing: border-box;
  height: 100%;
  background-color: $color-bg-main;
  font-weight: 400;
  line-height: 1.21;
  font-style: normal;
  color: $color-text-main;
}
</style>
