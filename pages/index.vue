<template>
  <the-main>
    <base-section class-name="games">
      <h2 class="section__title games__title">Games</h2>
      <the-search-form />
      <p class="games__text">{{ numberOfGames }} game(s) found</p>
      <cards-list>
        <cards-list-item
          v-for="game in gamesPerPage"
          :key="game.id"
          :game="game"
        />
      </cards-list>
      <base-button
        v-if="displayedMoreButton"
        class-name="more__button"
        @click="addMoreCards(number)"
      >
        More games
      </base-button>
    </base-section>
  </the-main>
</template>

<script>
export default {
  data() {
    return {
      cardsOnPage: 12,
      number: 12
    };
  },
  computed: {
    games() {
      return this.$store.state.filteredGames;
    },
    gamesPerPage() {
      return this.games.slice(0, `${this.cardsOnPage}`);
    },
    displayedMoreButton() {
      return this.numberOfGames >= this.cardsOnPage;
    },
    numberOfGames() {
      return this.games.length;
    }
  },
  watch: {
    games() {
      this.cardsOnPage = 12;
    }
  },
  methods: {
    addMoreCards(number) {
      this.cardsOnPage += number;
    }
  }
};
</script>

<style lang="scss" scoped>
.games {
  &__text {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    color: $color-text-main;
  }
}
</style>
