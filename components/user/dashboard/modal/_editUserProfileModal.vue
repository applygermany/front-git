<template>
    <div class="edit-user-profile-modal" id="edit-user-profile-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>پروفایل</p>
                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
            <div class="text">
                <div class="top">
                    <div class="img">
                        <img :src="imagePreview.url" v-if="imagePreview !== null"/>
                        <img :src="user.image" v-else-if="user.image !== false  && user.hasImage"/>

                        <img alt="" src="/user_light.svg" v-else-if="user.darkmode !== 1"/>
                        <img alt="" src="/user_dark.svg" v-else/>
                        <div class="js-upload">
                            <input
                                    @change="uploadImage"
                                    ref="image"
                                    style="display: none"
                                    type="file"
                            />
                            <button @click="$refs.image.click()" tabindex="-1" type="button">
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
                            </button>
                        </div>
                    </div>
                    <p class="level" v-if="$auth.user.type === 2">
            <span>
              <svg
                      height="11.891"
                      viewBox="0 0 12.675 11.891"
                      width="12.675"
                      xmlns="http://www.w3.org/2000/svg"
              >
                <path
                        d="M-16177.187-20535.531a.634.634,0,0,1-.643-.631.633.633,0,0,1,.643-.623h9.494a.635.635,0,0,1,.643.623.637.637,0,0,1-.643.631Zm-.059-2.213a.674.674,0,0,1-.672-.551l-.986-5.584a.667.667,0,0,1,.262-.643.689.689,0,0,1,.707-.064l3.148,1.754,1.619-4.273a.715.715,0,0,1,1.188,0l1.615,4.273,3.148-1.754a.681.681,0,0,1,.7.064.658.658,0,0,1,.266.643l-.986,5.584a.674.674,0,0,1-.668.551Z"
                        fill="#fff"
                        id="Crown"
                        transform="translate(16178.913 20547.422)"
                />
              </svg>
            </span>
                        سطح کاربری ویژه
                    </p>
                    <p class="level" v-else>
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <circle
                                    cx="12"
                                    cy="8"
                                    r="3.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></circle>
                            <path
                                    d="M6.8475 19.25H17.1525C18.2944 19.25 19.174 18.2681 18.6408 17.2584C17.8563 15.7731 16.068 14 12 14C7.93201 14 6.14367 15.7731 5.35924 17.2584C4.82597 18.2681 5.70558 19.25 6.8475 19.25Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        سطح کاربری عادی
                    </p>
                    <p class="date" v-if="acceptance !== null">
                        تاریخ اخذ پذیرش:
                        <template v-if="acceptance.lastFormSubmit === 1">
                            {{ acceptance.date }}
                        </template>
                        <template v-else> نامشخص</template>
                    </p>
                    <!--          <div class="socials">-->
                    <!--            <a>-->
                    <!--              <span class="latin-font">Instagram</span>-->
                    <!--              <svg-->
                    <!--                xmlns="http://www.w3.org/2000/svg"-->
                    <!--                width="23.999"-->
                    <!--                height="24"-->
                    <!--                viewBox="0 0 23.999 24"-->
                    <!--                class="uk-svg"-->
                    <!--              >-->
                    <!--                <defs></defs>-->
                    <!--                <path-->
                    <!--                  class="a"-->
                    <!--                  d="M12.236,24H12c-1.881,0-3.619-.043-5.31-.146A7.1,7.1,0,0,1,2.6,22.306,6.567,6.567,0,0,1,.39,18.743a15.787,15.787,0,0,1-.362-3.77C.015,14.1,0,13.059,0,12s.015-2.1.027-2.975A15.789,15.789,0,0,1,.39,5.259,6.567,6.567,0,0,1,2.6,1.7,7.1,7.1,0,0,1,6.688.148C8.378.045,10.117,0,12,0s3.619.043,5.31.146A7.1,7.1,0,0,1,21.4,1.7,6.566,6.566,0,0,1,23.61,5.259a15.788,15.788,0,0,1,.362,3.77c.012.876.025,1.914.027,2.97v0c0,1.056-.015,2.094-.027,2.97a15.78,15.78,0,0,1-.362,3.77A6.566,6.566,0,0,1,21.4,22.306a7.1,7.1,0,0,1-4.091,1.549c-1.619.1-3.282.146-5.075.146ZM12,22.126c1.851,0,3.55-.042,5.2-.143a5.165,5.165,0,0,0,3.02-1.13,4.734,4.734,0,0,0,1.575-2.573,14.363,14.363,0,0,0,.3-3.332c.012-.87.024-1.9.027-2.947s-.015-2.076-.027-2.947a14.365,14.365,0,0,0-.3-3.332,4.734,4.734,0,0,0-1.575-2.573,5.166,5.166,0,0,0-3.02-1.13c-1.651-.1-3.35-.147-5.2-.143s-3.55.042-5.2.143a5.166,5.166,0,0,0-3.02,1.13A4.734,4.734,0,0,0,2.206,5.723a14.365,14.365,0,0,0-.3,3.332c-.012.871-.024,1.9-.027,2.949s.015,2.073.027,2.945a14.363,14.363,0,0,0,.3,3.332,4.734,4.734,0,0,0,1.575,2.573,5.166,5.166,0,0,0,3.02,1.13C8.452,22.084,10.152,22.131,12,22.126Zm-.045-4.265A5.859,5.859,0,1,1,17.812,12,5.866,5.866,0,0,1,11.953,17.861Zm0-9.844A3.984,3.984,0,1,0,15.937,12,3.989,3.989,0,0,0,11.953,8.017Zm6.516-3.75a1.406,1.406,0,1,0,1.406,1.406A1.406,1.406,0,0,0,18.468,4.267Zm0,0"-->
                    <!--                  transform="translate(0 -0.001)"-->
                    <!--                ></path>-->
                    <!--              </svg>-->
                    <!--            </a>-->
                    <!--            <a>-->
                    <!--              <span class="latin-font">Telegram</span>-->
                    <!--              <svg-->
                    <!--                xmlns="http://www.w3.org/2000/svg"-->
                    <!--                width="26"-->
                    <!--                height="26"-->
                    <!--                viewBox="0 0 26 26"-->
                    <!--                class="uk-svg"-->
                    <!--              >-->
                    <!--                <defs></defs>-->
                    <!--                <path-->
                    <!--                  class="a"-->
                    <!--                  d="M-13371.567-16449.566a13.015,13.015,0,0,1,13-13,13.018,13.018,0,0,1,13,13,13.014,13.014,0,0,1-13,13A13.012,13.012,0,0,1-13371.567-16449.566Zm2,0a11.013,11.013,0,0,0,11,11,11.016,11.016,0,0,0,11-11,11.016,11.016,0,0,0-11-11A11.012,11.012,0,0,0-13369.567-16449.566Zm11.131,6.146-1.446-4.334-4.33-1.445a1,1,0,0,1-.686-.945,1,1,0,0,1,.686-.951l9.61-3.205a1,1,0,0,1,1.024.242,1.013,1.013,0,0,1,.244,1.025l-3.206,9.613a1,1,0,0,1-.951.682A.992.992,0,0,1-13358.437-16443.42Zm-2.3-6.725,1.963.652a1,1,0,0,1,.632.633l.652,1.961,1.624-4.871Z"-->
                    <!--                  transform="translate(13371.567 16462.568)"-->
                    <!--                ></path>-->
                    <!--              </svg>-->
                    <!--            </a>-->
                    <!--          </div>-->
                </div>
                <div class="form">
                    <form>
                        <div class="row">
                            <div class="form-group w-30">
                                <input
                                        :class="{ 'error-input': errors.includes('firstname') }"
                                        :value="profile.firstname"
                                        @change="changeFirstName($event.target.value)"
                                        @focus="removeFromError('firstname')"
                                        @keyup="checkPrLang"
                                        placeholder=" "
                                        type="text"
                                />
                                <label class="floating">نام (فارسی)</label>
                            </div>
                            <div class="form-group w-30">
                                <input
                                        :class="{ 'error-input': errors.includes('lastname') }"
                                        :value="profile.lastname"
                                        @change="changeLastName($event.target.value)"
                                        @focus="removeFromError('lastname')"
                                        @keyup="checkPrLang"
                                        placeholder=" "
                                        type="text"
                                />
                                <label class="floating">نام خانوادگی (فارسی)</label>
                            </div>
                            <div class="form-group w-30">
                                <client-only>
                                    <input
                                            :class="{ 'error-input': errors.includes('birthDate') }"
                                            @focus="removeFromError('birthDate')"
                                            id="birthDate"
                                            placeholder=" "
                                            type="text"
                                    />
                                    <date-picker
                                            :value="$auth.user.birthDateGregorian"
                                            @input="changeBirthDate($event)"
                                            color="#e2ad42"
                                            custom-input="#birthDate"
                                            display-format="jDD jMMMM jYYYY"
                                            format="YYYY-MM-DD"
                                    />
                                </client-only>
                                <label class="floating">تاریخ تولد</label>
                            </div>
                            <div class="form-group w-30">
                                <input
                                        :class="{ 'error-input': errors.includes('firstnameEn') }"
                                        :value="profile.firstnameEn"
                                        @change="changeFirstNameEn($event.target.value)"
                                        @focus="removeFromError('firstnameEn')"
                                        @keyup="checkEnLang"
                                        placeholder=" "
                                        type="text"
                                />
                                <label class="floating">نام (انگلیسی)</label>
                            </div>
                            <div class="form-group w-30">
                                <input
                                        :class="{ 'error-input': errors.includes('lastnameEn') }"
                                        :value="profile.lastnameEn"
                                        @change="changeLastNameEn($event.target.value)"
                                        @focus="removeFromError('lastnameEn')"
                                        @keyup="checkEnLang"
                                        placeholder=" "
                                        type="text"
                                />
                                <label class="floating">نام خانوادگی (انگلیسی)</label>
                            </div>
                            <div class="form-group w-30">
                                <input
                                        :class="{ 'error-input': errors.includes('codemelli') }"
                                        :value="profile.codemelli"
                                        @change="changeCodeMelli($event.target.value)"
                                        @focus="removeFromError('codemelli')"
                                        placeholder=" "
                                        type="number"
                                />
                                <label class="floating">کد ملی</label>
                            </div>
                        </div>
                    </form>
                    <div class="infos">
                        <div class="item">
                            <span>موبایل</span>
                            <div>
                                <p>{{ $auth.user.mobile }}</p>
                                <a href="#change-phone-modal" uk-toggle>
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
                            <span>ایمیل</span>
                            <div>
                                <p class="latin-font">{{ $auth.user.email }}</p>
                                <a href="#change-email-modal" uk-toggle>
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
                            <span>تغیر رمز عبور</span>
                            <div>
                                <p>********</p>
                                <a href="#change-password-modal" uk-toggle>
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
                        <button @click="updateProfile" class="update-btn" type="button">
                            بروزرسانی
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["acceptance", "imagePreview", "user"],
        data() {
            return {
                updatingProfile: false,
                errors: [],
                imagePreview: null,
            };
        },
        mounted() {
            this.imagePreview = this.imagePreview;
            console.log('this.user: ', this.user)
        },
        computed: {

            profile() {
                return this.$store.getters["user/profile"];
            },
        },
        methods: {
            changeFirstName(value) {
                this.$store.commit("user/changeFirstName", value);
            },
            changeLastName(value) {
                this.$store.commit("user/changeLastName", value);
            },
            changeFirstNameEn(value) {
                this.$store.commit("user/changeFirstNameEn", value);
            },
            changeLastNameEn(value) {
                this.$store.commit("user/changeLastNameEn", value);
            },
            changeCodeMelli(value) {
                this.$store.commit("user/changeCodeMelli", value);
            },
            changeBirthDate(value) {
                this.$store.commit("user/changeBirthDate", value);
            },
            checkEnLang(event) {
                this.$nextTick(() => {
                    if (event.target.value == "") return true;
                    let check = /^[a-zA-Z]+$/.test(event.target.value.replace(/\s/g, ""));

                    if (!check) {
                        event.preventDefault();
                        event.target.value = event.target.value.slice(0, -1);
                    }
                });
            },
            checkPrLang(event) {
                if (event.target.value == "") return true;
                let check = /^[\u0600-\u06FF\s]+$/.test(
                    event.target.value.replace(/\s/g, "")
                );

                if (!check) {
                    event.preventDefault();
                    event.target.value = event.target.value.slice(0, -1);
                }
            },
            removeFromError(name) {
                this.errors = this.errors.filter((item) => item != name);
                return true;
            },
            async uploadImage(e) {
                const file = e.target.files[0];

                this.imagePreview = {
                    url: URL.createObjectURL(file),
                    file: file,
                };
                // this.$store.dispatch("user/dashboard");

            },
            async updateProfile() {
                this.updatingProfile = true;
                if (this.imagePreview) {
                    try {
                        const fd = new FormData();
                        fd.append("image", this.imagePreview.file);
                        await this.$store.dispatch("user/uploadImage", fd);
                    } catch (err) {
                        if (err.message.includes("ارسال")) {
                            this.$toasted.success(err.message, {
                                position: "bottom-left",
                                duration: 5000,
                            });
                            this.imagePreview = {
                                url: URL.createObjectURL(this.imagePreview.file),
                                file: this.imagePreview.file,
                            };
                            this.$store.dispatch("user/dashboard");
                        } else {
                            this.$toasted.error(err.message, {
                                position: "bottom-left",
                                duration: 5000,
                            });
                            return;
                        }
                    }
                }
                try {
                    await this.$store.dispatch("user/updateProfile", this.profile);
                } catch (err) {
                    if (err.message.includes("بروزرسانی")) {
                        this.$toasted.success(err.message, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                        this.$auth.fetchUser()
                        this.$store.dispatch("user/dashboard");
                    } else {
                        this.$toasted.error(err.message, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                    }
                }
                this.updatingProfile = false;
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "~/assets/user/scss/_mixins.scss";

    .update-btn {
        outline: none;
        border: none;
        cursor: pointer;
        transition: all 0.3s;
        padding: 1.3rem;
        border-radius: 5px;
        width: calc(50% - 1rem);
        background-color: var(--inner-background-color);
        font-size: 0.8rem;
        color: var(--black);

        &:hover {
            background-color: var(--light-main-color);
            color: #2b2827;
        }
    }

    .edit-user-profile-modal {
        .uk-modal-body {
            width: 800px;
            padding: 0 !important;
            background-color: var(--white);
            border-radius: 8px;

            .title {
                @include fbx-ai-center-jc-between;
                background-color: var(--inner-background-color);
                padding: 1rem 1.5rem;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;

                button {
                    position: inherit;

                    &:hover {
                        svg {
                            color: var(--red);
                        }
                    }
                }

                p {
                    font-size: 1rem;
                    font-weight: bold;
                    color: var(--black);
                }
            }

            .text {
                padding: 1.5rem;

                .top {
                    @include fbx-ai-center-jc-start;

                    .img {
                        margin-left: 1.5rem;
                        position: relative;

                        img {
                            width: 3.5rem;
                            height: 3.5rem;
                            border-radius: 50%;
                            object-fit: cover;
                        }

                        .js-upload {
                            position: absolute;
                            right: 0;
                            bottom: -0.25rem;

                            button {
                                background-color: var(--main-color);
                                border: 0;
                                padding: 0;
                                border-radius: 50%;

                                svg {
                                    fill: none;
                                    color: var(--white);
                                    width: 1.25rem;
                                }
                            }
                        }
                    }

                    .level {
                        margin-left: 2rem;
                        color: var(--main-color);
                        font-size: 0.9rem;
                        font-weight: 600;
                        @include fbx-ai-center-jc-start;

                        span {
                            margin-left: 0.25rem;
                            width: 1.5rem;
                            height: 1.5rem;
                            border-radius: 50%;
                            @include fbx-ai-center-jc-center;
                            background-color: var(--main-color);
                        }
                    }

                    .date {
                        font-size: 0.9rem;
                        color: var(--black);
                        font-weight: 600;
                    }

                    .socials {
                        margin-right: auto;
                        @include fbx-ai-start-jc-start;

                        a {
                            @include fbx-ai-center-jc-center;
                            padding: 0.5rem 1rem;
                            margin-right: 1rem;
                            border-radius: 5px;
                            background-color: var(--inner-background-color);
                            transition: all 0.3s;

                            span {
                                font-size: 0.9rem;
                                font-weight: 500;
                                color: var(--black);
                            }

                            svg {
                                margin-right: 0.5rem;
                                width: 1.25rem;
                                color: #e2ad42;
                            }

                            &:hover {
                                background-color: var(--light-main-color);
                            }
                        }
                    }
                }

                .form {
                    margin-top: 1.5rem;

                    form {
                        .row {
                            @include fbx-ai-start-jc-between;
                            flex-wrap: wrap;

                            .form-group {
                                margin-bottom: 1rem;
                                position: relative;

                                input,
                                textarea {
                                    font-size: 0.9rem;
                                    font-weight: 600;
                                    border: 1px solid var(--gray);
                                    border-radius: 5px;
                                    width: calc(99.7% - 1.5rem);
                                    padding: 0.75rem;
                                    color: var(--black);
                                    transition: all 0.3s;
                                    background-color: var(--white);

                                    &::placeholder {
                                        font-family: iransansx;
                                        font-size: 0.8rem;
                                        color: var(--main-color);
                                        direction: rtl;
                                        text-align: right;
                                        font-weight: 300;
                                        transition: 0.2s ease-in;
                                    }

                                    &:focus {
                                        outline: 0;
                                        border-color: var(--main-color);
                                    }

                                    &.latin-font {
                                        direction: ltr;
                                        text-align: left;
                                    }
                                }

                                input:focus,
                                select:focus {
                                    outline-color: var(--main-color);
                                }

                                .floating {
                                    top: 0.75rem;
                                    right: 5%;
                                    position: absolute;
                                    pointer-events: none;
                                    transition: 0.2s ease all;
                                    background-color: var(--white);
                                    color: var(--text-gray);
                                    font-size: 0.8rem;
                                    font-weight: 300;
                                }

                                .error {
                                    font-size: 0.8rem;
                                    margin-top: 0.5rem;
                                    color: red;
                                }

                                input:focus ~ label,
                                input:not(:placeholder-shown) ~ label {
                                    top: -21%;
                                    padding: 0 0.5rem;
                                }
                            }
                        }
                    }

                    .infos {
                        margin-top: 0.5rem;
                        @include fbx-ai-start-jc-between;
                        flex-wrap: wrap;

                        .item {
                            @include fbx-ai-center-jc-between;
                            border: 1px solid var(--gray);
                            padding: 1rem;
                            border-radius: 5px;
                            width: calc(47.7% - 2rem);
                            margin-bottom: 1rem;

                            span {
                                font-weight: 500;
                                font-size: 0.8rem;
                                color: var(--black);
                            }

                            > div {
                                @include fbx-ai-center-jc-start;

                                p {
                                    font-size: 0.9rem;
                                    color: var(--text-gray);
                                    margin-left: 0.5rem;
                                    margin-top: 0.25rem;
                                }

                                a {
                                    svg {
                                        fill: none;
                                        color: var(--text-gray);
                                        transition: all 0.3s;
                                    }

                                    &:hover {
                                        svg {
                                            color: var(--black);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    @include mobile-device {
        .edit-user-profile-modal {
            .uk-modal-body {
                .title {
                    padding: 0.75rem 1.25rem;

                    p {
                        font-size: 0.9rem;
                    }
                }

                .text {
                    padding: 1rem;

                    .top {
                        flex-wrap: wrap;

                        .img {
                            margin-left: 0.5rem;

                            img {
                                width: 2.5rem;
                                height: 2.5rem;
                            }
                        }

                        .level {
                            margin-left: 0.5rem;
                            font-size: 0.75rem;

                            span {
                                width: 1.25rem;
                                height: 1.25rem;
                            }
                        }

                        .date {
                            font-size: 0.75rem;
                        }

                        .socials {
                            margin-top: 1rem;

                            a {
                                padding: 0.5rem 0.75rem;

                                span {
                                    font-size: 0.75rem;
                                }

                                svg {
                                    width: 1rem;
                                }
                            }
                        }
                    }

                    .form {
                        form {
                            .row {
                                .form-group {
                                    width: 100% !important;

                                    input,
                                    textarea {
                                        font-size: 0.75rem;
                                        width: calc(99.7% - 1rem);
                                        padding: 0.5rem;

                                        &::placeholder {
                                            font-size: 0.75rem;
                                        }
                                    }

                                    .floating {
                                        top: 0.5rem;
                                        font-size: 0.75rem;
                                    }

                                    .error {
                                        font-size: 0.75rem;
                                    }
                                }
                            }
                        }

                        .infos {
                            margin-top: 0.5rem;
                            @include fbx-ai-start-jc-between;
                            flex-wrap: wrap;

                            .item {
                                padding: 0.5rem;
                                width: calc(100% - 1rem);

                                span {
                                    font-size: 0.75rem;
                                }

                                > div {
                                    p {
                                        font-size: 0.8rem;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
