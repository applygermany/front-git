<template>
  <div class="page-title">
    <div class="return-back">
      <h1>انتخاب دانشگاه</h1>
    </div>
    <p>
      لطفا توجه داشته باشید که شما فقط میتوانید
      <span style="color: var(--dark-main-color)">{{ maxUniversities }}</span>
      دانشگاه به سبد اپلای خود اضافه کنید
    </p>

    <SortSearch />
  </div>
</template>

<script>
import SortSearch from "@/components/user/universities/_sortSearch.vue";
export default {
  components: {
    SortSearch,
  },
  computed: {
    maxUniversities() {
      return this.$store.getters["user/maxUniversities"];
    },
  },
};
</script>

<style></style>
