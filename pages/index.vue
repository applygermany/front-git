<template>
  <div>
    <main class="main">
      <FirstPart
          v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '10px 0px 0px 0px',
            threshold: 0.4,
          },
        }"
      />

      <WhyApply
          v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '10px 0px 0px 0px',
            threshold: 0.8,
          },
        }"
      />

      <StepSlider
          v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '10px 0px 0px 0px',
            threshold: 0.8,
          },
        }"
      />

      <Panels
          v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '10px 0px 0px 0px',
            threshold: 0.4,
          },
        }"
      />

      <ComingSoon
          v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '10px 0px 0px 0px',
            threshold: 0.8,
          },
        }"
      />

      <CommentsSlider
          v-observe-visibility="{
          callback: visibilityChanged,
          intersection: {
            rootMargin: '10px 0px 0px 0px',
            threshold: 0.8,
          },
        }"
      />

      <FloatingMenu/>

    </main>

  </div>
</template>

<script>
import FirstPart from "@/components/site/landing/_firstPart.vue";
import WhyApply from "@/components/site/landing/_whyApply.vue";
import StepSlider from "@/components/site/landing/_stepSlider.vue";
import Panels from "@/components/site/landing/_panels.vue";
import ComingSoon from "@/components/site/landing/_comingSoon.vue";
import CommentsSlider from "@/components/site/landing/_commentsSlider.vue";
import FloatingMenu from "@/components/site/landing/_floatingMenu.vue";
import FixBottomNav from "@/components/site/landing/_fixBottomNav.vue";

export default {
  layout: "siteLayout",
  components: {
    FirstPart,
    WhyApply,
    StepSlider,
    Panels,
    ComingSoon,
    CommentsSlider,
    FloatingMenu,
    FixBottomNav,
  },

  async asyncData({$axios, store}) {
    const {data} = await $axios.get(`v1/pricing`);
    store.commit("Set_Prices", data.prices);
  },

  mounted() {
    console.log('mounted')
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      // if (entry.isIntersecting) {
      //   this.enter = entry.target.getAttribute("id");
      //   console.log(entry.target.getAttribute("id"));
      //   console.log(this.enter);
      // } else {
      //   console.log(this.enter);
      //   this.$store.commit("SET_Position", this.enter);
      // }

      if (entry.target.getAttribute("id") == null) {
        this.$store.commit("SET_Position", "first-part");

      } else {
        if (entry.isIntersecting) {
          this.$store.commit("SET_Position", entry.target.getAttribute("id"));
        }
      }
    },
  },
  head() {
    return {
      title: "اپلای جرمنی | Apply Germany",
    };
  },
  beforeDestroy() {
  },
};
</script>
