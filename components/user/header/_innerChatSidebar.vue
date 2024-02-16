<template>
    <aside :class="{ active: chatSide == 'chat' }" class="inner-chat-sidebar">
        <div class="top">
            <div class="img-name">
                <div class="img">
                    <img  v-if="chatInfo.img !== ''" :id="'chatroom_'+chatInfo.id" :src=chatInfo.img alt="" class="user-pic"
                                              />
                    <img alt="" src="/user_light.svg" v-else-if="!darkMode"  class="user-pic"/>
                    <img alt="" src="/user_dark.svg"  class="user-pic" v-else/>
                </div>
                <div class="name">
                    <p>{{ chatInfo.firstname }} {{ chatInfo.lastname }}</p>
                    <span class="online">
            {{
              chatInfo.level == 1
                ? "کاربر"
                : chatInfo.level == 2
                ? "پشتیبان"
                : chatInfo.level == 5
                ? "کارشناس"
                : chatInfo.level == 3
                ? "کارشناس ارشد"
                : chatInfo.level == 4
                ? "ادمین"
                : ""
            }}
          </span>
                </div>
            </div>
            <div class="return">
                <a @click="returnToList">
                    <svg
                            class="uk-svg"
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                                d="M10.25 6.75L4.75 12L10.25 17.25"
                                stroke="#141414"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                        ></path>
                        <path
                                d="M19.25 12H5"
                                stroke="#141414"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                        ></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="text" ref="text">
            <!--<div>-->
            <!--  <p>1400/05/06</p>-->
            <!--  <div class="me">-->
            <!--    <p>سلام تست میکنیم</p>-->
            <!--    <span>22:41</span>-->
            <!--  </div>-->
            <!--  <div class="me">-->
            <!--    <p>امیررضا نکاحی هستم</p>-->
            <!--    <span>22:41</span>-->
            <!--  </div>-->
            <!--  <div class="other">-->
            <!--    <p>سلام علی جان! خوبـــی؟ چه خبراااا؟</p>-->
            <!--    <span>22:41</span>-->
            <!--  </div>-->
            <!--</div>-->
            <div>
                <p v-if="messages.length > 0">{{new Date(messages[0].timestamp).toLocaleDateString('fa-IR')}}</p>
                <p v-else>-</p>
                <template v-for="(msg, index) in messages">
                    <div
                            :class="[msg.from == 'me' ? 'me' : 'other']"
                            :key="index"
                            v-if="msg.type == 'text'"
                    >
                        <p>{{ msg.msg }}</p>
                        <span>{{
                new Date(msg.timestamp).toLocaleString("fa-IR", {
                  timeZone: "Asia/Tehran",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}</span>
                    </div>
                    <div
                            :class="[msg.from == 'me' ? 'me' : 'other']"
                            :key="index"
                            @click='downVoice(msg.msg,msg)'
                            v-else-if="msg.type == 'audio'"
                    >
                        <p>voice</p>
                        <span>{{
                new Date(msg.timestamp).toLocaleString("fa-IR", {
                  timeZone: "Asia/Tehran",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}</span>
                    </div>
                    <div :class="[msg.from == 'me' ? 'me' : 'other']"
                         :id="'key_'+index"
                         :key="index"
                         @click='downFile(index,msg.id)'
                         v-else-if="msg.type == 'file'"
                    >
                        <p :id="'img_key_'+index" class="chat_img">در حال بارگذاری...</p>
                        <span>{{
                new Date(msg.timestamp).toLocaleString("fa-IR", {
                  timeZone: "Asia/Tehran",
                  hour: "2-digit",
                  minute: "2-digit",
                })
              }}</span>
                    </div>
                </template>
                <!--<div class="me">-->
                <!--  <p>امیررضا نکاحی هستم</p>-->
                <!--  <span>22:41</span>-->
                <!--</div>-->
                <!--<div class="other">-->
                <!--  <p>سلام علی جان! خوبـــی؟ چه خبراااا؟</p>-->
                <!--  <span>22:41</span>-->
                <!--</div>-->
            </div>
        </div>
        <div class="bottom">

            <form @submit.prevent="">
<!--                <a-->
<!--                        @click="record(chatInfo.id)"-->
<!--                        class="records"-->
<!--                        ref="records"-->
<!--                        v-if="message == ''"-->
<!--                >-->
<!--                    <svg-->
<!--                            class="uk-svg"-->
<!--                            fill="none"-->
<!--                            height="24"-->
<!--                            v-if="!recording"-->
<!--                            viewBox="0 0 24 24"-->
<!--                            width="24"-->
<!--                            xmlns="http://www.w3.org/2000/svg"-->
<!--                    >-->
<!--                        <path-->
<!--                                d="M8.75 8C8.75 6.20507 10.2051 4.75 12 4.75C13.7949 4.75 15.25 6.20507 15.25 8V11C15.25 12.7949 13.7949 14.25 12 14.25C10.2051 14.25 8.75 12.7949 8.75 11V8Z"-->
<!--                                stroke="#141414"-->
<!--                                stroke-linecap="round"-->
<!--                                stroke-linejoin="round"-->
<!--                                stroke-width="1.5"-->
<!--                        ></path>-->
<!--                        <path-->
<!--                                d="M5.75 12.75C5.75 12.75 6 17.25 12 17.25C18 17.25 18.25 12.75 18.25 12.75"-->
<!--                                stroke="#141414"-->
<!--                                stroke-linecap="round"-->
<!--                                stroke-linejoin="round"-->
<!--                                stroke-width="1.5"-->
<!--                        ></path>-->
<!--                        <path-->
<!--                                d="M12 17.75V19.25"-->
<!--                                stroke="#141414"-->
<!--                                stroke-linecap="round"-->
<!--                                stroke-linejoin="round"-->
<!--                                stroke-width="1.5"-->
<!--                        ></path>-->
<!--                    </svg>-->
<!--                    <div class="recording" v-else></div>-->
<!--                </a>-->

                <a @click="sendMessage" class="sendMessage" ref="sendMessage" >
                    <svg
                            height="64pt"
                            style="isolation: isolate; fill: var(--text-gray)"
                            viewBox="0 0 64 64"
                            width="64pt"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <clipPath id="a">
                                <rect height="64" width="64"></rect>
                            </clipPath>
                        </defs>
                        <g clip-path="url(#a)">
                            <path
                                    d=" M 8.216 36.338 L 26.885 32.604 C 28.552 32.271 28.552 31.729 26.885 31.396 L 8.216 27.662 C 7.104 27.44 6.021 26.356 5.799 25.245 L 2.065 6.576 C 1.731 4.908 2.714 4.133 4.259 4.846 L 61.228 31.139 C 62.257 31.614 62.257 32.386 61.228 32.861 L 4.259 59.154 C 2.714 59.867 1.731 59.092 2.065 57.424 L 5.799 38.755 C 6.021 37.644 7.104 36.56 8.216 36.338 Z "
                            ></path>
                        </g>
                    </svg>
                </a>

                <textarea
                        @keydown.enter="sendMessage"
                        maxlength="255"
                        placeholder="نوشتن پیام..."
                        v-model="message"
                ></textarea>
                <a :class="'attach '+ (this.file ? 'active' : '')" @click="attachFile">
                    <input @change="onAttach" hidden ref="attachFile" type="file">
                    <svg

                            class="uk-svg"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                    >
                        <g
                                data-name="Group 7826"
                                id="Group_7826"
                                transform="translate(0.251 -24)"
                        >
                            <rect
                                    data-name="Rectangle 3100"
                                    fill="#fff"
                                    height="24"
                                    id="Rectangle_3100"
                                    opacity="0"
                                    transform="translate(-0.251 24)"
                                    width="24"
                            ></rect>
                            <path
                                    d="M-16033.205-21392.75a7.494,7.494,0,0,1-5.335-2.213,7.484,7.484,0,0,1-2.207-5.33v-11.143a.86.86,0,0,1,.856-.861.863.863,0,0,1,.862.861v11.143a5.777,5.777,0,0,0,1.7,4.117,5.794,5.794,0,0,0,4.122,1.707,5.831,5.831,0,0,0,5.824-5.824v-11.143a3.6,3.6,0,0,0-3.595-3.6,3.6,3.6,0,0,0-2.548,1.049,3.591,3.591,0,0,0-1.054,2.547v10.029a1.371,1.371,0,0,0,1.372,1.367,1.369,1.369,0,0,0,1.367-1.367v-5.785a.863.863,0,0,1,.862-.863.86.86,0,0,1,.856.863v5.785a3.09,3.09,0,0,1-3.086,3.084,3.092,3.092,0,0,1-3.09-3.084v-10.029a5.284,5.284,0,0,1,1.559-3.76,5.276,5.276,0,0,1,3.761-1.553,5.319,5.319,0,0,1,5.313,5.313v11.143A7.552,7.552,0,0,1-16033.205-21392.75Z"
                                    data-name="Path 13474"
                                    fill="#a5a29b"
                                    id="Path_13474"
                                    transform="translate(16044.953 21440.75)"
                            ></path>
                        </g>
                    </svg>
                </a>
            </form>
        </div>
        <CoolLightBox :index="lightBoxIndex"
                      :items="chatImagesFinal" @close="lightBoxIndex = null"
                      v-if="chatImagesFinal.length > 0"></CoolLightBox>

    </aside>
</template>

<script>

    import CoolLightBox from "vue-cool-lightbox";
    import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";
    // import VueWaveSurfer from 'vue-wavesurfer'

    export default {
        components: {
            CoolLightBox,
            // VueWaveSurfer,
        },
        mounted() {

        },
        data() {
            return {
                wavesurfer: null,
                // options: {
                //     plugins: [Microphone.create(),],
                // },
                file: 'http://example.com/file.mp3',
                message: "",
                data: [],
                recording: false,
                // file: null,
                lightBoxIndex: null,
            };
        },
        computed: {

            darkMode(){
                const updatedUser = {...this.$auth.user};

                return updatedUser.darkmode === 1;
            },
            chatSide() {
                return this.$store.getters["user/chatSide"];
            },
            chatInfo() {
                return this.$store.getters["chat/chatInfo"];
            },
            messages() {
                return this.$store.getters["chat/messages"];
            },


            chatImagesFinal() {
                return this.$store.getters["chat/chatImages"].map(e => e.img).filter(e => e != 0);
            },
            chatImages() {
                return this.$store.getters["chat/chatImages"];
            },
        },
        methods: {
            attachFile() {
                this.$refs.attachFile.click()
            },
            onAttach(event) {
                this.$socket.sendFile(this.chatInfo.id, event.target.files[0], (event.target.files[0].type.startsWith('image/') ? "image" : "file"));
                setTimeout(() => {
                    let e = this.messages[this.messages.length - 1];
                    window.socket.emit(
                        "message_buffer",
                        e.msg,
                        this.chatInfo.id,
                        window.myid,
                        [e, this.messages.indexOf(e),e.id]);
                }, 1000)
            },
            downVoice(msg, res) {
                console.log(msg, this.chatInfo.id, window.myid, [res], "downVoice");
                window.socket.emit(
                    "message_buffer",
                    msg,
                    this.chatInfo.id,
                    window.myid,
                    [msg, this.messages.indexOf(res)]
                );
            },
            showImage(index) {
                this.lightBoxIndex = index;
            },
            downFile(index,message_id) {
                if (this.chatImages.filter(e => e.id == message_id)[0] && this.chatImages.filter(e => e.id == message_id)[0].type == 'image') {
                    let img = this.chatImages.filter(e => e.id == message_id)[0].img;
                    console.log(img)
                    console.log(this.chatImagesFinal)
                    console.log(this.chatImagesFinal.indexOf(img))
                    this.showImage(this.chatImagesFinal.indexOf(this.chatImages.filter(e => e.id == message_id)[0].img))
                } else {
                    let a = document.createElement('a');
                    a.setAttribute('download', Date.now() + '')
                    a.setAttribute('href', this.chatImages.filter(e => e.id == message_id)[0].img)
                    a.click();
                }
            },
            sendMessage(e) {

                if (e.keyCode === 13) e.preventDefault();
                if (this.message == '') return;

                this.$store.commit("chat/Set_MessageInput", this.message);
                this.$socket.sendMessage(this.chatInfo.id);
                this.message = "";
            },
            returnToList() {
                this.$store.commit("chat/Clear_Messages");
                this.$store.commit("chat/Clear_ChatInfo");
                this.$store.commit("chat/Clear_images");

                this.$store.commit("user/Set_ChatSide", "list");
            },
            record(room_id) {
                if (this.recording) {
                    this.wavesurfer.microphone.stop();
                } else {
                    this.wavesurfer.microphone.start();
                }
                this.recording = !this.recording;
            },
        },
        watch: {
            chatImages() {
                setTimeout(
                    () => (this.$refs.text.scrollTop = this.$refs.text.scrollHeight),
                    1
                );
            },
            messages() {
                setTimeout(
                    () => (this.$refs.text.scrollTop = this.$refs.text.scrollHeight),
                    1
                );
            },
            chatSide(newChatSide, oldChatSide) {
                if (oldChatSide == 'chat') {
                    this.$store.commit("chat/Clear_Messages");
                    this.$store.commit("chat/Clear_ChatInfo");
                }
                if (newChatSide == 'chat') {

                    setTimeout(() => {
                        this.messages.forEach(e => {
                            console.log('buffer: '+e.id)
                            window.socket.emit(
                                "message_buffer",
                                e.msg,
                                this.chatInfo.id,
                                window.myid,
                                [e, this.messages.indexOf(e),e.id]
                            );
                        })
                    }, 1000)
                }
            }
        },
    };
</script>

<style lang="scss">
    #wave {
        width: 100%;
        height: 128px;

        wave {
            height: 120px !important;
        }
    }
    #wave {
        display: none;
    }
    .waveStyle {
        display: block;

    }
    .chat_img {
        background: none !important;
        cursor: pointer;
        border: var(--main-color) solid 1px;

        .fileContainer {
            width: 10rem;
            height: 2.5rem;
            border-radius: 10px;
            display: flex;
            justify-content: flex-start;

            img {
                object-fit: contain;
                width: 25%;
            }

            .fileInfo {
                padding: 0.25em;
                margin-right: 1.25em;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: var(--white);

                .fileName {
                    color: var(--black) !important;
                    background: none !important;
                    padding: 0 !important;
                }

                .fileSize {
                    font-size: 10px;
                    margin-top: 2px;
                    color: var(--blue) !important;
                    background: none !important;
                    padding: 0 !important;

                }
            }
        }
    }

    .text {
        scroll-behavior: smooth;

        &::-webkit-scrollbar {
            width: 8px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
            border-radius: 15px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: var(--main-color);
            border-radius: 15px;
        }
    }

    .attach.active {
        color: var(--main-color);
    }

    .sendMessage {
        width: 24px;
        height: 24px;
    }

    .records {
        position: relative;
        width: 24px;
        height: 24px;

        .recording {
            position: absolute;
            width: 24px;
            height: 24px;
            background-color: #bf4343;
            border-radius: 50%;
            animation: record 1s infinite;
        }

        @keyframes record {
            0% {
                opacity: 0;
                transform: scale(0.8);
            }
            50% {
                opacity: 1;
                transform: scale(1.2);
            }
            100% {
                opacity: 0;
                transform: scale(0.8);
            }
        }
    }
</style>
