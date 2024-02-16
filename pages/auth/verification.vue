<template>
  <div>
    <main class="main">
      <section class="auth register-2 uk-container">
        <div class="background">
          <img src="/auth/images/auth/register-2.svg" alt="" />
        </div>

        <!-- Register Form -->
        <Form :mobile="mobile" />
      </section>
    </main>
  </div>
</template>

<script>
import Form from "@/components/auth/verification/_form.vue";

export default {
  layout: "authLayout",
  components: {
    Form,
  },
  data() {
    return {
      mobile: 0,
    };
  },
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
    if (mobile == null) {
      redirect("/auth/signup");
      return false;
    }

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
  },
  head() {
    return {
      title: "اعتبار سنجی",
    };
  },
};
</script>
