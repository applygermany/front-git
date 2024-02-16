<template>
  <div class="final-submit">
    <form v-if="!canFill">
      <div class="form-group" v-if="$auth.user.type != 2">
        <input
            type="checkbox"
            id="check"
            class="uk-checkbox"
            v-model="agreed"
            :value="agreed"
        />
        <label for="check">
          از تعرفه فوق " {{ totalPrice | numberFilter }} " معادل {{ convertPrice }} مطلع شدم و تقاضای ثبت سفارش دارم
        </label>
      </div>
      <div class="go-pay" v-if="$auth.user.type != 2">
        <button type="button" @click="saveMotivation" v-if="sending === false">
          ثبت درخواست و پرداخت
        </button>
        <button type="button" v-else>چند لحظه صبر کنید</button>
      </div>
      <div class="go-pay" v-else>
        <button type="button" @click="saveMotivation" v-if="sending === false">
          ثبت درخواست
        </button>
        <button type="button" v-else>چند لحظه صبر کنید</button>
      </div>
    </form>
  </div>
</template>

<script>
const NumbertoPersianText = require('number-to-persian-text');
NumbertoPersianText.changeConfig({moneyOutput: true, moneyUnit: 'ریال'});

export default {
  props: ["errors"],
  data() {
    return {
      agreed: false,
      sending: false,
      resumeFile: null,
    };
  },
  created() {
    this.$store.dispatch("user/pricing");
  },
  computed: {
    prices() {
      return this.$store.getters["user/prices"];
    },
    canFill() {
      return this.$store.getters["motivations/canFill"];
    },
    totalPrice() {
      const universities =
          this.$store.getters["motivations/universities"].length - 1;

      return (
          universities * this.prices.extra_university + this.prices.motivation
      );
    },
    convertPrice() {
      return NumbertoPersianText.getText(this.totalPrice ? this.totalPrice : 2500000);
    }
  },
  methods: {
    async saveMotivation() {
      this.sending = true;
      if (this.$auth.user.type != 2 && this.agreed === false) {
        this.$toasted.error("لطفا گزینه مطلع شدم را چک کنید", {
          position: "bottom-left",
          duration: 5000,
        });
        this.sending = false;

        return false;
      }
      setTimeout(async () => {
        try {
          await this.$store.dispatch("motivations/saveMotivation");
        } catch (err) {
          this.sending = false;
          if (err.message.includes("موفقیت") || err.message.includes("انتقال")) {
            const hash = this.$store.getters["motivations/hash"];
            if (this.$auth.user.type != 2) {
              this.$router.push(`/payment/${hash}`);
            } else {
              this.$router.push(`/user/motivations`);
            }
          } else {
            this.$toasted.error(err.message, {
              position: "bottom-left",
              duration: 5000,
            });
          }
        }
      }, 500)
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.final-submit {
  form {
    .form-group {
      margin-bottom: 1.5rem;

      .uk-checkbox:checked {
        background-image: url("@/assets/user/images/icons/white-check.svg");
        background-size: 80%;
      }

      label {
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }

    .go-pay {
      button {
        cursor: pointer;
        border: 0;
        background-color: var(--light-main-color);
        color: #2b2827;
        font-size: 0.8rem;
        font-weight: 600;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 20%;
        border-radius: 5px;
      }
    }
  }
}

@include mobile-device {
  .final-submit {
    form {
      .form-group {
        label {
          font-size: 0.75rem;
        }
      }

      .go-pay {
        button {
          font-size: 0.75rem;
          width: 60%;
        }
      }
    }
  }
}

@include tablet-device {
  .final-submit {
    form {
      .form-group {
        label {
          font-size: 0.75rem;
        }
      }

      .go-pay {
        button {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
