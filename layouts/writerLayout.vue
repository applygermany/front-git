<template>
  <div>
    <div id="app">
      <Header />
      <main class="main">
        <div
            class="shadow"
            :class="{ active: chatSide != '' }"
            @click="$store.commit('writer/Set_ChatSide', '')"></div>
        <Aside />
        <nuxt />
      </main>
    </div>

  </div>

</template>

<style lang="scss" >
@import "~/assets/expert/scss/main.scss";

#app {
  overflow: hidden;
}
</style>

<script>
import Header from "@/components/writer/header/index";
import Aside from "@/components/writer/aside/index";

export default {
  components: {
    Header,
    Aside,
  },
  computed: {
    chatSide() {
      return this.$store.getters["writer/chatSide"];
    },
  },
  beforeMount() {
    if (this.$store.getters.fromLand && false) location.reload();
    else this.checkMode();

    this.$socket.startSocket();
  },
  beforeDestroy() {
    if(window.socket) window.socket.disconnect();

    setTimeout(
        () => document.querySelector("html").classList.remove("dark-mode"),
        300
    );
  },
  watch: {
    $route() {
      this.checkMode();
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
