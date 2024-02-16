<template>
  <section class="uk-container links">
    <div class="top">
      <p v-if="contactUs.email != null && contactUs.email != ''">
        <span>ایمیل: </span><span>{{ contactUs.email }}</span>
      </p>
      <p v-if="contactUs.mobile != null && contactUs.mobile != ''">
        <span>شماره تلفن ثابت: </span><span>{{ contactUs.mobile }}</span>
      </p>
      <p v-if="contactUs.phone != null && contactUs.phone != ''">
        <span>شماره همراه: </span><span>{{ contactUs.phone }}</span>
      </p>
    </div>
    <div class="bottom">
      <p
        v-if="contactUs.response_time != null && contactUs.response_time != ''"
      >
        <span>پاسخگویی: </span><span>{{ contactUs.response_time }}</span>
      </p>
      <p v-if="contactUs.address != null && contactUs.address != ''">
        <span>آدرس: </span
        ><span>
          {{ contactUs.address }}
        </span>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    contactUs() {
      return this.$store.getters.contactUs;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/site/css/mixins.scss";

.links {
  margin-top: 3rem;
  @include fbx-column-ai-center-jc-center;
  p {
    margin-left: 2rem;
    margin-right: 2rem;
    span:first-child {
      color: var(--black);
      font-weight: 500;
      font-size: 0.9rem;
    }
    span:last-child {
      font-size: 0.9rem;
      font-weight: 300;
      color: var(--black);
    }
  }
  .top {
    @include fbx-ai-start-jc-start;
    margin-bottom: 1rem;
  }
  .bottom {
    margin-top: 1rem;
    @include fbx-ai-start-jc-start;
  }
}

@include mobile-device {
  .links {
    margin-top: 0;
    p {
      margin-top: 1rem;
      margin-left: 0;
      margin-right: 0;
      span:first-child {
        font-size: 0.75rem;
      }
      span:last-child {
        font-size: 0.75rem;
      }
    }
    .top {
      flex-direction: column;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
    .bottom {
      margin-top: 0;
      flex-direction: column;
    }
  }
}

@include tablet-device {
  .links {
    p {
      span:first-child {
        font-size: 0.8rem;
      }
      span:last-child {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
