<template>
  <div :class="'resume-box fifth '+(canFill ? 'fade' : '')">
    <div class="vector">
      <svg
          class="back-triangle uk-svg"
          height="398.299"
          viewBox="0 0 376 398.299"
          width="376"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M376-72.3V326H0Z"
            data-name="Path 29993"
            fill="#f1f0f0"
            id="Path_29993"
            opacity="0.6"
            transform="translate(0 72.299)"
        ></path>
      </svg>
      <div class="main">
        <img alt="" src="/user/assets/user/telemedicine..svg"/>
      </div>
    </div>
    <div class="body">
      <h3>5- سوابق کاری</h3>
      <hr/>
      <form
          :key="index"
          @submit.prevent=""
          v-for="(work, index) in resume.works"
      >
        <div class="row">
          <div class="form-group w-15">
            <client-only>
              <input
                  :class="{ 'error-input': errors.includes('fromDateYear-'+index) }"
                  :value="work.fromDateYear"
                  @change="changeFromDateYear({ val: $event.target.value, index })"
                  @focus="removeFromError('fromDateYear-'+index)"
                  id="workFromDateYear"
                  maxlength="4"
                  placeholder=" "
                  type="number"
              />
              <label class="floating">از تاریخ (سال)</label>
              <!-- <date-picker
                :value="work.fromDate"
                @input="checkAddWork"
                custom-input="#workFromDate"
                color="#e2ad42"
                format="YYYY-MM-DD"
                display-format="jDD jMMMM jYYYY"
              /> -->
            </client-only>
          </div>
          <div class="form-group w-15">
            <client-only>
              <input
                  :class="{ 'error-input': errors.includes('fromDateMonth-'+index) }"
                  :value="work.fromDateMonth"
                  @change="changeFromDateMonth({ val: $event.target.value, index })"
                  @focus="removeFromError('fromDateMonth-'+index)"
                  id="workFromDate"
                  maxlength="10"
                  placeholder=" "
                  type="text"
              />
              <label class="floating">از تاریخ (ماه)</label>
              <!-- <date-picker
                :value="work.fromDate"
                @input="checkAddWork"
                custom-input="#workFromDate"
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
          <div class="form-group w-15">
            <client-only>
              <input
                  :class="{ 'error-input': errors.includes('toDateYear-'+index) }"
                  :value="work.toDateYear"
                  @change="changeToDateYear({ val: $event.target.value, index })"
                  @focus="removeFromError('toDateYear-'+index)"
                  id="workToDateYear"
                  maxlength="4"
                  placeholder=" "
                  type="number"
              />
              <label class="floating">تا تاریخ (سال)</label>
              <!-- <date-picker
                :value="work.toDate"
                @input="checkAddWork"
                custom-input="#workToDate"
                color="#e2ad42"
                format="YYYY-MM-DD"
                display-format="jDD jMMMM jYYYY"
              /> -->
            </client-only>
          </div>
          <div class="form-group w-15">
            <client-only>
              <input
                  :class="{ 'error-input': errors.includes('toDateMonth-'+index) }"
                  :value="work.toDateMonth"
                  @change="changeToDateMonth({ val: $event.target.value, index })"
                  @focus="removeFromError('toDateMonth-'+index)"
                  id="workToDateMonth"
                  maxlength="10"
                  placeholder=" "
                  type="text"
              />
              <label class="floating">تا تاریخ (ماه)</label>
              <!-- <date-picker
                :value="work.toDate"
                @input="checkAddWork"
                custom-input="#workToDate"
                color="#e2ad42"
                format="YYYY-MM-DD"
                display-format="jDD jMMMM jYYYY"
              /> -->
            </client-only>
          </div>
          <div class="form-group w-15">
            <input
                :class="{ 'error-input': errors.includes('companyName-'+index) }"
                :value="work.companyName"
                @change="changeCompanyName({ val: $event.target.value, index })"
                @focus="removeFromError('companyName-'+index)"

                placeholder=" "
            />
            <label class="floating">نام شرکت</label>
          </div>
          <div class="form-group w-15">
            <input
                :class="{ 'error-input': errors.includes('position-'+index) }"
                :value="work.position"
                @change="changePosition({ val: $event.target.value, index })"
                @focus="removeFromError('position-'+index)"

                placeholder=" "
            />
            <label class="floating">سمت</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group w-30">
            <input
                :class="{ 'error-input': errors.includes('city-'+index) }"
                :value="work.city"
                @change="changeCity({ val: $event.target.value, index })"
                @focus="removeFromError('city-'+index)"

                placeholder=" "
            />
            <label class="floating">شهر محل کار</label>
          </div>
          <div class="form-group w-65">
            <input
                :class="{ 'error-input': errors.includes('text-'+index) }"
                :value="work.text"
                @change="changeText({ val: $event.target.value, index })"
                @focus="removeFromError('text-'+index)"

                placeholder=" "
            />
            <label class="floating">توضیحات بیشتر</label>
          </div>
        </div>
        <div @click="deleteWork(index)" class="delete-form" v-if="index > 0">
          <a>
            <svg
                class="uk-svg"
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
      </form>
      <form @submit.prevent="">
        <div class="add-more">
          <a @click="addWork">
            <svg
                class="uk-svg"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M12 5.75V18.25"
                  stroke="#141414"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
              ></path>
              <path
                  d="M18.25 12H5.75"
                  stroke="#141414"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
              ></path>
            </svg>
          </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  props: ["resume"],
  data() {
    return {

      errors: [],
      setTime: null,
    };
  },
  computed: {
    canFill() {
      return this.$store.getters['resume/canFill'];
    }
  },
  methods: {
    ...mapMutations({
      changeCompanyName: "resume/SET_WorksCompanyName",
      changeText: "resume/SET_WorksText",
      changeCity: "resume/SET_WorksCity",
      changePosition: "resume/SET_WorksPosition",
      deleteWork: "resume/Delete_Work",
      changeFromDateYear: "resume/SET_WorksFromDateYear",
      changeFromDateMonth: "resume/SET_WorksFromDateMonth",
      changeToDateYear: "resume/SET_WorksToDateYear",
      changeToDateMonth: "resume/SET_WorksToDateMonth",

    }),
    removeFromError(name) {
      this.errors = this.errors.filter((item) => item !== name);
    },
    addWork() {
      this.errors = [];
      this.$store.dispatch("resume/checkWorkErrors", 1);
      this.resume.works.forEach((item, index) => {
        for (const key in item) {
          if (key !== 'text') {
            if (item[key] == null || item[key] == "")
              this.errors.push(`${key}-${index}`);
          }
        }
      });

      console.log(this.errors)
      if (this.errors.length !== 0) {
        return;
      }
      this.$store.commit("resume/Add_Work");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.fifth {
  @include fbx-ai-start-jc-between;

  .vector {
    align-self: end;
    width: 25%;
    position: relative;

    .back-triangle {
      z-index: 1;
      right: 0;
      bottom: 0;
      position: absolute;
      fill: none;
      color: var(--inner-background-color);
    }

    .main {
      z-index: 85;

      img {
        max-width: 60%;
      }
    }
  }

  .body {
    width: 65%;

    form {
      .row {
        @include fbx-ai-center-jc-between;
        flex-wrap: wrap;
        margin-bottom: 2.5rem;

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
}

@include mobile-device {
  .fifth {
    .vector {
      display: none;
    }

    .body {
      width: 100%;

      form {
        .row {
          margin-bottom: 0;

          .form-group {
            margin-bottom: 1.5rem;
            width: 100% !important;
          }

          .arrow-left {
            display: none;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .fifth {
    .vector {
      display: none;
    }

    .body {
      width: 100%;

      form {
        .row {
          margin-bottom: 0;

          .form-group {
            margin-bottom: 1.5rem;
            width: 100% !important;
          }

          .arrow-left {
            display: none;
          }
        }
      }
    }
  }
}
</style>
