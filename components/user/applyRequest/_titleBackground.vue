<template>
  <div class="title-background">
    <div class="right">
      <h1 class="title-font">
          <span>درخواست</span>
          <span>اخذ پذیرش</span>
      </h1>
      <h3 class="title-font">(بدون پیش پرداخت)</h3>
<!--      <p>-->
<!--        در سطح کاربری ویژه بدون نیاز به پیش پرداخت، به تمام امکانات پرتال-->
<!--        دسترسی پیدا می‌کنید و تنهـا بعد از اتمام کار و اطمینــان از اخذ اولین پذیـرش ملزم به تسویه حساب هستید-->
<!--      </p>-->
    </div>
    <div class="left">
      <div class="free">
        <img src="@/assets/user/images/tea.svg" alt="">
        <span class="title-font top">رایگان</span>
        <span class="title-font bottom">سطح کاربری عادی</span>
      </div>
      <div class="vip">
        <img src="@/assets/user/images/laurel_wreath.svg" alt="">
        <span class="title-font top">{{ prices.package.EUR }} یورو</span>
        <span class="title-font bottom">سطح کاربری پایه</span>
      </div>
      <div class="additional">
        <img src="@/assets/user/images/crown.svg" alt="">
        <span class="title-font top">{{ prices.package.EUR2 }} یورو</span>
        <span class="title-font bottom">سطح کاربری ویژه</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  computed: {
    prices() {
      return this.$store.getters["user/prices"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

#apply-request {
  .body {
    background-color: var(--white);
    border-radius: 8px;
    padding-bottom: 2rem;

    .title-background {
      background-image: url("@/assets/user/images/apply-request-background.svg");
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      padding: 2rem;
      @include fbx-ai-center-jc-between;

      .right {
        width: 50%;

        h1 {
          @include fbx-column-ai-start-jc-start;
          color: white;
          font-size: 2.5rem;
          font-weight: 800;
        }

        h3 {
          @include fbx-column-ai-start-jc-start;
          color: var(--main-color);
          font-size: 1.5rem;
          font-weight: 800;
          margin-top:10px;
        }

        p {
          //width: 70%;
          margin-top: 2rem;
          font-size: 0.9rem;
          line-height: 2rem;
          color: white;
        }
      }

      .left {
        width: 47%;
        justify-content: center;
        @include fbx-ai-start-jc-start;

        .vip {
          margin-left: 3rem;
          margin-right: 3rem;
        }

        .vip, .free, .additional {
          @include fbx-column-ai-center-jc-center;

          img {
            width: 70%;
            margin-bottom: 1rem;
          }

          span.top {
            color: white;
            font-size: 1.2rem;
            font-weight: 700;
          }

          span.bottom {
            color: white;
            font-size: 0.9rem;
            font-weight: 500;
          }
        }
      }
    }

    .show-list {
      margin: 3rem auto 0 auto;
      width: 90%;

      .row {
        @include fbx-ai-start-jc-start;
        margin-bottom: 1rem;

        .counter {
          @include fbx-ai-center-jc-center;
          font-size: 1rem;
          font-weight: 500;
          color: var(--black);
          background-color: var(--inner-background-color);
          width: 3rem;
          height: 3rem;
          border-radius: 5px;
          margin-left: 1rem;
        }

        .text {
          padding: 0 1rem 0 3rem;
          width: 100%;
          border-radius: 5px;
          background-color: var(--inner-background-color);
          @include fbx-ai-center-jc-between;

          p {
            font-size: 0.9rem;
            color: var(--black);
            font-weight: 500;
          }

          .enable-disable {
            @include fbx-ai-center-jc-between;
            width: 45%;

            div {
              width: 30%;
              text-align: center;

              img {
                width: 20%;

                &.dark {
                  display: none;
                }
              }

              svg.close {
                width: 20%;
                fill: none;
                color: var(--text-gray);
              }
            }
          }
        }
      }
    }

    .submit-request {
      border-top: 1px solid var(--gray);
      padding-top: 2rem;
      width: 80%;
      margin: 4rem auto 0 auto;

      form {
        @include fbx-ai-center-jc-between;

        .form-group {
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
          width: 20%;

          button {
            cursor: pointer;
            border: 0;
            background-color: var(--light-main-color);
            color: #2B2827;
            font-size: 0.8rem;
            font-weight: 600;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            border-radius: 5px;
          }
        }
      }
    }
  }
}

@include mobile-device {
  #apply-request {
    .body {
      padding-bottom: 1rem;

      .title-background {
        background-size: cover;
        padding: 1.5rem;
        flex-wrap: wrap;

        .right {
          width: 100%;

          h1 {
            align-items: center;
            font-size: 1.8rem;
          }

          h3 {
            align-items: center;
          }

          p {
            margin-top: 1rem;
            font-size: 0.75rem;
          }
        }

        .left {
          margin-top: 1.5rem;
          width: 100%;

          .vip {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
          }

          .vip, .free, .additional {
            img {
              width: 60%;
            }

            span.top {
              font-size: 1rem;
            }

            span.bottom {
              font-size: 0.8rem;
            }
          }
        }
      }

      .show-list {
        margin: 1.5rem auto 0 auto;
        width: 95%;

        .row {
          .counter {
            display: none;
          }

          .text {
            padding: 0.5rem;
            flex-wrap: wrap;

            p {
              width: 100%;
              text-align: center;
              font-size: 0.75rem;
              margin-bottom: 1rem;
            }

            .enable-disable {
              width: 100%;
            }
          }
        }
      }

      .submit-request {
        padding-top: 1rem;
        width: 95%;
        margin: 2rem auto 0 auto;

        form {
          justify-content: center;
          flex-wrap: wrap;

          .form-group {
            label {
              font-size: 0.75rem;
            }
          }

          .go-pay {
            width: 40%;
            margin-top: 1rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  #apply-request {
    .body {
      padding-bottom: 1rem;

      .title-background {
        background-size: cover;
        padding: 1.5rem;

        .right {
          h1 {
            font-size: 1.8rem;
          }

          p {
            margin-top: 1rem;
            font-size: 0.75rem;
          }
        }

        .left {
          .vip, .free, .additional {
            span.top {
              font-size: 1rem;
            }

            span.bottom {
              font-size: 0.8rem;
            }
          }
        }
      }

      .show-list {
        margin: 1.5rem auto 0 auto;
        width: 95%;

        .row {
          .text {
            padding: 0 1rem 0 1rem;

            p {
              font-size: 0.75rem;
            }
          }
        }
      }

      .submit-request {
        padding-top: 1rem;
        margin: 2rem auto 0 auto;

        form {
          .form-group {
            label {
              font-size: 0.75rem;
            }
          }

          .go-pay {
            width: 20%;
          }
        }
      }

    }
  }
}

@include large-device {
  #apply-request {
    .body {
      .title-background {
        background-size: cover;
      }
    }
  }
}

</style>
