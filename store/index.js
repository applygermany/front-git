// create store
export const state = () => ({
    vuexUserSpecialUserModal: false,
    vuexUserNormalUserModal: false,

    editRequestId: null,

    // acceptance
    acceptance: [],
    acceptanceImages: [],
    lightBoxIndex: null,
    acceptanceVideo: "",
    acceptanceAdmission: [],

    // comments
    comments: [],

    // teams
    teams: {
        teams: [],
        banner: "",
    },

    // faq
    faq: [],

    // cfaq
    cfaq: [],

    // contactUs
    contactUs: [],

    // prices
    prices: [],

    position: "",

    fromLand: false,
});

// getters
export const getters = {
    vuexUserSpecialUserModal(state) {
        return state.vuexUserSpecialUserModal;
    },
    vuexUserNormalUserModal(state) {
        return state.vuexUserNormalUserModal;
    },

    editRequestId(state) {
        return state.editRequestId;
    },

    // acceptance
    acceptance(state) {
        return state.acceptance;
    },
    // acceptance
    acceptanceImages(state) {
        return state.acceptanceImages;
    },
    // acceptance
    lightBoxIndex(state) {
        return state.lightBoxIndex;
    },
    acceptanceVideo(state) {
        return state.acceptanceVideo;
    },
    acceptanceAdmission(state) {
        return state.acceptanceAdmission;
    },

    // comments
    comments(state) {
        return state.comments;
    },

    // teams
    teams(state) {
        return state.teams;
    },

    // faq
    faq(state) {
        return state.faq;
    },

    // cfaq
    cfaq(state) {
        return state.cfaq;
    },

    // contactUs
    contactUs(state) {
        return state.contactUs;
    },

    // prices
    prices(state) {
        return state.prices;
    },

    position(state) {
        return state.position;
    },

    fromLand(state) {
        return state.fromLand;
    },
};

// mutations
export const mutations = {
    SET_VUEX_USER_SPECIAL_USER_MODAL(state, vuexUserSpecialUserModal) {
        state.vuexUserSpecialUserModal = vuexUserSpecialUserModal;
    },
    SET_VUEX_USER_NORMAL_USER_MODAL(state, vuexUserNormalUserModal) {
        state.vuexUserNormalUserModal = vuexUserNormalUserModal;
    },

    Set_EditRequestId(state, payload) {
        state.editRequestId = payload;
    },

    // acceptance
    Set_Acceptance(state, payload) {
        state.acceptance = payload;
    },
    // acceptance
    Set_AcceptanceImages(state, payload) {
        state.acceptanceImages = payload;
    },
    Set_LightBoxIndex(state, payload) {
        state.lightBoxIndex = payload;
    },
    Set_AcceptanceVideo(state, payload) {
        state.acceptanceVideo = payload;
    },
    Set_AcceptanceAdmission(state, payload) {
        state.acceptanceAdmission = payload;
    },

    // comments
    Set_Comments(state, payload) {
        state.comments = payload;
    },

    // comments
    Set_Teams(state, payload) {
        state.teams = payload;
    },

    // Faq
    Set_Faq(state, payload) {
        state.faq = payload;
    },

    // cFaq
    Set_CFaq(state, payload) {
        state.cfaq = payload;
    },

    // contact
    Set_ContactUs(state, payload) {
        state.contactUs = payload;
    },

    // price
    Set_Prices(state, payload) {
        state.prices = payload;
    },

    SET_Position(state, payload) {
        state.position = payload;
    },

    fromLand(state, payload) {
        state.fromLand = payload;
    },
};

// actions
export const actions = {
    setVuexUserSpecialUserModal({ commit }, vuexUserSpecialUserModal) {
        commit("SET_VUEX_USER_SPECIAL_USER_MODAL", vuexUserSpecialUserModal);
    },
    setVuexUserNormalUserModal({ commit }, vuexUserNormalUserModal) {
        commit("SET_VUEX_USER_NORMAL_USER_MODAL", vuexUserNormalUserModal);
    },
    setEditRequestId({ commit }, payload) {
        commit("Set_EditRequestId", payload);
    },

    // acceptance
    async getAcceptance({ state, commit }) {
        if (state.acceptance.length > 0) return;
        const { data } = await this.$axios.get("v1/accepteds");

        commit("Set_Acceptance", {
            data: data.data.data,
            currentPage: data.data.current_page,
            lastPage: data.data.last_page,
        });
    },
    async getAcceptanceNextPage({ state, commit }, payload) {
        const { data } = await this.$axios.get(`v1/accepteds?page=${payload + 1}`);
        const allData = [...state.acceptance.data, ...data.data.data];

        commit("Set_Acceptance", {
            data: allData,
            currentPage: data.data.current_page,
            lastPage: data.data.last_page,
        });
    },
    setAcceptanceVideo({ commit }, payload) {
        commit("Set_AcceptanceVideo", payload);
    },
    setAcceptanceAdmission({ commit }, payload) {
        commit("Set_AcceptanceAdmission", payload);
    },

    // comments
    async getComments({ state, commit }) {
        if (state.comments.length > 0) return;
        const { data } = await this.$axios.get("v1/comments");
        commit("Set_Comments", data.data);
    },

    // comments
    async getTeams({ state, commit }) {
        if (state.teams.teams.length > 0) return;
        const { data } = await this.$axios.get("v1/teams");
        commit("Set_Teams", {
            teams: data.teams,
            banner: data.teamHeader,
        });
    },

    // Faq
    async getFaq({ state, commit }) {
        if (state.faq.length > 0) return;
        const { data } = await this.$axios.post("v1/faqs");

        commit("Set_Faq", data.faqs);
    },
    // CFaq
    async getCFaq({ state, commit }) {
        if (state.faq.length > 0) return;
        const { data } = await this.$axios.post("v1/cfaqs");

        commit("Set_CFaq", data.faqs);
    },

    // contact
    async getContactUs({ state, commit }) {
        if (state.contactUs.length > 0) return;
        const { data } = await this.$axios.get("v1/contact");
        commit("Set_ContactUs", data.data);
    },

    // sendCollaboration
    async sendCollaboration({ state }, payload) {
        if (state.contactUs.length > 0) return;
        const { data } = await this.$axios.post("v1/sendCollaboration", payload);
        const error = new Error(data.msg);
        throw error;
    },
};