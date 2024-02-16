<template>
    <div id="submit-apply-request-modal" class="apply-request-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>توجه</p>

                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
            <div class="text">
                <p>
                    شمـا در حال ثبت درخواست برای مقطع {{ acceptance.admittance }} هستیـد.
                    لطفـا توجه داشته باشیـد که پس از ثبت درخواست، امکـان تغییـر اطلاعـات
                    وجود نـدارد!
                </p>
                <div class="buttons">
                    <a class="change uk-modal-close" @click="submitStep6">
                        ثبت درخواست
                    </a>
                    <nuxt-link to="/user/dashboard" class="cancel uk-modal-close">
                        انصراف
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
    data() {
        return {
            submitting: false,
        };
    },
    computed: {
        acceptance() {
            return this.$store.getters["applyRequest/acceptance"];
        },
        fromTelSupport() {
            return this.$store.getters["user/fromTelSupport"];
        },
    },
    methods: {
        async submitStep6() {
            if ((this.data.applyPercent !== -1 && this.data.timeStatus !== null) ||
                !this.fromTelSupport) {
                if (this.submitting === false) {
                    this.submitting = true;
                    this.data.packageId = this.$route.params.id;
                    const submitStep6 = await this.$axios.post(
                        "v1/user/submitStep6",
                        this.data
                    );
                    if (submitStep6.data.status === 1) {
                        // this.$toasted.success(submitStep6.data.msg, {
                        //   position: "bottom-left",
                        //   duration: 5000,
                        // });

                        this.$auth.fetchUser();

                        const {data} = await this.$axios.get(`v1/user/dashboard`);
                        this.$store.commit("user/Set_user_version", data.user_version);
                        if (data.user) {
                            this.$store.commit("user/Set_User", data.user);
                            this.$store.commit("chat/Set_votes", data.votes);
                            this.$store.commit("user/Set_Acceptance", data.acceptance);
                            this.$store.commit("user/Set_UserApplyLevelStatus", data.userApplyLevelStatus);
                            this.$store.commit("user/Set_UserDuties", data.userDuties);
                            this.$store.commit(
                                "user/Set_UserSupervisorFirstTelSupport",
                                data.userSupervisorFirstTelSupport
                            );
                            this.$store.commit("user/Set_UserSupervisor", data.userSupervisor);
                            this.$store.commit("user/Set_UserSupport", data.userSupport);
                            this.$store.commit("user/Set_Transactions", data.transactions);
                            this.$store.commit("user/Set_Users", data.users);
                            this.$store.commit("user/Set_Profile", data.user);
                            this.$store.commit("user/Set_Balance", data.balance);
                        }
                        await this.$router.push('/user/telSupports')

                    } else if (submitStep6.data.status === 422) {
                        this.errors = submitStep6.data.errors;
                        this.$toasted.info(submitStep6.data.msg, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                    } else {
                        this.$toasted.error(submitStep6.data.msg, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                    }
                    this.submitting = false;
                }
            } else {
                this.$toasted.error('به سوالات مرحله 6 پاسخ دهید', {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
        },
    },
};
</script>

<style></style>
