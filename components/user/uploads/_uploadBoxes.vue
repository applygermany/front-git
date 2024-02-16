<template>
  <div class="upload-boxes" v-if="uploads.status !== 0">
    <Contract/>

    <EducationUpload/>

    <BachelorUpload/>

    <LanguageUpload/>

    <VisaUpload/>

    <ImageUpload/>

    <UniversityEntranceQualification/>

    <OtherFile/>

    <MandatoryUploads
        v-if="uploads.mandatoryUploads.length > 0"
        v-for="(upload, index) in uploads.mandatoryUploads"
        :key="index"
        :upload="upload"
    />

  </div>
</template>

<script>
import Contract from "@/components/user/uploads/_contract.vue";
import MandatoryUploads from "@/components/user/uploads/_mandatoryUploads.vue";
import EducationUpload from "@/components/user/uploads/_educationUpload.vue";
import LanguageUpload from "@/components/user/uploads/_languageUpload.vue";
import VisaUpload from "@/components/user/uploads/_visaUpload.vue";
import ImageUpload from "@/components/user/uploads/_imageUpload.vue";
import UniversityEntranceQualification from "@/components/user/uploads/_UniversityEntranceQualification.vue";
import BachelorUpload from "@/components/user/uploads/_bachelorUpload.vue";
import OtherFile from "@/components/user/uploads/_otherFile.vue";

export default {
  components: {
    Contract,
    MandatoryUploads,
    EducationUpload,
    LanguageUpload,
    VisaUpload,
    ImageUpload,
    BachelorUpload,
    OtherFile,
    UniversityEntranceQualification
  },
  data() {
    return {
      type: 1,
      title: null,
      text: null,
      errors: [],
    };
  },
  computed: {
    uploads() {
      return this.$store.getters["uploads/uploads"];
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/user/scss/_mixins.scss";

.upload-boxes {
  @include fbx-ai-start-jc-start;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  .fade {
    opacity: 0.3;
  }

  .box:not(.fade) {
    align-self: flex-start;
    @include boxshadow();
    background-color: var(--white);
    width: calc(25% - 3rem);
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 5px;
    padding: 4rem 1rem 1rem 1rem;
    margin-bottom: 2rem;
    text-align: center;
    transition: all 0.3s;
    position: relative;

    &:hover {
      margin-top: -0.5rem;
    }

    .star {
      position: absolute;
      top: 5%;
      right: 5%;

      svg {
        fill: none;
        color: var(--main-color);
      }
    }

    .close {
      position: absolute;
      top: 5%;
      left: 5%;

      a {
        transition: all 0.3s;

        svg {
          transition: all 0.3s;
          color: var(--text-gray);
        }

        &:hover {
          svg {
            color: var(--red);
          }
        }
      }
    }

    .img {
      text-align: center;
      width: 100%;
      margin-bottom: 1.5rem;

      img {
        width: 25%;
      }

      img.dark-icon {
        display: none;
      }
    }

    .text {
      height: 4.5rem;
      text-align: center;
      margin: 0 auto 0 auto;
      width: 80%;
      line-height: 1.8rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--black);
    }

    .button {
      height: 3rem;
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        display: block;
        background-color: var(--inner-background-color);
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-size: 0.8rem;
        color: var(--black);
        border-radius: 5px;
        border: 0;
        width: 65%;
        cursor: pointer;
        transition: all 0.3s;

        &:hover {
          background-color: var(--light-main-color);
        }
      }
    }

    .info {
      height: 3rem;
      padding-top: 1rem;
      border-top: 1px solid var(--gray);
      @include fbx-column-ai-start-jc-start;

      .type {
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
        margin-right: auto;
      }

      .size-date {
        width: 100%;
        @include fbx-ai-center-jc-between;
        color: var(--text-gray);
        font-weight: 300;
      }
    }
  }

  .box {
    align-self: flex-start;
    @include boxshadow();
    background-color: var(--white);
    width: calc(25% - 3rem);
    margin-right: 0.5rem;
    margin-left: 0.5rem;
    border-radius: 5px;
    padding: 4rem 1rem 1rem 1rem;
    margin-bottom: 2rem;
    text-align: center;
    transition: all 0.3s;
    position: relative;

    .star {
      position: absolute;
      top: 5%;
      right: 5%;

      svg {
        fill: none;
        color: var(--main-color);
      }
    }

    .close {
      position: absolute;
      top: 5%;
      left: 5%;

      a {
        transition: all 0.3s;

        svg {
          transition: all 0.3s;
          color: var(--text-gray);
        }

      }
    }

    .img {
      text-align: center;
      width: 100%;
      margin-bottom: 1.5rem;

      img {
        width: 25%;
      }

      img.dark-icon {
        display: none;
      }
    }

    .text {
      height: 4.5rem;
      text-align: center;
      margin: 0 auto 0 auto;
      width: 80%;
      line-height: 1.8rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--black);
    }

    .button {
      height: 3rem;
      padding-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        display: block;
        background-color: var(--inner-background-color);
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        font-size: 0.8rem;
        color: var(--black);
        border-radius: 5px;
        border: 0;
        width: 65%;
        cursor: pointer;
        transition: all 0.3s;

      }
    }

    .info {
      height: 3rem;
      padding-top: 1rem;
      border-top: 1px solid var(--gray);
      @include fbx-column-ai-start-jc-start;

      .type {
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
        margin-right: auto;
      }

      .size-date {
        width: 100%;
        @include fbx-ai-center-jc-between;
        color: var(--text-gray);
        font-weight: 300;
      }
    }
  }
}

@include mobile-device {
  .upload-boxes {
    margin-left: 0;
    margin-right: 0;

    .box {
      width: calc(100% - 2rem) !important;
      margin-right: 0 !important;
      margin-left: 0 !important;
      margin-bottom: 1.5rem !important;
    }
  }
}

@include tablet-device {
  .upload-boxes {
    .box {
      width: calc(50% - 3rem);
      margin-bottom: 1.5rem;
    }
  }
}

@include large-device {
  .upload-boxes {
    .box {
      width: calc(33.33% - 3rem);
    }
  }
}
</style>
