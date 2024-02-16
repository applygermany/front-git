<template>
  <div
      id="cant-request-consulting-modal"
      class="request-consulting-modal"
      uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>درخواست وقت مشاوره</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="text">
        <p class="explain" v-if="telSupportReserve != null">
          شما یک تایم مشاوره فعال برای تاریخ <span>{{ telSupportReserve.date }}</span> از
          ساعت
          {{ telSupportReserve.fromTime }} تا {{ telSupportReserve.toTime }} دارید و نمی توانید تایم دیگری رزرو کنید.
          بعد از اتمام این مشاوره امکان رزرو تایم مشاوره برای شما فعال خواهد شد.
        </p>
        <div class="whatsapp-got">
          <div class="got">
            <a class="uk-modal-close">متوجه شدم</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    telSupportReserve() {
      return this.$store.getters["telSupports/telSupportReserve"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.request-consulting-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    border-radius: 8px;
    width: 40%;
  }
}

@include mobile-device {
  .request-consulting-modal {
    .uk-modal-body {
      width: 100% !important;
    }
  }
}
</style>
