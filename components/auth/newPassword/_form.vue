<template>
  <div class="form">
    <form @submit.prevent="setPassword">
      <div class="form-group">
        <input
          type="password"
          placeholder=" "
          id="password"
          v-model="form.password"
          :class="{ 'error-input': errors.includes('password') }"
        />
        <label class="floating" for="password">گذرواژه</label>
      </div>

      <div class="form-group">
        <input
          type="password"
          placeholder=" "
          id="password_confirmation"
          v-model="form.password_confirmation"
          :class="{ 'error-input': errors.includes('password_confirmation') }"
        />
        <label class="floating" for="password_confirmation">
          تکرار گذرواژه
        </label>
      </div>
      <div class="form-group submit">
        <button type="submit" v-if="sending === false">
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
        password: null,
        password_confirmation: null,
      },
      counter: 0,
      sending: false,
      errors: [],
    };
  },
  computed: {
    mobile() {
      return this.$store.getters["customAuth/mobileRecovery"];
    },
    code() {
      return this.$store.getters["customAuth/code"];
    },
  },
  methods: {
    async setPassword() {
      this.errors = [];

      for (const key in this.form) {
        if (this.form[key] == null || this.form[key] == "")
          this.errors.push(String(key));
      }

      if (this.errors.length != 0) return;

      if (
        this.form.password.length < 6 ||
        this.form.password_confirmation.length < 6
      ) {
        this.$toasted.error("گذرواژه نباید زیر 6 حرف باشد", {
          position: "bottom-left",
          duration: 5000,
        });

        return;
      }

      if (this.form.password != this.form.password_confirmation) {
        this.$toasted.error("تکرار گذرواژه اشتباه است", {
          position: "bottom-left",
          duration: 5000,
        });

        return;
      }

      this.sending = true;

      try {
        await this.$store.dispatch("customAuth/recoverPassword", {
          ...this.form,
          mobile: this.mobile,
          code: this.code,
        });
      } catch (err) {
        if (err.message.includes("موفقیت")) {
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
          this.$router.push("/auth/signin");
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

      this.sending = false;
    },
  },
};
</script>

<style></style>
