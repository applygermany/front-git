<template>
  <div>
    <section
      class="wrapper"
      id="submit-resume"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <TitlePrice />

      <AllBoxes />

      <client-only>
        <EditResumeRequest />
      </client-only>
    </section>
  </div>
</template>

<script>
import TitlePrice from "@/components/user/resumes/_titlePrice.vue";
import AllBoxes from "@/components/user/resumes/_allBoxes.vue";
import EditResumeRequest from "@/components/user/resumes/modal/_editResumeRequest.vue";

export default {
  layout: "userLayout",
  components: {
    TitlePrice,
    AllBoxes,
    EditResumeRequest,
  },
  async asyncData({ $auth, $axios, store, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }

    const { data } = await $axios.get(`v1/user/resumes`);
    if (data.resumes.length === 0) redirect("/user/resumes/new/");

    store.commit("resume/SET_Resumes", data.resumes);
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters["user/vuexUserMenuState"];
    },
  },
  head() {
    return {
      title: "رزومه",
    };
  },
};
</script>
