<template>
  <div  id="phase_2"  class="steps second-step">
    <div class="right">
      <img src="@/assets/user/images/Faz_2.svg" alt="" />
    </div>
    <div class="left">
      <div class="step-title">
        <span>{{ applyLevels.phase2.title }}</span>
        <h3>{{ applyLevels.phase2.description }}</h3>
      </div>
      <div class="inner-steps">
        <a
          href="#apply-level-modal"
          uk-toggle
          v-for="(phase2ApplyLevel, i) in applyLevels.phase2.data"
          :key="i"
          :class="{ seen: phase2ApplyLevel.seen }"
          @click="selectPhase(phase2ApplyLevel)"
        >
          <div class="counter">
            <span class="latin-font">{{ i + 1 }}</span>
          </div>
          <p>{{ phase2ApplyLevel.title }}</p>
        </a>
      </div>
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

.second-step {
  margin-bottom: 2.5rem;
  .right {
    width: 35%;
    position: sticky;
    top: 0;
  }
  .left {
    width: 60%;
  }
}

@include mobile-device {
  .second-step {
    margin-bottom: 2rem;
    .right {
      order: 2;
    }
    .left {
      order: 1;
    }
  }
}

@include tablet-device {
  .second-step {
    margin-bottom: 2rem;
  }
}
</style>
