<template>
  <article class="game__article">
    <h1 class="section__title game__title">
      {{ $store.state.gameById.title }}
    </h1>
    <p class="game__subtitle">
      {{ $store.state.gameById.description }}
    </p>
    <img
      :src="$store.state.gameById.thumbnail"
      :alt="$store.state.gameById.title"
      class="game__image"
    />
    <ul class="game__info">
      <li class="game__info-item">Genre: {{ $store.state.gameById.genre }}</li>
      <li class="game__info-item">Developer: {{ $store.state.gameById.developer }}</li>
      <li class="game__info-item">Publiser: {{ $store.state.gameById.publisher }}</li>
      <li class="game__info-item">Release: {{ $store.state.gameById.release_date }}</li>
      <li class="game__info-item">Platform: {{ $store.state.gameById.platform }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  mounted() {
    const { id } = this.$route.params;
    this.$store.dispatch('getGameById', id);
  }
};
</script>

<style lang="scss" scoped></style>
