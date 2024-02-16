<template>
    <div>
        <section
                class="wrapper"
                id="reserved-page"
                :class="[vuexUserMenuState ? 'collapse' : '']"
        >

            <div class="page-title">
                <div class="return-back">
                    <h1>انتخاب مشاور</h1>
                </div>
                <p>
                    شما میتوانید از بین مشاوران زیر مشاوره مد نظر خود را انتخاب نمایید
                </p>
            </div>

            <client-only>
                <div class="advisor-boxes">
                    <div
                            class="box"
                            v-for="(telSupport, index) in telSupports"
                            :key="index"
                    >
                        <div class="img">
                            <img :src="telSupport.expert.image" alt=""/>
                            <span class="rate latin-font">{{ telSupport.expert.score }}</span>
                        </div>
                        <div class="star-name">
                            <div class="star">
                                <client-only>
                                    <star-rating
                                            :rating="telSupport.expert.score"
                                            :star-size="20"
                                            :increment="0.1"
                                            :rtl="true"
                                            :read-only="true"
                                            :show-rating="false"
                                    />
                                </client-only>
                            </div>
                            <h3 class="name">
                                {{ telSupport.expert.firstname }} {{ telSupport.expert.lastname }}
                            </h3>
                        </div>
                        <hr/>
                        <div class="expert">
                            <template v-for="(tag, index) in telSupport.expert.tags">
                                <span :key="index" v-if="tag != ''">{{ tag }}</span>
                            </template>
                        </div>
                        <div class="text">
                            <p>
                                {{ telSupport.expert.description }}
                            </p>
                        </div>
                        <div class="d-flex" style="margin-top: auto;margin-bottom: 0;">

                            <div v-if="telSupport.comments.length" class="button w-100" style="margin-top: auto">
                                <a @click="() => showComments(telSupport.expert.id)" href="#comments-modal" uk-toggle>
                                    نظرات
                                    ({{ telSupport.comments ? telSupport.comments.length : '0' }})
                                </a>
                            </div>
                            <div class="button w-100" style="margin-top: auto">
                                <nuxt-link :to="`/user/telSupports/` + telSupport.expert.id">
                                    انتخاب
                                </nuxt-link>
                            </div>
                        </div>
                        <div class="see-comments-modal" id="comments-modal" uk-modal>
                            <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
                                <div class="title">
                                    <p>لیست نظرات</p>
                                    <button class="uk-modal-close-default" type="button" uk-close></button>
                                </div>
                                <div class="text">
                                    <div class="comments">
                                        <div class="comment-box"
                                             v-for="(comment, index) in comments"
                                             :key="index">
                                            <div class="title">
                                                <div class="right">
                                                    <div class="img">
                                                        <img :src="comment.author.image" alt=""/>
                                                    </div>
                                                    <div class="name">
                                                        <p>
                                                            {{ comment.author.firstname }}
                                                            {{ comment.author.lastname }}
                                                        </p>
                                                        <div class="star">
                                                            <client-only
                                                            >
                                                                <star-rating
                                                                        :rating="comment.score"
                                                                        :star-size="20"
                                                                        :increment="0.5"
                                                                        :rtl="true"
                                                                        :read-only="true"
                                                                        :show-rating="false"
                                                                />
                                                            </client-only>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="left">
                                                    <span>{{ comment.date }}</span>
                                                </div>
                                            </div>
                                            <div class="text">
                                                <p>{{ comment.text }}</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </client-only>

        </section>
    </div>
</template>
<script>
export default {
    layout: "userLayout",
    components: {},
    data() {
        return {
            telSupports: [],
        };
    },
    async asyncData({$auth, store, $axios, redirect}) {
        if (!$auth.loggedIn) redirect("/auth/signin");
        else {
            if ($auth.user.level !== 1) {
                $auth.logout();
                redirect("/auth/signin");
            }
        }

        const {data} = await $axios.get(`v1/user/dashboard`);
        console.log(data.acceptance)
        if (data.acceptance === null || data.acceptance.lastFormSubmit === 0) {
            store.commit('user/SET_FromTelSupport', true)
            redirect('/user/telSupports/acceptance/submit/1');
        } else {
            store.commit("telSupports/SET_OpenInTelSupport", true);
            const {data} = await $axios.get(`v1/user/telSupports`);
            const newData = data.telSupports.filter((item) => item != null);
            if (newData) {
                for (let i = 0; i < newData.length; i++) {
                    if (newData[i].nextTelSupport != null) {
                        store.commit(
                            "telSupports/SET_TelSupportReserve",
                            newData[i].nextTelSupport
                        );
                    }
                }

                if (newData[0] != null) {
                    if (data.hasSup) {
                        redirect(`/user/telSupports/${newData[0].expert.id}`);
                    } else {
                        if (newData.length === 1 && newData[0].expert.id === 26) {
                            redirect(`/user/telSupports/26`);
                        }
                    }
                } else {
                    redirect(`/user/telSupports/26`);
                }

                return {
                    telSupports: newData,
                };
            }

            return {
                telSupports: [],
            };
        }
    },
    computed: {
        vuexUserMenuState() {
            return this.$store.getters['user/vuexUserMenuState']
        },
        comments() {
            return this.$store.getters['expert/comments']
        },
        userSupervisor() {
            return this.$store.getters["user/UserSupervisor"]
        },
        acceptance() {
            console.log(this.$store.getters["user/acceptance"])
            return this.$store.getters["user/acceptance"]
        }
    },
    methods: {
        async showComments(id) {
            this.$store.commit("expert/SET_Comments", []);
            const {data} = await this.$axios.post(`v1/user/expertTelSupports`, {
                id: id,
            });
            this.$store.commit("expert/SET_Comments", data.comments);
        }
    },
    head() {
        return {
            title: "پشتیبانی تلفنی",
        };
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.see-comments-modal {
  .uk-modal-body {
    width: 800px;
    padding: 0 !important;
    background-color: var(--white);
    border-radius: 8px;

    > .title {
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

    > .text {
      padding: 1.5rem;
      line-height: 1.8rem;

      .comments {
        @include fbx-ai-start-jc-between;
        flex-wrap: wrap;

        .comment-box {
          width: 96%;
          border: 1px solid var(--gray);
          border-radius: 5px;
          background-color: var(--inner-background-color);
          padding: 1.5rem;
          margin-bottom: 1.5rem;

          .title {
            @include fbx-ai-start-jc-between;
            align-items: flex-end;
            margin-bottom: 1.5rem;

            .right {
              @include fbx-ai-start-jc-start;

              .img {
                margin-left: 0.75rem;

                img {
                  width: 3rem;
                  height: 3rem;
                  border-radius: 50%;
                }
              }

              .name {
                p {
                  font-weight: 800;
                  color: var(--black);
                  font-size: 0.9rem;
                  margin-bottom: 0.5rem;
                }

                .star {
                  @include fbx-ai-start-jc-start;
                  width: 80%;

                  svg {
                    fill: none;
                    color: var(--main-color);
                  }

                  svg.full {
                    fill: var(--main-color);
                  }
                }
              }
            }

            .left {
              span {
                color: var(--text-gray);
                font-size: 0.8rem;
              }
            }
          }

          .text {
            color: var(--black);
            font-size: 0.8rem;
            line-height: 1.8rem;
            text-align: justify;
          }
        }
      }
    }
  }
}

#detail-reserved-page
.reserved-comment
.uk-switcher
.comments
.comment-box
.title
.right
.name
.star {
  width: auto !important;
}


.uk-subnav {
  border-bottom: 1px solid var(--gray);
  margin-right: 0;
  padding-right: 2rem;
  padding-left: 2rem;

  li {
    padding: 0 0 0.75rem 0;
    margin-left: 1rem;

    a {
      font-weight: 300;
      font-size: 0.9rem;
      color: var(--black);
    }

    &.uk-active {
      border-bottom: 1px solid var(--black);

      a {
        font-weight: bold;
        background-color: inherit;
      }
    }

    &:hover {
      a {
        background-color: inherit;
      }
    }
  }
}

.reserve {
  .explain {
    margin-bottom: 2.5rem;
    line-height: 2rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--text-gray);
  }

  .chart-days {
    @include fbx-ai-start-jc-start;
    width: 100%;
    margin-left: -0.75rem;
    margin-right: -0.75rem;
    overflow-x: auto;
    padding-bottom: 2rem;

    &::-webkit-scrollbar {
      height: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--main-color);
      border-radius: 10px;
    }

    .day {
      flex: 1;
      margin-left: 0.75rem;
      margin-right: 0.75rem;
      @include fbx-column-ai-start-jc-start;
      align-items: center;
      width: 13%;
      min-width: 13%;

      .name {
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
      }

      hr {
        border-color: var(--main-color);
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        border-width: 2px;
        width: 100%;
      }

      .date {
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        @include fbx-column-ai-start-jc-start;
        align-items: center;
        width: 100%;

        span:first-child {
          color: var(--main-color);
          font-size: 0.9rem;
          font-weight: 800;
        }

        span:last-child {
          color: var(--text-gray);
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      .hour {
        @include fbx-column-ai-start-jc-start;
        align-items: center;
        width: 100%;
        margin-top: 1rem;
        border-radius: 5px;
        border: 1px solid var(--gray);
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;

        span:first-child {
          color: var(--black);
          font-size: 0.9rem;
          font-weight: 800;
        }

        span:last-child {
          color: var(--text-gray);
          font-size: 0.8rem;
          font-weight: 500;
        }
      }

      .another-reserved {
        background-color: var(--inner-background-color);
        padding: 1.4rem 0;
      }

      .you-reserved {
        background-color: #ffe163;
        cursor: unset;

        span:first-child {
          color: #2b2827;
          font-size: 0.9rem;
          font-weight: 800;
        }

        span:last-child {
          color: #2b2827;
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
    }

    .set-new-time {
      margin-top: 6.75rem;
      align-items: flex-start;
      border-right: 1px solid var(--gray);
      padding-right: 1.5rem;
      width: 18%;
      min-width: 18%;
      margin-left: 0;

      p {
        @include fbx-column-ai-start-jc-start;
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 1.5rem;

        span:first-child {
          margin-bottom: 0.5rem;
        }
      }

      a {
        width: 70%;
        border: 1px solid var(--main-color);
        color: var(--black);
        border-radius: 5px;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-size: 0.8rem;
        text-align: center;
        transition: all 0.3s;

        &:hover {
          border: 1px solid var(--light-main-color);
          background-color: var(--light-main-color);
          color: #2b2827;
        }
      }
    }
  }
}

.comments {
  @include fbx-ai-start-jc-between;
  align-items: stretch;
  flex-wrap: wrap;

  .comment-box {
    width: 44%;
    border: 1px solid var(--gray);
    border-radius: 5px;
    background-color: var(--inner-background-color);
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    .title {
      @include fbx-ai-start-jc-between;
      align-items: flex-end;
      margin-bottom: 1.5rem;

      .right {
        @include fbx-ai-start-jc-start;

        .img {
          margin-left: 0.75rem;

          img {
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
          }
        }

        .name {
          p {
            font-weight: 800;
            color: var(--black);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }

          .star {
            @include fbx-ai-start-jc-start;
            width: 80%;

            svg {
              fill: none;
              color: var(--main-color);
            }

            svg.full {
              fill: var(--main-color);
            }
          }
        }
      }

      .left {
        span {
          color: var(--text-gray);
          font-size: 0.8rem;
        }
      }
    }

    .text {
      color: var(--black);
      font-size: 0.8rem;
      line-height: 1.8rem;
      text-align: justify;
    }
  }
}


@include mobile-device {
  .see-comments-modal {
    .uk-modal-body {
      > .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.9rem;
        }
      }

      > .text {
        padding: 1rem;
        flex-wrap: wrap;

        .comments {
          .comment-box {
            width: 100%;
            padding: 1rem;
            margin-bottom: 1rem;

            .title {
              margin-bottom: 1rem;

              .right {
                @include fbx-ai-start-jc-start;

                .img {
                  margin-left: 0.5rem;

                  img {
                    width: 2.5rem;
                    height: 2.5rem;
                  }
                }

                .name {
                  p {
                    font-size: 0.75rem;
                  }
                }
              }

              .left {
                span {
                  font-size: 0.75rem;
                }
              }
            }

            .text {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

  .uk-subnav {
    padding-right: 1rem;
    padding-left: 1rem;

    li {
      padding: 0 0 0.5rem 0;
      margin-left: 0.5rem;

      a {
        font-size: 0.8rem;
      }
    }
  }

  .reserve {
    .explain {
      margin-bottom: 1.5rem;
      line-height: 1.8rem;
      font-size: 0.75rem;
      text-align: justify;
    }

    .chart-days {
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      padding-bottom: 1.5rem;

      .day {
        flex: 1;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        width: 40%;
        min-width: 40%;

        .date {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;

          span:first-child {
            font-size: 0.8rem;
          }

          span:last-child {
            font-size: 0.75rem;
          }
        }

        .hour {
          margin-top: 0.5rem;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;

          span:first-child {
            font-size: 0.8rem;
          }

          span:last-child {
            font-size: 0.75rem;
          }
        }
      }

      .set-new-time {
        margin-top: 5.75rem;
        padding-right: 1rem;
        width: 50%;
        min-width: 50%;

        p {
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }

        a {
          width: 100%;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.75rem;
        }
      }
    }
  }
  .comments {
    .comment-box {
      width: 100%;
      padding: 1rem;
      margin-bottom: 1rem;

      .title {
        margin-bottom: 1rem;

        .right {
          @include fbx-ai-start-jc-start;

          .img {
            margin-left: 0.5rem;

            img {
              width: 2.5rem;
              height: 2.5rem;
            }
          }

          .name {
            p {
              font-size: 0.75rem;
            }
          }
        }

        .left {
          span {
            font-size: 0.75rem;
          }
        }
      }

      .text {
        font-size: 0.75rem;
      }
    }


  }
}

@include tablet-device {
  .see-comments-modal {
    .uk-modal-body {
      > .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.9rem;
        }
      }

      > .text {
        padding: 1rem;
        flex-wrap: wrap;

        .comments {
          .comment-box {
            width: calc(48% - 2rem);
            padding: 1rem;
            margin-bottom: 1rem;

            .title {
              margin-bottom: 1rem;

              .right {
                @include fbx-ai-start-jc-start;

                .img {
                  margin-left: 0.5rem;

                  img {
                    width: 2.5rem;
                    height: 2.5rem;
                  }
                }

                .name {
                  p {
                    font-size: 0.75rem;
                  }
                }
              }

              .left {
                span {
                  font-size: 0.75rem;
                }
              }
            }

            .text {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

  .uk-subnav {
    padding-right: 1rem;
    padding-left: 1rem;

    li {
      padding: 0 0 0.5rem 0;
      margin-left: 0.5rem;

      a {
        font-size: 0.8rem;
      }
    }

    .reserve {
      .explain {
        margin-bottom: 1.5rem;
        line-height: 1.8rem;
        font-size: 0.75rem;
        text-align: justify;
      }

      .chart-days {
        margin-left: -0.5rem;
        margin-right: -0.5rem;
        padding-bottom: 1.5rem;

        .day {
          flex: 1;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          width: 20%;
          min-width: 20%;

          .date {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;

            span:first-child {
              font-size: 0.8rem;
            }

            span:last-child {
              font-size: 0.75rem;
            }
          }

          .hour {
            margin-top: 0.5rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;

            span:first-child {
              font-size: 0.8rem;
            }

            span:last-child {
              font-size: 0.75rem;
            }
          }
        }

        .set-new-time {
          margin-top: 5.75rem;
          padding-right: 1rem;
          width: 25%;
          min-width: 25%;

          p {
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }

          a {
            width: 50%;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            font-size: 0.75rem;
          }
        }
      }
    }

    .comments {
      .comment-box {
        width: calc(48% - 2rem);
        padding: 1rem;
        margin-bottom: 1rem;

        .title {
          margin-bottom: 1rem;

          .right {
            @include fbx-ai-start-jc-start;

            .img {
              margin-left: 0.5rem;

              img {
                width: 2.5rem;
                height: 2.5rem;
              }
            }

            .name {
              p {
                font-size: 0.75rem;
              }
            }
          }

          .left {
            span {
              font-size: 0.75rem;
            }
          }
        }

        .text {
          font-size: 0.75rem;
        }
      }

    }
  }
}


.advisor-boxes {
  @include fbx-ai-start-jc-start;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  .box {
    @include boxshadow();
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background-color: var(--white);
    border-radius: 8px;
    width: calc(25% - 3rem);
    margin-bottom: 2rem;
    padding: 2rem 1rem 1.5rem 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;

    .img {
      position: relative;
      border-radius: 50%;
      border: 1px solid var(--gray);
      text-align: center;
      @include fbx-ai-center-jc-center;
      width: 8rem;
      height: 8rem;
      margin: 0 auto 1.5rem auto;

      img {
        border-radius: 50%;
        width: 7rem;
        height: 7rem;
      }

      .rate {
        position: absolute;
        color: var(--white);
        background-color: var(--main-color);
        bottom: -5%;
        border-radius: 25px;
        padding: 0 0.75rem;
        font-size: 0.9rem;
        font-weight: 600;
      }
    }

    .star-name {
      .star {
        margin-bottom: 0.5rem;

        svg {
          fill: none;
          color: var(--main-color);
        }

        .full {
          fill: var(--main-color);
        }

        .vue-star-rating {
          justify-content: center !important;
        }
      }

      .name {
        color: var(--black);
        font-size: 0.9rem;
        font-weight: bold;
      }
    }

    hr {
      text-align: center;
      width: 25%;
      border-color: var(--gray);
      margin: 1rem auto 1rem auto;
    }

    .expert {
      @include fbx-ai-center-jc-center;

      span {
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        padding: 0.25rem 0;
        width: 30%;
        border-radius: 25px;
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
        border: 1px solid var(--gray);
      }
    }

    .text {
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: var(--text-gray);
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.8rem;
    }

    .button {
      @include fbx-ai-center-jc-center;

      a {
        color: var(--black);
        font-size: 0.8rem;
        background-color: var(--inner-background-color);
        width: 95%;
        padding: 0.5rem 0;
        border-radius: 5px;
        transition: all 0.3s;

        &:hover {
          color: #2b2827;
          background-color: var(--light-main-color);
        }
      }
    }
  }
}

@include mobile-device {
  .advisor-boxes {
    margin-left: 0;
    margin-right: 0;

    .box {
      margin-right: 0;
      margin-left: 0;
      width: calc(100% - 1rem);
      margin-bottom: 1.5rem;
      padding: 1rem 0.5rem 0.75rem 0.5rem;

      .img {
        width: 6rem;
        height: 6rem;
        margin: 0 auto 1rem auto;

        img {
          width: 5rem;
          height: 5rem;
        }

        .rate {
          bottom: -5%;
          padding: 0 0.75rem;
          font-size: 0.8rem;
        }
      }

      .star-name {
        .name {
          font-size: 0.8rem;
        }
      }

      .expert {
        span {
          font-size: 0.75rem;
        }
      }

      .text {
        font-size: 0.75rem;
      }

      .button {
        a {
          font-size: 0.75rem;
          width: 35%;
        }
      }
    }
  }
}

@include tablet-device {
  .advisor-boxes {
    .box {
      width: calc(33.33% - 2rem);
      margin-bottom: 1.5rem;
      padding: 1rem 0.5rem 0.75rem 0.5rem;

      .img {
        width: 6rem;
        height: 6rem;
        margin: 0 auto 1rem auto;

        img {
          width: 5rem;
          height: 5rem;
        }

        .rate {
          bottom: -5%;
          padding: 0 0.75rem;
          font-size: 0.8rem;
        }
      }

      .star-name {
        .name {
          font-size: 0.8rem;
        }
      }

      .expert {
        span {
          font-size: 0.75rem;
        }
      }

      .text {
        font-size: 0.75rem;
      }

      .button {
        a {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include large-device {
  .advisor-boxes {
    .box {
      width: calc(33.33% - 3rem);
    }
  }
}
</style>
