<template>
  <div class="educate-info">
    <strong>{{ work.company_name }}</strong>

    <div class="flex" style="margin-top: 10px">
      <p class="w-50">
        <span>سمت: </span>
        <span>{{ work.position }}</span>
      </p>
      <p class="w-50">
        <span>شهر: </span>
        <span>{{ work.city }}</span>
      </p>
    </div>
    <div class="flex" style="margin-top: 10px">
      <p class="w-50">
        <span>از تاریخ: </span>
        <span>{{ work.from_date_year }} - {{work.from_date_month}}</span>
      </p>
      <p class="w-50">
        <span>شهر: </span>
        <span>{{ work.to_date_year }} - {{work.to_date_month}}</span>
      </p>
    </div>
    <div class="flex" style="margin-top: 10px">
      <p class="w-50">
        <span>توضیحات: </span>
        <span>{{ work.text }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["work"],
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
  width:49%;
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