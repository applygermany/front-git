<template>
  <div>
    <PageTitle />
    <UniversityTable />

    <RemoveUniversities/>
  </div>
</template>

<script>
import PageTitle from "@/components/expert/universities/universityTable/_pageTitle.vue";
import UniversityTable from "@/components/expert/universities/universityTable/_universityTable.vue";
import RemoveUniversities from "@/components/expert/universities/universityTable/modals/_removeUniversities.vue";

export default {
  components: {
    PageTitle,
    UniversityTable,
    RemoveUniversities
  },
};
</script>

<style></style>
