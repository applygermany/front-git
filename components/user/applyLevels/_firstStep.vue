<template>
  <div id="phase_1" class="steps first-step">
    <div class="right">
      <div class="step-title">
        <span>{{ applyLevels.phase1.title }}</span>
        <h3>{{ applyLevels.phase1.description }}</h3>
      </div>
      <div class="inner-steps">
        <a
          href="#apply-level-modal"
          uk-toggle
          v-for="(phase1ApplyLevel, i) in applyLevels.phase1.data"
          :key="i"
          :class="{ seen: phase1ApplyLevel.seen }"
          @click="selectPhase(phase1ApplyLevel)"
        >
          <div class="counter">
            <span class="latin-font">{{ i + 1 }}</span>
          </div>
          <p>{{ phase1ApplyLevel.title }}</p>
        </a>
      </div>
    </div>
    <div class="left">
      <img src="@/assets/user/images/Faz_1.svg" alt="" />
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

.first-step {
  margin-bottom: 2.5rem;
  .right {
    width: 60%;
  }
  .left {
    width: 35%;
    position: sticky;
    top: 0;
  }
}

@include mobile-device {
  .first-step {
    margin-bottom: 2rem;
  }
}

@include tablet-device {
  .first-step {
    margin-bottom: 2rem;
  }
}
</style>
