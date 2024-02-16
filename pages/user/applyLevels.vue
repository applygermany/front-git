<template>
    <div>
        <section
                :class="[vuexUserMenuState ? 'collapse' : '']"
                class="wrapper"
                id="apply-level"
        >
            <div class="body" ref="levels">
                <Title/>

                <FirstStep/>

                <SecondStep/>

                <ThirdStep/>

                <FourthStep/>

                <FifthStep/>
            </div>
        </section>

        <client-only>
            <ApplyLevelModal/>
        </client-only>
    </div>
</template>

<script>
    import Title from "@/components/user/applyLevels/_title.vue";
    import FirstStep from "@/components/user/applyLevels/_firstStep.vue";
    import SecondStep from "@/components/user/applyLevels/_secondStep.vue";
    import ThirdStep from "@/components/user/applyLevels/_thirdStep.vue";
    import FourthStep from "@/components/user/applyLevels/_fourthStep.vue";
    import FifthStep from "@/components/user/applyLevels/_fifthStep.vue";
    import ApplyLevelModal from "@/components/user/applyLevels/modal/_applyLevelModal.vue";

    export default {
        layout: "userLayout",
        components: {
            Title,
            FirstStep,
            SecondStep,
            ThirdStep,
            FourthStep,
            FifthStep,
            ApplyLevelModal,
        },
        async asyncData({$auth, store, $axios, redirect}) {
            if (!$auth.loggedIn) redirect("/auth/signin");
            else {
                if ($auth.user.level !== 1) {
                    $auth.logout();
                    redirect("/auth/signin");
                }
            }

            const {data} = await $axios.get(`v1/user/applyLevels`);

            store.commit("applyLevels/SET_ApplyLevels", data);

        },
        mounted() {
            setTimeout(() => {

                if (this.$route.hash) {
                    let hash = this.$route.hash
                    hash = hash.replace('#', '')
                    const anchor = document.getElementById(hash)

                    if (anchor) {
                        document.getElementById('apply-level').scrollTo({
                            top: (anchor.getBoundingClientRect().top + window.scrollY) - 120,
                            behavior: 'smooth'
                        })
                    }
                }

            },100)


        },
        computed: {
            vuexUserMenuState() {
                return this.$store.getters["user/vuexUserMenuState"];
            },
        },
        head() {
            return {
                title: "مراحل اپلای",
            };
        },
    };
</script>

<style lang="scss">
    @import "~/assets/user/scss/_mixins.scss";

    #apply-level .body {
        @include boxshadow();
        background-color: var(--white);
        border-radius: 10px;
        padding: 2.5rem 1.5rem;
    }

    .steps {
        @include fbx-ai-start-jc-between;

        .step-title {
            @include fbx-column-ai-start-jc-start;
            margin-bottom: 3rem;

            span {
                color: var(--black);
                font-size: 0.9rem;
                margin-bottom: 0.75rem;
            }

            h3 {
                color: var(--black);
                font-weight: 800;
                font-size: 0.9rem;
            }
        }

        .inner-steps {
            @include fbx-ai-start-jc-start;
            flex-wrap: wrap;
            margin-left: -0.25rem;
            margin-right: -0.25rem;

            > div,
            > a {
                position: relative;
                width: calc(25% - 1.7rem);
                padding: 1rem 0.5rem;
                margin-left: 0.25rem;
                margin-right: 0.25rem;
                margin-bottom: 1.5rem;
                background: linear-gradient(to right, #f1f0f0 0%, rgba(#f1f0f0, 0) 90%);
                height: 3rem;
                border-radius: 5px;
                border: 1px solid var(--gray);

                .counter {
                    position: absolute;
                    top: -0.2rem;
                    right: 0.8rem;
                    padding-right: 0.25rem;
                    padding-left: 0.25rem;
                    line-height: 10px;
                    background-color: var(--white);

                    span {
                        font-size: 2rem;
                        font-weight: 800;
                        background: linear-gradient(
                                        to bottom,
                                        var(--text-gray) 0%,
                                        var(--white) 70%
                        );
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                }

                p {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--black);
                }

                &.seen {
                    p {
                        color: #d09b31;
                    }
                }
            }
        }
    }

    @include mobile-device {
        #apply-level .body {
            padding: 1.5rem 1rem;
        }

        .steps {
            @include fbx-ai-start-jc-between;
            flex-wrap: wrap;

            .right {
                width: 100% !important;
            }

            .left {
                width: 100% !important;
            }

            .step-title {
                margin-bottom: 2rem;

                span {
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                }

                h3 {
                    font-size: 0.8rem;
                }
            }

            .inner-steps {
                > div,
                > a {
                    width: calc(50% - 1.7rem);

                    .counter {
                        span {
                            font-size: 1.6rem;
                        }
                    }

                    p {
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }

    @include tablet-device {
        #apply-level .body {
            padding: 1.5rem 1rem;
        }

        .steps {
            .step-title {
                margin-bottom: 2rem;

                span {
                    font-size: 0.8rem;
                    margin-bottom: 0.5rem;
                }

                h3 {
                    font-size: 0.8rem;
                }
            }

            .inner-steps {
                > div,
                > a {
                    width: calc(33.33% - 1.7rem);

                    .counter {
                        span {
                            font-size: 1.6rem;
                        }
                    }

                    p {
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }
</style>
