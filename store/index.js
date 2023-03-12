const apiKey = process.env.API_KEY;
const apiHost = process.env.API_HOST;
export const state = () => ({
  games: [],
  gameById: {}
});

export const mutations = {
  SET_GAMES(state, data) {
    state.games = data;
  },
  SET_GAME_BY_ID(state, data) {
    state.gameById = data;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getGames');
  },
  getGames({ commit }) {
    return fetch(`https://${apiHost}/api/games`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${apiKey}`,
        'X-RapidAPI-Host': `${apiHost}`
      }
    })
      .then(res => res.json())
      .then(res => {
        commit('SET_GAMES', res);
      });
  },
  getGameById({ commit }, id) {
    return fetch(`https://${apiHost}/api/game?id=${id}`, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': `${apiKey}`,
        'X-RapidAPI-Host': `${apiHost}`
      }
    })
      .then(res => res.json())
      .then(res => {
        commit('SET_GAME_BY_ID', res);
      });
  }
};
