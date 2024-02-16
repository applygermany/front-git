<template>
  <div class="form">
    <form>
      <div class="row">
        <div class="row-checkbox inline-checkbox w-50">
          <p>آیا در مقطع لیسانس فارغ التحصیل شده اید؟</p>
          <div>
            <a
              @click="
                changeGraduatedStatus('بله');
                checkErrors();
                errors = [];
              "
              :class="{ active: data.license_graduated === 'بله' }"
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
              :class="{ active: data.license_graduated === 'خیر' }"
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
      <div class="row" v-if="data.license_graduated === 'بله'">
        <div class="form-group w-22">
          <input
            v-model="data.field_license"
            placeholder=" "
            :class="{ 'error-input': errors.includes('field_license') }"
            @focus="removeFromError('field_license')"
            @keyup="checkErrors"
          />
          <label class="floating">رشته لیسانس</label>
          <div v-if="errors.includes('field_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-22">
          <input
            v-model="data.university_license"
            placeholder=" "
            :class="{ 'error-input': errors.includes('university_license') }"
            @focus="removeFromError('university_license')"
            @keyup="checkErrors"
          />
          <label class="floating">نام دانشگاه</label>
          <div v-if="errors.includes('university_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-22">
          <input
            v-model="data.average_license"
            placeholder=" "
            type="text"
            :class="{ 'error-input': errors.includes('average_license') }"
            @focus="removeFromError('average_license')"
            @keyup="checkErrors"
          />
          <label class="floating">معدل لیسانس</label>
          <div v-if="errors.includes('average_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-22">
          <input
            v-model="data.year_license"
            placeholder=" "
            type="number"
            :class="{ 'error-input': errors.includes('year_license') }"
            @focus="removeFromError('year_license')"
            @keyup="checkErrors"
          />
          <label class="floating">سال فارغ التحصیلی (عدد)</label>
          <div v-if="errors.includes('year_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
      </div>
      <div class="row" v-if="data.license_graduated === 'خیر'">
        <div class="form-group w-30">
          <input
            v-model="data.field_license"
            placeholder=" "
            :class="{ 'error-input': errors.includes('field_license') }"
            @focus="removeFromError('field_license')"
            @keyup="checkErrors"
          />
          <label class="floating">رشته لیسانس</label>
          <div v-if="errors.includes('field_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
            v-model="data.university_license"
            placeholder=" "
            :class="{ 'error-input': errors.includes('university_license') }"
            @focus="removeFromError('university_license')"
            @keyup="checkErrors"
          />
          <label class="floating">نام دانشگاه</label>
          <div v-if="errors.includes('university_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
            v-model="data.average_now_license"
            placeholder=" "
            type="text"
            :class="{ 'error-input': errors.includes('average_now_license') }"
            @focus="removeFromError('average_now_license')"
            @keyup="checkErrors"
          />
          <label class="floating">معدل فعلی لیسانس</label>
          <div v-if="errors.includes('average_now_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-50">
          <input
            v-model="data.predicted_year_license"
            placeholder=" "
            type="number"
            :class="{
              'error-input': errors.includes('predicted_year_license'),
            }"
            @focus="removeFromError('predicted_year_license')"
            @keyup="checkErrors"
          />
          <label class="floating">سال احتمالی فارغ التحصیلی (عدد)</label>
          <div v-if="errors.includes('predicted_year_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-50">
          <input
            v-model="data.total_number_passes"
            placeholder=" "
            type="number"
            :class="{ 'error-input': errors.includes('total_number_passes') }"
            @focus="removeFromError('total_number_passes')"
            @keyup="checkErrors"
          />
          <label class="floating">مجموعاً چند واحد پاس کرده اید ؟</label>
          <div v-if="errors.includes('total_number_passes')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
      </div>
      <div class="submit-return">
        <a
          @click="$store.dispatch('applyRequest/setPosition', 'index')"
          class="return"
          >بازگشت</a
        >
        <a class="submit" @click="submitStepMaster" v-if="errorsBtn.length > 0">
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
          @click="submitStepMaster(1)"
          v-else-if="errorsBtn.length == 0 && data.license_graduated == 'بله'"
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
          @click="submitStepMaster(0)"
          uk-slider-item="next"
          v-else-if="errorsBtn.length == 0 && data.license_graduated == 'خیر'"
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
  data() {
    return {
      ask: false,
      submitting: false,
      data: {
        license_graduated: null,
        field_license: null,
        university_license: null,
        average_license: null,
        average_now_license: null,
        year_license: null,
        predicted_year_license: null,
        total_number_passes: null,
      },
      errors: [],
      errorsBtn: [],
    };
  },
  async created() {
    const { data } = await this.$axios.get(`v1/user/acceptance`);
    this.data = {
      license_graduated: data.acceptance.license_graduated,
      field_license: data.acceptance.field_license,
      university_license: data.acceptance.university_license,
      average_license: data.acceptance.average_license,
      average_now_license: data.acceptance.average_now_license,
      year_license: data.acceptance.year_license,
      predicted_year_license: data.acceptance.predicted_year_license,
      total_number_passes: data.acceptance.total_number_passes,
    };

    this.checkErrors();
  },
  methods: {
    changeGraduatedStatus(status) {
      this.data.license_graduated = status;
    },
    async submitStepMaster(pos) {
      this.errors = [];

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "") {
          if (
              this.data.license_graduated == "بله" &&
              key != "total_number_passes" &&
              key != "predicted_year_license" &&
              key != "average_now_license"
          ) {
            this.errors.push(String(key));
          } else if (
              this.data.license_graduated == "خیر" &&
              key != "average_license" && key != "year_license"
          ) {
            this.errors.push(String(key));
          }
        }
      }

      if (this.errors.length > 0) return false;

      console.log(this.data)
      const submitStepMaster = await this.$axios.post(
        "v1/user/submitStepMaster",
        this.data
      );
      if (submitStepMaster.data.status === 1) {
        // this.$toasted.success(submitStepMaster.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });
        if (pos == 1)
          this.$store.dispatch("applyRequest/setPosition", "seniorLevel2");
      } else if (submitStepMaster.data.status === 422) {
        this.errors = submitStepMaster.data.errors;
        this.$toasted.info(submitStepMaster.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(submitStepMaster.data.msg, {
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
      console.log("1", this.errorsBtn);
      this.errorsBtn = [];
      console.log("2", this.errorsBtn);

      switch (this.data.license_graduated) {
        case null:
          this.errorsBtn.push("test");
          break;
        case "بله":
          if (
            this.data.field_license == null ||
            this.data.field_license == "" ||
            this.data.university_license == null ||
            this.data.university_license == "" ||
            this.data.average_license == null ||
            this.data.average_license == "" ||
            this.data.year_license == null ||
            this.data.year_license == ""
          )
            this.errorsBtn.push("test");
          break;
        case "خیر":
          if (
            this.data.field_license == null ||
            this.data.field_license == "" ||
            this.data.university_license == null ||
            this.data.university_license == "" ||
            this.data.average_now_license == null ||
            this.data.average_now_license == "" ||
            this.data.predicted_year_license == null ||
            this.data.predicted_year_license == "" ||
            this.data.total_number_passes == null ||
            this.data.total_number_passes == ""
          )
            this.errorsBtn.push("test");
          break;
      }
      console.log("5", this.errorsBtn);
    },
  },
};
</script>

<style></style>
