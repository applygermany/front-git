<template>
    <div class="first current">
        <div class="img">
            <img src="@/assets/user/images/apply-request/picture-4.jpg" alt=""/>
            <div class="counter-name">
                <span class="name title-font">وضعیـــت زبــــــــــــان</span>
            </div>
        </div>
        <div class="form">
            <form>
                <div class="row">
                    <div class="row-checkbox inline-checkbox w-50">
                        <p>علاقه مند تحصیل به چه زبانی هستید؟</p>
                        <div>
                            <a
                                    class="w-50"
                                    :class="{ active: data.language_favor === 'آلمانی' }"
                                    @click="
                  changeLanguage('آلمانی');
                  removeFromError();
                  checkErrors();
                "
                            >
                                <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                        uk-svg=""
                                        alt=""
                                />
                                <span>آلمانی</span>
                            </a>
                            <a
                                    class="w-50"
                                    :class="{ active: data.language_favor === 'انگلیسی' }"
                                    @click="
                  changeLanguage('انگلیسی');
                  removeFromError();
                  checkErrors();
                "
                            >
                                <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                        uk-svg=""
                                        alt=""
                                />
                                <span>انگلیسی</span>
                            </a>
                        </div>
                    </div>
                    <div
                            class="row-checkbox inline-checkbox w-50"
                            v-if="data.language_favor"
                    >
                        <p>در حال حاضر مدرک زبان خود را گرفته اید؟</p>
                        <div>
                            <a
                                    class="w-50"
                                    :class="{ active: data.license_language === 'بله' }"
                                    @click="
                  changeLicense('بله');
                  removeFromError();
                  checkErrors();
                  errors = [];
                "
                            >
                                <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                        uk-svg=""
                                        alt=""
                                />
                                <span>بله</span>
                            </a>
                            <a
                                    class="w-50"
                                    :class="{ active: data.license_language === 'خیر' }"
                                    @click="
                  changeLicense('خیر');
                  removeFromError();
                  checkErrors();
                  errors = [];
                "
                            >
                                <img
                                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                                        uk-svg=""
                                        alt=""
                                />
                                <span>خیر</span>
                            </a>
                        </div>
                    </div>
                </div>
                <hr/>
                <div class="row">
                    <div class="form-group w-30" v-if="data.license_language === 'بله'">
                        <input
                                v-model="data.what_grade_language"
                                placeholder=" "
                                :class="{ 'error-input': errors.includes('what_grade_language') }"
                                @focus="removeFromError('what_grade_language')"
                                @change="checkErrors"
                        />
                        <label class="floating">چه مدرکی دارید؟</label>
                        <div v-if="errors.includes('what_grade_language')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-30" v-if="data.license_language === 'بله'">
                        <input
                                v-model="data.score_grade_language"
                                placeholder=" "
                                type="text"
                                :class="{
                'error-input': errors.includes('score_grade_language'),
              }"
                                @focus="removeFromError('score_grade_language')"
                                @change="checkErrors"
                        />
                        <label class="floating">نمره زبان</label>
                        <div v-if="errors.includes('score_grade_language')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-30" v-if="data.license_language === 'بله'">
                        <input
                                v-model="data.date_get_grade_language"
                                placeholder=" "
                                type="text"
                                :class="{
                'error-input': errors.includes('date_get_grade_language'),
              }"
                                @focus="removeFromError('date_get_grade_language')"
                                @change="checkErrors"
                        />
                        <label class="floating">تاریخ اخذ مدرک</label>
                        <div
                                v-if="errors.includes('date_get_grade_language')"
                                class="error"
                        >
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50" v-if="data.license_language === 'خیر'">
                        <input
                                v-model="data.what_intent_grade_language"
                                placeholder=" "
                                :class="{
                'error-input': errors.includes('what_intent_grade_language'),
              }"
                                @focus="removeFromError('what_intent_grade_language')"
                                @change="checkErrors"
                        />
                        <label class="floating">قصد گرفتن چه مدرکی دارید؟</label>
                        <div
                                v-if="errors.includes('what_intent_grade_language')"
                                class="error"
                        >
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50" v-if="data.license_language === 'خیر'">
                        <input
                                v-model="data.current_language_status"
                                placeholder=" "
                                :class="{
                'error-input': errors.includes('current_language_status'),
              }"
                                @focus="removeFromError('current_language_status')"
                                @change="checkErrors"
                        />
                        <label class="floating">سطح فعلی زبان</label>
                        <div
                                v-if="errors.includes('current_language_status')"
                                class="error"
                        >
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50" v-if="data.license_language === 'خیر'">
                        <input
                                v-model="data.date_intent_grade_language"
                                placeholder=" "
                                :class="{
                'error-input': errors.includes('date_intent_grade_language'),
              }"
                                @focus="removeFromError('date_intent_grade_language')"
                                @change="checkErrors"
                        />
                        <label class="floating">تاریخ احتمالی اخذ مدرک</label>
                        <div
                                v-if="errors.includes('date_intent_grade_language')"
                                class="error"
                        >
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                </div>
                <div class="submit-return">
                    <a class="return" uk-slider-item="previous"> بازگشت </a>
                    <a class="submit" @click="submitStep4" v-if="errorsBtn.length > 0">
                        <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="uk-svg"
                        >
                            <path
                                    d="M10.25 6.75L4.75 12L10.25 17.25"
                                    stroke="#141414"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            ></path>
                            <path
                                    d="M19.25 12H5"
                                    stroke="#141414"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            ></path>
                        </svg>
                    </a>
                    <a class="submit" @click="submitStep4" uk-slider-item="next" v-else>
                        <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="uk-svg"
                        >
                            <path
                                    d="M10.25 6.75L4.75 12L10.25 17.25"
                                    stroke="#141414"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            ></path>
                            <path
                                    d="M19.25 12H5"
                                    stroke="#141414"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            ></path>
                        </svg>
                    </a>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            submitting: false,
            data: {
                language_favor: null,
                license_language: null,
                score_grade_language: null,
                what_grade_language: null,
                date_get_grade_language: null,
                what_intent_grade_language: null,
                date_intent_grade_language: null,
            },
            errorsBtn: [],
            errors: [],
        };
    },
    async created() {
        const {data} = await this.$axios.get(`v1/user/acceptance`);

        this.data = {
            language_favor: data.acceptance.language_favor,
            license_language: data.acceptance.license_language,
            score_grade_language: data.acceptance.score_grade_language,
            what_grade_language: data.acceptance.what_grade_language,
            date_get_grade_language: data.acceptance.date_get_grade_language,
            what_intent_grade_language: data.acceptance.what_intent_grade_language,
            current_language_status: data.acceptance.current_language_status,
        };

        this.checkErrors();
    },
    methods: {
        async submitStep4() {
            this.errors = [];

            if (
                this.data.language_favor == null ||
                this.data.license_language == null
            )
                return;

            for (const key in this.data) {
                if (this.data[key] == null || this.data[key] == "") {
                    if (
                        this.data.license_language == "بله" &&
                        key != "what_intent_grade_language" &&
                        key != "date_intent_grade_language" &&
                        key != "current_language_status"
                    ) {
                        this.errors.push(String(key));
                    }
                    if (
                        this.data.license_language == "خیر" &&
                        key != "what_grade_language" &&
                        key != "score_grade_language" &&
                        key != "date_get_grade_language"
                    ) {
                        this.errors.push(String(key));
                    }
                }
            }
console.log(this.errors)
            if (this.errors.length > 0) return false;

            this.submitting = true;
            const submitStep4 = await this.$axios.post(
                "v1/user/submitStep4",
                this.data
            );
            if (submitStep4.data.status === 1) {
                // this.$toasted.success(submitStep4.data.msg, {
                //   position: "bottom-left",
                //   duration: 5000,
                // });

                const {data} = await this.$axios.get(`v1/user/acceptance`);

                this.$store.commit("applyRequest/SET_Acceptance", data.acceptance);
            } else if (submitStep4.data.status === 422) {
                this.errors = submitStep4.data.errors;
                this.$toasted.info(submitStep4.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            } else {
                this.$toasted.error(submitStep4.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
            this.submitting = false;
        },
        changeLanguage(status) {
            this.data.language_favor = status;
        },
        changeLicense(status) {
            this.data.license_language = status;
        },
        removeFromError(name) {
            const newErrors = this.errors.filter((item) => item != name);
            this.errors = newErrors;
            return true;
        },
        checkErrors() {
            this.errorsBtn = [];

            if (this.data.language_favor == null) {
                this.errorsBtn.push("test");
                return;
            }
            switch (this.data.license_language) {
                case null:
                    this.errorsBtn.push("test");
                    break;
                case "بله":
                    if (
                        this.data.what_grade_language == null ||
                        this.data.what_grade_language == "" ||
                        this.data.score_grade_language == null ||
                        this.data.score_grade_language == "" ||
                        this.data.date_get_grade_language == null ||
                        this.data.date_get_grade_language == ""
                    ) {
                        this.errorsBtn.push("test");
                    }
                    break;

                case "خیر":
                    if (
                        this.data.what_intent_grade_language == null ||
                        this.data.what_intent_grade_language == "خیر" ||
                        this.data.date_intent_grade_language == null ||
                        this.data.date_intent_grade_language == "خیر"
                    )
                        this.errorsBtn.push("test");
                    break;
            }
        },
    },
};
</script>

<style></style>
