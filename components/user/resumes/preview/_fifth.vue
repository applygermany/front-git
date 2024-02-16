<template>
  <div class="resume-box fifth">
    <div class="vector">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="376"
        height="398.299"
        viewBox="0 0 376 398.299"
        class="back-triangle uk-svg"
      >
        <path
          id="Path_29993"
          data-name="Path 29993"
          d="M376-72.3V326H0Z"
          transform="translate(0 72.299)"
          fill="#f1f0f0"
          opacity="0.6"
        ></path>
      </svg>
      <div class="main">
        <img src="/user/assets/user/telemedicine..svg" alt="" />
      </div>
    </div>
    <div class="body">
      <h3>5- سوابق کاری</h3>
      <hr />
      <form v-for="(work, index) in previewResume.works" :key="index">
        <div class="row">
          <div class="form-group w-22">
            <client-only>
              <input :id="'workFromDate-' + index" placeholder=" " />
              <label class="floating">از تاریخ (سال و ماه)</label>
              <date-picker
                v-model="work.fromDate"
                :custom-input="'#workFromDate-' + index"
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
          <div class="form-group w-22">
            <client-only>
              <input :id="'workToDate-' + index" placeholder=" " />
              <label class="floating">تا تاریخ (سال و ماه)</label>
              <date-picker
                v-model="work.toDate"
                :custom-input="'#workToDate-' + index"
                color="#e2ad42"
                format="YYYY-MM-DD"
                display-format="jDD jMMMM jYYYY"
                disabled
              />
            </client-only>
          </div>
          <div class="form-group w-22">
            <input v-model="work.companyName" placeholder=" " disabled />
            <label class="floating">نام شرکت</label>
          </div>
          <div class="form-group w-22">
            <input v-model="work.position" placeholder=" " disabled />
            <label class="floating">سمت</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group w-30">
            <input v-model="work.city" placeholder=" "
              disabled />
            <label class="floating">شهر محل کار</label>
          </div>
          <div class="form-group w-65">
            <input v-model="work.text" placeholder=" "
              disabled />
            <label class="floating">توضیحات بیشتر</label>
          </div>
        </div>
      </form>
    </div>
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

.fifth {
  @include fbx-ai-start-jc-between;
  .vector {
    width: 30%;
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
      z-index: 9999;
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
