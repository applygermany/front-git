<template>
        <div class="success-status">
            <div class="right">
                <h3>وضعیت پیشرفت اپلای</h3>
                <p>دانشنـــامه گام‌به‌گام اپلای آلمــان با کامل‌ترین جزئیات</p>
                <div class="all-steps">
                    <nuxt-link class="each-step" to="/user/applyLevels#phase_1">
                        <div class="progress">
                            <div
                                    :class="
                `progress--circle progress--` +
                userApplyLevelStatus.phase1.percent
              "
                            >
                                <div class="progress__number">
                                    {{ userApplyLevelStatus.phase1.percent }}%
                                </div>
                            </div>
                        </div>
                        <div class="text">
                            <span>{{ userApplyLevelStatus.phase1.data.title }}</span>
                            <span>{{ userApplyLevelStatus.phase1.data.description }}</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link class="each-step" to="/user/applyLevels#phase_2">
                        <div class="progress">
                            <div
                                    :class="
                `progress--circle progress--` +
                userApplyLevelStatus.phase2.percent
              "
                            >
                                <div class="progress__number">
                                    {{ userApplyLevelStatus.phase2.percent }}%
                                </div>
                            </div>
                        </div>
                        <div class="text">
                            <span>{{ userApplyLevelStatus.phase2.data.title }}</span>
                            <span>{{ userApplyLevelStatus.phase2.data.description }}</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/user/applyLevels#phase_3" class="each-step">
                        <div class="progress">
                            <div
                                    :class="
                `progress--circle progress--` +
                userApplyLevelStatus.phase3.percent
              "
                            >
                                <div class="progress__number">
                                    {{ userApplyLevelStatus.phase3.percent }}%
                                </div>
                            </div>
                        </div>
                        <div class="text">
                            <span>{{ userApplyLevelStatus.phase3.data.title }}</span>
                            <span>{{ userApplyLevelStatus.phase3.data.description }}</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/user/applyLevels#phase_4" class="each-step">
                        <div class="progress">
                            <div
                                    :class="
                `progress--circle progress--` +
                userApplyLevelStatus.phase4.percent
              "
                            >
                                <div class="progress__number">
                                    {{ userApplyLevelStatus.phase4.percent }}%
                                </div>
                            </div>
                        </div>
                        <div class="text">
                            <span>{{ userApplyLevelStatus.phase4.data.title }}</span>
                            <span>{{ userApplyLevelStatus.phase4.data.description }}</span>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/user/applyLevels#phase_5" class="each-step">
                        <div class="progress">
                            <div
                                    :class="
                `progress--circle progress--` +
                userApplyLevelStatus.phase5.percent
              "
                            >
                                <div class="progress__number">
                                    {{ userApplyLevelStatus.phase5.percent }}%
                                </div>
                            </div>
                        </div>
                        <div class="text">
                            <span>{{ userApplyLevelStatus.phase5.data.title }}</span>
                            <span>{{ userApplyLevelStatus.phase5.data.description }}</span>
                        </div>
                    </nuxt-link>
                    <div class="each-step total">
                        <div class="progress">
                            <ProgressPerback/>
                            <span class="percent">{{ userApplyLevelStatus.total }}%</span>
                        </div>
                        <div class="text"><span>درصد کلی پیشرفت</span></div>
                    </div>
                </div>
            </div>
            <div class="left">
                <div class="img">
                    <img alt="" src="/user/assets/user/dashboard1..svg"/>
                </div>
                <!--      <div class="faq"><nuxt-link to="/faq"  >سوالات متداول</nuxt-link></div>-->
            </div>
        </div>
</template>

<script>
    import ProgressPerback from "@/components/svg/progress-perback.vue";

    export default {
        components: {
            ProgressPerback,
        },
        computed: {
            userApplyLevelStatus() {
                return this.$store.getters["user/userApplyLevelStatus"];
            },
        },
    };
</script>

<style lang="scss" scoped>
    @use "sass:math";
    @import "~/assets/user/scss/_mixins.scss";

    .success-status {
        margin-bottom: 2rem;
        @include boxshadow();
        padding: 2rem;
        border-radius: 8px;
        background-color: #d0cdc7;
        border: 1px solid var(--white);
        @include fbx-ai-start-jc-between;

        h3 {
            font-weight: 800;
            font-size: 1.2rem;
            color: #2b2827;
        }

        p {
            margin-top: 1rem;
            font-size: 0.8rem;
            color: #2b2827;
            font-weight: 500;
        }

        .right {
            width: 70%;

            .all-steps {
                margin-top: 2rem;
                @include fbx-ai-start-jc-between;
                align-items: stretch;
                flex-wrap: wrap;

                .each-step {
                    @include fbx-ai-center-jc-start;
                    border: 1px solid #a5a29b;
                    border-radius: 5px;
                    padding: 0.5rem;
                    width: 30%;
                    margin-bottom: 1rem;

                    .progress {
                        .progress--circle {
                            position: relative;
                            display: inline-block;
                            width: 3rem;
                            height: 3rem;
                            border-radius: 50%;
                            background-color: #a5a29b;

                            &:before {
                                content: "";
                                position: absolute;
                                top: 0.12rem;
                                left: 0.15rem;
                                width: 2.75rem;
                                height: 2.75rem;
                                border-radius: 50%;
                                background-color: #d0cdc7;
                            }

                            &:after {
                                content: "";
                                display: inline-block;
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                background-color: #2b2827;
                            }
                        }

                        .progress__number {
                            position: absolute;
                            top: 50%;
                            width: 100%;
                            line-height: 1;
                            margin-top: -0.35rem;
                            text-align: center;
                            font-size: 0.9rem;
                            font-weight: 500;
                            color: #2b2827;
                        }

                        $step: 1;
                        $loops: calc(100 / $step);
                        $increment: calc(360 / $loops);
                        $half: calc($loops / 2);
                        @for $i from 0 through $loops {
                            .progress--bar.progress--#{calc($i * $step)}:after {
                                width: calc($i * $step * 1%);
                            }
                            .progress--circle.progress--#{calc($i * $step)}:after {
                                @if $i < $half {
                                    $nextDeg: #{calc(90 + calc($increment * $i))}deg;
                                    background-image: linear-gradient(
                                                    90deg,
                                                    #a5a29b 50%,
                                                    transparent 50%,
                                                    transparent
                                    ),
                                    linear-gradient($nextDeg, #2b2827 50%, #a5a29b 50%, #a5a29b);
                                } @else {
                                    $nextDeg: #{-90 + calc($increment * calc($i - $half))}deg;
                                    background-image: linear-gradient(
                                                    $nextDeg,
                                                    #2b2827 50%,
                                                    transparent 50%,
                                                    transparent
                                    ),
                                    linear-gradient(270deg, #2b2827 50%, #a5a29b 50%, #a5a29b);
                                }
                            }
                        }
                    }

                    .text {
                        margin-right: 1rem;
                        @include fbx-column-ai-start-jc-start;

                        span:first-child {
                            color: #2b2827;
                            font-size: 0.9rem;
                            margin-bottom: 0.5rem;
                            font-weight: 500;
                        }

                        span:last-child {
                            color: #2b2827;
                            font-size: 0.8rem;
                            font-weight: 600;
                            line-height: 1.8rem;
                        }
                    }

                    &.total {
                        background-color: #e3dfda;

                        .progress {
                            position: relative;

                            svg {
                                width: 70%;
                                fill: none;
                                color: white;
                            }

                            .percent {
                                position: absolute;
                                right: 1rem;
                                top: 1rem;
                                font-weight: 700;
                                color: #2b2827;
                                font-size: 1.2rem;
                            }
                        }

                        .text {
                            margin-right: -0.5rem;

                            span {
                                margin-bottom: 0;
                                color: #65615c;
                                font-size: 0.9rem;
                                font-weight: 700;
                            }
                        }
                    }
                }
            }
        }

        .left {
            position: relative;
            width: 25%;
            @include fbx-ai-center-jc-between;

            .faq {
                text-align: center;
                position: absolute;
                transform: rotate(-90deg);
                border-bottom: 1px solid #a5a29b;
                left: -8rem;
                width: 100%;
                padding-bottom: 0.5rem;

                a {
                    color: #2b2827;
                    font-weight: 600;
                    font-size: 0.8rem;
                }
            }
        }
    }

    @include mobile-device {
        .success-status {
            margin-bottom: 2rem;
            padding: 1rem;

            h3 {
                font-size: 1rem;
            }

            p {
                font-size: 0.75rem;
            }

            .right {
                width: 100%;

                .all-steps {
                    margin-top: 1.5rem;

                    .each-step {
                        @include fbx-column-ai-center-jc-center;
                        justify-content: flex-start;
                        width: 40%;

                        .progress {
                            .progress--circle {
                                width: 2.75rem;
                                height: 2.75rem;

                                &:before {
                                    top: 0.13rem;
                                    width: 2.5rem;
                                    height: 2.5rem;
                                }
                            }
                        }

                        .text {
                            align-items: center;
                            text-align: center;
                            margin-right: 0;

                            span:first-child {
                                font-size: 0.8rem;
                            }

                            span:last-child {
                                font-size: 0.75rem;
                                line-height: 1.5rem;
                            }
                        }

                        &.total {
                            .progress {
                                text-align: center;

                                .percent {
                                    right: 1.75rem;
                                    font-size: 1rem;
                                }
                            }

                            .text {
                                margin-top: 0.5rem;
                                margin-right: 0;

                                span {
                                    font-size: 0.9rem;
                                }
                            }
                        }
                    }
                }
            }

            .left {
                display: none;
            }
        }
    }

    @include tablet-device {
        .success-status {
            margin-bottom: 2rem;
            padding: 1rem;

            h3 {
                font-size: 1rem;
            }

            p {
                font-size: 0.75rem;
            }

            .right {
                width: 100%;

                .all-steps {
                    margin-top: 1.5rem;

                    .each-step {
                        @include fbx-column-ai-center-jc-center;
                        justify-content: flex-start;
                        width: 30%;

                        .progress {
                            .progress--circle {
                                width: 2.75rem;
                                height: 2.75rem;

                                &:before {
                                    top: 0.13rem;
                                    width: 2.5rem;
                                    height: 2.5rem;
                                }
                            }
                        }

                        .text {
                            align-items: center;
                            text-align: center;
                            margin-right: 0;

                            span:first-child {
                                font-size: 0.8rem;
                            }

                            span:last-child {
                                font-size: 0.75rem;
                                line-height: 1.5rem;
                            }
                        }

                        &.total {
                            .progress {
                                text-align: center;

                                .percent {
                                    right: 1.75rem;
                                    font-size: 1rem;
                                }
                            }

                            .text {
                                margin-top: 0.5rem;
                                margin-right: 0;

                                span {
                                    font-size: 0.9rem;
                                }
                            }
                        }
                    }
                }
            }

            .left {
                display: none;
            }
        }
    }

    @include large-device {
        .success-status {
            .right {
                width: 100%;

                .all-steps {
                    .each-step {
                        @include fbx-column-ai-center-jc-center;
                        justify-content: flex-start;
                        width: 30%;

                        .text {
                            align-items: center;
                            text-align: center;
                            margin-right: 0;
                        }

                        &.total {
                            .progress {
                                text-align: center;

                                .percent {
                                    right: 1.75rem;
                                }
                            }

                            .text {
                                margin-right: 0;
                            }
                        }
                    }
                }
            }

            .left {
                display: none;
            }
        }
    }
</style>
