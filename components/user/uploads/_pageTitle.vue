<template>
  <div class="page-title" v-if="uploads.status !== 0">
    <div class="return-back">
      <h1>آپلود مدارک</h1>
    </div>
    <p>
      کاربر گرامی لطفا همه مدارک را با فرمت PDF آپلود کنین. هر فایل باید حاوی اصل مدرک و ترجمه آن باشد. به عنوان مثال نمونه یک فایل صحیح حاوی این اطلاعات می باشد: مدرک دیپلم، ریز نمرات دیپلم، مدرک پیش دانشگاهی، ریزنمرات پیش دانشگاهی و ترجمه هر کدوم همگی در یک فایل. لطفا از آپلود فایل های متعدد خودداری کنید.

    </p>
  </div>
  <div class="page-title" v-else>
    <div class="return-back">
      <h1>آپلود مدارک</h1>
    </div>
    <p>
      کاربر عزیز! لطفا ابتدا درخوست پذیرش خود را از لینک روبرو تکمیل کنید :
      <nuxt-link to="/user/acceptance">ثبت درخواست پذیرش</nuxt-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    uploads() {
      return this.$store.getters["uploads/uploads"];
    },
  },
};
</script>

<style></style>
