<template>
  <div class="list__items">
    <Box :key="index" :user="user" v-for="(user, index) in orders"/>

    <client-only>
      <infinite-loading
          @infinite="infiniteHandler"
          spinner="bubbles"
          v-if="orderCountLimit != orders.length"></infinite-loading>

      <AcceptFileModal/>
      <DeclineFileModal/>

    </client-only>
  </div>
</template>

<script>

import Box from "@/components/expert/orders/_box.vue";
import AcceptFileModal from "~/components/expert/orders/modal/_accept-file-modal.vue";
import DeclineFileModal from "~/components/expert/orders/modal/_decline-file-modal.vue";

export default {
  components: {
    Box,
    AcceptFileModal,
    DeclineFileModal
  },
  computed: {
    orders() {
      let orders = this.$store.getters["expert/orders"];
      return orders ? this.$store.getters["expert/orders"] : [];
    },
    filterForm() {
      return this.$store.getters["expert/filterForm"];
    },
    orderCountLimit() {
      return this.$store.getters["expert/orderCountLimit"];
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
