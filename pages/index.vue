<template>
  <the-main>
    <base-section class-name="games">
      <h2 class="section__title games__title">Games</h2>
      <the-search-form />
      <cards-list>
        <cards-list-item
          v-for="game in listingCardsPerPage"
          :key="game.id"
          :game="game"
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
const apiKey = process.env.API_KEY;
const apiHost = process.env.API_HOST;
export default {
  data() {
    return {
      games: [],
      cardsOnPage: 12,
      number: 12
    };
  },
  asyncData() {
    return fetch(`https://${apiHost}/api/games`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${apiKey}`,
        'X-RapidAPI-Host': `${apiHost}`
      }
    })
      .then(res => res.json())
      .then(res => {
        const games = res;
        console.log(games);
        return { games };
      })
      .catch(err => console.error(err.message));
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
