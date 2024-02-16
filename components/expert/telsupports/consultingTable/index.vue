<template>
  <div>
    <PageTitle :getTelSupportData="getTelSupportData" />
    
    <ConsultingTable />

    <ToggleUploadAccessModal/>
    <ToggleRemoveSupportModal/>
    <WriteCommentModal/>
  </div>
</template>

<script>
import PageTitle from "@/components/expert/telsupports/consultingTable/_pageTitle.vue";
import ConsultingTable from "@/components/expert/telsupports/consultingTable/_consultingTable.vue";
import ToggleUploadAccessModal from "@/components/expert/workExperience/modal/_toggleUploadAccess.vue";
import ToggleRemoveSupportModal from "@/components/expert/modal/_removeSupportTime.vue";
import WriteCommentModal from "@/components/expert/modal/_writeCommentModal.vue";

export default {
  props: [ "getTelSupportData"],
  components: {
    PageTitle,
    ConsultingTable,
    ToggleUploadAccessModal,
    ToggleRemoveSupportModal,
    WriteCommentModal
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.consulting__table {
  background-color: var(--white);
  border-radius: 8px;
  @include boxshadow();
  padding: 1.5rem;
}
</style>
