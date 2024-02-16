<template>
  <div class="reserved-comment">
    <ul class="uk-subnav uk-subnav-pill" uk-switcher>
      <li><a>رزرو وقت مشاوره</a></li>
      <li>
        <a><span class="text">نظرات و بازخوردها</span></a>
      </li>
    </ul>
    <div class="uk-switcher" style="touch-action: pan-y pinch-zoom">
      <div>
        <div class="reserve">
          <p class="explain">
            کـاربر عزیز! چنانچه احتیـاج به مشاوره تلفنی دارید، لطفا از بین
            زمان&zwnj;های مشخص&zwnj;شده زیر، زمان مورد نظر را انتخاب کنید. توجه
            داشته باشید که مشاوره به صورت تمـاس صوتی در اپلیکیشن واتساپ انجام
            می&zwnj;شود لطفا در تایم مقرر با شماره اعلام شده تماس بگیرید
          </p>
          <div class="chart-days">
            <div class="day" v-for="(time, index) in times">
              <span class="name">{{ time.week }}</span>
              <hr/>
              <div class="date">
                <span>{{ time.day }}</span>
                <span>{{ time.month }} ماه</span>
              </div>
              <template
                  v-for="(_time, index) in time.times"
              >
                <template v-if="_time.reserved == 1">
                  <button
                      :key="index"
                      @click="selectTelSupport(_time)"
                      class="hour another-reserved"
                      href="#busy-request-consulting-modal"
                      uk-toggle
                  >
                    <span>{{ _time.fromTime }}</span>
                  </button>
                </template>
                <template
                    v-else-if="
                    _time.reserved == 2 &&
                    telSupportReserve == null
                  "
                >
                  <a
                      :key="index"
                      @click="selectTelSupport(_time)"
                      class="hour"
                      href="#send-request-consulting-modal"
                      uk-toggle
                  >
                    <span>{{ _time.fromTime }}</span>
                    <span>تا ساعت {{ _time.toTime }}</span>
                  </a>
                </template>
                <template
                    v-else-if="
                    _time.reserved == 2 &&
                    telSupportReserve != null
                  "
                >
                  <a
                      :key="index"
                      @click="selectTelSupport(_time)"
                      class="hour"
                      href="#cant-request-consulting-modal"
                      uk-toggle
                  >
                    <span>{{ _time.fromTime }}</span>
                    <span>تا ساعت {{ _time.toTime }}</span>
                  </a>
                </template>
                <template v-else-if="_time.reserved == 3">
                  <a
                      :key="index"
                      @click="selectTelSupport(_time)"
                      class="hour you-reserved"
                  >
                    <span
                    >{{ _time.fromTime }} تا
                      {{ _time.toTime }}</span
                    >
                    <span>برای شما رزرو شد</span>
                  </a>
                </template>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="comments">
          <div
              :key="index"
              class="comment-box"
              v-for="(comment, index) in comments"
          >
            <div class="title">
              <div class="right">
                <div class="img">
                  <img :src="comment.author.image? comment.author.image:''" alt=""/>
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
                          :increment="0.5"
                          :rating="comment.score"
                          :read-only="true"
                          :rtl="true"
                          :show-rating="false"
                          :star-size="20"
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
</template>

<script>

export default {
  computed: {
    expert() {
      return this.$store.getters["telSupports/expert"];
    },
    telSupportReserve() {
      return this.$store.getters["telSupports/telSupportReserve"];
    },
    comments() {
      return this.$store.getters["telSupports/comments"];
    },
    times() {
      return this.$store.getters["telSupports/times"];
    },
    canGo() {
      return this.$store.getters["telSupports/vuexTurnOffVpnModal"];
    },
  },
  methods: {
    async selectTelSupport(telSupport) {
      this.$store.dispatch("telSupports/setVuexTurnOffVpnModal", true);
      this.$store.commit("telSupports/SET_TelSupport", telSupport);

      // const ipChecker = await this.$axios.get(`https://ipwho.is`);
      // if (ipChecker.data.country === 'Iran' && ipChecker.data.country_code === 'IR') {
      //   this.$store.dispatch("telSupports/setVuexTurnOffVpnModal", true);
      //   this.$store.commit("telSupports/SET_TelSupport", telSupport);
      // } else {
      //   this.$store.dispatch("telSupports/setVuexTurnOffVpnModal", false);
      // }
    },
    async setNewTime() {
      let expertId = this.$route.params.id;
      let userId = this.$auth.user.id;
      const {data} = await this.$axios.post(`v1/user/setNewTime`, {
        expertId: expertId,
        userId: userId,
      });
      if (data.status == 1) {
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
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.reserved-comment {
  margin-top: 2rem;
  overflow: hidden;
  @include boxshadow();
  border-radius: 8px;
  background-color: var(--white);
  padding-top: 2rem;
  padding-bottom: 2rem;

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

  .uk-switcher {
    padding-right: 2rem;
    padding-left: 2rem;
    margin-top: 2rem;

    .reserve {
      .explain {
        margin-bottom: 2.5rem;
        line-height: 2rem;
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--black);

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

          button {
            cursor: pointer;
            background-color: var(--white);
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
  }
}

@include mobile-device {
  .reserved-comment {
    margin-top: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

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

    .uk-switcher {
      padding-right: 1rem;
      padding-left: 1rem;
      margin-top: 1.5rem;

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

            button {
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
  }
}

@include tablet-device {
  .reserved-comment {
    margin-top: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

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

    .uk-switcher {
      padding-right: 1rem;
      padding-left: 1rem;
      margin-top: 1.5rem;

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

            button {
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
}
</style>
