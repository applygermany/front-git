<template>
    <div class="list__items">
        <Box :key="index" :user="user" v-for="(user, index) in users"/>

        <client-only>
            <infinite-loading
                    @infinite="infiniteHandler"
                    spinner="bubbles"
                    v-if="usersCountLimit != users.length"
            ></infinite-loading>

            <WriteCommentModal/>

            <UpgradeUserModal/>
            <ConfirmUpgradeUserModal/>
            <DowngradeUserModal/>
            <ToggleUploadAccessModal/>
        </client-only>
    </div>
</template>

<script>
    import WriteCommentModal from "@/components/expert/dashboard/modal/_writeCommentModal.vue";
    import DowngradeUserModal from "@/components/expert/dashboard/modal/_downgradeUserModal.vue";
    import UpgradeUserModal from "@/components/expert/dashboard/modal/_upgradeUserModal.vue";
    import ConfirmUpgradeUserModal from "@/components/expert/dashboard/modal/_confirmUpgradeUserModal.vue";
    import ToggleUploadAccessModal from "@/components/expert/dashboard/modal/_toggleUploadAccess.vue";
    import Box from "@/components/expert/dashboard/_box.vue";

    export default {
        components: {
            WriteCommentModal,
            Box,
            DowngradeUserModal,
            ToggleUploadAccessModal,
            UpgradeUserModal,
            ConfirmUpgradeUserModal
        },
        computed: {
            users() {
                let users = this.$store.getters["expert/users"];
                return users ? this.$store.getters["expert/users"] : [];
            },
            filterForm() {
                return this.$store.getters["expert/filterForm"];
            },
            usersCountLimit() {
                return this.$store.getters["expert/usersCountLimit"];
            },
        },
        methods: {

            async infiniteHandler($state) {
                await this.$axios
                    .post(`v1/expert/getAllUser`, {
                        ...this.filterForm,
                        take: this.users ? this.users.length + 10 : 10,
                    })
                    .then((res) => {
                        if (res.data && res.data.users) {
                            if (res.data.users.length) {
                                this.$store.commit("expert/SET_Users", res.data.users);
                                $state.loaded();
                            } else {
                                $state.complete();
                            }
                        } else {

                            $state.complete();

                        }
                    });
            },
        },
    };
</script>
