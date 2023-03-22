<template>
  <the-main>
    <base-section class-name="game">
      <the-loader v-if="isShowLoader" />
      <the-game v-if="!isShowLoader" />
    </base-section>
  </the-main>
</template>

<script>
export default {
  data() {
    return {
      isShowLoader: false
    };
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
