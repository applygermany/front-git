<template>
    <aside
            :class="{ active: chatSide == 'list' }"
            class="chat-sidebar"
            key="boxes"
    >
        <form @submit.prevent="">
            <input :value='searchInput' @keyup='changeSearchInput($event.target.value)' placeholder="جستجو"
                   type="search"/>
            <span>جستجو : </span>
            <button>
                <svg
                        class="uk-svg"
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                </svg>
            </button>
        </form>
        <ChatBox :item="item" :key="index" v-for="(item, index) in chatRoomId"/>
    </aside>
</template>

<script>
    import ChatBox from "@/components/user/header/_chatBox.vue";

    export default {
        components: {
            ChatBox,
        },
        computed: {
            chatSide() {
                return this.$store.getters["user/chatSide"];
            },
            chatRoomId() {
                function compare(a, b) {
                    if (!a.unreads) {
                        a.unreads = 0;
                    }
                    if (!b.unreads) {
                        b.unreads = 0;
                    }
                    if (a.unreads < b.unreads) return 1;
                    if (a.unreads > b.unreads) return -1;
                    return 0;
                }
                function compare2(a, b) {
                    // console.log(a.last_timestamp_message)
                    // console.log(b.last_timestamp_message)
                    let date = new Date(a.last_timestamp_message);
                    let a_last_message_timestamp = date.getTime();
                    date = new Date(b.last_timestamp_message);
                    let b_last_message_timestamp = date.getTime();

                    if (isNaN(a_last_message_timestamp)){
                        return 1;
                    }
                    if (isNaN(b_last_message_timestamp)){
                        return -1;
                    }
                    if (a_last_message_timestamp < b_last_message_timestamp) return 1;
                    if (a_last_message_timestamp > b_last_message_timestamp) return -1;

                    return 0;
                }

                let chats = this.$store.getters["chat/chatRoomId"];
                chats = chats.sort(compare)
                chats = chats.sort(compare2)
                let distinct = []
                for (let i = 0; i < chats.length; i++) {
                    if (!distinct.includes(chats[i].id)) {
                        distinct.push(chats[i].id)
                    }
                }
                return distinct.map(id => chats.filter(chat => chat.id == id)[0]).filter(e => e !== null);
            },
            openInChat() {
                return this.$store.getters["chat/openInChat"];
            },
            searchInput() {
                return this.$store.getters["chat/searchInput"];
            },
        },
        methods: {
            changeSearchInput(val) {
                this.$store.commit('chat/Change_SearchInput', val)
            }
        },
    };
</script>

<style></style>
