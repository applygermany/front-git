<template>
  <div>
    <main class="main">
      <section class="auth uk-container">
        <Form />

        <Modal />

        <div class="background">
          <img src="/auth/images/auth/login.svg" alt="" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Form from "@/components/auth/signIn/_form.vue";
import Modal from "@/components/auth/signIn/_modal.vue";

export default {
  layout: "authLayout",
  components: { Form, Modal },
  async asyncData({ $auth, redirect }) {
    if ($auth.loggedIn) {

      if ($auth.user.level === 1) redirect('/user/dashboard');
      if ($auth.user.level === 6) redirect('/writer/dashboard');
      if ($auth.user.level === 7) redirect('/expert/telSupports');
      else if ($auth.user.level === 2 || $auth.user.level === 3 || $auth.user.level === 5) {
        redirect('/expert/dashboard')
      }
      else $auth.logout();
    }
  },
  head() {
    return {
      title: "ورود به سایت",
    };
  },
};
</script>
