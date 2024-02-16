<template>
  <div
    id="busy-request-consulting-modal"
    class="request-consulting-modal"
    uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>درخواست وقت مشاوره</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="text">
        <p class="explain">
          کاربر گرامی! تایم مشاوره تاریخ
          <span>{{ telSupport.date.split("-").reverse().join("-") }}</span> در
          بازه زمانی {{ telSupport.fromTime }} تا {{ telSupport.toTime }} قبلا
          رزرو شده است .
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
  data() {
    return {
      errors: [],
    };
  },
  computed: {
    telSupport() {
      return this.$store.getters["telSupports/telSupport"];
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
