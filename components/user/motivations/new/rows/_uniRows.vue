<template>
  <div class="row" v-if="index >= 1">
    <div
      class="delete-form"
      @click="deleteUniversity(index)"
      v-if="index > 0 && $auth.user.type != 2"
    >
      <a>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uk-svg deleteIcon"
        >
          <path
            d="M17.25 6.75L6.75 17.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.75 6.75L17.25 17.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
    <div class="form-group w-22">
      <input
        :value="university.name"
        placeholder=" "
        @change="changeName({ val: $event.target.value, index })"
        @focus="removeFromUniversitiesError(`name-${index}`)"
        :class="{
          'error-input': universitiesErrors.includes(`name-${index}`),
        }"
      />
      <label>نام دانشگاه</label>
    </div>
    <div class="form-group w-22">
      <input
        :value="university.field"
        placeholder=" "
        @change="changeField({ val: $event.target.value, index })"
        @focus="removeFromUniversitiesError(`field-${index}`)"
        :class="{
          'error-input': universitiesErrors.includes(`field-${index}`),
        }"
      />
      <label>رشته</label>
    </div>
    <div class="form-group w-22">
      <input
        :value="university.grade"
        placeholder=" "
        @change="changeGrade({ val: $event.target.value, index })"
        @focus="removeFromUniversitiesError(`grade-${index}`)"
        :class="{
          'error-input': universitiesErrors.includes(`grade-${index}`),
        }"
      />
      <label>مقطع تحصیلی</label>
    </div>
    <div
      class="form-group custom-select w-22"
      v-click-outside-element="outSideLang"
      :class="{
        'error-input': universitiesErrors.includes(`language-${index}`),
      }"
    >
      <div class="select-selected" @click="selectLang = !selectLang"
           :class="{
          'error-input': universitiesErrors.includes(`language-${index}`),
        }">
        <p>{{ university.language === null ? "انتخاب زبان" : university.language}}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          style="transition: 0.3s all; fill: var(--black)"
          :class="{ rotate: selectLang }"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
          />
        </svg>
      </div>
      <transition name="fade">
        <div class="select-items" v-show="selectLang">

          <div
            style="text-align: right"
            @click="
              changeLanguage({ val: 'انگلیسی', index });
              outSideLang();
            "
          >
            انگلیسی
          </div>
          <div
            style="text-align: right"
            @click="
              changeLanguage({ val: 'آلمانی', index });
              outSideLang();
            "
          >
            آلمانی
          </div>
        </div>
      </transition>
    </div>
    <!-- <div class="form-group custom-select w-22">
      <div>
        <select
          :value="university.language"
          @change="changeLanguage({ val: $event.target.value, index })"
          :class="{
            'error-input': universitiesErrors.includes(`language-${index}`),
          }"
        >
          <option>زبان تحصیل</option>
          <option>انگلیسی</option>
          <option>آلمانی</option>
        </select>
      </div>
    </div> -->
  </div>
</template>
<script>
import { mapMutations } from "vuex";
export default {
  props: ["university", "index"],
  data() {
    return {
      errors: [],
      selectLang: false,
    };
  },
  computed: {
    universities() {
      return this.$store.getters["motivations/universities"];
    },
    universitiesErrors() {
      return this.$store.getters["motivations/universitiesErrors"];
    },
  },
  methods: {
    ...mapMutations({
      changeName: "motivations/SET_UniversityName",
      changeField: "motivations/SET_UniversityField",
      changeGrade: "motivations/SET_UniversityGrade",
      changeLanguage: "motivations/SET_UniversityLanguage",
      deleteUniversity: "motivations/Delete_university",
    }),
    outSideLang() {
      this.selectLang = false;
    },
    removeFromUniversitiesError(name) {
      this.$store.dispatch("motivations/removeFromUniversitiesError", name);
      return true;
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
  padding: 0.6rem 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
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

.row {
  @include fbx-ai-center-jc-start;
  flex-wrap: wrap;

  position: relative;
  .form-group {
    margin-left: 1rem;
  }
}

.delete-form {
  @include fbx-column-ai-center-jc-center;
  position: absolute;
  right: -1.75rem;
  top: 0;
  height: 100%;
  transition: all 0.3s;
  a {
    @include fbx-column-ai-center-jc-center;
    width: 100%;
    height: 100%;
  }
  svg {
    color: var(--text-gray);
  }
  &:hover {
    background-color: rgba(#cc2a2a, 0.08);
    svg {
      color: #cc2a2a;
    }
  }
}

@include mobile-device {
  .row {
    .form-group {
      margin-left: 0;
    }
  }
  .delete-form {
    @include fbx-column-ai-center-jc-center;
    position: absolute;
    right: 0;
    top: inherit;
    height: inherit;
    bottom: -0.75rem;
    width: 100%;
    a {
      @include fbx-column-ai-center-jc-center;
      width: 100%;
      height: 100%;
    }
  }
}

@include tablet-device {
  .row {
    @include fbx-ai-start-jc-between;
    .form-group {
      margin-left: 0;
    }
  }
}
</style>
