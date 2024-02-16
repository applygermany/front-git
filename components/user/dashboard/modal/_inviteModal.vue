<template>
    <div class="invite-modal" id="invite-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>گزارش کد دعوت های شما</p>
                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
            <div class="text">
                <div class="right">
                    <!--          <div class="outer">-->
                    <!--            &lt;!&ndash; <img :src="users[0].image" alt="" v-if="users[0] != null" />-->
                    <!--            <img :src="users[1].image" alt="" v-if="users[1] != null" />-->
                    <!--            <img :src="users[2].image" alt="" v-if="users[2] != null" />-->
                    <!--            <img :src="users[3].image" alt="" v-if="users[3] != null" /> &ndash;&gt;-->
                    <!--            <div class="inviter">-->
                    <!--              <img :src="users[0].image" alt="" v-if="users[0] != null" />-->
                    <!--              <div class="img-hover">-->
                    <!--                <span>ثبت نام در پرتال</span>-->
                    <!--                <div>-->
                    <!--                  <svg-->
                    <!--                    xmlns="http://www.w3.org/2000/svg"-->
                    <!--                    width="16"-->
                    <!--                    height="16"-->
                    <!--                    viewBox="0 0 16 16"-->
                    <!--                    class="full uk-svg"-->
                    <!--                  >-->
                    <!--                    <circle-->
                    <!--                      id="Ellipse_1600"-->
                    <!--                      data-name="Ellipse 1600"-->
                    <!--                      cx="8"-->
                    <!--                      cy="8"-->
                    <!--                      r="8"-->
                    <!--                      fill="#e4c064"-->
                    <!--                    ></circle>-->
                    <!--                  </svg>-->
                    <!--                  <svg-->
                    <!--                    xmlns="http://www.w3.org/2000/svg"-->
                    <!--                    width="16"-->
                    <!--                    height="16"-->
                    <!--                    viewBox="0 0 16 16"-->
                    <!--                    class="uk-svg"-->
                    <!--                  >-->
                    <!--                    <circle-->
                    <!--                      id="Ellipse_1600"-->
                    <!--                      data-name="Ellipse 1600"-->
                    <!--                      cx="8"-->
                    <!--                      cy="8"-->
                    <!--                      r="8"-->
                    <!--                      fill="#e4c064"-->
                    <!--                    ></circle>-->
                    <!--                  </svg>-->
                    <!--                  <svg-->
                    <!--                    xmlns="http://www.w3.org/2000/svg"-->
                    <!--                    width="16"-->
                    <!--                    height="16"-->
                    <!--                    viewBox="0 0 16 16"-->
                    <!--                    class="uk-svg"-->
                    <!--                  >-->
                    <!--                    <circle-->
                    <!--                      id="Ellipse_1600"-->
                    <!--                      data-name="Ellipse 1600"-->
                    <!--                      cx="8"-->
                    <!--                      cy="8"-->
                    <!--                      r="8"-->
                    <!--                      fill="#e4c064"-->
                    <!--                    ></circle>-->
                    <!--                  </svg>-->
                    <!--                  <svg-->
                    <!--                    xmlns="http://www.w3.org/2000/svg"-->
                    <!--                    width="16"-->
                    <!--                    height="16"-->
                    <!--                    viewBox="0 0 16 16"-->
                    <!--                    class="uk-svg"-->
                    <!--                  >-->
                    <!--                    <circle-->
                    <!--                      id="Ellipse_1600"-->
                    <!--                      data-name="Ellipse 1600"-->
                    <!--                      cx="8"-->
                    <!--                      cy="8"-->
                    <!--                      r="8"-->
                    <!--                      fill="#e4c064"-->
                    <!--                    ></circle>-->
                    <!--                  </svg>-->
                    <!--                  <svg-->
                    <!--                    xmlns="http://www.w3.org/2000/svg"-->
                    <!--                    width="16"-->
                    <!--                    height="16"-->
                    <!--                    viewBox="0 0 16 16"-->
                    <!--                    class="uk-svg"-->
                    <!--                  >-->
                    <!--                    <circle-->
                    <!--                      id="Ellipse_1600"-->
                    <!--                      data-name="Ellipse 1600"-->
                    <!--                      cx="8"-->
                    <!--                      cy="8"-->
                    <!--                      r="8"-->
                    <!--                      fill="#e4c064"-->
                    <!--                    ></circle>-->
                    <!--                  </svg>-->
                    <!--                </div>-->
                    <!--              </div>-->
                    <!--            </div>-->
                    <!--            <div class="inner">-->
                    <!--              <div class="img">-->
                    <!--                <img :src="user.image" alt="" />-->
                    <!--              </div>-->
                    <!--            </div>-->
                    <!--          </div>-->
                    <div class="gift">
                        <p>
                            <span>{{ prices.invite }}</span> یــورو با دعوت از دوستــانتان
                            هدیه بگیریــد
                        </p>
                        <div class="copy">
                            <a @click="copyCode">
                                <transition mode="out-in" name="fade">
                                    <svg
                                            class="uk-svg"
                                            fill="none"
                                            height="24"
                                            key="icon"
                                            v-if="!copied"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                                d="M6.5 15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5"
                                                stroke="#141414"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                        ></path>
                                        <path
                                                d="M8.75 10.75C8.75 9.64543 9.64543 8.75 10.75 8.75H17.25C18.3546 8.75 19.25 9.64543 19.25 10.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H10.75C9.64543 19.25 8.75 18.3546 8.75 17.25V10.75Z"
                                                stroke="#141414"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="1.5"
                                        ></path>
                                    </svg>
                                    <span class="copied" key="text" v-else>کپی شد</span>
                                </transition>
                            </a>
                            <span>{{ user.id }}</span>
                        </div>
                    </div>
                    <div class="invited-list">
                        <div class="item" v-for="item in users" v-if="item !== null">
                            <div class="counter">{{users.indexOf(item) + 1}}</div>
                            <div class="img">
                                <img :src="item.image" alt="">
                            </div>
                            <div class="name">
                                {{item.firstname+' '+item.lastname}}
                            </div>
                            <div class="other">{{item.level.title}}</div>
                            <div>
                                <svg v-for="i in 5" :class="(item.level.key >= (i-1) ? 'full' : '') + ' uk-svg'" height="16" viewBox="0 0 16 16" width="16"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="8" cy="8" data-name="Ellipse 1600" fill="#e4c064" id="Ellipse_1600"
                                            r="8"></circle>
                                </svg>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center" v-if="users.map(e => e !== null).length === 0">
                            <svg height="118.607" viewBox="0 0 120 118.607" width="120"
                                 xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <style>
                                        .alef, .cj {
                                        fill: none;
                                    }

                                    .alef {
                                        stroke: #707070;
                                        stroke-width: 1.5px;
                                    }

                                    .best {
                                        stroke: none;
                                    }</style>
                                </defs>
                                <g transform="translate(-518.5 -4724)">
                                    <g class="alef" transform="translate(582.071 4798.286)">
                                        <circle class="best" cx="17.143" cy="17.143" r="17.143"/>
                                        <circle class="cj" cx="17.143" cy="17.143" r="16.393"/>
                                    </g>
                                    <line class="alef" transform="translate(518.5 4841.857)" x2="8.571"/>
                                    <line class="alef" transform="translate(529.929 4841.857)" x2="101.429"/>
                                    <line class="alef" transform="translate(634.214 4841.857)" x2="4.286"/>
                                    <line class="alef" transform="translate(622.786 4777.571)" x2="8.571" y2="2.857"/>
                                    <line class="alef" transform="translate(625.643 4774.714)" x1="2.857" y2="8.571"/>
                                    <g class="alef" transform="translate(623.5 4728.286)">
                                        <circle class="best" cx="3.571" cy="3.571" r="3.571"/>
                                        <circle class="cj" cx="3.571" cy="3.571" r="2.821"/>
                                    </g>
                                    <g class="alef" transform="translate(544.929 4724)">
                                        <circle class="best" cx="2.857" cy="2.857" r="2.857"/>
                                        <circle class="cj" cx="2.857" cy="2.857" r="2.107"/>
                                    </g>
                                    <line class="alef" transform="translate(527.071 4751.857)" x2="5.714" y2="2.857"/>
                                    <line class="alef" transform="translate(528.5 4750.429)" x2="2.857" y1="5.714"/>
                                    <line class="alef" transform="translate(558.5 4776.143)" x2="28.571"/>
                                    <line class="alef" transform="translate(591.357 4776.143)" x2="5.714"/>
                                    <line class="alef" transform="translate(599.929 4776.143)" x2="2.857"/>
                                    <line class="alef" transform="translate(559.929 4790.429)" x2="22.857"/>
                                    <line class="alef" transform="translate(558.5 4804.714)" x2="17.143"/>
                                    <path class="alef" d="M3,0H63a4.286,4.286,0,0,1,4.286,4.286V45.714"
                                          transform="translate(547.643 4748.286)"/>
                                    <path class="alef" d="M0,30.56V3" transform="translate(546.357 4749.571)"/>
                                    <path class="alef" d="M35.148,70.714H4.286A4.286,4.286,0,0,1,0,66.429V35"
                                          transform="translate(546.357 4763.286)"/>
                                    <path class="alef" d="M0,8.714V3" transform="translate(546.357 4785.286)"/>
                                    <line class="alef" transform="translate(598.5 4806.143)" y2="11.429"/>
                                    <line class="alef" transform="translate(598.5 4817.571)" x1="7.143"/>
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
                <div class="left">
          <span class="invite-title">
            به چه صورت میتوانم کاربر معرفی کنم؟
          </span>
                    <span class="invite-answer">
            فقط کافیست کد دعوت خود را در اختیار کاربران مورد نظر قرار بدین
            .کاربران معرفی شده باید کد شما را در زمان ثبت نام وارد کنند
          </span>
                    <span class="invite-title">
            بلافاصله بعد از ثبت نام کاربر {{ prices.invite }} یورو به حساب من
            واریز می‌شود؟
          </span>
                    <span class="invite-answer">
            .خیر! این اتفاق بعد از تسویه با کاربر معرفی شده انجام می‌شود
          </span>
                    <span class="invite-title">
            آیا امکان پیگیری کاربران معرفی شده وجود دارد؟
          </span>
                    <span class="invite-answer">
            بله! گزارشــی از کاربــران دعوت شده توسط شما در روبــرو ارائــه شده
            است. بلافاصله بعد از تسویـه با کاربــر مذکور یعنـی دقیقــا زمانی کـه
            .هر 5 دایره کاربر روشن شود، {{ prices.invite }} یورو به حساب شما
            واریز می‌شود
          </span>
                    <span class="invite-title">
            اگر در زمانی که می‌خواهم با اپلای جرمنی تسویـه حساب کنم، هنــوز
            تکلیف افراد معرفی شده توسط من مشخص نشده باشد، چه اتفاقی می‌افتد؟
          </span>
                    <span class="invite-answer">
            .شمـا تعرفـه خود را کـامل پرداخـت می‌کنیـد. بعـد از تسویـه با افـراد
            .معرفی شده، مبلغ مذکور به حساب شما بازگردانده می‌شود
          </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        data() {
            return {
                copied: false,
            };
        },
        computed: {
            ...mapGetters({
                user: "user/user",
                users: "user/users",
                prices: "user/prices",
            }),
        },
        methods: {
            copyCode() {
                this.copied = true;
                navigator.clipboard.writeText(this.user.id);

                setTimeout(() => (this.copied = false), 3000);
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "~/assets/user/scss/_mixins.scss";

    .invite-title {
        display: block;
        color: var(--text-gray);
        margin-bottom: 0.5rem;
    }

    .invite-answer {
        display: block;
        margin-bottom: 1rem;
        color: var(--black);
    }

    .invite-modal {
        .uk-modal-body {
            width: 800px;
            padding: 0 !important;
            background-color: var(--white);
            border-radius: 8px;

            .title {
                @include fbx-ai-center-jc-between;
                background-color: var(--inner-background-color);
                padding: 1rem 1.5rem;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;

                button {
                    position: inherit;

                    &:hover {
                        svg {
                            color: var(--red);
                        }
                    }
                }

                p {
                    font-size: 1rem;
                    font-weight: bold;
                    color: var(--black);
                }
            }

            .text {
                padding: 1.5rem;
                @include fbx-ai-start-jc-between;

                .right {
                    width: 46%;

                    .outer {
                        margin: auto;
                        @include fbx-ai-center-jc-center;
                        width: 14rem;
                        height: 14rem;
                        border-radius: 50%;
                        border: 1px solid var(--gray);
                        position: relative;

                        .inviter {
                            right: -1rem;
                            top: 5rem;
                            position: absolute;
                            @include fbx-ai-start-jc-start;

                            img {
                                width: 2.75rem;
                                height: 2.75rem;
                                border-radius: 50%;
                                z-index: 2;
                            }

                            &:hover {
                                .img-hover {
                                    width: fit-content;
                                    padding: 0.25rem 2.5rem 0.25rem 1rem;
                                    margin-right: -2rem;
                                    opacity: 1;
                                }
                            }

                            .img-hover {
                                @include fbx-column-ai-start-jc-start;
                                width: 0;
                                padding: 0;
                                opacity: 0;
                                overflow: hidden;
                                z-index: 1;
                                background-color: rgba(#fff, 0.9);
                                border-radius: 25px;
                                transition: opacity 0.4s;

                                span {
                                    color: var(--black);
                                    font-size: 0.8rem;
                                    font-weight: 500;
                                }

                                > div {
                                    margin-top: 0.5rem;
                                    @include fbx-ai-start-jc-start;

                                    svg {
                                        width: 0.7rem;
                                        border-radius: 50%;
                                        border: 1px solid var(--gray);
                                        margin-left: 0.15rem;
                                        margin-right: 0.15rem;
                                        color: rgba(#fff, 0.9);

                                        &.full {
                                            color: var(--main-color);
                                        }
                                    }
                                }
                            }
                        }

                        .null {
                            left: 0;
                            top: 2rem;
                            position: absolute;
                            background-color: var(--background-color);
                            border: 1px solid var(--gray);
                            border-radius: 50%;
                            padding: 0.5rem;

                            > svg {
                                font-size: 1rem;
                                border-radius: 50%;
                                fill: none;
                                color: var(--text-gray);
                            }
                        }

                        .inner {
                            @include fbx-ai-center-jc-center;
                            width: 10rem;
                            height: 10rem;
                            border-radius: 50%;
                            border: 1px solid var(--gray);

                            .img {
                                img {
                                    width: 6rem;
                                    height: 6rem;
                                    border-radius: 50%;
                                }
                            }
                        }
                    }

                    .gift {
                        p {
                            font-weight: 600;
                            font-size: 0.9rem;
                            color: var(--black);

                            span {
                                font-size: 1.5rem;
                            }
                        }

                        .copy {
                            @include fbx-ai-start-jc-start;
                            margin-top: 1rem;

                            span:not(.copied) {
                                @include fbx-ai-center-jc-center;
                                padding: 0.5rem 2rem;
                                border-radius: 5px;
                                border: 1px solid var(--gray);
                                font-size: 1rem;
                                font-weight: 600;
                                color: var(--black);
                            }

                            a {
                                position: relative;
                                margin-left: 0.5rem;
                                background-color: var(--inner-background-color);
                                border-radius: 5px;
                                width: 2.5rem;
                                height: 2.5rem;
                                @include fbx-ai-center-jc-center;

                                svg {
                                    fill: none;
                                    color: var(--main-color);
                                }

                                .copied {
                                    bottom: -1.5rem;
                                    width: 120%;
                                    position: absolute;
                                    color: var(--black);
                                    font-size: 0.9rem;
                                    font-weight: 600;

                                    &.d-none {
                                        display: none;
                                    }
                                }
                            }
                        }
                    }

                    .invited-list {
                        margin-top: 1.5rem;
                        max-height: 12rem;
                        overflow-y: auto;

                        &::-webkit-scrollbar {
                            width: 5px;
                        }

                        /* Track */
                        &::-webkit-scrollbar-track {
                            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
                            border-radius: 15px;
                        }

                        /* Handle */
                        &::-webkit-scrollbar-thumb {
                            background: #CACACA;
                            border-radius: 15px;
                        }

                        .item {
                            margin-top: 0.75rem;
                            width: 100%;
                            @include fbx-ai-center-jc-between;
                            padding-bottom: 0.75rem;
                            border-bottom: 1px solid var(--gray);

                            .counter {
                                font-size: 0.8rem;
                                color: var(--text-gray);
                            }

                            .img {
                                img {
                                    width: 2rem;
                                    height: 2rem;
                                    border-radius: 50%;
                                }
                            }

                            .name, .other {
                                color: var(--black);
                                font-weight: 600;
                                font-size: 0.75rem;
                            }

                            div {
                                @include fbx-ai-start-jc-start;

                                svg {
                                    width: 0.6rem;
                                    border-radius: 50%;
                                    border: 1px solid var(--gray);
                                    margin-left: 0.15rem;
                                    margin-right: 0.15rem;
                                    color: rgba(#fff, 0.9);

                                    &.full {
                                        color: var(--main-color);
                                    }
                                }
                            }
                        }
                    }
                }

                .left {
                    padding-left: 1.5rem;
                    max-height: 20rem;
                    width: 46%;
                    line-height: 1.8rem;
                    overflow-y: auto;
                    text-align: justify;
                    font-size: 0.8rem;
                    color: var(--black);

                    &::-webkit-scrollbar {
                        width: 5px;
                    }

                    /* Track */
                    &::-webkit-scrollbar-track {
                        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
                        border-radius: 15px;
                    }

                    /* Handle */
                    &::-webkit-scrollbar-thumb {
                        background: #CACACA;
                        border-radius: 15px;
                    }
                }
            }
        }
    }


    @include mobile-device {
        .invite-modal {
            .uk-modal-body {
                .title {
                    padding: 0.75rem 1.25rem;

                    p {
                        font-size: 0.9rem;
                    }
                }

                .text {
                    padding: 1rem;
                    flex-wrap: wrap;

                    .right {
                        width: 100%;

                        .outer {
                            width: 10rem;
                            height: 10rem;

                            > img {
                                width: 2rem;
                                height: 2rem;
                                right: -1rem;
                                top: 50%;
                            }

                            .inner {
                                width: 6rem;
                                height: 6rem;

                                .img {
                                    img {
                                        width: 3rem;
                                        height: 3rem;
                                    }
                                }
                            }
                        }

                        .gift {
                            margin-top: 1rem;

                            p {
                                font-size: 0.75rem;

                                span {
                                    font-size: 1.2rem;
                                }
                            }

                            .copy {
                                margin-top: 1rem;

                                span:not(.copied) {
                                    font-size: 0.9rem;
                                }

                                a {
                                    .copied {
                                        font-size: 0.75rem;
                                    }
                                }
                            }
                        }
                    }

                    .left {
                        margin-top: 2rem;
                        padding-left: 0.5rem;
                        max-height: 20rem;
                        width: 100%;
                        font-size: 0.75rem;
                    }
                }
            }
        }
    }
</style>
