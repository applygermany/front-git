<template>
  <div>
    <section
        :class="[vuexUserMenuState ? 'collapse' : '']"
        class="wrapper"
        id="dashboard"
    >

      <PageTitle/>
      <ListItems/>

    </section>
  </div>
</template>

<script>
import PageTitle from "~/components/writer/dashboard/_pageTitle.vue";
import ListItems from "~/components/writer/dashboard/_listItems.vue";

export default {
  layout: "writerLayout",
  components: {
    PageTitle,
    ListItems,
  },
  async asyncData({$auth, store, $axios, redirect}) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }

    let filterFrom = store.getters['writer/filterForm']
    if (filterFrom && filterFrom.name != null) {
      var {data} = await $axios.post(`v1/writer/dashboard`, {
        ...filterFrom,
        take: 10,
      });
      store.commit("writer/SET_Orders", data.orders);
      store.commit("writer/SET_Categories", data.categories);
      store.commit("writer/SET_OrdersCount", data.ordersCount);
      store.commit("writer/SET_OrdersCountLimit", data.ordersCount);
    } else {
      var {data} = await $axios.post(`v1/writer/dashboard`, {take: 10});
      store.commit("writer/SET_Orders", data.orders);
      store.commit("writer/SET_Categories", data.categories);
      store.commit("writer/SET_OrdersCount", data.ordersCount);
      store.commit("writer/SET_OrdersCountLimit", data.ordersCount);
    }
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters['writer/vuexUserMenuState']
    },
  },
  head() {
    return {
      title: "داشبورد نگارنده",
    };
  },
}
</script>