<template>
  <div>
    <section
      class="wrapper"
      id="apply-status"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle />

      <UniversityItems :universities='universities' />
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/user/applyStatus/_pageTitle.vue";
import UniversityItems from "@/components/user/applyStatus/_universityItems.vue";

export default {
  layout: "userLayout",
  components: {
    PageTitle,
    UniversityItems,
  },
  data() {
    return {
      universities: [],
    };
  },
  async asyncData({ $auth, $axios, redirect }) {
    if (!$auth.loggedIn) redirect('/auth/signin');
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect('/auth/signin');
      }
    }
    const { data } = await $axios.get(`v1/user/applyStatus`);
    return {
      universities: data.universities,
    };
  },
  computed: {
    vuexUserMenuState() {
       return this.$store.getters['user/vuexUserMenuState']
    },
  },
  head() {
    return {
      title: "وضعیت اپلای",
    };
  },
};
</script>
