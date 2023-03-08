<template>
  <nuxt-link
    class="card__link"
    :to="`/${titleToUrl}/`"
  >
    <li class="card">
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
        <ul class="card__status">
          <li class="card__status-name">
            <base-button
              class-name="card__button-status card__button-status_active"
              button-type="button"
              button-name="card-button-status"
            >
              Прохожу
            </base-button>
          </li>
          <li class="card__status-name">
            <base-button
              class-name="card__button-status"
              button-type="button"
              button-name="card-button-status"
            >
              Прошёл
            </base-button>
          </li>
        </ul>
      </div>
    </li>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    game: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    titleToUrl() {
      return this.game.title.toLowerCase().replace(':', '').split(' ').join('-');
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  @include gridable(100%);
  grid-template-rows: max-content 1fr;
  gap: 15px;
  border-radius: 5px;
  overflow: hidden;
  &__link {
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
  &__status {
    @include flexible(100%);
    @include unmarkedList;
    align-self: flex-end;
    font-size: 10px;
    flex-flow: nowrap;
    gap: 10px;
    box-sizing: border-box;
  }
}
</style>
