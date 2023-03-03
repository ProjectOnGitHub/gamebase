<template>
  <ul class="cards">
    <Card />
    <Card />
    <Card />
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cards {
  @include gridable(100%);
  @include unmarkedList;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
}
</style>
