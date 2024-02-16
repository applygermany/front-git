<template>
    <div>
        <div class="profile-expert">
            <div class="profile">
                <h3>پروفایل</h3>
                <div class="body">
                    <div class="top">
                        <div class="img-name">
                            <div class="img">
                                <img :src="imagePreview" v-if="imagePreview !== null"/>
                                <img :src="user.image" v-else-if="user.image !== false  && user.hasImage"/>

                                <img alt="" src="/user_light.svg" v-else-if="!darkMode"/>
                                <img alt="" src="/user_dark.svg" v-else/>
                            </div>
                            <div class="name">
                                <span>{{ user.firstname }} {{ user.lastname }}</span>
                                <p>{{ user.email }}</p>
                            </div>
                        </div>
                        <div class="actions">
                            <a class="call" href="#edit-user-profile-modal" uk-toggle>
                                ویرایش
                            </a>
                        </div>
                    </div>
                    <div class="info">
                        <div class="row">
                            <div class="right">
                                <span>نام لاتین</span>
                                <p
                                        class="latin-font"
                                        style='text-align: center;'
                                        v-if="user.firstnameEn !== null || user.lastnameEn !== null"
                                >
                                    {{ user.firstnameEn }} {{ user.lastnameEn }}
                                </p>
                                <p class="latin-font" v-else>------</p>
                            </div>
                            <div class="middle">
                                <span>شماره همراه</span>
                                <p v-if="user.mobile !== null && user.mobile !== ''">{{ user.mobile }}</p>
                                <p v-else>------</p>
                            </div>
                            <div class="left">
                                <span>تاریخ تولد</span>
                                <p v-if="user.birthDate !== null">{{ user.birthDate }}</p>
                                <p v-else>------</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="right">
                                <span>کد ملی</span>
                                <p v-if="user.codemelli !== null">{{ user.codemelli }}</p>
                                <p v-else>------</p>
                            </div>
                            <div class="middle">
                                <span>وضعیت کاربری</span>
                                <p v-if="user.type === 1">عادی</p>
                                <p v-else>ویژه</p>
                            </div>
                            <div class="left">
                                <span>تاریخ اخذ پذیرش</span>
                                <p v-if="acceptance !== null">
                                    <template v-if="acceptance.lastFormSubmit === 1">
                                        {{ acceptance.date }}
                                    </template>
                                    <template v-else> نامشخص</template>
                                </p>
                                <p v-else>نامشخص</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="expert">
                <h3>کارشناسان</h3>
                <div class="body">
                    <div class="each-expert">
                        <div class="top">
                            <div class="img-name">
                                <div class="img">
                                    <img
                                            :src="userSupervisor.image"
                                            alt=""
                                            v-if="userSupervisor !== null && $auth.user.type !== 1"
                                    />
                                    <img alt="" src="/user_light.svg" v-else-if="!darkMode"/>
                                    <img alt="" src="/user_dark.svg" v-else/>
                                </div>
                                <div class="name">
                                    <span>کارشناس</span>
                                    <p v-if="userSupervisor !== null && $auth.user.type !== 1">
                                        {{ userSupervisor.firstname }}
                                        {{ userSupervisor.lastname }}
                                    </p>
                                    <p v-else>------</p>
                                </div>
                            </div>
                            <div class="actions">
                                <div class="whatsapp">
                                    <span class="latin-font">WhatsApp</span>
                                    <p class="latin-font" v-if="userSupervisor !== null && $auth.user.type !== 1">
                                        <template>------</template>
                                    </p>
                                    <p v-else>------</p>
                                </div>
                                <a
                                        class="message"
                                        href="#"
                                        v-if="userSupervisor == null"
                                >
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"/>
                                    </svg>

                                </a>
                                <a
                                        :href="'/user/telSupports/' + userSupervisor.id"
                                        class="message"
                                        v-else
                                >
                                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"/>
                                    </svg>

                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="each-expert" v-if="userSupport !== null">
                        <div class="top">
                            <div class="img-name">
                                <div class="img">
                                    <img
                                            :src="userSupport.image"
                                            alt=""
                                            v-if="userSupport !== null && $auth.user.type !== 1"
                                    />
                                    <img alt="" src="/user_light.svg" v-else-if="!darkMode"/>
                                    <img alt="" src="/user_dark.svg" v-else/>
                                </div>
                                <div class="name">
                                    <span>پشتیبان</span>
                                    <p v-if="userSupport !== null && $auth.user.type !== 1">
                                        {{ userSupport.firstname }} {{ userSupport.lastname }}
                                    </p>
                                    <p v-else>------</p>
                                </div>
                            </div>
                            <div class="actions">
                                <div class="whatsapp">
                                    <span class="latin-font">WhatsApp</span>
                                    <p class="latin-font" v-if="userSupport !== null && $auth.user.type !== 1">
                                        {{ userSupport.mobile }}
                                    </p>
                                    <p class="latin-font" v-else>------</p>
                                </div>
                                <a class="message" href="#chat-modal-support-alert" uk-toggle
                                   v-if="userSupport == null">
                                    <svg
                                            class="uk-svg"
                                            height="45"
                                            viewBox="0 0 45 45"
                                            width="45"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Icon" transform="translate(-25 -19)">
                                            <g
                                                    data-name="Rectangle 2340"
                                                    fill="#fff"
                                                    id="Rectangle_2340"
                                                    opacity="0"
                                                    stroke="#707070"
                                                    stroke-width="1"
                                                    transform="translate(25 19)"
                                            >
                                                <rect height="45" stroke="none" width="45"></rect>
                                                <rect
                                                        fill="none"
                                                        height="44"
                                                        width="44"
                                                        x="0.5"
                                                        y="0.5"
                                                ></rect>
                                            </g>
                                            <path
                                                    d="M-18072.562-13477.578h-26.869a3.571,3.571,0,0,1-3.566-3.566v-12.391l1.639,1.227v11.164a1.925,1.925,0,0,0,1.928,1.917h26.869a1.922,1.922,0,0,0,1.918-1.917v-11.164l1.646-1.227v12.391A3.57,3.57,0,0,1-18072.562-13477.578Zm-13.436-8.965a3.544,3.544,0,0,1-2.129-.714l-14.871-11.061v-3.115a3.573,3.573,0,0,1,3.566-3.566h26.869a3.571,3.571,0,0,1,3.564,3.566v3.115l-14.869,11.061A3.567,3.567,0,0,1-18086-13486.543Zm-13.434-16.814a1.93,1.93,0,0,0-1.928,1.925v2.287l14.217,10.569a1.9,1.9,0,0,0,1.145.384,1.925,1.925,0,0,0,1.146-.384l14.207-10.569v-2.287a1.927,1.927,0,0,0-1.918-1.925Z"
                                                    data-name="Path 13470"
                                                    fill="#2b2827"
                                                    id="Path_13470"
                                                    transform="translate(18133.498 13532.789)"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                                <a
                                        @click="goToChat(userSupport)"
                                        class="message"
                                        v-else
                                >
                                    <svg
                                            class="uk-svg"
                                            height="45"
                                            viewBox="0 0 45 45"
                                            width="45"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Icon" transform="translate(-25 -19)">
                                            <g
                                                    data-name="Rectangle 2340"
                                                    fill="#fff"
                                                    id="Rectangle_2340"
                                                    opacity="0"
                                                    stroke="#707070"
                                                    stroke-width="1"
                                                    transform="translate(25 19)"
                                            >
                                                <rect height="45" stroke="none" width="45"></rect>
                                                <rect
                                                        fill="none"
                                                        height="44"
                                                        width="44"
                                                        x="0.5"
                                                        y="0.5"
                                                ></rect>
                                            </g>
                                            <path
                                                    d="M-18072.562-13477.578h-26.869a3.571,3.571,0,0,1-3.566-3.566v-12.391l1.639,1.227v11.164a1.925,1.925,0,0,0,1.928,1.917h26.869a1.922,1.922,0,0,0,1.918-1.917v-11.164l1.646-1.227v12.391A3.57,3.57,0,0,1-18072.562-13477.578Zm-13.436-8.965a3.544,3.544,0,0,1-2.129-.714l-14.871-11.061v-3.115a3.573,3.573,0,0,1,3.566-3.566h26.869a3.571,3.571,0,0,1,3.564,3.566v3.115l-14.869,11.061A3.567,3.567,0,0,1-18086-13486.543Zm-13.434-16.814a1.93,1.93,0,0,0-1.928,1.925v2.287l14.217,10.569a1.9,1.9,0,0,0,1.145.384,1.925,1.925,0,0,0,1.146-.384l14.207-10.569v-2.287a1.927,1.927,0,0,0-1.918-1.925Z"
                                                    data-name="Path 13470"
                                                    fill="#2b2827"
                                                    id="Path_13470"
                                                    transform="translate(18133.498 13532.789)"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="text">
                            <p>
                                این پشتیبان تا زمان نهایـی شدن اپلای شما همراهتـان خواهـد بود و
                                شما می‌توانیـد در ساعات کاری با ایشان در ارتباط باشید
                            </p>
                        </div>
                    </div>
                    <div class="each-expert" v-else>
                        <div class="top">
                            <div class="img-name">
                                <div class="img">
                                    <img
                                            :src="userSupervisor.image"
                                            alt=""
                                            v-if="userSupervisor !== null && $auth.user.type !== 1"
                                    />
                                    <img alt="" src="/user_light.svg" v-else-if="!darkMode"/>
                                    <img alt="" src="/user_dark.svg" v-else/>
                                </div>
                                <div class="name">
                                    <span>پشتیبان</span>
                                    <p v-if="userSupervisor !== null && $auth.user.type !== 1">
                                        {{ userSupervisor.firstname }}
                                        {{ userSupervisor.lastname }}
                                    </p>
                                    <p v-else>------</p>
                                </div>
                            </div>
                            <div class="actions">
                                <div class="whatsapp">
                                    <span class="latin-font">WhatsApp</span>
                                    <p class="latin-font" v-if="userSupervisor !== null && $auth.user.type !== 1">
                                        <template>{{
                                            userSupervisor.mobile
                                            }}
                                        </template>
                                    </p>
                                    <p v-else>------</p>
                                </div>
                                <a
                                        class="message"
                                        href="#chat-modal-expert-alert"
                                        uk-toggle
                                        v-if="userSupervisor == null"
                                >
                                    <svg
                                            class="uk-svg"
                                            height="45"
                                            viewBox="0 0 45 45"
                                            width="45"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Icon" transform="translate(-25 -19)">
                                            <g
                                                    data-name="Rectangle 2340"
                                                    fill="#fff"
                                                    id="Rectangle_2340"
                                                    opacity="0"
                                                    stroke="#707070"
                                                    stroke-width="1"
                                                    transform="translate(25 19)"
                                            >
                                                <rect height="45" stroke="none" width="45"></rect>
                                                <rect
                                                        fill="none"
                                                        height="44"
                                                        width="44"
                                                        x="0.5"
                                                        y="0.5"
                                                ></rect>
                                            </g>
                                            <path
                                                    d="M-18072.562-13477.578h-26.869a3.571,3.571,0,0,1-3.566-3.566v-12.391l1.639,1.227v11.164a1.925,1.925,0,0,0,1.928,1.917h26.869a1.922,1.922,0,0,0,1.918-1.917v-11.164l1.646-1.227v12.391A3.57,3.57,0,0,1-18072.562-13477.578Zm-13.436-8.965a3.544,3.544,0,0,1-2.129-.714l-14.871-11.061v-3.115a3.573,3.573,0,0,1,3.566-3.566h26.869a3.571,3.571,0,0,1,3.564,3.566v3.115l-14.869,11.061A3.567,3.567,0,0,1-18086-13486.543Zm-13.434-16.814a1.93,1.93,0,0,0-1.928,1.925v2.287l14.217,10.569a1.9,1.9,0,0,0,1.145.384,1.925,1.925,0,0,0,1.146-.384l14.207-10.569v-2.287a1.927,1.927,0,0,0-1.918-1.925Z"
                                                    data-name="Path 13470"
                                                    fill="#2b2827"
                                                    id="Path_13470"
                                                    transform="translate(18133.498 13532.789)"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                                <a
                                        @click="goToChat(userSupervisor)"
                                        class="message"
                                        v-else
                                >
                                    <svg
                                            class="uk-svg"
                                            height="45"
                                            viewBox="0 0 45 45"
                                            width="45"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="Icon" transform="translate(-25 -19)">
                                            <g
                                                    data-name="Rectangle 2340"
                                                    fill="#fff"
                                                    id="Rectangle_2340"
                                                    opacity="0"
                                                    stroke="#707070"
                                                    stroke-width="1"
                                                    transform="translate(25 19)"
                                            >
                                                <rect height="45" stroke="none" width="45"></rect>
                                                <rect
                                                        fill="none"
                                                        height="44"
                                                        width="44"
                                                        x="0.5"
                                                        y="0.5"
                                                ></rect>
                                            </g>
                                            <path
                                                    d="M-18072.562-13477.578h-26.869a3.571,3.571,0,0,1-3.566-3.566v-12.391l1.639,1.227v11.164a1.925,1.925,0,0,0,1.928,1.917h26.869a1.922,1.922,0,0,0,1.918-1.917v-11.164l1.646-1.227v12.391A3.57,3.57,0,0,1-18072.562-13477.578Zm-13.436-8.965a3.544,3.544,0,0,1-2.129-.714l-14.871-11.061v-3.115a3.573,3.573,0,0,1,3.566-3.566h26.869a3.571,3.571,0,0,1,3.564,3.566v3.115l-14.869,11.061A3.567,3.567,0,0,1-18086-13486.543Zm-13.434-16.814a1.93,1.93,0,0,0-1.928,1.925v2.287l14.217,10.569a1.9,1.9,0,0,0,1.145.384,1.925,1.925,0,0,0,1.146-.384l14.207-10.569v-2.287a1.927,1.927,0,0,0-1.918-1.925Z"
                                                    data-name="Path 13470"
                                                    fill="#2b2827"
                                                    id="Path_13470"
                                                    transform="translate(18133.498 13532.789)"
                                            ></path>
                                        </g>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div class="text">
                            <p>
                                این پشتیبان تا زمان نهایـی شدن اپلای شما همراهتـان خواهـد بود و
                                شما می‌توانیـد در ساعات کاری با ایشان در ارتباط باشید
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <client-only>
            <EditUserProfileModal
                    :acceptance="acceptance"
                    :imagePreview="imagePreview"
                    :user="user"
            />

            <ChangeEmailModal/>

            <ChangePhoneModal/>

            <SendCodeModalEmail/>

            <SendCodeModalMobile/>

            <ChangePasswordModal/>

            <ChatModalExpertAlert/>

            <ChatModalSupportAlert/>
        </client-only>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import EditUserProfileModal from "@/components/user/dashboard/modal/_editUserProfileModal.vue";
import ChangeEmailModal from "@/components/user/dashboard/modal/_changeEmailModal.vue";
import ChangePhoneModal from "@/components/user/dashboard/modal/_changePhoneModal.vue";
import SendCodeModalEmail from "@/components/user/dashboard/modal/_sendCodeModalEmail.vue";
import SendCodeModalMobile from "@/components/user/dashboard/modal/_sendCodeModalMobile.vue";
import ChangePasswordModal from "@/components/user/dashboard/modal/_changePasswordModal.vue";
import ChatModalExpertAlert from "@/components/user/dashboard/modal/_chatModalExpertAlert.vue";
import ChatModalSupportAlert from "@/components/user/dashboard/modal/_chatModalSupportAlert.vue";

export default {
    computed: {
        ...mapGetters({
            user: "user/user",
            acceptance: "user/acceptance",
            userSupervisorFirstTelSupport: "user/userSupervisorFirstTelSupport",
            userSupervisor: "user/userSupervisor",
            userSupport: "user/userSupport",
        }),
        darkMode() {
            const updatedUser = {...this.$auth.user};

            return updatedUser.darkmode === 1;
        },
    },
    methods: {
        goToChat(userSupervisor) {
            this.$store.commit('user/Set_ChatSide', 'chat');
            let chats = this.$store.getters["chat/chatRoomId"];
            let target = chats.filter(e => e.userid === userSupervisor.id || e.ownerid === userSupervisor.id)[0];
            this.$store.commit("chat/Set_ChatInfo", target);
            this.$store.commit("chat/Clear_Unreads", target.id);
            this.$socket.change(target.id);
            this.$store.commit('user/Set_ChatSide', 'chat');
        },
    },
    components: {
        EditUserProfileModal,
        ChangeEmailModal,
        ChangePhoneModal,
        SendCodeModalEmail,
        SendCodeModalMobile,
        ChangePasswordModal,
        ChatModalExpertAlert,
        ChatModalSupportAlert,
    },
    mounted() {

    },
    data() {
        return {
            imagePreview: null,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.profile-expert {
  margin-bottom: 2rem;
  @include fbx-ai-start-jc-between;
  align-items: stretch;

  h3 {
    font-size: 0.9rem;
    color: var(--text-gray);
    font-weight: 500;
    padding-right: 2rem;
    margin-bottom: 1rem;
  }

  .top {
    @include fbx-ai-center-jc-between;

    .img-name {
      @include fbx-ai-start-jc-start;

      .img {
        margin-left: 1rem;

        img {
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
          object-fit: cover;
        }
      }

      .name {
        span {
          font-size: 0.8rem;
          color: var(--black);
        }

        p {
          margin-top: 0.5rem;
          color: var(--main-color);
          font-size: 0.8rem;
          font-weight: 700;
        }
      }
    }

    .actions {
      @include fbx-ai-start-jc-start;

      .call {
        @include fbx-ai-center-jc-center;
        transition: all 0.3s;
        background-color: var(--inner-background-color);
        color: var(--black);
        font-size: 0.8rem;
        border-radius: 5px;
        padding: 0.5rem 2rem;

        &:hover {
          background-color: var(--light-main-color);
          color: #2b2827;
        }
      }

      .message {
        margin-right: 0.5rem;
        @include fbx-ai-center-jc-center;
        border: 1px solid var(--gray);
        border-radius: 5px;
        width: 2.5rem;
        height: 2.5rem;
        transition: all 0.3s;

        svg {
          transition: all 0.3s;
          color: var(--main-color);
          fill: none;
          width: 1.8rem;
        }

        &:hover {
          background-color: var(--light-main-color);

          svg {
            color: #2b2827;
          }
        }
      }
    }
  }

  .profile {
    @include fbx-column-ai-start-jc-start;
    width: 49%;

    .body {
      background-color: var(--white);
      border-radius: 10px;
      @include boxshadow();
      padding: 2rem;
      height: 100%;
      width: calc(100% - 4rem);

      .top {
        border-bottom: 1px solid var(--gray);
        padding-bottom: 2rem;

        .name {
          span {
            font-size: 0.9rem;
            font-weight: 700;
          }
        }
      }

      .info {
        margin-top: 1rem;

        .row {
          @include fbx-ai-center-jc-center;
          align-items: stretch;
          flex-wrap: wrap;
          border-bottom: 1px solid var(--gray);

          > div {
            width: 25%;
            padding: 1rem;
            @include fbx-column-ai-center-jc-center;

            span {
              font-size: 0.9rem;
              color: var(--text-gray);
            }

            p {
              margin-top: 0.5rem;
              color: var(--black);
              font-size: 0.9rem;
              font-weight: 500;
            }

            &.middle {
              border-left: 1px solid var(--gray);
              border-right: 1px solid var(--gray);
            }
          }

          &:last-child {
            border-bottom: 0;
          }
        }
      }
    }
  }

  .expert {
    @include fbx-column-ai-start-jc-start;
    width: 49%;

    .body {
      height: 100%;
      background-color: var(--white);
      border-radius: 10px;
      @include boxshadow();
      padding: 2rem;
      width: calc(100% - 4rem);

      .each-expert {
        border-bottom: 1px solid var(--gray);
        padding-bottom: 2rem;
        margin-bottom: 2rem;

        &:last-child {
          border-bottom: 0;
          margin-bottom: 0;
          padding-bottom: 0;
        }

        .top {
          .whatsapp {
            @include fbx-column-ai-end-jc-end;

            span {
              color: var(--text-gray);
              font-size: 0.8rem;
              font-weight: 600;
            }

            p {
              margin-top: 0.5rem;
              color: var(--black);
              font-size: 0.9rem;
              font-weight: 700;
            }
          }
        }

        .text {
          margin-top: 1rem;
          line-height: 1.8rem;
          text-align: justify;
          color: var(--text-gray);
          font-size: 0.8rem;
        }
      }
    }
  }
}

@include mobile-device {
  .profile-expert {
    flex-wrap: wrap;

    h3 {
      padding-right: 1rem;
    }

    .top {
      .img-name {
        align-items: center;

        .img {
          margin-left: 0.5rem;
          width: 2.5rem;

          img {
            width: 100%;
            height: 2.5rem;
          }
        }

        .name {
          span {
            font-size: 0.75rem;
          }

          p {
            font-size: 0.75rem;
          }
        }
      }

      .actions {
        .call {
          font-size: 0.75rem;
          padding: 0.5rem 1.25rem;
        }

        .message {
          margin-right: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;

          svg {
            width: 1.8rem;
          }
        }
      }
    }

    .profile {
      width: 100%;
      margin-bottom: 2rem;

      .body {
        padding: 1rem;
        width: calc(100% - 2rem);

        .top {
          padding-bottom: 1rem;

          .name {
            span {
              font-size: 0.8rem;
            }
          }
        }

        .info {
          margin-top: 0.75rem;

          .row {
            > div {
              width: calc(33% - 1rem);
              padding: 0.5rem;
              justify-content: flex-start;

              span {
                text-align: center;
                font-size: 0.75rem;
              }

              p {
                font-size: 0.75rem;
                text-align: center;
              }
            }
          }
        }
      }
    }

    .expert {
      width: 100%;

      .body {
        padding: 1rem;
        width: calc(100% - 2rem);

        .each-expert {
          padding-bottom: 1rem;
          margin-bottom: 1rem;

          .top {
            .actions {
              .call {
                display: none;
              }
            }

            .whatsapp {
              span {
                font-size: 0.75rem;
              }

              p {
                font-size: 0.8rem;
              }
            }
          }

          .text {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .profile-expert {
    flex-wrap: wrap;

    h3 {
      padding-right: 1rem;
    }

    .top {
      .img-name {
        align-items: center;

        .img {
          margin-left: 0.5rem;
          width: 2.5rem;

          img {
            width: 100%;
            height: 2.5rem;
          }
        }

        .name {
          span {
            font-size: 0.75rem;
          }

          p {
            font-size: 0.75rem;
          }
        }
      }

      .actions {
        .call {
          font-size: 0.75rem;
          padding: 0.5rem 1.25rem;
        }

        .message {
          margin-right: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;

          svg {
            width: 1.8rem;
          }
        }
      }
    }

    .profile {
      width: 100%;
      margin-bottom: 2rem;

      .body {
        padding: 1rem;
        width: calc(100% - 2rem);

        .top {
          padding-bottom: 1rem;

          .name {
            span {
              font-size: 0.8rem;
            }
          }
        }

        .info {
          margin-top: 0.75rem;

          .row {
            > div {
              width: calc(33% - 1rem);
              padding: 0.5rem;
              justify-content: flex-start;

              span {
                text-align: center;
                font-size: 0.75rem;
              }

              p {
                font-size: 0.75rem;
                text-align: center;
              }
            }
          }
        }
      }
    }

    .expert {
      width: 100%;

      .body {
        padding: 1rem;
        width: calc(100% - 2rem);

        .each-expert {
          padding-bottom: 1rem;
          margin-bottom: 1rem;

          .top {
            .actions {
              .call {
                display: none;
              }
            }

            .whatsapp {
              span {
                font-size: 0.75rem;
              }

              p {
                font-size: 0.8rem;
              }
            }
          }

          .text {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}

@include large-device {
  .profile-expert {
    flex-wrap: wrap;

    .top {
      .img-name {
        align-items: center;
      }

      .actions {
        .call {
          font-size: 0.75rem;
          padding: 0.5rem 1.25rem;
        }

        .message {
          margin-right: 0.5rem;
          width: 2.5rem;
          height: 2.5rem;

          svg {
            width: 1.8rem;
          }
        }
      }
    }

    .profile {
      width: 100%;
      margin-bottom: 2rem;

      .body {
        .info {
          .row {
            > div {
              width: calc(33% - 2rem);

              span {
                text-align: center;
              }

              p {
                text-align: center;
              }
            }
          }
        }
      }
    }

    .expert {
      width: 100%;
    }
  }
}
</style>
