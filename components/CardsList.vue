<template>
  <ul class="cards">
    <Card
      v-for="game in games"
      :key="game.id"
      :name="game.name"
      :image="game.image"
      :genres="game.genres"
      :url="game.url" />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      games: [
        {
          id: 1,
          name: 'The Last of Us',
          image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1r7f.png',
          genres: ['Adventure', 'Shooter'],
        },
        {
          id: 2,
          name: 'The Witcher 3: Wild Hunt',
          image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.png',
          genres: ['Adventure', 'Role-playing (RPG)'],
        },
        {
          id: 3,
          name: 'Cyberpunk 2077',
          image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4hk8.png',
          genres: ['Adventure', 'Role-playing (RPG)', 'Shooter'],
        },
        {
          id: 4,
          name: 'Atomic Heart',
          image: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co5qdi.png',
          genres: ['Adventure', 'Role-playing (RPG)', 'Shooter'],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.cards {
  @include gridable(100%);
  @include unmarkedList;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
}
</style>
