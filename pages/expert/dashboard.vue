<template>
  <div>
    <section
        :class="[vuexUserMenuState ? 'collapse' : '']"
        class="wrapper"
        id="user-list"
    >
      <PageTitle/>

      <ListItems/>

    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/expert/dashboard/_pageTitle.vue";
import ListItems from "@/components/expert/dashboard/_listItems.vue";

export default {
  layout: "expertLayout",
  components: {
    PageTitle,
    ListItems,
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
      var {data} = await $axios.post(`v1/expert/getAllUser`, {
        ...filterFrom,
        take: 10,
      });
      store.commit("expert/SET_Users", data.users);
      store.commit("expert/Set_support_version", data.support_version);
      store.commit("expert/SET_Categories", data.categories);
      store.commit("expert/SET_UsersCount", data.usersCount);
      store.commit("expert/SET_UsersCountLimit", data.usersCount);
      store.commit("expert/SET_TelSupportAccess", data.telSupportAccess);

      var {data} = await $axios.get(`v1/expert/votes`);

      store.commit("chat/Set_votes", data.votes);
    } else {
      var {data} = await $axios.post(`v1/expert/getAllUser`, {take: 10});
      store.commit("expert/SET_Users", data.users);
      store.commit("expert/Set_support_version", data.support_version);
      store.commit("expert/SET_Categories", data.categories);
      store.commit("expert/SET_UsersCount", data.usersCount);
      store.commit("expert/SET_UsersCountLimit", data.usersCount);

      var {data} = await $axios.get(`v1/expert/votes`);

      store.commit("chat/Set_votes", data.votes);
    }

  },

  computed: {
    vuexUserMenuState() {
      return this.$store.getters["expert/vuexUserMenuState"];
    },
    filterFrom() {
      return this.$store.getters['expert/filterForm'];
    },
  },
  head() {
    return {
      title: "داشبورد کارشناس",
    };
  },
};
</script>
