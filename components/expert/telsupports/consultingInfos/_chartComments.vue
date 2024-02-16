<template>
    <div class="chart-comments">
        <client-only>
            <div class="chart">
                <h3>نمودار تعداد مشاوره</h3>
                <ul class="uk-subnav uk-subnav-pill" style="margin-left: 0">
                    <li>
                        <a @click="changeChartShowTab(1)"><span class="text">7 روز گذشته</span></a>
                    </li>
                    <li>
                        <a @click="changeChartShowTab(2)"><span class="text">ماه گذشته</span></a>
                    </li>
                    <li>
                        <a @click="changeChartShowTab(3)"><span class="text">سه ماه گذشته</span></a>
                    </li>
                    <li>
                        <a @click="changeChartShowTab(4)"><span class="text">شش ماه گذشته</span></a>
                    </li>
                </ul>
                <div class="uk-switcher uk-margin">
                    <div :class="[chartShowTab === 1 ? 'uk-active' : '']">
                        <div class="w-100" id="chartdiv1">
                            <!--                            <line-chart-->
                            <!--                                    :data="chartData"-->
                            <!--                                    :height="150"-->
                            <!--                                    :options="chartOptions"-->
                            <!--                            ></line-chart>-->

                            <apexchart :options="chartOptions" :series="chartData" height="200" type="area"></apexchart>
                        </div>
                        <div class="tips__info">
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 3">
                                <span class="counter">{{ specialTelSupportsCount }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران ویژه در 7 روز گذشته
                                </span>
                            </div>
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 5 || $auth.user.level == 7">
                                <span class="counter">{{ normalTelSupportsCount }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران عادی در 7 روز گذشته
                                </span>
                            </div>
                            <div @click="goToWorkExperience" class="tip" style="width: 45%">
                                <span class="counter-center">{{telWorkCount}} / {{telWorkContractCount}}</span>
                                <span class="text-center">
                                      کل مشاوره / کل قرارداد
                                </span>
                            </div>
                        </div>
                    </div>
                    <div :class="[chartShowTab === 2 ? 'uk-active' : '']">
                        <div class="w-100" id="chartdiv2">
                            <apexchart :options="chartOptions" :series="chartDataMonth" height="200" type="area">
                            </apexchart>
                        </div>
                        <div class="tips__info">
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 3">
                                <span class="counter">{{ specialTelSupportsCount1M }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران ویژه در 30 روز گذشته
                                </span>
                            </div>
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 5 || $auth.user.level == 7">
                                <span class="counter">{{ normalTelSupportsCount1M }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران عادی در 30 روز گذشته
                                </span>
                            </div>
                            <div @click="goToWorkExperience" class="tip" style="width: 45%">
                                <span class="counter-center">{{telWorkCount}} / {{telWorkContractCount}}</span>
                                <span class="text-center">
                                      کل مشاوره / کل قرارداد
                                </span>
                            </div>
                        </div>
                    </div>
                    <div :class="[chartShowTab === 3 ? 'uk-active' : '']">
                        <div class="w-100" id="chartdiv3">
                            <apexchart :options="chartOptions" :series="chartData3Month" height="200" type="area">
                            </apexchart>
                        </div>
                        <div class="tips__info">
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 3">
                                <span class="counter">{{ specialTelSupportsCount3M }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران ویژه در 3 ماه گذشته
                                </span>
                            </div>
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 5 || $auth.user.level == 7">
                                <span class="counter">{{ normalTelSupportsCount3M }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران عادی در 3 ماه گذشته
                                </span>
                            </div>
                            <div @click="goToWorkExperience" class="tip" style="width: 45%">
                                <span class="counter-center">{{telWorkCount}} / {{telWorkContractCount}}</span>
                                <span class="text-center">
                                      کل مشاوره / کل قرارداد
                                </span>
                            </div>
                        </div>
                    </div>
                    <div :class="[chartShowTab === 4 ? 'uk-active' : '']">
                        <div class="w-100" id="chartdiv4">

                            <apexchart :options="chartOptions" :series="chartData6Month" height="200" type="area">
                            </apexchart>
                        </div>
                        <div class="tips__info">
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 3">
                                <span class="counter">{{ specialTelSupportsCount6M }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران ویژه در 6 ماه گذشته
                                </span>
                            </div>
                            <div @click="goToHistory" class="tip" v-if="$auth.user.level == 5 || $auth.user.level == 7">
                                <span class="counter">{{ normalTelSupportsCount6M }}</span>
                                <span class="text">
                                    جلسه مشاوره کاربران عادی در 6 ماه گذشته
                                </span>
                            </div>
                            <div @click="goToWorkExperience" class="tip" style="width: 45%">
                                <span class="counter-center">{{telWorkCount}} / {{telWorkContractCount}}</span>
                                <span class="text-center">
                                      کل مشاوره / کل قرارداد
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </client-only>
        <hr/>
        <div class="comments">
            <div class="title-rate">
                <div class="title">
                    <h3>بازخورد های اخیر</h3>
                    <p>
                        در اپلای جرمنی تاکنون {{ commentsCount }} کامنت برای شما ثبت شده است
                    </p>
                </div>
                <div class="rate">
                    <div>
                        <client-only>
                            <star-rating :increment="0.5" :rating="scoreAvg" :read-only="true" :rtl="true"
                                         :show-rating="false" :star-size="30"/>
                        </client-only>
                    </div>
                </div>
            </div>
            <div :key="index" class="comment-box" v-for="(comment, index) in comments">
                <div class="name-img-date">
                    <div class="name-img">
                        <div class="img">
                            <img :src="comment.author.image" alt=""/>
                        </div>
                        <div class="name">
                            <p>
                                {{ comment.author.firstname }} {{ comment.author.lastname }}
                            </p>
                            <div class="rate">
                                <client-only>
                                    <star-rating :increment="0.5" :rating="comment.score" :read-only="true" :rtl="true"
                                                 :show-rating="false" :star-size="20"/>
                                </client-only>
                            </div>
                        </div>
                    </div>
                    <span class="date">{{ comment.date }}</span>
                </div>
                <div class="text">
                    <p v-html="comment.text"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import VueApexCharts from 'vue-apexcharts'

export default {
    props: [
        "chartData",
        "monthLabels",
        "chartDataMonth",
        "chartData3Month",
        "chartData6Month",
        "allTelSupportsCount",
        "normalTelSupportsCount",
        "specialTelSupportsCount",
        "allTelSupportsCount1M",
        "normalTelSupportsCount1M",
        "specialTelSupportsCount1M",
        "allTelSupportsCount3M",
        "normalTelSupportsCount3M",
        "specialTelSupportsCount3M",
        "allTelSupportsCount6M",
        "normalTelSupportsCount6M",
        "specialTelSupportsCount6M",
    ],
    components: {
        [process.browser && 'apexchart']: () => import('vue-apexcharts'),

        // VueApexCharts,
    },
    data() {

        return {
            chartShowTab: 1,
            chartOptions: {
                chart: {
                    height: 200,
                    type: 'area'
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'date',
                    categories: ["شنبه", "یک شنبه", "دو شنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه",],
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            },

        };
    },
    computed: {
        comments() {
            return this.$store.getters["expert/comments"];
        },
        scoreAvg() {
            return this.$store.getters["expert/scoreAvg"];
        },
        commentsCount() {
            return this.$store.getters["expert/commentsCount"];
        },
        telWorkCount() {
            return this.$store.getters["expert/telWorkCount"];
        },
        telWorkContractCount() {
            return this.$store.getters["expert/telWorkContractCount"];
        },
    },
    methods: {
        goToHistory() {
            this.$router.push("/expert/telsupports/history");
        },
        goToWorkExperience() {
            this.$router.push("/expert/workExperience");
        },
        changeChartShowTab(tabNumber) {
            this.chartShowTab = tabNumber;
        },
    },
    watch: {
        chartShowTab() {
            let categories = this.monthLabels.days;
            switch (this.chartShowTab) {
                case 2:
                    categories = ["هفته اول", "هفته دوم", "هفته سوم", "هفته چهارم"];
                    break;
                case 3:
                    categories = this.monthLabels.last3Month;
                    break;
                case 4:
                    categories = this.monthLabels.last6Month;
                    break;
            }
            let options = this.chartOptions;
            options = {
                ...options,
                xaxis: {
                    type: "date",
                    categories: categories,
                },
            };
            this.chartOptions = options;
        }
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.chart-comments {
  //padding-right: 1rem;
  width: 47%;
  height: 26rem;
  overflow-y: scroll;

  //overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 8px;
  }

  h3 {
    color: var(--black);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .chart {
    ul.uk-subnav {
      li {
        margin-bottom: 1rem;

        a {
          border: 1px solid var(--gray);
          border-radius: 5px;
          color: var(--black);
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          transition: all 0.3s;
        }

        &.uk-active {
          a {
            border-color: var(--inner-background-color);
            background-color: var(--inner-background-color) !important;
          }
        }

        &.uk-active:hover {
          a {
            color: var(--black);
          }
        }

        &:hover {
          a {
            border-color: var(--inner-background-color);
            background-color: var(--inner-background-color);
            color: #181922;
          }
        }
      }
    }

    .uk-switcher {
      margin-top: 0 !important;

      #chartdiv1,
      #chartdiv2,
      #chartdiv3 {
        height: 200px;
        width: 99% !important;
      }

      .tips__info {
        margin-top: 2rem;
        @include fbx-ai-start-jc-start;
        width: calc(98.4% + 1rem);
        flex-wrap: wrap;
        margin-left: -0.5rem;
        margin-right: -0.5rem;

        .tip {
          @include fbx-column-ai-start-jc-start;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 5px;
          border: 1px solid var(--gray);
          // width: calc(32.8% - 2rem);
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          margin-bottom: 1rem;

          .counter {
            color: var(--main-color);
            border-bottom: 1px solid var(--main-color);
            font-size: 1rem;
            font-weight: 800;
            margin-bottom: 0.5rem;
          }

          .text {
            color: var(--black);
            font-size: 0.8rem;
            line-height: 1.8rem;
          }

            .counter-center {
                color: var(--main-color);
                border-bottom: 1px solid var(--main-color);
                font-size: 1rem;
                font-weight: 800;
                margin-bottom: 0.5rem;
                width: 100%;
                text-align: center;
            }

            .text-center {
                color: var(--black);
                font-size: 0.8rem;
                line-height: 1.8rem;
                width: 100%;
                text-align: center;
            }
        }
      }
    }
  }

  hr {
    width: 98%;
    margin-top: 3rem;
    border-color: var(--gray);
  }

  .comments {
    width: 99%;

    .title-rate {
      @include fbx-ai-start-jc-between;
      margin-bottom: 1.5rem;

      .title {
        width: 70%;

        p {
          color: var(--text-gray);
          font-size: 0.8rem;
          line-height: 1.5rem;
        }
      }

      .rate {
        @include fbx-ai-center-jc-start;

        span {
          color: var(--main-color);
          font-size: 1rem;
          font-weight: 800;
          margin-left: 0.5rem;
        }

        > div {
          @include fbx-ai-center-jc-start;

          svg {
            color: var(--gray);
          }

          svg.full {
            color: var(--main-color);
          }
        }
      }
    }

    .comment-box {
      margin-bottom: 1rem;
      border: 1px solid var(--gray);
      border-radius: 5px;
      padding: 1rem;
      width: calc(99% - 2rem);

      .name-img-date {
        margin-bottom: 1.5rem;
        @include fbx-ai-start-jc-between;

        .name-img {
          @include fbx-ai-start-jc-start;

          .img {
            margin-left: 1rem;

            img {
              border-radius: 50%;
              width: 3rem;
              height: 3rem;
            }
          }

          .name {
            p {
              font-size: 0.8rem;
              color: var(--black);
              font-weight: 600;
              margin-bottom: 0.5rem;
            }

            > div {
              @include fbx-ai-center-jc-start;

              svg {
                color: var(--gray);
              }

              svg.full {
                color: var(--main-color);
              }
            }
          }
        }

        .date {
          color: var(--text-gray);
          font-size: 0.8rem;
          align-self: flex-end;
        }
      }

      .text {
        text-align: justify;
        font-size: 0.8rem;
        color: var(--black);
        line-height: 2rem;
      }
    }
  }
}

@include mobile-device {
  .chart-comments {
    width: 100%;

    h3 {
      font-size: 0.9rem;
    }

    .chart {
      ul.uk-subnav {
        li {
          margin-bottom: 1rem;

          a {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
          }
        }
      }

      .uk-switcher {
        .tips__info {
          margin-top: 1rem;
          width: calc(97% + 1rem);

          .tip {
            width: calc(49% - 2rem);

            .counter {
              font-size: 0.9rem;
            }

            .text {
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    hr {
      margin-top: 1.5rem;
    }

    .comments {
      .title-rate {
        margin-bottom: 1rem;

        .title {
          p {
            font-size: 0.75rem;
          }
        }

        .rate {
          span {
            font-size: 0.9rem;
          }
        }
      }

      .comment-box {
        .name-img-date {
          margin-bottom: 1rem;

          .name-img {
            @include fbx-ai-start-jc-start;

            .img {
              margin-left: 0.5rem;

              img {
                width: 2rem;
                height: 2rem;
              }
            }

            .name {
              p {
                font-size: 0.75rem;
              }
            }
          }

          .date {
            font-size: 0.75rem;
          }
        }

        .text {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include tablet-device {
  .chart-comments {
    width: 100%;

    h3 {
      font-size: 0.9rem;
    }

    .chart {
      ul.uk-subnav {
        li {
          margin-bottom: 1rem;

          a {
            padding: 0.5rem 0.75rem;
            font-size: 0.75rem;
          }
        }
      }

      .uk-switcher {
        .tips__info {
          margin-top: 1rem;
          width: calc(97% + 1rem);

          .tip {
            width: calc(49% - 2rem);

            .counter {
              font-size: 0.9rem;
            }

            .text {
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    hr {
      margin-top: 1.5rem;
    }

    .comments {
      .title-rate {
        margin-bottom: 1rem;

        .title {
          p {
            font-size: 0.75rem;
          }
        }

        .rate {
          span {
            font-size: 0.9rem;
          }
        }
      }

      .comment-box {
        .name-img-date {
          margin-bottom: 1rem;

          .name-img {
            @include fbx-ai-start-jc-start;

            .img {
              margin-left: 0.5rem;

              img {
                width: 2rem;
                height: 2rem;
              }
            }

            .name {
              p {
                font-size: 0.75rem;
              }
            }
          }

          .date {
            font-size: 0.75rem;
          }
        }

        .text {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
