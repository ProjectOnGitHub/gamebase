<template>
  <article class="game__article">
    <h1 class="section__title game__title">
      {{ game.title }}
    </h1>
    <p class="game__subtitle">
      {{ game.description }}
    </p>
    <img
      :src="game.thumbnail"
      :alt="game.title"
      class="game__image"
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
const apiKey = process.env.API_KEY;
const apiHost = process.env.API_HOST;
export default {
  data() {
    return {
      game: {}
    };
  },
  mounted() {
    const { id } = this.$route.params;
    return fetch(`https://${apiHost}/api/game?id=${id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${apiKey}`,
        'X-RapidAPI-Host': `${apiHost}`
      }
    })
      .then(res => res.json())
      .then(res => {
        this.game = res;
      });
  }
};
</script>

<style lang="scss" scoped></style>
