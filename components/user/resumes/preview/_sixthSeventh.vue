<template>
  <div class="sixth-seventh">
    <div class="resume-box sixth">
      <h3>6- دانش نرم افزاری</h3>
      <hr />
      <form
        v-for="(softwareKnowledge, index) in previewResume.softwareKnowledges"
        :key="index"
      >
        <div class="row">
          <div class="form-group w-40">
            <input v-model="softwareKnowledge.title" placeholder=" "
              disabled />
            <label class="floating">نام نرم افزار</label>
          </div>
          <div class="language-level w-55">
            <span>میزان تسلط</span>
            <div class="choose-options">
              <a :class="softwareKnowledge.fluencyLevel === 1 ? 'active' : ''">
                1
              </a>
              <a :class="softwareKnowledge.fluencyLevel === 2 ? 'active' : ''">
                2
              </a>
              <a :class="softwareKnowledge.fluencyLevel === 3 ? 'active' : ''">
                3
              </a>
              <a :class="softwareKnowledge.fluencyLevel === 4 ? 'active' : ''">
                4
              </a>
              <a :class="softwareKnowledge.fluencyLevel === 5 ? 'active' : ''">
                5
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="resume-box seventh">
      <h3>7- دوره ها و مدارک</h3>
      <hr />
      <form v-for="(course, index) in previewResume.courses" :key="index">
        <div class="row">
          <div class="form-group w-35">
            <input v-model="course.title" placeholder=" "
              disabled />
            <label class="floating">عنوان دوره</label>
          </div>
          <div class="form-group w-35">
            <input v-model="course.organizer" placeholder=" "
              disabled />
            <label class="floating">برگزار کننده</label>
          </div>
          <div class="form-group w-20">
            <input v-model="course.year" type="number" placeholder=" "
              disabled />
            <label class="floating">تاریخ (سال)</label>
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

.sixth-seventh {
  @include fbx-ai-start-jc-between;
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
        @include fbx-column-ai-start-jc-start;
        position: relative;
        span {
          top: -2rem;
          position: absolute;
          font-size: 0.8rem;
          color: var(--black);
          margin-bottom: 1rem;
          align-self: flex-end;
        }
        .choose-options {
          align-self: flex-end;
          @include fbx-ai-start-jc-start;
          a {
            @include fbx-ai-center-jc-center;
            margin-right: 1rem;
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
      }
    }
  }
  .sixth {
    width: 45%;
  }
  .seventh {
    width: 45%;
  }
}

@include mobile-device {
  .sixth-seventh {
    flex-wrap: wrap;
    form {
      .row {
        margin-bottom: 0;
        .form-group {
          margin-bottom: 1.5rem;
          width: 100% !important;
        }
        .language-level {
          width: 100% !important;
          align-items: center;
          margin-bottom: 1rem;
          span {
            position: unset;
            width: 100%;
            text-align: center;
          }
          .choose-options {
            width: 100%;
          }
        }
      }
    }
    .sixth {
      width: 100%;
      margin-bottom: 1.5rem;
    }
    .seventh {
      width: 100%;
    }
  }
}

@include tablet-device {
  .sixth-seventh {
    flex-wrap: wrap;
    form {
      .row {
        margin-bottom: 0;
        .form-group {
          margin-bottom: 1.5rem;
          width: 100% !important;
        }
        .language-level {
          width: 100% !important;
          align-items: center;
          margin-bottom: 1rem;
          span {
            position: unset;
            width: 100%;
            text-align: center;
          }
          .choose-options {
            width: 100%;
          }
        }
      }
    }
    .sixth {
      width: 100%;
      margin-bottom: 1.5rem;
    }
    .seventh {
      width: 100%;
    }
  }
}
</style>
