<template>
  <header class="header-auth">
    <div class="uk-container" :class="register">
      <div class="top">
        <div class="go-login">
          <transition name="fade" mode="out-in">
            <p v-if="route === 'signin'" key="signin">
              حساب کاربری ندارید؟
              <nuxt-link to="/auth/signup">ثبت نام</nuxt-link>
              کنید
            </p>

            <p
              v-else-if="route === 'signup' || route === 'setPassword'"
              key="signup"
            >
              قبلا ثبت نام کرده اید؟
              <nuxt-link to="/auth/signin">وارد</nuxt-link>
              شوید
            </p>

            <p v-else></p>
          </transition>
        </div>
        <div class="logo">
          <nuxt-link to="/">
            <img src="@/assets/auth/images/logo_Dark.svg" alt="" />
          </nuxt-link>
        </div>
      </div>

      <transition name="fade" mode="out-in">
        <div class="title" v-if="route === 'verification'" key="verification">
          <h1 v-if="verification.hiddenEmail !== ''">تأیید ایمیل</h1>
          <h1 v-else>تأیید موبایل</h1>
          <p>
            ما یک کد تایید به
            <template v-if="verification.hiddenEmail !== ''">
              ایمیل {{ verification.hiddenEmail }}
            </template>
            <template v-else>
              شماره {{ verification.last4 }}***{{ verification.first4 }}
            </template>
            ارسال کردیم؛ لطفا آن را وارد کنید
          </p>
        </div>

        <div class="title" v-else key="signin">
          <transition name="fade" mode="out-in">
            <h1 v-if="route === 'signin'" key="signin">ورود</h1>
            <h1 v-else-if="route === 'setPassword'" key="setPassword">
              تاییـــد شد!
            </h1>

            <h1 v-else-if="route === 'signup'" key="signup">ثبت نام</h1>
            <h1 v-else-if="route === 'resetPassword'" key="resetPassword">
              بازیابی گذرواژه
            </h1>
            <h1 v-else-if="route === 'newPassword'" key="newPassword">
              رمز عبور بازیابی شد!
            </h1>
          </transition>

          <transition name="fade" mode="out-in">
            <p v-if="route === 'signin'" key="signin">
              به جهت ورود به پنل کــاربری، اطلاعات درخواستی زیر را کامل کنید
            </p>
            <p v-else-if="route === 'setPassword'" key="setPassword">
              شماره تماس شما با موفقیت تایید شد. اطلاعات نهایی ثبت نام خود را
              تکمیل کنید
            </p>

            <p v-else-if="route === 'signup'" key="signup">
              فقط در سه مرحله براحتی میتوانید وارد پنل کاربری خود شوید
            </p>
            <p v-else-if="route === 'resetPassword'" key="resetPassword">
              ما یک کد تایید به
              <template v-if="verification.hiddenEmail !== ''">
                ایمیل {{ verification.hiddenEmail }}
              </template>
              <template v-else>
                شماره {{ verification.last4 }}***{{ verification.first4 }}
              </template>
              ارسال کردیم؛ لطفا آن را وارد کنید
            </p>
            <p v-else-if="route === 'newPassword'" key="newPassword">
              فرایند بازیابی رمز عبور با موفقیت انجام شد! لطفا رمز جدیدی برای
              حسابتان ثبت کنید
            </p>
            <p v-else></p>
          </transition>
        </div>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      route: "",
      register: "",
    };
  },
  created() {
    this.route = this.$route.path.split("/")[2];
    this.checkRegister();
  },
  watch: {
    $route() {
      this.route = this.$route.path.split("/")[2];
      this.checkRegister();
    },
  },
  methods: {
    checkRegister() {
      let value = "";
      const list = ["verification", "resetPassword"];
      if (list.includes(this.route)) value = "register-2";

      setTimeout(() => {
        this.register = value;
      }, 500);
    },
  },
  computed: {
    verification() {
      return this.$store.getters["customAuth/verification"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/auth/styles/scss/variables.scss";
@import "~/assets/auth/styles/scss/mixin.scss";
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.header-auth {
  background-image: url("@/assets/auth/images/auth/header.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding-right: 12rem;
  padding-left: 12rem;

  > .uk-container {
    padding-right: 0 !important;
    padding-left: 0 !important;
  }
  .top {
    @include flex(row, space-between, center);
    width: 100%;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid rgba(white, 0.1);
    margin-bottom: 1.5rem;

    .go-login {
      p {
        color: white;
        font-size: 0.9rem;
        a {
          color: $mainColor;
          text-decoration: none;
          border-bottom: 1px solid $mainColor;
        }
      }
    }
    .logo {
      text-align: left;
      img {
        width: 90%;
      }
    }
  }

  .title {
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;

    h1 {
      font-size: 1.5rem;
      color: white;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    p {
      font-size: 0.9rem;
      color: $mainColor;
    }
  }

  .register-2,
  .reset-password-2 {
    @include flex(column, null, flex-end);
    .title {
      width: 50%;
    }

    @include mobile {
      display: block;
      .title {
        width: inherit;
        line-height: 1.5rem;
      }
    }
    @include tablet {
      .title {
        width: inherit;
        line-height: 1.5rem;
      }
    }
    @include largeDevices {
      .title {
        width: inherit;
        line-height: 1.5rem;
      }
    }
  }
  @include mobile {
    padding-right: 1rem;
    padding-left: 1rem;

    .top {
      @include flex(column, center, center);
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      .go-login {
        order: 1;
        p {
          font-size: 0.75rem;
        }
      }
      .logo {
        text-align: center;
        order: 0;
        margin-bottom: 1.5rem;
        img {
          width: 80%;
        }
      }
    }
    .title {
      padding-top: 1rem;
      padding-bottom: 1rem;

      h1 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.75rem;
      }
    }
  }

  @include tablet {
    padding-right: 3rem;
    padding-left: 3rem;

    .top {
      padding-top: 1rem;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
      .go-login {
        p {
          font-size: 0.8rem;
        }
      }
    }

    .title {
      padding-top: 1rem;
      padding-bottom: 1rem;

      h1 {
        font-size: 1.2rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  }
  @include largeDevices {
    padding-right: 6rem;
    padding-left: 6rem;
  }
}
</style>
