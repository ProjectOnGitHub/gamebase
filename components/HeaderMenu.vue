<template>
  <ul class="header__menu">
    <li
      class="header__menu-item"
      v-for="item of items"
      :key="item.text">
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

<style lang="scss" scoped></style>
