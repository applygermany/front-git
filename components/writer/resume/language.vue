<template>
  <div class="educate-info">
    <strong>{{ language.title }}</strong>

    <div class="flex" style="margin-top: 10px">
      <p class="w-33">
        <span>میزان تسلط: </span>
        <span>{{ language.fluency_level }}</span>
      </p>
      <p class="w-33">
        <span>مدرک: </span>
        <span>{{ language.degree }}</span>
      </p>
      <p class="w-33">
        <span>نمره: </span>
        <span>{{ language.score }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["language"],
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

.w-33 {
  width:33%;
}


@include tablet-device {
  .flex {
    display: block;
  }
  .w-33 {
    width: 100%;
  }
}

@include mobile-device {
  .flex {
    display: block;
  }
  .w-33 {
    width: 100%;
  }
}
</style>