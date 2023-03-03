<template>
  <ul class="header__menu">
    <li
      class="header__menu-item"
      v-for="item of items"
      :key="item.text"
      @click="$emit('click')">
      <nuxt-link
        class="header__menu-link"
        active-class="header__menu-link_active"
        :to="item.url">
        {{ item.text }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {text: 'Main', url: '/'},
        {text: 'Backlog', url: '/backlog'},
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.header__menu {
  @include flexible(100%);
  @include unmarkedList;
  z-index: 10;
  font-size: 16px;
  gap: 15px;
  @media screen and (max-width: $tablet-small) {
    position: fixed;
    top: 0;
    right: -320px;
    z-index: 10;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    max-width: 320px;
    height: 100vh;
    font-size: 18px;
    background-color: $color-bg-element;
    visibility: hidden;
    transition: 0.5s;
    &_opened {
      right: 0;
      z-index: 15;
      visibility: visible;
      transition: 0.5s;
    }
  }
  &-item {
    white-space: nowrap;
  }
  &-link {
    @include defaultLink;
    color: $color-link-main;
  }
}
</style>
