// create store
export const state = () => ({
  applyLevels: {
    phase1: [],
    phase2: [],
    phase3: [],
    phase4: [],
    phase5: [],
  },
  applyLevelPhase: {
    id: null,
    text: null,
    link: null,
  },
});

// getters
export const getters = {
  applyLevels(state) {
    return state.applyLevels;
  }, 
  applyLevelPhase(state) {
    return state.applyLevelPhase;
  },
};

// mutations
export const mutations = {
  SET_ApplyLevels(state, payload) {
    state.applyLevels.phase1 = payload.phase1;
    state.applyLevels.phase2 = payload.phase2;
    state.applyLevels.phase3 = payload.phase3;
    state.applyLevels.phase4 = payload.phase4;
    state.applyLevels.phase5 = payload.phase5;
  },
  Set_ApplyLevelPhase(state, payload) {
    state.applyLevelPhase = payload;
  },
};

// actions
export const actions = {
  async applyLevels({ commit }) {
    const { data } = await this.$axios.get(`v1/user/applyLevels`);
    
    commit("SET_ApplyLevels", data);
  }, 
  
  setApplyLevelPhase({ commit }, payload) {
    commit("Set_ApplyLevelPhase", payload);
  },
};
