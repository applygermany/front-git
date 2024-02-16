<template>
  <div class="ninth-tenth-eleventh">
    <div :class="'resume-box ninth '+(canFill ? 'fade' : '')">
      <h3>9- تفریحات (اختیاری)</h3>
      <hr />
      <form @submit.prevent="">
        <div class="row">
          <div class="form-group w-100">
            <input
              :value="hobbyTitle"
              placeholder=" "
              @change="changeHobbyTitle({ val: $event.target.value })"

              @keydown.enter="addHobby"
              :class="{ 'error-input': errors.includes('hobbyTitle') }"
            />
            <label class="floating">عنوان تفریح</label>
            <a @click="addHobby" class="plus">
              اضافه کردن
              <!-- <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M12 5.75V18.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.25 12H5.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg> -->
            </a>
          </div>
        </div>
      </form>
      <div class="items">
        <div class="item" v-for="(hobby, index) in resume.hobbies" :key="index">
          <span>{{ hobby.title }}</span>
          <button
            type="button"
            class="uk-icon uk-close"
            @click="deleteHobby(index)"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                x1="1"
                y1="1"
                x2="13"
                y2="13"
              ></line>
              <line
                fill="none"
                stroke="#000"
                stroke-width="1.1"
                x1="13"
                y1="1"
                x2="1"
                y2="13"
              ></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
      <div :class="'resume-box tenth '+(canFill ? 'fade' : '')">
      <h3>10- آپلود رزومه (اختیاری)</h3>
      <hr />
      <p>
        چنـانچـه از قبـل رزومـه خود را طراحـی کرده‌ایـد، آن را آپلود کنید. تکمیل
        یا ناقص بودن آن اهمیتی ندارد
      </p>
      <template v-if="!resume.user_file_name">
        <dropzone
          id="resume"
          ref="resume"
          @vdropzone-file-added="uploadPDF"
          :options="options"
          :destroyDropzone="true"
          :useCustomSlot="true"
          :include-styling="false"
        >
          <div class="dropzone-custom-content">
            <div
              class="js-upload uk-placeholder uk-text-center"
              v-if="sending === false && sent === false"
            >
              <span class="uk-text-middle latin-font">Drag and drop or</span>

              <span class="uk-link latin-font">Browse</span>

              <br /><span class="rule latin-font"
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
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M17.25 6.75L6.75 17.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.75 6.75L17.25 17.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
          <progress
            class="uk-progress"
            :value="uploadPercent"
            max="100"
          ></progress>
        </div>
        <div class="uploaded-file" v-if="sending === false && sent === true">
          <div>
            <span class="latin-font">{{ fileName }}</span>
            <a @click="deleteuploadPDF">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M17.25 6.75L6.75 17.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.75 6.75L17.25 17.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="uploaded-file">
          <div>
            <span class="latin-font">{{ resume.user_file_name }}</span>
            <a @click="deleteuploadPDF">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M17.25 6.75L6.75 17.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M6.75 6.75L17.25 17.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </template>
    </div>
      <div :class="'resume-box eleventh '+(canFill ? 'fade' : '')">
      <h3>11- توضیحات (اختیاری)</h3>
      <hr />
      <form @submit.prevent="">
        <div class="row">
          <div class="form-group w-100">
            <textarea placeholder="نوشتن" @input="changeResumeText($event.target.value)">{{resume.text}}</textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Dropzone from "nuxt-dropzone";
  import {mapMutations} from "vuex";

  export default {
  props: ["resume"],
  components: {
    Dropzone,
  },
  data() {
    return {

      sending: false,
      sent: false,
      options: {
        url: "http://httpbin.org/anything",
      },
      uploadPercent: 0,
      fileSize: 0,
      fileName: 0,
      errors: [],
    };
  },
    computed: {
      hobbyTitle(){
        return this.$store.getters["resume/hobbyTitle"]
      },
      canFill(){
        return this.$store.getters["resume/canFill"]
      }
    },
  methods: {
    ...mapMutations({
      deleteHobby: "resume/Delete_Hobby",
      changeResumeText: "resume/Set_Text",
      changeHobbyTitle: "resume/Set_HobbyTitle",
    }),
    removeFromError(name) {
      this.errors = this.errors.filter((item) => item != name);
    },
    async addHobby() {
      setTimeout(() => {

        this.errors = [];

        if (this.hobbyTitle == null || this.hobbyTitle == "")
          this.errors.push("hobbyTitle");

        if (this.errors.length != 0) return;
        this.$store.commit("resume/Add_Hobby",this.hobbyTitle);
        setTimeout(() => {
          this.changeHobbyTitle({val: "",index: 0});
        },100)
      },2)
    },
    async uploadPDF() {
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
      this.sending = true;
      const fd = new FormData();
      fd.append("id", this.$store.getters["resume/resumeId"]);
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
        .post("v1/user/resume/uploadPDF", fd, {
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
        .post("v1/user/resume/deletePDF", {
          id: this.$store.getters["resume/resumeId"],
        })
        .then((res) => {
          if (res.data.status === 1) {
            this.$toasted.success(res.data.msg, {
              position: "bottom-left",
              duration: 5000,
            });
            this.sending = false;
            this.sent = false;
            this.$store.commit["resume/Remove_file"];
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

.ninth-tenth-eleventh {
  @include fbx-ai-start-jc-between;
  align-items: stretch;
  gap: 10px;
  > div {
    width: 26%;
  }
  .ninth {
    form {
      .row {
        @include fbx-ai-center-jc-between;
        flex-wrap: wrap;
      }
      .plus {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--main-color);
        position: absolute;
        left: 0.75rem;
        top: 0.75rem;
        svg {
          color: var(--gray);
        }
      }
    }
    .items {
      margin-top: 1rem;
      @include fbx-ai-start-jc-start;
      flex-wrap: wrap;
      width: 100%;
      margin-left: -0.5rem;
      margin-right: -0.5em;
      .item {
        margin-left: 0.5rem;
        margin-right: 0.5em;
        margin-bottom: 0.5rem;
        @include fbx-ai-center-jc-between;
        border-radius: 5px;
        padding: 0.5rem 0.75rem;
        background-color: var(--main-color);
        span {
          font-size: 0.8rem;
          color: var(--white);
          margin-left: 1rem;
        }
        button {
          color: var(--white);
          svg {
            width: 0.75rem;
          }
        }
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
  .eleventh {
    form {
      height: 70%;

      .row {
        height: 100%;

        .form-group {
          height: 100%;

          textarea {
            height: 85%;

            &::placeholder {
              color: var(--text-gray);
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .ninth-tenth-eleventh {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
    .ninth {
      .items {
        .item {
          padding: 0.5rem 0.5rem;
        }
      }
    }
    .eleventh {
      form {
        height: 40%;
        position: relative;
        textarea {
          font-size: 0.8rem;
          border: 1px solid var(--gray);
          border-radius: 5px;
          width: calc(99.8% - 1.5rem);
          padding: 0.75rem;
          color: var(--black);
          background-color: var(--white);
          transition: all 0.3s;
          height: 5rem;
          &.error {
            border: 1px solid red;
            &:focus {
              outline: 0;
              border-color: red;
            }
          }
          &::placeholder {
            font-family: iransansx;
            font-size: 0.8rem;
            color: var(--main-color);
            direction: rtl;
            text-align: right;
            font-weight: 300;
            transition: 0.2s ease-in;
          }
          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }
        }
        .floating {
          top: 0.75rem;
          right: 0.75rem;
          position: absolute;
          pointer-events: none;
          transition: 0.2s ease all;
          background-color: var(--white);
          color: var(--text-gray);
          font-size: 0.8rem;
          font-weight: 300;
        }
        span.error {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: red;
        }
        textarea:focus ~ label,
        textarea:not(:placeholder-shown) ~ label {
          top: -7%;
          padding: 0 0.5rem;
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
    }
    .ninth {
      .items {
        .item {
          padding: 0.5rem 0.5rem;
        }
      }
    }
    .eleventh {
      form {
        height: 40%;
        position: relative;
        textarea {
          font-size: 0.8rem;
          border: 1px solid var(--gray);
          border-radius: 5px;
          width: calc(99.8% - 1.5rem);
          padding: 0.75rem;
          color: var(--black);
          background-color: var(--white);
          transition: all 0.3s;
          height: 5rem;
          &.error {
            border: 1px solid red;
            &:focus {
              outline: 0;
              border-color: red;
            }
          }
          &::placeholder {
            font-family: iransansx;
            font-size: 0.8rem;
            color: var(--main-color);
            direction: rtl;
            text-align: right;
            font-weight: 300;
            transition: 0.2s ease-in;
          }
          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }
        }
        .floating {
          top: 0.75rem;
          right: 0.75rem;
          position: absolute;
          pointer-events: none;
          transition: 0.2s ease all;
          background-color: var(--white);
          color: var(--text-gray);
          font-size: 0.8rem;
          font-weight: 300;
        }
        span.error {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: red;
        }
        textarea:focus ~ label,
        textarea:not(:placeholder-shown) ~ label {
          top: -7%;
          padding: 0 0.5rem;
        }
      }
    }
  }
}

.vpd-icon-btn {
  display: none !important;
}
.dz-preview {
  display: none;
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
