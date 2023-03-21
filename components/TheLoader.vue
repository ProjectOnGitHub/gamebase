<template>
  <div class="loader"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  border: 5px solid $color-bg-element;
  border-top: 5px solid $color-bg-loader;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;
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
