<template>
  <div id="forget-password-modal" uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <div class="level-1">
        <div class="title">
          <img src="@/assets/auth/images/auth/logo-2.svg" alt="" style="width: 50%;" />
        </div>
        <transition name="modal" mode="out-in">
          <div class="form" v-if="level1" key="level-1">
            <form @submit.prevent="sendRecoveryCode">
              <div class="form-group">
                <input
                  type="text"
                  id="email"
                  placeholder=" "
                  :class="{ 'error-input': errors.includes('mobileRecovery') }"
                  v-model="mobileRecovery"
                />
                <label class="floating" for="email">
                  ایمیل یا شماره تماس
                </label>
              </div>
              <div class="form-group submit">
                <button type="submit" v-if="!sending">درخواست ارسال کد</button>
                <span class="loading-button" v-else>چند لحظه صبر کنید</span>
              </div>
            </form>
          </div>
          <div class="text" v-else key="level-2">
            <p>
              کد بازیابی رمز عبور به ایمیل شما ارسال شد. لطفا آن را تایید کنید.
            </p>
          </div>
        </transition>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileRecovery: null,
      level1: true,
      sending: false,
      errors: [],
    };
  },
  methods: {
    async sendRecoveryCode() {
      this.errors = [];

      if (this.mobileRecovery == null || this.mobileRecovery == "")
        this.errors.push("mobileRecovery");

      if (this.errors.length != 0) return;

      this.sending = true;
      try {
        await this.$store.dispatch(
          "customAuth/sendRecoveryCode",
          this.mobileRecovery
        );
      } catch (err) {
        if (err.message.includes("ارسال")) {
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
          this.level1 = false;
          this.$cookies.set("mobile", this.mobileRecovery, {
            path: "/",
            maxAge: 300,
          });
          setTimeout(() => this.$router.push("/auth/resetPassword"), 1000);
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

<style lang="scss" scoped>
@import "@/assets/auth/styles/scss/mixin.scss";
@import "@/assets/auth/styles/scss/variables.scss";
#forget-password-modal {
  .uk-modal-body {
    padding: 0;
    border-radius: 15px;
    .title {
      background-image: url("@/assets/auth/images/auth/header.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;

      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      text-align: center;
      padding: 2rem;
    }
    .form {
      form {
        text-align: center;
        padding: 3rem;
        .form-group {
          width: 80%;
          margin-bottom: 3rem;
          position: relative;
          width: 100%;

          input {
            width: calc(99.5% - 2rem);
            border: 1px solid rgba(black, 0.1);
            padding: 1rem;
            border-radius: 5px;
            font-size: 0.9rem;
            -ms-box-sizing: content-box;
            -moz-box-sizing: content-box;
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
          }

          input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
        }

          input::placeholder {
            font-size: 0.8rem;
            font-weight: 300;
            color: $secondColor;
            transition: 0.2s ease-in;
          }

          input:focus,
          select:focus {
            // border: 0;
            outline-color: $mainColor;
          }

          .floating {
            top: 40%;
            right: 5%;
            position: absolute;
            pointer-events: none;
            transition: 0.2s ease all;
            background-color: white;
            color: $secondColor;
            font-size: 0.8rem;
            font-weight: 300;
          }

          input:focus ~ label,
          input:not(:placeholder-shown) ~ label {
            top: -12%;
            padding: 0 0.5rem;
          }
        }

        .submit {
          margin-bottom: 0;
          button {
            font-size: 0.9rem;
            background-color: $thirdColor;
            padding: 1rem;
            border: 0;
            border-radius: 5px;
            width: 40%;
            cursor: pointer;
            transition: all 0.3s;
          }

          button:hover {
            background-color: $mainColor;
          }
        }
      }
    }

    .text {
      padding: 3rem;
      text-align: center;
      p {
        color: black;
        font-size: 0.9rem;
      }
    }

    @include mobile {
      .title {
        padding: 1.5rem;
        img {
          width: 60%;
        }
      }
      .form {
        form {
          padding: 1.5rem;
          .form-group {
            input {
              width: calc(100% - 1.5rem);
              padding: 0.75rem;
              font-size: 0.75rem;
            }

            input::placeholder {
              font-size: 0.75rem;
            }

            .floating {
              font-size: 0.75rem;
            }
          }
          .submit {
            button {
              width: 60%;
              font-size: 0.75rem;
              padding: 0.75rem;
            }
          }
        }
      }
      .text {
        padding: 1.5rem;
        p {
          font-size: 0.75rem;
          line-height: 1.5rem;
        }
      }
    }
    @include tablet {
      .form {
        form {
          padding: 2rem;
          .form-group {
            input {
              width: calc(100% - 1.5rem);
              padding: 0.75rem;
              font-size: 0.8rem;
            }

            input::placeholder {
              font-size: 0.8rem;
            }

            .floating {
              font-size: 0.8rem;
            }
          }
          .submit {
            button {
              width: 60%;
              font-size: 0.8rem;
              padding: 0.75rem;
            }
          }
        }
      }
      .text {
        padding: 2rem;
        p {
          font-size: 0.8rem;
          line-height: 1.5rem;
        }
      }
    }
  }
}

.uk-close {
  right: unset !important;
  left: 10px !important;
}
</style>
