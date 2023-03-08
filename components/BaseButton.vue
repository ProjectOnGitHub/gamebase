<template>
  <button
    class="button"
    :class="className"
    :name="buttonName"
    :type="buttonType"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    className: {
      type: String,
      default: ''
    },
    buttonName: {
      type: String,
      default: ''
    },
    buttonType: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: ''
    }
  }
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
  &-favorite {
    @include flexible(30px);
    height: 30px;
    justify-items: center;
    justify-self: right;
    align-items: center;
    position: absolute;
  }
  &-status {
    background-color: $color-bg-element;
    color: $color-link-main;
    border-radius: 3px;
    padding: 4px;
    &:hover {
      color: $color-bg-main;
      background-color: $color-link-main;
    }
    &_active {
      background-color: $color-link-main;
      color: $color-bg-main;
    }
  }
}

.more__button {
  text-transform: uppercase;
  font-size: 18px;
  padding: 10px;
  border-radius: 3px;
  background-color: $color-bg-main;
  color: $color-link-main;
  border: 1px solid $color-link-main;
  &:hover {
    background-color: $color-bg-element;
  }
}
</style>
