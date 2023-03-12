<template>
  <form class="search-form">
    <label class="search-form__label">
      <input
        class="search-form__input"
        min-ength="1"
        required
        v-model="searchWord"
        name="search"
        type="search"
        placeholder="Games..."
      />
      <base-button
        class-name="search-form__button"
        button-type="button"
        button-name="search-button"
      >
        <svg-icon
          name="search-icon"
          class="search-form__icon"
        />
      </base-button>
    </label>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchWord: ''
    };
  },
  updated() {
    this.$store.dispatch('setSearchWord', this.searchWord);
  }
};
</script>

<style lang="scss" scoped>
.search-form {
  @include flexible(100%);
  max-width: 500px;
  border-radius: 50%;
  height: 40px;
  &__label {
    @include flexible(100%);
    align-items: center;
    height: 100%;
    border-radius: 50px;
    border: none;
    flex-flow: nowrap;
    padding-left: 15px;
    background-color: $color-bg-element;
  }
  &__input {
    @include flexible(100%);
    border: none;
    height: 24px;
    outline: none;
    background-color: $color-bg-element;
    color: $color-text-main;
    &::placeholder {
      color: $color-link-main;
    }
  }
  &__icon {
    stroke: $color-link-main;
    fill: transparent;
    width: 18px;
    height: 18px;
  }
}
</style>
