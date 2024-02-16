<template>
    <div>
        <section
                :class="[vuexUserMenuState ? 'collapse' : '']"
                class="wrapper"
                id="apply-request2"
        >
            <div class="navbar">
                <div :class="{ 'active-nav': true }">
                    <span>1</span> <span>اطلاعات شخصی</span>
                </div>
                <div :class="{ 'active-nav': acceptance && acceptance.birth_date != null }">
                    <span>2</span> <span>سوابق تحصیلی</span>
                </div>
                <div :class="{ 'active-nav': acceptance && acceptance.diploma_grade_average != null }">
                    <span>3</span> <span>وضعیت خدمت</span>
                </div>
                <div :class="{ 'active-nav': acceptance && acceptance.military_service != null }">
                    <span>4</span> <span>وضعیت زبان</span>
                </div>
                <div :class="{ 'active-nav': acceptance && acceptance.language_favor != null }">
                    <span>5</span> <span>وضعیت مدارک</span>
                </div>
                <div><span>6</span> <span>توضیحات</span></div>
            </div>
            <div class="body">
                <client-only>
                    <div
                            class="uk-position-relative uk-visible-toggle uk-light"
                            draggable="false"
                            finite="true"
                            tabindex="-1"
                            uk-slider
                    >
                        <ul class="uk-slider-items">
                            <li>
                                <Step1/>
                            </li>
                            <li>
                                <Step2/>
                            </li>
                            <li>
                                <Step3/>
                            </li>
                            <li>
                                <Step4/>
                            </li>
                            <li>
                                <Step5/>
                            </li>
                            <li>
                                <Step6/>
                            </li>
                            <li style="opacity: 0"></li>
                        </ul>
                    </div>
                </client-only>
            </div>
        </section>

        <a
                href="#start-tel-support-modal"
                ref="start_modal_trigger"
                style="display: none"
                uk-toggle
        ></a>
        <TelSupportModal/>

    </div>
</template>

<script>
import Step1 from "@/components/user/telSupports/slider/_step1.vue";
import Step2 from "@/components/user/telSupports/slider/_step2.vue";
import Step3 from "@/components/user/telSupports/slider/_step3.vue";
import Step4 from "@/components/user/telSupports/slider/_step4.vue";
import Step5 from "@/components/user/telSupports/slider/_step5.vue";
import Step6 from "@/components/user/telSupports/slider/_step6.vue";
import TelSupportModal from "@/components/user/layoutModal/_telSupportModal.vue";

export default {
    props: ["acceptance"],
    layout: "userLayout",
    components: {
        TelSupportModal,
        Step1,
        Step2,
        Step3,
        Step4,
        Step5,
        Step6,
    },
    async asyncData({$auth, store, $axios, redirect}) {
        if (!$auth.loggedIn) redirect("/auth/signin");
        else {
            if ($auth.user.level !== 1) {
                $auth.logout();
                redirect("/auth/signin");
            }
        }
        const {data} = await $axios.get(`v1/user/acceptance`);
        store.commit("applyRequest/SET_Acceptance", data.acceptance);
    },
    mounted() {
        if (!this.$store.getters["applyRequest/acceptance"].city) {
            setTimeout(() => {
                this.$refs.start_modal_trigger.click();
            }, 1000);
        }
    },
    computed: {
        vuexUserMenuState() {
            return this.$store.getters["user/vuexUserMenuState"];
        },
        acceptance() {
            return this.$store.getters["applyRequest/acceptance"];
        },
    },
    methods: {},
    head() {
        return {
            title: "فرم مشاوره تلفنی",
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

@include mobile-device {
  .navbar {
    display: none !important;
  }
}

.swiper-slide {
  width: 80%;
  display: flex;
}

.active-nav {
  color: var(--main-color) !important;
  border-color: var(--main-color) !important;
}
</style>
