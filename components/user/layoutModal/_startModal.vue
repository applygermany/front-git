<template>
  <div class="start-modal" id="start-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>پرسشنامه</p>
        <button
          id="close-start-modal"
          class="uk-modal-close-default"
          type="button"
          uk-close
        ></button>
      </div>

      <div class="row">
        <div class="question-box">
          <div class="question-box-icon">
            <img style="padding: 10px" src="@/assets/user/images/phone_call.svg" alt="" />
            <p>یکبار مشاوره رایگان</p>
          </div>
          <div>
            <p class="question-box-title">
              هنوز مطمئن نیستم برای تصمیم گیری احتیاج به مشاوره دارم
            </p>
            <p class="question-box-content">
              اگر راجع به نحوه همکاری با ما سوالی دارین یا در این باره تردید دارین اپلای
              جرمنی یک جلسه مشاوره رایگان تقدیم شما خواهد کرد تا راجع به جزییات صحبت بشه
            </p>

            <button
              @click="goOn(2)"
              type="button"
              id="button"
              class="question-box-button"
            >
              درخواست مشاوره رایگان
            </button>
          </div>
        </div>

        <div class="question-box">
          <div class="question-box-icon">
            <img src="@/assets/user/images/infinity.svg" alt="" />
            <p>مشاوره نامحدود</p>
          </div>
          <div>
            <p class="question-box-title">
              میخواهم کاربر ویژه شوم و از همه امکانات پرتال بهره ببرم
            </p>
            <p class="question-box-content">
              در این حالت باید یکی از پکیج های ویژه ما رو انتخاب کنین و کار مهاجرتتون رو
              به تیم با تجربه اپلای جرمنی بسپرین. توجه کنین که کاربر ویژه اپلای جرمنی
              <span style="color: red">ملزم به پرداخت هیچ پیش پرداختی نیست</span> و صرفا
              بعد از اخذ اولین پذیرش مبلغ تعرفه تسویه خواهد شد
            </p>

            <button
              @click="goOn(1)"
              type="button"
              id="button"
              class="question-box-button"
            >
              مشاهده پکیج ها
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    transactions() {
      return this.$store.getters["user/transactions"];
    },
  },
  methods: {
    payment(hash) {
      this.$router.push(`/payment/${hash}`);
    },
    goOn(value) {
      function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
      }

      setCookie("startmodal", "1", 30);
      if (value == 1) {
        document.getElementById("close-start-modal").click();
        this.$router.push("/user/acceptance");
      } else {
        document.getElementById("close-start-modal").click();
        this.$router.push("/user/telSupports");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.uk-modal-body {
  width: 55vw !important;
}

.row {
  margin: 1rem;
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
}

.question-box {
  flex: 5%;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  .question-box-icon {
    background: #e8e8e8;
    padding: 20px;
    border-radius: 5px;

    p {
      text-align: center !important;
      font-weight: bold;
      font-size: 12px;
      margin-top: 10px;
      color: #000;
    }

    img {
      width: 80px;
      height: 80px;
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  .question-box-title {
    text-align: center;
    font-weight: bold;
    margin-top: 20px;
    font-size: 12px;
    color: #000;
    height: 40px;
  }

  .question-box-content {
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
    line-height: 30px;
    height: 170px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .question-box-button {
    width: 100%;
    margin-top: 25px;
    color: white;
    background: var(--main-color);
    cursor: pointer;
    border: 0;
    font-size: 0.8rem;
    font-weight: 600;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 5px;
    float: bottom;
  }
}

.payment {
  margin-right: auto;
  margin-left: auto;
  transition: all 0.3s;
  background-color: var(--inner-background-color);
  color: var(--black);
  font-size: 0.8rem;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 2rem;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: var(--light-main-color);
    color: #2b2827;
  }
}

.start-modal {
  .uk-modal-body {
    display: flex;
    flex-direction: column;
    padding: 0;
    background-color: var(--white);
    border-radius: 8px;

    .title {
      @include fbx-ai-center-jc-between;
      background-color: var(--inner-background-color);
      padding: 1rem 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      button {
        position: inherit;

        &:hover {
          svg {
            color: var(--red);
          }
        }
      }

      p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--black);
      }
    }

    .table {
      overflow-y: auto;
      padding: 0.5rem 1.5rem 0;

      &::-webkit-scrollbar {
        width: 8px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #e2ad42;
        border-radius: 15px;
      }

      table {
        thead {
          th {
            color: var(--main-color);
            font-size: 0.8rem;
            font-weight: 500;
            border-bottom: 1px solid var(--gray);
            border-top: 1px solid var(--gray);
            text-align: right;

            &.description {
              padding-right: 1.5rem;
            }

            &.date {
              text-align: center;
            }

            &:first-child {
              border-radius: 10px;
              border-right: 1px solid var(--gray);
            }

            &:last-child {
              border-radius: 10px;
              border-left: 1px solid var(--gray);
              text-align: left;
            }
          }
        }

        tbody {
          td {
            font-size: 0.8rem;
            color: var(--black);
            border-left: 1px solid var(--gray);

            &:last-child {
              border-left: 0;
              text-align: left;
            }

            &.counter {
              color: var(--text-gray);
            }

            &.description {
              padding-right: 1.5rem;
            }

            &.date {
              text-align: center;
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .question-box {
    flex: 50%;
  }
  .start-modal {
    .uk-modal-body {
      width: 100% !important;
      .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.9rem;
        }
      }

      .table {
        padding: 1rem;

        table {
          thead {
            th {
              font-size: 0.75rem;

              &.description {
                padding-right: 1rem;
              }
            }
          }

          tbody {
            td {
              font-size: 0.75rem;

              &.description {
                padding-right: 1rem;
              }
            }
          }
        }
      }
    }
  }
}

@include tablet-device {
  .question-box {
    flex: 50%;
  }
  .start-modal {
    .uk-modal-body {
    }
  }
}
</style>
