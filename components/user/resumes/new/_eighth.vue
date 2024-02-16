<template>
  <div :class="'resume-box eighth '+(canFill ? 'fade' : '')">

    <div class="body">
      <h3>8- سوابق پژوهشی، افتخارات</h3>
      <hr/>
      <EighthForm
          v-for="(research, index) in resume.researchs"
          :key="index"
          :research="research"
          :index="index"
      />
      <form @submit.prevent="">
        <div class="add-more">
          <a @click="addItem">
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
            >
              <path
                  d="M12 5.75V18.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              ></path>
              <path
                  d="M18.25 12H5.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
              ></path>
            </svg>
          </a>
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
      <div class="main"><img src="/user/assets/user/vector..svg" alt=""/></div>
    </div>
  </div>
</template>

<script>
import EighthForm from "@/components/user/resumes/new/forms/_eighthForm.vue";

export default {
  props: ["resume"],
  components: {
    EighthForm,
  },
  data() {
    return {

      errors: [],
      setTime: null,
      selectRes: false,
    };
  },
  computed: {

    canFill() {
      return this.$store.getters["resume/canFill"]
    }
  },
  methods: {
    removeFromError(name) {
      this.errors = this.errors.filter((item) => item !== name);
    },
    addItem() {
      this.errors = [];
      this.$store.dispatch("resume/checkResearchErrors", 1);
      this.resume.researchs.forEach((item, index) => {
        for (const key in item) {
          if (key !== 'text') {
            if (item[key] == null || item[key] == "")
              this.errors.push(`${key}-${index}`);
          }
        }
      });

      if (this.errors.length !== 0) {
        return;
      }
      this.$store.commit("resume/Add_Research");
    },
    outSideRes() {
      this.selectRes = false;
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


.eighth {
  @include fbx-ai-start-jc-between;

  .vector {
    align-self: end;
    position: relative;

    .back-triangle {
      width: 65%;
      z-index: 1;
      left: 0;
      bottom: 0;
      position: absolute;
      fill: none;
      color: var(--inner-background-color);
    }

    .main {
      display: flex;
      justify-content: flex-end;
      z-index: 85;

      img {
        max-width: 54%;
      }
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
