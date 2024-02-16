<template>
  <form @submit.prevent="">
    <div
        @click="deleteEducationRecord(index)"
        class="delete-form"
        v-if="index > 0"
    >
      <a>
        <svg
            class="uk-svg deleteIcon"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M17.25 6.75L6.75 17.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M6.75 6.75L17.25 17.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
        </svg>
      </a>
    </div>

    <div class="row">
      <div
          class="form-group custom-select w-10"
          v-click-outside-element="outSideEdu"

      >
        <div @click="selectEdu = !selectEdu" class="select-selected"
             :class="{
          'error-input': errors.includes(`grade-${index}`),
        }">
          <p v-if="educationRecord.grade == null">مقطع</p>
          <p v-else>{{ educationRecord.grade }}</p>
          <svg
              :class="{ rotate: selectEdu }"
              height="24"
              style="transition: 0.3s all; fill: var(--black)"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
            />
          </svg>
        </div>
        <transition name="fade">
          <div class="select-items" v-show="selectEdu">
            <div
                @click="
                changeGrade({ val: 'دیپلم', index });
                outSideEdu();
              "
                style="text-align: right"
            >
              دیپلم
            </div>
            <div
                @click="
                changeGrade({ val: 'پیش دانشگاهی', index });
                outSideEdu();
              "
                style="text-align: right"
            >
              پیش دانشگاهی
            </div>
            <div
                @click="
                changeGrade({ val: 'کاردانی', index });
                outSideEdu();
              "
                style="text-align: right"
            >
              کاردانی
            </div>
            <div
                @click="
                changeGrade({ val: 'کارشناسی', index });
                outSideEdu();
              "
                style="text-align: right"
            >
              کارشناسی
            </div>
            <div
                @click="
                changeGrade({ val: 'ارشد', index });
                outSideEdu();
              "
                style="text-align: right"
            >
              ارشد
            </div>
          </div>
        </transition>
      </div>
      <div class="form-group w-10">
        <client-only>
          <input
              :class="{
          'error-input': errors.includes(`fromDateYear-${index}`),
        }"
              :id="'fromDateYear-' + index"
              :value="educationRecord.fromDateYear"
              @change="changeFromDateYear({ val: $event.target.value, index })"
              maxlength="4"
              placeholder=" "
              type="number"
          />
          <label class="floating">از تاریخ (سال)</label>
          <!-- <date-picker
              :value="educationRecord.fromDate"
              :custom-input="'#fromDate-' + index"
              @input="changeFromDate({ val: $event, index })"
              color="#e2ad42"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
            /> -->
        </client-only>
      </div>
      <div class="form-group w-10">
        <client-only>
          <input
              :class="{
          'error-input': errors.includes(`fromDateMonth-${index}`),
        }"
              :id="'fromDateMonth-' + index"
              :value="educationRecord.fromDateMonth"
              @change="changeFromDateMonth({ val: $event.target.value, index })"
              maxlength="20"
              placeholder=" "
              type="text"
          />
          <label class="floating">از تاریخ (ماه)</label>
          <!-- <date-picker
              :value="educationRecord.fromDate"
              :custom-input="'#fromDate-' + index"
              @input="changeFromDate({ val: $event, index })"
              color="#e2ad42"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
            /> -->
        </client-only>
      </div>
      <span class="arrow-left">
        <svg
            class="uk-svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M10.25 6.75L4.75 12L10.25 17.25"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
          <path
              d="M19.25 12H5"
              stroke="#141414"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
          ></path>
        </svg>
      </span>
      <div class="form-group w-10">
        <client-only>
          <input
              :class="{
          'error-input': errors.includes(`toDateYear-${index}`),
        }"
              :id="'toDateYear-' + index"
              :value="educationRecord.toDateYear"
              @change="changeToDateYear({ val: $event.target.value, index })"
              maxlength="4"
              placeholder=" "
              type="number"
          />
          <label class="floating">تا تاریخ (سال)</label>
          <!-- <date-picker
              :value="educationRecord.toDate"
              :custom-input="'#toDate-' + index"
              @input="changeToDate({ val: $event, index })"
              color="#e2ad42"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
            /> -->
        </client-only>
      </div>
      <div class="form-group w-10">
        <client-only>
          <input
              :class="{
          'error-input': errors.includes(`toDateMonth-${index}`),
        }"
              :id="'toDateMonth-' + index"
              :value="educationRecord.toDateMonth"
              @change="changeToDateMonth({ val: $event.target.value, index })"
              maxlength="20"
              placeholder=" "
              type="text"
          />
          <label class="floating">تا تاریخ (ماه)</label>
          <!-- <date-picker
              :value="educationRecord.toDate"
              :custom-input="'#toDate-' + index"
              @input="changeToDate({ val: $event, index })"
              color="#e2ad42"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
            /> -->
        </client-only>
      </div>
      <div class="form-group w-18">
        <input
            :class="{
          'error-input': errors.includes(`schoolName-${index}`),
        }"

            :value="educationRecord.schoolName"
            @change="changeSchoolName({ val: $event.target.value, index })"
            placeholder=" "
        />
        <label class="floating">نام مدرسه یا دانشگاه</label>
      </div>
      <div class="form-group w-10">
        <input
            :class="{
          'error-input': errors.includes(`field-${index}`),
        }"

            :value="educationRecord.field"
            @change="changeField({ val: $event.target.value, index })"
            placeholder=" "
        />
        <label class="floating">رشته</label>
      </div>
      <div class="form-group w-10">
        <input
            :class="{
          'error-input': errors.includes(`gradeScore-${index}`),
        }"
            :value="educationRecord.gradeScore"
            @change="changeGradeScore({ val: $event.target.value, index })"
            placeholder=" "
            type="number"
        />
        <label class="floating">معدل</label>
      </div>
    </div>
    <div class="row">
      <div class="form-group w-18">
        <input
            :class="{
          'error-input': errors.includes(`city-${index}`),
        }"
            :value="educationRecord.city"
            @change="changeCity({ val: $event.target.value, index })"
            placeholder=" "
        />
        <label class="floating">شهر محل تحصیل</label>
      </div>
      <div class="form-group w-80">
        <input
            :class="{
          'error-input': errors.includes(`text-${index}`),
        }"
            :value="educationRecord.text"
            @change="changeText({ val: $event.target.value, index })"
            placeholder=" "
        />
        <label class="floating">توضیحات بیشتر</label>
      </div>
    </div>
  </form>
</template>
<script>
import {mapMutations} from "vuex";
import DeleteIcon from "@/components/svg/delete-icon.vue";

export default {
  props: ["educationRecord", "index"],
  components: {
    DeleteIcon,
  },
  data() {
    return {
      selectEdu: false,
    };
  },
  computed: {
    errors() {
      return this.$store.getters["resume/educationRecordErrors"];
    },
  },
  methods: {
    ...mapMutations({
      changeSchoolName: "resume/SET_EducationRecordsSchoolName",
      changeField: "resume/SET_EducationRecordsField",
      changeGrade: "resume/SET_EducationRecordsGrade",
      changeGradeScore: "resume/SET_EducationRecordsGradeScore",
      changeCity: "resume/SET_EducationRecordsCity",
      changeFromDateYear: "resume/SET_EducationRecordsFromDateYear",
      changeFromDateMonth: "resume/SET_EducationRecordsFromDateMonth",
      changeToDateYear: "resume/SET_EducationRecordsToDateYear",
      changeToDateMonth: "resume/SET_EducationRecordsToDateMonth",
      changeText: "resume/SET_EducationRecordsText",
      deleteEducationRecord: "resume/Delete_EducationRecord",
    }),

    outSideEdu() {
      this.selectEdu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.custom-select {
  width: 50%;
  position: relative;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 0.9rem 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  width: 85%;
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
  z-index: 9999;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: var(--main-color);
    border-radius: 15px;
  }
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

form {
  margin-bottom: 1.5rem;

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
}

@include mobile-device {
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

@include tablet-device {
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
</style>
