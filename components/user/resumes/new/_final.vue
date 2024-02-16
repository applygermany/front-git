<template>
    <div class="final-submit">
        <form v-if="!canFill" @submit.prevent="">
            <div class="form-group" v-if="$auth.user.type != 2">
                <input
                        type="checkbox"
                        id="check"
                        class="uk-checkbox"
                        v-model="agreed"
                />
                <label for="check">
                    از تعرفه فوق " <span v-if="resumelang && resumelang.toString() === 'دو زبانه'">{{
                    prices.resume_bi | numberFilter
                    }}</span>
                    <span v-else>{{ prices.resume | numberFilter }}</span> " معادل {{ convertPrice }} مطلع
                    شدم و تقاضای ثبت سفارش دارم
                </label>
            </div>
            <div class="go-pay" v-if="$auth.user.type != 2">
                <button type="button" @click="updateResume" v-if="updating == false">
                    ثبت درخواست و پرداخت
                </button>
                <button type="button" v-else>چند لحظه صبر کنید</button>
            </div>
            <div class="go-pay" v-else>
                <button type="button" @click="updateResume" v-if="updating == false">
                    ثبت درخواست
                </button>
                <button type="button" v-else>چند لحظه صبر کنید</button>
            </div>
        </form>
    </div>
</template>

<script>
import NumbertoPersianText from "number-to-persian-text";

export default {
    props: ["resume"],
    data() {
        return {
            agreed: false,
            updating: false,
            errors: [],
        };
    },
    computed: {
        resumelang() {
            return this.$store.getters["resume/language"];
        },
        prices() {
            return this.$store.getters["user/prices"];
        },
        canFill() {
            return this.$store.getters["resume/canFill"]
        },
        totalPrice() {
            if (this.resumelang && this.resumelang.toString() === 'دو زبانه') {
                return (
                    this.prices.resume_bi
                );
            } else {
                return (
                    this.prices.resume
                );
            }
        },
        convertPrice() {
            return NumbertoPersianText.getText(this.totalPrice ?? '0');
        }
    },
    methods: {
        async updateResume() {
            this.updating = true;

            if (this.agreed === false && this.$auth.user.type != 2) {
                this.updating = false;

                this.$toasted.error("لطفا گزینه مطلع شدم را چک کنید", {
                    position: "bottom-left",
                    duration: 5000,
                });
                this.updating = false;

                return false;
            }
            try {
                await this.$store.dispatch("resume/updateResume", {
                    resume: this.resume,
                });
            } catch (err) {
                this.updating = false;
                if (err.message.includes("موفقیت") || err.message.includes("انتقال")) {
                    const hash = this.$store.getters["resume/hash"];
                    if (this.$auth.user.type != 2) {
                        this.$router.push(`/payment/${hash}`);
                    } else {
                        this.$router.push(`/user/resumes`);
                    }
                } else {
                    this.$toasted.error(err.message, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
            }
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
      .go-pay {
        button {
          width: 50%;
        }
      }
    }
  }
}

@include tablet-device {
  .final-submit {
    form {
      .go-pay {
        button {
          width: 50%;
        }
      }
    }
  }
}
</style>
