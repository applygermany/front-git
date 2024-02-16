<template>
  <div>
    <main class="main">
      <section class="auth reset-password-2 uk-container">
        <div class="background">
          <img src="/auth/images/auth/confirm-2.svg" alt="" />
        </div>

        <Form :mobile="mobile" />
      </section>
    </main>
  </div>
</template>

<script>
import Form from "@/components/auth/resetPassword/_form.vue";

export default {
  layout: "authLayout",
  components: { Form },
  async asyncData({ app, $auth, redirect, store }) {
    if ($auth.loggedIn) {
      if ($auth.user.level === 1) redirect('/user/dashboard');
      if ($auth.user.level === 6) redirect('/writer/dashboard');
      if ($auth.user.level === 7) redirect('/expert/telSupports');
      else if ($auth.user.level === 2 || $auth.user.level === 3 || $auth.user.level === 5)
        redirect('/expert/dashboard');
      else $auth.logout();
    }

    let mobile = app.$cookies.get("mobile");
    if (mobile == null) redirect("/auth/signup");

    var mobilet = String(mobile);
    let first4 = "";
    let last4 = "";
    var hiddenEmail = "";
    let email = mobilet.search("@");
    if (email === -1) {
      if (mobilet.length > 10) first4 = mobilet.substr(0, 4);
      else first4 = mobilet.substr(0, 3);
      last4 = mobilet.substr(-4, 4);
    } else {
      for (var i = 0; i < mobilet.length; i++) {
        if (i > 2 && i < mobilet.indexOf("@")) {
          hiddenEmail += "*";
        } else {
          hiddenEmail += mobilet[i];
        }
      }
    }

    store.commit("customAuth/Set_MobileRecovery", mobile);

    store.dispatch("customAuth/setVerification", {
      first4,
      last4,
      hiddenEmail,
    });

    return {
      mobile: mobile,
    };
  },
  head() {
    return {
      title: "اعتبار سنجی",
    };
  },
};
</script>
