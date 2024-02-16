<template>
  <div class="page-title">
    <div class="return-back">
      <nuxt-link to="/writer/dashboard">
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
      <h1>آپلود</h1>
    </div>
    <p>
      فایل های اپلودی برای کاربر

      <b v-if="type === 'motivation'">
        <nuxt-link :to="`/writer/motivation/` + dataId" class="name"
        >{{ user.firstname }} {{ user.lastname }}
        </nuxt-link>
      </b>
      <b v-if="type === 'resume'">
        <nuxt-link :to="`/writer/resume/` + dataId" class="name"
        >{{ user.firstname }} {{ user.lastname }}
        </nuxt-link>
      </b>
      در اپلای جرمنی
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["writer/user"];
    },
    type() {
      return this.$store.getters['writer/type']
    },
    dataId() {
      return this.$store.getters['writer/dataId']
    }
  },
};
</script>

<style></style>
