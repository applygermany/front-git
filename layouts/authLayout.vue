<template>
  <div class="auth-layout" style="min-height: 100vh; background-color: white">
    <Header />
    <keep-alive>
      <nuxt />
    </keep-alive>
  </div>
</template>
<script>
import Header from "@/components/auth/Header.vue";
export default {
  components: { Header },
};
</script>
<style lang="scss">
@import "~/assets/auth/styles/scss/public.scss";
</style>
