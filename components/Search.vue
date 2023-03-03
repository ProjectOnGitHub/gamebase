<template>
  <section class="search">
    <SearchForm />
    <h2 class="search__title">Результаты поиска</h2>
    <CardsList />
  </section>
</template>

<script>
import SearchForm from './SearchForm.vue';
import CardsList from './CardsList.vue';
export default {
  components: {
    SearchForm,
    CardsList,
  },
};
</script>

<style lang="scss" scoped>
.search {
  @include gridable(100%);
  gap: 20px;
  box-sizing: border-box;
  max-width: $max-width;
  padding: 35px 20px;
  justify-items: center;
  &__title {
    margin: 0;
    font-weight: 500;
    font-size: 28px;
    padding-top: 15px;
  }
}
</style>
