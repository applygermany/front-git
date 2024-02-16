// create store
export const state = () => ({
  uploads: {
    admittance: null,
    contract: null,
    mandatoryUploaded: [],
    mandatoryUploads: [],
    uploadTitles: [],
    uploads: [],
  },
  modalInfo: {
    title: "",
    type: null,
  },
  otherFiles: [],
});

// getters
export const getters = {
  uploads(state) {
    return state.uploads;
  },

  modalInfo(state) {
    return state.modalInfo;
  },
  otherFiles(state) {
    return state.otherFiles;
  },
};

// mutations
export const mutations = {
  SET_Uploads(state, payload) {
    state.uploads = payload;
  },
  Set_Data(state, payload) {
    state.modalInfo = payload;
  },
  SET_OtherFiles(state, payload) {
    state.otherFiles = payload;
  },
};

// actions
export const actions = {
  async uploads({ commit }) {
    const { data } = await this.$axios.get(`v1/user/uploads`);

    const otherFiles = data.uploadTitles.filter(
      (item) =>
        item.mandatory == 0
    );

    commit("SET_OtherFiles", otherFiles);
    commit("SET_Uploads", data);
  },
  async deleteUpload({ dispatch }, payload) {
    const { data } = await this.$axios.post(`v1/user/deleteUpload`, {
      id: payload,
    });
    console.log(data);
    if (data.status == 1) dispatch("uploads");
  },
};
