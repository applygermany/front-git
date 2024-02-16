<template>
  <div>
    <section
      class="wrapper"
      id="consulting-history"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle />

      <ConsultingTable />
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/expert/telsupports/history/_pageTitle.vue";
import ConsultingTable from "@/components/expert/telsupports/history/_consultingTable.vue";

export default {
  layout: "expertLayout",
  components: {
    PageTitle,
    ConsultingTable,
  },
  async asyncData({ $auth, store, $axios, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const telSupports = await $axios.post("/v1/expert/getHistoryTel", {
      day: 7,
      type: 0,
    });

    store.commit("telSupports/SET_TelSupportsHistory", {
      telSupports: telSupports.data.telSupports,
      startDate: telSupports.data.startDate,
      endDate: telSupports.data.endDate,
    });
  },

  computed: {
    vuexUserMenuState() {
      return this.$store.getters.vuexUserMenuState;
    },
  },
  head() {
    return {
      title: "جلسات مشاوره",
    };
  },
};
</script>
