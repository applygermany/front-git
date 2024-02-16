// create store
export const state = () => ({
    //! resume
    resume: {
        address: null,
        admin_attachment: null,
        admin_attachments: null,
        admin_edit: null,
        birthDate: null,
        birthPlace: null,
        courses: [
            {
                courseTitle: null,
                courseOrganizer: null,
                courseYear: null,
            }
        ],
        color: null,
        date: null,
        educationRecords: [
            {
                grade: null,
                fromDateYear: null,
                fromDateMonth: null,
                toDateYear: null,
                toDateMonth: null,
                schoolName: null,
                field: null,
                gradeScore: null,
                city: null,
                text: null,
            }
        ],

        email: null,
        family: null,
        hobbies: [],
        id: null,
        image: null,
        language: null,
        languages: [],
        main_file: null,
        name: null,
        phone: null,
        researchs: [{
            type: "نوع پژوهش",
            title: null,
            year: null,
            text: null,
        }],
        socialmediaLinks: null,
        softwareKnowledges: [{
            title: null,
            fluencyLevel: null,
        }],
        status: null,
        text: null,
        theme: null,
        user_edit: null,
        user_file: null,
        user_file_name: null,
        user_file_size: null,
        works: [{
            fromDateYear: null,
            fromDateMonth: null,
            toDateYear: null,
            toDateMonth: null,
            companyName: null,
            position: null,
            city: null,
            text: null,
        },],
    },
    resumeTemp: [],
    errors: [],
    educationRecordErrors: [],
    languageErrors: [],
    workErrors: [],
    courseErrors: [],
    knowledgeErrors: [],
    researchErrors: [],

    resumes: [],
    resumeId: null,
    hobbyTitle: "",

    previewResume: [],
    hash: null,
    canFill: false,
    haveUniversity: false,
});

// getters
export const getters = {
    // ! resume
    resumes(state) {
        return state.resumes;
    },
    hobbyTitle(state) {
        return state.hobbyTitle;
    },
    educationRecordErrors(state) {
        return state.educationRecordErrors;
    },
    languageErrors(state) {
        return state.languageErrors;
    },
    researchErrors(state) {
        return state.researchErrors;
    },
    resume(state) {
        let resume = state.resume;
        if (resume.educationRecords === null) {
            resume.educationRecords = [];
        }
        if (resume.educationRecords.length === 0) {
            resume.educationRecords.push({
                grade: null,
                fromDateYear: null,
                fromDateMonth: null,
                toDateMonth: null,
                toDateYear: null,
                schoolName: null,
                field: null,
                gradeScore: null,
                city: null,
                text: null,
            })
        }
        return resume;
    },
    resumeTemp(state) {
        return state.resumeTemp;
    },
    errors(state) {
        return state.errors;
    },
    image(state) {
        return state.resume.image;
    },
    resumeId(state) {
        return state.resumeId;
    },
    previewResume(state) {
        return state.previewResume;
    },
    language(state) {
        return state.resume.language;
    },
    hash(state) {
        return state.hash;
    },
    canFill(state) {
        return state.canFill;
    },
    haveUniversity(state) {
        return state.haveUniversity;
    },
};

// mutations
export const mutations = {
    // ! resume


    SET_EducationRecordErrors(state, payload) {
        state.educationRecordErrors = payload;
    },
    SET_LanguageErrors(state, payload) {
        state.languageErrors = payload;
    },
    Set_WorkErrors(state, payload) {
        // state.workErrors = [];

        state.workErrors = payload;
    },
    SET_CourseErrors(state, payload) {
        state.courseErrors = payload;
    },
    Set_KnowledgeErrors(state, payload) {
        state.knowledgeErrors = payload;
    },
    Set_ResearchErrors(state, payload) {
        state.researchErrors = payload;
    },
    SET_Resumes(state, payload) {
        state.resumes = payload;
    },
    Set_Resume(state, payload) {
        state.resume = payload;
    },
    Set_ResumeTemp(state, payload) {

        state.resumeTemp = payload;

    },
    Set_ResumeId(state, payload) {
        state.resumeId = payload;
    },
    Set_CanFill(state, payload) {
        state.canFill = payload;
    },
    Set_HaveUniversity(state, payload) {
        state.haveUniversity = payload;
    },

    SET_ResumeLanguage(state, payload) {
        state.resume.language = payload;
    },
    SET_ResumeTheme(state, payload) {
        state.resume.theme = payload;
    },
    SET_ResumeColor(state, payload) {
        state.resume.color = payload;
    },
    SET_ResumeName(state, payload) {
        state.resume.name = payload;
    },
    SET_ResumeFamily(state, payload) {
        state.resume.family = payload;
    },
    SET_ResumePhone(state, payload) {
        state.resume.phone = payload;
    },
    SET_ResumeBirthPlace(state, payload) {
        state.resume.birthPlace = payload;
    },
    SET_ResumeBirthDate(state, payload) {
        state.resume.birthDate = payload;
    },
    SET_ResumeEmail(state, payload) {
        state.resume.email = payload;
    },
    SET_ResumeAddress(state, payload) {
        state.resume.address = payload;
    },
    SET_ResumeSocialMediaLinks(state, payload) {
        state.resume.socialmediaLinks = payload;
    },

    SET_EducationRecordsSchoolName(state, payload) {
        state.resume.educationRecords[payload.index].schoolName = payload.val;
    },
    SET_EducationRecordsField(state, payload) {
        state.resume.educationRecords[payload.index].field = payload.val;
    },
    SET_EducationRecordsGrade(state, payload) {
        state.resume.educationRecords[payload.index].grade = payload.val;
    },
    SET_EducationRecordsGradeScore(state, payload) {
        state.resume.educationRecords[payload.index].gradeScore = payload.val;
    },
    SET_EducationRecordsCity(state, payload) {
        state.resume.educationRecords[payload.index].city = payload.val;
    },
    SET_EducationRecordsFromDateYear(state, payload) {
        state.resume.educationRecords[payload.index].fromDateYear = payload.val;
    },
    SET_EducationRecordsToDateYear(state, payload) {
        state.resume.educationRecords[payload.index].toDateYear = payload.val;
    },
    SET_EducationRecordsFromDateMonth(state, payload) {
        state.resume.educationRecords[payload.index].fromDateMonth = payload.val;
    },
    SET_EducationRecordsToDateMonth(state, payload) {
        state.resume.educationRecords[payload.index].toDateMonth = payload.val;
    },
    SET_EducationRecordsText(state, payload) {
        state.resume.educationRecords[payload.index].text = payload.val;
    },

    SET_LanguagesTitle(state, payload) {
        state.resume.languages[payload.index].title = payload.val;
    },
    SET_LanguagesCurrentStatus(state, payload) {
        state.resume.languages[payload.index].currentStatus = payload.val;
    },
    SET_LanguagesFluencyLevel(state, payload) {
        state.resume.languages[payload.index].fluencyLevel = payload.val;
    },
    SET_LanguagesDegree(state, payload) {
        state.resume.languages[payload.index].degree = payload.val;
    },
    SET_LanguagesScore(state, payload) {
        state.resume.languages[payload.index].score = payload.val;
    },

    SET_WorksCompanyName(state, payload) {
        state.resume.works[payload.index].companyName = payload.val;
    },
    SET_WorksText(state, payload) {
        state.resume.works[payload.index].text = payload.val;
    },
    SET_WorksCity(state, payload) {
        state.resume.works[payload.index].city = payload.val;
    },
    SET_WorksFromDateYear(state, payload) {
        state.resume.works[payload.index].fromDateYear = payload.val;
    },
    SET_WorksToDateYear(state, payload) {
        state.resume.works[payload.index].toDateYear = payload.val;
    },
    SET_WorksFromDateMonth(state, payload) {
        state.resume.works[payload.index].fromDateMonth = payload.val;
    },
    SET_WorksToDateMonth(state, payload) {
        state.resume.works[payload.index].toDateMonth = payload.val;
    },
    SET_WorksPosition(state, payload) {
        state.resume.works[payload.index].position = payload.val;
    },

    SET_SoftwareKnowledgesTitle(state, payload) {
        state.resume.softwareKnowledges[payload.index].title = payload.val;
    },
    SET_SoftwareKnowledgesFluencyLevel(state, payload) {
        state.resume.softwareKnowledges[payload.index].fluencyLevel = payload.val;
    },

    SET_CoursesTitle(state, payload) {
        state.resume.courses[payload.index].courseTitle = payload.val;
    },
    SET_CoursesOrganizer(state, payload) {
        state.resume.courses[payload.index].courseOrganizer = payload.val;
    },
    SET_CoursesYear(state, payload) {
        state.resume.courses[payload.index].courseYear = payload.val;
    },

    SET_ResearchsType(state, payload) {
        state.resume.researchs[payload.index].type = payload.val;
    },
    SET_ResearchsTitle(state, payload) {
        state.resume.researchs[payload.index].title = payload.val;
    },
    Set_HobbyTitle(state, payload) {
        state.hobbyTitle = payload.val;
    },
    SET_ResearchsYear(state, payload) {
        state.resume.researchs[payload.index].year = payload.val;
    },
    SET_ResearchsText(state, payload) {
        state.resume.researchs[payload.index].text = payload.val;
    },
    Set_Text(state, payload) {
        state.resume.text = payload;
    },

    SET_Errors(state, payload) {
        state.errors = payload;
    },

    Set_PreviewResume(state, payload) {
        state.previewResume = payload;
    },
    Set_Hash(state, payload) {
        state.hash = payload;
    },
    Add_EducationRecords(state) {
        state.resume.educationRecords.push({
            grade: null,
            fromDateYear: null,
            fromDateMonth: null,
            toDateYear: null,
            toDateMonth: null,
            schoolName: null,
            field: null,
            gradeScore: null,
            city: null,
            text: null,
        });
    },
    Add_language(state) {
        state.resume.languages.push({
            title: null,
            currentStatus: null,
            fluencyLevel: null,
            degree: null,
            score: null,
        });
    },
    Add_Hobby(state, payload) {

        state.resume.hobbies.push({
            title: payload,
        });
    },
    Add_Work(state) {
        state.resume.works.push({

            fromDateYear: null,
            fromDateMonth: null,
            toDateYear: null,
            toDateMonth: null,
            companyName: null,
            position: null,
            city: null,
            text: null,
        });
    },
    Add_Course(state) {
        state.resume.courses.push({

            courseTitle: null,
            courseOrganizer: null,
            courseYear: null,
        });
    },

    Add_Knowledge(state) {
        state.resume.softwareKnowledges.push({
            title: null,
            fluencyLevel: null,
        });
    },


    Add_Research(state) {
        state.resume.researchs.push({
            //type: "نوع پژوهش",
            type: null,
            title: null,
            year: null,
            text: null,
        });
    },

    Delete_EducationRecord(state, payload) {
        state.resume.educationRecords.splice(payload, 1);
    },
    Delete_Language(state, payload) {
        state.resume.languages.splice(payload, 1);
    },
    Delete_Hobby(state, payload) {
        state.resume.hobbies.splice(payload, 1);
    },
    Delete_Work(state, payload) {
        state.resume.works.splice(payload, 1);
    },
    Delete_Course(state, payload) {
        state.resume.courses.splice(payload, 1);
    },
    Delete_Knowledge(state, payload) {
        state.resume.softwareKnowledges.splice(payload, 1);
    },
    Delete_Research(state, payload) {
        state.resume.researchs.splice(payload, 1);
    },
    SET_Image(state, payload) {
        state.resume.image = payload.src;
    },
    Remove_file(state) {
        state.user_file = null;
        state.user_file_name = null;
        state.user_file_size = null;
    },
    Remove_Resume(state) {
        state.resume = {
            address: null,
            admin_attachment: null,
            admin_attachments: null,
            admin_edit: null,
            birthDate: null,
            birthPlace: null,
            courses: [{
                courseTitle: null,
                courseOrganizer: null,
                courseYear: null,
            },],
            color: null,
            date: null,
            educationRecords: [
                {
                    grade: null,
                    fromDateYear: null,
                    fromDateMonth: null,
                    toDateYear: null,
                    toDateMonth: null,
                    schoolName: null,
                    field: null,
                    gradeScore: null,
                    city: null,
                    text: null,
                }
            ],
            email: null,
            family: null,
            hobbies: [],
            id: null,
            image: null,
            language: null,
            languages: [{
                title: null,
                currentStatus: null,
                fluencyLevel: null,
                degree: null,
                score: null,
            }],
            main_file: null,
            name: null,
            phone: null,
            researchs: [{
                //type: "نوع پژوهش",
                type: null,
                title: null,
                year: null,
                text: null,
            }],
            socialmediaLinks: null,
            softwareKnowledges: [
                {
                    title: null,
                    fluencyLevel: null,
                },
            ],
            status: null,
            text: null,
            theme: null,
            user_edit: null,
            user_file: null,
            user_file_name: null,
            user_file_size: null,
            works: [
                {
                    fromDateYear: null,
                    fromDateMonth: null,
                    toDateYear: null,
                    toDateMonth: null,
                    companyName: null,
                    position: null,
                    city: null,
                    text: null,
                }
            ],
        };
    },
};

// actions
export const actions = {
    checkResearchErrors({state, commit}, payload = 0) {
        let languageErrors = [];
        let status = payload;
        state.resume.researchs.forEach((item, index) => {
            for (const key in item) {
                if (key !== 'text') {
                    if (item[key] == null || item[key] == "") {
                        languageErrors.push(`${key}-${index}`);
                    }
                }
            }
        });
        commit("Set_ResearchErrors", languageErrors);
    },
    checkLanguageErrors({state, commit}, payload = 0) {
        let languageErrors = [];
        let status = payload;
        state.resume.languages.forEach((item, index) => {
            for (const key in item) {
                if (item[key] == null || item[key] == "") {
                    languageErrors.push(`${key}-${index}`);
                }
            }
        });
        commit("SET_LanguageErrors", languageErrors);
    },
    checkWorkErrors({state, commit}, payload = 0) {
        let languageErrors = [];
        let status = payload;
        state.resume.works.forEach((item, index) => {
            for (const key in item) {
                if (item[key] == null || item[key] == "") {
                    console.log(key)
                    languageErrors.push(`${key}-${index}`);
                }
            }
        });
        commit("Set_WorkErrors", languageErrors);
    },
    checkCourseErrors({state, commit}, payload = 0) {
        let languageErrors = [];
        let status = payload;
        state.resume.courses.forEach((item, index) => {
            for (const key in item) {
                if (item[key] == null || item[key] == "") {
                    console.log(key)
                    languageErrors.push(`${key}-${index}`);
                }
            }
        });
        commit("SET_CourseErrors", languageErrors);
    },
    checkKnowledgeErrors({state, commit}, payload = 0) {
        let languageErrors = [];
        let status = payload;
        state.resume.softwareKnowledges.forEach((item, index) => {
            for (const key in item) {
                if (item[key] == null || item[key] == "") {
                    console.log(key)
                    languageErrors.push(`${key}-${index}`);
                }
            }
        });
        commit("Set_KnowledgeErrors", languageErrors);
    },
    checkEducationRecordErrors({state, commit}, payload = 0) {
        let educationRecordErrors = [];
        let status = payload;
        state.resume.educationRecords.forEach((item, index) => {
            for (const key in item) {
                if (key !== 'text') {
                    if (item[key] == null || item[key] == "") {
                        educationRecordErrors.push(`${key}-${index}`);
                    }
                }

            }
        });
        commit("SET_EducationRecordErrors", educationRecordErrors);
    },
    async getResumes({commit}) {
        const {data} = await this.$axios.get(`v1/user/resumes`);

        commit("SET_Resumes", data.resumes);
    },

    async sendEditRequest(_, payload) {
        const {data} = await this.$axios.post("v1/user/editResume", payload);

        const error = new Error(data.msg);
        throw error;
    },

    async updateResume({state, dispatch, commit}, payload) {
        dispatch("checkError");
        if (state.errors.length != 0) {
            const error = new Error("اطلاعات را کامل وارد کنید");
            throw error;
        }

        const {data} = await this.$axios.post("v1/user/updateResume", {
            ...payload,
            id: state.resumeId,
        });

        if (data.status === 1) commit("Set_Hash", data.transaction_id);
        throw new Error(data.msg);
    },

    async updateResumeExtra({dispatch}, payload) {
        const {data} = await this.$axios.post(
            "v1/user/updateResumeExtra",
            payload
        );

        if (data.status == 1) dispatch("resume/getResumes");
    },

    async updateResumeInformation({state, dispatch}) {
        const {data} = await this.$axios.post("v1/user/updateResumeInformation", {
            resume: state.resume,
            id: state.resumeId,
        });

        const error = new Error(data.msg);
        throw error;
    },


    async resume({commit}) {
        const {data} = await this.$axios.get("v1/user/resume");
        commit("Set_ResumeId", data.resume.id);
        commit("Set_CanFill", !data.hasUniversity);
        commit("Set_HaveUniversity", !data.hasUniversity);
    },


    async removeResume({commit}) {
        commit("Remove_Resume");
    },

    async resumeTemp({commit}) {
        const {data} = await this.$axios.get("v1/resume/temps");

        commit("Set_ResumeTemp", data.data);
    },

    async resumeUploadImage({state, dispatch}, payload) {
        const {data} = await this.$axios.post(
            "v1/user/resume/uploadImage",
            payload
        );

        // dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async addEducationRecord({state, dispatch}, payload) {
        const {data} = await this.$axios.post(
            "v1/user/resume/addEducationRecord",
            {
                ...payload,
                id: state.resumeId,
            }
        );

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async deleteEducationRecord({state, dispatch}, payload) {
        const {data} = await this.$axios.post(
            "v1/user/resume/deleteEducationRecord",
            {
                _id: payload.id,
                id: state.resumeId,
            }
        );

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async addLanguage({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/addLanguage", {
            ...payload,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async deleteLanguage({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/deleteLanguage", {
            _id: payload.id,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async addWork({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/addWork", {
            ...payload,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async deleteWork({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/deleteWork", {
            _id: payload.id,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async addSoftwareKnowledge({state, dispatch}, payload) {
        const {data} = await this.$axios.post(
            "v1/user/resume/addSoftwareKnowledge",
            {
                ...payload,
                id: state.resumeId,
            }
        );

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async deleteSoftwareKnowledge({state, dispatch}, payload) {
        const {data} = await this.$axios.post(
            "v1/user/resume/deleteSoftwareKnowledge",
            {
                _id: payload.id,
                id: state.resumeId,
            }
        );

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async addCourse({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/addCourse", {
            ...payload,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async deleteCourse({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/deleteCourse", {
            _id: payload.id,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async addResearch({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/addResearch", {
            ...payload,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async deleteResearch({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/deleteResearch", {
            _id: payload.id,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async addHobby({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/addHobby", {
            title: payload,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async deleteHobby({state, dispatch}, payload) {
        const {data} = await this.$axios.post("v1/user/resume/deleteHobby", {
            _id: payload.id,
            id: state.resumeId,
        });

        dispatch("resume");
        const error = new Error(data.msg);
        throw error;
    },

    async previewResume({commit}, payload) {
        const {data} = await this.$axios.get(`v1/user/resume/${payload}`);

        commit("Set_PreviewResume", data.resumes);
    },

    checkError({state, commit}) {
        let errors = [];
        const test = [
            "address",
            "birthDate",
            "birthPlace",
            // "color",
            "email",
            "name",
            "family",
            "image",
            "language",
            "phone",
            "theme",
        ];
        for (const key in state.resume) {
            if (test.includes(key)) {
                if (state.resume[key] == null || state.resume[key] == "")
                    if (key != "extraText") errors.push(String(key));
            }
        }
        console.log(errors)
        commit("SET_Errors", errors);
    },

    removeFromError({state, commit}, payload) {
        const newErrors = state.errors.filter((item) => item != payload);

        commit("SET_Errors", newErrors);
    },
};
