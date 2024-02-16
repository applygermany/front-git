<template>
  <div>
    <section :class="[vuexUserMenuState ? 'collapse' : '']" class="wrapper" id="dashboard">

      <PageTitle/>
      <TableInfo/>


    </section>
  </div>
</template>

<script>
import PageTitle from "~/components/expert/workExperience/_pageTitle.vue";
import TableInfo from "~/components/expert/workExperience/_tableInfo.vue";

export default {
  layout: "expertLayout",
  components: {
    PageTitle,
    TableInfo,
  },
  async asyncData({$auth, store, $axios, redirect}) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }

    let filterFrom = store.getters['expert/filterForm']
    if (filterFrom && filterFrom.name != null) {
      var {data} = await $axios.post(`v1/expert/workExperience`, {
        ...filterFrom,
        take: 10,
      });
      store.commit("expert/SET_WorkExperience", data.history);
      store.commit("expert/SET_WorkExperienceCount", data.count);
    } else {
      var {data} = await $axios.post(`v1/expert/workExperience`, {take: 10});
      console.log(data.history, "workExperience")
      store.commit("expert/SET_WorkExperience", data.history);
      store.commit("expert/SET_WorkExperienceCount", data.count);
    }
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters['expert/vuexUserMenuState']
    },
  },
  head() {
    return {
      title: "لیست سابقه کاری",
    };
  },
}
</script>