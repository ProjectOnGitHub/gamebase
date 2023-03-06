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
  @media screen and (max-width: $desktop) {
    grid-template-columns: repeat(3, minmax(200px, 1fr));
  }
  @media screen and (max-width: $tablet) {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
  @media screen and (max-width: $smartphone) {
    grid-template-columns: minmax(200px, 1fr);
  }
}
</style>
