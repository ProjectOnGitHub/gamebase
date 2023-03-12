<template>
  <article class="game__article">
    <h1 class="game__title">
      {{ game.title }}
    </h1>
    <p class="game__text game__text_small">
      {{ game.short_description }}
    </p>
    <img
      :src="game.thumbnail"
      :alt="game.title"
      class="game__thumbnail"
    />
    <ul class="game__info game__info_additional">
      <li class="game__info-item">
        <span class="game__info-name">Genre:</span> {{ game.genre }}
      </li>
      <li class="game__info-item">
        <span class="game__info-name">Developer:</span> {{ game.developer }}
      </li>
      <li class="game__info-item">
        <span class="game__info-name">Publiser:</span> {{ game.publisher }}
      </li>
      <li class="game__info-item">
        <span class="game__info-name">Release:</span> {{ game.release_date }}
      </li>
      <li class="game__info-item">
        <span class="game__info-name">Platform:</span> {{ game.platform }}
      </li>
    </ul>
    <ul class="game__info game__info_requirements">
      <li
        v-for="(value, name) in game.minimum_system_requirements"
        :key="name"
        class="game__info-item"
      >
        <span class="game__info-name">{{ name }}:</span>
        {{ value }}
      </li>
    </ul>
    <p class="game__text game__text_full">
      {{ game.description }}
    </p>
    <ul class="game__screenshots">
      <li
        v-for="(screen, idx) in game.screenshots"
        :key="idx"
        class="game__screenshots-item"
      >
        <img
          :src="screen.image"
          :alt="`${game.title} screenshot id ${screen.id}`"
          class="game__screenshot"
          @click="showPopup(screen)"
        />
      </li>
    </ul>
    <the-popup
      ref="popup"
      :screen-image="screen.image"
      :screen-alt="game.title"
      :screen-id="screen.id"
    />
  </article>
</template>

<script>
export default {
  data() {
    return {
      screen: {}
    };
  },
  computed: {
    game() {
      return this.$store.state.gameById;
    }
  },
  mounted() {
    const { id } = this.$route.params;
    this.$store.dispatch('getGameById', id);
  },
  methods: {
    showPopup(screen) {
      this.$refs.popup.show = true;
      this.screen = screen;
    }
  }
};
</script>

<style lang="scss" scoped>
.game {
  &__article {
    @include gridable(100%);
    grid-template-columns: min-content 1fr;
    gap: 15px 30px;
    font-size: 16px;
    grid-template-areas:
      'thumbnail title'
      'thumbnail text-small'
      'thumbnail additional'
      'requirements text-full'
      'screens screens';
    @media screen and (max-width: $tablet) {
      grid-template-areas:
        'title'
        'text-small'
        'thumbnail'
        'additional'
        'requirements'
        'text-full'
        'screens';
      grid-template-columns: 1fr;
    }
  }
  &__thumbnail {
    grid-area: thumbnail;
    @media screen and (max-width: $smartphone) {
      width: 100%;
      height: auto;
    }
  }
  &__title {
    grid-area: title;
    font-size: 28px;
    margin: 0;
    font-weight: 500;
  }
  &__text {
    margin: 0;
    &_small {
      grid-area: text-small;
      font-size: 12px;
    }
    &_full {
      grid-area: text-full;
    }
  }
  &__info {
    @include unmarkedList;
    @include gridable(100%);
    align-content: start;
    gap: 5px;
    &_additional {
      grid-area: additional;
    }
    &_requirements {
      grid-area: requirements;
    }

    &-item {
      @include gridable(100%);
      grid-template-columns: 120px 1fr;
      gap: 15px;
    }
    &-name {
      color: $color-link-main;
      text-transform: uppercase;
    }
  }
  &__screenshots {
    @include unmarkedList;
    @include gridable(100%);
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 15px;
    grid-area: screens;
  }
  &__screenshot {
    cursor: pointer;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
