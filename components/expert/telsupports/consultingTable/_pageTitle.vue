<template>
  <div class="page-title">
    <div class="return-back">
      <h1>لیست درخواست های مشاوره</h1>
    </div>
    <p>
      شما
      <span class="name">{{ getTelSupportData[1] }} جلسه</span>
      مشاوره تلفنی در تاریخ
      {{ new Date(getTelSupportData[0].split(",").reverse().join("-")).toLocaleDateString('fa-IR') }}
      دارید
    </p>
  </div>
</template>

<script>
export default {
  props: ["getTelSupportData"],
  created() {
    // alert(this.getTelSupportData)
  }
};
</script>

<style></style>
\