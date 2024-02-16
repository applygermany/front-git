<template>
  <div>
    <section
      class="wrapper"
      id="process"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle :experts='experts' :categories='categories' />
      <ProcessTable :universitiesCount='universitiesCount' :processes='processes' />
      
      <client-only>
        <EditProcessModal />
      </client-only>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/expert/proccess/_pageTitle.vue";
import ProcessTable from "@/components/expert/proccess/_processTable.vue";
import EditProcessModal from "@/components/expert/proccess/modal/_editProcessModal.vue";

export default {
  layout: "expertLayout",
  components:{
    PageTitle,
    ProcessTable,
    EditProcessModal
  },
  data() {
    return {
      id: 0,
      universitiesCount: 0,
      processes: [],
      categories: [],
      experts: [],
    };
  },
  async asyncData({ $auth, $axios, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const { data } = await $axios.post(`v1/expert/getProcesses`);
    let universitiesCount = 0;
    data.processes.forEach((element) => {
      if (element.universitiesCount > universitiesCount)
        universitiesCount = element.universitiesCount;
    });
    return {
      universitiesCount: universitiesCount,
      processes: data.processes,
      categories: data.categories,
      experts: data.experts,
    };
  },
  
  computed: {
    vuexUserMenuState() {
       return this.$store.getters['expert/vuexUserMenuState']
    },
  },
  head() {
    return {
      title: "پیشرفت پرونده",
    };
  },
};
</script>
