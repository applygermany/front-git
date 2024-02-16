<template>
    <div id="edit-user-profile" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div
                    class="profile"
                    v-bind:style="[
          panel === 1 ? { display: 'block' } : { display: 'none' },
        ]"
            >
                <div class="img-name">
                    <button
                            class="uk-modal-close-default"
                            style="right: unset; left: 10px"
                            type="button"
                            uk-close
                    ></button>
                    <div class="img">
                        <img :src="imagePreview" v-if="imagePreview !== null"/>
                        <img :src="user.image" v-else-if="user.image !== false  && user.hasImage"/>

                        <img alt="" src="/user_light.svg" v-else-if="!darkMode"/>
                        <img alt="" src="/user_dark.svg" v-else/>
                        <input
                                @change="uploadImage"
                                ref="image"
                                style="display: none"
                                type="file"
                        />
                        <a @click="$refs.image.click()">
                            <svg
                                    class="uk-svg uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H16.9167C16.513 7.75 16.1489 7.50726 15.9936 7.13462L15.2564 5.36538C15.1011 4.99274 14.737 4.75 14.3333 4.75H9.66667C9.26297 4.75 8.89886 4.99274 8.74359 5.36538L8.00641 7.13462C7.85114 7.50726 7.48703 7.75 7.08333 7.75H6.75C5.64543 7.75 4.75 8.64543 4.75 9.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                ></path>
                                <path
                                        d="M15.25 13C15.25 14.7949 13.7949 16.25 12 16.25C10.2051 16.25 8.75 14.7949 8.75 13C8.75 11.2051 10.2051 9.75 12 9.75C13.7949 9.75 15.25 11.2051 15.25 13Z"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                    </div>
                    <div class="name">
                        <p>{{ $auth.user.firstname }} {{ $auth.user.lastname }}</p>
                        <div class="rate">
                            <client-only
                            ><star-rating
                                    :rating="score"
                                    :star-size="20"
                                    :increment="0.5"
                                    :rtl="true"
                                    :padding="0"
                                    :read-only="true"
                                    :show-rating="false"
                            />
                            </client-only>
                        </div>
                    </div>
                </div>
                <div class="infos">
                    <div class="item">
                        <span>ایمیل</span>
                        <div>
                            <p class="latin-font">{{ $auth.user.email }}</p>
                            <a @click="panel = 3">
                                <svg
                                        class="uk-svg uk-svg"
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                            d="M4.75 19.25L9 18.25L18.2929 8.95708C18.6834 8.56655 18.6834 7.93339 18.2929 7.54286L16.4571 5.70708C16.0666 5.31655 15.4334 5.31655 15.0429 5.70708L5.75 15L4.75 19.25Z"
                                            stroke="#141414"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                    ></path>
                                    <path
                                            d="M19.25 19.25H13.75"
                                            stroke="#141414"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="item">
                        <span>شماره تماس</span>
                        <div>
                            <p>{{ $auth.user.mobile }}</p>
                            <a @click="panel = 4">
                                <svg
                                        class="uk-svg uk-svg"
                                        fill="none"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                            d="M4.75 19.25L9 18.25L18.2929 8.95708C18.6834 8.56655 18.6834 7.93339 18.2929 7.54286L16.4571 5.70708C16.0666 5.31655 15.4334 5.31655 15.0429 5.70708L5.75 15L4.75 19.25Z"
                                            stroke="#141414"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                    ></path>
                                    <path
                                            d="M19.25 19.25H13.75"
                                            stroke="#141414"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="1.5"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="item forget-password">
                        <a @click="panel = 2">تغییر رمز عبور</a>
                    </div>
                </div>
            </div>
            <div
                    class="change-password"
                    v-bind:style="[
          panel === 2 ? { display: 'block' } : { display: 'none' },
        ]"
            >
                <div class="title">
                    <div>
                        <a @click="panel = 1">
                            <svg
                                    class="uk-svg uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                        <h3>تغییر رمز عبور</h3>
                    </div>
                </div>
                <div class="form">
                    <form>
                        <div class="form-group">
                            <input
                                    placeholder="رمز عبور فعلی"
                                    type="password"
                                    v-model="changePasswordForm.oldPassword"
                            />
                            <div class="error" v-if="errors.oldPassword">
                                {{ errors.oldPassword[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <input
                                    placeholder="رمز عبور جدید"
                                    type="password"
                                    v-model="changePasswordForm.newPassword"
                            />
                            <div class="error" v-if="errors.newPassword">
                                {{ errors.newPassword[0] }}
                            </div>
                        </div>
                        <div class="form-group">
                            <input
                                    placeholder="تکرار رمز عبور جدید"
                                    type="password"
                                    v-model="changePasswordForm.newPassword_confirmation"
                            />
                        </div>
                        <div class="submit">
                            <button
                                    @click="updatePassword"
                                    type="button"
                                    v-if="updatingPassword === false"
                            >
                                تایید
                            </button>
                            <button type="button" v-else>چند لحظه صبر کنید</button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                    class="change-email"
                    v-bind:style="[
          panel === 3 ? { display: 'block' } : { display: 'none' },
        ]"
            >
                <div class="title">
                    <div>
                        <a @click="panel = 1">
                            <svg
                                    class="uk-svg uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                        <h3>تغییر ایمیل</h3>
                    </div>
                    <p>
                        لطفا توجه داشته باشید که پس از تغییر ایمیــل فعلی، مجددا نیـاز به
                        تایید ایمیل جدید دارید
                    </p>
                </div>
                <div class="form">
                    <form>
                        <div class="form-group">
                            <input placeholder="ایمیل جدید" v-model="newEmail"/>
                        </div>
                        <div class="submit">
                            <button
                                    @click="sendCodeToEmail"
                                    type="button"
                                    v-if="updatingEmailMobile === false"
                            >
                                ارسال کد
                            </button>
                            <button type="button" v-else>چند لحظه صبر کنید</button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                    class="change-phone"
                    v-bind:style="[
          panel === 4 ? { display: 'block' } : { display: 'none' },
        ]"
            >
                <div class="title">
                    <div>
                        <a @click="panel = 1">
                            <svg
                                    class="uk-svg uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                        <h3>تغییر شماره</h3>
                    </div>
                    <p>
                        لطفا توجه داشته باشید که پس از تغییـر شمـاره فعلی، مجددا نیـاز به
                        تایید شمـاره جدید دارید
                    </p>
                </div>
                <div class="form">
                    <form>
                        <div class="form-group">
                            <input placeholder="شماره تماس جدید" v-model="newMobile"/>
                        </div>
                        <div class="submit">
                            <button
                                    @click="sendCodeToMobile"
                                    type="button"
                                    v-if="updatingEmailMobile === false"
                            >
                                ارسال کد
                            </button>
                            <button type="button" v-else>چند لحظه صبر کنید</button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                    class="email-code"
                    v-bind:style="[
          panel === 5 ? { display: 'block' } : { display: 'none' },
        ]"
            >
                <div class="title">
                    <div>
                        <a @click="panel = 3">
                            <svg
                                    class="uk-svg uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                        <h3>تغییر ایمیلی</h3>
                    </div>
                    <p>کـد تایید به ایمیل جدیدتان ارسال شد. لطفا آن را وارد کنید</p>
                </div>
                <div class="form">
                    <form>
                        <div class="code">
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num1"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num2"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num3"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num4"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num5"
                            />
                        </div>
                        <div class="email-counter">
                            <div class="email">
                                <p class="latin-font">{{ newEmail }}</p>
                                <a @click="panel = 3">اصلاح ایمیل</a>
                            </div>
                            <div class="counter">
                <span
                        class="uk-countdown-number uk-countdown-seconds"
                        v-if="counter > 0"
                >{{ counter }}</span
                >
                                <span
                                        @click="resendCode"
                                        class="uk-countdown-number uk-countdown-seconds"
                                        v-else
                                >ارسال مجدد کد امنیتی</span
                                >
                            </div>
                        </div>
                        <div class="submit">
                            <button
                                    @click="changeEmailMobileVerify"
                                    type="button"
                                    v-if="verifyingEmailMobile === false"
                            >
                                تایید
                            </button>
                            <button type="button" v-else>چند لحظه صبر کنید</button>
                        </div>
                    </form>
                </div>
            </div>
            <div
                    class="phone-code"
                    v-bind:style="[
          panel === 6 ? { display: 'block' } : { display: 'none' },
        ]"
            >
                <div class="title">
                    <div>
                        <a @click="panel = 4">
                            <svg
                                    class="uk-svg uk-svg"
                                    fill="none"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                        d="M10.75 8.75L14.25 12L10.75 15.25"
                                        stroke="#141414"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                ></path>
                            </svg>
                        </a>
                        <h3>تغییر شماره</h3>
                    </div>
                    <p>کـد تایید به شماره جدیدتان ارسال شد. لطفا آن را وارد کنید</p>
                </div>
                <div class="form">
                    <form>
                        <div class="code">
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num1"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num2"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num3"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num4"
                                    v-on:keyup="$event.target.nextElementSibling.focus()"
                            />
                            <input
                                    @focus="$event.target.select()"
                                    maxlength="1"
                                    type="text"
                                    v-model="num5"
                            />
                        </div>
                        <div class="email-counter">
                            <div class="email">
                                <p>{{ newMobile }}</p>
                                <a @click="panel = 4">اصلاح شماره</a>
                            </div>
                            <div class="counter">
                <span
                        class="uk-countdown-number uk-countdown-seconds"
                        v-if="counter > 0"
                >{{ counter }}</span
                >
                                <span
                                        @click="resendCode"
                                        class="uk-countdown-number uk-countdown-seconds"
                                        v-else
                                >ارسال مجدد کد امنیتی</span
                                >
                            </div>
                        </div>
                        <div class="submit">
                            <button
                                    @click="changeEmailMobileVerify"
                                    type="button"
                                    v-if="verifyingEmailMobile === false"
                            >
                                تایید
                            </button>
                            <button type="button" v-else>چند لحظه صبر کنید</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const avg = arr => arr.reduce((acc,v,i,a)=> ( a ? (acc + v / a.length) : 0),0);
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                imagePreview: null,
                updatingPassword: false,
                updatingEmailMobile: false,
                verifyingEmailMobile: false,
                newEmail: null,
                newMobile: null,
                num1: null,
                num2: null,
                num3: null,
                num4: null,
                num5: null,
                changePasswordForm: {
                    oldPassword: null,
                    newPassword: null,
                    newPassword_confirmation: null,
                },
                counter: 0,
                errors: [],
                panel: 1,
            };
        },
        methods: {
            sendCodeToEmail() {
                this.changeEmailMobile();
            },
            sendCodeToMobile() {
                this.changeEmailMobile();
            },
            uploadImage(e) {
                const fd = new FormData();
                const file = e.target.files[0];
                fd.append("image", file);
                this.$axios.post("v1/expert/uploadImage", fd).then((uploadImage) => {
                    if (uploadImage.data.status === 1) {
                        this.$toasted.success("تصویر با موفقیت آپلود شد", {
                            position: "bottom-left",
                            duration: 5000,
                        });
                        this.$auth.fetchUser();
                         this.imagePreview = URL.createObjectURL(file);
                    } else {
                        this.$toasted.error("خطا در ذخیره تصویر", {
                            position: "bottom-left",
                            duration: 5000,
                        });
                    }
                });
            },

            async updatePassword() {
                this.updatingPassword = true;
                this.errors = [];
                const updatePassword = await this.$axios.post(
                    "v1/expert/updatePassword",
                    this.changePasswordForm
                );
                if (updatePassword.data.status === 1) {
                    this.$toasted.success(updatePassword.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else if (updatePassword.data.status === 422) {
                    this.errors = updatePassword.data.errors;
                    this.$toasted.info(updatePassword.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else {
                    this.$toasted.error(updatePassword.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
                this.updatingPassword = false;
            },
            async changeEmailMobile() {
                this.updatingEmailMobile = true;
                this.errors = [];
                const updateProfile = await this.$axios.post(
                    "v1/expert/changeEmailMobile",
                    {newEmail: this.newEmail, newMobile: this.newMobile}
                );
                if (updateProfile.data.status === 1) {
                    this.counter = 60;
                    this.startCounter();
                    this.$toasted.success(updateProfile.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    if (this.newEmail !== null) this.panel = 5;
                    if (this.newMobile !== null) this.panel = 6;
                } else if (updateProfile.data.status === 422) {
                    this.errors = updateProfile.data.errors;
                    this.$toasted.info(updateProfile.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else {
                    this.$toasted.error(updateProfile.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
                this.updatingEmailMobile = false;
            },
            async changeEmailMobileVerify() {
                this.verifyingEmailMobile = true;
                this.errors = [];
                let code = 0;
                code = this.num1 + this.num2 + this.num3 + this.num4 + this.num5;
                const changeEmailMobileVerify = await this.$axios.post(
                    "v1/expert/changeEmailMobileVerify",
                    {code: code}
                );
                if (changeEmailMobileVerify.data.status === 1) {
                    this.$toasted.success(changeEmailMobileVerify.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    if (this.newEmail !== null) this.panel = 1;
                    if (this.newMobile !== null) this.panel = 1;
                    this.$router.go();
                } else if (changeEmailMobileVerify.data.status === 422) {
                    this.errors = changeEmailMobileVerify.data.errors;
                    this.$toasted.info(changeEmailMobileVerify.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else {
                    this.$toasted.error(changeEmailMobileVerify.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
                this.verifyingEmailMobile = false;
            },
            startCounter() {
                if (this.counter > 0) {
                    if (this.prevInterval) {
                        clearInterval(this.prevInterval);
                    }
                    this.prevInterval = setTimeout(() => {
                        this.counter -= 1;
                        this.startCounter();
                    }, 1000);
                }
            },
            async resendCode() {
                if (this.counter <= 0) {
                    this.resendVerifyCode();
                    this.counter = 60;
                    if (this.prevInterval) {
                        clearInterval(this.prevInterval);
                    }
                    this.prevInterval = setInterval(() => {
                        if (this.counter > 0) this.counter -= 1;
                    }, 1000);
                }
            },
            async resendVerifyCode() {
                let resendCode = await this.$axios.get(
                    "v1/expert/changeEmailMobileResendCode"
                );
                if (resendCode.data.status === 1) {
                    this.$toasted.success(resendCode.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else if (resendCode.data.status === 422) {
                    this.errors = resendCode.data.errors;
                    this.$toasted.info(resendCode.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                } else {
                    this.$toasted.error(resendCode.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
            },

        },
        computed: {
            ...mapGetters({
                user: "user/user",
                acceptance: "user/acceptance",
                userSupervisorFirstTelSupport: "user/userSupervisorFirstTelSupport",
                userSupervisor: "user/userSupervisor",
                userSupport: "user/userSupport",
            }),
            score(){
                let votes = this.$store.getters['chat/votes']

                return votes && votes.length>0 ? avg(votes.map(e => e.score)) : 0;
            },
            darkMode() {
                const updatedUser = {...this.$auth.user};

                //this.darkMode = updatedUser.darkmode === 1;
                return updatedUser.darkmode === 1;
            },
        },
    };
</script>

<style></style>
