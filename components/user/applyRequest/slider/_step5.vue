<template>
  <div class="first current">
    <div class="img">
      <img src="@/assets/user/images/apply-request/picture-5.jpg" alt="" />
      <div class="counter-name">
        <span class="name title-font">وضعیـــت مـــــدارک</span>
      </div>
    </div>
    <div class="form">
      <form>
        <div class="row">
          <div class="row-checkbox w-50">
            <p>آیا تمام مدارک خود را ترجمه رسمی کرده اید؟</p>
            <div>
              <a
                v-bind:class="
                  data.doc_translate === 'بله' ? 'active w-80' : 'w-80'
                "
                @click="
                  changeDocTranslate('بله');
                  checkErrors();
                "
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  uk-svg=""
                  alt=""
                />
                <span>بله</span>
              </a>
              <a
                v-bind:class="
                  data.doc_translate === 'خیر' ? 'active w-80' : 'w-80'
                "
                @click="
                  changeDocTranslate('خیر');
                  checkErrors();
                "
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  uk-svg=""
                  alt=""
                />
                <span>خیر</span>
              </a>
            </div>
          </div>
          <div class="row-checkbox w-50" v-if="data.doc_translate == 'بله'">
            <p>آیا بیش از یکسال از ترجمه شما گذشته است؟</p>
            <div>
              <a
                v-bind:class="
                  data.doc_translate_year_passed === 'بله'
                    ? 'active w-80'
                    : 'w-80'
                "
                @click="
                  changeDocTranslateYP('بله');
                  checkErrors();
                "
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  uk-svg=""
                  alt=""
                />
                <span>بله</span>
              </a>
              <a
                v-bind:class="
                  data.doc_translate_year_passed === 'خیر'
                    ? 'active w-80'
                    : 'w-80'
                "
                @click="
                  changeDocTranslateYP('خیر');
                  checkErrors();
                "
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  uk-svg=""
                  alt=""
                />
                <span>خیر</span>
              </a>
            </div>
          </div>
          <div
            class="row-checkbox w-50 uk-margin-small-top"
            v-if="
              data.doc_translate_year_passed != null &&
              data.doc_translate == 'بله'
            "
          >
            <p>آیا این مدارک به تایید سفارت رسیده اند؟</p>
            <div>
              <a
                v-bind:class="
                  data.doc_embassy === 'بله' ? 'active w-80' : 'w-80'
                "
                @click="
                  changeDocEmbassy('بله');
                  checkErrors();
                "
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  uk-svg=""
                  alt=""
                />
                <span>بله</span>
              </a>
              <a
                v-bind:class="
                  data.doc_embassy === 'خیر' ? 'active w-80' : 'w-80'
                "
                @click="
                  changeDocEmbassy('خیر');
                  checkErrors();
                "
              >
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  uk-svg=""
                  alt=""
                />
                <span>خیر</span>
              </a>
            </div>
          </div>
        </div>
        <div class="submit-return">
          <a class="return" uk-slider-item="previous"> بازگشت </a>
          <a class="submit" @click="submitStep5" v-if="errorsBtn.length > 0">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="uk-svg"
            >
              <path
                d="M10.25 6.75L4.75 12L10.25 17.25"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19.25 12H5"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a class="submit" @click="submitStep5" uk-slider-item="next" v-else>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="uk-svg"
            >
              <path
                d="M10.25 6.75L4.75 12L10.25 17.25"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19.25 12H5"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submitting: false,
      data: {
        doc_translate: null,
        doc_translate_year_passed: null,
        doc_embassy: null,
      },
      errors: [],
      errorsBtn: [],
    };
  },
  async created() {
    const { data } = await this.$axios.get(`v1/user/acceptance`);

    this.data = {
      doc_translate: data.acceptance.doc_translate,
      doc_translate_year_passed: data.acceptance.doc_translate_year_passed,
      doc_embassy: data.acceptance.doc_embassy,
    };

    this.checkErrors();
  },
  methods: {
    async submitStep5() {
      console.log(true);
      this.errors = [];

      if (this.data.doc_translate == null) return;

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "")
          if (this.data.doc_translate != "خیر") this.errors.push(String(key));
          else if (this.data.doc_translate == null)
            this.errors.push(String(key));
      }

      if (this.errors.length > 0) return false;

      this.submitting = true;
      const submitStep5 = await this.$axios.post(
        "v1/user/submitStep5",
        this.data
      );
      if (submitStep5.data.status === 1) {
        // this.$toasted.success(submitStep5.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });

        const { data } = await this.$axios.get(`v1/user/acceptance`);

        this.$store.commit("applyRequest/SET_Acceptance", data.acceptance);
      } else if (submitStep5.data.status === 422) {
        this.errors = submitStep5.data.errors;
        this.$toasted.info(submitStep5.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(submitStep5.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.submitting = false;
    },
    changeDocTranslate(status) {
      this.data.doc_translate = status;
    },
    changeDocTranslateYP(status) {
      this.data.doc_translate_year_passed = status;
    },
    changeDocEmbassy(status) {
      this.data.doc_embassy = status;
    },
    removeFromError(name) {
      const newErrors = this.errors.filter((item) => item != name);
      this.errors = newErrors;
      return true;
    },
    checkErrors() {
      console.log("1", this.errorsBtn);
      this.errorsBtn = [];
      console.log("2", this.errorsBtn);
      switch (this.data.doc_translate) {
        case null:
          this.errorsBtn.push("test");
          console.log("3", this.errorsBtn);
          break;
        case "بله":
          if (
            this.data.doc_translate_year_passed == null ||
            this.data.doc_embassy == null
          ) {
            this.errorsBtn.push("test");
          }
          console.log("4", this.errorsBtn);
          break;

        case "خیر":
          console.log("5", this.errorsBtn);
          break;
      }

      console.log("6", this.errorsBtn);
    },
  },
};
</script>

<style></style>
