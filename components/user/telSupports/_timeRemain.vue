<template>
  <div class="time-remain" v-if="nextTelSupport != null">
    <div class="right">
      <p class="top" v-if="nextTelSupport.hr > 0">
        <span>{{ nextTelSupport.hr }}</span>
        ساعت و {{ nextTelSupport.mr }} دقیقه تا شروع جلسه مشاوره
      </p>
      <p class="top" v-else>
        <span>{{ nextTelSupport.mr }}</span>
        دقیقه تا شروع جلسه مشاوره
      </p>
      <p class="bottom">
        شما یک جلسه مشاوره تلفنی در روز
        <span>
          {{ nextTelSupport.date }} و در بازه زمانی
          {{ nextTelSupport.fromTime }} تا {{ nextTelSupport.toTime }}
        </span>
        را ثبت کرده‌اید. لطفا توجه داشته باشید که مشاوره به صورت تمـاس صوتی در
        اپلیکیشن واتساپ انجام می‌شود.
      </p>
    </div>
    <div class="left">
      <div class="whatsapp">
        <div class="text">
          <span class="latin-font">whatsapp</span>
          <p class="latin-font">{{ expert.mobile }}</p>
<!--          <p class="latin-font">&#45;&#45;&#45;&#45;&#45;&#45;</p>-->
        </div>
        <div class="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            class="uk-svg"
          >
            <path
              id="whatsapp"
              d="M31,5.232A17.942,17.942,0,0,0,.4,17.838a17.741,17.741,0,0,0,2.393,8.918L.25,36l9.5-2.481a17.974,17.974,0,0,0,8.566,2.171h.008A17.908,17.908,0,0,0,36.25,17.852,17.686,17.686,0,0,0,31,5.232ZM18.325,32.678h-.006a14.934,14.934,0,0,1-7.583-2.067l-.544-.321L4.554,31.762l1.505-5.471L5.7,25.73A14.822,14.822,0,0,1,18.331,3.013a14.833,14.833,0,1,1-.006,29.665Zm8.172-11.1c-.448-.223-2.65-1.3-3.06-1.45s-.709-.223-1.007.223-1.157,1.45-1.418,1.747-.522.335-.97.112a12.246,12.246,0,0,1-3.6-2.212,13.455,13.455,0,0,1-2.492-3.088c-.261-.446,0-.664.2-.91a12.611,12.611,0,0,0,1.12-1.525.816.816,0,0,0-.038-.781c-.112-.223-1.007-2.417-1.381-3.31-.364-.869-.733-.751-1.008-.765s-.56-.016-.858-.016a1.649,1.649,0,0,0-1.194.558,4.989,4.989,0,0,0-1.567,3.718,8.65,8.65,0,0,0,1.829,4.611c.224.3,3.158,4.8,7.651,6.73a25.715,25.715,0,0,0,2.553.939,6.168,6.168,0,0,0,2.821.177c.861-.128,2.65-1.078,3.023-2.119a3.708,3.708,0,0,0,.261-2.12c-.112-.186-.41-.3-.858-.521Zm0,0"
              transform="translate(-0.25)"
              fill="#e2ad42"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    expert() {
      return this.$store.getters["telSupports/expert"];
    },
    nextTelSupport() {
      return this.$store.getters["telSupports/nextTelSupport"];
    },
  },
  methods: {
    selectTelSupport(telSupport) {
      this.$store.commit("telSupports/SET_TelSupport", telSupport);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.time-remain {
  margin-top: 3rem;
  background-color: var(--white);
  border-radius: 8px;
  @include boxshadow();
  @include fbx-ai-start-jc-between;
  padding-top: 2rem;
  padding-bottom: 2rem;
  .right {
    @include fbx-column-ai-start-jc-start;
    padding-right: 2rem;
    border-right: 3px solid var(--main-color);
    width: 65%;
    .top {
      font-size: 1rem;
      color: var(--black);
      font-weight: 800;
      margin-bottom: 1.5rem;
      span {
        font-weight: 800;
        color: var(--main-color);
      }
    }
    .bottom {
      font-size: 0.9rem;
      line-height: 2rem;
      color: var(--black);
      span {
        font-weight: 500;
        color: var(--main-color);
      }
    }
  }
  .left {
    width: 23%;
    padding-left: 2rem;
    text-align: left;
    .whatsapp {
      border: 1px solid var(--gray);
      border-radius: 5px;
      padding: 0.75rem;
      margin-bottom: 1.5rem;
      @include fbx-ai-center-jc-end;
      .icon {
        margin-right: 1rem;
        svg {
          fill: none;
          color: var(--main-color);
        }
      }
      .text {
        direction: ltr;
        span {
          font-weight: 300;
          font-size: 1rem;
          color: var(--black);
        }
        p {
          font-weight: 600;
          font-size: 1rem;
          color: var(--black);
        }
      }
    }
    .edit {
      width: 100%;
      @include fbx-ai-start-jc-start;
      justify-content: flex-end;
      a {
        text-align: center;
        width: 50%;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        background-color: var(--inner-background-color);
        color: var(--black);
        transition: all 0.3s;
        font-size: 0.8rem;
        font-weight: 500;
        border-radius: 5px;
        &:hover {
          background-color: var(--light-main-color);
          color: #2b2827;
        }
      }
    }
  }
}

@include mobile-device {
  .time-remain {
    margin-top: 1.5rem;
    flex-wrap: wrap;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    .right {
      @include fbx-column-ai-start-jc-start;
      padding-right: 1rem;
      padding-left: 1rem;
      border-right: 3px solid var(--main-color);
      width: calc(100% - 2rem);
      margin-bottom: 1.5rem;
      .top {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
      .bottom {
        text-align: justify;
        font-size: 0.75rem;
        line-height: 1.8rem;
      }
    }
    .left {
      width: calc(100% - 2rem);
      padding-left: 1rem;
      padding-right: 1rem;
      text-align: left;
      .whatsapp {
        padding: 0.75rem;
        margin-bottom: 1.5rem;
        .icon {
          margin-right: 1rem;
        }
        .text {
          span {
            font-size: 0.9rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      }
      .edit {
        justify-content: center;
        a {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include tablet-device {
  .time-remain {
    margin-top: 1.5rem;
    flex-wrap: wrap;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    .right {
      @include fbx-column-ai-start-jc-start;
      padding-right: 1rem;
      padding-left: 1rem;
      border-right: 3px solid var(--main-color);
      width: 60%;
      .top {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }
      .bottom {
        text-align: justify;
        font-size: 0.75rem;
        line-height: 1.8rem;
      }
    }
    .left {
      width: 30%;
      padding-left: 1rem;
      padding-right: 1rem;
      .whatsapp {
        padding: 0.75rem;
        .icon {
          margin-right: 1rem;
        }
        .text {
          span {
            font-size: 0.9rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      }
      .edit {
        a {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
