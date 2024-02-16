<template>
  <div class="resume-box  first">
    <h3>1-قالب و زبان رزومه را انتخاب کنید</h3>
    <hr />
    <div class="custom-select w-25">
      <select v-model="previewResume.language" disabled>
        <option>زبان رزومه</option>
        <option>انگلیسی</option>
        <option>آلمانی</option>
        <option>دو زبانه</option>
      </select>
    </div>
    <div class="img-row">
      <div v-for="(item, index) in resumeTemp" :key="index" class="img">
        <img :src="item.image" alt="" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34.002"
          height="34.002"
          viewBox="0 0 34.002 34.002"
          class="hover-icon uk-svg"
        >
          <g id="dots-vertical" transform="translate(1 1)">
            <path
              id="Path_24162"
              data-name="Path 24162"
              d="M-20421-1030.006l12-12-12,12h0Zm0-7.994v0Zm32-24h0v0l-12,12Z"
              transform="translate(20421 1062.004)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
            <path
              id="Path_29994"
              data-name="Path 29994"
              d="M-20421-1030.006l12-12-12,12h0Zm0-7.994v0Zm32-24h0v0l-12,12Z"
              transform="translate(-1030.006 20421) rotate(90)"
              fill="none"
              stroke="#fff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </g>
        </svg>
        <div class="colors">
          <a v-for="color,index in item.colors" :key="index">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              class="uk-svg"
            >
              <circle
                id="Ellipse_1600"
                data-name="Ellipse 1600"
                cx="8"
                cy="8"
                r="8"
                :fill="color"
              ></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    resumeTemp() {
      return this.$store.getters["resume/resumeTemp"];
    },
    previewResume() {
      return this.$store.getters["resume/previewResume"];
    },
  },
  created() {
    this.$store.dispatch("resume/resumeTemp");
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

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
        transition: border 0.3s;
        background-color: rgba(#2b2827, 0.45);
        a {
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          svg {
            width: 1.2rem;
          }
        }
        a:nth-child(1) {
          svg {
            color: #ff5147;
          }
        }
        a:nth-child(2) {
          svg {
            color: #ff9d42;
          }
        }
        a:nth-child(3) {
          svg {
            color: #f9c50b;
          }
        }
        a:nth-child(4) {
          svg {
            color: #25c06d;
          }
        }
        a:nth-child(5) {
          svg {
            color: #42a0ff;
          }
        }
        a:nth-child(6) {
          svg {
            color: #a761ff;
          }
        }
        a:nth-child(7) {
          svg {
            color: #e96feb;
          }
        }
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