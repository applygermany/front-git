<template>
  <div class="page-title">
    <div class="return-back">
      <nuxt-link to="/expert/dashboard">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uk-svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </nuxt-link>
      <h1>مدارک کاربری</h1>
    </div>
    <p>
      لیست مدارک آپلود شده
      <nuxt-link :to="`/expert/resume/` + user.id" class="name">
        {{ user.firstname }} {{ user.lastname }}
      </nuxt-link>
      در اپلای جرمنی
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["expert/user"];
    },
  },
};
</script>

<style></style>
