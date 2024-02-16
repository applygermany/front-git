<template>
  <div class="resume-box eighth">
    <div class="body">
      <h3>8- سوابق پژوهشی، افتخارات</h3>
      <hr />
      <form v-for="(research, index) in previewResume.researchs" :key="index">
        <div class="row">
          <div class="form-group custom-select w-30">
            <div>
              <select v-model="research.type" disabled>
                <option>نوع پژوهش</option>
                <option>مقاله</option>
                <option>پژوهش</option>
                <option>کتاب</option>
                <option>سایر</option>
              </select>
            </div>
          </div>
          <div class="form-group w-30">
            <input v-model="research.title" placeholder=" " disabled />
            <label class="floating">عنوان پژوهش</label>
          </div>
          <div class="form-group w-30">
            <input v-model="research.year" placeholder=" " disabled />
            <label class="floating">تاریخ (سال)</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group w-100">
            <input v-model="research.text" placeholder=" " disabled />
            <label class="floating">توضیحات</label>
          </div>
        </div>
      </form>
    </div>
    <div class="vector">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="376"
        height="398.299"
        viewBox="0 0 376 398.299"
        class="back-triangle uk-svg"
      >
        <path
          id="BG"
          d="M0-72.3V326H376Z"
          transform="translate(0 72.299)"
          fill="#26262e"
          opacity="0.6"
        ></path>
      </svg>
      <div class="main"><img src="/user/assets/user/vector..svg" alt="" /></div>
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

.eighth {
  @include fbx-ai-start-jc-between;
  .vector {
    position: relative;
    .back-triangle {
      z-index: 1;
      left: 0;
      bottom: 0;
      position: absolute;
      fill: none;
      color: var(--inner-background-color);
    }
    .main {
      z-index: 9999;
    }
    width: 40%;
  }
  .body {
    width: 55%;
    form {
      .row {
        @include fbx-ai-center-jc-between;
        flex-wrap: wrap;
        margin-bottom: 2.5rem;
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
  .eighth {
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
        }
      }
    }
  }
}

@include tablet-device {
  .eighth {
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
        }
      }
    }
  }
}
</style>
