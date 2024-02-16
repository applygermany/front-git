<template>
  <div>
    <main class="main" id="landing2">
      <section class="landing-title uk-container">
        <h1 class="title-font">همکاری با ما</h1>
        <p>
          برای عضویت در تیم اپلای جرمنی و کسب درآمد، می توانید فرم زیر را پر
          کنید تا پس از بررسی با شما تماس بگیریم. چنانچه مایل به همکاری با ما
          هستید میتوانید از فرم زیر استفاده کرده و علاقه مندی خود را در حوضه
          مورد نظر اعلام کنید به خانواده بزرگ اپلای جرمنی بپیوندید. جات اینجاست
          ما حتما برات ی جایی پیدا میکنیم که برامون کار کنی.
        </p>
      </section>

      <Faq />

      <Form />
    </main>
  </div>
</template>

<script>
import Form from "@/components/site/collaboration/_form.vue";
import Faq from "@/components/site/collaboration/_faq.vue";

export default {
  layout: "siteLayout",
  components: {
    Form,
    Faq,
  },
  async asyncData({ store, $axios }) {
    const { data } = await $axios.post("v1/cfaqs");

    store.commit("Set_CFaq", data.faqs);
  },
  head() {
    return {
      title: "همکاری با ما",
    };
  },
};
</script>
