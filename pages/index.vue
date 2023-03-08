<template>
  <the-main>
    <base-section
      class-name="game"
      title="Games"
    >
      <the-search-form />
      <cards-list>
        <cards-list-item
          v-for="game in listingCardsPerPage"
          :key="game.id"
          :name="game.title"
          :image="game.thumbnail"
          :genre="game.genre"
          :url="game.url"
        />
      </cards-list>
      <base-button
        class-name="more__button"
        @click="addMoreCards(number)"
      >
        More games
      </base-button>
    </base-section>
  </the-main>
</template>

<script>
const { API_KEY } = process.env;
const { API_HOST } = process.env;
export default {
  asyncData() {
    return fetch(`https://${API_HOST}/api/games`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${API_KEY}`,
        'X-RapidAPI-Host': `${API_HOST}`
      }
    })
      .then(res => res.json())
      .then(res => {
        const games = res;
        return { games };
      })
      .catch(err => console.error(err.message));
  },
  data() {
    return {
      games: [],
      API_KEY: process.env.API_KEY,
      API_HOST: process.env.API_HOST,
      cardsOnPage: 12,
      number: 12
    };
  },
  computed: {
    listingCardsPerPage() {
      return this.games.slice(0, `${this.cardsOnPage}`);
    }
  },
  methods: {
    addMoreCards(number) {
      this.cardsOnPage += number;
    }
  }
};
</script>

<style lang="scss" scoped></style>
