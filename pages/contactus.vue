<template>
  <div>
    <main class="main" id="landing3">
      <section class="landing-title uk-container">
        <h1 class="title-font">تماس با ما</h1>
        <p>
          ،اگر سوالی دارید، ابتدا در صفحه <nuxt-link to="/faq">سوالات متداول</nuxt-link> آن را
          جستجو کنیـــد. چنانچه پاسخی برای سوالتان نیــافتید کاشناسان ما در
          اینستـاگرام و تلگرام آماده پاسخگویی به شما خواهند بود
        </p>
      </section>
      
      <SocialIcons />
      
      <Links />
    </main>
  </div>
</template>

<script>
import SocialIcons from '@/components/site/contactUs/_socialIcons.vue';
import Links from '@/components/site/contactUs/_links.vue';
export default {
  components: { SocialIcons,Links },
  layout: "siteLayout",
  async asyncData({ store, $axios }) {
    const { data } = await $axios.get("v1/contact");

    store.commit("Set_ContactUs", data.data);
  },  
  head() {
    return {
      title: "ارتباط با ما",
    };
  },
};
</script>

