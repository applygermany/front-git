<template>
  <div>
    <section
        class="wrapper"
        id="upload-page"
        :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <PageTitle/>

      <UploadBoxes />

      <client-only>
        <UploadBoxModal />
      </client-only>

    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/writer/upload/_pageTitle.vue";
import UploadBoxes from "@/components/writer/upload/_uploadBoxes.vue";
import UploadBoxModal from "@/components/writer/upload/modal/_uploadBoxModal.vue";

export default {
  layout: "writerLayout",
  components: {
    PageTitle,
    UploadBoxes,
    UploadBoxModal,
  },
  data() {
    return {
      user: {},
    };
  },

  async asyncData({params, store, $auth, $axios, redirect}) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level === 1 || $auth.user.level === 4) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }
    const {data} = await $axios.get("v1/writer/getUploadFiles/" + params.id + '/' + params.type);

    store.commit("writer/SET_Uploads", data.files);
    store.commit("writer/SET_User", data.user);
    store.commit("writer/SET_UserId", data.user.id);
    store.commit('writer/SET_TYPE', params.type)
    store.commit('writer/SET_DATA_TD', params.id)
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters.vuexUserMenuState;
    },
    uploads() {
      return this.$store.getters['writer/uploads']
    }
  },
  head() {
    return {
      title: "آپلود",
    };
  },
}
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
