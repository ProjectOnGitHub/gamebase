<template>
  <div class="loader">
    <div class="loader__circle"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  @include gridable(100%);
  justify-content: center;
  align-content: stretch;
  height: 100%;
  &__circle {
    border: 5px solid $color-bg-element;
    border-top: 5px solid $color-bg-loader;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
