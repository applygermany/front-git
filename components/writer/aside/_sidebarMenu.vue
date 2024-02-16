<template>
  <div class="sidebar__menu">
    <ul>
      <li>
        <nuxt-link  active-class="sidenav-active"
                               exact-active-class="sidenav-active"  to="/writer/dashboard" @click.native="closeMenu">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="uk-svg"
          >
            <path
              d="M5.78164 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.8039 16.7012 12.7896 14 9.49996 14C6.21027 14 5.19601 16.7012 4.88545 18.2285C4.77296 18.7817 5.21714 19.25 5.78164 19.25Z"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M12.25 7.5C12.25 9.01878 11.0188 10.25 9.5 10.25C7.98122 10.25 6.75 9.01878 6.75 7.5C6.75 5.98122 7.98122 4.75 9.5 4.75C11.0188 4.75 12.25 5.98122 12.25 7.5Z"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span>لیست سفارشات</span>
        </nuxt-link>
      </li>
      <li>
        <a @click="logout">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="uk-svg"
          >
            <path
              d="M15.75 8.75L19.25 12L15.75 15.25"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M19 12H10.75"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"
              stroke="#141414"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span>خروج از حساب</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    closeMenu() {
      this.$store.dispatch("expert/setVuexUserMenuState", false);
    },
    logout() {
      this.$auth.logout();
    },
  },
};
</script>

<style lang="scss">
  .sidebar__menu ul li:last-child:hover {
    svg path {
      stroke: red!important;
    }
  }
  .sidenav-active {
    color: var(--black)!important;
    font-weight: bold;
  }
  .nuxt-link-active {
    color: var(--black)!important;

  }

</style>
