export const state = () => ({
    vuexUserMenuState: false,
    vuexUserDarkMode: false,
    filterForm: {
        name: null,
        category: 0,
    },
    orders: [],
    categories: [],
    ordersCount: null,
    ordersCountLimit: null,
    user: {},
    uploads: [],
    userId: null,
    applyId: null,
    applyUniversities: [],
    applyUser: [],
    type: null,
    dataId: null,
    chatSide: "",
    file: null,
    writer_version: null
})

/**
 * Getter
 * @type {{vuexUserMenuState(*): boolean, vuexUserDarkMode(*): boolean}}
 */
export const getters = {
    vuexUserMenuState(state) {
        return state.vuexUserMenuState;
    },
    vuexUserDarkMode(state) {
        return state.vuexUserDarkMode;
    },
    filterForm(state) {
        return state.filterForm;
    },
    categories(state) {
        return state.categories;
    },
    orders(state) {
        return state.orders;
    },
    user(state) {
        return state.user;
    },
    uploads(state) {
        return state.uploads;
    },
    applyId(state) {
        return state.applyId;
    },
    applyUniversities(state) {
        return state.applyUniversities;
    },
    applyUser(state) {
        return state.applyUser;
    },
    type(state) {
        return state.type;
    },
    dataId(state) {
        return state.dataId
    },
    ordersCount(state) {
        return state.ordersCount
    },
    ordersCountLimit(state) {
        return state.ordersCountLimit
    },
    chatSide(state) {
        return state.chatSide;
    },
    file(state) {
        return state.file;
    },
    writerVersion(state) {
        return state.writer_version
    }
}

export const actions = {
    setVuexUserMenuState({commit}, vuexUserMenuState) {
        commit("SET_VUEX_USER_MENU_STATE", vuexUserMenuState);
    },
    setVuexUserDarkMode({commit}, vuexUserDarkMode) {
        commit("SET_VUEX_USER_DARK_MODE", vuexUserDarkMode);
    },
    async uploads({commit}, payload) {
        const {data} = await this.$axios.get("v1/writer/getUploadFiles/" + payload.id + '/' + payload.type);

        commit("SET_Uploads", data.files);
        commit("SET_User", data.user);
        commit("SET_UserId", data.user.id);
    },
    async deleteUpload({dispatch}, payload) {
        const {data} = await this.$axios.post(`v1/writer/deleteFile`, {
            file: payload.file,
            id: payload.id,
            type: payload.type
        });
        if (data.status === 1) dispatch("uploads", {id: payload.id, type: payload.type});
    },
}

export const mutations = {
    Set_writer_version(state, payload) {
        state.writer_version = payload;
    },
    SET_Orders(state, payload) {
        state.orders = payload;
    },
    SET_Categories(state, payload) {
        state.categories = payload;
    },
    SET_OrdersCount(state, payload) {
        state.ordersCount = payload;
    },
    SET_OrdersCountLimit(state, payload) {
        state.ordersCountLimit = payload;
    },
    changeFilterFormName(state, payload) {
        state.filterForm.name = payload;
    },
    changeFilterFormCategory(state, payload) {
        state.filterForm.category = payload;
    },
    SET_User(state, payload) {
        state.user = payload;
    },
    SET_Uploads(state, payload) {
        state.uploads = payload;
    },
    SET_UserId(state, payload) {
        state.userId = payload;
    },
    applyId(state, payload) {
        state.applyId = payload;
    },
    applyUniversities(state, payload) {
        state.applyUniversities = payload;
    },
    applyUser(state, payload) {
        state.applyUser = payload;
    },
    SET_TYPE(state, payload) {
        state.type = payload
    },
    SET_DATA_TD(state, payload) {
        state.dataId = payload
    },
    Set_ChatSide(state, payload) {
        state.chatSide = payload;
    },
    Set_File(state, payload) {
        state.file = payload;
    },
}