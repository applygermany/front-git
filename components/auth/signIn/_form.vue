<template>
  <div class="form">
    <form @submit.prevent="signIn">
      <div class="form-group">
        <input
          type="text"
          id="mobile"
          placeholder=" "
          :class="{ 'error-input': errors.includes('password') }"
          v-model="form.mobile"
        />
        <label class="floating" for="mobile">ایمیل/موبایل</label>
        <div v-if="errors.includes('mobile')" class="error">
          ورود ایمیل/موبایل/نام کاربری الزامی است
        </div>
      </div>

      <div class="form-group">
        <input
          type="password"
          id="password"
          placeholder=" "
          :class="{ 'error-input': errors.includes('password') }"
          v-model="form.password"
        />
        <label class="floating" for="password">رمز عبور</label>
        <div v-if="errors.includes('password')" class="error">
          ورود گذرواژه الزامی است
        </div>
      </div>

      <div class="forget-password">
        <a href="#forget-password-modal" uk-toggle> رمز عبور خود را فراموش کرده اید؟ </a>
      </div>

      <div class="form-group submit">
        <button
          type="submit"
          v-if="signingIn === false"
          @click="$store.commit('fromLand', true)"
        >
          ورود به پنل کاربری
        </button>
        <button type="button" v-else>چند لحظه صبر کنید</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        mobile: null,
        password: null,
      },
      signingIn: false,
      errors: [],
    };
  },

  methods: {
    async signIn() {
      this.errors = [];

      for (const key in this.form) {
        if (this.form[key] == null || this.form[key] == "") this.errors.push(String(key));
      }

      if (this.errors.length != 0) return;

      this.signingIn = true;

      try {
        await this.$store.dispatch("customAuth/signIn", this.form);
      } catch (err) {
        if (err.message.includes("موفقیت")) {
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        } else if (err.message.includes("اشتباه")) {
          this.$toasted.error(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        } else {
          this.$toasted.info(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        }
      }

      this.signingIn = false;
    },
  },
};
</script>
