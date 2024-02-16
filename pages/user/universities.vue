<template>
  <div>
    <section
      class="wrapper"
      id="university-page"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle />

      <UniversityBoxes />

      <SubmitUniversityModal />
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/user/universities/_pageTitle.vue";
import UniversityBoxes from "@/components/user/universities/_universityBoxes.vue";
import SubmitUniversityModal from "@/components/user/universities/modal/_submitUniversityModal.vue";

export default {
  layout: "userLayout",
  components: {
    PageTitle,
    UniversityBoxes,
    SubmitUniversityModal,
  },
  async asyncData({ $auth, store, $axios, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const { data } = await $axios.post(`v1/user/universities`);
    if (data.status != 0) {
      store.commit("user/Set_Universities", data.universities);
      store.commit("user/Set_Cities", data.cities);
      store.commit("user/Set_Fields", data.fields);
      store.commit("user/Set_GeographicalLocations", data.geographicalLocations);
      store.commit("user/Set_States", data.states);

      const chosenUni = data.universities.filter((item) => item.status == 1);

      store.commit("user/Set_MaxUniversities", data.max_universities);
      store.commit("user/Set_ChosenUni", chosenUni.length);
     await store.dispatch('user/pricing');
    } else  {
      redirect('/user/dashboard')
    }
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters["user/vuexUserMenuState"];
    },
  },
  head() {
    return {
      title: "دانشگاه ها",
    };
  },
};
</script>
