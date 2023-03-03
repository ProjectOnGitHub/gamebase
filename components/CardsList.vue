<template>
  <ul class="cards">
    <Card />
    <Card />
    <Card />
  </ul>
</template>

<script>
import Card from './Card.vue';
export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.cards {
  @include gridable(100%);
  @include unmarkedList;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
}
</style>
