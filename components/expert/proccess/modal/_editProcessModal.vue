<template>
  <div id="edit-process-modal" class="edit-process-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <button
          class="uk-modal-close-default"
          type="button"
          uk-close
          style="right: unset; left: 10px"
        ></button>
        <h3>ویرایش پرونده</h3>
      </div>
      <div class="form">
        <form  >
          <div class="form-group w-50" v-if="process.mobile === null">
            <label for="phone">شماره تماس</label>
            <input
              id="phone"
              placeholder="شماره تماس را وارد کنید"
              v-model="process.phone"
            />
          </div>
          <div class="form-group w-50" v-else>
            <label for="phone2">شماره تماس</label>
            <input
              id="phone2"
              placeholder="شماره تماس را وارد کنید"
              v-model="process.mobile"
              disabled
            />
          </div>
          <div class="form-group w-50" v-if="process.admittance === 'ارشد'">
            <label for="field_license">رشته تحصیلی</label>
            <input
              id="field_license"
              placeholder="رشته تحصیلی را وارد کنید"
              v-model="process.field_license"
            />
          </div>
          <div class="form-group w-50" v-else>
            <label for="field_grade">رشته تحصیلی</label>
            <input
              id="field_grade"
              placeholder="رشته تحصیلی را وارد کنید"
              v-model="process.field_grade"
            />
          </div>
          <div class="form-group w-50" v-if="process.admittance === 'ارشد'">
            <label for="average_license">معدل</label>
            <input
              id="average_license"
              placeholder="معدل را وارد کنید"
              v-model="process.average_license"
            />
          </div>
          <div class="form-group w-50" v-else>
            <label for="diploma_grade_average">معدل</label>
            <input
              id="diploma_grade_average"
              placeholder="معدل را وارد کنید"
              v-model="process.diploma_grade_average"
            />
          </div>
          <div class="form-group w-50">
            <label for="what_grade_language">مدرک زبان</label>
            <input
              id="what_grade_language"
              placeholder="زبان را وارد کنید"
              v-model="process.what_grade_language"
            />
          </div>
          <div class="form-group w-50">
            <label for="last_tracking">آخرین پیگیری</label>
            <input id="last_tracking" placeholder="آخرین پیگیری را وارد کنید" />
            <date-picker
              v-model="process.last_tracking"
              custom-input="#last_tracking"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
            />
          </div>
          <div class="form-group w-50">
            <label for="next_tracking">پیگیری بعدی</label>
            <input id="next_tracking" placeholder="پیگیری بعدی را وارد کنید" />
            <date-picker
              v-model="process.next_tracking"
              custom-input="#next_tracking"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
            />
          </div>
          <div class="form-group w-50">
            <label for="text">توضیحات</label>
            <input
              id="text"
              placeholder="توضیحات را وارد کنید"
              v-model="process.text"
            />
          </div>
          <div class="form-group w-50">
            <label for="next_step">قدم بعدی</label>
            <input
              id="next_step"
              placeholder="قدم بعدی را وارد کنید"
              v-model="process.next_step"
            />
          </div>
          <div class="submit">
            <button
              type="button"
              v-if="updating === false"
              @click="updateProccess"
            >
              ذخیره تغیرات
            </button>
            <button type="button" v-else>چند لحظه صبر کنید</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updating: false,
    };
  },
  computed: {
    process() {
      return this.$store.getters["expert/process"];
    },
  },
  methods: {
    async updateProccess() {
      this.updating = true;
      this.errors = [];
      const updateProccess = await this.$axios.post(
        "v1/expert/updateProcess",
        this.process
      );
      if (updateProccess.data.status === 1) {
        this.$toasted.success(updateProccess.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        const getProcesses = await this.$axios.post(
          `v1/expert/getProcesses`,
          this.form
        );
        this.processes = getProcesses.data.processes;
        this.categories = getProcesses.data.categories;
        this.experts = getProcesses.data.experts;
      } else if (updateProccess.data.status === 422) {
        this.errors = updateProccess.data.errors;
        this.$toasted.info(updateProccess.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(updateProccess.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.updating = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.edit-process-modal {
  .uk-modal-body {
    background-color: var(--white);
    border-radius: 8px;
  }
  .title {
    @include fbx-ai-center-jc-between;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--gray);
    h3 {
      font-weight: 700;
      font-size: 1rem;
      color: var(--black);
    }
  }
  .form {
    margin-top: 2rem;
    form {
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;
      .form-group {
        position: relative;
        margin-bottom: 1.5rem;
        @include fbx-column-ai-start-jc-start;
        label {
          position: absolute;
          top: -0.75rem;
          right: 1rem;
          padding-right: 0.25rem;
          padding-left: 0.25rem;
          background-color: var(--white);
          font-size: 0.8rem;
          color: #acac9d;
          font-weight: 300;
        }
        input {
          border-radius: 5px;
          border: 1px solid var(--gray);
          padding: 0.75rem;
          width: calc(100% - 1.5rem);
          font-size: 0.8rem;
          color: var(--black);
          background-color: inherit;
          &:focus {
            border-color: var(--main-color);
            outline: 0;
          }
        }
      }
      .submit {
        margin-right: auto;
        button {
          padding: 0.5rem 2rem;
          cursor: pointer;
          font-size: 0.9rem;
          color: var(--black);
          background-color: var(--inner-background-color);
          border: 0;
          border-radius: 5px;
          transition: all 0.3s;
          &:hover {
            background-color: var(--light-main-color);
          }
        }
      }
    }
  }
}
</style>
