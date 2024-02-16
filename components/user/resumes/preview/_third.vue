<template>
  <div class="resume-box third">
    <h3>3- سوابق تحصیلی</h3>
    <hr />
    <form
      v-for="(educationRecord, index) in previewResume.educationRecords"
      :key="index"
    >
      <div class="row">
        <div class="form-group custom-select w-18">
          <div>
            <select v-model="educationRecord.grade" disabled>
              <option>مقطع</option>
              <option>دیپلم</option>
              <option>پیش دانشگاهی</option>
              <option>کاردانی</option>
              <option>کارشناسی</option>
              <option>ارشد</option>
            </select>
          </div>
        </div>
        <div class="form-group w-15">
          <client-only>
            <input :id="'fromDate-' + index" placeholder=" " />
            <label class="floating">از تاریخ (سال و ماه)</label>
            <date-picker
              v-model="educationRecord.fromDate"
              :custom-input="'#fromDate-' + index"
              color="#e2ad42"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
              disabled
            />
          </client-only>
        </div>
        <span class="arrow-left">
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
        </span>
        <div class="form-group w-15">
          <client-only>
            <input :id="'toDate-' + index" placeholder=" " />
            <label class="floating">تا تاریخ (سال و ماه)</label>
            <date-picker
              v-model="educationRecord.toDate"
              :custom-input="'#toDate-' + index"
              color="#e2ad42"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
              disabled
            />
          </client-only>
        </div>
        <div class="form-group w-18">
          <input
            v-model="educationRecord.schoolName"
            placeholder=" "
            disabled
          />
          <label class="floating">نام مدرسه یا دانشگاه</label>
        </div>
        <div class="form-group w-18">
          <input v-model="educationRecord.field" placeholder=" " disabled />
          <label class="floating">رشته</label>
        </div>
        <div class="form-group w-10">
          <input
            v-model="educationRecord.gradeScore"
            placeholder=" "
            disabled
          />
          <label class="floating">معدل</label>
        </div>
      </div>
      <div class="row">
        <div class="form-group w-18">
          <input v-model="educationRecord.city" placeholder=" " disabled />
          <label class="floating">شهر محل تحصیل</label>
        </div>
        <div class="form-group w-80">
          <input v-model="educationRecord.text" placeholder=" " disabled />
          <label class="floating">توضیحات بیشتر</label>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    previewResume() {
      return this.$store.getters["resume/previewResume"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.third {
  form {
    .row {
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
      .arrow-left {
        svg {
          fill: none;
          color: var(--black);
        }
      }
    }
    .add-more {
      a {
        @include fbx-ai-center-jc-center;
        background-color: var(--inner-background-color);
        border-radius: 5px;
        width: 2rem;
        height: 2rem;
        transition: all 0.3s;
        svg {
          transition: all 0.3s;
          color: var(--text-gray);
        }
        &:hover {
          background-color: var(--light-main-color);
          svg {
            color: #2b2827;
          }
        }
      }
    }
  }
}

@include mobile-device {
  .third {
    form {
      .row {
        flex-wrap: wrap;
        margin-bottom: 0;
        .arrow-left {
          display: none;
        }
        .form-group {
          margin-bottom: 1.5rem;
          width: 100% !important;
        }
      }
    }
  }
}

@include tablet-device {
  .third {
    form {
      .row {
        flex-wrap: wrap;
        margin-bottom: 0;
        .arrow-left {
          display: none;
        }
        .form-group {
          margin-bottom: 1.5rem;
          width: 100% !important;
        }
      }
    }
  }
}
</style>
