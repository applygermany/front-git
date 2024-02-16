<template>
  <div>
    <section
      class="wrapper"
      id="motivation2"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <TitlePrice />

      <AllBoxes />

      <client-only>
        <EditMotivationRequest />
      </client-only>
    </section>
  </div>
</template>

<script>
import TitlePrice from "@/components/user/motivations/_titlePrice.vue";
import AllBoxes from "@/components/user/motivations/_allBoxes.vue";
import EditMotivationRequest from "@/components/user/motivations/modal/_editMotivationRequest.vue";

export default {
  layout: "userLayout",
  components: {
    TitlePrice,
    AllBoxes,
    EditMotivationRequest,
  },
  async asyncData({ $auth, $axios, store, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const { data } = await $axios.get(`v1/user/motivations`);
    if (data.motivations.length === 0) redirect("/user/motivations/new/");

    store.commit("motivations/SET_Motivations", data.motivations)
  },
  // created() {
  //   this.$store.dispatch("motivations/getMotivations");
  // },
  computed: {
    vuexUserMenuState() {
       return this.$store.getters['user/vuexUserMenuState']
    },
  },
  head() {
    return {
      title: "انگیزه نامه",
    };
  },
};
</script>
