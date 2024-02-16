<template>
  <div class="list__items">
    <Box :key="index" :user="user" :index="index" v-for="(user, index) in orders"/>

    <client-only>
      <infinite-loading
          @infinite="infiniteHandler"
          spinner="bubbles"
          v-if="ordersCountLimit != orders.length"></infinite-loading>
    </client-only>
  </div>
</template>

<script>

import Box from "@/components/writer/dashboard/_box.vue";

export default {
  components: {
    Box,
  },
  computed: {
    orders() {
      let users = this.$store.getters["writer/orders"];
      return users ? this.$store.getters["writer/orders"] : [];
    },
    filterForm() {
      return this.$store.getters["writer/filterForm"];
    },
    ordersCountLimit() {
      return this.$store.getters["writer/ordersCountLimit"];
    },
  },
  methods: {

    async infiniteHandler($state) {
      await this.$axios
          .post(`v1/writer/dashboard`, {
            ...this.filterForm,
            take: this.orders ? this.orders.length + 10 : 10,
          })
          .then((res) => {
            if (res.data && res.data.orders) {
              if (res.data.orders.length) {
                this.$store.commit("writer/SET_Orders", res.data.orders);
                $state.loaded();
              } else {
                $state.complete();
              }
            } else {

              $state.complete();

            }
          });
    },
  },
};
</script>
