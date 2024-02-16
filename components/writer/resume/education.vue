<template>
  <div class="educate-info">
    <strong>{{ education.grade }}</strong>

    <div class="flex" style="margin-top: 10px">
      <p class="w-50">
        <span>رشته: </span>
        <span>{{ education.field }}</span>
      </p>
      <p class="w-50">
        <span>معدل: </span>
        <span>{{ education.grade_score }}</span>
      </p>
    </div>
    <div class="flex" style="margin-top: 10px">
      <p class="w-50">
        <span>شهر: </span>
        <span>{{ education.city }}</span>
      </p>
      <p class="w-50">
        <span>مدرسه یا دانشگاه: </span>
        <span>{{ education.school_name }}</span>
      </p>
    </div>
    <div class="flex" style="margin-top: 10px">
      <p class="w-50">
        <span>از تاریخ: </span>
        <span>{{ education.from_date_year }} - {{ education.from_date_month }}</span>
      </p>
      <p class="w-50">
        <span>تا تاریخ: </span>
        <span>{{ education.to_date_year }} - {{ education.to_date_month }}</span>
      </p>
    </div>
    <div class="flex" style="margin-top: 10px">
      <p class="w-100">
        <span>توضیحات: </span>
        <span>{{ education.text }}</span>
      </p>
    </div>
  </div>

</template>

<script>
export default {
  props: ["education"],
};
</script>
<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.flex {
  display: flex;
}

.width-20 {
  width: 20%;
}

.width-80 {
  width: 80%;
}

.w-50 {
  width: 49%;
}


@include tablet-device {
  .flex {
    display: block;
  }
  .w-50 {
    width: 100%;
  }
}

@include mobile-device {
  .flex {
    display: block;
  }
  .w-50 {
    width: 100%;
  }
}
</style>