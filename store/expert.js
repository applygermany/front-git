// create store
export const state = () => ({
    vuexUserMenuState: false,
    vuexUserDarkMode: false,
    chatSide: "",

    process: {
        userId: null,
        mobile: null,
        phone: null,
        admittance: null,
        field_license: null,
        field_grade: null,
        average_license: null,
        diploma_grade_average: null,
        what_grade_language: null,
        last_tracking: null,
        next_tracking: null,
        text: null,
        next_step: null,
    },

    user: {},
    support_version: '',
    userId: null,
    dataId: null,
    importantFilesThatNotExist: null,
    type: null,

    // ! uploads
    uploads: [],

    // ! Universities
    allUniversities: [],
    cities: [],
    states: [],
    geographicalLocations: [],
    userUniversities: [],
    count: [],

    // ! duties
    duties: [],
    updateDuty: {},

    // ! telSupports
    monthTels: [],
    moneyTags: [],
    dateTags: [],
    comments: [],
    commentsCount: 0,
    scoreAvg: 0,

    // ! dashboard
    users: [],
    categories: [],
    usersCount: null,
    usersCountLimit: null,
    userComment: {},
    userComments: [],
    filterForm: {
        name: null,
        category: 0,
        status:null,
    },

    // ! apply status
    applyId: null,
    applyUniversities: [],
    applyUser: [],

    // uploads
    deleteDocument: {
        id: null,
        title: "",
    },
    fileType: {
        id: null,
        title: "",
    },
    selectedUser: {
        id: null,
        name: "",
        type: 1,
        hasUploadAccess: false,
    },
    selectedType: null,
    uploadAccess: {},

    orders: [],
    ordersCount: null,
    ordersCountLimit: null,

    workExperience: [],
    workExperienceCount: null,

    telSupportAccess: null,

    telMaxPrice: null,

    telWorkCount: 0,
    telWorkContractCount: 0,

    dutyType: null,
    dutyTypeId: null,
    dutyArg: null
});

// getters
export const getters = {
    vuexUserMenuState(state) {
        return state.vuexUserMenuState;
    },
    supportVersion(state) {
        return state.support_version;
    },
    vuexUserDarkMode(state) {
        return state.vuexUserDarkMode;
    },
    chatSide(state) {
        return state.chatSide;
    },

    process(state) {
        return state.process;
    },
    uploadAccess(state) {
        return state.uploadAccess;
    },

    user(state) {
        return state.user;
    },
    userId(state) {
        return state.userId;
    },
    importantFilesThatNotExist(state) {
        return state.importantFilesThatNotExist;
    },
    dataId(state) {
        return state.dataId;
    },
    type(state) {
        return state.type;
    },
    selectedUser(state) {
        return state.selectedUser;
    },

    // ! uploads
    uploads(state) {
        return state.uploads;
    },

    // ! Universities
    allUniversities(state) {
        return state.allUniversities;
    },
    cities(state) {
        return state.cities;
    },
    states(state) {
        return state.states;
    },
    geographicalLocations(state) {
        return state.geographicalLocations;
    },
    userUniversities(state) {
        return state.userUniversities;
    },
    count(state) {
        return state.count;
    },

    // ! duties
    duties(state) {
        return state.duties;
    },
    updateDuty(state) {
        return state.updateDuty;
    },

    // ! telSupports
    monthTels(state) {
        return state.monthTels;
    },
    moneyTags(state) {
        return state.moneyTags;
    },
    dateTags(state) {
        return state.dateTags;
    },
    comments(state) {
        return state.comments;
    },
    userComments(state) {
        return state.userComments;
    },
    commentsCount(state) {
        return state.commentsCount;
    },
    scoreAvg(state) {
        return state.scoreAvg;
    },

    // ! dashboard
    users(state) {
        return state.users;
    },
    categories(state) {
        return state.categories;
    },
    usersCount(state) {
        return state.usersCount;
    },
    usersCountLimit(state) {
        return state.usersCountLimit;
    },
    userComment(state) {
        return state.userComment;
    },
    selectedType(state) {
        return state.selectedType;
    },
    filterForm(state) {
        return state.filterForm;
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

    // uploads
    deleteDocument(state) {
        return state.deleteDocument;
    },

    fileType(state) {
        return state.fileType;
    },

    orders(state) {
        return state.orders;
    },

    orderCountLimit(state) {
        return state.ordersCountLimit
    },
    OrdersCount(state) {
        return state.ordersCount
    },

    workExperience(state) {
        return state.workExperience
    },
    workExperienceCount(state) {
        return state.workExperienceCount
    },

    telSupportAccess(state) {
        return state.telSupportAccess
    },

    telMaxPrice(state) {
        return state.telMaxPrice
    },

    telWorkCount(state) {
        return state.telWorkCount
    },
    telWorkContractCount(state) {
        return state.telWorkContractCount
    },
    dutyType(state) {
        return state.dutyType
    },
    dutyTypeId(state) {
        return state.dutyTypeId
    },
    dutyArg(state) {
        return state.dutyArg
    }
};

// mutations
export const mutations = {
    removeUpload(state, uploadId) {
        const index = state.uploads.findIndex(x => x.id === uploadId);
        if (index !== -1) {
            state.uploads.splice(index, 1);
        }
    },
    SET_VUEX_USER_MENU_STATE(state, vuexUserMenuState) {
        state.vuexUserMenuState = vuexUserMenuState;
    },
    SET_VUEX_USER_DARK_MODE(state, vuexUserDarkMode) {
        state.vuexUserDarkMode = vuexUserDarkMode;
    },
    Set_ChatSide(state, payload) {
        state.chatSide = payload;
    },

    SET_Process(state, payload) {
        state.process = payload;
    },

    SET_User(state, payload) {
        state.user = payload;
    },
    SET_SelectedUser(state, payload) {
        state.selectedUser = payload;
    },
    SET_SelectedType(state, payload) {
        state.selectedType = payload;
    },
    SET_UploadAccess(state, payload) {
        state.uploadAccess = payload.hasUploadAccess;
    },
    SET_UserId(state, payload) {
        state.userId = payload;
    },

    SET_importantFilesThatNotExist(state, payload) {
        state.importantFilesThatNotExist = payload;
    },

    // ! uploads
    SET_Uploads(state, payload) {
        state.uploads = payload;
    },

    // ! Universities
    SET_AllUniversities(state, payload) {
        return (state.allUniversities = payload);
    },
    SET_Cities(state, payload) {
        return (state.cities = payload);
    },
    SET_States(state, payload) {
        return (state.states = payload);
    },
    SET_GeographicalLocations(state, payload) {
        return (state.geographicalLocations = payload);
    },
    SET_UserUniversities(state, payload) {
        return (state.userUniversities = payload);
    },
    SET_Count(state, payload) {
        return (state.count = payload);
    },
    updateFieldUserUniversity(state, payload) {
        state.userUniversities[payload.index].field = payload.value;
    },
    updateOfferUserUniversity(state, payload) {
        state.userUniversities[payload.index].offer = payload.value;
    },
    updateDescUserUniversity(state, payload) {
        state.userUniversities[payload.index].description = payload.value;
    },
    updateChanceUserUniversity(state, payload) {
        state.userUniversities[payload.index].chanceGetting = payload.value;
    },
    updateLinkUserUniversity(state, payload) {
        state.userUniversities[payload.index].link = payload.value;
    },

    // ! duties
    SET_Duties(state, payload) {
        state.duties = payload;
    },
    SET_UpdateDuty(state, payload) {
        state.updateDuty = payload;
    },
    changeTitle(state, val) {
        state.updateDuty.title = val;
    },
    changeDeadline(state, val) {
        state.updateDuty.deadline = val;
    },
    changeText(state, val) {
        state.updateDuty.text = val;
    },

    // ! telSupports
    SET_MonthTels(state, payload) {
        state.monthTels = payload;
    },
    SET_MoneyTags(state, payload) {
        state.moneyTags = payload;
    },
    SET_DateTags(state, payload) {
        state.dateTags = payload;
    },
    SET_Comments(state, payload) {
        state.comments = payload;
    },
    SET_CommentsCount(state, payload) {
        state.commentsCount = payload;
    },
    SET_ScoreAvg(state, payload) {
        state.scoreAvg = payload;
    },

    // ! dashboard
    SET_Users(state, payload) {
        state.users = payload;
    },
    Set_support_version(state, payload) {
        state.support_version = payload;
    },
    UPDATE_Users(state, payload) {
        state.users = state.users.map((item) => {
            if (item.id == payload.id) {
                if (!item.comment) {
                    item.comment = {};
                }
                item.comment.text = payload.comment;
            }
            return item;
        });
    },
    SET_Categories(state, payload) {
        state.categories = payload;
    },
    UPDATE_Category(state, payload) {
        state.users = state.users.map((item) => {
            if (item.id == payload.id) {
                item.category = payload.category;
            }
            return item;
        });
    },
    SET_UsersCount(state, payload) {
        state.usersCount = payload;
    },
    SET_UsersCountLimit(state, payload) {
        state.usersCountLimit = payload;
    },
    SET_UserComment(state, payload) {
        state.userComment = payload;
    },
    changeFilterFormName(state, payload) {
        state.filterForm.name = payload;
    },
    changeFilterFormCategory(state, payload) {
        state.filterForm.category = payload;
    },
    changeFilterFormStatus(state, payload) {
        state.filterForm.status = payload;
    },

    applyId(state, payload) {
        state.applyId = payload;
    },
    applyUser(state, payload) {
        state.applyUser = payload;
    },
    applyUniversities(state, payload) {
        state.applyUniversities = payload;
    },

    applyUniversityFile(state, payload) {
        state.applyUniversities[payload.index].applyFile = payload.data.applyFile;
        state.applyUniversities[payload.index].applyFileSize = payload.data.applyFileSize;
    },

    // uploads
    deleteDocument(state, payload) {
        state.deleteDocument = payload;
    },

    fileType(state, payload) {
        state.fileType = payload;
    },

    type(state, payload) {
        state.type = payload;
    },

    dataId(state, payload) {
        state.dataId = payload;
    },

    SET_Orders(state, payload) {
        state.orders = payload;
    },
    SET_OrdersCount(state, payload) {
        state.ordersCount = payload;
    },
    SET_OrdersCountLimit(state, payload) {
        state.ordersCountLimit = payload;
    },

    SET_WorkExperience(state, payload) {
        state.workExperience = payload;
    },
    SET_WorkExperienceCount(state, payload) {
        state.workExperienceCount = payload;
    },

    SET_TelSupportAccess(state, payload) {
        state.telSupportAccess = payload;
    },

    SET_TelMaxPrice(state, payload) {
        state.telMaxPrice = payload;
    },

    SET_TelWorkCount(state, payload) {
        state.telWorkCount = payload;
    },

    SET_TelWorkContractCount(state, payload) {
        state.telWorkContractCount = payload;
    },

    SET_UserComments(state, payload) {
        state.userComments = payload;
    },

    SET_DutyType(state, payload) {
        state.dutyType = payload;
    },
    SET_DutyTypeId(state, payload) {
        state.dutyTypeId = payload;
    },
    SET_DutyArg(state, payload) {
        state.dutyArg = payload;
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

    setProcess({ commit }, payload) {
        commit("SET_Process", payload);
    },

    // ! uploads
    async getDocument({ commit }, payload) {
        const { data } = await this.$axios.get("v1/expert/getDocument/" + payload);

        commit("SET_Uploads", data.documents);
        commit("SET_User", data.user);
        commit("SET_UserId", payload);
        commit("SET_importantFilesThatNotExist", data.importantFilesThatNotExist);
    },

    // ! Universities
    async getAllUniversities({ commit }) {
        const { data } = await this.$axios.get("v1/expert/getAllUniversities/");

        commit("SET_AllUniversities", data.universities);
        commit("SET_Cities", data.cities);
        commit("SET_States", data.states);
        commit("SET_GeographicalLocations", data.geographicalLocations);
    },
    async getUniversities({ commit }, payload) {
        const { data } = await this.$axios.get(
            "v1/expert/getUniversities/" + payload
        );

        commit("SET_UserUniversities", data.universities);
        commit("SET_User", data.user);
        commit("SET_Count", data.user.maxUniversityCount);
        commit("SET_UserId", payload);
    },

    // ! duties
    async duties({ commit }, payload) {
        const { data } = await this.$axios.get("v1/expert/getDuties/" + payload);

        commit("SET_Duties", data.duties);
        commit("SET_User", data.user);
        commit("SET_UserId", payload);
    },

    // ! telSupports
    async monthTels({ commit }) {
        const { data } = await this.$axios.get("/v1/expert/getMonthTel");

        commit("SET_MonthTels", data.telSupports);
    },

    // ! dashboard
    async getAllUser({ commit }) {
        const { data } = await this.$axios.post(`v1/expert/getAllUser`, {
            take: 10,
        });

        commit("SET_Users", data.users);
        commit("SET_Categories", data.categories);
        commit("SET_UsersCount", data.usersCount);
        commit("SET_UsersCountLimit", data.usersCount);
    },

    async getOrders({ commit }) {
        const { data } = await this.$axios.post(`v1/expert/orders`, {
            take: 10,
        });

        commit("SET_Orders", data.orders);
        commit("SET_Categories", data.categories);
        commit("SET_OrdersCount", data.ordersCount);
        commit("SET_OrdersCountLimit", data.ordersCount);
        commit("SET_UsersCount", data.usersCount);
    },


    async getAllUsers({ commit }) {
        let filterFrom = getters['filterForm']
        if (filterFrom && filterFrom.name != null) {
            var {data} = await this.$axios.post(`v1/expert/getAllUser`, {
                ...filterFrom,
                take: 10,
            });
            commit("SET_Users", data.users);
            commit("Set_support_version", data.support_version);
            commit("SET_Categories", data.categories);
            commit("SET_UsersCount", data.usersCount);
            commit("SET_UsersCountLimit", data.usersCount);
            commit("SET_TelSupportAccess", data.telSupportAccess);

            var {data} = await this.$axios.get(`v1/expert/votes`);

            commit("chat/Set_votes", data.votes);
        } else {
            var {data} = await this.$axios.post(`v1/expert/getAllUser`, {take: 10});
            commit("SET_Users", data.users);
            commit("Set_support_version", data.support_version);
            commit("SET_Categories", data.categories);
            commit("SET_UsersCount", data.usersCount);
            commit("SET_UsersCountLimit", data.usersCount);

            var {data} = await this.$axios.get(`v1/expert/votes`);

            commit("chat/Set_votes", data.votes);
        }
    },
};