<template>
    <div class="steps fourth-step" id="phase_4">
        <div class="right">
            <img alt="" src="@/assets/user/images/Faz_4.svg"/>
        </div>
        <div class="left">
            <div class="step-title">
                <span>{{ applyLevels.phase4.title }}</span>
                <h3>{{ applyLevels.phase4.description }}</h3>
            </div>
            <div class="inner-steps">
                <a
                        :class="{ seen: phase4ApplyLevel.seen }"
                        :key="i"
                        @click="selectPhase(phase4ApplyLevel)"
                        href="#apply-level-modal"
                        uk-toggle
                        v-for="(phase4ApplyLevel, i) in applyLevels.phase4.data"
                >
                    <div class="counter">
                        <span class="latin-font">{{ i + 1 }}</span>
                    </div>
                    <p>{{ phase4ApplyLevel.title }}</p>
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

    .fourth-step {
        margin-top: 5rem;

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
        .fourth-step {
            margin-top: 2rem;

            .right {
                order: 2;
            }

            .left {
                order: 1;
            }
        }
    }

    @include tablet-device {
        .fourth-step {
            margin-top: 2rem;
        }
    }
</style>
