<template>
  <div class="header__top">
    <div class="menu-icon">
      <a @click="openCloseMenu">
        <svg
            class="uk-svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M4.75 5.75H19.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M4.75 18.25H19.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M4.75 12H19.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
        </svg>
      </a>
      <nuxt-link to="/user/dashboard">
        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
          <path
              d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
        </svg>
      </nuxt-link>
      <div class="user-info">
        <div class="img">
          <p class="level" v-if="$auth.user.image == null ">
            <span v-if="$auth.user.type === 2">

              <svg height="11.891"
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
            <svg fill="none" height="24" v-else viewBox="0 0 24 24" width="24">
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
          </p>
          <img :src="user.image" v-else-if="user.image !== false  && user.hasImage"/>

          <img alt="" src="/user_light.svg" v-else-if="$auth.user.darkmode !== 1"/>
          <img alt="" src="/user_dark.svg" v-else/>
        </div>
        <div class="text">
          <p>{{ $auth.user.firstname }} {{ $auth.user.lastname }}</p>
          <span class="latin-font" v-if="$auth.user.mobile">{{
              $auth.user.mobile
            }}</span>
          <span class="latin-font" v-else>{{ $auth.user.email }}</span>
        </div>
      </div>
    </div>
    <div class="logo">
      <nuxt-link to="/">
        <img
            alt=""
            class="logo_light"
            src="@/assets/expert/images/logo_Light.svg"
        />
        <img alt=""
             class="logo_dark"
             src="@/assets/expert/images/logo_Dark.svg"
        />
      </nuxt-link>
    </div>
    <div class="chat-messages-dark">
      <a @click="changeDarkMode" class="switch-theme">
        <svg
            class="moon uk-svg"
            height="28.812"
            viewBox="0 0 27.337 28.812"
            width="27.337"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M6598.5,989.758a13.5,13.5,0,0,1-2.254-26.812,12.437,12.437,0,0,0,14.093,19.806A13.511,13.511,0,0,1,6598.5,989.758Z"
              fill="none"
              id="Moon"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              transform="translate(-6584 -961.947)"
          ></path>
        </svg>
        <svg
            class="sun uk-svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M12 2.75V4.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M17.2501 6.75L16.0659 7.93417"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M21.25 12.0001L19.75 12.0001"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M17.2501 17.2501L16.0659 16.066"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M12 19.75V21.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M7.93414 16.0659L6.75 17.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M4.25 12.0001L2.75 12.0001"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M7.93402 7.93423L6.74988 6.75003"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
        </svg>
      </a>
      <a @click="openSide('note')" class="messages" style="position: relative">
        <div class="newmew" style="top: 0;right: 12px;" v-if="notifUnreadCount > 0"></div>
        <div class="my-tooltip">
          <svg
              class="uk-svg"
              height="29"
              viewBox="0 0 29 29"
              width="29"
              xmlns="http://www.w3.org/2000/svg"
          >
            <g id="earth" transform="translate(-0.001 0)">
              <g
                  data-name="Group 8048"
                  id="Group_8048"
                  transform="translate(0.001 0)"
              >
                <path
                    d="M27.4,7.9A14.493,14.493,0,0,0,7.9,1.6,14.493,14.493,0,1,0,21.105,27.4,14.493,14.493,0,0,0,27.4,7.9ZM12.341,27.111a12.8,12.8,0,0,1-10.28-15.6l1.455.692a11.509,11.509,0,0,0,.032,1.2c.129,1.538.635,2.407,1.5,2.585a6.517,6.517,0,0,0,1.3.139,4.008,4.008,0,0,0,3.887-2.469c.119-.27.223-.344.242-.348.067-.013.373.055.885.534a1.3,1.3,0,0,1,.41.96,1.751,1.751,0,0,1-.725,1.637,4.579,4.579,0,0,0-2.329,3.473,2.025,2.025,0,0,0,.912,1.829,8.273,8.273,0,0,1,2.311,2.273A3.186,3.186,0,0,1,12.341,27.111Zm2.151.184c-.137,0-.274,0-.411-.007a4.923,4.923,0,0,0-.7-4.185,10.054,10.054,0,0,0-2.815-2.784c-.053-.034-.15-.1-.143-.357A2.912,2.912,0,0,1,11.9,17.914a3.4,3.4,0,0,0,1.58-3.1,3,3,0,0,0-.947-2.216,2.759,2.759,0,0,0-2.386-.959,2.058,2.058,0,0,0-1.456,1.327c-.533,1.21-1.613,1.671-3.208,1.369a3.1,3.1,0,0,1-.258-1.331,10.842,10.842,0,0,1,.014-1.264l.048-.585L2.574,9.87A12.8,12.8,0,0,1,21.692,3.917a4.938,4.938,0,0,0-1.7,3.215c-.014.408-.225.556-1.058.93a3.673,3.673,0,0,0-2.056,1.683,4.212,4.212,0,0,0,.027,3.213,2.2,2.2,0,0,0,3.991.345,4.054,4.054,0,0,1,.661.8A10.474,10.474,0,0,0,22.67,16.91a5.907,5.907,0,0,0,1.847,2,4.224,4.224,0,0,0,1.737.643A12.826,12.826,0,0,1,14.492,27.3Zm12.344-9.4a3.138,3.138,0,0,1-2.686-1.819,8.763,8.763,0,0,1-.966-2.463l-.028-.144-.075-.126a6.806,6.806,0,0,0-.606-.84,2.271,2.271,0,0,0-1.745-1,1.5,1.5,0,0,0-1.3.938l-.015.03a.476.476,0,0,1-.471.264A.487.487,0,0,1,18.5,12.4a2.706,2.706,0,0,1-.1-1.921c.179-.376.579-.577,1.217-.863.848-.38,2.009-.9,2.061-2.422a3.624,3.624,0,0,1,1.364-2.209A12.817,12.817,0,0,1,26.836,17.894Z"
                    data-name="Path 13797"
                    id="Path_13797"
                    transform="translate(-0.001 0)"
                ></path>
              </g>
            </g>
          </svg>
          <span class="my-tooltiptext">اعلانات</span>
        </div>
      </a>
      <a
          class="chat"
          href="#user-normal-user-modal"
          uk-toggle
          v-if="$auth.user.type === 1"
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
              <rect fill="none" height="44" width="44" x="0.5" y="0.5"></rect>
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
          :data-count="chatUnreadCount"
          @click="openSide('list')"
          class="chat"
          style="position: relative"
          v-else
      >
        <div class="newmew" v-if="chatUnreadCount > 0"></div>

        <div class="my-tooltip">
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
                <rect fill="none" height="44" width="44" x="0.5" y="0.5"></rect>
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
          <span class="my-tooltiptext">چت</span>

        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuState: false,
      darkMode: false,
    };
  },
  mounted() {
    console.log('this.$auth.user: ', this.$auth.user)
  },
  computed: {
    user() {
      return this.$store.getters["user/user"];
    },
    chatSide() {
      return this.$store.getters["user/chatSide"];
    },
    vuexUserMenuState() {
      return this.$store.getters["user/vuexUserMenuState"];
    },
    chatUnreadCount() {

      return this.$store.getters["chat/chatUnreadCount"];
    },
    notifUnreadCount() {
      return this.$store.getters["chat/notifUnreadCount"];
    },
  },
  methods: {
    openCloseMenu() {
      this.$store.dispatch(
          "user/setVuexUserMenuState",
          !this.vuexUserMenuState
      );
    },
    async changeDarkMode() {
      document.querySelector("html").classList.toggle("dark-mode");
      const updatedUser = {...this.$auth.user};
      updatedUser.darkmode == 1
          ? (updatedUser.darkmode = 0)
          : (updatedUser.darkmode = 1);
      this.darkMode = updatedUser.darkmode == 1;
      this.$auth.setUser(updatedUser);
      await this.$axios.get("v1/user/changeDarkMode");
    },
    openSide(pos) {
      if (this.chatSide == "note" && pos == "note") {
        this.$store.commit("chat/Set_read");

        this.$store.commit("user/Set_ChatSide", "");
        return;
      } else if (this.chatSide == "list" && pos == "list") {

        this.$store.commit("user/Set_ChatSide", "");
        return;
      }

      this.$store.commit("user/Set_ChatSide", pos);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.newmew {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: red;
  top: 15px;
  right: 15px;
  z-index: 2;
}

.level {
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

.user-info .img img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  object-fit: cover;
}
</style>
