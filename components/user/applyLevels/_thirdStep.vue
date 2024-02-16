<template>
  <div  id="phase_3"  class="steps third-step">
    <div class="right">
      <div class="step-title">
        <span>{{ applyLevels.phase3.title }}</span>
        <h3>{{ applyLevels.phase3.description }}</h3>
      </div>
      <div class="inner-steps">
        <a
          href="#apply-level-modal"
          uk-toggle
          v-for="(phase3ApplyLevel, i) in applyLevels.phase3.data"
          :key="i"
          :class="{ seen: phase3ApplyLevel.seen }"
          @click="selectPhase(phase3ApplyLevel)"
        >
          <div class="counter">
            <span class="latin-font">{{ i + 1 }}</span>
          </div>
          <p>{{ phase3ApplyLevel.title }}</p>
        </a>
      </div>
    </div>
    <div class="left">
      <img src="@/assets/user/images/Faz_3.svg" alt="" />
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
.third-step {
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
</style>
