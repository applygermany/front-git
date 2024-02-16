<template>
  <div class="resume-box first">
    <h3>جزئیات درخواست</h3>
    <hr />
    <form  >
      <div class="row">
        <div class="form-group custom-select w-22">
            <select style="width: 100%;padding: 0.75em 1em 0.75em 1.25em;border-radius: 5px" :value="previewMotivation.to" disabled>
              <option>برای ارائه به</option>
              <option value='1'>سفارت</option>
              <option value='2'>دانشگاه</option>
            </select>
        </div>
        <div
          class="form-group custom-select w-22"
          v-if="previewMotivation.to === '1'"
        >
          <div>
            <select style="width: 100%;padding: 0.75em 1em 0.75em 1.25em;border-radius: 5px" :value="previewMotivation.country" disabled>
              <option value="">انتخاب سفارت</option>
              <option value="1">ایران</option>
              <option value="2">کشورهای دیگر</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row" v-for="(university, index) in previewUniversities" :key="index">
        <div class="form-group w-22">
          <input :value="university.name" placeholder=" " disabled />
          <label>نام دانشگاه</label>
        </div>
        <div class="form-group w-22">
          <input :value="university.field" placeholder=" " disabled />
          <label>رشته</label>
        </div>
        <div class="form-group w-22">
          <input :value="university.grade" placeholder=" " disabled />
          <label>مقطع تحصیلی</label>
        </div>
        <div class="form-group custom-select w-22">
          <div>
            <select style="width: 100%;padding: 0.75em 1em 0.75em 1.25em;border-radius: 5px" :value="university.language" disabled>
              <option>زبان تحصیل</option>
              <option>انگلیسی</option>
              <option>آلمانی</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    previewMotivation() {
      return this.$store.getters["motivations/previewMotivation"];
    },
    previewUniversities() {
      return this.$store.getters["motivations/previewUniversities"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.first {
  form {
    .row {
      @include fbx-ai-center-jc-start;
      flex-wrap: wrap;
      .form-group {
        margin-left: 1rem;
      }
    }
    .add-more {
      @include fbx-ai-center-jc-start;
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
      p {
        margin-right: 1rem;
        color: var(--red);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
}

@include mobile-device {
  .first {
    form {
      .row {
        .form-group {
          margin-left: 0;
        }
      }
      .add-more {
        p {
          margin-right: auto;
          width: 85%;
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include tablet-device {
  .first {
    form {
      .row {
        @include fbx-ai-start-jc-between;
        .form-group {
          margin-left: 0;
        }
      }
      .add-more {
        p {
          width: 85%;
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include large-device {
}
</style>
