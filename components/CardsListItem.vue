<template>
  <li class="card">
    <nuxt-link
      class="card__link"
      :to="`/${game.id}/`"
    >
      <base-button
        class-name="card__button-favorite"
        button-type="button"
        button-name="card-button-favorite"
      >
        <svg-icon
          name="heart-icon"
          class="card__icon-fav"
        />
      </base-button>
      <img
        class="card__image"
        :src="game.thumbnail"
        :alt="game.title"
      />
      <div class="card__info">
        <h3 class="card__title">
          {{ game.title }}
        </h3>
        <ul class="card__genre-list">
          <li class="card__genre-item">
            {{ game.genre }}
          </li>
        </ul>
      </div>
    </nuxt-link>
  </li>
</template>

<script>
import BaseButton from './BaseButton.vue';

export default {
  components: { BaseButton },
  props: {
    game: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.card {
  &__link {
    height: 100%;
    position: relative;
    @include gridable(100%);
    grid-template-rows: max-content 1fr;
    gap: 15px;
    border-radius: 5px;
    text-decoration: none;
    color: $color-link-main;
  }
  &__title {
    font-size: 24px;
    margin: 0;
    font-weight: 500;
  }
  &__subtitle {
    font-size: 12px;
    color: $color-link-main;
  }
  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &__info {
    @include gridable(100%);
    gap: 10px;
    overflow: hidden;
    align-content: space-between;
  }
  &__genre-list {
    @include gridable(100%);
    @include unmarkedList;
    align-items: center;
    font-size: 12px;
    flex-flow: wrap;
  }
  &__icon-fav {
    stroke: $color-bg-element;
    stroke-width: 1px;
    fill: $color-link-main;
    width: 20px;
    height: 20px;
    &_active {
      fill: red;
      stroke: red;
    }
  }
}
</style>
