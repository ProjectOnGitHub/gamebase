<template>
  <button
    class="button"
    :class="className"
    :name="buttonName"
    :type="buttonType"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: '',
    },
    buttonName: {
      type: String,
      default: '',
    },
    buttonType: {
      type: String,
      default: '',
    },
    buttonText: {
      type: String,
      default: '',
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  @include button();
}

.header__button {
  display: none;
  justify-items: right;
  @media screen and (max-width: $tablet-small) {
    @include flexible(32px);
    position: relative;
    z-index: 20;
    height: 32px;
    padding: 0;
    background-color: transparent;
    background-size: contain;
    border: none;
    border-radius: 0;
  }
}
.search-form__button {
  @include flexible(40px);
  height: 40px;
  border-radius: 0 50px 50px 0;
  background-color: transparent;
}

.card__button {
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
</style>
