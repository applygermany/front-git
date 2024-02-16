<template>
  <div class="box">
    <div class="name-major-img">
      <div class="name-major">
        <p class="name">{{ `${item.name}` }}</p>
        <p class="major">
          <span :class="{ filter: filter }" style="transition: filter 0.5s">{{
            university[position].grade
          }}</span>
          <span :class="{ filter: filter }" style="transition: filter 0.5s">{{
            university[position].field
          }}</span>
        </p>
      </div>
      <div class="img">
        <img :src="item.photo" alt="" />
      </div>
    </div>
    <div class="university-info">
      <p class="uni-name latin-font">
        <span>University of</span>
        <span :class="{ filter: filter }" style="transition: filter 0.5s">{{
          university[position].title
        }}</span>
      </p>
      <a v-if="university.length > 1" class="probable" @click="changePosition">
        <p>
          <span>{{ position + 1 }}</span> <span>/</span>
          <span>{{ university.length }}</span>
        </p>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uk-svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
    <div class="selected-university">
      <div class="left">
        <img
          :class="{ filter: filter }"
          style="transition: filter 0.5s"
          :src="university[position].logo"
          alt=""
        />
      </div>
      <div
        class="right"
        :class="{ filter: filter }"
        style="transition: filter 0.5s"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uk-svg"
        >
          <path
            d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <p>{{ university[position].semester }}</p>
      </div>
    </div>
    <div class="other">
      <a
        v-if="hasAnyAdmission"
        :class="hasAnyAdmission ? 'disabled' : ''"
        href="#admission-modal"
        uk-toggle
        @click="setAdmissionUrl(university.map((e) => e.acceptance))"
      >
        <div class="svg">
          <AcceptanceAdmission />
        </div>

        <span class="latin-font">Admission</span>
      </a>
      <a
        v-if="item.video_link !== null"
        :class="item.video_link !== null ? 'disabled' : ''"
        x
        href="#video-modal"
        uk-toggle
        @click="setVideoUrl"
      >
        <div class="svg">
          <AcceptanceVideo />
        </div>

        <span class="latin-font">Video</span>
      </a>
      <a
        v-if="item.visa_image !== null"
        :class="item.visa_image !== null ? 'disabled' : ''"
        href="#admission-modal"
        uk-toggle
        @click="setAdmissionUrl([item.visa_image])"
      >
        <div class="svg">
          <AcceptanceVisa />
        </div>

        <span class="latin-font">Visa</span>
      </a>
    </div>
  </div>
</template>

<script>
import AcceptanceAdmission from "@/components/svg/acceptance-admission.vue";
import AcceptanceVideo from "@/components/svg/acceptance-video.vue";
import AcceptanceVisa from "@/components/svg/acceptance-visa.vue";

export default {
  props: ["item"],
  components: {
    AcceptanceAdmission,
    AcceptanceVideo,
    AcceptanceVisa,
  },
  data() {
    return {
      position: 0,
      filter: false,
    };
  },
  computed: {
    hasAnyAdmission() {
      for (const uni of this.university) {
        if (uni.acceptance.length !== 0) {
          return true;
        }
      }
      return false;
    },
    university() {
      return this.item.university;
    },
  },
  methods: {
    changePosition() {
      this.filter = true;

      setTimeout(() => {
        this.position += 1;
        if (this.position > this.university.length - 1) this.position = 0;
      }, 300);

      setTimeout(() => (this.filter = false), 800);
    },
    setVideoUrl() {
      this.$store.dispatch("setAcceptanceVideo", this.item.video_link);
    },
    setAdmissionUrl(data) {
      this.$store.dispatch("setAcceptanceAdmission", [...data]);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins.scss";

.filter {
  filter: blur(15px);
}
.disabled .svg {
  background-color: var(--gray) !important;
}

.box {
  padding: 2rem 1.5rem;
  width: calc(33.33% - 5rem);
  background-color: var(--white);
  border-radius: 5px;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 2rem;
  .name-major-img {
    @include fbx-ai-start-jc-between;
    margin-bottom: 1.5rem;
    .name-major {
      width: 60%;
      .name {
        font-size: 1rem;
        font-weight: 700;
        color: var(--black);
        margin-bottom: 1.5rem;
      }
      .major {
        @include fbx-column-ai-start-jc-start;
        color: var(--main-color);
        font-size: 0.8rem;
        font-weight: 500;
        span:first-child {
          margin-bottom: 0.5rem;
        }
      }
    }
    .img {
      img {
        width: 7rem;
        height: 7rem;
        object-fit: cover;
        border-radius: 50%;
      }
    }
  }
  .university-info {
    direction: ltr;
    @include fbx-ai-center-jc-between;
    margin-bottom: 1.5rem;
    .uni-name {
      @include fbx-column-ai-start-jc-start;
      max-width: 70%;
      span:first-child {
        color: #5e5e5e;
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 0.25rem;
      }
      span:last-child {
        font-size: 0.9rem;
        color: var(--black);
        font-weight: 700;
      }
    }
    .probable {
      @include fbx-ai-start-jc-between;
      border: 1px solid var(--gray);
      border-radius: 25px;
      padding: 0.5rem;
      width: 20%;
      p {
        color: var(--black);
        span:nth-child(1) {
          font-size: 1rem;
        }
        span:nth-child(3) {
          font-weight: 300;
          font-size: 0.8rem;
        }
      }
      svg {
        fill: none;
        color: var(--black);
      }
    }
  }
  .selected-university {
    @include fbx-ai-center-jc-between;
    direction: ltr;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-top: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);
    min-height: 65px;
    .left {
      width: 50%;
      @include fbx-ai-start-jc-start;
      img {
        width: 100%;
        //width: 2.5rem;
        //height: 2.5rem;
        //object-fit: cover;
        //border-radius: 50%;
        //margin-right: 0.25rem;
      }
      p {
        @include fbx-column-ai-start-jc-start;
        span:first-child {
          font-weight: 300;
          font-size: 0.9rem;
          color: var(--black);
          margin-bottom: 0.5rem;
        }
        span:last-child {
          color: #6ec72d;
          font-size: 0.9rem;
          font-weight: 500;
        }
      }
    }
    .right {
      @include fbx-ai-start-jc-start;
      justify-content: flex-end;
      svg {
        color: #5699e4;
        margin-top: -1.5rem;
      }
      p {
        width: 40%;
        color: #5e5e5e;
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
  .other {
    @include fbx-ai-start-jc-start;
    direction: ltr;
    a {
      @include fbx-column-ai-center-jc-center;
      margin-right: 0.75rem;
      width: 18%;
      .svg {
        width: 100%;
        height: 3.5rem;
        border-radius: 5px;
        background: #2b2827;
        display: flex;
        align-content: center;
        justify-content: center;
        margin-bottom: 0.5rem;

        svg {
          width: 100%;
          padding: 0 0.5rem;
          color: #e4c064;
        }
      }
      span {
        color: var(--text-gray);
        font-size: 0.8rem;
        font-weight: 500;
      }
      &.last {
        svg {
          width: 100%;
          height: 3.5rem;
          border-radius: 5px;
          border: 1px solid var(--gray);
          margin-bottom: 0.5rem;
        }
      }
    }
  }
}

@include mobile-device {
  .box {
    padding: 1.5rem 1.5rem;
    width: calc(100% - 3rem);
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 1.5rem;
    .name-major-img {
      .name-major {
        width: 55%;
        .name {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .major {
          font-size: 0.75rem;
        }
      }
      .img {
        img {
          width: 5rem;
          height: 5rem;
        }
      }
    }
    .university-info {
      .uni-name {
        span:first-child {
          font-size: 0.75rem;
        }
        span:last-child {
          font-size: 0.8rem;
        }
      }
      .probable {
        p {
          span:nth-child(1) {
            font-size: 0.9rem;
          }
          span:nth-child(3) {
            font-size: 0.75rem;
          }
        }
      }
    }
    .selected-university {
      .right {
        svg {
          margin-top: -1rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
    .other {
      a {
        svg {
          height: 3rem;
        }
        span {
          font-size: 0.75rem;
        }
        &.last {
          svg {
            height: 3rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .box {
    padding: 1.5rem 1.5rem;
    width: calc(50% - 5rem);
    margin-bottom: 1.5rem;
    .name-major-img {
      .name-major {
        width: 55%;
        .name {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .major {
          font-size: 0.75rem;
        }
      }
      .img {
        img {
          width: 5rem;
          height: 5rem;
        }
      }
    }
    .university-info {
      .uni-name {
        span:first-child {
          font-size: 0.75rem;
        }
        span:last-child {
          font-size: 0.8rem;
        }
      }
      .probable {
        p {
          span:nth-child(1) {
            font-size: 0.9rem;
          }
          span:nth-child(3) {
            font-size: 0.75rem;
          }
        }
      }
    }
    .selected-university {
      .right {
        svg {
          margin-top: -1rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
    .other {
      a {
        svg {
          height: 3rem;
        }
        span {
          font-size: 0.75rem;
        }
        &.last {
          svg {
            height: 3rem;
          }
        }
      }
    }
  }
}
</style>
