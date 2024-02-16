<template>
  <div>
    <button @click="testAxioses" class="uk-button uk-button-primary">
      check the axios mate
    </button>
  </div>
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
  methods:{
    testAxioses(){
     this.$axios.post('v1/expert/getAllUser', {take: 10}).then((res)=>{
       console.log(res,'res is here guys')
     }).catch((err)=>{
       console.log(err,'error is here guys')
     })
    }
  },
  mounted(){

  }
};
</script>
