<template>
  <ul class="cards">
    <slot></slot>
  </ul>
</template>

<script></script>

<style lang="scss" scoped>
.cards {
  @include gridable(100%);
  @include unmarkedList;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
}
</style>
