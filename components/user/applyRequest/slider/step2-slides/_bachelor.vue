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
      <div class="row">
        <div class="row-checkbox inline-checkbox w-50">
          <p>آیا در مقطع لیسانس حتی برای چند ترم تحصیل کرده اید؟</p>
          <div>
            <a
                @click="
                changeSemestersStatus('بله');
                checkErrors();
                errors = [];
              "
                :class="{
                active: data.is_license_semesters === 'بله',
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
                changeSemestersStatus('خیر');
                checkErrors();
                errors = [];
              "
                :class="{
                active: data.is_license_semesters === 'خیر',
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
        <div
            class="row-checkbox inline-checkbox w-50"
            v-if="data.is_license_semesters === 'بله'"
        >
          <p>آیا در مقطع لیسانس فارغ التحصیل شده اید؟</p>
          <div>
            <a
                @click="
                changeGraduatedStatus('بله');
                checkErrors();
                errors = [];
              "
                :class="{
                active: data.license_graduated === 'بله',
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
                changeGraduatedStatus('خیر');
                checkErrors();
                errors = [];
              "
                :class="{
                active: data.license_graduated === 'خیر',
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
      </div>
      <hr/>
      <div class="row-checkbox" v-if="data.is_license_semesters === 'خیر'">
        <p>آیا قصد دارید تا قبل از اپلای ، حداقل 35 واحد پاس کنید؟</p>
        <div>
          <a
              @click="
              changePass30Status('بله');
              checkErrors();
            "
              :class="{
              active: data.Pass_30_units === 'بله',
            }"
          >
            <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
            />
            <span>بله</span>
          </a>
          <a
              href="#apply-request-modal"
              uk-toggle
              @click="
              changePass30Status('خیر');
              checkErrors();
            "
              :class="{
              active: data.Pass_30_units === 'خیر',
            }"
          >
            <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuNzUgMTIuODY2NUw4LjMzOTk1IDE2LjQxMzhDOS4xNTE3MSAxNy41MjU2IDEwLjgxNzkgMTcuNTA0IDExLjYwMDYgMTYuMzcxNUwxOC4yNSA2Ljc1IiBzdHJva2U9IiMxNDE0MTQiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                uk-svg=""
                alt=""
            />
            <span>خیر</span></a
          >
        </div>
      </div>
      <div
          class="row"
          v-if="
          data.license_graduated === 'بله' &&
          data.is_license_semesters === 'بله'
        "
      >
        <div class="form-group w-22">
          <input
              v-model="data.field_license"
              placeholder=" "
              :class="{ 'error-input': errors.includes('field_license') }"
              @focus="removeFromError('field_license')"
              @change="checkErrors"
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
              @change="checkErrors"
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
              @change="checkErrors"
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
              @change="checkErrors"
          />
          <label class="floating">سال فارغ التحصیلی (عدد)</label>
          <div v-if="errors.includes('year_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
      </div>
      <div
          class="row row-start"
          v-if="
          data.license_graduated === 'خیر' &&
          data.is_license_semesters === 'بله'
        "
      >
        <div class="form-group w-30">
          <input
              v-model="data.field_license"
              placeholder=" "
              :class="{ 'error-input': errors.includes('field_license') }"
              @focus="removeFromError('field_license')"
              @change="checkErrors"
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
              @change="checkErrors"
          />
          <label class="floating">نام دانشگاه</label>
          <div v-if="errors.includes('university_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
              v-model="data.total_number_passes"
              placeholder=" "
              type="number"
              :class="{ 'error-input': errors.includes('total_number_passes') }"
              @focus="removeFromError('total_number_passes')"
              @change="checkErrors"
          />
          <label class="floating">مجموعا چند واحد پاس کرده اید؟</label>
          <div v-if="errors.includes('total_number_passes')" class="error">
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
              @change="checkErrors"
          />
          <label class="floating">معدل فعلی مقطع لیسانس</label>
          <div v-if="errors.includes('average_now_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
              v-model="data.predicted_year_license"
              placeholder=" "
              type="number"
              :class="{
              'error-input': errors.includes('predicted_year_license'),
            }"
              @focus="removeFromError('predicted_year_license')"
              @change="checkErrors"
          />
          <label class="floating">سال احتمالی فارغ التحصیلی (عدد)</label>
          <div v-if="errors.includes('predicted_year_license')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
      </div>
      <div class="submit-return">
        <a
            class="return"
            @click="$store.dispatch('applyRequest/setPosition', 'index')"
        >
          بازگشت
        </a>
        <a
            @click="submitStepBachelor"
            class="submit"
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
            @click="submitStepBachelor"
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

    <ApplyRequestModal/>
  </div>
</template>

<script>
import ApplyRequestModal from "@/components/user/applyRequest/slider/step2-slides/modal/_applyRequestModal.vue";

export default {
  components: {
    ApplyRequestModal,
  },
  data() {
    return {
      submitting: false,
      gotoCollageModal: false,
      data: {
        is_license_semesters: null,
        license_graduated: null,
        Pass_30_units: null,
        field_license: null,
        university_license: null,
        average_license: null,
        year_license: null,
        total_number_passes: null,
        average_now_license: null,
        predicted_year_license: null,
      },
      errors: [],
      errorsBtn: [],
    };
  },
  async created() {
    const {data} = await this.$axios.get(`v1/user/acceptance`);
    this.data = {
      is_license_semesters: data.acceptance.is_license_semesters,
      license_graduated: data.acceptance.license_graduated,
      Pass_30_units: data.acceptance.Pass_30_units,
      field_license: data.acceptance.field_license,
      university_license: data.acceptance.university_license,
      average_license: data.acceptance.average_license,
      year_license: data.acceptance.year_license,
      total_number_passes: data.acceptance.total_number_passes,
      average_now_license: data.acceptance.average_now_license,
      predicted_year_license: data.acceptance.predicted_year_license,
    };

    this.checkErrors();
  },
  methods: {
    changeExamStatus(status) {
      this.data.is_entrance_exam = status;
    },
    changeSemestersStatus(status) {
      this.data.is_license_semesters = status;
      if (
          this.data.is_license_semesters === "خیر" &&
          this.data.Pass_30_units === "خیر"
      )
        this.gotoCollageModal = true;
    },
    changeGraduatedStatus(status) {
      this.data.license_graduated = status;
    },
    changePass30Status(status) {
      this.data.Pass_30_units = status;
      if (
          this.data.is_license_semesters === "خیر" &&
          this.data.Pass_30_units === "خیر"
      )
        this.gotoCollageModal = true;
    },
    async submitStepBachelor() {

      if (
          this.data.is_license_semesters === "خیر" &&
          this.data.Pass_30_units === "خیر"
      ) {
        return false;
      }

      this.errors = [];

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "") {
          // if (
          //     (this.data.is_license_semesters != null &&
          //         this.data.license_graduated == null) ||
          //     this.data.Pass_30_units == null
          // ) {
          //   this.errors.push("alaki");
          // }
          if (
              this.data.is_license_semesters != "خیر" &&
              this.data.Pass_30_units != "بله"
          ) {
            // هیچ
          }
          if (
              this.data.is_license_semesters == "بله" &&
              this.data.license_graduated == "بله"
          ) {
            if (
                key == "field_license" ||
                key == "university_license" ||
                key == "average_license" ||
                key == "year_license"
            )
              this.errors.push(String(key));
          }
          if (
              this.data.is_license_semesters == "بله" &&
              this.data.license_graduated == "خیر"
          ) {
            if (
                key == "field_license" ||
                key == "university_license" ||
                key == "total_number_passes" ||
                key == "average_now_license" ||
                key == "predicted_year_license"
            )
              this.errors.push(String(key));
          }
        }
      }


      if (this.errors.length > 0) return false;

      const submitStepBachelor = await this.$axios.post(
          "v1/user/submitStepBachelor",
          this.data
      );
      if (submitStepBachelor.data.status === 1) {
        // this.$toasted.success(submitStepBachelor.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });

        const {data} = await this.$axios.get(`v1/user/acceptance`);

        this.$store.commit("applyRequest/SET_Acceptance", data.acceptance);
      } else if (submitStepBachelor.data.status === 422) {
        this.errors = submitStepBachelor.data.errors;
        this.$toasted.info(submitStepBachelor.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(submitStepBachelor.data.msg, {
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

      switch (this.data.is_license_semesters) {
        case null:
          this.errorsBtn.push("test");
          break;
        case "بله":
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
              ) {
                this.errorsBtn.push("test");
              }
              break;
            case "خیر":
              if (
                  this.data.field_license == null ||
                  this.data.field_license == "" ||
                  this.data.university_license == null ||
                  this.data.university_license == "" ||
                  this.data.total_number_passes == null ||
                  this.data.total_number_passes == "" ||
                  this.data.average_now_license == null ||
                  this.data.average_now_license == "" ||
                  this.data.predicted_year_license == null ||
                  this.data.predicted_year_license == ""
              ) {
                this.errorsBtn.push("test");
              }
              break;
          }
          break;

        case "خیر":
          if (
              this.data.Pass_30_units == null ||
              this.data.Pass_30_units == "خیر"
          )
            this.errorsBtn.push("test");
          break;
      }

      // for (const key in this.data) {
      //   if (this.data[key] == null || this.data[key] == "") {
      //     if (
      //       (this.data.is_license_semesters != null &&
      //         this.data.license_graduated == null) ||
      //       this.data.Pass_30_units == null
      //     ) {
      //       this.errorsBtn.push(String(key));
      //       console.log("3", this.errorsBtn);
      //     }
      //     if (
      //       this.data.is_license_semesters != "خیر" &&
      //       this.data.Pass_30_units != "بله"
      //     ) {
      //       // هیچ
      //     }
      //     if (
      //       this.data.is_license_semesters == "بله" &&
      //       this.data.license_graduated == "بله"
      //     ) {
      //       if (
      //         key == "field_license" ||
      //         key == "university_license" ||
      //         key == "average_license" ||
      //         key == "year_license"
      //       )
      //         this.errorsBtn.push(String(key));
      //       console.log("4", this.errorsBtn);
      //     }
      //     if (
      //       this.data.is_license_semesters == "بله" &&
      //       this.data.license_graduated == "خیر"
      //     ) {
      //       if (
      //         key == "field_license" ||
      //         key == "university_license" ||
      //         key == "total_number_passes" ||
      //         key == "average_now_license" ||
      //         key == "predicted_year_license"
      //       )
      //         this.errorsBtn.push(String(key));
      //       console.log("4", this.errorsBtn);
      //     }
      //   }
      // }

      // if (
      //   this.data.Pass_30_units == "خیر" &&
      //   this.data.is_license_semesters == "خیر"
      // )
      //   this.errorsBtn.push("test");
      console.log("5", this.errorsBtn);
    },
  },
};
</script>

<style></style>
