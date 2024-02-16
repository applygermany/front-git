<template>
    <div>
        <div class="invite-finance">
            <div class="invite">
                <h3>کد دعوت</h3>
                <div class="body">
                    <div class="top">
                        <p>

                            به ازای دعوت از هریک از دوستان <span>{{ prices.invite }}</span> یورو هدیه بگیرید.
                        </p>
                        <div class="copy">
                            <span ref="code1">{{ user.id }}</span>
                            <a @click="copyCode">
                                <transition name="fade" mode="out-in">
                                    <svg
                                            v-if="!copied"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="uk-svg"
                                            key="icon"
                                    >
                                        <path
                                                d="M6.5 15.25C5.5335 15.25 4.75 14.4665 4.75 13.5V6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H13.5C14.4665 4.75 15.25 5.5335 15.25 6.5"
                                                stroke="#141414"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                        ></path>
                                        <path
                                                d="M8.75 10.75C8.75 9.64543 9.64543 8.75 10.75 8.75H17.25C18.3546 8.75 19.25 9.64543 19.25 10.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H10.75C9.64543 19.25 8.75 18.3546 8.75 17.25V10.75Z"
                                                stroke="#141414"
                                                stroke-width="1.5"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                        ></path>
                                    </svg>
                                    <span v-else class="copied" key="text">کپی شد</span>
                                </transition>
                            </a>
                        </div>
                    </div>
                    <div class="text">
                        <p>
                            اگر دوستان شما با کد اختصاصی شما در وب‌سایت ثبت‌نام کنند، پس از تسویه حساب ایشان،
                            {{ prices.invite }} یورو به شما هدیه داده خواهد شد.
                            برای نمایش
                            <a href="#invite-modal" uk-toggle class="see-more">
                                جزئیات بیشتـــر
                            </a>
                            کلیک کنیـد
                        </p>
                    </div>
                </div>
            </div>
            <div class="finance">
                <h3>بالانس مالی</h3>
                <div class="body">
                    <div class="img">
                        <img src="/user/assets/user/wallet-finance..svg" alt=""/>
                    </div>
                    <div class="row" v-if="user.balance !== '0'">
                        <div class="text2">
                            <p class="status">موجودی کیف پول</p>
                            <p class="price" style="margin-bottom: 1rem;">
                              <span>{{ balance.walletBalance > 0? balance.walletBalance.toLocaleString():0 }}</span>
                              <span class="currency">یورو</span>
                            </p>
                        </div>
                        <div class="text border" v-if="balance.check">
                          <template v-if="transactions.length > 0 && balance.walletBalance >= 0">
                            <p class="status">وضعیت : تسویه</p>
                            <a href="#finance-modal" uk-toggle>صورتحساب</a>
                          </template>
                          <template v-else-if="balance.walletBalance < 0" class="status">
                            بدهکار(افزودن دانشگاه اضافی)
                          <div class="row-flex">
                            <p class="status">وضعیت : <span style="color: red!important;">بدهکار</span></p>
                            <div class="row-flex-2">
                              <p v-if="balance.walletBalance !== 0" class="price" style="margin-bottom: 1rem;">
                                <span>{{ Math.abs(balance.walletBalance) | numberFilter }}</span> <span
                                  class="currency">یورو</span>
                              </p>
                            </div>
                          </div>
                          </template>
                          <p v-else class="status">وضعیت : شما صورتحسابی ندارید</p>
                        </div>
                        <div class="text border" v-else>
                            <div class="row-flex">
                                <p class="status">وضعیت : <span style="color: red!important;">بدهکار</span></p>
                                <div class="row-flex-2">
                                    <p v-if="balance.amount !== 0" class="price" style="margin-bottom: 1rem;">
                                        <span>{{ balance.walletBalance >= 0? balance.amount.toLocaleString():Number(Math.abs(balance.walletBalance)+balance.amount).toLocaleString() }}</span> <span
                                            class="currency">یورو</span>
                                    </p>
                                    <p v-if="balance.ir_amount !== 0" class="price"
                                       style="margin-bottom: 1rem; margin-right: 10px;">
                                        <span>{{ balance.ir_amount | numberFilter }}</span> <span
                                            class="currency">ریال</span>
                                    </p>
                                </div>
                            </div>

                            <a href="#finance-modal" style="float: left" uk-toggle>صورتحساب</a>
                        </div>
                    </div>
                    <div class="row2" v-else>
                        <div class="text" v-if="balance.check">
                            <p v-if="transactions.length > 0" class="status">وضعیت : تسویه</p>
                            <p v-else class="status">وضعیت : شما صورتحسابی ندارید</p>
                            <a v-if="transactions.length > 0" href="#finance-modal" uk-toggle>صورتحساب</a>
                        </div>
                        <div class="text" v-else>
                            <p class="status">وضعیت : <span style="color: red!important;">بدهکار</span></p>
                            <div class="row-flex-2">
                                <p v-if="balance.amount !== 0" class="price" style="margin-bottom: 1rem;">
                                    <span>{{ balance.walletBalance >= 0? balance.amount.toLocaleString():Number(balance.walletBalance+balance.amount).toLocaleString() }}

                                    </span> <span class="currency">یورو</span>
                                </p>
                                <p v-if="balance.ir_amount !== 0" class="price" style="margin-bottom: 1rem;">
                                    <span>{{ balance.ir_amount | numberFilter }}</span> <span
                                        class="currency">ریال</span>
                                </p>
                            </div>

                            <a href="#finance-modal" uk-toggle>صورتحساب</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <client-only>
            <FinanceModal/>

            <InviteModal/>
        </client-only>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import FinanceModal from "./modal/_financeModal.vue";
import InviteModal from "./modal/_inviteModal.vue";

export default {
    components: {FinanceModal, InviteModal},
    data() {
        return {
            copied: false,
        };
    },
    computed: {
        ...mapGetters({
            user: "user/user",
            balance: "user/balance",
            users: "user/users",
            prices: "user/prices",
        }),
        transactions() {
            return this.$store.getters["user/transactions"];
        },
    },
    methods: {
        copyCode() {
            this.copied = true;
            navigator.clipboard.writeText(this.user.id);

            setTimeout(() => (this.copied = false), 3000);
        },
    },
    created() {
        this.$store.dispatch("user/pricing");
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.row {
  display: flex;
  justify-content: space-between;
}

.invite-finance {
  @include fbx-ai-center-jc-between;
  align-items: stretch;

  h3 {
    font-size: 0.9rem;
    color: var(--text-gray);
    font-weight: 500;
    padding-right: 2rem;
    margin-bottom: 1rem;
  }

  .invite {
    @include fbx-column-ai-start-jc-start;
    width: 49%;

    .body {
      height: 100%;
      background-color: var(--white);
      @include boxshadow();
      padding: 2rem;
      border-radius: 10px;

      .top {
        @include fbx-ai-start-jc-between;

        p {
          width: 60%;
          line-height: 1.8rem;
          color: var(--black);
          font-size: 0.9rem;
          font-weight: 700;

          span {
            font-size: 1.5rem;
            font-weight: 800;
          }
        }

        .copy {
          @include fbx-ai-start-jc-start;

          span:not(.copied) {
            @include fbx-ai-center-jc-center;
            padding: 0.5rem 2rem;
            border-radius: 5px;
            border: 1px solid var(--gray);
            font-size: 1rem;
            font-weight: 600;
            color: var(--black);
          }

          a {
            position: relative;
            margin-right: 0.5rem;
            background-color: var(--inner-background-color);
            border-radius: 5px;

            padding: 0.5rem;
            @include fbx-ai-center-jc-center;

            svg {
              fill: none;
              color: var(--main-color);
            }

            .copied {
              top: -1.5rem;
              width: 120%;
              color: var(--black);
              font-size: 0.9rem;
              font-weight: 600;

              &.d-none {
                display: none;
              }
            }
          }
        }
      }

      .text {
        font-weight: 500;
        margin-top: 2rem;
        text-align: justify;
        font-size: 0.8rem;
        line-height: 1.8rem;
        color: var(--text-gray);

        .see-more {
          color: var(--main-color);
          text-decoration: underline !important;
          text-decoration-color: var(--main-color) !important;
        }
      }
    }
  }

  .finance {
    width: 49%;
    @include fbx-column-ai-start-jc-start;

    .body {
      height: 100%;
      width: calc(100% - 4rem);
      background-color: var(--white);
      border-radius: 10px;
      @include boxshadow();
      padding: 2rem;
      @include fbx-ai-center-jc-start;
      align-items: stretch;

      .img {
        margin-right: -2rem;
        margin-bottom: -2rem;
        margin-left: 1rem;
        height: 100%;
        margin-top: 2rem;
      }

      .row {
        width: 100%;
        display: table;
      }

      .row2 {
        display: flex;
      }

      .row-flex {
        width: 100%;
        display: flex;
        align-self: center;
        @include fbx-ai-center-jc-between;
      }

      .row-flex-2 {
        width: 100%;
        display: flex;
        align-self: center;
        @include fbx-ai-center-jc-end;
      }

      .border {
        border-top-color: var(--gray);
        border-top-style: solid;
        padding-top: 10px;
      }

      .between {
        @include fbx-ai-start-jc-between;
      }

      .text {
        border-top-width: 1px;

        .status {
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--black);
          margin-bottom: 1rem;
          width: 100%;
        }

        .price {
          @include fbx-ai-center-jc-start;
          color: #63a1ff;
          font-size: 1.5rem;
          font-weight: 800;

          .currency {
            margin-right: 0.5rem;
            font-size: 0.8rem;
            padding: 0.25rem;
            border: 1px solid #63a1ff;
            border-radius: 5px;
          }
        }

        a {
          border-radius: 5px;
          background-color: var(--inner-background-color);
          font-size: 0.8rem;
          color: var(--black);
          padding: 0.5rem 2rem;
          transition: all 0.3s;

          &:hover {
            background-color: var(--light-main-color);
            color: #2b2827;
          }
        }

        &.d-none {
          display: none;
        }
      }

      .text2 {
        display: flex;
        @include fbx-ai-center-jc-between;

        .status {
          font-weight: 800;
          font-size: 0.9rem;
          color: var(--black);
          margin-bottom: 1rem;
        }

        .price {
          @include fbx-ai-center-jc-start;
          color: #63a1ff;
          font-size: 1.5rem;
          font-weight: 800;

          .currency {
            margin-right: 0.5rem;
            font-size: 0.8rem;
            padding: 0.25rem;
            border: 1px solid #63a1ff;
            border-radius: 5px;
          }
        }


      }
    }
  }
}

@include mobile-device {
  .row {
    display: table;
  }


  .invite-finance {
    flex-wrap: wrap;

    h3 {
      padding-right: 1rem;
    }

    .invite {
      width: 100%;
      margin-bottom: 2rem;

      .body {
        padding: 1rem;

        .top {
          flex-wrap: wrap;

          p {
            width: 100%;
            font-size: 0.8rem;

            span {
              font-size: 1.5rem;
            }
          }

          .copy {
            margin-top: 1rem;
            width: 100%;
            justify-content: center;

            span:not(.copied) {
              padding: 0.5rem 1.5rem;
              font-size: 0.9rem;
            }

            a {
              .copied {
                top: 0.75rem;
                left: -3.5rem;
                font-size: 0.75rem;
              }
            }
          }
        }

        .text {
          margin-top: 1.5rem;
          font-size: 0.75rem;
        }
      }
    }

    .finance {
      width: 100%;


      .body {
        width: calc(100% - 2rem);
        padding: 1rem;

        .text {
            @include fbx-column-ai-center-jc-center;

          .row-flex {
            display: table;
          }

          .row-flex-2 {
            width: 100%;
            display: table;
              @include fbx-column-ai-center-jc-center;
          }

          .status {
            font-size: 0.8rem;
              text-align: center;
          }

          .price {
            font-size: 1.2rem;

            .currency {
              font-size: 0.75rem;
            }
          }

          a {
            font-size: 0.75rem;
            padding: 0.5rem 1.5rem;
          }
        }

        .text2 {
          @include fbx-column-ai-center-jc-center;
          border: none;
        }
      }
    }
  }
}

@include tablet-device {
  .invite-finance {
    flex-wrap: wrap;

    h3 {
      padding-right: 1rem;
    }

    .invite {
      width: 100%;
      margin-bottom: 2rem;

      .body {
        padding: 1rem;

        .top {
          p {
            font-size: 0.8rem;

            span {
              font-size: 1.5rem;
            }
          }

          .copy {
            margin-top: 1rem;

            span:not(.copied) {
              padding: 0.5rem 1.5rem;
              font-size: 0.9rem;
            }

            a {
              .copied {
                font-size: 0.75rem;
              }
            }
          }
        }

        .text {
          margin-top: 1.5rem;
          font-size: 0.75rem;
        }
      }
    }

    .finance {
      width: 100%;

      .body {
        width: calc(100% - 2rem);
        padding: 1rem;

        .text {
          margin: auto;

          .status {
            font-size: 0.8rem;
          }

          .price {
            font-size: 1.2rem;

            .currency {
              font-size: 0.75rem;
            }
          }

          a {
            font-size: 0.75rem;
            padding: 0.5rem 1.5rem;
          }
        }
      }
    }
  }
}

@include large-device {
  .invite-finance {
    flex-wrap: wrap;

    .invite {
      width: 100%;
      margin-bottom: 2rem;
    }

    .finance {
      width: 100%;
    }
  }
}
</style>
