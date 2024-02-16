<template>
  <div class="page-title">
    <div class="return-back">
      <h2>لیست دانشگاه های ثبت شده</h2>
    </div>
    <p>
      شما اطلاعات
      <span class="name">{{ userUniversities.length }} دانشگاه</span> را ثبت
      کرده اید 
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    userUniversities() {
      return this.$store.getters["expert/userUniversities"];
    },
  },
};
</script>

<style></style>
