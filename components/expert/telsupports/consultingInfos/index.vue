<template>
  <div>
    <PageTitle />

    <ConsultingInfos
      :chartData="chartData"
      :monthLabels="monthLabels"
      :chartDataMonth="chartDataMonth"
      :chartData3Month="chartData3Month"
      :chartData6Month="chartData6Month"
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
import PageTitle from "@/components/expert/telsupports/consultingInfos/_pageTitle.vue";
import ConsultingInfos from "@/components/expert/telsupports/consultingInfos/_consultingInfos.vue";

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
    PageTitle,
    ConsultingInfos,
  },
};
</script>
