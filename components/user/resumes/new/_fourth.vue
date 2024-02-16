<template>
  <div :class="'resume-box fourth '+(canFill ? 'fade' : '')">
    <h3>4- اطلاعات مربوط به دانش زبانی</h3>
    <hr/>
    <form :key="index" @submit.prevent="" v-for="(language, index) in resume.languages">
      <div class="row">
        <div class="form-group w-18">
          <input
              :class="{
          'error-input': errors.includes(`title-${index}`),
        }"
              :value="language.title"
              @change="changeTitle({ val: $event.target.value, index })"
              @focus="removeFromError(`title-${index}`)"
              placeholder=" "
          />
          <label class="floating">زبان</label>
        </div>
        <!--                <div-->
        <!--                        class="form-group custom-select w-18"-->
        <!--                        v-click-outside-element="outSideTitle"-->

        <!--                >-->
        <!--                    <div :class="{-->
        <!--          'error-input': errors.includes(`title-${index}`),-->
        <!--        }" @click="selectTitle = !selectTitle"-->
        <!--                         class="select-selected">-->
        <!--                        <p v-if="language.title == null || language.title === ''">انتخاب زبان</p>-->
        <!--                        <p v-else>{{ language.title }}</p>-->
        <!--                        <svgw-->
        <!--                                :class="{ rotate: selectTitle }"-->
        <!--                                height="24"-->
        <!--                                style="transition: 0.3s all; fill: var(&#45;&#45;black)"-->
        <!--                                viewBox="0 0 24 24"-->
        <!--                                width="24"-->
        <!--                                xmlns="http://www.w3.org/2000/svg"-->
        <!--                        >-->
        <!--                            <path d="M0 0h24v24H0z" fill="none"/>-->
        <!--                            <path-->
        <!--                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"-->
        <!--                            />-->
        <!--                        </svgw>-->
        <!--                    </div>-->
        <!--                    <transition name="fade">-->
        <!--                        <div class="select-items" v-show="selectTitle">-->
        <!--                            <div-->
        <!--                                    @click="-->
        <!--                changeTitle({ val: 'انگلیسی', index });-->
        <!--                outSideTitle();-->
        <!--              "-->
        <!--                                    style="text-align: right"-->
        <!--                            >-->
        <!--                                انگلیسی-->
        <!--                            </div>-->
        <!--                            <div-->
        <!--                                    @click="-->
        <!--                changeTitle({ val: 'آلمانی', index });-->
        <!--                outSideTitle();-->
        <!--              "-->
        <!--                                    style="text-align: right"-->
        <!--                            >-->
        <!--                                آلمانی-->
        <!--                            </div>-->
        <!--                            <div-->
        <!--                                    @click="-->
        <!--                changeTitle({ val: 'دیگر', index });-->
        <!--                outSideTitle();-->
        <!--              "-->
        <!--                                    style="text-align: right"-->
        <!--                            >-->
        <!--                                دیگر-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </transition>-->
        <!--                </div>-->


        <div class="language-level w-40">
          <span>میزان تسلط</span>
          <div class="choose-options">
            <a
                :class="{ active: language.fluencyLevel === 'A1', 'error-input': errors.includes('fluencyLevel-'+index), }"
                @click="changeFluencyLevel({ val: 'A1', index })"
                class="latin-font"
            >
              A1
            </a>
            <a
                :class="{ active: language.fluencyLevel === 'A2', 'error-input': errors.includes('fluencyLevel-'+index), }"
                @click="changeFluencyLevel({ val: 'A2', index })"
                class="latin-font"
            >
              A2
            </a>
            <a
                :class="{ active: language.fluencyLevel === 'B1', 'error-input': errors.includes('fluencyLevel-'+index), }"
                @click="changeFluencyLevel({ val: 'B1', index })"
                class="latin-font"
            >
              B1
            </a>
            <a
                :class="{ active: language.fluencyLevel === 'B2', 'error-input': errors.includes('fluencyLevel-'+index), }"
                @click="changeFluencyLevel({ val: 'B2', index })"
                class="latin-font"
            >
              B2
            </a>
            <a
                :class="{ active: language.fluencyLevel === 'C1', 'error-input': errors.includes('fluencyLevel-'+index), }"
                @click="changeFluencyLevel({ val: 'C1', index })"
                class="latin-font"
            >
              C1
            </a>
            <a
                :class="{ active: language.fluencyLevel === 'C2', 'error-input': errors.includes('fluencyLevel-'+index), }"
                @click="changeFluencyLevel({ val: 'C2', index })"
                class="latin-font"
            >
              C2
            </a>
          </div>
        </div>
        <div class="form-group w-18">
          <input
              :class="{
          'error-input': errors.includes(`degree-${index}`),
        }"
              :value="language.degree"
              @change="changeDegree({ val: $event.target.value, index })"
              @focus="removeFromError(`degree-${index}`)"
              placeholder=" "
          />
          <label class="floating">مدرک</label>
        </div>
        <div class="form-group w-18">
          <input
              :class="{
          'error-input': errors.includes(`score-${index}`),
        }"
              :value="language.score"
              @change="changeScore({ val: $event.target.value, index })"
              @focus="removeFromError(`score-${index}`)"
              placeholder=" "
              type="number"
          />
          <label class="floating">نمره زبان</label>
        </div>
      </div>
      <div @click="deleteLanguage(index)" class="delete-form" v-if="index > 0">
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
import {mapMutations} from "vuex";

export default {
  props: ["resume"],
  data() {
    return {

      errors: [],
      selectTitle: false,
      setTime: null,
      showNewLang: true,
    };
  },
  mounted() {
    console.log(this.resume.languages[0].title)

    setTimeout(() => {
      console.log('this.resume.languages')
      console.log(this.resume.languages)
    }, 1000)
  },
  computed: {
    canFill() {
      return this.$store.getters['resume/canFill'];
    }
  },
  methods: {
    ...mapMutations({
      changeTitle: "resume/SET_LanguagesTitle",
      changeCurrentStatus: "resume/SET_LanguagesCurrentStatus",
      changeFluencyLevel: "resume/SET_LanguagesFluencyLevel",
      changeDegree: "resume/SET_LanguagesDegree",
      changeScore: "resume/SET_LanguagesScore",
      deleteLanguage: "resume/Delete_Language",
    }),
    removeFromError(name) {
      const newErrors = this.errors.filter((item) => item != name);

      this.errors = newErrors;
    },
    changeNewFluencyLevel(level) {
      this.removeFromError("fluencyLevel");
      this.resume.languages[this.resume.languages.length - 1].fluencyLevel = level;
    },
    addItem() {
      this.errors = [];
      this.$store.dispatch("resume/checkLanguageErrors", 1);
      this.resume.languages.forEach((item, index) => {
        if (item['title'] == null || item['title'] == "")
          this.errors.push(`title-${index}`);
        if (item['fluencyLevel'] == null || item['fluencyLevel'] == "") {
          this.errors.push(`fluencyLevel-${index}`);
        }
      });

      if (this.errors.length !== 0) {
        return;
      }
      this.$store.commit("resume/Add_language");
    },
    outSideTitle() {
      this.selectTitle = false;

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
