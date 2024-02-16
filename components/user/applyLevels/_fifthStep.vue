<template>
  <div  id="phase_5"  class="steps fifth-step">
    <div class="right">
      <div class="step-title">
        <span>{{ applyLevels.phase5.title }}</span>
        <h3>{{ applyLevels.phase5.description }}</h3>
      </div>
      <div class="inner-steps">
        <a
          href="#apply-level-modal"
          uk-toggle
          v-for="(phase5ApplyLevel, i) in applyLevels.phase5.data"
          :key="i"
          :class="{ seen: phase5ApplyLevel.seen }"
          @click="selectPhase(phase5ApplyLevel)"
        >
          <div class="counter">
            <span class="latin-font">{{ i + 1 }}</span>
          </div>
          <p>{{ phase5ApplyLevel.title }}</p>
        </a>
      </div>
    </div>
    <div class="left">
      <img src="@/assets/user/images/Faz_5.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    selectPhase(phase) {
      this.$store.dispatch("applyLevels/setApplyLevelPhase", phase);
    },
  },
  computed: {
    applyLevels() {
      return this.$store.getters["applyLevels/applyLevels"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.fifth-step {
  margin-top: 5em;
  .right {
    width: 60%;
    align-self: center;
  }
  .left {
    width: 35%;
    position: sticky;
    top: 0;
  }
}

@include mobile-device {
  .fifth-step {
    margin-top: 2rem;
  }
}

@include tablet-device {
  .fifth-step {
    margin-top: 2rem;
  }
}
</style>
