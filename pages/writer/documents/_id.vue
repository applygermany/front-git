<template>
  <div>
    <section
        class="wrapper"
        id="user-document"
        :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle />
      <DocumentTable />
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/writer/documents/_pageTitle.vue";
import DocumentTable from "@/components/writer/documents/_documentTable.vue";

export default {
  layout: "writerLayout",
  components: {
    PageTitle,
    DocumentTable,
  },
  async asyncData({ params, store, $auth, $axios, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }

    const { data } = await $axios.get("v1/writer/getDocument/" + params.id);

    store.commit("writer/SET_Uploads", data.documents);
    store.commit("writer/SET_User", data.user);
    store.commit("writer/SET_UserId", params.id);
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters.vuexUserMenuState;
    },
  },
  head() {
    return {
      title: "مدارک کاربر",
    };
  },
};
</script>
