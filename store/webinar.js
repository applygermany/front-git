// create store
export const state = () => ({
    //! resume
    webinar: null,
});

// getters
export const getters = {
    // ! resume
    webinars(state) {
        return state.webinar;
    },
};

// mutations
export const mutations = {
    // ! resume
    Set_Webinar(state, payload) {
        state.webinar = payload;
    },
};

// actions
export const actions = {

};
