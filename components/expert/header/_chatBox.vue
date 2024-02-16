<template>
    <a @click="openChat" class="item">
        <div class="img">
            <img  v-if="item.img !== ''" :id="'chatroom_'+item.id" :src=item.img alt="" class="user-pic"
                 @error="onImageError"/>
            <img alt="" src="/user_light.svg" v-else-if="!darkMode"/>
            <img alt="" src="/user_dark.svg" v-else/>
        </div>
        <div class="name-text">
            <p class="name">{{ `${item.firstname} ${item.lastname}` }}</p>
            <p class="text" v-if='item.last_message != 0 && item.last_type_message == "text"'>
                <template v-if='item.last_message.length > 39'>
                    {{ item.last_message.slice(0,39) }}...
                </template>
                <template v-else>
                    {{ item.last_message}}
                </template>
            </p>

            <p v-else-if='item.last_type_message == "image"'>
                file
            </p>
            <p v-else-if='item.last_type_message == "file"'>
                file
            </p>
            <p v-else-if='item.last_type_message == "audio"'>
                audio
            </p>
        </div>
        <div class="date-unread">
    <span class="date" v-if='item.last_timestamp_message != 0'>
        {{ item.last_timestamp_message ? new Date(item.last_timestamp_message).toLocaleDateString('fa-IR') : "-" }}
        </span>
            <span class="unread" v-if="item.unreads > 0">{{item.unreads}}</span>
        </div>
    </a>
</template>
<script>
    export default {
        props: ["item"],
        computed: {

            darkMode(){
                const updatedUser = {...this.$auth.user};

                return updatedUser.darkmode === 1;
            },
        },
        methods: {
            onImageError() {
                if (document.getElementById('chatroom_'+this.item.id)) {
                    document.getElementById('chatroom_' + this.item.id).src = '/user_light.svg';
                }
                // $("#"+id).attr('src','test')
            },
            openChat() {
                this.$store.commit("expert/Set_ChatSide", "chat");
                this.$store.commit("chat/Change_OpenInChat");
                this.$store.commit("chat/Set_ChatInfo", this.item);
                this.$store.commit("chat/Clear_Unreads", this.item.id);
                this.$socket.change(this.item.id);
            },
        },
        created() {
            console.log(this.item.img)
        },
    };
</script>
<style></style>
