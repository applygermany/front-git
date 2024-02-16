<template>
  <div>
    <div id="app">
      <Header />
      <main class="main">
        <div
                class="shadow"
                :class="{ active: chatSide != '' }"
                @click="$store.commit('expert/Set_ChatSide', '')"
        ></div>
        <nuxt />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@import "~/assets/expert/scss/main.scss";

#app {
  overflow: hidden;
}
</style>

<script>
import Header from "@/components/expert/resume/_header";

export default {

  components: {
    Header,
  },
  beforeMount() {
    this.checkMode();
  },
  beforeDestroy() {
    setTimeout(
      () => document.querySelector("html").classList.remove("dark-mode"),
      300
    );
  },
  computed: {

    chatSide() {
      return this.$store.getters["expert/chatSide"];
    },
  },
  methods: {
    checkMode() {
      if (this.$auth.user.darkmode === 1) {
        document.querySelector("html").classList.add("dark-mode");
      } else {
        document.querySelector("html").classList.remove("dark-mode");
      }
    },
  },
};
</script>
