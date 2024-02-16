// create store
export const state = () => ({
  acceptance: [],
  position: "index",
});

// getters
export const getters = {
  acceptance(state) {
    return state.acceptance;
  },
  position(state) {
    return state.position;
  },
};

// mutations
export const mutations = {
  SET_Acceptance(state, payload) {
    state.acceptance = payload;
  },
  SET_Position(state, payload) {
    state.position = payload;
  },
};

// actions
export const actions = {
  async acceptance({ commit }) {
    const { data } = await this.$axios.get(`v1/user/acceptance`);

    commit("SET_Acceptance", data.acceptance);
  },
  setPosition({ commit }, payload) {
    commit("SET_Position", payload);
  },
  
};
