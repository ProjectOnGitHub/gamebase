<template>
  <ul class="cards">
    <Button @click="getAllGames">Кнопка</Button>
    <Card
      v-for="game in games"
      :key="game.id"
      :name="game.title"
      :image="game.thumbnail"
      :genre="game.genre"
      :url="game.url" />
  </ul>
</template>

<script>
const API_KEY = process.env.API_KEY;
const API_HOST = process.env.API_HOST;
const options = {
  headers: {
    'X-RapidAPI-Key': `${API_KEY}`,
    'X-RapidAPI-Host': `${API_HOST}`,
  },
};
export default {
  data() {
    return {
      games: [],
    };
  },
  methods: {
    getAllGames() {
      fetch(`https://${API_HOST}/api/games`, {
        method: 'GET',
        options,
      })
        .then((res) => res.json())
        .then((res) => (this.games = res))
        .catch((err) => console.error(err));
    },
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
