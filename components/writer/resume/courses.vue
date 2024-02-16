<template>
  <div class="educate-info">
    <strong>{{ course.title }}</strong>

    <div class="flex" style="margin-top: 10px">
      <p class="w-50">
        <span>برگزار کننده: </span>
        <span>{{ course.organizer }}</span>
      </p>
      <p class="w-50">
        <span>تاریخ (سال): </span>
        <span>{{ course.year }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["course"],
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