<template>
  <div>
    <main class="main">
      <section class="auth uk-container">
        <Form />

        <div class="background">
          <img src="/auth/images/auth/register.svg" alt="" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Form from "@/components/auth/setPassword/_form.vue";

export default {
  layout: "authLayout",
  components: { Form },
  data() {
    return {
      completeSignUpForm: {
        mobile: null,
      },
    };
  },
  async asyncData({ app, $auth, redirect, store }) {
    let mobile = app.$cookies.get("mobile");
    if (mobile == null) redirect("/auth/signup");

    store.commit("customAuth/Set_MobileRecovery", mobile);
    
  },
  head() {
    return {
      title: "عضویت",
    };
  },
};
</script>
