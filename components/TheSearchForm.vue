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
        @keydown.enter.prevent="handleClickSearchButton"
      />
      <base-button
        class-name="search-form__button"
        button-type="button"
        button-name="search-button"
        @click="handleClickSearchButton"
      >
        <svg-icon
          name="search-icon"
          class="search-form__icon"
        />
      </base-button>
      {{ optionValue }}
    </label>
    <span
      v-if="isErrorText"
      class="search-form__error-text"
    >
      {{ errorText }}
    </span>
  </form>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseButton },
  data() {
    return {
      searchWord: this.$store.state.searchWord,
      errorText: 'Enter word you want to search',
      isErrorText: false.value,
      optionValue: ''
    };
  },
  updated() {
    this.$store.dispatch('setSearchWord', this.searchWord);
  },
  methods: {
    handleClickSearchButton() {
      if (this.searchWord.length > 0) {
        this.$store.dispatch('searchGameByWord', this.searchWord);
        this.isErrorText = false;
      } else this.isErrorText = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.search-form {
  @include flexible(100%);
  max-width: 500px;
  border-radius: 50%;
  height: 40px;
  flex-direction: column;
  gap: 5px;
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
  &__error-text {
    margin-left: 20px;
    font-size: 12px;
    color: $color-text-error;
  }
}
</style>
