<template>
  <div class="title-price">
    <div class="page-title">
      <div class="return-back">
        <h1>ارزیابی عملکرد مشاور</h1>
      </div>
      <p>
          {{ $auth.user.firstname }} {{ $auth.user.lastname }}
          عزیز! شما یک جلسه
          مشاوره با
          {{ pollinfo.expert_level == 3 ? 'کارشناس' : "پشتیبان" }}
          {{ pollinfo.expert_name }}
          داشتید. به این
          {{ pollinfo.expert_level == 3 ? 'کارشناس' : "پشتیبان" }}
          چه
          امتیازی میدهید؟
      </p>
    </div>
  </div>
</template>

<script>


export default {
    computed:{
        pollinfo() {
            return this.$store.getters['telSupports/pollinfo']
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.title-price {
  @include fbx-ai-start-jc-between;
  align-items: flex-end;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;
  .submit-new {
    border-radius: 5px;
    background-color: var(--light-main-color);
    color: #2b2827;
    padding: 0.5rem 2rem;
    font-size: 0.8rem;
    font-weight: 500;
  }
}

@include mobile-device {
  .title-price {
    flex-direction: column;
    margin-bottom: 1.5rem;
    .submit-new {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      font-size: 0.75rem;
    }
  }
}

@include tablet-device {
  .title-price {
    margin-bottom: 1.5rem;
    .submit-new {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      font-size: 0.75rem;
    }
  }
}
</style>
