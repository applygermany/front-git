<template>
  <div class="resume-box second">
    <h3>2-اطلاعات فردی دقیقا مطابق با پاسپورت</h3>
    <hr />
    <div class="body">
      <form  >
        <div class="row">
          <div class="form-group">
            <input v-model="previewResume.name" placeholder=" " disabled />
            <label class="floating">نام (انگلیسی)</label>
          </div>
          <div class="form-group">
            <input v-model="previewResume.family" placeholder=" " disabled />
            <label class="floating">نام خانوادگی (انگلیسی)</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <client-only>
              <input id="birthDate" placeholder=" "
              disabled />
              <label class="floating">تاریخ تولد</label>
              <date-picker
                v-model="previewResume.birthDate"
                custom-input="#birthDate"
                color="#e2ad42"
                format="YYYY-MM-DD"
                display-format="jDD jMMMM jYYYY"
                disabled
              />
            </client-only>
          </div>
          <div class="form-group">
            <input
              v-model="previewResume.birthPlace"
              placeholder=" "
              disabled
            />
            <label class="floating">محل تولد</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <input
              v-model="previewResume.phone"
              type="number"
              placeholder=" "
              disabled
            />
            <label class="floating">شماره تماس</label>
          </div>
          <div class="form-group">
            <input
              v-model="previewResume.email"
              type="email"
              placeholder=" "
              disabled
            />
            <label class="floating">ایمیل</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <input v-model="previewResume.address" placeholder=" " disabled />
            <label class="floating">آدرس</label>
          </div>
          <div class="form-group">
            <input
              v-model="previewResume.socialmediaLinks"
              placeholder=" "
              disabled
            />
            <label class="floating">لینک شبکه اجتماعی لینکدین (اختیاری)</label>
          </div>
        </div>
      </form>
      <div class="personal-image">
        <div class="img">
          <img
            :src="previewResume.image"
            v-if="previewResume.image !== null"
            style="opacity: 1 !important"
          />
          <template v-else>
            <img
              :src="previewResume.image"
              v-if="previewResume.image !== null"
              style="opacity: 1 !important"
            />
            <img
              src="/user/assets/user/Personal_Light..png"
              class="img_light"
              alt=""
              v-if="previewResume.image === null"
            />
            <img
              src="/user/assets/user/personal_dark..png"
              class="img_dark"
              alt=""
              v-if="previewResume.image === null"
            />
          </template>
        </div>
        <span>عکس پرسنلی</span>
        <p>
          ،توصیـه می‌شود عکـس پرسنلی شمـا بصورت سه‌رخ با لباس رسمی و همراه با
          لبخند باشد و لطفا از آپلود عکس پاسپورت اجتناب کنید
        </p>
      </div>
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

.second {
  .body {
    @include fbx-ai-start-jc-between;
    form {
      width: 70%;
      max-width: 70%;
      .row {
        @include fbx-ai-start-jc-between;
        margin-bottom: 1.5rem;
        .form-group {
          width: 48%;
        }
      }
    }
    .personal-image {
      width: 25%;
      max-width: 25%;
      @include fbx-column-ai-center-jc-center;
      .img {
        border-radius: 8px;
        border: 1px solid var(--gray);
        padding: 0.75rem 0.75rem 0 0.75rem;
        margin-bottom: 1rem;
        position: relative;
        img {
          opacity: 0.06;
          &.img_dark {
            display: none;
          }
        }
        .js-upload {
          position: absolute;
          left: 0.75rem;
          bottom: 0.75rem;
          button {
            background-color: inherit;
            border: 0;
            padding: 0;
            svg {
              background-color: var(--main-color);
              border-radius: 50%;
              color: var(--white);
              width: 1.25rem;
            }
          }
        }
      }
      span {
        font-size: 0.9rem;
        font-weight: 800;
        color: var(--black);
        margin-bottom: 0.5rem;
      }
      p {
        color: var(--text-gray);
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 1.8rem;
        text-align: center;
      }
    }
  }
}

@include mobile-device {
  .second {
    .body {
      flex-wrap: wrap;
      form {
        width: 100%;
        max-width: 100%;
        .row {
          margin-bottom: 0;
          flex-wrap: wrap;
          .form-group {
            margin-bottom: 1.5rem;
            width: 100%;
          }
        }
      }
      .personal-image {
        text-align: center;
        width: 100%;
        max-width: 100%;
        @include fbx-column-ai-center-jc-center;
        .img {
          padding: 0.75rem 0.75rem 0 0.75rem;
          margin-bottom: 1rem;
          img {
            opacity: 0.06;
          }
          .js-upload {
            position: absolute;
            left: 0.75rem;
            bottom: 0.75rem;
          }
        }
        span {
          font-size: 0.8rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include tablet-device {
  .second {
    .body {
      flex-wrap: wrap;
      form {
        width: 100%;
        max-width: 100%;
        .row {
          margin-bottom: 0;
          flex-wrap: wrap;
          .form-group {
            margin-bottom: 1.5rem;
            width: 100%;
          }
        }
      }
      .personal-image {
        text-align: center;
        width: 40%;
        max-width: 40%;
        @include fbx-column-ai-center-jc-center;
        .img {
          padding: 0.75rem 0.75rem 0 0.75rem;
          margin-bottom: 1rem;
          img {
            opacity: 0.06;
          }
          .js-upload {
            position: absolute;
            left: 0.75rem;
            bottom: 0.75rem;
          }
        }
        span {
          font-size: 0.8rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
