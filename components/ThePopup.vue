<template>
  <transition name="popup">
    <div
      v-show="show"
      class="popup"
      @click="closePopup"
    >
      <figure class="popup__figure">
        <img
          :src="screenImage"
          :alt="`${screenAlt}: screenshot ID ${screenId}`"
          class="popup__image"
        />
      </figure>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    screenAlt: {
      type: String,
      default: ''
    },
    screenImage: {
      type: String,
      default: ''
    },
    screenId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    closePopup() {
      this.show = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  transition: 0.5s;
  width: 100%;
  z-index: 200;
  background-color: rgba($color-bg-main, 0.6);
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }

  &__figure {
    @include gridable(max-content);
    position: relative;
    z-index: 300;
    justify-content: center;
    margin: 0;
    overflow: hidden;
    border-radius: 3px;
    &-text {
      position: absolute;
      align-self: end;
      width: 100%;
      padding: 10px;
      font-weight: 400;
      font-size: 14px;
      text-align: center;
      font-style: italic;
      &:hover {
        cursor: zoom-out;
      }
    }
  }
  &__image {
    justify-self: center;
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 95vh;
    object-fit: contain;
    &:hover {
      cursor: zoom-out;
    }
  }
}
</style>
