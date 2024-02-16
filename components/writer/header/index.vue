<template>
  <header class="header-expert">
    <HeaderWriterTop />
    <MessageSidebar />
  </header>
</template>

<script>
import HeaderWriterTop from "@/components/writer/header/_headerWriterTop.vue";
import MessageSidebar from "@/components/writer/header/_messageSidebar.vue";

export default {
  components: {
    HeaderWriterTop,
    MessageSidebar
  },
};
</script>
