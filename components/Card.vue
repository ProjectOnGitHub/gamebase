<template>
  <li class="card">
    <img
      class="card__image"
      src="https://cdn1.epicgames.com/spt-assets/e7585b80abf94d7590e4442d8d9cd3fc/lumencraft-1lg44.jpg"
      alt="" />
    <div class="card__info">
      <h3 class="card__title">God of War</h3>
      <span class="card__subtitle">Shooter</span>
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
export default {};
</script>

<style lang="scss" scoped>
.card {
  @include gridable(100%);
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
  &__status {
    @include flexible(100%);
    @include unmarkedList;
    font-size: 10px;
    flex-flow: nowrap;
    gap: 5px;
    padding: 15px 0 5px;
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
