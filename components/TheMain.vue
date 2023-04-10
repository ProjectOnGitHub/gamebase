<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.main {
  @include gridable(100%);
  justify-items: center;
  box-sizing: border-box;
  align-self: start;
  height: 100%;
}
</style>
