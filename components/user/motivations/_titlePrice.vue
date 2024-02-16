<template>
  <div class="title-price">
    <div class="page-title">
      <div class="return-back">
        <h1>درخواست انگیزه نامه</h1>
      </div>
      <p>
        .نگـارش انگیزه نامه از زمان ثبت سفـارش تا تحویل، هفت تا ده روز کـاری
        زمان می‌بـــــرد
      </p>
    </div>
    <nuxt-link to="/user/motivations/new" class="submit-new">
      ثبت انگیزه نامه جدید
    </nuxt-link>
  </div>
</template>

<script>
export default {

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
