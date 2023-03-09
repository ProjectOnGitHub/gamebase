<template>
  <article class="game__article">
    <h1 class="section__title game__title">
      {{ game.title }}
    </h1>
    <p class="game__subtitle">
      {{ game.short_description }}
    </p>
    <img
      :src="game.thumbnail"
      :alt="game.title"
      class="game_image"
    />
    <ul class="game__info">
      <li class="game__info-item">Genre: {{ game.genre }}</li>
      <li class="game__info-item">Developer: {{ game.developer }}</li>
      <li class="game__info-item">Publiser: {{ game.publisher }}</li>
      <li class="game__info-item">Release: {{ game.release_date }}</li>
      <li class="game__info-item">Platform: {{ game.platform }}</li>
    </ul>
  </article>
</template>

<script>
export default {
  computed: {
    game() {
      const { id } = this.$route.params;
      return this.$store.getters.getCurrentGame(id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
