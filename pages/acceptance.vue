<template>
    <div>
        <main class="main" id="landing6">
            <section class="landing-title uk-container">
                <h1 class="title-font">پذیرفته شدگان</h1>
            </section>

            <section class="uk-container">
                <div
                        :class="{ 'skeleton-df': acceptance.length === 0 }"
                        class="accept-boxes"
                >
                    <Box
                            :item="item"
                            :key="index"
                            v-for="(item, index) in acceptance.data"
                    />

                    <Skeleton
                            height="480px"
                            v-if="acceptance.length === 0"
                            width="378px"
                    />
                    <Skeleton
                            height="480px"
                            v-if="acceptance.length === 0"
                            width="378px"
                    />
                    <Skeleton
                            height="480px"
                            v-if="acceptance.length === 0"
                            width="378px"
                    />
                </div>
                <client-only>
                    <div class="load-more w-100">
                        <button
                                @click="nextPage"
                                type="button"

                        >
                            مشاهده بیشتر
                        </button>
                    </div>
                </client-only>
            </section>
            <a
                    class="to-top uk-icon uk-totop d-none"
                    href="#"
                    id="to_top"
                    uk-scroll
                    uk-totop
                    v-if="showToTop"
            ></a>
            <client-only>
                <AdmissionModal/>
                <VideoModal/>
            </client-only>
        </main>

        <CoolLightBox
                :index="lightBoxIndex"
                :items="acceptanceImages"
                @close="setLightBoxNull"
        ></CoolLightBox>
    </div>
</template>

<script>
    import Box from "@/components/site/acceptance/_box.vue";
    import AdmissionModal from "@/components/site/acceptance/modal/_admissionModal.vue";
    import VideoModal from "@/components/site/acceptance/modal/_videoModal.vue";
    import CoolLightBox from "vue-cool-lightbox";
    import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

    export default {
        layout: "siteLayout",
        data() {
            return {
                showToTop: false,
            };
        },
        beforeMount() {
            window.addEventListener('scroll', this.handleScroll)
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.handleScroll)
        },
        components: {
            Box,
            AdmissionModal,
            VideoModal,
            CoolLightBox,
        },

        async asyncData({store, $axios}) {
            const {data} = await $axios.get("v1/accepteds");
            if (data.data) {
                store.commit("Set_Acceptance", {
                    data: data.data.data,
                    currentPage: data.data.current_page,
                    lastPage: data.data.last_page,
                });
            }
        },
        computed: {
            acceptance() {
                return this.$store.getters.acceptance;
            },
            lightBoxIndex() {
                console.log("lightBoxIndex");
                return this.$store.getters.lightBoxIndex == null
                    ? null
                    : this.acceptanceImages.length - this.$store.getters.lightBoxIndex - 1;
            },
            acceptanceImages() {
                console.log("acceptanceImages");
                let images = [...this.$store.getters.acceptanceImages];
                images.reverse();
                console.log(images);
                return images.filter((e) => e != null && e != "");
            },
            pageDifferent() {
                return this.acceptance.lastPage - this.acceptance.currentPage;
            },
        },
        methods: {
            handleScroll() {
                this.showToTop = window.scrollY >= 150;
            },
            setLightBoxNull() {
                this.$store.commit("Set_LightBoxIndex", null);
            },
            async infiniteHandler($state) {
                await this.$axios
                    .get(`v1/accepteds?page=${this.acceptance.currentPage + 1}`)
                    .then((res) => {
                        const allData = [
                            ...this.$store.state.acceptance.data,
                            ...res.data.data.data,
                        ];
                        if (allData.length) {
                            this.$store.commit("Set_Acceptance", {
                                data: allData,
                                currentPage: res.data.data.current_page,
                                lastPage: res.data.data.last_page,
                            });
                            $state.loaded();
                        } else {
                            $state.complete();
                        }
                    });
            },
            async nextPage() {
                await this.$axios
                    .get(`v1/accepteds?page=${this.acceptance.currentPage + 1}`)
                    .then((res) => {
                        const allData = [
                            ...this.$store.state.acceptance.data,
                            ...res.data.data.data,
                        ];
                        if (allData.length) {
                            this.$store.commit("Set_Acceptance", {
                                data: allData,
                                currentPage: res.data.data.current_page,
                                lastPage: res.data.data.last_page,
                            });

                        } else {

                        }
                    });
            },
        },

        head() {
            return {
                title: "صفحه پذیرفته شدگان",
            };
        },
    };
</script>

<style lang="scss" scoped>

    @import "@/assets/site/css/mixins.scss";

    .load-more {
        width: 100%;
        justify-content: center;
        display: flex;
       button{
         width: fit-content;
       }
    }

    button {
        cursor: pointer;
        color: var(--white);
        background-color: #e6c55b;
        width: 15%;
        font-size: 0.8rem;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
        font-weight: 600;
        border-radius: 5px;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        border: 0;
    }

    .to-top {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        background-color: var(--gray);
        bottom: 4rem;
        right: 1.5rem;
    }

    .skeleton-df {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    #landing6 {
        .accept-boxes {
            @include fbx-ai-start-jc-start;
            flex-wrap: wrap;
            margin-left: -1rem;
            margin-right: -1rem;
        }

        .see-more {
            margin-top: 1.5rem;
            text-align: center;

            a {
                background-color: var(--main-color);
                color: var(--white);
                font-size: 0.9rem;
                border-radius: 5px;
                width: 50%;
                text-align: center;
                padding: 0.5rem 3.5rem;
            }
        }
    }

    @include mobile-device {
        #landing6 {
            .accept-boxes {
                margin-left: 0;
                margin-right: 0;
            }

            .see-more {
                margin-top: 1rem;

                a {
                    font-size: 0.75rem;
                    padding: 0.5rem 3rem;
                }
            }
        }
    }

    @include tablet-device {
        #landing6 {
            .see-more {
                margin-top: 1rem;

                a {
                    font-size: 0.75rem;
                    padding: 0.5rem 3rem;
                }
            }
        }
    }
</style>
