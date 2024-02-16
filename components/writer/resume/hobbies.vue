<template>
    <li>{{ hobby.title }}</li>
</template>

<script>
export default {
  props: ["hobby"],
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