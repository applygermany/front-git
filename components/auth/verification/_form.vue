<template>
  <div class="form">
    <form @submit.prevent="checkCode">
      <div class="form-group code">
        <input
          class="error"
          type="number"
          v-model="nums.num1"
          @focus="$event.target.select()"
          :class="{ 'error-input': errors.includes('num1') }"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
        />
        <input
          class="error"
          type="number"
          v-model="nums.num2"
          @focus="$event.target.select()"
          :class="{ 'error-input': errors.includes('num2') }"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
        />
        <input
          class="error"
          type="number"
          v-model="nums.num3"
          @focus="$event.target.select()"
          :class="{ 'error-input': errors.includes('num3') }"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
        />
        <input
          class="error"
          type="number"
          v-model="nums.num4"
          @focus="$event.target.select()"
          :class="{ 'error-input': errors.includes('num4') }"
          v-on:keyup="$event.target.nextElementSibling.focus()"
          maxlength="1"
        />
        <input
          class="error"
          type="number"
          v-model="nums.num5"
          @focus="$event.target.select()"
          :class="{ 'error-input': errors.includes('num5') }"
          maxlength="1"
        />
      </div>

      <div class="error-code" v-if="errors.code">
        <span>{{ errors.code[0] }}</span>
      </div>

      <div class="counter-wrong-number">
        <p>
          شماره نادرست است؟
          <nuxt-link to="/auth/signup">اصلاح ایمیل/شماره</nuxt-link>
        </p>
        <div class="counter">
          <span
            class="uk-countdown-number uk-countdown-seconds"
            v-if="counter !== 0"
            >{{ counter }}</span
          >
        </div>
      </div>

      <div class="d-flex uk-flex-row-reverse">
        <div class="form-group submit">
          <button class="w-75" type="submit" v-if="sending === false">بررسی کد</button>
          <button class="w-75" type="button" v-else>چند لحظه صبر کنید</button>
        </div>
        <div class="form-group submit">
          <button class="w-75" type="button" @click="resendCode" v-if="counter === 0">
            ارسال مجدد کد
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nums: {
        num1: null,
        num2: null,
        num3: null,
        num4: null,
        num5: null,
      },
      password: 0,
      counter: 0,
      sending: false,
      errors: [],
      prevInterval: null,
    };
  },
  computed: {
    mobile() {
      return this.$store.getters["customAuth/mobileRecovery"];
    },
  },
  mounted() {
    this.counter = 120;
    if (this.prevInterval) clearInterval(this.prevInterval);
    this.prevInterval = setInterval(() => {
      if (this.counter > 0) this.counter -= 1;
    }, 1000);
  },
  methods: {
    async checkCode() {
      this.errors = [];

      for (const key in this.nums) {
        if (this.nums[key] == null || this.nums[key] == "")
          this.errors.push(String(key));
      }

      if (this.errors.length != 0) return;

      this.sending = true;
      let code =
        this.nums.num1 +
        this.nums.num2 +
        this.nums.num3 +
        this.nums.num4 +
        this.nums.num5;
        
      try {
        await this.$store.dispatch("customAuth/verify", {
          mobile: this.mobile,
          code: code,
        });
      } catch (err) {
        if (err.message.includes("صحیح")) {
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });

          this.$router.push("/auth/setPassword");
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
    resendCode() {
      if (this.counter <= 0) {
        this.resendVerifyCode();
        this.counter = 120;
        if (this.prevInterval) clearInterval(this.prevInterval);
        this.prevInterval = setInterval(() => {
          if (this.counter > 0) this.counter -= 1;
        }, 1000);
      }
    },
    async resendVerifyCode() {
      try {
        await this.$store.dispatch("customAuth/resendCode", this.mobile);
      } catch (err) {
        if (err.message.includes("ارسال")) {
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
    },
  },
};
</script>

<style></style>
