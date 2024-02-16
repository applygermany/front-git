<template>
  <div class="form">
    <form>
      <div class="row">
        <div class="form-group w-50">
          <div class="custom-select" v-click-outside-element="outSide">
            <div class="select-selected" @click="selectShow = !selectShow">
              <p v-if="data.admittance == null">
                تقاصای اخذ پذیرش برای چه مقطعی را دارید؟
              </p>
              <p v-else>{{ data.admittance }}</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style="transition: 0.3s all; fill: var(--black)"
                :class="{ rotate: selectShow }"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                />
              </svg>
            </div>
            <transition name="fade">
              <div class="select-items" v-show="selectShow">
                <div style="text-align: right" @click="changeSelect('کالج')">
                  کالج
                </div>
                <div style="text-align: right" @click="changeSelect('لیسانس')">
                  لیسانس
                </div>
                <div style="text-align: right" @click="changeSelect('ارشد')">
                  ارشد
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="row" v-if="data.admittance !== null">
        <div class="form-group w-30">
          <input
            v-model="data.field_grade"
            placeholder=" "
            :class="{ 'error-input': errors.includes('field_grade') }"
            @focus="removeFromError('field_grade')"
            @change="checkErrors"
          />
          <label class="floating">رشته دیپلم</label>
          <div v-if="errors.includes('field_grade')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
            v-model="data.diploma_grade_average"
            placeholder=" "
            :class="{
              'error-input': errors.includes('diploma_grade_average'),
            }"
            @focus="removeFromError('diploma_grade_average')"
            type="text"
            @change="checkErrors"
          />
          <label class="floating">معدل دیپلم</label>
          <div v-if="errors.includes('diploma_grade_average')" class="error">
            پر کردن این فیلد اجباری است
          </div>
        </div>
        <div class="form-group w-30">
          <input
            v-model="data.pre_university_grade_average"
            placeholder=" "
            @change="checkErrors"
          />
          <label class="floating">معدل پیش دانشگاهی </label>
        </div>
      </div>
      <div class="submit-return">
        <a class="return" uk-slider-item="previous"> بازگشت </a>
        <a class="submit" @click="submitStep2">
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
      selectShow: false,
      submitting: false,
      data: {
        admittance: null,
        field_grade: null,
        diploma_grade_average: null,
        pre_university_grade_average: null,
      },
      errorsBtn: [],
      errors: [],
    };
  },
  async created() {
    const { data } = await this.$axios.get(`v1/user/acceptance`);
    this.data = {
      admittance: data.acceptance.admittance,
      field_grade: data.acceptance.field_grade,
      diploma_grade_average: data.acceptance.diploma_grade_average,
      pre_university_grade_average:
        data.acceptance.pre_university_grade_average,
    };

    this.checkErrors();
  },
  methods: {
    outSide() {
      this.selectShow = false;
    },
    changeSelect(val) {
      this.data.admittance = val;
      this.selectShow = false;
    },
    test() {
      let position = "";
      switch (this.data.admittance) {
        case "کالج":
          position = "college";
          break;
        case "لیسانس":
          position = "bachelor";
          break;
        case "ارشد":
          position = "senior";
          break;
      }
      if (position != "")
        this.$store.dispatch("applyRequest/setPosition", position);
    },
    changeExamStatus(status) {
      this.data.is_entrance_exam = status;
    },
    async submitStep2() {
      this.errors = [];

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "")
          if (key != "pre_university_grade_average")
            this.errors.push(String(key));
      }

      if (this.errors.length > 0) return false;

      let position = "";
      switch (this.data.admittance) {
        case "کالج":
          position = "college";
          break;
        case "لیسانس":
          position = "bachelor";
          break;
        case "ارشد":
          position = "senior";
          break;
      }

      this.submitting = true;
      const submitStep2 = await this.$axios.post(
        "v1/user/submitStep2",
        this.data
      );
      if (submitStep2.data.status === 1) {
        // this.$toasted.success(submitStep2.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });
        if (position != "")
          this.$store.dispatch("applyRequest/setPosition", position);
      } else if (submitStep2.data.status === 422) {
        this.errors = submitStep2.data.errors;
        // this.$toasted.info(submitStep2.data.msg, {
        //   position: "bottom-left",
        //   duration: 5000,
        // });
      } else {
        this.$toasted.error(submitStep2.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.submitting = false;
    },
    checkErrors() {
      console.log(this.data);
      this.errorsBtn = [];

      for (const key in this.data) {
        if (this.data[key] == null || this.data[key] == "")
          if (key != "pre_university_grade_average")
            this.errorsBtn.push(String(key));
      }
    },
    removeFromError(name) {
      const newErrors = this.errors.filter((item) => item != name);
      this.errors = newErrors;
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  width: 100%;
  position: relative;
}
.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  width: 100%;
  border: 1px solid #e4e3e1;
  border: 1px solid var(--gray);
  padding-right: 1rem;
  padding-left: 1rem;
  position: absolute;
  background-color: #fff;
  background-color: var(--white);
  margin-top: 0.5rem;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
}
.select-items div {
  cursor: pointer;
  color: var(--black);
  font-size: 0.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray);
  &:last-child {
    border-bottom: 0;
  }
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.rotate {
  transform: rotateZ(180deg);
}
</style>
