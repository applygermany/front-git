<template>
    <div>
        <div id="app">
            <Header/>
            <main class="main">
                <div
                        class="shadow"
                        :class="{ active: chatSide != '' }"
                        @click="$store.commit('user/Set_ChatSide', '')"
                ></div>
                <Aside/>
                <nuxt/>
            </main>
        </div>

        <client-only>
            <VuexUserNormalUserModal/>
            <VuexUserSpecialUserModal/>
            <VuexUserExpertBannedModal/>
            <PollModal/>
            <DoneDutyModal/>
        </client-only>
    </div>
</template>

<script>
import Header from "~/components/user/header/index.vue";
import Aside from "~/components/user/Aside";
import VuexUserNormalUserModal from "~/components/user/layoutModal/_vuexUserNormalUserModal.vue";
import VuexUserSpecialUserModal from "~/components/user/layoutModal/_vuexUserSpecialUserModal.vue";
import VuexUserExpertBannedModal from "~/components/user/layoutModal/_vuexUserExpertBannedModal.vue";
import PollModal from "~/components/user/layoutModal/_pollModal.vue";
import DoneDutyModal from "~/components/user/layoutModal/_doneDutyModal.vue";

export default {
    components: {
        Header,
        Aside,
        VuexUserNormalUserModal,
        VuexUserSpecialUserModal,
        VuexUserExpertBannedModal,
        PollModal,
        DoneDutyModal
    },
    computed: {
        chatSide() {
            return this.$store.getters["user/chatSide"];
        },
    },
    beforeMount() {
        if (this.$store.getters.fromLand && false) location.reload();
        else this.checkMode();

        this.$socket.startSocket();
    },
    beforeDestroy() {
        if (window.socket) window.socket.disconnect();

        setTimeout(
            () => document.querySelector("html").classList.remove("dark-mode"),
            300
        );
    },
    watch: {
        $route() {
            this.checkMode();
        },
    },
    methods: {
        checkMode() {
            if (this.$auth.user.darkmode === 1) {
                document.querySelector("html").classList.add("dark-mode");
            } else {
                document.querySelector("html").classList.remove("dark-mode");
            }
        },
    },
};
</script>
<style lang="scss">
@import "~/assets/user/scss/main.scss";
</style>
