<template>
  <div :class="'resume-box first '+(canFill ? 'fade' : '')">
    <div style="display: flex;justify-content: space-between">
      <h3>1-قالب و زبان رزومه را انتخاب کنید</h3>
      <button @click="resetList" type="button">
        پاک کردن لیست
      </button>
    </div>
    <hr/>
    <div class="w-25 custom-select" v-click-outside-element="outSideLang">
      <div @click="selectLang = !selectLang" class="select-selected"
           :class="{ 'error-input': errors.includes('language') }">
        <p v-if="resume.language == null">زبان رزومه</p>
        <p v-else>{{ resume.language }}</p>

        <svg
            :class="{ rotate: selectLang }"
            height="24"
            style="transition: 0.3s all; fill: var(--black)"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0h24v24H0z" fill="none"/>
          <path
              d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
          />
        </svg>
      </div>
      <transition name="fade">
        <div class="select-items" v-show="selectLang">
          <div @click="changeLanguage('انگلیسی');outSideLang()" style="text-align: right">
            انگلیسی
          </div>
          <div
              @click="changeLanguage('آلمانی');outSideLang()"
              style="text-align: right"
          >
            آلمانی
          </div>
          <div
              @click="changeLanguage('دو زبانه');outSideLang()"
              style="text-align: right"
          >
            دو زبانه
          </div>
        </div>
      </transition>
    </div>
    <CoolLightBox :index="myLightBoxIndex"
                  :items="lightBoxImages"
                  @close="setLightBoxNull"
                  v-if="lightBoxImages.length > 0"></CoolLightBox>

    <div class="img-row">
      <div
          :class="{ active: item.name === resume.theme }"
          :key="index"
          class="img"
          v-for="(item, index) in resumeTemp"
      >
        <img
            :src="item.image"
            @click="
            changeTheme(item);
            checkFirst();
          "
            alt=""
        />

        <a @click="lightBoxIndex = index">
          <svg
              class="hover-icon uk-svg"
              height="34.002"
              style="cursor: pointer"
              viewBox="0 0 34.002 34.002"
              width="34.002"
              xmlns="http://www.w3.org/2000/svg"
          >
            <g style="transform: scale(0.08)">
              <g>
                <path
                    d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223    c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03    l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"/>
                <path
                    d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03    L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242    c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"/>
                <path
                    d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092    c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092    c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"/>
                <path
                    d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03    s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012    c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z"/>

              </g>
            </g>

          </svg>
        </a>
        <div class="colors">
          <a
              :key="index"
              @click="
              changeColor(color);
              changeTheme(item,index);
              checkFirst();
            "
              v-for="(color, index) in item.colors"
          >
            <svg
                :color="color"
                class="uk-svg resume-color"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                  cx="8"
                  cy="8"
                  data-name="Ellipse 1600"
                  id="Ellipse_1600"
                  r="8"
              ></circle>
            </svg>
            <svg
                class="resume-ring"
                height="38"
                viewBox="0 0 38 38"
                width="38"
                xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" id="Border" stroke="#fff" stroke-width="1.5">
                <circle cx="19" cy="19" r="19" stroke="none"/>
                <circle cx="19" cy="19" fill="none" r="18.25"/>
              </g>
            </svg>
            <svg
                class="resume-tike"
                height="13.4"
                v-if="color === resume.color && item.name === resume.theme"
                viewBox="0 0 17.6 13.4"
                width="17.6"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M9,16.2,4.8,12,3.4,13.4,9,19,21,7,19.6,5.6Z"
                  fill="#fff"
                  id="Tik"
                  transform="translate(-3.4 -5.6)"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import CoolLightBox from "vue-cool-lightbox";
import "vue-cool-lightbox/dist/vue-cool-lightbox.min.css";

export default {

  components: {
    CoolLightBox,
  },
  props: ["resume"],
  data() {
    return {
      selectLang: false,
      setTime: null,
      lightBoxIndex: null,
      resumeImages: [],
    };
  },
  methods: {
    ...mapMutations({
      changeLanguage: "resume/SET_ResumeLanguage",
      // changeTheme: "resume/SET_ResumeTheme",
      changeColor: "resume/SET_ResumeColor",
    }),
    resetList() {
      this.$store.dispatch("resume/removeResume");
    },
    showImage(index) {
      this.lightBoxIndex = index;
    },
    changeTheme(item, index = 0) {
      this.$store.commit("resume/SET_ResumeTheme", item.name)
      this.changeColor(item.colors[index]);
    },
    checkFirst() {

      // clearTimeout(this.setTime);

      // console.log(true);
      // this.setTime = setTimeout(
      //     () => this.$store.dispatch("resume/updateResumeInformation"),
      //     10000
      // );
    },
    outSideLang() {
      this.selectLang = false;
    },
    setLightBoxNull() {
      this.lightBoxIndex = null;
    },
  },
  mounted() {
    setTimeout(() => {
      let images = this.$store.getters["resume/resumeTemp"]
      this.resumeImages = images.map(e => e.image)
      console.log(this.resumeImages)
    }, 1000)
  },
  computed: {
    myLightBoxIndex() {
      console.log('lightBoxIndex');
      console.log(this.lightBoxIndex);
      return this.lightBoxIndex == null
          ? null
          : this.lightBoxImages.length - this.lightBoxIndex - 1;
    },
    lightBoxImages() {
      console.log("lightBoxImages");
      let images = [...this.resumeImages];
      images.reverse();
      console.log(images);
      return images.filter((e) => e != null && e != "");
    },
    resumeTemp() {
      return this.$store.getters["resume/resumeTemp"];
    },
    errors() {
      return this.$store.getters["resume/errors"];
    },
    canFill() {
      return this.$store.getters["resume/canFill"];
    },
  },
  created() {
    this.$store.dispatch("resume/resumeTemp");

    this.$store.commit("resume/SET_ResumeTheme", 'قالب 1')
    this.changeColor(0);
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

button {
  cursor: pointer;
  border: 0;
  background-color: var(--light-main-color);
  color: #2b2827;
  font-size: 0.8rem;
  font-weight: 600;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 20%;
  border-radius: 5px;
}

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


.first {
  .img-row {
    margin-top: 2rem;
    @include fbx-ai-start-jc-start;
    overflow-x: auto;
    margin-left: -0.5rem;
    margin-right: -0.5rem;

    &::-webkit-scrollbar {
      height: 8px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: var(--main-color);
      border-radius: 10px;
    }

    .img {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      margin-bottom: 1rem;
      width: calc(33.33% - 1rem);
      min-width: calc(33.33% - 1rem);
      position: relative;

      img {
        transition: all 0.3s;
        width: 100%;
        border-radius: 5px;
      }

      .hover-icon {
        opacity: 0;
        position: absolute;
        //width: 60.5%;
        object-fit: cover;
        color: white;
        top: 45%;
        right: 45%;
        transition: all 0.3s;
      }

      .colors {
        @include fbx-ai-center-jc-center;
        opacity: 0;
        position: absolute;
        width: 100%;
        object-fit: cover;
        bottom: 0;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        //right: 20%;
        transition: all 0.3s;
        background-color: rgba(#2b2827, 0.45);

        a {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 1.2rem;
          height: 1.2rem;
          margin-left: 0.5rem;
          margin-right: 0.5rem;

          .resume-color {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .resume-ring {
            opacity: 0;
            transition: opacity 0.3s;
            position: absolute;
            transform: scale(1.2);
          }

          .resume-tike {
            position: absolute;
            z-index: 45;
            width: 70%;
          }

          &:hover .resume-ring {
            opacity: 1;
          }
        }

        /*a:nth-child(1) {*/
        /*  svg {*/
        /*    color: #ff5147;*/
        /*  }*/
        /*}*/
        /*a:nth-child(2) {*/
        /*  svg {*/
        /*    color: #ff9d42;*/
        /*  }*/
        /*}*/
        /*a:nth-child(3) {*/
        /*  svg {*/
        /*    color: #f9c50b;*/
        /*  }*/
        /*}*/
        /*a:nth-child(4) {*/
        /*  svg {*/
        /*    color: #25c06d;*/
        /*  }*/
        /*}*/
        /*a:nth-child(5) {*/
        /*  svg {*/
        /*    color: #42a0ff;*/
        /*  }*/
        /*}*/
        /*a:nth-child(6) {*/
        /*  svg {*/
        /*    color: #a761ff;*/
        /*  }*/
        /*}*/
        /*a:nth-child(7) {*/
        /*  svg {*/
        /*    color: #e96feb;*/
        /*  }*/
        /*}*/
      }

      &:hover {
        img {
          filter: brightness(0.5);
        }

        .colors {
          opacity: 1;
        }

        .hover-icon {
          opacity: 1;
        }
      }

      &.active {
        img {
          border: 3px solid var(--main-color);
        }
      }
    }
  }
}

@include mobile-device {
  .first {
    .custom-select {
      width: 50% !important;
    }

    .img-row {
      margin-top: 1.5rem;

      .img {
        width: calc(48% - 1rem);
        min-width: calc(48% - 1rem);

        .hover-icon {
          width: 0.8rem;
        }

        .colors {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;

          a {
            margin-left: 0.25rem;
            margin-right: 0.25rem;

            svg {
              width: 1rem;
            }
          }
        }
      }
    }
  }
}

@include tablet-device {
  .first {
    .custom-select {
      width: 50% !important;
    }

    .img-row {
      margin-top: 1.5rem;

      .img {
        width: calc(48% - 1rem);
        min-width: calc(48% - 1rem);

        .colors {
          padding-top: 0.5rem;
          padding-bottom: 0.5rem;

          a {
            svg {
              width: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
