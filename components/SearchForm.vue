<template>
  <form class="search__form">
    <label class="search__form-label">
      <input
        class="search__form-input"
        min-ength="1"
        required
        name="search"
        type="search"
        placeholder="Games..." />
      <SearchButton
        className="search__button"
        buttonType="button"
        buttonName="search-button">
        <svg-icon
          name="search-icon"
          class="search__icon" />
      </SearchButton>
    </label>
  </form>
</template>

<script>
import SearchButton from './Button.vue';
export default {
  components: {
    SearchButton,
  },
};
</script>

<style lang="scss" scoped>
.search {
  &__form {
    @include flexible(100%);

    max-width: 300px;
    border-radius: 50%;
    height: 40px;
    &-label {
      @include flexible(100%);
      align-items: center;
      height: 100%;
      border-radius: 50px;
      border: none;
      flex-flow: nowrap;
      padding-left: 15px;
      background-color: $color-bg-element;
    }
    &-input {
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
  }
  &__icon {
    stroke: $color-link-main;
    fill: transparent;
    width: 18px;
    height: 18px;
  }
}
</style>
