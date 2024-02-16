<template>
  <div class="new__session">
    <h3>تعریف جلسه جدید</h3>
    <ul class="uk-subnav uk-subnav-pill">
      <li v-if="$auth.user.level == 3" :class="formTab === 1 ? 'uk-active' : ''">
        <a @click="changeFormTab(1)">
          <span class="icon">
            <svg
                class="uk-svg"
                height="11.891"
                viewBox="0 0 12.675 11.891"
                width="12.675"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M-16177.187-20535.531a.634.634,0,0,1-.643-.631.633.633,0,0,1,.643-.623h9.494a.635.635,0,0,1,.643.623.637.637,0,0,1-.643.631Zm-.059-2.213a.674.674,0,0,1-.672-.551l-.986-5.584a.667.667,0,0,1,.262-.643.689.689,0,0,1,.707-.064l3.148,1.754,1.619-4.273a.715.715,0,0,1,1.188,0l1.615,4.273,3.148-1.754a.681.681,0,0,1,.7.064.658.658,0,0,1,.266.643l-.986,5.584a.674.674,0,0,1-.668.551Z"
                  fill="#fff"
                  id="Crown"
                  transform="translate(16178.913 20547.422)"
              ></path>
            </svg>
          </span>
          <span class="text">تایم دستی</span>
        </a>
      </li>
      <li v-if="$auth.user.level === 5 ||$auth.user.level === 7" :class="formTab === 2 ? 'uk-active' : ''">
        <a @click="changeFormTab(2)">
          <span class="text">تایم دستی</span>
        </a>
      </li>
      <li v-if="$auth.user.level == 3 || $auth.user.level === 5 ||$auth.user.level === 7"
          :class="formTab === 3 ? 'uk-active' : ''">
        <a @click="changeFormTab(3)">
          <span class="text">تایم اتوماتیک</span>
        </a>
      </li>
    </ul>
    <hr/>
    <client-only>
      <div class="uk-costume-test uk-margin">
        <div v-if="formTab === 1 && $auth.user.level == 3">
          <form action="">
            <div>
              <label for="date">تاریخ شمسی</label>
              <input id="date-special" placeholder="تاریخ شمسی"/>
              <date-picker
                  color="#e2ad42"
                  custom-input="#date-special"
                  display-format="jDD jMMMM jYYYY"
                  format="YYYY-MM-DD"
                  v-model="newSpecialTelSupportForm.dayTel"
              />
              <svg
                  class="uk-svg"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"
                    stroke="#141414"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                ></path>
              </svg>
              <div class="quick">
                <a
                    :key="index"
                    @click="chooseDateTagSpecial(dateTag.value)"
                    v-for="(dateTag, index) in dateTags"
                >
                  {{ dateTag.title }}
                </a>
              </div>
            </div>
            <div>
              <label for="money">هزینه مشاوره</label>
              <input
                  disabled
                  id="money"
                  style="background: #e2e2e2"
                  placeholder="قیمت به ریال"
                  v-model="newSpecialTelSupportForm.price"
              />
            </div>
            <hr/>
            <div>
              <label for="fromTime">ساعت شروع</label>
              <input
                  id="fromTime"
                  placeholder="دقیقه : ساعت"
                  v-mask="'##:##'"
                  v-model="newSpecialTelSupportForm.fromTime"
              />
            </div>
            <div>
              <label for="toTime">ساعت پایان</label>
              <input
                  id="toTime"

                  placeholder="دقیقه : ساعت"
                  v-mask="'##:##'"
                  v-model="newSpecialTelSupportForm.toTime"
              />
            </div>
            <div class="submit">
              <button
                  @click="saveSession(2)"
                  type="button"
                  v-if="creating === false"
              >
                ثبت جلسه
              </button>
              <button type="button" v-else>چند لحظه صبر کنید</button>
            </div>
          </form>
        </div>
        <div v-if="formTab === 2 && ($auth.user.level === 5 || $auth.user.level === 7)">
          <form @submit.prevent="saveSession(1)">
            <div>
              <label for="date">تاریخ شمسی</label>
              <input id="date" placeholder="تاریخ شمسی"/>
              <date-picker
                  color="#e2ad42"
                  custom-input="#date"
                  display-format="jDD jMMMM jYYYY"
                  format="YYYY-MM-DD"
                  v-model="newTelSupportForm.dayTel"
              />
              <svg
                  class="uk-svg"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"
                    stroke="#141414"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                ></path>
              </svg>
              <div class="quick">
                <a
                    :key="index"
                    @click="chooseDateTag(dateTag.value)"
                    v-for="(dateTag, index) in dateTags"
                >
                  {{ dateTag.title }}
                </a>
              </div>
            </div>
            <div>
              <label for="money1">هزینه مشاوره (ریال)</label>
              <input
                  id="money1"
                  placeholder="قیمت به ریال"
                  type="text"
                  disabled
                  style="background: #e2e2e2"
                  v-model="Intl.NumberFormat('en-US').format(telMaxPrice)"
              />
              <!--              <div class="quick">-->
              <!--                <a-->
              <!--                    :key="index"-->
              <!--                    @click="chooseMoneyTag(moneyTag.value)"-->
              <!--                    v-for="(moneyTag, index) in moneyTags"-->
              <!--                >-->
              <!--                  {{ moneyTag.title }}-->
              <!--                </a>-->
              <!--              </div>-->
            </div>
            <hr/>
            <div>
              <label for="time3">ساعت شروع</label>

              <input
                  id="time3"
                  placeholder="دقیقه : ساعت"
                  type="text"
                  v-mask="'##:##'"
                  v-model="newTelSupportForm.fromTime"
              />
            </div>
            <div>
              <label for="time4">ساعت پایان</label>
              <input
                  id="time4"

                  placeholder="دقیقه : ساعت"
                  v-mask="'##:##'"
                  v-model="newTelSupportForm.toTime"
              />
            </div>
            <div class="submit">
              <button type="submit">ثبت جلسه</button>
            </div>
          </form>
        </div>
        <div v-if="formTab === 3">
          <form @submit.prevent="saveAutoSession()">
            <div v-if="$auth.user.level == 3">
              <label for="date">تاریخ شمسی</label>
              <input id="date-special" placeholder="تاریخ شمسی"/>
              <date-picker
                  color="#e2ad42"
                  custom-input="#date-special"
                  display-format="jDD jMMMM jYYYY"
                  format="YYYY-MM-DD"
                  v-model="autoTelSupportForm.dayTel"
              />
              <svg
                  class="uk-svg"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"
                    stroke="#141414"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"></path>
              </svg>
              <div class="quick">
                <a
                    :key="index"
                    @click="chooseDateAutoTag(dateTag.value)"
                    v-for="(dateTag, index) in dateTags"
                >
                  {{ dateTag.title }}
                </a>
              </div>
            </div>
            <div v-else>
              <label for="date">تاریخ شمسی</label>
              <input id="date" placeholder="تاریخ شمسی"/>
              <date-picker
                  color="#e2ad42"
                  custom-input="#date"
                  display-format="jDD jMMMM jYYYY"
                  format="YYYY-MM-DD"
                  v-model="autoTelSupportForm.dayTel"
              />
              <svg
                  class="uk-svg"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"
                    stroke="#141414"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"></path>
              </svg>
              <div class="quick">
                <a
                    :key="index"
                    @click="chooseDateAutoTag(dateTag.value)"
                    v-for="(dateTag, index) in dateTags"
                >
                  {{ dateTag.title }}
                </a>
              </div>
            </div>
            <div>
              <label for="money1">هزینه مشاوره (ریال)</label>
              <input
                  id="money1"
                  placeholder="قیمت به ریال"
                  type="text"
                  disabled
                  style="background: #e2e2e2"
                  v-model="$auth.user.level === 3 ? 'رایگان' : Intl.NumberFormat('en-US').format(telMaxPrice)"
              />
            </div>
            <hr/>
            <div class="w-30">
              <label for="time3">ساعت شروع</label>
              <input
                  id="time3"
                  placeholder="دقیقه : ساعت"
                  type="text"
                  v-mask="'##:##'"
                  v-model="autoTelSupportForm.fromTime"/>
            </div>
            <div class="w-30">
              <label for="time4">زمان جلسه</label>
              <input
                  id="time4"
                  placeholder="دقیقه"
                  v-mask="'##'"
                  v-model="autoTelSupportForm.time"
              />
            </div>
            <div class="w-30">
              <label for="time4">تعداد جلسه</label>
              <input
                  id="time4"
                  placeholder="تعداد"
                  v-mask="'##'"
                  v-model="autoTelSupportForm.count"
              />
            </div>
            <div class="submit">
              <button type="submit">ثبت جلسه</button>
            </div>
          </form>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import {mask, TheMask} from 'vue-the-mask'

export default {
  directives: {mask},
  components: {TheMask},
  data() {
    return {
      formTab: this.$auth.user.level === 3 ? 1 : 2,
      creating: false,
      newSpecialTelSupportForm: {
        price: "رایگان",
        dayTel: null,
        fromTime: null,
        toTime: null,
        type: 2,
      },
      newTelSupportForm: {
        dayTel: null,
        price: this.telMaxPrice,
        fromTime: null,
        toTime: null,
        type: 1,
      },
      autoTelSupportForm: {
        dayTel: null,
        price: this.$auth.user.level === 3 ? 0 : this.telMaxPrice,
        fromTime: null,
        time: null,
        count: null,
        type: this.$auth.user.level === 3 ? 2 : 1,
      },
    };
  },
  computed: {
    moneyTags() {
      return this.$store.getters["expert/moneyTags"];
    },
    dateTags() {
      return this.$store.getters["expert/dateTags"];
    },
    telMaxPrice() {
      return this.$store.getters["expert/telMaxPrice"];
    }
  },
  methods: {
    changeFormTab(formNumber) {
      this.formTab = formNumber;
    },
    chooseDateTagSpecial(date) {
      this.newSpecialTelSupportForm.dayTel = date;
    },
    chooseDateTag(date) {
      this.newTelSupportForm.dayTel = date;
    },
    chooseDateAutoTag(date) {
      this.autoTelSupportForm.dayTel = date;
    },
    chooseMoneyTag(price) {
      this.newTelSupportForm.price = price;
    },
    chooseSpecialMoneyTag(price) {
      this.newSpecialTelSupportForm.price = price;
    },
    async saveSession(type) {
      if (type == 2) {
        if (this.newSpecialTelSupportForm.fromTime?.toString()?.length !== 5) {
          if ((this.newSpecialTelSupportForm.fromTime?.toString()?.length ?? 0) >= 2) {
            this.newSpecialTelSupportForm.fromTime = this.newSpecialTelSupportForm.fromTime[0] + this.newSpecialTelSupportForm.fromTime[1] + ":00";
          } else {
            this.$toasted.error("لطفا ساعت شروع را درست وارد کنید", {
              position: "bottom-left",
              duration: 5000,
            });
            return;
          }
        }
        if (this.newSpecialTelSupportForm.toTime?.toString()?.length !== 5) {
          if ((this.newTelSunewSpecialTelSupportFormpportForm.toTime?.toString()?.length ?? 0) >= 2) {
            this.newSpecialTelSupportForm.toTime = this.newSpecialTelSupportForm.toTime[0] + this.newSpecialTelSupportForm.toTime[1] + ":00";
          } else {
            this.$toasted.error("لطفا ساعت پایان را درست وارد کنید", {
              position: "bottom-left",
              duration: 5000,
            });
            return;
          }
        }
      } else {
        if (this.newTelSupportForm.fromTime?.toString()?.length !== 5) {
          if ((this.newTelSupportForm.fromTime?.toString()?.length ?? 0) >= 2) {
            this.newTelSupportForm.fromTime = this.newTelSupportForm.fromTime[0] + this.newTelSupportForm.fromTime[1] + ":00";
          } else {
            this.$toasted.error("لطفا ساعت شروع را درست وارد کنید", {
              position: "bottom-left",
              duration: 5000,
            });
            return;
          }
        }
        if (this.newTelSupportForm.toTime?.toString()?.length !== 5) {
          if ((this.newTelSupportForm.toTime?.toString()?.length ?? 0) >= 2) {
            this.newSpecialTelSuppornewTelSupportFormtForm.toTime = this.newSpecialTelSupnewTelSupportFormportForm.toTime[0] + this.newTelSupportForm.toTime[1] + ":00";
          } else {
            this.$toasted.error("لطفا ساعت پایان را درست وارد کنید", {
              position: "bottom-left",
              duration: 5000,
            });
            return;
          }
        }
      }
      this.creating = true;
      this.errors = [];
      let saveSession;

      if (type === 2) {
        saveSession = await this.$axios.post(
            "v1/expert/saveSession",
            this.newSpecialTelSupportForm
        );
      } else {
        this.newTelSupportForm.price = this.telMaxPrice
        saveSession = await this.$axios.post(
            "v1/expert/saveSession",
            this.newTelSupportForm
        );
      }

      if (saveSession.data.status === 1) {
        this.$toasted.success(saveSession.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/monthTels");
      } else if (saveSession.data.status === 422) {
        this.errors = saveSession.data.errors;
        this.$toasted.info(saveSession.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(saveSession.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.creating = false;
    },
    async saveAutoSession() {
      this.creating = true;
      this.errors = [];
      let saveSession;
      saveSession = await this.$axios.post(
          "v1/expert/saveAutoSession",
          this.autoTelSupportForm
      );

      if (saveSession.data.status === 1) {
        this.$toasted.success(saveSession.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/monthTels");
      } else if (saveSession.data.status === 422) {
        this.errors = saveSession.data.errors;
        this.$toasted.info(saveSession.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(saveSession.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.creating = false;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.new__session {
  width: 47%;
  border-left: 1px solid var(--gray);
  padding-left: 2rem;
  align-self: stretch;

  h3 {
    color: var(--black);
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul.uk-subnav {
    li {
      a {
        border: 1px solid var(--gray);
        border-radius: 5px;
        color: var(--black);
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 0.8rem;
        transition: all 0.3s;

        span.text {
          transition: all 0.3s;
          border-bottom: 1px solid var(--white);
        }

        span.icon {
          border-radius: 50%;
          background-color: var(--gray);
          width: 1.25rem;
          height: 1.25rem;
          transition: all 0.3s;
          @include fbx-ai-center-jc-center;

          svg {
            transition: all 0.3s;
            color: var(--white);
          }
        }
      }

      &.uk-active {
        a {
          background-color: var(--main-color);
          color: var(--white);

          span.text {
            color: var(--white);
          }

          span.icon {
            background-color: var(--white);

            svg {
              color: var(--main-color);
            }
          }
        }
      }

      &:hover {
        a {
          background-color: var(--main-color);

          span.text {
            color: var(--white);
          }

          span.icon {
            background-color: var(--white);

            svg {
              color: var(--main-color);
            }
          }
        }
      }
    }
  }

  hr {
    border-width: 1px;
    border-color: var(--gray);
  }

  .uk-costume-test {
    form {
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;
      align-items: flex-start;

      > div {
        width: 48%;
        @include fbx-column-ai-start-jc-start;
        position: relative;

        label {
          font-weight: 600;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          color: var(--black);
        }

        input {
          background-color: var(--white);
          padding: 0.75rem;
          border: 1px solid var(--gray);
          font-size: 0.8rem;
          transition: all 0.3s;
          border-radius: 5px;
          width: calc(99% - 1.5rem);
          color: var(--black);

          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }

          &::placeholder {
            font-size: 0.8rem;
            color: var(--text-gray);
          }
        }

        svg {
          position: absolute;
          top: 35%;
          left: 5%;
          fill: none;
          color: var(--main-color);
        }

        .quick {
          margin-top: 1rem;
          display: flex;
          gap: 10px;

          a {
            padding: 0.35rem 1.25rem;
            background-color: var(--inner-background-color);
            font-size: 0.8rem;
            color: var(--black);
            border-radius: 5px;
            transition: all 0.3s;

            &:hover {
              color: #2b2827;
              background-color: var(--light-main-color);
            }
          }
        }
      }

      .submit {
        width: 30%;
        margin-top: 2rem;
        margin-right: auto;

        button {
          border-radius: 5px;
          background-color: var(--inner-background-color);
          width: 100%;
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;
          font-size: 0.9rem;
          color: var(--black);
          border: 0;
          cursor: pointer;
          transition: all 0.3s;

          &:hover {
            color: #2b2827;
            background-color: var(--light-main-color);
          }
        }
      }

      hr {
        margin-top: 2rem;
        margin-bottom: 2rem;
        border-color: var(--gray);
        border-width: 1px;
        width: 100%;
      }
    }
  }
}

@include mobile-device {
  .new__session {
    width: 100%;
    border-left: 0;
    padding-left: 0;
    border-bottom: 1px solid var(--gray);
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    h3 {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    ul.uk-subnav {
      li {
        a {
          font-size: 0.75rem;
        }
      }
    }

    .uk-costume-test {
      form {
        > div {
          margin-bottom: 1.5rem;
          width: 100%;

          label {
            font-size: 0.75rem;
          }

          input {
            font-size: 0.75rem;

            &::placeholder {
              font-size: 0.75rem;
            }
          }

          svg {
            top: 32%;
          }

          .quick {
            margin-top: 0.5rem;

            a {
              padding: 0.35rem 1rem;
              font-size: 0.75rem;
            }
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        .submit {
          width: 40%;
          margin-top: 0;

          button {
            font-size: 0.75rem;
          }
        }

        hr {
          margin-top: 0;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
}

@include tablet-device {
  .new__session {
    width: 100%;
    border-left: 0;
    padding-left: 0;
    border-bottom: 1px solid var(--gray);
    padding-bottom: 1rem;
    margin-bottom: 1rem;

    h3 {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    ul.uk-subnav {
      li {
        a {
          font-size: 0.75rem;
        }
      }
    }

    .uk-costume-test {
      form {
        > div {
          margin-bottom: 1.5rem;
          width: 100%;

          label {
            font-size: 0.75rem;
          }

          input {
            font-size: 0.75rem;

            &::placeholder {
              font-size: 0.75rem;
            }
          }

          svg {
            top: 32%;
          }

          .quick {
            margin-top: 0.5rem;

            a {
              padding: 0.35rem 1rem;
              font-size: 0.75rem;
            }
          }

          &:last-child {
            margin-bottom: 0;
          }
        }

        .submit {
          width: 40%;
          margin-top: 0;

          button {
            font-size: 0.75rem;
          }
        }

        hr {
          margin-top: 0;
          margin-bottom: 1.5rem;
        }
      }
    }
  }
}
</style>
