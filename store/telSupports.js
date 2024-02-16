// create store
export const state = () => ({
    expertId: null,
    expert: null,
    times: null,
    weeks: null,
    days: null,
    months: null,
    firstDayTelSupports: null,
    secondDayTelSupports: null,
    thirdDayTelSupports: null,
    fourthDayTelSupports: null,
    fifthDayTelSupports: null,
    sixthDayTelSupports: null,
    seventhDayTelSupports: null,
    firstDayTelSupports1: null,
    secondDayTelSupports1: null,
    thirdDayTelSupports1: null,
    fourthDayTelSupports1: null,
    fifthDayTelSupports1: null,
    sixthDayTelSupports1: null,
    seventhDayTelSupports1: null,
    firstDayTelSupports2: null,
    secondDayTelSupports2: null,
    thirdDayTelSupports2: null,
    fourthDayTelSupports2: null,
    fifthDayTelSupports2: null,
    sixthDayTelSupports2: null,
    comments: null,
    nextTelSupport: null,
    telSupport: {
        date: "",
        fromTime: "",
        id: null,
        price: null,
        reserved: 0,
        title: "",
        toTime: "",
    },

    telSupportsHistory: {
        telSupports: [],
        startDate: "",
        endDate: "",
    },
    telSupportReserve: null,
    openInTelSupport: false,

    pollinfo: {},

    country: null,
    countryCode: null,
    vuexTurnOffVpnModal: false,
    userTelSupportInformation: null,
    telSupportId: null
});

// getters
export const getters = {
    expertTelSupports(state) {
        return state.expertTelSupports;
    },
    expertId(state) {
        return state.expertId;
    },
    expert(state) {
        return state.expert;
    },
    times(state) {
        return state.times;
    },
    weeks(state) {
        return state.weeks;
    },
    days(state) {
        return state.days;
    },
    months(state) {
        return state.months;
    },
    firstDayTelSupports(state) {
        return state.firstDayTelSupports;
    },
    secondDayTelSupports(state) {
        return state.secondDayTelSupports;
    },
    thirdDayTelSupports(state) {
        return state.thirdDayTelSupports;
    },
    fourthDayTelSupports(state) {
        return state.fourthDayTelSupports;
    },
    fifthDayTelSupports(state) {
        return state.fifthDayTelSupports;
    },
    sixthDayTelSupports(state) {
        return state.sixthDayTelSupports;
    },
    seventhDayTelSupports(state) {
        return state.seventhDayTelSupports;
    },
    firstDayTelSupports1(state) {
        return state.firstDayTelSupports1;
    },
    secondDayTelSupports1(state) {
        return state.secondDayTelSupports1;
    },
    thirdDayTelSupports1(state) {
        return state.thirdDayTelSupports1;
    },
    fourthDayTelSupports1(state) {
        return state.fourthDayTelSupports1;
    },
    fifthDayTelSupports1(state) {
        return state.fifthDayTelSupports1;
    },
    sixthDayTelSupports1(state) {
        return state.sixthDayTelSupports1;
    },
    firstDayTelSupports2(state) {
        return state.firstDayTelSupports2;
    },
    secondDayTelSupports2(state) {
        return state.secondDayTelSupports2;
    },
    thirdDayTelSupports2(state) {
        return state.thirdDayTelSupports2;
    },
    fourthDayTelSupports2(state) {
        return state.fourthDayTelSupports2;
    },
    fifthDayTelSupports2(state) {
        return state.fifthDayTelSupports2;
    },
    sixthDayTelSupports2(state) {
        return state.sixthDayTelSupports2;
    },
    seventhDayTelSupports1(state) {
        return state.seventhDayTelSupports1;
    },
    comments(state) {
        return state.comments;
    },
    nextTelSupport(state) {
        return state.nextTelSupport;
    },
    telSupport(state) {
        return state.telSupport;
    },
    telSupportsHistory(state) {
        return state.telSupportsHistory;
    },
    telSupportReserve(state) {
        return state.telSupportReserve;
    },
    openInTelSupport(state) {
        return state.openInTelSupport;
    },

    pollinfo(state) {
        return state.pollinfo;
    },

    country(state) {
        return state.country;
    },
    countryCode(state) {
        return state.countryCode;
    },
    vuexTurnOffVpnModal(state) {
        return state.vuexTurnOffVpnModal;
    },
    userTelSupportInformation(state) {
        return state.userTelSupportInformation;
    },
    telSupportId(state) {
        return state.telSupportId;
    },
};

// mutations
export const mutations = {
    SET_ExpertId(state, payload) {
        state.expertId = payload;
    },
    SET_Expert(state, payload) {
        state.expert = payload;
    },
    SET_Times(state, payload) {
        state.times = payload;
    },
    SET_Weeks(state, payload) {
        state.weeks = payload;
    },
    SET_Days(state, payload) {
        state.days = payload;
    },
    SET_Months(state, payload) {
        state.months = payload;
    },
    SET_FirstDayTelSupports(state, payload) {
        state.firstDayTelSupports = payload;
    },
    SET_SecondDayTelSupports(state, payload) {
        state.secondDayTelSupports = payload;
    },
    SET_ThirdDayTelSupports(state, payload) {
        state.thirdDayTelSupports = payload;
    },
    SET_FourthDayTelSupports(state, payload) {
        state.fourthDayTelSupports = payload;
    },
    SET_FifthDayTelSupports(state, payload) {
        state.fifthDayTelSupports = payload;
    },
    SET_SixthDayTelSupports(state, payload) {
        state.sixthDayTelSupports = payload;
    },
    SET_SeventhDayTelSupports(state, payload) {
        state.seventhDayTelSupports = payload;
    },
    SET_FirstDayTelSupports1(state, payload) {
        state.firstDayTelSupports1 = payload;
    },
    SET_SecondDayTelSupports1(state, payload) {
        state.secondDayTelSupports1 = payload;
    },
    SET_ThirdDayTelSupports1(state, payload) {
        state.thirdDayTelSupports1 = payload;
    },
    SET_FourthDayTelSupports1(state, payload) {
        state.fourthDayTelSupports1 = payload;
    },
    SET_FifthDayTelSupports1(state, payload) {
        state.fifthDayTelSupports1 = payload;
    },
    SET_SixthDayTelSupports1(state, payload) {
        state.sixthDayTelSupports1 = payload;
    },
    SET_SeventhDayTelSupports1(state, payload) {
        state.seventhDayTelSupports1 = payload;
    },
    SET_FirstDayTelSupports2(state, payload) {
        state.firstDayTelSupports2 = payload;
    },
    SET_SecondDayTelSupports2(state, payload) {
        state.secondDayTelSupports2 = payload;
    },
    SET_ThirdDayTelSupports2(state, payload) {
        state.thirdDayTelSupports2 = payload;
    },
    SET_FourthDayTelSupports2(state, payload) {
        state.fourthDayTelSupports2 = payload;
    },
    SET_FifthDayTelSupports2(state, payload) {
        state.fifthDayTelSupports2 = payload;
    },
    SET_SixthDayTelSupports2(state, payload) {
        state.sixthDayTelSupports2 = payload;
    },
    SET_Comments(state, payload) {
        state.comments = payload;
    },
    SET_NextTelSupport(state, payload) {
        state.nextTelSupport = payload;
    },
    SET_TelSupport(state, payload) {
        state.telSupport = payload;
    },
    SET_TelSupportsHistory(state, payload) {
        state.telSupportsHistory = payload;
    },
    SET_TelSupportReserve(state, payload) {
        state.telSupportReserve = payload;
    },
    SET_OpenInTelSupport(state, payload) {
        state.openInTelSupport = payload;
    },

    SET_Pollinfo(state, payload) {
        state.pollinfo = payload;
    },

    SET_Country(state, payload) {
        state.country = payload;
    },
    SET_CountryCode(state, payload) {
        state.countryCode = payload;
    },

    SET_VUEX_TURN_OFF_VPN_MODAL(state, vuexTurnOffVpnModal) {
        state.vuexTurnOffVpnModal = vuexTurnOffVpnModal;
    },
    SET_USER_TEL_SUPPORT_INFORMATION(state, userTelSupportInformation) {
        state.userTelSupportInformation = userTelSupportInformation;
    },
    SET_TelSupportId(state, telSupportId) {
        state.telSupportId = telSupportId;
    },
};

// actions
export const actions = {
    async expertTelSupports({ commit }, payload) {
        const { data } = await this.$axios.post(`v1/user/expertTelSupports`, {
            id: payload,
        });

        commit("telSupports/SET_ExpertId", data.expert.id);
        commit("telSupports/SET_Expert", data.expert);
        commit("telSupports/SET_Times", data.times);
        commit("telSupports/SET_NextTelSupport", data.nextTelSupport);
        commit("telSupports/SET_TelSupportReserve", data.nextTelSupport);
        commit("telSupports/SET_Comments", data.comments);
    },

    setVuexTurnOffVpnModal({ commit }, setVuexTurnOffVpnModal) {
        commit("SET_VUEX_TURN_OFF_VPN_MODAL", setVuexTurnOffVpnModal);
    },
};