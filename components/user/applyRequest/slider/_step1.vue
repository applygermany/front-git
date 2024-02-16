<template>
    <div class="first current">
        <div class="img">
            <img src="@/assets/user/images/apply-request/picture-1.jpg" alt=""/>
            <div class="counter-name">
                <span class="name title-font">اطلاعــــــات شخصــــــــی</span>
            </div>
        </div>
        <div class="form">
            <form>
                <div class="row">
                    <div class="form-group w-50">
                        <input
                                v-model="data.firstname"
                                placeholder=" "
                                id="firstname"
                                @keyup="checkPrLang"
                                :class="{
                'error-input':
                  errors.includes('firstname') ||
                  errorsPr.includes('firstname-pr'),
              }"
                                @focus="removeFromError('firstname')"
                                @change="checkErrors"
                        />
                        <label class="floating">نام (فارسی)</label>
                        <div v-if="errors.includes('firstname')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                        <div v-else-if="errorsPr.includes('firstname-pr')" class="error">
                            نام را به فارسی وارد کنید
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <input
                                v-model="data.lastname"
                                placeholder=" "
                                id="lastname"
                                @keyup="checkPrLang"
                                :class="{
                'error-input':
                  errors.includes('lastname') ||
                  errorsPr.includes('lastname-pr'),
              }"
                                @focus="removeFromError('lastname')"
                                @change="checkErrors"
                        />
                        <label class="floating">نام خانوادگی (فارسی)</label>
                        <div v-if="errors.includes('lastname')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                        <div v-else-if="errorsPr.includes('lastname-pr')" class="error">
                            نام خانوادگی را به فارسی وارد کنید
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <input
                                v-model="data.phone"
                                placeholder=" "
                                type="number"
                                :class="{ 'error-input': errors.includes('phone') }"
                                @focus="removeFromError('phone')"
                                @change="checkErrors"
                        />
                        <label class="floating">شماره تماس</label>
                        <div v-if="errors.includes('phone')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <input
                                v-model="data.email"
                                placeholder=" "
                                :class="{ 'error-input': errors.includes('email') }"
                                @focus="removeFromError('email')"
                                @change="checkErrors"
                        />
                        <label class="floating">آدرس ایمیل</label>
                        <div v-if="errors.includes('email')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                        <div v-if="errors.includes('invalid-email')" class="error">
                           ایمیل معتبر نمی باشد
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <input
                                v-model="data.birth_date"
                                placeholder=" "
                                :class="{ 'error-input': errors.includes('birth_date') }"
                                @focus="removeFromError('birth_date')"
                                @change="checkErrors"
                        />
                        <label class="floating">تاریخ تولد</label>
                        <div v-if="errors.includes('birth_date')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <input
                                v-model="data.mellicode"
                                placeholder=" "
                                type="number"
                                :class="{ 'error-input': errors.includes('mellicode') }"
                                @focus="removeFromError('mellicode')"
                                @change="checkErrors"
                        />
                        <label class="floating">کد ملی</label>
                        <div v-if="errors.includes('mellicode')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <input
                                v-model="data.fatherName"
                                placeholder=" "
                                :class="{ 'error-input': errors.includes('fatherName') }"
                                @focus="removeFromError('fatherName')"
                                @change="checkErrors"
                        />
                        <label class="floating">نام پدر</label>
                        <div v-if="errors.includes('fatherName')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <input
                                v-model="data.city"
                                placeholder=" "
                                :class="{ 'error-input': errors.includes('city') }"
                                @focus="removeFromError('city')"
                                @change="checkErrors"
                        />
                        <label class="floating">شهر محل سکونت</label>
                        <div v-if="errors.includes('city')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-100">
                        <input
                                v-model="data.address"
                                placeholder=" "
                                :class="{ 'error-input': errors.includes('address') }"
                                @focus="removeFromError('address')"
                                @change="checkErrors"
                        />
                        <label class="floating">آدرس دقیق محل سکونت</label>
                        <div v-if="errors.includes('address')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                </div>
                <div class="submit-return">
                    <a class="submit" @click="checkAllError" v-if="errorsBtn.length > 0">
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
                    <a class="submit" @click="submitStep1" uk-slider-item="next" v-else>
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
            errors: [],
            errorsBtn: [],
            errorsPr: [],
            data: {
                firstname: null,
                lastname: null,
                phone: null,
                birth_date: null,
                mellicode: null,
                city: null,
                address: null,
                fatherName: null,
                email: null,
            },
        };
    },
    async created() {
        const {data} = await this.$axios.get(`v1/user/acceptance`);
        this.data = {
            firstname: data.acceptance.firstname,
            lastname: data.acceptance.lastname,
            phone: data.acceptance.phone,
            birth_date: data.acceptance.birth_date,
            mellicode: data.acceptance.mellicode,
            city: data.acceptance.city,
            address: data.acceptance.address,
            fatherName: data.acceptance.fatherName,
            email: data.acceptance.email,
        };
        this.checkErrors();
    },
    methods: {
        checkAllError() {
            this.errors = [];

            for (const key in this.data) {
                if (this.data[key] == null || this.data[key] == "") {
                    if (key === "email" && this.data[key] !== "") {
                        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.data[key])) {
                            this.errors.push('invalid-email');
                        }
                    } else {
                        this.errors.push(String(key));
                    }
                }
            }
        },
        showDate() {
            this.showDatePicker = false;
            setTimeout(() => {
                this.showDatePicker = true
            }, 250)
        },
        async submitStep1() {
            this.checkAllError();
            if (this.errors.length > 0) return false;

            this.submitting = true;
            const submitStep1 = await this.$axios.post(
                "v1/user/submitStep1",
                this.data
            );
            if (submitStep1.data.status === 1) {
                // this.$toasted.success(submitStep1.data.msg, {
                //   position: "bottom-left",
                //   duration: 5000,
                // });

                const {data} = await this.$axios.get(`v1/user/acceptance`);

                this.$store.commit("applyRequest/SET_Acceptance", data.acceptance);
            } else {
                this.$toasted.error(submitStep1.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
            this.submitting = false;
        },
        checkPrLang(event) {
            if (event.target.value == "") return true;
            let check = /^[\u0600-\u06FF\s]+$/.test(
                event.target.value.replace(/\s/g, "")
            );

            let id = event.target.getAttribute("id") + "-pr";

            if (!check) {
                event.preventDefault();
                event.target.value = event.target.value.slice(0, -1);
                this.errorsPr.push(id);
            } else {
                this.errorsPr = this.errorsPr.filter((item) => item != id);
            }
        },
        removeFromError(name) {
            const newErrors = this.errors.filter((item) => item != name);
            this.errors = newErrors;
            return true;
        },
        checkErrors() {
            this.errorsBtn = [...this.errorsPr];

            for (const key in this.data) {
                if (this.data[key] == null || this.data[key] == "")
                    this.errorsBtn.push(String(key));
            }
        },
    },
};
</script>

<style>
.error {
    font-size: 14px;
    padding-top: 5px;
    font-weight: 600;
    color: red;
}

.vpd-month-label {
    width: 120px !important;
}

.vpd-controls,
.vpd-day-text {
    color: black !important;
}

.vpd-day:hover .vpd-day-text,
.vpd-selected .vpd-day-text {
    color: #fff !important;
}
</style>
