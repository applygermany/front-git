<template>
  <div class="form">
    <form>
      <div class="row">
        <div class="row-checkbox inline-checkbox w-50">
          <p>آیا در مقطع ارشد تحصیل کرده اید؟</p>
          <div>
            <a
              @click="
                changeSemestersStatus('بله');
                checkErrors();
                errors = [];
              "
              :class="{ active: data.senior_educate === 'بله' }"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>بله</span>
            </a>
            <a
              @click="
                changeSemestersStatus('خیر');
                checkErrors();
                errors = [];
              "
              :class="{ active: data.senior_educate === 'خیر' }"
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
          class="row-checkbox inline-checkbox w-50"
          v-if="data.senior_educate == 'بله'"
        >
          <p>آیا در مقطع ارشد فارغ التحصیل شده اید؟</p>
          <div>
            <a
              @click="
                changeGraduatedStatus('بله');
                checkErrors();
                errors = [];
              "
              :class="{ active: data.master_graduated === 'بله' }"
            >
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
              />
              <span>بله</span>
            </a>
            <a
              @click="
                changeGraduatedStatus('خیر');
                checkErrors();
                errors = [];
              "
              :class="{ active: data.master_graduated === 'خیر' }"
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
      <hr />
      <div class="row" v-if="data.senior_educate === 'خیر'">
        <div class="form-group w-100">
          <textarea
            rows="1"
            v-model="data.another_educate"
            placeholder=" "
          ></textarea>
          <label class="floating">
            اگر در مقطع دیگری هم تحصیل کرده اید توضیحات لازم را وارد کنید
          </label>
        </div>
      </div>
      <div
        class="row"
        v-if="
          data.master_graduated === 'بله' && data.senior_educate == 'بله'
        "
      >
        <div class="form-group w-22">
          <input
            v-model="data.field_senior"
            placeholder=" "
            :class="{ 'error-input': errors.includes('field_senior') }"
            @focus="removeFromError('field_senior')"
            @keyup="checkErrors"
          />
          <label class="floating">رشته ارشد</label>
          <div v-if="errors.includes('field_senior')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-22">
          <input
            v-model="data.university_senior"
            placeholder=" "
            :class="{ 'error-input': errors.includes('university_senior') }"
            @focus="removeFromError('university_senior')"
            @keyup="checkErrors"
          />
          <label class="floating">نام دانشگاه</label>
          <div v-if="errors.includes('university_senior')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-22">
          <input
            v-model="data.average_senior"
            placeholder=" "
            type="text"
            :class="{ 'error-input': errors.includes('average_senior') }"
            @focus="removeFromError('average_senior')"
            @keyup="checkErrors"
          />
          <label class="floating">معدل ارشد</label>
          <div v-if="errors.includes('average_senior')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-22">
          <input
            v-model="data.year_senior"
            placeholder=" "
            type="number"
            :class="{ 'error-input': errors.includes('year_senior') }"
            @focus="removeFromError('year_senior')"
            @keyup="checkErrors"
          />
          <label class="floating">سال فارغ التحصیلی (عدد)</label>
          <div v-if="errors.includes('year_senior')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-100">
          <textarea
            rows="1"
            v-model="data.another_educate"
            placeholder=" "
          ></textarea>
          <label class="floating">
            اگر در مقطع دیگری هم تحصیل کرده اید توضیحات لازم را وارد کنید
          </label>
        </div>
      </div>
      <div
        class="row"
        v-if="
          data.master_graduated === 'خیر' && data.senior_educate == 'بله'
        "
      >
        <div class="form-group w-30">
          <input
            v-model="data.master_total_number_passes"
            placeholder=" "
            type="number"
            :class="{
              'error-input': errors.includes('master_total_number_passes'),
            }"
            @focus="removeFromError('master_total_number_passes')"
            @keyup="checkErrors"
          />
          <label class="floating">مجموعا چند واحد پاس کرده اید؟</label>
          <div
            v-if="errors.includes('master_total_number_passes')"
            class="error"
          >
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
            v-model="data.average_now_master"
            placeholder=" "
            type="text"
            :class="{ 'error-input': errors.includes('average_now_master') }"
            @focus="removeFromError('average_now_master')"
            @keyup="checkErrors"
          />
          <label class="floating">معدل فعلی مقطع ارشد</label>
          <div v-if="errors.includes('average_now_master')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
            v-model="data.predicted_year_master"
            placeholder=" "
            type="number"
            :class="{ 'error-input': errors.includes('predicted_year_master') }"
            @focus="removeFromError('predicted_year_master')"
            @keyup="checkErrors"
          />
          <label class="floating">سال احتمالی فارغ التحصیلی (عدد)</label>
          <div v-if="errors.includes('predicted_year_master')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-100">
          <textarea
            rows="1"
            v-model="data.another_educate"
            placeholder=" "
          ></textarea>
          <label class="floating">
            اگر در مقطع دیگری هم تحصیل کرده اید توضیحات لازم را وارد کنید
          </label>
        </div>
      </div>
      <div class="submit-return">
        <a
          class="return"
          @click="$store.dispatch('applyRequest/setPosition', 'senior')"
        >
          بازگشت
        </a>
        <a
          class="submit"
          @click="submitMasterContinue"
          v-if="errorsBtn.length > 0"
        >
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
        <a
          class="submit"
          @click="submitMasterContinue"
          uk-slider-item="next"
          v-else
        >
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
  props: ["acceptance"],
  data() {
    return {
      ask: false,
      submitting: false,
      data: {
        senior_educate: null,
        master_graduated: null,
        field_senior: null,
        university_senior: null,
        average_senior: null,
        year_senior: null,
        another_educate: null,
        master_total_number_passes: null,
        average_now_master: null,
        predicted_year_master: null,
      },
      errors: [],
      errorsBtn: [],
    };
  },
  async created() {
    const { data } = await this.$axios.get(`v1/user/acceptance`);
    this.data = {
      senior_educate: data.acceptance.senior_educate,
      master_graduated: data.acceptance.master_graduated,
      field_senior: data.acceptance.field_senior,
      university_senior: data.acceptance.university_senior,
      average_senior: data.acceptance.average_senior,
      year_senior: data.acceptance.year_senior,
      another_educate: data.acceptance.another_educate,
      master_total_number_passes: data.acceptance.master_total_number_passes,
      average_now_master: data.acceptance.average_now_master,
      predicted_year_master: data.acceptance.predicted_year_master,
    };

    this.checkErrors();
  },
  methods: {
    changeSemestersStatus(status) {
      this.data.senior_educate = status;
    },
    changeGraduatedStatus(status) {
      this.data.master_graduated = status;
    },
    async submitMasterContinue() {
      this.errors = [];

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "")
          if (
            this.data.master_graduated == "بله" &&
            this.data.senior_educate == "بله"
          ) {
            if (
              key != "master_total_number_passes" &&
              key != "average_now_master" &&
              key != "predicted_year_master" &&
              key != "another_educate"
            ) {
              console.log(key);
              this.errors.push(String(key));
            }
          } else if (
            this.data.master_graduated == "خیر" &&
            this.data.senior_educate == "بله"
          ) {
            if (
              key != "field_senior" &&
              key != "university_senior" &&
              key != "average_senior" &&
              key != "year_senior" &&
              key != "another_educate"
            ) {
              console.log(key);
              this.errors.push(String(key));
            }
          } else if (this.data.senior_educate == "بله") {
            this.errors.push("tete");
          }
      }

      if (this.errors.length > 0) return false;

      const submitMasterContinue = await this.$axios.post(
        "v1/user/submitMasterContinue",
        this.data
      );
      if (submitMasterContinue.data.status === 1) {
        // this.$toasted.success(submitMasterContinue.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });

        const { data } = await this.$axios.get(`v1/user/acceptance`);

        this.$store.commit("applyRequest/SET_Acceptance", data.acceptance);
      } else if (submitMasterContinue.data.status === 422) {
        this.errors = submitMasterContinue.data.errors;
        this.$toasted.info(submitMasterContinue.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(submitMasterContinue.data.msg, {
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
      console.log(this.errorsBtn);
      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "") {
          if (
            this.data.master_graduated == "بله" &&
            this.data.senior_educate == "بله"
          ) {
            if (
              key != "master_total_number_passes" &&
              key != "average_now_master" &&
              key != "predicted_year_master" &&
              key != "another_educate"
            ) {
              console.log(key);
              this.errorsBtn.push(String(key));
            }
          } else if (
            this.data.master_graduated == "خیر" &&
            this.data.senior_educate == "بله"
          ) {
            if (
              key != "field_senior" &&
              key != "university_senior" &&
              key != "average_senior" &&
              key != "year_senior" &&
              key != "another_educate"
            ) {
              console.log(key);
              this.errorsBtn.push(String(key));
            }
          } else if (this.data.senior_educate == "بله") {
            this.errorsBtn.push("tetete");
          }
        }
      }
    },
  },
};
</script>

<style></style>
