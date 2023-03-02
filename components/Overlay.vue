<template>
  <div
    class="overlay"
    @click="$emit('click')"></div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.overlay {
  display: none;
  @media screen and (max-width: $tablet-small) {
    position: fixed;
    top: 0;
    right: -150%;
    z-index: 15;
    display: block;
    width: 100%;
    height: 100vh;
    background: $color-bg;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
    &_opened {
      left: 0;
      visibility: visible;
      cursor: pointer;
      opacity: 0.4;
      transition: 0.5s;
    }
  }
}
</style>
