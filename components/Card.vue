<template>
  <li class="card">
    <img
      class="card__image"
      src="https://cdn1.epicgames.com/spt-assets/e7585b80abf94d7590e4442d8d9cd3fc/lumencraft-1lg44.jpg"
      alt="" />
    <h3 class="card__title">God of War</h3>
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
  </li>
</template>

<script>
import Button from './Button.vue';
export default {
  components: {
    Button,
  },
};
</script>

<style lang="scss" scoped>
.card {
  @include gridable(100%);
  gap: 15px;
  border-radius: 5px;
  overflow: hidden;
  &__title {
    margin: 0;
    font-weight: 500;
  }
  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  &__status {
    @include flexible(100%);
    @include unmarkedList;
    font-size: 10px;
    flex-flow: nowrap;
    gap: 5px;
    padding: 5px 0;
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
