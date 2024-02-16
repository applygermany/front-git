<template>
  <div>
    <section
        :class="[vuexUserMenuState ? 'collapse' : '']"
        class="wrapper"
        id="consulting"
    >
      <ConsultingInfos
          :monthLabels="monthLabels"
          :allTelSupportsCount="allTelSupportsCount"
          :allTelSupportsCount1M="allTelSupportsCount1M"
          :allTelSupportsCount3M="allTelSupportsCount3M"
          :allTelSupportsCount6M="allTelSupportsCount6M"
          :chartData="chartData"
          :chartData3Month="chartData3Month"
          :chartData6Month="chartData6Month"
          :chartDataMonth="chartDataMonth"
          :normalTelSupportsCount="normalTelSupportsCount"
          :normalTelSupportsCount1M="normalTelSupportsCount1M"
          :normalTelSupportsCount3M="normalTelSupportsCount3M"
          :normalTelSupportsCount6M="normalTelSupportsCount6M"
          :specialTelSupportsCount="specialTelSupportsCount"
          :specialTelSupportsCount1M="specialTelSupportsCount1M"
          :specialTelSupportsCount3M="specialTelSupportsCount3M"
          :specialTelSupportsCount6M="specialTelSupportsCount6M"
      />

      <ConsultingTable :getTelSupportData="getTelSupportData"/>

      <UserNormalTelSupportModal/>
    </section>

  </div>
</template>

<script>
import ConsultingInfos from "@/components/expert/telsupports/consultingInfos/index.vue";
import ConsultingTable from "@/components/expert/telsupports/consultingTable/index.vue";
import UserNormalTelSupportModal from "@/components/expert/modal/_userTelSupportModal.vue";

export default {
  layout: "expertLayout",
  components: {
    ConsultingInfos,
    ConsultingTable,
    UserNormalTelSupportModal
  },
  data() {
    return {
      id: 0,

      chartData: {
        series: [],
      },
      chartDataMonth: {
        series: [],
      },
      chartData3Month: {
        series: [],
      },
      getTelSupportData: [],
      monthLabels: {},
      monthName: null,
      allTelSupportsCount: 0,
      normalTelSupportsCount: 0,
      specialTelSupportsCount: 0,
      allTelSupportsCount1M: 0,
      normalTelSupportsCount1M: 0,
      specialTelSupportsCount1M: 0,
      allTelSupportsCount3M: 0,
      normalTelSupportsCount3M: 0,
      specialTelSupportsCount3M: 0,
      allTelSupportsCount6M: 0,
      normalTelSupportsCount6M: 0,
      specialTelSupportsCount6M: 0,
    };
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters["expert/vuexUserMenuState"];
    },
  },
  async asyncData({$auth, store, $axios, redirect}) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    let formTab = 2;
    if ($auth.user.level === 3) formTab = 1;

    const {data: getTags} = await $axios.get("/v1/expert/getTags");

    store.commit("expert/SET_DateTags", getTags.dateTags);
    store.commit("expert/SET_MoneyTags", getTags.moneyTags);
    store.commit("expert/SET_TelMaxPrice", getTags.telMaxPrice);
    store.commit("expert/SET_Categories", getTags.categories);

    const {data: monthTels} = await $axios.get("/v1/expert/getMonthTel");
    // monthName: monthTels.data.monthName,
    store.commit("expert/SET_MonthTels", monthTels.telSupports);
    store.commit("expert/SET_TelWorkCount", monthTels.telSupportsCount);
    store.commit("expert/SET_TelWorkContractCount", monthTels.contractCount);

    const {data: comments} = await $axios.get("/v1/expert/getComments");

    store.commit("expert/SET_Comments", comments.comments);
    store.commit("expert/SET_CommentsCount", comments.commentsCount);
    store.commit("expert/SET_ScoreAvg", comments.scoreAvg);

    const {data: telSupportData} = await $axios.get(
        "/v1/expert/getTelSupportData"
    );

    // const getTelSupportData = await $axios.get(
    //   "/v1/expert/getTelSupportData7Days"
    // );
    // const getTelSupportDataMonth = await $axios.get(
    //   "v1/expert/getTelSupportDataMonth"
    // );
    // const getTelSupportData3Month = await $axios.get(
    //   "v1/expert/getTelSupportData3Month"
    // );
    // const getTelSupportData6Month = await $axios.get(
    //   "v1/expert/getTelSupportData6Month"
    // );

    var normalTelSupportsCount = 0;
    const normalTelSupports = telSupportData.data["7d"];
    console.log(normalTelSupports)
    var normalTelSupportsKeys = [];
    var normalTelSupportsValues = [];
    for (const [key, value] of Object.entries(normalTelSupports[5])) {
      normalTelSupportsKeys.push(key);
      normalTelSupportsValues.push(value);
      if (value > 0) normalTelSupportsCount += value;
    }

    var specialTelSupportsCount = 0;
    const specialTelSupports = telSupportData.data["7d"];
    var specialTelSupportsValues = [];
    for (const [key, value] of Object.entries(specialTelSupports[6])) {
      console.log(value)
      specialTelSupportsValues.push(value);
      if (value > 0) specialTelSupportsCount += value;
    }

    var allTelSupportsCount = 0;
    const allTelSupports = telSupportData.data["7d"];
    var allTelSupportsValues = [];
    for (const [key, value] of Object.entries(allTelSupports[7])) {
      allTelSupportsValues.push(value);
      if (value > 0) allTelSupportsCount += value;
    }

    var normalTelSupportsCount1M = 0;
    const normalTelSupports1M = telSupportData.data["1m"].normalUsers;
    for (const [key, value] of Object.entries(normalTelSupports1M)) {
      if (value > 0) normalTelSupportsCount1M += value;
    }

    var specialTelSupportsCount1M = 0;
    const specialTelSupports1M = telSupportData.data["1m"].specialUsers;
    for (const [key, value] of Object.entries(specialTelSupports1M)) {
      if (value > 0) specialTelSupportsCount1M += value;
    }

    var allTelSupportsCount1M = 0;
    const allTelSupports1M = telSupportData.data["1m"].allUsers;
    for (const [key, value] of Object.entries(allTelSupports1M)) {
      if (value > 0) allTelSupportsCount1M += value;
    }

    var normalTelSupportsCount3M = 0;
    const normalTelSupports3M = telSupportData.data["3m"].normalUsers;
    for (const [key, value] of Object.entries(normalTelSupports3M)) {
      if (value > 0) normalTelSupportsCount3M += value;
    }

    var specialTelSupportsCount3M = 0;
    const specialTelSupports3M = telSupportData.data["3m"].specialUsers;
    for (const [key, value] of Object.entries(specialTelSupports3M)) {
      if (value > 0) specialTelSupportsCount3M += value;
    }

    var allTelSupportsCount3M = 0;
    const allTelSupports3M = telSupportData.data["3m"].allUsers;
    for (const [key, value] of Object.entries(allTelSupports3M)) {
      if (value > 0) allTelSupportsCount3M += value;
    }

    var normalTelSupportsCount6M = 0;
    const normalTelSupports6M = telSupportData.data["6m"].normalUsers;
    for (const [key, value] of Object.entries(normalTelSupports6M)) {
      if (value > 0) normalTelSupportsCount6M += value;
    }

    var specialTelSupportsCount6M = 0;
    const specialTelSupports6M = telSupportData.data["6m"].specialUsers;
    for (const [key, value] of Object.entries(specialTelSupports6M)) {
      if (value > 0) specialTelSupportsCount6M += value;
    }

    var allTelSupportsCount6M = 0;
    const allTelSupports6M = telSupportData.data["6m"].allUsers;
    for (const [key, value] of Object.entries(allTelSupports6M)) {
      if (value > 0) allTelSupportsCount6M += value;
    }


    const chartDataDatasets =
        $auth.user.level == 3
            ? {
              name: "کاربران ویژه",
              data: specialTelSupportsValues,
              lineTension: 0,
              backgroundColor: "rgba(0, 255, 0, 0.2)",
            }
            : {
              name: "کاربران عادی",
              data: normalTelSupportsValues,
              lineTension: 0,
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            };

    const chartDataMonthDatasets =
        $auth.user.level == 3
            ? {
              name: "کاربران ویژه",
              data: telSupportData.data["1m"].specialUsers,
              lineTension: 0,
              backgroundColor: "rgba(0, 255, 0, 0.2)",
            }
            : {
              name: "کاربران عادی",
              data: telSupportData.data["1m"].normalUsers,
              lineTension: 0,
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            };

    const chartData3MonthDatasets =
        $auth.user.level == 3
            ? {
              name: "کاربران ویژه",
              data: telSupportData.data["3m"].specialUsers,
              lineTension: 0,
              backgroundColor: "rgba(0, 255, 0, 0.2)",
            }
            : {
              name: "کاربران عادی",
              data: telSupportData.data["3m"].normalUsers,
              lineTension: 0,
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            };

    const chartData6MonthDatasets =
        $auth.user.level == 3
            ? {
              name: "کاربران ویژه",
              data: telSupportData.data["6m"].specialUsers,
              lineTension: 0,
              backgroundColor: "rgba(0, 255, 0, 0.2)",
            }
            : {
              name: "کاربران عادی",
              data: telSupportData.data["6m"].normalUsers,
              lineTension: 0,
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            };

    return {
      monthLabels: getTags.monthLabels,
      chartData: [
        chartDataDatasets,
      ],
      chartDataMonth: [
        chartDataMonthDatasets
      ],
      chartData3Month: [
        chartData3MonthDatasets,
      ],
      chartData6Month: [
        chartData6MonthDatasets,
      ],
      getTelSupportData: telSupportData.data["7d"],
      allTelSupportsCount: allTelSupportsCount,
      normalTelSupportsCount: normalTelSupportsCount,
      specialTelSupportsCount: specialTelSupportsCount,
      allTelSupportsCount1M: allTelSupportsCount1M,
      normalTelSupportsCount1M: normalTelSupportsCount1M,
      specialTelSupportsCount1M: specialTelSupportsCount1M,
      allTelSupportsCount3M: allTelSupportsCount3M,
      normalTelSupportsCount3M: normalTelSupportsCount3M,
      specialTelSupportsCount3M: specialTelSupportsCount3M,
      allTelSupportsCount6M: allTelSupportsCount6M,
      normalTelSupportsCount6M: normalTelSupportsCount6M,
      specialTelSupportsCount6M: specialTelSupportsCount6M,
    };
  },
  head() {
    return {
      title: "جلسات مشاوره",
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/user/scss/_mixins.scss";

#show-user-tel-support-information-modal {
  //width: 100% !important;
}

.w-31 {
  width: 31% !important;
}

@media screen and (max-width: 1535px) {
  .w-31 {
    width: 31.3% !important;
  }
}

@media screen and (max-width: 1370px) {
  .w-31 {
    width: 30.5% !important;
  }
}

@media screen and (max-width: 1280px) {
  .w-31 {
    width: 30.5% !important;
  }
}

@media screen and (max-width: 1070px) {
  .w-31 {
    width: 30.4% !important;
  }
}

@media screen and (max-width: 1038px) {
  .w-31 {
    width: 30.3% !important;
  }
}

@media screen and (max-width: 1008px) {
  .w-31 {
    width: 30.1% !important;
  }
}

@media screen and (max-width: 934px) {
  .w-31 {
    width: 30% !important;
  }
}

@media screen and (max-width: 910px) {
  .w-31 {
    width: 46.5% !important;
  }
}

@media screen and (max-width: 875px) {
  .w-31 {
    width: 46.3% !important;
  }
}

@media screen and (max-width: 830px) {
  .w-31 {
    width: 45.6% !important;
  }
}

.request-tel-support-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    border-radius: 8px;
    width: 60%;
    //height: 100%;

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
        font-size: 0.9rem;
        font-weight: bold;
        color: var(--black);
      }
    }

    .form-group {
      > p {
        font-size: 12px;
      }

      > input {
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
  }
}

@include mobile-device {
  .w-31 {
    width: 100% !important;
  }

  .request-tel-support-modal {
    .uk-modal-body {
      width: 90% !important;

      > .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.8rem;
        }
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
    }
  }
}
</style>

