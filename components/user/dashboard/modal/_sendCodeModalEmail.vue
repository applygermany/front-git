<template>
  <div
    id="send-code-modal-email"
    class="change-email-phone-password-modal"
    uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>تغییر ایمیل</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="form">
        <p>کـد تایید به ایمیل جدیدتان ارسال شد. لطفا آن را وارد کنید</p>
        <form>
          <div class="code">
            <input
              type="text"
              maxlength="1"
              v-model="nums.num1"
          @focus="$event.target.select()"
              v-on:keyup="$event.target.nextElementSibling.focus()"
              :class="{ 'error-input': errors.includes('num1') }"
            />
            <input
              type="text"
              maxlength="1"
              v-model="nums.num2"
          @focus="$event.target.select()"
              v-on:keyup="$event.target.nextElementSibling.focus()"
              :class="{ 'error-input': errors.includes('num2') }"
            />
            <input
              type="text"
              maxlength="1"
              v-model="nums.num3"
          @focus="$event.target.select()"
              v-on:keyup="$event.target.nextElementSibling.focus()"
              :class="{ 'error-input': errors.includes('num3') }"
            />
            <input
              type="text"
              maxlength="1"
              v-model="nums.num4"
          @focus="$event.target.select()"
              v-on:keyup="$event.target.nextElementSibling.focus()"
              :class="{ 'error-input': errors.includes('num4') }"
            />
            <input
              type="text"
              maxlength="1"
              v-model="nums.num5"
          @focus="$event.target.select()"
              :class="{ 'error-input': errors.includes('num5') }"
            />
          </div>
          <div class="email-counter">
            <div class="email">
              <p>{{ newEmail }}</p>
              <a href="#change-email-modal" uk-toggle> اصلاح ایمیل </a>
            </div>
            <div class="counter">
              <span
                class="uk-countdown-number uk-countdown-seconds"
                v-if="counter > 0"
              >
                {{ counter }}
              </span>
              <span
                class="uk-countdown-number uk-countdown-seconds"
                @click="resendCode"
                v-else
                style="cursor:pointer"
              >
                ارسال مجدد کد امنیتی
              </span>
            </div>
          </div>
          <div class="submit">
            <a type="button" @click="changeEmailMobileVerify">تایید</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
      newEmail: null,
      nums: {
        num1: null,
        num2: null,
        num3: null,
        num4: null,
        num5: null,
      },
      verifyingEmailMobile: false,
      errors:[],
    };
  },
  methods: {
    async resendCode() {
      if (this.counter <= 0) {
        this.resendVerifyCode();
        this.counter = 60;
        if (this.prevInterval) {
          clearInterval(this.prevInterval);
        }
        this.prevInterval = setInterval(() => {
          if (this.counter > 0) this.counter -= 1;
        }, 1000);
      }
    },
    async resendVerifyCode() {
      try {
        await this.$store.dispatch(
          "user/changeEmailMobileResendCode",
          this.mobile
        );
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
    async changeEmailMobileVerify() {
      this.errors = [];

      for (const key in this.nums) {
        if (this.nums[key] == null || this.nums[key] == "")
          this.errors.push(String(key));
      }

      if (this.errors.length != 0) return;

      this.verifyingEmailMobile = true;

      let code = 0;
      code =
        this.nums.num1 +
        this.nums.num2 +
        this.nums.num3 +
        this.nums.num4 +
        this.nums.num5;

      try {
        await this.$store.dispatch("user/changeEmailMobileVerify", {
          code: code,
        });
      } catch (err) {
        if (err.message.includes("صحیح")) {
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

      this.verifyingEmailMobile = false;
    },
  },
};
</script>

<style></style>
