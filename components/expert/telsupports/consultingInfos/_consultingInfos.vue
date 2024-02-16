<template>
  <div class="consulting__infos">
    <NewSession />

    <ChartComments
      :chartData="chartData"
      :monthLabels="monthLabels"
      :chartDataMonth="chartDataMonth"
      :chartData3Month="chartData3Month"
      :chartData6Month="chartData6Month"
      :getTelSupportData="getTelSupportData"
      :allTelSupportsCount="allTelSupportsCount"
      :normalTelSupportsCount="normalTelSupportsCount"
      :specialTelSupportsCount="specialTelSupportsCount"
      :allTelSupportsCount1M="allTelSupportsCount1M"
      :normalTelSupportsCount1M="normalTelSupportsCount1M"
      :specialTelSupportsCount1M="specialTelSupportsCount1M"
      :allTelSupportsCount3M="allTelSupportsCount3M"
      :normalTelSupportsCount3M="normalTelSupportsCount3M"
      :specialTelSupportsCount3M="specialTelSupportsCount3M"
      :allTelSupportsCount6M="allTelSupportsCount6M"
      :normalTelSupportsCount6M="normalTelSupportsCount6M"
      :specialTelSupportsCount6M="specialTelSupportsCount6M"
    />
  </div>
</template>

<script>
import NewSession from "@/components/expert/telsupports/consultingInfos/_newSession.vue";
import ChartComments from "@/components/expert/telsupports/consultingInfos/_chartComments.vue";

export default {
  props: [
    "chartData",
    "monthLabels",
    "chartDataMonth",
    "chartData3Month",
    "chartData6Month",
    "getTelSupportData",
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
    NewSession,
    ChartComments,
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.consulting__infos {
  @include boxshadow();
  border-radius: 8px;
  padding: 1.5rem 1.5rem 0 1.5rem;
  background-color: var(--white);
  @include fbx-ai-start-jc-between;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
</style>
