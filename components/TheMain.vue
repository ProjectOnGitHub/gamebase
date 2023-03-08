<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main {
  @include gridable(100%);
  justify-items: center;
  box-sizing: border-box;
}
</style>
