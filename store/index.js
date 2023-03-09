export const state = () => ({
  games: []
});

export const mutations = {
  SET_GAMES(state, data) {
    state.games = data;
  }
};
