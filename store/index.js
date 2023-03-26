const apiKey = process.env.API_KEY;
const apiHost = process.env.API_HOST;
export const state = () => ({
  games: [],
  filteredGames: [],
  gameById: {},
  searchWord: '',
  genres: []
});

export const mutations = {
  SET_GAMES(state, data) {
    state.games = data;
  },
  SET_FILTERED_GAMES(state, data) {
    state.filteredGames = data;
  },
  SET_GAME_BY_ID(state, data) {
    state.gameById = data;
  },
  SET_SEARCH_WORD(state, data) {
    state.searchWord = data;
  },
  SET_GENRES(state, data) {
    state.genres = data;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getGames');
  },
  setSearchWord({ commit }, word) {
    commit('SET_SEARCH_WORD', word);
  },
  setGenres({ commit, state }) {
    this.genres = Array.from(new Set(state.games.map(game => game.genre.toLowerCase().trim())));
    commit('SET_GENRES', this.genres);
  },
  searchGameByWord({ commit, state }, searchWord) {
    this.filteredGames = state.games.filter(game => game.title.toLowerCase().includes(searchWord.toLowerCase()));
    commit('SET_FILTERED_GAMES', this.filteredGames);
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
        commit('SET_FILTERED_GAMES', res);
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
