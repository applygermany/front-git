// create store
export const state = () => ({
  vuexUserMenuState: false,
  vuexUserDarkMode: false,
  chatSide: "",

  // data
  user: [],
  user_version: '',
  acceptance: null,
  userApplyLevelStatus: {
    phase1: {
      data: {
        title: null,
        description: null,
      },
      percent: null,
    },
    phase2: {
      data: {
        title: null,
        description: null,
      },
      percent: null,
    },
    phase3: {
      data: {
        title: null,
        description: null,
      },
      percent: null,
    },
    phase4: {
      data: {
        title: null,
        description: null,
      },
      percent: null,
    },
    phase5: {
      data: {
        title: null,
        description: null,
      },
      percent: null,
    },
  },
  userDuties: [],
  userSupervisorFirstTelSupport: 0,
  userSupervisor: [],
  userSupport: [],
  transactions: [],
  users: [],
  profile: {
    firstname: null,
    lastname: null,
    firstnameEn: null,
    lastnameEn: null,
    codemelli: null,
    birthDate: null,
  },
  prices: [],
  balance: {
    amount: 0,
    check: true,
  },

  // ! universities
  universities: [],
  cities: [],
  fields: [],
  geographicalLocations: [],
  states: [],
  universityId: null,
  maxUniversities: null,
  chosenUni: null,
  imagePreview: null,
  fromTelSupport: false
});

// getters
export const getters = {
  vuexUserMenuState(state) {
    return state.vuexUserMenuState;
  },
  vuexUserDarkMode(state) {
    return state.vuexUserDarkMode;
  },
  chatSide(state) {
    return state.chatSide;
  },

  // get data
  user(state) {
    return state.user;
  },
  userVersion(state) {
    return state.user_version;
  },
  acceptance(state) {
    return state.acceptance;
  },
  userApplyLevelStatus(state) {
    return state.userApplyLevelStatus;
  },
  userDuties(state) {
    return state.userDuties;
  },
  userSupervisorFirstTelSupport(state) {
    return state.userSupervisorFirstTelSupport;
  },
  userSupervisor(state) {
    return state.userSupervisor;
  },
  userSupport(state) {
    return state.userSupport;
  },
  transactions(state) {
    return state.transactions;
  },
  users(state) {
    return state.users;
  },
  profile(state) {
    return state.profile;
  },
  prices(state) {
    return state.prices;
  },
  balance(state) {
    return state.balance;
  },

  // ! universities
  universities(state) {
    return state.universities;
  },
  cities(state) {
    return state.cities;
  },
  fields(state) {
    return state.fields;
  },
  geographicalLocations(state) {
    return state.geographicalLocations;
  },
  states(state) {
    return state.states;
  },
  universityId(state) {
    return state.universityId;
  },
  maxUniversities(state) {
    return state.maxUniversities;
  },
  chosenUni(state) {
    return state.chosenUni;
  },
  imagePreview(state) {
    return state.imagePreview;
  },
  fromTelSupport(state) {
    return state.fromTelSupport;
  },
};

// mutations
export const mutations = {
  SET_VUEX_USER_MENU_STATE(state, vuexUserMenuState) {
    state.vuexUserMenuState = vuexUserMenuState;
  },
  SET_VUEX_USER_DARK_MODE(state, vuexUserDarkMode) {
    state.vuexUserDarkMode = vuexUserDarkMode;
  },
  Set_ChatSide(state, payload) {
    state.chatSide = payload;
  },

  // get data
  Set_User(state, payload) {
    state.user = payload;
  },
  Set_user_version(state, payload) {
    state.user_version = payload;
  },
  Set_Acceptance(state, payload) {
    state.acceptance = payload;
  },
  Set_UserApplyLevelStatus(state, payload) {
    state.userApplyLevelStatus = payload;
  },
  Set_UserDuties(state, payload) {
    state.userDuties = payload;
  },
  Set_UserSupervisorFirstTelSupport(state, payload) {
    state.userSupervisorFirstTelSupport = payload;
  },
  Set_UserSupervisor(state, payload) {
    state.userSupervisor = payload;
  },
  Set_UserSupport(state, payload) {
    state.userSupport = payload;
  },
  Set_Transactions(state, payload) {
    state.transactions = payload;
  },
  Set_Users(state, payload) {
    state.users = payload;
  },
  Set_Profile(state, payload) {
    state.profile = payload;
  },
  changeFirstName(state, payload) {
    state.profile.firstname = payload;
  },
  changeLastName(state, payload) {
    state.profile.lastname = payload;
  },
  changeFirstNameEn(state, payload) {
    state.profile.firstnameEn = payload;
  },
  changeLastNameEn(state, payload) {
    state.profile.lastnameEn = payload;
  },
  changeCodeMelli(state, payload) {
    state.profile.codemelli = payload;
  },
  changeBirthDate(state, payload) {
    state.profile.birthDate = payload;
  },
  saveImage(state, payload) {
    state.imagePreview = payload;
  },
  Set_Prices(state, payload) {
    state.prices = payload;
  },
  Set_Balance(state, payload) {
    state.balance = payload;
  },

  // ! universities
  Set_Universities(state, payload) {
    state.universities = payload;
  },
  Set_Cities(state, payload) {
    state.cities = payload;
  },
  Set_Fields(state, payload) {
    state.fields = payload;
  },
  Set_GeographicalLocations(state, payload) {
    state.geographicalLocations = payload;
  },
  Set_States(state, payload) {
    state.states = payload;
  },
  Set_UniversityId(state, payload) {
    state.universityId = payload;
  },

  chooseUniversity(state, payload) {
    state.universities = state.universities.map((item) => {
      if (item.id == payload) {
        item.status = 1;
      }
      console.log(state.universities,'stateUniverCities is here guys')
      return item;
    });
  },
  Set_MaxUniversities(state, payload) {
    state.maxUniversities = payload;
  },
  Set_ChosenUni(state, payload) {
    state.chosenUni = payload;
  },
  SET_FromTelSupport(state, payload) {
    state.fromTelSupport = payload;
  },
};

// actions
export const actions = {
  setVuexUserMenuState({ commit }, vuexUserMenuState) {
    commit("SET_VUEX_USER_MENU_STATE", vuexUserMenuState);
  },
  setVuexUserDarkMode({ commit }, vuexUserDarkMode) {
    commit("SET_VUEX_USER_DARK_MODE", vuexUserDarkMode);
  },
  setVuexUserChatState({ commit }, vuexUserChatState) {
    commit("SET_VUEX_USER_CHAT_STATE", vuexUserChatState);
  },
  setVuexUserNoteState({ commit }, vuexUserNoteState) {
    commit("SET_VUEX_USER_NOTE_STATE", vuexUserNoteState);
  },

  // get data
  async dashboard({ state, commit }) {
    if (state.user.length > 0) return;
    const { data } = await this.$axios.get(`v1/user/dashboard`);
    commit("Set_User", data.user);
    commit("Set_user_version", data.user_version);
    commit("Set_Acceptance", data.acceptance);
    commit("Set_UserApplyLevelStatus", data.userApplyLevelStatus);
    commit("Set_UserDuties", data.userDuties);
    commit(
      "Set_UserSupervisorFirstTelSupport",
      data.userSupervisorFirstTelSupport
    );
    commit("Set_UserSupervisor", data.userSupervisor);
    commit("Set_UserSupport", data.userSupport);
    commit("Set_Transactions", data.transactions);
    commit("Set_Users", data.users);
    commit("Set_Profile", data.user);
    commit("Set_Balance", data.balance);
  },

  async pricing({ state, commit }) {
    if (state.prices.length > 0) return;
    const { data } = await this.$axios.get(`v1/pricing`);
      console.log('hereewefew')
    commit("Set_Prices", data.prices);
  },

  async saveImage({ state, commit }) {
    if (state.prices.length > 0) return;
    const { data } = await this.$axios.get(`v1/pricing`);

    commit("Set_Prices", data.prices);
  },

  //! dashboard
  async  uploadImage(_, payload) {
    const { data } = await this.$axios.post(`v1/user/uploadImage`, payload);

    const error = new Error(data.msg);
    throw error;
  },

  async updateProfile({ commit }, payload) {
    const { data } = await this.$axios.post(`v1/user/updateProfile`, payload);

    const error = new Error(data.msg);
    throw error;
  },

  async changeEmailMobile({ commit }, payload) {
    const { data } = await this.$axios.post(
      `v1/user/changeEmailMobile`,
      payload
    );

    const error = new Error(data.msg);
    throw error;
  },

  async updatePassword({ commit }, payload) {
    const { data } = await this.$axios.post(`v1/user/updatePassword`, payload);

    const error = new Error(data.msg);
    throw error;
  },

  async changeEmailMobileResendCode() {
    const { data } = await this.$axios.get(
      `v1/user/changeEmailMobileResendCode`
    );

    const error = new Error(data.msg);
    throw error;
  },

  async changeEmailMobileVerify(_, payload) {
    const { data } = await this.$axios.post(
      `v1/user/changeEmailMobileVerify`,
      payload
    );

    const error = new Error(data.msg);
    throw error;
  },

  //! resume
  async resume({ commit }) {
    const { data } = await this.$axios.get("v1/user/resume");

    commit("Set_Resume", data.resume);
  },
  async resumeTemp({ commit }) {
    const { data } = await this.$axios.get("v1/resume/temps");

    commit("Set_ResumeTemp", data.data);
  },
  async resumeUploadImage(_, payload) {
    const { data } = await this.$axios.post(
      "v1/user/resume/uploadImage",
      payload
    );

    const error = new Error(data.msg);
    throw error;
  },
};
