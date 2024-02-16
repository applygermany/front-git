<template>
  <div>
    <section
      class="wrapper"
      id="apply-status"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle />

      <UniversityItems :id="id" :universities="universities" />
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/expert/applystatus/_pageTitle.vue";
import UniversityItems from "@/components/expert/applystatus/_universityItems.vue";

export default {
  layout: "expertLayout",
  components: {
    PageTitle,
    UniversityItems,
  },
  data() {
    return {
      id: 0,
      universities: [],
      user: [],
    };
  },
  async asyncData({ params, store, $auth, $axios, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const { data } = await $axios.get("v1/expert/getApply/" + params.id);

    store.commit("expert/applyId", params.id);
    store.commit("expert/applyUniversities", data.universities);
    store.commit("expert/applyUser", data.user);
  },

  computed: {
    vuexUserMenuState() {
      return this.$store.getters.vuexUserMenuState;
    },
  },
  head() {
    return {
      title: "وضعیت اپلای",
    };
  },
};
</script>
