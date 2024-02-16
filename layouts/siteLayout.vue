<template>
  <div>
    <Header />
    <nuxt />
    <FixBottomNav />
    <Footer />
  </div>
</template>
<script async src="http://localhost:6236/site/imber.js"></script>

<script>
import Header from "~/components/site/Header";
import Footer from "~/components/site/Footer";
import FixBottomNav from "@/components/site/landing/_fixBottomNav.vue";

export default {
  components: {
    Header,
    Footer,
    FixBottomNav,
  }
};
</script>


<style lang="scss" >
@import "~/assets/site/css/main.scss";

</style>
