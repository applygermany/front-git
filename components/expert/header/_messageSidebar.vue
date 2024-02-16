<template>
  <aside class="message-sidebar" :class="{ active: chatSide == 'note' }">
    <!--<div class="item">-->
    <!--  <div class="title">-->
    <!--    <p>-->
    <!--      <img-->
    <!--        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPg0KICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzEzNDciIGRhdGEtbmFtZT0iRWxsaXBzZSAxMzQ3IiBjeD0iNC41IiBjeT0iNC41IiByPSI0LjUiIGZpbGw9IiNlMmFkNDIiLz4NCjwvc3ZnPg0K"-->
    <!--        alt=""-->
    <!--      />-->
    <!--      موفقیت در اخذ پذیرش-->
    <!--    </p>-->
    <!--    <span class="date">1400/05/26 - 22:40</span>-->
    <!--  </div>-->
    <!--  <div class="text">-->
    <!--    <p>-->
    <!--      Beuth Hochschule شمـا موفق به اخذ پذیـــرش از دانشگـــاه شدید. با ورود-->
    <!--      به قسمت پیگیری اپلای می‌توانیــد فرم پذیـرش .خود را مشاهده و دانلود-->
    <!--      کنید-->
    <!--    </p>-->
    <!--  </div>-->
    <!--</div>-->
    <div
      class="item "
      v-for="(msg, index) in notification"
      :key="index"
      :class="{ 'item-new': msg.is_read == 0 }"
    >
      <div class="title">
        <p>
          <img
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPg0KICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzEzNDciIGRhdGEtbmFtZT0iRWxsaXBzZSAxMzQ3IiBjeD0iNC41IiBjeT0iNC41IiByPSI0LjUiIGZpbGw9IiNlMmFkNDIiLz4NCjwvc3ZnPg0K"
            alt=""
          />
          {{ msg.title }}
        </p>
        <span class="date">{{
          new Date(msg.timestamp).toLocaleDateString('fa-IR',{timeZone:'Asia/Tehran',hour:'2-digit',minute:'2-digit'})
            .split("،‏")
            .reverse()
            .join(" - ")
        }}</span>
      </div>
      <div class="text">
        <p>
          {{ msg.body }}
        </p>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    chatSide() {
      return this.$store.getters["expert/chatSide"];
    },
    notification() {
      return this.$store.getters["chat/notification"];
    },
  },
  watch:{
      chatSide(){
          if(this.chatSide == 'note') this.$socket.readNotification();
      }
  }
};
</script>

<style></style>
