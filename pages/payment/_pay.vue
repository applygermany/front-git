<template>
    <main class="main" id="payment">
        <section>
            <div class="title">
                <p>پرداخت</p>
            </div>
            <transition name="fade" mode="out-in">
                <!--                <div v-if="canGo">-->
                <div class="body" v-if="phase === 1" key="discount-1">
                    <div class="img">
                        <img src="@/assets/images/payment/illustration.svg" alt=""/>
                    </div>
                    <div class="text">
                        <form @submit.prevent="">
                            <div class="form-group">
                                <input
                                        type="text"
                                        placeholder=" "
                                        id="code1"
                                        v-model="offCode"
                                />
                                <a @click="checkOffCode" class="check-code">تایید</a>
                                <label class="floating" for="code1">کد تخفیف</label>
                            </div>
                        </form>
                        <div class="info">
                            <p>
                                <span>مبلغ قابل پرداخت</span>
                                <span>{{ amount | numberFilter }} ریالءءء</span>
                            </p>
                        </div>
                        <div class="buttons">
                            <nuxt-link to="/user/dashboard" tag="button" class="cancel">
                                انصراف
                            </nuxt-link>
                            <a class="custom-btn" :href="url">پرداخت</a>
                        </div>
                    </div>
                </div>
                <div class="body" v-if="phase === 2" key="discount-2">
                    <div class="img">
                        <img src="@/assets/images/payment/illustration.svg" alt=""/>
                    </div>
                    <div class="text">
                        <form @submit.prevent="">
                            <div class="form-group">
                                <input
                                        type="text"
                                        placeholder=" "
                                        id="code2"
                                        v-model="offCode"
                                        disabled
                                />
                                <label class="floating" for="code2">کد تخفیف</label>

                                <span class="done" v-if="discountType === 'percent'">
                  {{ discountAmount }}% تخفیف اعمال شد
                </span>
                                <span class="done" v-if="discountType === 'fixed'">
                  {{ discountAmount }}ریال تخفیف اعمال شد
                </span>
                            </div>
                        </form>
                        <div class="info">
                            <div class="additional">
                                <p>
                                    <span>قیمت کل</span>
                                    <span>{{ (amount + discount) | numberFilter }} ریالءءء</span>
                                </p>
                                <p>
                                    <span>کد تخفیف</span>
                                    <span>{{ discount | numberFilter }}- ریالءءء</span>
                                </p>
                            </div>
                            <p>
                                <span>مبلغ قابل پرداخت</span>
                                <span>{{ amount | numberFilter }} ریالءءء</span>
                            </p>
                        </div>
                        <div class="buttons">
                            <nuxt-link to="/user/dashboard" tag="button" class="cancel"
                            >انصراف
                            </nuxt-link
                            >
                            <a class="custom-btn" :href="url">پرداخت</a>
                        </div>
                    </div>
                </div>
                <div class="body" v-if="phase === 3" key="Success">
                    <div class="img">
                        <img src="@/assets/images/payment/Success.svg" alt=""/>
                    </div>
                    <div class="text">
                        <p>عملیات پرداخت با <span class="success">موفقیت</span> انجام شد</p>
                        <nuxt-link :to="route" tag="button">تایید</nuxt-link>
                    </div>
                </div>
                <div class="body" v-if="phase === 4" key="Error">
                    <div class="img">
                        <img src="@/assets/images/payment/Failure.svg" alt=""/>
                    </div>
                    <div class="text">
                        <p>
                            متاسفانه عملیات پرداخت <span class="error">ناموفق </span>بود!
                            چنانچه از مبلغی کسر شده است، طی 72 ساعت به حساب شما باز میگردد
                        </p>
                        <nuxt-link :to="route" tag="button">تایید</nuxt-link>
                    </div>
                </div>
                <!--                </div>-->
                <!--                <div v-else>-->
                <!--                    <div class="body" key="Error">-->
                <!--                        <div class="img">-->
                <!--                            <img src="@/assets/images/payment/Failure.svg" alt=""/>-->
                <!--                        </div>-->
                <!--                        <div class="text">-->
                <!--                            <p style="text-align: center"> به نظر می رسد شما از فیلتر شکن استفاده می کنید برای پرداخت-->
                <!--                                لطفا فیلترشکن-->
                <!--                                خود را خاموش کنید و روی دکمه-->
                <!--                                زیر کلیک نمایید. </p>-->
                <!--                            <a class="a-class" :href="url">تایید</a>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </transition>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            phase: 1,
            offCode: null,
            url: "",
            discount: 0,
            amount: 0,
            discountType: null,
            discountAmount: 0,
            type: null,
            canGo: this.$store.getters["telSupports/vuexTurnOffVpnModal"],
            route: '/user/dashboard'
            // ip: '',
            // country: ''
        };
    },
    computed: {
        canGo() {
            return this.$store.getters["telSupports/vuexTurnOffVpnModal"];
        }
    },
    async asyncData({params, redirect, $axios, query}) {

        // const ipChecker = await $axios.get(`httpss://ipwho.is`);
        // store.commit("telSupports/SET_Country", ipChecker.data.country);
        // store.commit("telSupports/SET_CountryCode", ipChecker.data.country_code);
        //
        // if (this.canGo) {
        const {data} = await $axios.get(`v1/transaction/code/${params.pay}`);

        const res = data.transaction.data;
        let type = 'tel-support'
        if (res.invoice_type === 'tel-support') {
            type = "tel-support";
        } else if (res.invoice_type === 'resume' && res.is_resume) {
            type = "resume";
        } else if (res.invoice_type === 'resume' && !res.is_resume) {
            type = "resume";
        }

        if (data.status === 0) {
            redirect("/user/dashboard");
            return;
        }

        if (data.transaction.data.payment_status == 'paid') {
            const res = data.transaction.data;
            if (res.invoice_type === 'tel-support') {
                let route = "/user/telSupports";
                return {
                    phase: 3,
                    route,
                    type: type
                };
            } else if (res.invoice_type === 'resume' && res.is_resume) {
                let route = "/user/resumes";
                return {
                    phase: 3,
                    route,
                    type: type
                };
            } else if (res.invoice_type === 'resume' && !res.is_resume) {
                let route = "/user/motivations";
                return {
                    phase: 3,
                    route,
                    type: type
                };
            }
        }

        if (query.success == "false") {
            const res = data.transaction.data;
            if (res.invoice_type === 'tel-support') {
                let route = "/user/telSupports";
                return {
                    phase: 4,
                    route,
                    type: type
                };
            } else if (res.invoice_type === 'resume' && res.is_resume) {
                let route = "/user/resumes";
                return {
                    phase: 4,
                    route,
                    type: type
                };
            } else if (res.invoice_type === 'resume' && !res.is_resume) {
                let route = "/user/motivations";
                return {
                    phase: 4,
                    route,
                    type: type
                };
            }
        }

        if (data.discount_msg != "") {
            this.$toasted.success(data.discount_msg, {
                position: "bottom-left",
                duration: 5000,
            });
        }

        if (data.discount > 0) {
            return {
                phase: 2,
                discountType: data.discount_type,
                discountAmount: data.discount_amount,
                amount: data.amount,
                discount: data.discount,
                url: data.payment_gate,
                type: type
            };
        }

        return {
            amount: data.amount,
            url: data.payment_gate,
            type: type
        };
        // } else {
        //     return {
        //         ip: '',
        //         country: '',
        //         url: 'https://applygermany.net/payment/' + params.pay,
        //     };
        // }
    },
    methods: {
        checkOffCode() {
            this.$axios
                .get(
                    `v1/transaction/code/${this.$route.params.pay}?off_code=${this.offCode}?type=${this.type}`
                )
                .then((res) => {
                    if (res.data.status != 1) {
                        this.$toasted.error("کد معتبر نیست", {
                            position: "bottom-left",
                            duration: 5000,
                        });
                    }

                    if (res.data.discount > 0) {
                        this.phase = 2;

                        this.discountType = res.data.discount_type;
                        this.discountAmount = res.data.discount_amount;

                        this.amount = res.data.amount;
                        this.discount = res.data.discount;
                        this.url = res.data.payment_gate;
                        return;
                    }
                });
        },
    },
};
</script>

<style lang="scss">
// @import "@/assets/site/css/mixins.scss";
@import "@/assets/site/css/main.scss";

#payment {
  height: 100vh;
  @include fbx-column-ai-center-jc-center;

  .a-class {
    cursor: pointer;
    background-color: #e6c55b;
    font-size: 0.8rem;
    color: var(--white);
    width: 60%;
    border-radius: 5px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 1px solid #e6c55b;
    text-align: center;
  }

  > section {
    width: 600px;
    background-color: var(--white);
    padding: 0 !important;
    border-radius: 8px;
    margin: 2rem auto 2rem auto;
    @include boxshadow();

    .title {
      @include fbx-ai-center-jc-between;
      background-color: #f1f0f0;
      padding: 1rem 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      button {
        position: inherit;

        &:hover {
          svg {
            color: #cc2a2a;
          }
        }
      }

      p {
        font-size: 0.9rem;
        font-weight: bold;
        color: #2b2827;
      }
    }

    .body {
      padding: 1.5rem;
      @include fbx-column-ai-center-jc-center;

      .img {
        margin-bottom: 1.5rem;
        text-align: center;

        img {
          width: 80%;
        }
      }

      .text {
        width: 100%;
        @include fbx-column-ai-center-jc-center;

        p {
          font-size: 0.8rem;
          color: var(--black);
          font-weight: 600;
          margin-bottom: 1.5rem;
          line-height: 2rem;

          .success {
            color: #9ea226;
          }

          .error {
            color: #cc2a2a;
          }
        }

        form {
          width: 60%;
          margin-bottom: 1.5rem;

          .form-group {
            position: relative;

            input {
              background-color: var(--white);
              padding: 0.75rem;
              font-size: 0.8rem;
              border-radius: 5px;
              border: 1px solid var(--gray);
              width: calc(100% - 1.5rem);
              color: var(--black);
              font-weight: 600;
              transition: all 0.3s;

              &::placeholder {
                transition: all 0.3s;
                color: var(--text-gray);
                font-size: 0.8rem;
              }

              &:focus {
                outline: 0;
                border-color: var(--main-color);
              }

              &:focus ~ label,
              &:not(:placeholder-shown) ~ label {
                top: -20%;
                padding-right: 0.25rem;
                padding-left: 0.25rem;
              }
            }

            .check-code {
              position: absolute;
              left: 0.75rem;
              font-size: 0.8rem;
              top: 30%;
              color: var(--blue);
              font-weight: 500;
            }

            label {
              pointer-events: none;
              transition: all 0.3s;
              color: var(--text-gray);
              position: absolute;
              top: 30%;
              right: 0.75rem;
              font-size: 0.8rem;
              font-weight: 300;
              background-color: var(--white);
            }

            span {
              position: absolute;
              top: 30%;
              left: 0.75rem;
              font-size: 0.8rem;
              text-decoration: underline;

              &.done {
                color: #9ea226;
              }

              &.error {
                color: #cc2a2a;
              }
            }
          }
        }

        .info {
          width: 60%;
          margin-bottom: 1.5rem;

          .additional {
            border-bottom: 1px solid var(--gray);
            padding-bottom: 1rem;
            margin-bottom: 1rem;
          }

          p {
            margin-bottom: 0;
            width: 100%;
            @include fbx-ai-center-jc-between;
          }
        }

        button,
        .custom-btn {
          cursor: pointer;
          background-color: #e6c55b;
          font-size: 0.8rem;
          color: var(--white);
          width: 60%;
          border-radius: 5px;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          border: 1px solid #e6c55b;
        }

        .buttons {
          width: 100%;
          @include fbx-ai-center-jc-between;

          button,
          .custom-btn {
            text-align: center;
            width: 20%;

            &.cancel {
              background-color: var(--red);
            }
          }
        }
      }
    }
  }

  @include mobile-device {
    > section {
      width: calc(100% - 4rem);

      .body {
        .text {
          form {
            width: 100%;
          }

          .info {
            width: 100%;
          }

          button {
            width: 100%;
          }

          .buttons {
            width: 100%;

            button {
              width: 30%;
            }
          }
        }
      }
    }
  }
}
</style>
