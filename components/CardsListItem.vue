<template>
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
      :src="image"
      :alt="name"
    />
    <div class="card__info">
      <h3 class="card__title">
        {{ name }}
      </h3>
      <ul class="card__genre-list">
        <li class="card__genre-item">
          {{ genre }}
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
</template>

<script>
export default {
  props: {
    genre: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
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
