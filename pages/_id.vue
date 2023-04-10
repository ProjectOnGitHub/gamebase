<template>
  <the-main>
    <base-section class-name="game">
      <the-loader v-if="isShowLoader" />
      <the-game v-if="!isShowLoader" />
    </base-section>
  </the-main>
</template>

<script>
import BaseSection from '../components/BaseSection.vue';
import TheGame from '../components/TheGame.vue';
import TheLoader from '../components/TheLoader.vue';

export default {
  components: { BaseSection, TheLoader, TheGame },
  data() {
    return {
      isShowLoader: false
    };
  },
  head() {
    return {
      title: this.game.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: this.game.short_description
        }
      ]
    };
  },
  computed: {
    game() {
      return this.$store.state.gameById;
    }
  },
  mounted() {
    this.toggleLoader();
  },
  methods: {
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
.game {
  align-content: stretch;
  align-items: center;
}
</style>
