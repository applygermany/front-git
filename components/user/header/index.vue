<template>
  <header class="header">
    <HeaderTop/>
    <ChatSidebar/>
    <InnerChatSidebar/>
    <MessageSidebar/>
  </header>
</template>

<script>
import HeaderTop from "@/components/user/header/_headerTop.vue";
import ChatSidebar from "@/components/user/header/_chatSidebar.vue";
import MessageSidebar from "@/components/user/header/_messageSidebar.vue";
import InnerChatSidebar from "@/components/user/header/_innerChatSidebar.vue";

export default {
  components: {
    HeaderTop,
    ChatSidebar,
    MessageSidebar,
    InnerChatSidebar,
  },
  mounted() {
    let darkMode = false;
    if (this.$auth.user.darkmode === 1) {
      darkMode = true;
      this.$store.dispatch("user/setVuexUserDarkMode", true);
    } else {
      darkMode = false;
      this.$store.dispatch("user/setVuexUserDarkMode", false);
    }
    this.darkMode = darkMode;
  },
};
</script>
