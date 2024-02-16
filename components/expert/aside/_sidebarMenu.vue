<template>
  <div class="sidebar__menu">
    <ul>
      <li v-if="this.$auth.user.level !== 7">
        <nuxt-link active-class="sidenav-active" exact-active-class="sidenav-active" to="/expert/dashboard"
          @click.native="closeMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="uk-svg">
            <path
              d="M5.78164 19.25H13.2183C13.7828 19.25 14.227 18.7817 14.1145 18.2285C13.8039 16.7012 12.7896 14 9.49996 14C6.21027 14 5.19601 16.7012 4.88545 18.2285C4.77296 18.7817 5.21714 19.25 5.78164 19.25Z"
              stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M15.75 14C17.8288 14 18.6802 16.1479 19.0239 17.696C19.2095 18.532 18.5333 19.25 17.6769 19.25H16.75"
              stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path
              d="M12.25 7.5C12.25 9.01878 11.0188 10.25 9.5 10.25C7.98122 10.25 6.75 9.01878 6.75 7.5C6.75 5.98122 7.98122 4.75 9.5 4.75C11.0188 4.75 12.25 5.98122 12.25 7.5Z"
              stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.75 10.25C16.2688 10.25 17.25 9.01878 17.25 7.5C17.25 5.98122 16.2688 4.75 14.75 4.75"
              stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>لیست کاربران</span>
        </nuxt-link>
      </li>
      <li v-if="this.$auth.user.level === 3 || this.$auth.user.level === 7 || this.$auth.user.level === 5">
        <nuxt-link active-class="sidenav-active" exact-active-class="sidenav-active" to="/expert/telsupports"
                   @click.native="closeMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="uk-svg">
            <path
                d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14 5.02936C16.4312 5.72562 18.3396 7.65944 19 10.1056" stroke="#141414" stroke-width="1.5"
                  stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>مشاوره تلفنی</span>
        </nuxt-link>
      </li>
      <li v-if="this.$auth.user.level !== 7">
        <nuxt-link active-class="sidenav-active" exact-active-class="sidenav-active" to="/expert/orders"
          @click.native="closeMenu">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25 4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284 18.4216C13.5786 17.6714 14.596 17.25 15.6569 17.25H18.25C18.8023 17.25 19.25 16.8023 19.25 16.25V5.75Z" />
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
              d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716 18.4216C10.4214 17.6714 9.40401 17.25 8.34315 17.25H5.75C5.19772 17.25 4.75 16.8023 4.75 16.25V5.75Z" />
          </svg>

          <span>لیست سفارشات</span>
        </nuxt-link>
      </li>
      <li v-if="this.$auth.user.level === 3">
        <nuxt-link active-class="sidenav-active" exact-active-class="sidenav-active" to="/expert/proccess"
          @click.native="closeMenu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="uk-svg">
            <path d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z" stroke="#141414" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z" stroke="#141414" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z" stroke="#141414" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <span>پیشرفت پروژه</span>
        </nuxt-link>
      </li>
      <li>
        <a @click="logout">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="uk-svg">
            <path d="M15.75 8.75L19.25 12L15.75 15.25" stroke="#141414" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"></path>
            <path d="M19 12H10.75" stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            </path>
            <path
              d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"
              stroke="#141414" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
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
    stroke: red !important;
  }
}

.sidenav-active {
  color: var(--black) !important;
  font-weight: bold;
}

.nuxt-link-active {
  color: var(--black) !important;

}
</style>
