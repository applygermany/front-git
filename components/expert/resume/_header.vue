<template>
  <header class="header-expert">
    <div class="header-expert__top">
      <!--  Menu Icon  -->
      <div class="menu-icon"></div>

      <!--  Logo  -->
      <div class="logo">
        <nuxt-link to="/expert/dashboard/">
          <img
            src="@/assets/expert/images/logo_Light_chrismas.svg"
            class="logo_light"
            alt=""
          />
          <img
            src="@/assets/expert/images/logo_Dark_chrismas.svg"
            class="logo_dark"
            alt=""
          />
        </nuxt-link>
      </div>

      <!--  Dark Switch , messages , chat  -->
      <div class="chat-messages-dark">
        <a class="switch-theme resume-switch-theme" @click="changeDarkMode">
          <!--                    <img src="../assets/images/icons/moon.svg" class="moon" uk-svg alt="">-->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27.337"
            height="28.812"
            viewBox="0 0 27.337 28.812"
            class="moon uk-svg"
          >
            <path
              id="Moon"
              d="M6598.5,989.758a13.5,13.5,0,0,1-2.254-26.812,12.437,12.437,0,0,0,14.093,19.806A13.511,13.511,0,0,1,6598.5,989.758Z"
              transform="translate(-6584 -961.947)"
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
          <!--                    <img src="../assets/images/icons/sun.svg" class="sun" uk-svg alt="">-->
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="sun uk-svg"
          >
            <path
              d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 2.75V4.25"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17.2501 6.75L16.0659 7.93417"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M21.25 12.0001L19.75 12.0001"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M17.2501 17.2501L16.0659 16.066"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12 19.75V21.25"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.93414 16.0659L6.75 17.25"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M4.25 12.0001L2.75 12.0001"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M7.93402 7.93423L6.74988 6.75003"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    async changeDarkMode() {
      document.querySelector("html").classList.toggle("dark-mode");
      const updatedUser = { ...this.$auth.user };
      updatedUser.darkmode == 1
        ? (updatedUser.darkmode = 0)
        : (updatedUser.darkmode = 1);
      this.$auth.setUser(updatedUser);
      await this.$axios.get("v1/expert/changeDarkMode");
    },
  },
};
</script>
