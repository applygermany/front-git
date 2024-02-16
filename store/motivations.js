// create store
export const state = () => ({
    motivation: {
        id: 0,
        to: "برای ارائه به",
        country: "انتخاب سفارت",
        name: null,
        family: null,
        phone: null,
        birthDate: null,
        birthPlace: null,
        email: null,
        address: null,
        about: null,
        resume: null,
        whyGermany: null,
        afterGraduation: null,
        extraText: null,
    },
    universities: [
        {
            name: null,
            field: null,
            grade: null,
            language: null,
            text1: null,
            text2: null,
            type: null
        },
    ],
    selectedUniversity: "",
    errors: [],
    universitiesErrors: [],
    resumeFile: null,

    // get
    motivations: [],

    // preview
    previewMotivation: {},
    previewUniversities: [],
    hash: null,
    canFill: false,
});

// getters
export const getters = {
    motivation(state) {
        return state.motivation;
    },
    motivationTo(state) {
        return state.motivation.to;
    },
    universities(state) {
        return state.universities;
    },
    selectedUniversity(state) {
        return state.selectedUniversity;
    },
    errors(state) {
        return state.errors;
    },
    universitiesErrors(state) {
        return state.universitiesErrors;
    },

    // get
    motivations(state) {
        return state.motivations;
    },
    motivationId(state) {
        return state.motivation.id;
    },

    previewMotivation(state) {
        return state.previewMotivation;
    },
    previewUniversities(state) {
        return state.previewUniversities;
    },
    hash(state) {
        return state.hash;
    },
    canFill(state) {
        return state.canFill;
    },
};

// mutations
export const mutations = {
    SET_MotivationTo(state, payload) {
        state.motivation.to = payload;
        state.universities[0].type = payload
        // if (payload === "سفارت")
        //     state.universities.splice(1, state.universities.length - 1);
    },
    SET_MotivationCountry(state, payload) {
        state.motivation.country = payload;
    },
    Set_CanFill(state, payload) {
        state.canFill = payload;
    },
    SET_MotivationName(state, payload) {
        state.motivation.name = payload;
    },
    SET_MotivationFamily(state, payload) {
        state.motivation.family = payload;
    },
    SET_MotivationPhone(state, payload) {
        state.motivation.phone = payload;
    },
    SET_MotivationBirthDate(state, payload) {
        state.motivation.birthDate = payload;
    },
    SET_MotivationBirthPlace(state, payload) {
        state.motivation.birthPlace = payload;
    },
    SET_MotivationEmail(state, payload) {
        state.motivation.email = payload;
    },
    SET_MotivationAddress(state, payload) {
        state.motivation.address = payload;
    },
    SET_MotivationAbout(state, payload) {
        state.motivation.about = payload;
    },
    SET_MotivationResume(state, payload) {
        state.motivation.resume = payload;
    },
    SET_MotivationWhyGermany(state, payload) {
        state.motivation.whyGermany = payload;
    },
    SET_MotivationAfterGraduation(state, payload) {
        state.motivation.afterGraduation = payload;
    },
    SET_MotivationExtraText(state, payload) {
        state.motivation.extraText = payload;
    },
    SET_MotivationId(state, payload) {
        state.motivation.id = payload;
    },
    SET_Motivation(state, payload) {
        state.motivation = payload;
    },

    Add_Universities(state) {
        state.universities.push({
            name: null,
            field: null,
            grade: null,
            language: null,
            text1: null,
            text2: null,
            type: null
        });
    },
    Delete_university(state, payload) {
        state.universities.splice(payload, 1);
    },
    SET_University(state, payload) {
        state.universities = payload;
    },
    SET_UniversityName(state, payload) {
        state.universities[payload.index].name = payload.val;
    },
    SET_UniversityField(state, payload) {
        state.universities[payload.index].field = payload.val;
    },
    SET_UniversityGrade(state, payload) {
        state.universities[payload.index].grade = payload.val;
        state.universities[payload.index].type = state.motivation.to;
    },
    SET_UniversityLanguage(state, payload) {
        state.universities[payload.index].language = payload.val;
    },
    SET_UniversityText1(state, payload) {
        state.universities[payload.index].text1 = payload.val;
    },
    SET_UniversityText2(state, payload) {
        state.universities[payload.index].text2 = payload.val;
    },
    SET_SelectUniversity(state, payload) {
        state.selectedUniversity = payload;
    },
    SET_Errors(state, payload) {
        state.errors = payload;
    },
    SET_UniversitiesErrors(state, payload) {
        state.universitiesErrors = payload;
    },
    SET_ResumeFile(state, payload) {
        state.resumeFile = payload;
    },
    Remove_ResumeFile(state) {
        state.resumeFile = null;
    },

    SET_Motivations(state, payload) {
        state.motivations = payload;
    },

    Set_PreviewMotivation(state, payload) {
        state.previewMotivation = payload;
    },
    Set_PreviewUniversities(state, payload) {
        state.previewUniversities = payload;
    },
    Set_Hash(state, payload) {
        state.hash = payload;
    },
    Remove_Motivation(state) {
        state.motivation = {
            id: 0,
            to: "برای ارائه به",
            country: "انتخاب سفارت",
            name: null,
            family: null,
            phone: null,
            birthDate: null,
            birthPlace: null,
            email: null,
            address: null,
            about: null,
            resume: null,
            whyGermany: null,
            afterGraduation: null,
            extraText: null,
        }
        state.universities = [
            {
                name: null,
                field: null,
                grade: null,
                language: null,
                text1: null,
                text2: null,
                type: null
            },
        ];
    },
};

// actions
export const actions = {
    async saveMotivation({state, commit, dispatch}, payload) {
        dispatch("checkError");
        dispatch("checkUniversitiesErrors");

        if (state.errors.length != 0 || state.universitiesErrors.length != 0) {
            const error = new Error("اطلاعات را کامل وارد کنید");
            throw error;
        }

        const {data} = await this.$axios.post("v1/user/saveMotivation", {
            motivation: state.motivation,
            universities: state.universities,
        });

        if (data.status == 1) commit("Set_Hash", data.transaction_id);
        // if (data.status == 1 && state.resumeFile != null) {
        //   const fd = new FormData();
        //   fd.append("id", data.id);
        //   fd.append("file", state.resumeFile);
        //   const { data:res } = await this.$axios.post(
        //     "v1/user/motivation/uploadResume",
        //     fd
        //   );
        //   const error = new Error(res.msg);
        //   throw error;
        // }

        const error = new Error(data.msg);
        throw error;
    },

    async motivations({commit}) {
        const {data} = await this.$axios.get("v1/user/newMotivation");
        commit("SET_MotivationId", data.motivation.id);
        commit("SET_Motivation", data.motivation);
        commit("Set_CanFill", !data.hasUniversity);
    },

    async removeMotivation({commit}) {
        commit("Remove_Motivation");
    },

    checkError({state, commit}) {
        let errors = [];
        if (state.motivation['name'] == null || state.motivation['name'] == "") {
            errors.push(String('name'));
        }
        if (state.motivation['family'] == null || state.motivation['family'] == "") {
            errors.push(String('family'));
        }
        if (state.motivation['phone'] == null || state.motivation['phone'] == "") {
            errors.push(String('phone'));
        }
        if (state.motivation['birthPlace'] == null || state.motivation['birthPlace'] == "") {
            errors.push(String('birthPlace'));
        }
        if (state.motivation['email'] == null || state.motivation['email'] == "") {
            errors.push(String('email'));
        }
        if (state.motivation['address'] == null || state.motivation['address'] == "") {
            errors.push(String('address'));
        }
        if (state.motivation['birthDate'] == null || state.motivation['birthDate'] == "") {
            errors.push(String('birthDate'));
        }
        if (state.motivation['about'] == null || state.motivation['about'] == "") {
            errors.push(String('about'));
        }
        if (state.motivation['resume'] == null || state.motivation['resume'] == "") {
            errors.push(String('resume'));
        }
        if (state.motivation['to'] == null || state.motivation['to'] == "") {
            errors.push(String('to'));
        }
        if (state.motivation['afterGraduation'] == null || state.motivation['afterGraduation'] == "") {
            errors.push(String('afterGraduation'));
        }
        if (state.motivation['whyGermany'] == null || state.motivation['whyGermany'] == "") {
            errors.push(String('whyGermany'));
        }
        commit("SET_Errors", errors);
    },

    checkUniversitiesErrors({state, commit}, payload = 0) {
        let universitiesErrors = [];
        let status = payload;
        if (state.motivation.to === 'دانشگاه') {
            state.universities.forEach((item, index) => {
                if(index >= 1) {
                    if (item['name'] == null || item['name'] == "") {
                        universitiesErrors.push(`name-${index}`);
                    }
                    if (item['field'] == null || item['field'] == "") {
                        universitiesErrors.push(`field-${index}`);
                    }
                    if (item['language'] == null || item['language'] == "زبان تحصیل") {
                        universitiesErrors.push(`language-${index}`);
                    }
                    if (item['grade'] == null || item['grade'] == "") {
                        universitiesErrors.push(`grade-${index}`);
                    }
                }
            });
        } else {

            if (state.universities[0]['name'] == null || state.universities[0]['name'] == "") {
                universitiesErrors.push(`name-0`);
            }
            if (state.universities[0]['field'] == null || state.universities[0]['field'] == "") {
                universitiesErrors.push(`field-0`);
            }
            if (state.universities[0]['language'] == null || state.universities[0]['language'] == "زبان تحصیل") {
                universitiesErrors.push(`language-0`);
            }
            if (state.universities[0]['grade'] == null || state.universities[0]['grade'] == "") {
                universitiesErrors.push(`grade-0`);
            }
        }

        commit("SET_UniversitiesErrors", universitiesErrors);
    },

    async getMotivations({commit}) {
        const {data} = await this.$axios.get(`v1/user/motivations`);

        commit("SET_Motivations", data.motivations);
    },

    removeFromError({state, commit}, payload) {
        const newErrors = state.errors.filter((item) => item != payload);

        commit("SET_Errors", newErrors);
    },

    removeFromUniversitiesError({state, commit}, payload) {
        const newErrors = state.universitiesErrors.filter(
            (item) => item != payload
        );

        commit("SET_UniversitiesErrors", newErrors);
    },

    async sendEditRequest(_, payload) {
        const {data} = await this.$axios.post("v1/user/editMotivation", payload);

        const error = new Error(data.msg);
        throw error;
    },

    async updateMotivationExtra({dispatch}, payload) {
        const {data} = await this.$axios.post(
            "v1/user/updateMotivationExtra",
            payload
        );

        if (data.status == 1) dispatch("motivations/getMotivations");
        const error = new Error(data.msg);
        throw error;
    },

    async previewMotivation({commit}, payload) {
        const {data} = await this.$axios.get(`v1/user/motivation/${payload}`);

        commit("Set_PreviewMotivation", data.motivation.data);
        commit("Set_PreviewUniversities", data.motivation.universities);
    },
};
