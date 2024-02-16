<template>
  <div class="first current">
    <div class="img">
      <img src="@/assets/user/images/apply-request/picture-2.jpg" alt="" />
      <div class="counter-name">
        <span class="name">سوابـــــــق تحصیلـــــی</span>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <Index v-if="position == 'index'" key="index" />
        <College
          v-else-if="position == 'college'"
          :acceptance="acceptance"
          key="college"
        />
        <Bachelor
          v-else-if="position == 'bachelor'"
          :acceptance="acceptance"
          key="bachelor"
        />
        <Senior
          v-else-if="position == 'senior'"
          :acceptance="acceptance"
          key="senior"
        />
        <SeniorLevel2
          v-else-if="position == 'seniorLevel2'"
          :acceptance="acceptance"
          key="SeniorLevel2"
        />
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import Index from "@/components/user/applyRequest/slider/step2-slides/index.vue";
import College from "@/components/user/applyRequest/slider/step2-slides/_college.vue";
import Bachelor from "@/components/user/applyRequest/slider/step2-slides/_bachelor.vue";
import Senior from "@/components/user/applyRequest/slider/step2-slides/_senior.vue";
import SeniorLevel2 from "@/components/user/applyRequest/slider/step2-slides/_seniorLevel2.vue";

export default {
  components: {
    Index,
    College,
    Bachelor,
    Senior,
    SeniorLevel2,
  },
  mounted() {

  },
  computed: {
    position() {
      return this.$store.getters["applyRequest/position"];
    },
    acceptance() {
      return this.$store.getters["applyRequest/acceptance"];
    },
  },
};
</script>

<style></style>
