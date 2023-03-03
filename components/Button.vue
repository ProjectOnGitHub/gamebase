<template>
  <button
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
.header__button {
  display: none;
  justify-items: right;
  @media screen and (max-width: $tablet-small) {
    @include flexible(32px);
    @include button();
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
.search__button {
  @include flexible(32px);
  @include button();
  width: 40px;
  height: 40px;
  border-radius: 0 50px 50px 0;
  background-color: transparent;
}
</style>
