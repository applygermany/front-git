<template>
  <header class="header-expert">
    <HeaderExpertTop />
    <InnerChatSidebar />
    <MessageSidebar />
    <ChatSidebar />
  </header>
</template>

<script>
import HeaderExpertTop from "@/components/expert/header/_headerExpertTop.vue";
import InnerChatSidebar from "@/components/expert/header/_innerChatSidebar.vue";
import MessageSidebar from "@/components/expert/header/_messageSidebar.vue";
import ChatSidebar from "@/components/expert/header/_chatSidebar.vue";
export default {
  components: {
    HeaderExpertTop,
    InnerChatSidebar,
    MessageSidebar,
    ChatSidebar,
  },
};
</script>
