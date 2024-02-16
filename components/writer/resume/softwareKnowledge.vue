<template>
  <div class="educate-info">
    <div class="flex">
      <p class="w-50">
        <span>نرم افزار: </span>
        <span>{{ SoftwareKnowledge.title }}</span>
      </p>
      <p class="w-50">
        <span>میزان تسلط: </span>
        <span>{{ SoftwareKnowledge.fluency_level }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["SoftwareKnowledge"],
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