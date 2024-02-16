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
import PageTitle from "~/components/expert/orders/_pageTitle.vue";
import ListItems from "~/components/expert/orders/_listItems.vue";

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

    let filterFrom = store.getters['writer/filterForm']
    if (filterFrom && filterFrom.name != null) {
      var {data} = await $axios.post(`v1/expert/orders`, {
        ...filterFrom,
        take: 10,
      });
      store.commit("expert/SET_Orders", data.orders);
      store.commit("expert/SET_Categories", data.categories);
      store.commit("expert/SET_OrdersCount", data.ordersCount);
      store.commit("expert/SET_OrdersCountLimit", data.ordersCount);
      store.commit("expert/SET_UsersCount", data.usersCount);
    } else {
      var {data} = await $axios.post(`v1/expert/orders`, {take: 10});
      store.commit("expert/SET_Orders", data.orders);
      store.commit("expert/SET_Categories", data.categories);
      store.commit("expert/SET_OrdersCount", data.ordersCount);
      store.commit("expert/SET_OrdersCountLimit", data.ordersCount);
      store.commit("expert/SET_UsersCount", data.usersCount);
    }
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters['expert/vuexUserMenuState']
    },
  },
  head() {
    return {
      title: "لیست سفارشات",
    };
  },
}
</script>