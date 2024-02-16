<template>
  <div :class="'university-boxes '+ (universities.length === 0 ? 'd-flex-column' : '')">
    <div class="box" v-for="(university, index) in universities" :key="index">
      <div class="img">
        <img class="main-logo" :src="university.image" alt="" />
        <img class="uni-logo" :src="university.logo" alt="" />
      </div>
      <div class="text">
        <div class="labels">
          <span class="suggest" v-if="university.offer === 1">
            پیشنهاد کارشناس
          </span>
          <a
            :href="university.link"
            class="kind"
            v-if="
              university.link !== null && university.link.includes('https://')
            "
            target="_blank"
          >
            وب سایت
          </a>
          <a
            :href="'https://' + university.link"
            class="kind"
            v-else-if="university.link !== null"
            target="_blank"
          >
            وب سایت
          </a>
        </div>
        <div class="name-choose">
          <div class="name">
            <span class="latin-font">University name</span>
            <h3 class="latin-font">{{ university.title }}</h3>
          </div>
        </div>
        <div class="infos">
          <div class="item">
            <span>رشتـــه</span>
            <span class="latin-font">{{ university.field }}</span>
          </div>
          <div class="item">
            <span>شهــــر</span>
            <span class="latin-font">{{ university.city }}</span>
          </div>
          <div class="item">
            <span>ایــالت</span>
            <span class="latin-font">{{ university.state }}</span>
          </div>
          <div class="item">
            <span>موقعیت جغرافیایی</span>
            <span class="latin-font">{{
              university.geographicalLocation
            }}</span>
          </div>
          <div class="item">
            <span>جمعیت</span>
            <span class="latin-font">{{
              university.cityCrowd | numberFilter
            }}</span>
          </div>
        </div>
        <div class="progress">
          <div class="item">
            <p>
              <UniversityBoxesDoller style="width: 20px" />
              <span>هزینه های زندگی</span>
            </p>
            <div class="left">
              <progress
                class="uk-progress"
                :value="university.costLiving"
                max="5"
              ></progress
              ><span>{{ university.costLiving }}</span>
            </div>
          </div>
          <div class="item">
            <p>
              <UniversityBoxesAkhz style="width: 20px" />
              <span>احتمال اخذ پذیرش</span>
            </p>
            <div class="left">
              <progress
                class="uk-progress"
                :value="university.chanceGetting"
                max="5"
              ></progress
              ><span>{{ university.chanceGetting }}</span>
            </div>
          </div>
        </div>
        <div class="explain">
          <span
            class=""
            data-v-48bebd74=""
            style="font-size: 0.8rem; font-weight: 400"
            v-if="
              university.description != null && university.description != ''
            "
            >توضیحات:
          </span>
          <p
            v-if="
              university.description != null && university.description != ''
            "
          >
            {{ university.description }}
          </p>
          <!-- <p v-else>توضیحات ندارد</p> -->
        </div>
        <div class="choose-box">
          <a
            href="#submit-university-modal"
            uk-toggle
            class="choose"
            v-if="university.status == 2"
            @click="chooseUniversity(university.id)"
          >
            انتخاب
          </a>
          <a class="choose selected" v-else> در سبد اپلای </a>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center"  v-if="universities.length === 0">
      <div class="text-center">
        <svg height="118.607" viewBox="0 0 120 118.607" width="120"
             xmlns="http://www.w3.org/2000/svg">
          <defs>
            <style>
              .alef, .cj {
                fill: none;
              }

              .alef {
                stroke: #707070;
                stroke-width: 1.5px;
              }

              .best {
                stroke: none;
              }</style>
          </defs>
          <g transform="translate(-518.5 -4724)">
            <g class="alef" transform="translate(582.071 4798.286)">
              <circle class="best" cx="17.143" cy="17.143" r="17.143"/>
              <circle class="cj" cx="17.143" cy="17.143" r="16.393"/>
            </g>
            <line class="alef" transform="translate(518.5 4841.857)" x2="8.571"/>
            <line class="alef" transform="translate(529.929 4841.857)" x2="101.429"/>
            <line class="alef" transform="translate(634.214 4841.857)" x2="4.286"/>
            <line class="alef" transform="translate(622.786 4777.571)" x2="8.571" y2="2.857"/>
            <line class="alef" transform="translate(625.643 4774.714)" x1="2.857" y2="8.571"/>
            <g class="alef" transform="translate(623.5 4728.286)">
              <circle class="best" cx="3.571" cy="3.571" r="3.571"/>
              <circle class="cj" cx="3.571" cy="3.571" r="2.821"/>
            </g>
            <g class="alef" transform="translate(544.929 4724)">
              <circle class="best" cx="2.857" cy="2.857" r="2.857"/>
              <circle class="cj" cx="2.857" cy="2.857" r="2.107"/>
            </g>
            <line class="alef" transform="translate(527.071 4751.857)" x2="5.714" y2="2.857"/>
            <line class="alef" transform="translate(528.5 4750.429)" x2="2.857" y1="5.714"/>
            <line class="alef" transform="translate(558.5 4776.143)" x2="28.571"/>
            <line class="alef" transform="translate(591.357 4776.143)" x2="5.714"/>
            <line class="alef" transform="translate(599.929 4776.143)" x2="2.857"/>
            <line class="alef" transform="translate(559.929 4790.429)" x2="22.857"/>
            <line class="alef" transform="translate(558.5 4804.714)" x2="17.143"/>
            <path class="alef" d="M3,0H63a4.286,4.286,0,0,1,4.286,4.286V45.714"
                  transform="translate(547.643 4748.286)"/>
            <path class="alef" d="M0,30.56V3" transform="translate(546.357 4749.571)"/>
            <path class="alef" d="M35.148,70.714H4.286A4.286,4.286,0,0,1,0,66.429V35"
                  transform="translate(546.357 4763.286)"/>
            <path class="alef" d="M0,8.714V3" transform="translate(546.357 4785.286)"/>
            <line class="alef" transform="translate(598.5 4806.143)" y2="11.429"/>
            <line class="alef" transform="translate(598.5 4817.571)" x1="7.143"/>
          </g>
        </svg>
        <p style="display: block">هنوز هیچ دانشگاهی برای شما باز نشده است!</p>
      </div>
    </div>
  </div>

</template>

<script>
import UniversityBoxesDoller from "@/components/svg/universityBoxes-doller.vue";
import UniversityBoxesAkhz from "@/components/svg/universityBoxes-akhz.vue";

export default {
  components: {
    UniversityBoxesDoller,
    UniversityBoxesAkhz,
  },
  computed: {
    universities() {
      return this.$store.getters["user/universities"];
    },
  },
  methods: {
    chooseUniversity(id) {
      this.$store.commit("user/Set_UniversityId", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";
.text-center {
  text-align: center;
  p {
    margin-top: 2em;
  }
}
.d-flex-column {
  display: flex;
  height: 55%;
  flex-direction: column;
  justify-content: center;
}
.university-boxes {
  @include fbx-ai-start-jc-start;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  .box {
    @include boxshadow();
    display: flex;
    flex-direction: column;
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    background-color: var(--white);
    border-radius: 8px;
    width: calc(33.33% - 1rem);
    margin-bottom: 2rem;
    .img {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      img.main-logo {
        width: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        transition: all 0.3s;
      }
      img.uni-logo {
        opacity: 0;
        position: absolute;
        width: 85%;
        height: auto;
        object-fit: cover;
        transition: all 0.3s;
      }
      &:hover {
        img.main-logo {
          filter: brightness(0.5);
        }
        img.uni-logo {
          opacity: 1;
        }
      }
    }
    .text {
      z-index: 100;
      position: relative;
      padding: 0 1.5rem 1.5rem 1.5rem;
      display: flex;
      flex-direction: column;
      height: -webkit-fill-available;
      .labels {
        position: absolute;
        top: -12px;
        // text-align: left;
        .suggest {
          border: 1px solid var(--white);
          padding: 0.15rem 0.5rem;
          background-color: var(--red);
          color: #fff;
          border-radius: 25px;
          font-size: 0.8rem;
        }
        .kind {
          border: 1px solid var(--white);
          padding: 0.15rem 0.5rem;
          background-color: #e2ad42;
          color: #fff;
          border-radius: 25px;
          font-size: 0.8rem;
        }
      }
      .name-choose {
        @include fbx-ai-start-jc-between;
        margin-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--gray);
        justify-content: flex-end;

        .name {
          @include fbx-column-ai-end-jc-end;
          width: 100%;
          span {
            color: var(--text-gray);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }
          h3 {
            color: var(--main-color);
            font-size: 1.1rem;
            font-weight: bold;
            text-align: left;
          }
        }
      }
      .infos {
        margin-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--gray);
        .item {
          width: 100%;
          @include fbx-ai-start-jc-between;
          margin-bottom: 1.5rem;
          span {
            color: var(--black);
            font-size: 0.9rem;
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .progress {
        margin-top: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--gray);
        .item {
          @include fbx-ai-center-jc-between;
          margin-bottom: 1.5rem;
          p {
            width: 48%;
            svg {
              fill: none;
              color: var(--text-gray);
            }
            span {
              font-size: 0.8rem;
              color: var(--black);
              font-weight: 500;
            }
          }
          .left {
            width: 48%;
            @include fbx-ai-center-jc-start;
            progress {
              margin: 0;
              height: 0.5rem;
              direction: ltr;
            }
            /* For Firefox */
            progress::-moz-progress-bar {
              background-color: var(--main-color);
            }

            /* For Chrome or Safari */
            progress::-webkit-progress-value {
              background-color: var(--main-color);
            }
            progress::-webkit-progress-bar {
              background-color: var(--gray);
            }
            span {
              color: var(--main-color);
              font-size: 0.9rem;
              font-weight: bold;
              margin-right: 0.5rem;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
      .explain {
        margin-top: 1.5rem;
        margin-bottom: 1rem;
        p {
          max-height: 75px;
          overflow: auto;
          font-size: 0.8rem;
          text-align: center;
          line-height: 1.8rem;
          color: var(--text-gray);

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
      }

      .choose-box {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: auto;
        .choose {
          color: var(--black);
          font-size: 0.8rem;
          font-weight: 500;
          background-color: var(--inner-background-color);
          padding: 0.5rem 0;
          width: 80%;
          text-align: center;
          border-radius: 5px;
          transition: all 0.3s;
          &:hover {
            color: #2b2827;
            background-color: var(--light-main-color);
          }
          &.selected {
            background-color: #d9e8e5;
            color: #647673;
          }
        }
      }
    }
  }
}

@include mobile-device {
  .university-boxes {
    margin-left: 0;
    margin-right: 0;
    .box {
      margin-right: 0;
      margin-left: 0;
      width: 100%;
      margin-bottom: 1.5rem;
      .text {
        padding: 0 1rem 1rem 1rem;
        .labels {
          .suggest {
            font-size: 0.75rem;
          }
        }
        .name-choose {
          margin-top: 1rem;
          padding-bottom: 1rem;

          .name {
            span {
              font-size: 0.8rem;
            }
            h3 {
              font-size: 1rem;
            }
          }
        }
        .infos {
          margin-top: 1rem;
          padding-bottom: 1rem;
          .item {
            margin-bottom: 1rem;
            span {
              font-size: 0.8rem;
            }
          }
        }
        .progress {
          margin-top: 1rem;
          padding-bottom: 1rem;
          .item {
            margin-bottom: 1rem;
            p {
              span {
                font-size: 0.75rem;
              }
            }
            .left {
              span {
                font-size: 0.8rem;
              }
            }
          }
        }
        .explain {
          margin-top: 1rem;
          p {
            font-size: 0.75rem;
          }
        }
        .choose-box .choose {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include tablet-device {
  .university-boxes {
    .box {
      width: calc(50% - 1rem);
      margin-bottom: 1.5rem;
      .text {
        padding: 0 1rem 1rem 1rem;
        .labels {
          .suggest {
            font-size: 0.75rem;
          }
        }
        .name-choose {
          margin-top: 1rem;
          padding-bottom: 1rem;

          .name {
            span {
              font-size: 0.8rem;
            }
            h3 {
              font-size: 1rem;
            }
          }
        }
        .infos {
          margin-top: 1rem;
          padding-bottom: 1rem;
          .item {
            margin-bottom: 1rem;
            span {
              font-size: 0.8rem;
            }
          }
        }
        .progress {
          margin-top: 1rem;
          padding-bottom: 1rem;
          .item {
            margin-bottom: 1rem;
            p {
              span {
                font-size: 0.75rem;
              }
            }
            .left {
              span {
                font-size: 0.8rem;
              }
            }
          }
        }
        .explain {
          margin-top: 1rem;
          p {
            font-size: 0.75rem;
          }
        }

        .choose-box .choose {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include large-device {
  .university-boxes {
    .box {
      width: calc(50% - 1rem);
    }
  }
}
</style>
