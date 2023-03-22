<template>
  <app>
    <the-header />
    <transition name="page">
      <nuxt />
    </transition>
    <the-footer />
  </app>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
html {
  overflow-x: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}
</style>
