<template>
  <Main>
    <Section
      className="game"
      title="Games">
      <CardsList>
        <Card
          v-for="game in listingCardsPerPage"
          :key="game.id"
          :name="game.title"
          :image="game.thumbnail"
          :genre="game.genre"
          :url="game.url" />
      </CardsList>
      <Button
        className="more__button"
        @click="addMoreCards(8)"
        >More games</Button
      >
    </Section>
  </Main>
</template>

<script>
const API_KEY = process.env.API_KEY;
const API_HOST = process.env.API_HOST;
export default {
  data() {
    return {
      games: [],
      API_KEY: process.env.API_KEY,
      API_HOST: process.env.API_HOST,
      page: 8,
    };
  },
  asyncData() {
    return fetch(`https://${API_HOST}/api/games`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${API_KEY}`,
        'X-RapidAPI-Host': `${API_HOST}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const games = res;
        return {games};
      })
      .catch((err) => console.error(err.message));
  },
  methods: {
    addMoreCards(number) {
      this.page += number;
    },
  },
  computed: {
    listingCardsPerPage() {
      return this.games.slice(0, `${this.page}`);
    },
  },
};
</script>

<style lang="scss" scoped></style>
