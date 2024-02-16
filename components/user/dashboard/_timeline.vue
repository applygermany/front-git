<template>
    <div class="timeline" v-if="userDuties.length !== 0">
        <div class="timeline__title">
            <h3>تایم لاین وظیفه</h3>
            <p>وظایف تعریف شده توسط کارشناس خود را قبل از موعد مقرر انجام دهید</p>
        </div>
        <div class="body">
            <div>
                <div
                        :class="{
            'each-duty': userDuty.status === 1,
            'each-duty undone': userDuty.status === 2,
            'each-duty done': userDuty.status === 3,
          }"
                        v-for="(userDuty, index) in userDuties"
                        :key="index"
                >
                    <div class="top">
                        <p>{{ userDuty.day }}</p>
                        <div>
              <span class="right">
                {{ userDuty.month }} ماه {{ userDuty.year }}
              </span>
                            <span class="left" v-if="userDuty.status !== 3">
                <template v-if="userDuty.diff[0] < 0">
                  {{ Math.abs(userDuty.diff[0]) }} روز گذشته
                </template>
                <template v-else-if="userDuty.diff[0] == 0">
                  {{ Math.abs(userDuty.diff[1]) }} ساعت باقی مانده
                </template>
                <template v-else-if="userDuty.diff[0] > 0">
                  {{ Math.abs(userDuty.diff[0]) }} روز باقی مانده
                </template>
              </span>
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    class="uk-svg"
                            >
                                <circle
                                        id="Ellipse_1600"
                                        data-name="Ellipse 1600"
                                        cx="8"
                                        cy="8"
                                        r="8"
                                        fill="#e4c064"
                                ></circle>
                            </svg>
                        </div>
                    </div>
                    <div class="middle">
                        <div style="display: none">{{ index++ }}</div>
                        <div :class="{ border: index >= 2, none: index === 1 }"></div>

                        <p>
                            <svg height="20" v-if="userDuty.status === 3" viewBox="0 0 20 20" width="20"
                                 xmlns="http://www.w3.org/2000/svg"
                                 style="margin-left: 5px">
                                <defs>
                                    <style>
                                        .ab {
                                            fill: #146fe9;
                                        }

                                        .bb {
                                            fill: none;
                                            stroke: #fff;
                                            stroke-linejoin: round;
                                            stroke-width: 2px;
                                        }
                                    </style>
                                </defs>
                                <g transform="translate(-550.5 -1254)">
                                    <path class="ab"
                                          d="M13.758.111a.5.5,0,0,1,.577.239l1.818,3.3a.5.5,0,0,0,.2.2l3.3,1.818a.5.5,0,0,1,.239.577L18.84,9.861a.5.5,0,0,0,0,.278l1.048,3.619a.5.5,0,0,1-.239.577l-3.3,1.818a.5.5,0,0,0-.2.2l-1.818,3.3a.5.5,0,0,1-.577.239L10.139,18.84a.5.5,0,0,0-.278,0L6.242,19.889a.5.5,0,0,1-.577-.239l-1.818-3.3a.5.5,0,0,0-.2-.2L.35,14.335a.5.5,0,0,1-.239-.577L1.16,10.139a.5.5,0,0,0,0-.278L.111,6.242A.5.5,0,0,1,.35,5.665l3.3-1.818a.5.5,0,0,0,.2-.2L5.665.35A.5.5,0,0,1,6.242.111L9.861,1.16a.5.5,0,0,0,.278,0Z"
                                          transform="translate(550.5 1254)"/>
                                    <path class="bb" d="M-19664.293,10788.184l2.582,2.541,5.414-5.33"
                                          transform="translate(20220.793 -9523.895)"/>
                                </g>
                            </svg>
                            <a v-if="(userDuty.status === 1 || userDuty.status === 2)
                            && (userDuty.title === 'تکمیل مدارک' || userDuty.title === 'ترجمه مدارک' || userDuty.title === 'تایید و لگال مدارک' ||
                            userDuty.title === 'اخذ مدرک زبان' || userDuty.title === 'پست مدارک' )" class="done-button"
                               href="#done-duty-modal"
                               @click='dutyInfo(userDuty)' uk-toggle>انجام شد</a>
                            {{ userDuty.title }}
                        </p>
                        <span v-if="userDuty.status === 1">وضعیت : در دست اقدام</span>
                        <span v-if="userDuty.status === 2">وضعیت : رد شده</span>
                        <span v-if="userDuty.status === 3">وضعیت : انجام شده</span>
                    </div>
                    <div class="bottom description" v-if="userDuty.text.length > 110">
                        <p>
                            <a v-if="userDuty.applyLevel !== null" class="alert"
                               href="#apply-level-modal"
                               uk-toggle
                               @click="selectPhase(userDuty.applyLevel)">!</a>
                            {{ userDuty.text.substr(0, 100) }}...
                        </p>
                        <div
                                delay-hide="100"
                                uk-dropdown
                                class='drop'
                        >
                            {{ userDuty.text }}
                        </div>
                    </div>
                    <div class="bottom" v-else>
                        <p>
                            <a v-if="userDuty.applyLevel !== null" class="alert"
                               href="#apply-level-modal"
                               uk-toggle
                               @click="selectPhase(userDuty.applyLevel)">!</a>
                            {{ userDuty.text }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        userDuties() {
            return this.$store.getters["user/userDuties"];
        },
    },
    methods: {
        selectPhase(phase) {
            this.$store.dispatch("applyLevels/setApplyLevelPhase", phase);
        },
        dutyInfo(info) {
            this.$store.commit('expert/SET_DutyArg', info)
        }
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.none {
  display: none;
}

.done-button {
  transition: all 0.3s;
  background-color: var(--inner-background-color);
  color: var(--black);
  font-size: 0.8rem;
  border-radius: 5px;
  padding: 0.3rem 1rem;
  margin-left: 10px;
  margin-right: 15px;

  &:hover {
    background-color: var(--light-main-color);
    color: #2b2827;
  }
}

.alert {
  width: 10px;
  height: 10px;
  border-radius: 1000px;
  background: var(--main-color);
  color: var(--white);
  padding-right: 10px;
  padding-left: 10px;
  text-align: center;
  cursor: pointer;
}

.drop {
  width: 320px !important;
  font-size: 15px !important;
  line-height: 1.6 !important;
  font-weight: 400 !important;
}

.timeline {
  margin-bottom: 2rem;

  .timeline__title {
    margin-bottom: 2rem;
    padding-right: 2rem;

    h3 {
      font-weight: 800;
      font-size: 1.2rem;
      color: var(--black);
    }

    p {
      margin-top: 1rem;
      font-size: 0.8rem;
      color: var(--text-gray);
      font-weight: 700;
    }
  }

  .body {
    @include boxshadow();
    background-color: var(--white);
    border-radius: 8px;
    padding: 2rem 2rem 0 2rem;

    > div {
      padding-bottom: 2rem;
      @include fbx-ai-start-jc-start;
      overflow-x: auto;
      width: 100%;

      &::-webkit-scrollbar {
        height: 8px;
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

      .each-duty {
        min-width: 37%;
        width: 37%;
        @include fbx-column-ai-start-jc-start;

        .top {
          padding-right: 1rem;

          p {
            padding-right: 0.75rem;
            font-weight: 800;
            color: var(--black);
            font-size: 1.3rem;
          }

          > div {
            @include fbx-ai-start-jc-between;
            position: relative;
            width: 100%;
            padding-top: 0.75rem;
            padding-right: 0.75rem;
            border-right: 1px solid var(--main-color);

            .right {
              color: var(--black);
              font-size: 0.8rem;
            }

            .left {
              font-size: 0.8rem;
              font-weight: 500;
              color: var(--main-color);
            }

            svg {
              position: absolute;
              right: -0.25rem;
              top: -0.4rem;
              color: var(--main-color);
              width: 0.4rem;
            }
          }
        }

        .middle {
          width: calc(100% - 1rem);
          @include fbx-ai-center-jc-between;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;
          padding: 0.5rem;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          background-color: #CBC7C2;
          position: relative;

          .border {
            position: absolute;
            padding: 0.5rem;
            margin-right: -0.5rem;
            right: 0.5rem;
            height: calc(100% - 1rem);
            border-bottom-left-radius: 25px;
            border-top-left-radius: 25px;
            background-color: var(--white);
          }

          p {
            margin-right: 1.5rem;
            font-weight: 800;
            color: var(--white);
            font-size: 0.8rem;
          }

          span {
            color: var(--white);
            font-size: 0.8rem;
            font-weight: 500;
          }
        }

        .bottom {
          padding-right: 1rem;
          height: 100%;

          p {
            height: 100%;
            padding-right: 1rem;
            padding-left: 1rem;
            border-right: 1px solid var(--main-color);
            line-height: 1.8rem;
            color: var(--black);
            font-size: 0.8rem;
            text-align: justify;
          }
        }

        &.done {
          .middle {
            background-color: var(--main-color);
          }
        }

        &.undone {
          .top {
            > div {
              border-right: 1px solid var(--red);

              .left {
                font-size: 0.8rem;
                font-weight: 500;
                color: var(--red);
              }

              svg {
                color: var(--red);
              }
            }
          }

          .middle {
            background-color: var(--red);
          }

          .bottom {
            p {
              border-right: 1px solid var(--red);
            }
          }
        }
      }
    }
  }
}


@include mobile-device {
  .done-button {
    margin-right: 10px;
  }
  .timeline {
    .timeline__title {
      margin-bottom: 1rem;
      padding-right: 1rem;

      h3 {
        font-size: 1rem;
      }

      p {
        line-height: 1.5rem;
        font-size: 0.75rem;
      }
    }

    .body {
      padding: 1rem 1rem 0 1rem;

      > div {
        padding-bottom: 2rem;

        .each-duty {
          min-width: 90%;
          width: 90%;

          .top {
            p {
              font-size: 1.1rem;
            }

            > div {
              svg {
                right: -0.26rem;
              }
            }
          }

          .middle {
            margin-top: 1rem;
            margin-bottom: 1rem;

            p {
              font-size: 0.75rem;
            }

            span {
              font-size: 0.75rem;
            }
          }

          .bottom {
            p {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

}

@include tablet-device {
  .timeline {
    .timeline__title {
      margin-bottom: 1rem;
      padding-right: 1rem;

      h3 {
        font-size: 1rem;
      }

      p {
        line-height: 1.5rem;
        font-size: 0.75rem;
      }
    }

    .body {
      padding: 1rem 1rem 0 1rem;

      > div {
        padding-bottom: 2rem;

        .each-duty {
          width: max-content;

          .top {
            p {
              font-size: 1.1rem;
            }

            > div {
              svg {
                right: -0.26rem;
              }
            }
          }

          .middle {
            margin-top: 1rem;
            margin-bottom: 1rem;

            p {
              font-size: 0.75rem;
            }

            span {
              font-size: 0.75rem;
            }
          }

          .bottom {
            p {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}

@include large-device {
  .timeline {
    .timeline__title {
      margin-bottom: 1rem;
      padding-right: 1rem;

      h3 {
        font-size: 1rem;
      }

      p {
        line-height: 1.5rem;
        font-size: 0.75rem;
      }
    }

    .body {
      > div {
        .each-duty {
          width: max-content;
        }
      }
    }
  }
}
</style>
