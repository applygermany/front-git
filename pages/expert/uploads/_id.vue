<template>
  <div>
    <section
      class="wrapper"
      id="user-document"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle />
      <DocumentTable />

      <client-only>
        <DeleteUploadsModal />
        <ChangeFileTypeModal />
      </client-only>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/expert/uploads/_pageTitle.vue";
import DocumentTable from "@/components/expert/uploads/_documentTable.vue";
import DeleteUploadsModal from "@/components/expert/uploads/modal/_deleteUploadsModal.vue";
import ChangeFileTypeModal from "@/components/expert/uploads/modal/_changeFiletypeModal.vue";

export default {
  layout: "expertLayout",
  components: {
    PageTitle,
    DocumentTable,
    DeleteUploadsModal,
      ChangeFileTypeModal,
  },
  async asyncData({ params, store, $auth, $axios, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const { data } = await $axios.get("v1/expert/getDocument/" + params.id);

    store.commit("expert/SET_Uploads", data.documents);
    store.commit("expert/SET_User", data.user);
    store.commit("expert/SET_UserId", params.id);
    store.commit("expert/SET_importantFilesThatNotExist", data.importantFilesThatNotExist);
    store.commit("expert/SET_tokenDownloadAll", data.tokenDownloadAll);
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
