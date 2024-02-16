<template>
  <div class="form">
    <form>
      <div class="row-checkbox">
        <p>آیا گواهی قبولی کنکور دارید؟</p>
        <div>
          <a
            @click="
              changeExamStatus('بله');
              removeFromError();
              checkErrors();
            "
            :class="{
              active: data.is_entrance_exam === 'بله',
              'error-input': errors.includes('is_entrance_exam'),
            }"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              uk-svg
              alt=""
            />
            <span>بله</span>
          </a>
          <a
            @click="
              changeExamStatus('خیر');
              removeFromError();
              checkErrors();
            "
            :class="{
              active: data.is_entrance_exam === 'خیر',
              'error-input': errors.includes('is_entrance_exam'),
            }"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              uk-svg
              alt=""
            />
            <span>خیر</span>
          </a>
        </div>
      </div>
      <div class="submit-return">
        <a
          class="return"
          @click="$store.dispatch('applyRequest/setPosition', 'index')"
        >
          بازگشت
        </a>
        <a class="submit" @click="submitStep2" v-if="errorsBtn.length > 0">
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
        <a class="submit" @click="submitStep2" uk-slider-item="next" v-else>
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
</template>

<script>
export default {
  data() {
    return {
      data: {
        is_entrance_exam: null,
      },
      submitting: false,
      errors: [],
      errorsBtn: [],
    };
  },
  created() {

    const acceptance = this.$store.getters["applyRequest/acceptance"];
    this.data = {
      is_entrance_exam: acceptance.is_entrance_exam,
    };

    this.checkErrors();
  },
  methods: {
    changeExamStatus(status) {
      this.data.is_entrance_exam = status;
    },
    async submitStep2() {
      this.errors = [];

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "")
          this.errors.push(String(key));
      }

      if (this.errors.length > 0) return false;

      this.submitting = true;
      const submitStep2 = await this.$axios.post(
        "v1/user/submitContinueCollege",
        this.data
      );
      if (submitStep2.data.status === 1) {
        // this.$toasted.success(submitStep2.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });

        const { data } = await this.$axios.get(`v1/user/acceptance`);

        this.$store.commit("applyRequest/SET_Acceptance", data.acceptance);
      } else if (submitStep2.data.status === 422) {
        this.errors = submitStep2.data.errors;
        this.$toasted.info(submitStep2.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(submitStep2.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.submitting = false;
    },
    removeFromError(name) {
      const newErrors = this.errors.filter((item) => item != name);
      this.errors = newErrors;
      return true;
    },
    checkErrors() {
      this.errorsBtn = [];

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "")
          this.errorsBtn.push(String(key));
      }
    },
  },
};
</script>

<style></style>
