<template>
  <div class="resume-box fourth">
    <h3>به چه علت آلمان را برای تحصیل انتخاب کرده اید؟</h3>
    <hr />
    <form  >
      <textarea
        rows="10"
        placeholder="توضیح دهید"
        :value="previewMotivation.why_germany" disabled 
      ></textarea>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    previewMotivation() {
      return this.$store.getters["motivations/previewMotivation"];
    },
  },
};
</script>
