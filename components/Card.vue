<template>
  <li class="card">
    <img
      class="card__image"
      :src="image"
      :alt="name" />
    <div class="card__info">
      <h3 class="card__title">{{ name }}</h3>
      <ul class="card__genre-list">
        <li class="card__genre-item">
          {{ genre }}
        </li>
      </ul>
      <ul class="card__status">
        <li class="card__status-name">
          <Button
            className="card__button-status"
            buttonType="button"
            buttonName="card-button-status">
            Пройти
          </Button>
        </li>
        <Button
          className="card__button-status card__button-status_active"
          buttonType="button"
          buttonName="card-button-status">
          Прохожу
        </Button>
        <Button
          className="card__button-status"
          buttonType="button"
          buttonName="card-button-status">
          Прошёл
        </Button>
      </ul>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    genre: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
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
  &__status {
    @include flexible(100%);
    @include unmarkedList;
    align-self: flex-end;
    font-size: 10px;
    flex-flow: nowrap;
    gap: 10px;
    box-sizing: border-box;
  }
  &__button {
    &-status {
      background-color: $color-bg-element;
      color: $color-link-main;
      border-radius: 3px;
      padding: 4px;
      &_active {
        background-color: $color-link-main;
        color: $color-bg-main;
      }
    }
  }
}
</style>
