<template>
  <div>
    <main class="main">
      <section class="auth uk-container">
        <Form :code="code" :mobile="mobile"/>

        <div class="background">
          <img alt="" src="/auth/images/auth/confirm.svg"/>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Form from "@/components/auth/newPassword/_form.vue";

export default {
  layout: "authLayout",
  components: {Form},
  data() {
    return {
      mobile: 0,
      code: 0,
    };
  },
  async asyncData({app, $auth, redirect, store}) {
    if ($auth.loggedIn) {
      if ($auth.user.level === 1) redirect('/user/dashboard');
      if ($auth.user.level === 6) redirect('/writer/dashboard');
      if ($auth.user.level === 7) redirect('/expert/telSupports');
      else if ($auth.user.level === 2 || $auth.user.level === 3 || $auth.user.level === 5)
        redirect('/expert/dashboard');
      else $auth.logout();
    }

    let mobile = app.$cookies.get("mobile");
    let code = app.$cookies.get("code");
    if (mobile == null) redirect("/auth/signin");
    if (code == null) redirect("/auth/signin");
  },
  head() {
    return {
      title: "اعتبار سنجی",
    };
  },
};
</script>
