<template>
  <div class="resume-box fourth">
    <h3>4- اطلاعات مربوط به دانش زبانی</h3>
    <hr />
    <form v-for="(language, index) in previewResume.languages" :key="index">
      <div class="row">
        <div class="form-group w-18">
          <input v-model="language.title" placeholder=" " disabled />
          <label class="floating">نام زبان</label>
        </div>
        <div class="form-group w-18">
          <input v-model="language.currentStatus" placeholder=" " disabled />
          <label class="floating">وضعیت فعلی زبان</label>
        </div>
        <div class="language-level w-55">
          <span>میزان تسلط</span>
          <div class="choose-options">
            <a
              :class="
                language.fluencyLevel === 'A1'
                  ? 'latin-font active'
                  : 'latin-font'
              "
            >
              A1
            </a>
            <a
              :class="
                language.fluencyLevel === 'A2'
                  ? 'latin-font active'
                  : 'latin-font'
              "
            >
              A2
            </a>
            <a
              :class="
                language.fluencyLevel === 'B1'
                  ? 'latin-font active'
                  : 'latin-font'
              "
            >
              B1
            </a>
            <a
              :class="
                language.fluencyLevel === 'B2'
                  ? 'latin-font active'
                  : 'latin-font'
              "
            >
              B2
            </a>
            <a
              :class="
                language.fluencyLevel === 'C1'
                  ? 'latin-font active'
                  : 'latin-font'
              "
            >
              C1
            </a>
            <a
              :class="
                language.fluencyLevel === 'C2'
                  ? 'latin-font active'
                  : 'latin-font'
              "
            >
              C2
            </a>
          </div>
          <a class="question">؟</a>
        </div>
      </div>
      <div class="row">
        <div class="form-group w-45">
          <input v-model="language.degree" placeholder=" " disabled />
          <label class="floating">مدرک</label>
        </div>
        <div class="form-group w-45">
          <input v-model="language.score" placeholder=" " disabled />
          <label class="floating">نمره زبان</label>
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

.fourth {
  form {
    .row {
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;
      margin-bottom: 1.5rem;
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
      .language-level {
        @include fbx-ai-center-jc-center;
        span {
          font-size: 0.8rem;
          color: var(--black);
        }
        .choose-options {
          margin-right: 0.5rem;
          margin-left: 0.5rem;
          @include fbx-ai-start-jc-start;
          a {
            @include fbx-ai-center-jc-center;
            margin-left: 0.5rem;
            margin-right: 0.5rem;
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            border: 1px solid var(--gray);
            color: var(--black);
            font-size: 0.9rem;
            transition: all 0.3s;
            &:hover {
              background-color: var(--inner-background-color);
            }
            &.active {
              background-color: var(--main-color);
              color: var(--white);
            }
          }
        }
        .question {
          @include fbx-ai-center-jc-center;
          color: var(--main-color);
          background-color: var(--inner-background-color);
          border-radius: 5px;
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }
  }
}

@include mobile-device {
  .fourth {
    form {
      .row {
        margin-bottom: 0;
        .form-group {
          margin-bottom: 1.5rem;
          width: 100% !important;
        }
        .language-level {
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          width: 100% !important;
          .choose-options {
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .fourth {
    form {
      .row {
        margin-bottom: 0;
        .form-group {
          margin-bottom: 1.5rem;
          width: 100% !important;
        }
        .language-level {
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
          width: 100% !important;
          .choose-options {
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
          }
        }
      }
    }
  }
}
</style>
