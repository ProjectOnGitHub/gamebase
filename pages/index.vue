<template>
  <the-main>
    <base-section class-name="games">
      <h2 class="section__title games__title">Games</h2>
      <the-search-form />
      <the-loader v-if="isShowLoader" />
      <template v-if="!isShowLoader">
        <p class="games__text">
          {{ textForFoundedGames }}
        </p>
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
      </template>
    </base-section>
  </the-main>
</template>

<script>
import BaseButton from '../components/BaseButton.vue';
import CardsListItem from '../components/CardsListItem.vue';
import TheLoader from '../components/TheLoader.vue';
import TheSearchForm from '../components/TheSearchForm.vue';
import TheMain from '../components/TheMain.vue';

export default {
  components: { TheMain, TheSearchForm, TheLoader, CardsListItem, BaseButton },
  data() {
    return {
      cardsOnPage: 12,
      number: 12,
      isShowLoader: false
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
      return this.numberOfGames > this.cardsOnPage;
    },
    numberOfGames() {
      return this.games.length;
    },
    textForFoundedGames() {
      if (this.numberOfGames === 0) {
        return 'Games not found';
      }
      if (this.numberOfGames === 1) {
        return `${this.numberOfGames} game found`;
      }
      return `${this.numberOfGames} games found`;
    }
  },
  watch: {
    games() {
      this.cardsOnPage = 12;
      this.toggleLoader();
    }
  },
  methods: {
    addMoreCards(number) {
      this.cardsOnPage += number;
    },
    toggleLoader() {
      this.isShowLoader = true;
      setTimeout(() => {
        this.isShowLoader = false;
      }, 1000);
    }
  }
};
</script>

<style lang="scss" scoped>
.games {
  height: 100%;
  &__text {
    margin: 0;
    font-weight: 500;
    font-size: 18px;
    color: $color-text-main;
  }
}
</style>
