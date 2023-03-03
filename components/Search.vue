<template>
  <section class="search">
    <SearchForm />
  </section>
</template>

<script>
import SearchForm from './SearchForm.vue';
export default {
  components: {
    SearchForm,
  },
};
</script>

<style lang="scss" scoped>
.search {
  @include gridable(100%);
  box-sizing: border-box;
  max-width: $max-width;
  padding: 10px 20px;
  justify-items: center;
}
</style>
