<template>
  <div class="first current">
    <div class="img">
      <img src="@/assets/user/images/apply-request/picture-3.jpg" alt="" />
      <div class="counter-name">
        <span class="name title-font">وضعیـــت خدمــــــت</span>
      </div>
    </div>
    <div class="form">
      <form>
        <div class="row-checkbox inline-checkbox-duty">
          <p>وضعیت خدمت سربازی خود را تعیین کنید.</p>
          <div>
            <a
              class="w-45"
              :class="{
                active: data.military_service === 'دارای کارت پایان خدمت',
              }"
              @click="
                changeStatus('دارای کارت پایان خدمت');
                checkErrors();
              "
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>دارای کارت پایان خدمت</span>
            </a>
            <a
              class="w-45"
              :class="{
                active: data.military_service === 'در حال خدمت',
              }"
              @click="
                changeStatus('در حال خدمت');
                checkErrors();
              "
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>در حال خدمت</span>
            </a>
            <a
              class="w-45"
              :class="{
                active: data.military_service === 'معافیت دائم',
              }"
              @click="
                changeStatus('معافیت دائم');
                checkErrors();
              "
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>معافیت دائم</span>
            </a>
            <a
              class="w-45"
              :class="{
                active: data.military_service === 'معافیت تحصیلی',
              }"
              @click="
                changeStatus('معافیت تحصیلی');
                checkErrors();
              "
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>معافیت تحصیلی</span>
            </a>
            <a
              class="w-45"
              :class="{
                active: data.military_service === 'در فرجه تحصیلی یکساله',
              }"
              @click="
                changeStatus('در فرجه تحصیلی یکساله');
                checkErrors();
              "
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>در فرجه تحصیلی یکساله</span>

            </a>
            <a
              class="w-45"
              :class="{
                active: data.military_service === 'مشمول وضعیت خدمت نیستم',
              }"
              @click="
                changeStatus('مشمول وضعیت خدمت نیستم');
                checkErrors();
              "
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>مشمول وضعیت خدمت نیستم</span>
            </a>
          </div>
        </div>
        <div class="submit-return">
          <a class="return" uk-slider-item="previous"> بازگشت </a>
          <a class="submit" @click="submitStep3" v-if="errorsBtn.length > 0">
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
          <a class="submit" @click="submitStep3" uk-slider-item="next" v-else>
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
        military_service: null,
      },
      errorsBtn: [],
      errors: [],
    };
  },
  async created() {
    const { data } = await this.$axios.get(`v1/user/acceptance`);

    this.data = {
      military_service: data.acceptance.military_service,
    };

    this.checkErrors();
  },
  methods: {
    async submitStep3() {
      this.errors = [];

      if (this.data.military_service == null)
        this.errors.push("military_service");

      if (this.errors.length > 0) return false;

      this.submitting = true;
      const submitStep3 = await this.$axios.post(
        "v1/user/submitStep3",
        this.data
      );
      if (submitStep3.data.status === 1) {
        // this.$toasted.success(submitStep3.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });

        const { data } = await this.$axios.get(`v1/user/acceptance`);

        this.$store.commit("applyRequest/SET_Acceptance", data.acceptance);
      } else if (submitStep3.data.status === 422) {
        this.errors = submitStep3.data.errors;
        this.$toasted.info(submitStep3.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(submitStep3.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.submitting = false;
    },
    changeStatus(status) {
      this.data.military_service = status;
    },
    checkErrors() {
      this.errorsBtn = [];

      if (this.data.military_service == null)
        this.errorsBtn.push("military_service");
    },
  },
};
</script>

<style></style>
