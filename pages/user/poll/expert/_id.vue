<template>
    <div>
        <section
                class="wrapper"
                id="motivation"
                :class="[vuexUserMenuState ? 'collapse' : '']"
        >

            <TitlePrice/>

            <div class="text">
                <div class="poll">
                    <div class="img">
                        <img :src="pollinfo.expert_photo" alt=""/>
                    </div>

                    <div
                            class="stars"
                            :class="{ 'error-border': errors.includes('score') }"
                    >
                        <div
                                @click="
                score = 1;
                removeFromError('score');
              "
                        >
                            <span>1</span>
                            <a :class="{ full: score >= 1 }">
                                <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="uk-svg uk-svg"
                                >
                                    <path
                                            d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                                            stroke="#141414"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div
                                @click="
                score = 2;
                removeFromError('score');
              "
                        >
                            <span>2</span>
                            <a :class="{ full: score >= 2 }">
                                <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="uk-svg uk-svg"
                                >
                                    <path
                                            d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                                            stroke="#141414"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div
                                @click="
                score = 3;
                removeFromError('score');
              "
                        >
                            <span>3</span>
                            <a :class="{ full: score >= 3 }">
                                <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="uk-svg uk-svg"
                                >
                                    <path
                                            d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                                            stroke="#141414"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div
                                @click="
                score = 4;
                removeFromError('score');
              "
                        >
                            <span>4</span>
                            <a :class="{ full: score >= 4 }">
                                <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="uk-svg uk-svg"
                                >
                                    <path
                                            d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                                            stroke="#141414"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                        <div
                                @click="
                score = 5;
                removeFromError('score');
              "
                        >
                            <span>5</span>
                            <a :class="{ full: score == 5 }">
                                <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="uk-svg uk-svg"
                                >
                                    <path
                                            d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                                            stroke="#141414"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <form>
                    <label>متن نظر</label>
                    <textarea
                            rows="7"
                            maxlength="500"
                            v-model="message"
                            :class="{ 'error-border': errors.includes('message') }"
                            @focus="removeFromError('message')"
                    ></textarea>
                    <div style="display: flex; justify-content: space-between">
                        <span style=""> {{ message.length }}/500 </span>

                        <span class="error" v-if="errors.includes('message')"
                        >وارد کردن متن نظر الزامیست</span
                        >
                    </div>
                </form>

                <div class="price-buttons edit-price-buttons">
                    <div class="buttons">
                        <a class="submit"
                           @click="submit">
                            {{ !this.done && !this.doing ? 'ثبت و ارسال' : (this.doing ? 'درحال ثبت' : this.done ? 'ثبت شد' : 'ثبت و ارسال') }}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import TitlePrice from "@/components/user/poll/_titlePrice.vue";
import {redirect} from "@nuxtjs/auth/lib/module/defaults";

export default {
    layout: "userLayout",
    components: {
        TitlePrice
    },
    data() {
        return {
            message: "",
            score: null,
            errors: [],
            doing: false,
            done: false
        };
    },
    methods: {
        async submit() {
            this.errors = [];
            this.doing = true;

            if (this.score == null) this.errors.push("score");
            if (this.message == "") this.errors.push("message");

            if (this.errors.length > 0) return;

            const {data} = await this.$axios.post('v1/user/sendComment', {
                text: this.message,
                score: this.score,
                expert_id: this.pollinfo.expert_id,
                userid: this.pollinfo.user_id,
                timestamp: this.pollinfo.timestamp,
                tel_support_id: this.pollinfo.tel_support_id
            })


            this.doing = false;
            this.done = true;

            if (data.status === 1) {
                this.$toasted.success(data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            } else {
                this.$toasted.error(data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }

            this.redirect(`/user/dashboard`)
        },
        removeFromError(name) {
            this.errors = this.errors.filter((item) => item != name);
            return true;
        },
    },
    computed: {
        vuexUserMenuState() {
            return this.$store.getters["user/vuexUserMenuState"];
        },
        pollinfo() {
            return this.$store.getters['telSupports/pollinfo']
        }
    },
    async asyncData({params, store, $auth, $axios, redirect}) {
        if (!$auth.loggedIn) redirect("/auth/signin");
        else {
            if ($auth.user.level !== 1) {
                $auth.logout();
                redirect("/auth/signin");
            }
        }

        const {data} = await $axios.get(`v1/user/poll/${params.id}`);
        store.commit("telSupports/SET_Pollinfo", data.info);

    },
    head() {
        return {
            title: "نظرسنجی",
        };
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

#vote {

}

.error {
  color: red !important;
  font-size: 14px;
  padding-top: 5px;
  font-weight: 600;
}

.error-border {
  border-color: red !important;
}

.text {
  background-color: var(--white);
  border-radius: 8px;
  @include boxshadow();
  padding: 1rem 1.5rem 1.5rem 1.5rem;

  .explain {
    line-height: 1.8rem;
    font-size: 0.8rem;
    color: var(--text-gray);
    font-weight: 500;
  }

  form {
    margin-top: 2rem;
    width: 100%;

    label {
      font-size: 0.8rem;
      color: var(--black);
      margin-right: 1rem;
    }

    input,
    textarea {
      border: 1px solid var(--gray);
      border-radius: 5px;
      padding: 0.75rem;
      font-size: 0.8rem;
      color: var(--black);
      background-color: var(--white);
      width: calc(99.8% - 1.5rem);
      transition: all 0.3s;

      &::placeholder {
        color: var(--text-gray);
        font-size: 0.8rem;
      }

      &:focus {
        outline: 0;
        border-color: var(--main-color);
      }
    }
  }

  .price-buttons {
    margin-top: 2rem;
    @include fbx-ai-start-jc-between;
    align-items: flex-end;

    .price {
      @include fbx-column-ai-start-jc-start;

      span {
        color: var(--text-gray);
        font-size: 0.8rem;
        font-weight: 600;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 0.9rem;
        color: var(--black);
        font-weight: 600;
      }
    }

    .buttons {
      @include fbx-ai-start-jc-start;
      justify-content: flex-end;
      width: 60%;

      .submit {
        text-align: center;
        width: 40%;
        border-radius: 5px;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
        background-color: var(--inner-background-color);
        border: 1px solid var(--inner-background-color);
        transition: all 0.3s;

        &:hover {
          background-color: var(--light-main-color);
          color: #2b2827;
          border-color: var(--light-main-color);
        }
      }

      .cancel {
        text-align: center;
        margin-right: 1rem;
        width: 40%;
        font-weight: 500;
        background-color: var(--white);
        border: 1px solid var(--gray);
        border-radius: 5px;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: var(--black);
        font-size: 0.8rem;
        transition: all 0.3s;

        &:hover {
          background-color: var(--inner-background-color);
          border-color: var(--inner-background-color);
        }
      }
    }
  }

  .edit-price-buttons {
    .buttons {
      justify-content: end;
      width: 100%;

      .submit {
        width: 20%;
      }

      .cancel {
        width: 20%;

        &:hover {
          background-color: var(--red);
          color: #fff;
        }
      }
    }
  }

  .whatsapp-got {
    @include fbx-ai-start-jc-between;
    margin-top: 2rem;

    .got {
      align-self: flex-end;
      @include fbx-ai-start-jc-start;
      width: 25%;

      a {
        width: 100%;
        border-radius: 5px;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
        background-color: var(--inner-background-color);
        border: 1px solid var(--inner-background-color);
        transition: all 0.3s;
        text-align: center;

        &:hover {
          background-color: var(--light-main-color);
          color: #2b2827;
          border-color: var(--light-main-color);
        }
      }
    }

    .whatsapp {
      @include fbx-ai-center-jc-end;
      border-radius: 5px;
      border: 1px solid var(--gray);
      padding: 0.75rem;
      width: 40%;

      .icon {
        margin-right: 1rem;

        svg {
          fill: none;
          color: var(--main-color);
        }
      }

      .text {
        direction: ltr;

        span {
          font-weight: 300;
          font-size: 1rem;
          color: var(--black);
        }

        p {
          font-weight: 600;
          font-size: 1rem;
          color: var(--black);
        }
      }
    }
  }

  .poll {
    margin-top: 1rem;
    @include fbx-ai-center-jc-between;

    .img {
      width: 20%;

      img {
        border-radius: 50%;
        width: 4rem;
        height: 4rem;
      }
    }

    .stars {
      width: 30%;
      @include fbx-ai-start-jc-between;
      border-radius: 25px;
      border: 1px solid var(--gray);
      padding: 0.75rem;

      span {
        font-size: 0.8rem;
        font-weight: 700;
        color: var(--main-color);
      }

      a {
        transition: all 0.3s;

        svg {
          transition: all 0.3s;
          width: 1.8rem;
          fill: none;
          color: var(--main-color);
        }

        &.full {
          svg {
            fill: var(--main-color);
          }
        }
      }
    }
  }
}

@include mobile-device {
  .text {
    padding: 0.75rem 1.25rem 1.25rem 1.25rem;

    .explain {
      font-size: 0.75rem;
    }

    form {
      margin-top: 1.5rem;

      input {
        padding: 0.5rem;
        font-size: 0.75rem;
        width: calc(99.8% - 1rem);

        &::placeholder {
          font-size: 0.75rem;
        }
      }
    }

    .price-buttons {
      margin-top: 2rem;
      @include fbx-ai-start-jc-between;
      align-items: flex-end;
      flex-wrap: wrap;

      .price {
        width: 100%;
        flex-direction: row;
        margin-bottom: 1.5rem;

        span {
          font-size: 0.75rem;
          margin-bottom: 0;
          margin-left: 0.5rem;
        }

        p {
          font-size: 0.8rem;
        }
      }

      .buttons {
        justify-content: center;
        width: 100%;

        .submit {
          width: 40%;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.75rem;
        }

        .cancel {
          margin-right: 1rem;
          width: 40%;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.75rem;
        }
      }
    }

    .edit-price-buttons {
      .buttons {
        justify-content: center;

        .submit {
          width: 40%;
        }

        .cancel {
          width: 40%;
        }
      }
    }

    .whatsapp-got {
      @include fbx-ai-start-jc-between;
      margin-top: 1.5rem;

      .got {
        align-self: flex-end;
        @include fbx-ai-start-jc-start;
        width: 25%;

        a {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.75rem;
        }
      }

      .whatsapp {
        padding: 0.5rem;
        width: 60%;

        .icon {
          margin-right: 0.75rem;
        }

        .text {
          span {
            font-size: 0.9rem;
          }

          p {
            font-size: 0.9rem;
          }
        }
      }
    }

    .poll {
      .img {
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
      }

      .stars {
        width: 75%;
        padding: 0.5rem;

        span {
          font-size: 0.75rem;
        }

        a {
          svg {
            width: 1.5rem;
          }
        }
      }
    }
  }
}
</style>
<script setup>
</script>