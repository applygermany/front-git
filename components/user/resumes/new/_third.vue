<template>
  <div :class="'resume-box third '+(canFill ? 'fade' : '')">
    <h3>3- سوابق تحصیلی</h3>
    <hr/>
    <ThirdForm
        :educationRecord='educationRecord'
        :index="index"
        :key="index"
        v-for="(educationRecord, index) in resume.educationRecords"
    />
    <div class="add-more">
      <a @click="addItem">
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

  </div>
</template>

<script>
import ThirdForm from "@/components/user/resumes/new/forms/_thirdForm.vue";

export default {
  props: ["resume"],
  components: {
    ThirdForm,
  },
  data() {
    return {

      errors: [],
      setTime: null,
      selectEdu: false,
      showNewLang: true,

    };
  },

  computed: {
    canFill() {
      return this.$store.getters['resume/canFill'];
    }
  },
  methods: {

    outSideEdu() {
      this.selectEdu = false;
    },
    removeFromError(name) {
      this.errors = this.errors.filter((item) => item != name);
    },

    addItem() {
      this.errors = [];
      this.$store.dispatch("resume/checkEducationRecordErrors", 1);
      this.resume.educationRecords.forEach((item, index) => {
        for (const key in item) {
          if (key !== 'text') {
            if (item[key] == null || item[key] == "") {
              this.errors.push(`${key}-${index}`);
            }
          }
        }
      });

      if (this.errors.length != 0) {
        return;
      }
      this.$store.commit("resume/Add_EducationRecords");
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
  width: 85%;
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

.third {
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
