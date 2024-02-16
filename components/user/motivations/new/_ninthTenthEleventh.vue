<template>
  <div class="ninth-tenth-eleventh">
    <div :class="'resume-box ninth '+(canFill ? 'fade' : '')">
      <h3>برنامه پس از فارغ التحصیلی </h3>
      <hr/>
      <form>
        <textarea
            :class="{ 'error-input': errors.includes('afterGraduation') }"
            :value="motivation.afterGraduation"
            @change="changeAfterGraduation($event.target.value)"
            @focus="removeFromError(`afterGraduation`)"
            placeholder="برنامه من برای بعد از تحصیل این هست که خودم را طوری توانمند کنم که در فیلدی مرتبط با رشته تحصیلی در آلمان شغل مناسبی پیدا کنم و بتوانم در آن فیلد مفید باشم. اما اگر در بحث تحقیقات هم بتوانم موقعیت مناسبی پیدا کنم، قطعا ادامه تحصیل برای دکترا خواهم داد. نکته مهم در این رابطه این است که آینده من به این رشته تحصیلی گره خورده است و اگر کاری یا تحصیلی باشد قطعا در همین زمینه خواهد بود."
        ></textarea>
      </form>
    </div>
    <div :class="'resume-box tenth '+(canFill ? 'fade' : '')">
      <h3>آپلود رزومه (اختیاری)</h3>
      <hr/>
      <p>
        چنـانچـه از قبـل رزومـه خود را طراحـی کرده‌ایـد، آن را آپلود کنید. تکمیل
        یا ناقص بودن آن اهمیتی ندارد
      </p>
      <template v-if="!motivation.resumeFile">
        <dropzone :destroyDropzone="true"
                  :include-styling="false"
                  :options="options"
                  :useCustomSlot="true"
                  @vdropzone-file-added="uploadPDF"
                  id="resume"
                  ref="resume"
                  v-if="!sent"
        >
          <div class="dropzone-custom-content">
            <div
                class="js-upload uk-placeholder uk-text-center"
                v-if="sending === false && sent === false"
            >
              <span class="uk-text-middle latin-font">Drag and drop or</span>

              <span class="uk-link latin-font">Browse</span>

              <br/><span class="rule latin-font"
            >Only PDF files are allowed</span
            >
            </div>
          </div>
        </dropzone>
        <div
            class="uploaded-file file-progress"
            v-if="sending === true && sent === false"
        >
          <div>
            <span class="latin-font">{{ fileName }}</span>
            <a @click="deleteuploadPDF">
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
          <progress
              :value="uploadPercent"
              class="uk-progress"
              max="100"
          ></progress>
        </div>
        <div class="uploaded-file" v-if="sending === false && sent === true">
          <div>
            <span class="latin-font">{{ fileName }}</span>
            <a @click="deleteuploadPDF">
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
        </div>
      </template>
      <template v-else>
        <div class="uploaded-file">
          <div>
            <span class="latin-font">{{ motivation.resumeFile }}</span>
            <a @click="deleteuploadPDF">
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
        </div>
      </template>
    </div>
    <div :class="'resume-box eleventh '+(canFill ? 'fade' : '')">
      <h3>توضیحات اضافی (اختیاری)</h3>
      <hr/>
      <form>
        <textarea
            :value="motivation.extraText"
            @change="changeExtraText($event.target.value)"
            placeholder="توضیحات اضافی"
        ></textarea>
      </form>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import Dropzone from "nuxt-dropzone";
import DeleteIcon from "@/components/svg/delete-icon.vue";

export default {
  components: {
    DeleteIcon,
    Dropzone,
  },
  computed: {
    motivation() {
      return this.$store.getters["motivations/motivation"];
    },
    canFill() {
      return this.$store.getters['motivations/canFill'];
    },
    errors() {
      return this.$store.getters["motivations/errors"];
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
  methods: {
    ...mapMutations({
      changeAfterGraduation: "motivations/SET_MotivationAfterGraduation",
      changeExtraText: "motivations/SET_MotivationExtraText",
    }),

    chooseFile() {
      if (this.$refs.resume.dropzone.files.length === 0) {
        this.$toasted.error("لطفا ابتدا یک فایل را انتخاب کنید", {
          position: "bottom-left",
          duration: 5000,
        });
        return false;
      }
      if (this.$refs.resume.dropzone.files[0].type !== "application/pdf") {
        this.$toasted.error("لطفا فایل با پسوند Pdf ارسال کنید", {
          position: "bottom-left",
          duration: 5000,
        });
        return false;
      }

      const file = this.$refs.resume.dropzone.files[0];
      this.$store.commit('motivations/SET_ResumeFile', file);
      this.sent = true;
      const fd = new FormData();
      fd.append("file", file);
      var _size = file.size;
      var fSExt = ["Bytes", "KB", "MB", "GB"],
          i = 0;
      while (_size > 900) {
        _size /= 1024;
        i++;
      }
      this.fileSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
      this.fileName = file.name;
    },
    removeFromError(name) {
      this.$store.dispatch("motivations/removeFromError", name);
      return true;
    },
    async uploadPDF() {
      if (this.$refs.resume.dropzone.files.length === 0) {
        this.$toasted.error("لطفا ابتدا یک فایل را انتخاب کنید", {
          position: "bottom-left",
          duration: 5000,
        });
        return false;
      }

      this.$refs.resume.dropzone.files[0] = this.$refs.resume.dropzone.files[this.$refs.resume.dropzone.files.length - 1];
      if (this.$refs.resume.dropzone.files[0].type !== "application/pdf") {
        this.$toasted.error("لطفا فایل با پسوند Pdf ارسال کنید", {
          position: "bottom-left",
          duration: 5000,
        });
        return false;
      }

      const file = this.$refs.resume.dropzone.files[0];
      this.sending = true;
      const fd = new FormData();
      fd.append("id", this.$store.getters["motivations/motivationId"]);
      fd.append("file", file);
      var _size = file.size;
      var fSExt = ["Bytes", "KB", "MB", "GB"],
          i = 0;
      while (_size > 900) {
        _size /= 1024;
        i++;
      }
      this.fileSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
      this.fileName = file.name;
      this.$axios
          .post("v1/user/motivation/uploadResume", fd, {
            onUploadProgress: (uploadEvent) => {
              this.uploadPercent = Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
              );
            },
          })
          .then((res) => {
            if (res.data.status === 1) {
              this.$toasted.success(res.data.msg, {
                position: "bottom-left",
                duration: 5000,
              });
              this.sending = false;
              this.sent = true;
            } else {
              this.$toasted.info(res.data.msg, {
                position: "bottom-left",
                duration: 5000,
              });
              this.sending = false;
            }
          });
    },
    async deleteuploadPDF() {
      this.$axios
          .post("v1/user/motivation/deletePDF", {
            id: this.$store.getters["motivations/motivationId"],
          })
          .then((res) => {
            if (res.data.status === 1) {
              this.$toasted.success(res.data.msg, {
                position: "bottom-left",
                duration: 5000,
              });
              this.sending = false;
              this.sent = false;
              this.$store.commit["motivations/Remove_ResumeFile"];
            } else {
              this.$toasted.info(res.data.msg, {
                position: "bottom-left",
                duration: 5000,
              });
            }
          });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

textarea::placeholder {
  color: var(--text-gray);
}

.ninth-tenth-eleventh {
  @include fbx-ai-start-jc-between;
  align-items: stretch;
  gap: 10px;

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
.upload-progressing {
  display: flex;
  padding: 30px 15px;
  gap: 30px;
  flex-direction: row-reverse;
  width: calc(100% - 30px);
  height: 30%;
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
