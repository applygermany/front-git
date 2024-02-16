<template>
  <div>
    <section
      class="wrapper"
      id="upload-page"
      :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle />

      <UploadBoxes />

      <client-only>
        <UploadBoxModalNew :uploadTitles="uploadTitles" />

        <UploadContractBoxModal />

        <UploadOtherBoxModal
          :admittance="admittance"
          :mandatoryUploaded="mandatoryUploaded"
        />
        <div class="d-flex justify-content-center not_found"  v-if="uploadTitles.length === 0">
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
<!--            <p style="display: block">هنوز هیچ یک از مدارک را آپلود نکرده اید</p>-->
          </div>
        </div>

        <UploadBoxModal />
        
        <ImageUploadBoxModal />
      </client-only>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/user/uploads/_pageTitle.vue";
import UploadBoxes from "@/components/user/uploads/_uploadBoxes.vue";
import UploadBoxModalNew from "@/components/user/uploads/modal/_uploadBoxModalNew.vue";
import UploadContractBoxModal from "@/components/user/uploads/modal/_uploadContractBoxModal.vue";
import UploadOtherBoxModal from "@/components/user/uploads/modal/_uploadOtherBoxModal.vue";
import UploadBoxModal from "@/components/user/uploads/modal/_uploadBoxModal.vue";
import ImageUploadBoxModal from "@/components/user/uploads/modal/_imageUploadBoxModal.vue";

export default {
  layout: "userLayout",
  components: {
    PageTitle,
    UploadBoxes,
    UploadBoxModalNew,
    UploadContractBoxModal,
    UploadOtherBoxModal,
    UploadBoxModal,
    ImageUploadBoxModal,
  },
  data() {
    return {
      status: 0,
      contract: 0,
      mandatoryUploads: [],
      mandatoryUploaded: [],
      uploads: [],
      uploadTitles: [],
      admittance: "",
    };
  },
  created() {
  },
  async asyncData({ $auth, store, $axios, redirect }) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const { data } = await $axios.get(`v1/user/uploads`);

    const otherFiles = data.uploadTitles.filter(
      (item) =>
        item.mandatory == 0
    );

    store.commit("uploads/SET_OtherFiles", otherFiles);
    store.commit("uploads/SET_Uploads", data);

    return {
      status: data.status,
      mandatoryUploads: data.mandatoryUploads,
      mandatoryUploaded: data.mandatoryUploaded,
      uploads: data.uploads,
      admittance: data.admittance,
      contract: data.contract,
      uploadTitles: data.uploadTitles,
    };
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters["user/vuexUserMenuState"];
    },
    user() {
      return this.$store.getters['user/user'];
    }
  },
  head() {
    return {
      title: "مدارک",
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/user/scss/_mixins.scss";
.not_found {
  svg {
    margin-right: auto;
    margin-left: auto;
  }
}
.upload-box-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    width: 400px;
    border-radius: 8px;
    .title {
      @include fbx-ai-center-jc-between;
      background-color: var(--inner-background-color);
      padding: 1rem 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      button {
        position: inherit;
        &:hover {
          svg {
            color: var(--red);
          }
        }
      }
      p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--text-gray);
      }
    }
    .text {
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      h3 {
        margin: 1rem auto 2rem auto;
        padding: 0 1.5rem 1rem 1.5rem;
        border-bottom: 1px solid var(--gray);
        width: fit-content;
        font-size: 1rem;
        font-weight: 500;
        color: var(--black);
      }
      .download {
        @include fbx-ai-start-jc-between;
        margin: 1rem auto 2rem auto;
        .right {
          width: 50%;
        }
        .left {
          width: 40%;
          text-align: left;
          margin-top: 0.5rem;
        }
        h3 {
          padding: 0;
          margin: 0 0 0.5rem 0;
          border: 0;
        }
        p {
          line-height: 1.5rem;
          font-size: 0.8rem;
          color: var(--text-gray);
          font-weight: 500;
        }
        a {
          color: var(--main-color);
          font-size: 0.8rem;
          padding: 0.5rem 2rem;
          border-radius: 5px;
          border: 1px solid var(--main-color);
          svg {
            fill: none;
            color: var(--main-color);
          }
        }
      }
      .custom-select {
        margin: 1rem auto 2rem auto;
      }
      .js-upload {
        cursor: pointer;
        padding-right: 0;
        padding-left: 0;
        width: 100%;
        margin-top: 0;
        border-radius: 5px;
        direction: ltr;
        border-color: var(--gray);
        .uk-text-middle {
          color: var(--black);
          font-weight: 500;
          font-size: 1rem;
        }
        .uk-link {
          color: var(--main-color);
          font-size: 1rem;
          font-weight: 500;
        }
        .rule {
          font-size: 0.9rem;
          color: var(--text-gray);
        }
      }
      .uploaded-file-info {
        direction: ltr;
        margin-bottom: 20px;
        @include fbx-ai-start-jc-start;
        img {
          width: 15%;
          margin-right: 1rem;
        }
        > div {
          border-bottom: 1px solid var(--gray);
          padding-bottom: 0.5rem;
          .left {
            @include fbx-column-ai-start-jc-start;
            .name {
              font-weight: 500;
              font-size: 1rem;
              color: #dbdae1;
            }
            .size {
              color: #737284;
            }
          }
          .right {
            a {
              transition: all 0.3s;
              &:hover {
                color: #ff3434;
              }
            }
          }
          @include fbx-ai-start-jc-between;
          width: 80%;
        }
      }
      .upload-progressing {
        direction: ltr;
        margin-bottom: 20px;
        @include fbx-ai-start-jc-start;
        img {
          width: 15%;
          margin-right: 1rem;
        }
        > div {
          width: 80%;
          .top {
            .name {
              font-weight: 500;
              font-size: 1rem;
              color: #dbdae1;
            }
          }
          .bottom {
            @include fbx-ai-start-jc-between;
            .size {
              color: var(--light-main-color);
              font-size: 1rem;
              font-weight: 500;
            }
            .percent {
              color: var(--light-main-color);
              font-size: 1rem;
              font-weight: 500;
            }
          }
          progress {
            margin: 0.5rem 0 0 0;
            height: 3px;
          }
          /* For Firefox */
          progress::-moz-progress-bar {
            background-color: var(--light-main-color);
          }

          /* For Chrome or Safari */
          progress::-webkit-progress-value {
            background-color: var(--light-main-color);
          }
          progress::-webkit-progress-bar {
            background-color: var(--black);
          }
        }
      }
      .explain {
        form {
          textarea {
            border: 0;
            font-size: 0.8rem;
            color: var(--text-gray);
            background-color: var(--white);
            width: 100%;
            &::placeholder {
              font-size: 0.8rem;
              color: var(--text-gray);
            }
            &:focus {
              outline: 0;
            }
          }
        }
      }
      .submit {
        text-align: center;
        button {
          border: 0;
          border-radius: 5px;
          background-color: var(--inner-background-color);
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          width: 55%;
          color: var(--black);
          transition: all 0.3s;
          &:hover {
            background-color: var(--light-main-color);
            color: #2b2827;
          }
        }
      }
    }
  }
}

@include mobile-device {
  .upload-box-modal {
    .uk-modal-body {
      .title {
        @include fbx-ai-center-jc-between;
        padding: 0.75rem 1.25rem;
        p {
          font-size: 0.9rem;
        }
      }
      .text {
        padding: 0.75rem 1.25rem 1.25rem 1.25rem;
        h3 {
          font-size: 0.9rem;
        }
        .download {
          @include fbx-ai-start-jc-between;
          margin: 1rem auto 2rem auto;
          .right {
            width: 50%;
          }
          .left {
            width: 50%;
            text-align: left;
            margin-top: 0.5rem;
          }
          p {
            font-size: 0.75rem;
          }
          a {
            font-size: 0.75rem;
            padding: 0.5rem 1.5rem;
          }
        }
        .js-upload {
          .uk-text-middle {
            font-size: 0.9rem;
          }
          .uk-link {
            font-size: 0.9rem;
          }
          .rule {
            font-size: 0.8rem;
          }
        }
        .uploaded-file-info {
          > div {
            .left {
              .name {
                font-size: 0.9rem;
              }
              .size {
                font-size: 0.9rem;
              }
            }
          }
        }
        .upload-progressing {
          > div {
            .top {
              .name {
                font-size: 0.9rem;
              }
            }
            .bottom {
              .size {
                font-size: 0.9rem;
              }
              .percent {
                font-size: 0.9rem;
              }
            }
          }
        }
        .explain {
          form {
            textarea {
              font-size: 0.75rem;
              &::placeholder {
                font-size: 0.75rem;
              }
            }
          }
        }
        .submit {
          button {
            font-size: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
          }
        }
      }
    }
  }
}
</style>
