<template>
    <aside :class="{ active: chatSide == 'note' }" class="message-sidebar">
        <div
                :class="{ 'item-new': msg.is_read == 0 }"
                :key="index"
                class="item"
                v-for="(msg, index) in notification"
                v-if="checkVote(msg)"
        >
            <div class="title">
                <p>
                    <img
                            alt=""
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPg0KICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzEzNDciIGRhdGEtbmFtZT0iRWxsaXBzZSAxMzQ3IiBjeD0iNC41IiBjeT0iNC41IiByPSI0LjUiIGZpbGw9IiNlMmFkNDIiLz4NCjwvc3ZnPg0K"
                    />
                    {{ msg.title }}
                </p>
                <span class="date">{{
                    new Date(msg.timestamp)
                        .toLocaleDateString("fa-IR", {
                          timeZone: "Asia/Tehran",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                        .split("،‏")
                        .reverse()
                        .join(" - ")
                    }}</span>
            </div>
            <div class="text">
                <p>
                    {{ msg.body }}
                </p>
                <div class="poll_action"
                     v-if='msg.arguments !== "" && msg.arguments !== null && msg.arguments.includes("apply_level_id")'>
                    <a uk-toggle href="#done-duty-modal" @click='dutyInfo(msg.arguments,msg)'>انجام وظیفه</a>
                </div>
                <div class="poll_action"
                     v-else-if='msg.arguments !== "" && msg.arguments !== null && canVote(msg.arguments) && (JSON.parse(msg.arguments)).type !== "fromExpert"'>
                    <a uk-toggle href="#poll-modal" @click='pollInfo(msg.arguments,msg.timestamp,msg,false)'>شرکت در
                        نظرسنجی</a>
                </div>
                <div class="poll_action"
                     v-else-if='msg.arguments !== "" && msg.arguments !== null && canVote(msg.arguments)'>
                    <a @click='pollInfo(msg.arguments,msg.timestamp,msg, true)'>شرکت در نظرسنجی</a>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    computed: {
        chatSide() {
            return this.$store.getters["user/chatSide"];
        },
        notification() {
            return this.$store.getters["chat/notification"];
        },
    },
    mounted() {
    },
    methods: {
        canVote(args) {
            try {
                const parsed = JSON.parse(args);

                console.log(this.$store.getters['chat/votes'])
                console.log(parsed)

                return !this.$store.getters['chat/votes'].map(e => {
                    return e.expert_id;
                }).includes(parsed.expertId)
            } catch (e) {
                return false;
            }
        },
        checkVote(msg) {
            if (msg.arguments != '') {
                try {
                    const parsed = JSON.parse(msg.arguments);
                    return !this.$store.getters['chat/votes'].map(e => {
                        return e.expert_id;
                    }).includes(parsed.expertId)
                } catch (e) {
                    return true;
                }
            }
            return true;
        },
        pollInfo(info, timestamp, msg, redirect = true) {
            try {
                const parsed = JSON.parse(info);
                this.$store.commit('telSupports/SET_Pollinfo', {
                    ...parsed,
                    timestamp
                })
                if (redirect) {
                    this.$router.push(`/user/poll/${parsed.expertId}`)
                }
            } catch (e) {
                this.$toasted.error("خطایی در نظرسنجی رخ داد", {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
        },
        dutyInfo(info, msg) {
            this.$store.commit('expert/SET_DutyArg',  {
                ...JSON.parse(info),
                timestamp: msg.timestamp
            })
        }
    },
    // checkBefore(info){
    //     const parsed = JSON.parse(info);
    //     return this.$store.getters['chat/votes'];
    // },
    watch: {
        chatSide() {
            if (this.chatSide == "note") this.$socket.readNotification();
        },
    },
};
</script>

<style lang="scss" scoped>
.poll_action {
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;

  a {
    transition: all 0.3s;
    background-color: var(--inner-background-color);
    color: var(--black);
    font-size: 0.8rem;
    border-radius: 5px;
    padding: 0.3rem 1rem;

    &:hover {
      background-color: var(--light-main-color);
      color: #2b2827;
    }
  }
}
</style>
