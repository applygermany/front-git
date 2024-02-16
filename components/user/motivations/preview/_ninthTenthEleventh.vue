<template>
  <div class="ninth-tenth-eleventh">
    <div class="resume-box ninth">
      <h3>برنامه پس از فارغ التحصیلی</h3>
      <hr />
      <form  >
        <textarea
          placeholder="برنامه پس از فارغ التحصیلی"
          :value="previewMotivation.after_graduation"
          disabled
        ></textarea>
      </form>
    </div>
    <div class="resume-box tenth">
      <h3>10- آپلود رزومه</h3>
      <hr />
      <p>
        چنـانچـه از قبـل رزومـه خود را طراحـی کرده‌ایـد، آن را آپلود کنید. تکمیل
        یا ناقص بودن آن اهمیتی ندارد
      </p>

      <div
        class="js-upload uk-placeholder uk-text-center"
        v-if="previewMotivation.url_uploaded_from_user == null"
      >
        <div class="left">
          <span class="uk-text-middle latin-font">
            You did not upload a file
          </span>
        </div>
      </div>
      <div class="js-upload uk-placeholder uk-text-center" v-else>
        <div class="left">
          <a target="_blank" :href="JSON.parse(previewMotivation.url_uploaded_from_user)[JSON.parse(previewMotivation.url_uploaded_from_user).length - 1]">
            فایل آپلود شده
          </a>
        </div>
      </div>
    </div>
    <div class="resume-box eleventh">
      <h3>توضیحات اضافی</h3>
      <hr />
      <form  >
        <textarea
          placeholder="توضیحات اضافی"
          :value="previewMotivation.extraText"
          disabled
        ></textarea>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    previewMotivation() {
      return this.$store.getters["motivations/previewMotivation"];
    },
  },
  data() {
    return {
      options: {
        url: "http://httpbin.org/anything",
      },
      resumeFile: null,
      sending: false,
      sent: false,
      uploadPercent: 0,
      fileSize: 0,
      fileName: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.ninth-tenth-eleventh {
  @include fbx-ai-start-jc-between;
  align-items: stretch;
  > div {
    width: 28%;
    form {
      height: 70%;
      textarea {
        height: calc(100% - 1.5rem);
      }
    }
  }
  .tenth {
    p {
      line-height: 1.8rem;
      text-align: justify;
      color: var(--text-gray);
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    .js-upload {
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
    .uploaded-file {
      background-color: var(--inner-background-color);
      width: calc(100% - 2rem);
      padding: 1rem;
      border-radius: 5px;
      direction: ltr;
      > div {
        @include fbx-ai-center-jc-between;
        span {
          margin-bottom: 0;
          color: var(--black);
          font-size: 0.8rem;
          font-weight: 500;
        }
        a {
          svg {
            fill: none;
            color: var(--text-gray);
            transition: all 0.3s;
          }
          &:hover {
            svg {
              color: var(--red);
            }
          }
        }
      }
    }
    .file-progress {
      progress {
        margin: 0.5rem 0 0 0;
        height: 3px;
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
    }
  }
}

@include mobile-device {
  .ninth-tenth-eleventh {
    flex-wrap: wrap;
    > div {
      width: 100%;
      form {
        height: 10rem;
        textarea {
          height: calc(100% - 1rem);
        }
      }
    }
    .tenth {
      p {
        line-height: 1.5rem;
        font-size: 0.75rem;
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
      .uploaded-file {
        width: calc(100% - 1.5rem);
        padding: 0.75rem;
        > div {
          span {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .ninth-tenth-eleventh {
    flex-wrap: wrap;
    > div {
      width: 100%;
      form {
        height: 12rem;
        textarea {
          height: calc(100% - 1rem);
        }
      }
    }
    .tenth {
      p {
        line-height: 1.5rem;
        font-size: 0.75rem;
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
      .uploaded-file {
        width: calc(40% - 1.5rem);
        padding: 0.75rem;
        > div {
          span {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}

@include large-device {
  .ninth-tenth-eleventh {
    flex-wrap: wrap;
    > div {
      width: 100%;
      form {
        height: 12rem;
        textarea {
          height: calc(100% - 1rem);
        }
      }
    }
    .tenth {
      .uploaded-file {
        width: calc(30% - 1.5rem);
      }
    }
  }
}

.uploaded-file-info,
.js-upload {
  display: flex;
  padding: 30px 15px;
  gap: 30px;
  flex-direction: row-reverse;
  width: calc(100% - 30px);
  height: 15%;
  align-items: center;
  background-color: rgba(241, 240, 240, 0.45);

  > div {
    width: 100%;
    direction: ltr;
    display: flex;
    flex-direction: column;
    align-items: center;

    > .left {
      width: 100% !important;
      display: flex;
      flex-direction: column;
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
</style>
