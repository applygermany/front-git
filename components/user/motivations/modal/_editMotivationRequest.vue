<template>
  <div id="edit-motivation-request" class="edit-motivation-request" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>درخواست ویرایش انگیزه نامه</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="text">
        <p class="explain">
          ابتدا انگیزه نامه خود را دانلـود کنیـد. سپــس قسمت هـای مورد نظــر
          برای ویـرایش را هایلایت کرده و مجددا در قسمت زیر آپلود کنید. در کادر
          زیر می توانید توضیحات خود را وارد کنید
        </p>
        <form  >
          <textarea
            rows="7"
            placeholder="توضیحات"
            v-model="editRequestText"
            :class="{ 'error-input': errors.includes('editRequestText') }"
          ></textarea>
        </form>
        <div class="upload-button">
          <dropzone
            id="editFile"
            ref="editFile"
            @vdropzone-file-added="uploadResume"
            :options="options"
            :destroyDropzone="true"
            :useCustomSlot="true"
            :include-styling="false"
            v-if="sending === false && sent === false"
          >
            <div class="dropzone-custom-content">
              <div
                class="js-upload uk-placeholder uk-text-center"
                :class="{ 'error-input': errors.includes('file') }"
              >
                <span class="uk-text-middle latin-font">Drag and drop or</span>
                <span class="uk-link latin-font">Browse</span>
                <br />
                <span class="rule latin-font">
                  Only PDF files are allowed
                </span>
              </div>
            </div>
          </dropzone>
          <!-- <div
            class="upload-progressing"
            v-if="sending === true && sent === false"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDc4IDkwIj4NCiAgPGcgaWQ9Ikljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjkgLTkwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjMiIGRhdGEtbmFtZT0iUGF0aCAyMyIgZD0iTTYsMEg2M0w3OCwxNVY4NGE2LDYsMCwwLDEtNiw2SDZhNiw2LDAsMCwxLTYtNlY2QTYsNiwwLDAsMSw2LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjkgOTApIiBmaWxsPSIjZGJkYWUxIiBvcGFjaXR5PSIwLjU2Ii8+DQogICAgPHBhdGggaWQ9IlBhdGgiIGQ9Ik0xNTEuNTExLDE4OS4wMzFhMzkuODUzLDM5Ljg1MywwLDAsMS0zLjI4OC0yLjgzN2MtMS4wNDctMS4wNDctMS45ODEtMi4wNjItMi43OTItMy4wMjksMS4yNjUtMy45MDksMS44MTktNS45MjQsMS44MTktNywwLTQuNTY0LTEuNjQ5LTUuNS00LjEyNS01LjUtMS44ODEsMC00LjEyNS45NzgtNC4xMjUsNS42MzIsMCwyLjA1MiwxLjEyNCw0LjU0MywzLjM1Miw3LjQzOC0uNTQ1LDEuNjY0LTEuMTg2LDMuNTgzLTEuOTA1LDUuNzQ2LS4zNDcsMS4wMzgtLjcyMiwyLTEuMTIsMi44ODgtLjMyMy4xNDQtLjYzOC4yOS0uOTQxLjQ0Mi0xLjA5My41NDctMi4xMzEsMS4wMzgtMy4wOTQsMS40OTUtNC4zOTEsMi4wNzktNy4yOTEsMy40NTQtNy4yOTEsNi4xNjksMCwxLjk3MSwyLjE0MiwzLjE5Miw0LjEyNSwzLjE5MiwyLjU1NywwLDYuNDE3LTMuNDE1LDkuMjM3LTkuMTY3YTU0LjcsNTQuNywwLDAsMSw5LjQzOC0yLjU0NmMyLjMsMS43Nyw0Ljg0MywzLjQ2Myw2LjA3NSwzLjQ2MywzLjQwOSwwLDQuMTI1LTEuOTcxLDQuMTI1LTMuNjI0LDAtMy4yNTEtMy43MTQtMy4yNTEtNS41LTMuMjUxQTMyLjU2NywzMi41NjcsMCwwLDAsMTUxLjUxMSwxODkuMDMxWm0tMTkuMzg2LDExLjg4NWEyLjE3NCwyLjE3NCwwLDAsMS0xLjM3NS0uNDQyYzAtLjk3NSwyLjkwNy0yLjM1Myw1LjcxOS0zLjY4NWwuNTQ0LS4yNTdDMTM0Ljk0NywxOTkuNTI4LDEzMi45MDUsMjAwLjkxNiwxMzIuMTI1LDIwMC45MTZaTTE0MS43NSwxNzYuM2MwLTIuODgyLjg5NC0yLjg4MiwxLjM3NS0yLjg4Mi45NzIsMCwxLjM3NSwwLDEuMzc1LDIuNzVhMjIuMDUxLDIyLjA1MSwwLDAsMS0xLjA5NCw0LjI5NEE4LjQ0OSw4LjQ0OSwwLDAsMSwxNDEuNzUsMTc2LjNabTEuMDU0LDE0Ljc3OXEuMTI5LS4zNTguMjUtLjcyNWMuNTEtMS41MzEuOTctMi45MDYsMS4zNzktNC4xNDRxLjg1Ni45NDMsMS44NDUsMS45MzFjLjI1OC4yNTguOS44MzgsMS43NDgsMS41NjRDMTQ2LjMzMSwxOTAuMDcyLDE0NC41MjgsMTkwLjUzLDE0Mi44LDE5MS4wNzZabTE1LjQ0Ni43MTZjMCwuNjE4LDAsLjg3NC0xLjI3Ni44ODJhMTAuMTMyLDEwLjEzMiwwLDAsMS0yLjMxLTEuMzE5Yy4zODgtLjA0My42NzQtLjA2NC44MzUtLjA2NEMxNTcuNTMyLDE5MS4yOTEsMTU4LjEwOCwxOTEuNDksMTU4LjI1LDE5MS43OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy41IC01Mi4xNjYpIiBmaWxsPSIjMzMzIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC4yNSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="
              class="dark-icon"
              alt=""
            />
            <div>
              <div class="top">
                <span class="name latin-font">{{ fileName }}</span>
              </div>
              <div class="bottom">
                <span class="size latin-font">{{ fileSize }}</span>
                <span class="percent latin-font">{{ uploadPercent }}%</span>
              </div>
              <progress
                class="uk-progress"
                :value="uploadPercent"
                max="100"
              ></progress>
            </div>
          </div> -->
          <div
            class="upload-progressing"
            v-if="sending === true && sent === false && file !== null"
          >
            <div class="top">
              <span class="name latin-font">{{ fileName }}</span>
              <a @click="deleteResume" class="" uk-close></a>
            </div>
            <progress
              class="uk-progress"
              :value="uploadPercent"
              max="100"
            ></progress>
          </div>
          <!-- <div
            class="uploaded-file-info"
            v-if="sending === false && sent === true"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDc4IDkwIj4NCiAgPGcgaWQ9Ikljb24iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjkgLTkwKSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjMiIGRhdGEtbmFtZT0iUGF0aCAyMyIgZD0iTTYsMEg2M0w3OCwxNVY4NGE2LDYsMCwwLDEtNiw2SDZhNiw2LDAsMCwxLTYtNlY2QTYsNiwwLDAsMSw2LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjkgOTApIiBmaWxsPSIjZGJkYWUxIiBvcGFjaXR5PSIwLjU2Ii8+DQogICAgPHBhdGggaWQ9IlBhdGgiIGQ9Ik0xNTEuNTExLDE4OS4wMzFhMzkuODUzLDM5Ljg1MywwLDAsMS0zLjI4OC0yLjgzN2MtMS4wNDctMS4wNDctMS45ODEtMi4wNjItMi43OTItMy4wMjksMS4yNjUtMy45MDksMS44MTktNS45MjQsMS44MTktNywwLTQuNTY0LTEuNjQ5LTUuNS00LjEyNS01LjUtMS44ODEsMC00LjEyNS45NzgtNC4xMjUsNS42MzIsMCwyLjA1MiwxLjEyNCw0LjU0MywzLjM1Miw3LjQzOC0uNTQ1LDEuNjY0LTEuMTg2LDMuNTgzLTEuOTA1LDUuNzQ2LS4zNDcsMS4wMzgtLjcyMiwyLTEuMTIsMi44ODgtLjMyMy4xNDQtLjYzOC4yOS0uOTQxLjQ0Mi0xLjA5My41NDctMi4xMzEsMS4wMzgtMy4wOTQsMS40OTUtNC4zOTEsMi4wNzktNy4yOTEsMy40NTQtNy4yOTEsNi4xNjksMCwxLjk3MSwyLjE0MiwzLjE5Miw0LjEyNSwzLjE5MiwyLjU1NywwLDYuNDE3LTMuNDE1LDkuMjM3LTkuMTY3YTU0LjcsNTQuNywwLDAsMSw5LjQzOC0yLjU0NmMyLjMsMS43Nyw0Ljg0MywzLjQ2Myw2LjA3NSwzLjQ2MywzLjQwOSwwLDQuMTI1LTEuOTcxLDQuMTI1LTMuNjI0LDAtMy4yNTEtMy43MTQtMy4yNTEtNS41LTMuMjUxQTMyLjU2NywzMi41NjcsMCwwLDAsMTUxLjUxMSwxODkuMDMxWm0tMTkuMzg2LDExLjg4NWEyLjE3NCwyLjE3NCwwLDAsMS0xLjM3NS0uNDQyYzAtLjk3NSwyLjkwNy0yLjM1Myw1LjcxOS0zLjY4NWwuNTQ0LS4yNTdDMTM0Ljk0NywxOTkuNTI4LDEzMi45MDUsMjAwLjkxNiwxMzIuMTI1LDIwMC45MTZaTTE0MS43NSwxNzYuM2MwLTIuODgyLjg5NC0yLjg4MiwxLjM3NS0yLjg4Mi45NzIsMCwxLjM3NSwwLDEuMzc1LDIuNzVhMjIuMDUxLDIyLjA1MSwwLDAsMS0xLjA5NCw0LjI5NEE4LjQ0OSw4LjQ0OSwwLDAsMSwxNDEuNzUsMTc2LjNabTEuMDU0LDE0Ljc3OXEuMTI5LS4zNTguMjUtLjcyNWMuNTEtMS41MzEuOTctMi45MDYsMS4zNzktNC4xNDRxLjg1Ni45NDMsMS44NDUsMS45MzFjLjI1OC4yNTguOS44MzgsMS43NDgsMS41NjRDMTQ2LjMzMSwxOTAuMDcyLDE0NC41MjgsMTkwLjUzLDE0Mi44LDE5MS4wNzZabTE1LjQ0Ni43MTZjMCwuNjE4LDAsLjg3NC0xLjI3Ni44ODJhMTAuMTMyLDEwLjEzMiwwLDAsMS0yLjMxLTEuMzE5Yy4zODgtLjA0My42NzQtLjA2NC44MzUtLjA2NEMxNTcuNTMyLDE5MS4yOTEsMTU4LjEwOCwxOTEuNDksMTU4LjI1LDE5MS43OTJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy41IC01Mi4xNjYpIiBmaWxsPSIjMzMzIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMC4yNSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="
              class="dark-icon"
              alt=""
            />
            <div>
              <div class="left">
                <span class="name latin-font">{{ fileName }}</span>
                <span class="size latin-font">{{ fileSize }}</span>
              </div>
              <div class="right"></div>
            </div>
          </div> -->
          <div
            class="uploaded-file-info"
            v-if="sending === false && sent === true && file !== null"
          >
            <div class="left">
              <span class="name latin-font">{{ fileName }}</span>
            </div>
            <div class="right">
              <a @click="deleteResume" class="" uk-close></a>
            </div>
          </div>
          <button
            type="button"
            @click="sendEditRequest"
            v-if="sending === false"
          >
            ثبت و ارسال
          </button>
          <button type="button" v-else>چند لحظه صبر کنید</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropzone from "nuxt-dropzone";

export default {
  components: {
    Dropzone,
  },
  data() {
    return {
      options: {
        url: "http://httpbin.org/anything",
      },
      editRequestText: "",
      sending: false,
      sent: false,
      uploadPercent: 0,
      fileSize: 0,
      fileName: 0,
      file: null,
      errors: [],
    };
  },
  computed: {
    editRequestId() {
      return this.$store.getters.editRequestId;
    },
  },
  methods: {
    async uploadResume() {
      if (this.$refs.editFile.dropzone.files.length === 0) {
        this.$toasted.error("لطفا ابتدا یک فایل را انتخاب کنید", {
          position: "bottom-left",
          duration: 5000,
        });
        return false;
      }
      this.$refs.editFile.dropzone.files[0] = this.$refs.editFile.dropzone.files[this.$refs.editFile.dropzone.files.length - 1];

      if (this.$refs.editFile.dropzone.files[0].type !== "application/pdf") {
        this.$toasted.error("لطفا فایل با پسوند Pdf ارسال کنید", {
          position: "bottom-left",
          duration: 5000,
        });
        return false;
      }

      const file = this.$refs.editFile.dropzone.files[0];
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
      this.file = file;
    },
    async deleteResume() {
      this.fileName = null;
      this.file = null;
      this.sent = false;
      this.sending = false;
    },
    async sendEditRequest() {
      this.errors = [];

      if (this.editRequestText == null || this.editRequestText == "")
        this.errors.push("editRequestText");
      if (this.errors.length != 0) return;

      this.sent = false;
      this.sending = true;
      const fd = new FormData();
      fd.append("id", this.editRequestId);
      fd.append("editRequestText", this.editRequestText);
      if (this.file != null) fd.append("file", this.file);
      
      try {
        await this.$store.dispatch("motivations/sendEditRequest", fd);
      } catch (err) {
        if (err.message.includes("موفقیت")) {
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
          this.editRequestId = null;
          this.editRequestText = null;
          this.sending = false;
          this.sent = true;
          location.reload();

        } else {
          this.$toasted.error(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
          this.sending = false;
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.edit-motivation-request {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    border-radius: 8px;
    > .title {
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
        font-size: 0.9rem;
        font-weight: bold;
        color: var(--black);
      }
    }
    > .text {
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      .explain {
        line-height: 1.8rem;
        font-size: 0.8rem;
        color: var(--black);
        font-weight: 500;
      }
      form {
        margin-top: 2rem;
        width: 100%;
        textarea {
          border: 1px solid var(--gray);
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 0.8rem;
          color: var(--black);
          background-color: var(--white);
          width: calc(99.8% - 1.5rem);
          transition: all 0.3s;
          &::placeholder {
            color: var(--text-gray);
            font-size: 0.8rem;
          }
          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }
        }
      }
      .upload-button {
        margin-top: 2rem;
        @include fbx-ai-start-jc-between;
        align-items: flex-end;

        .js-upload {
          cursor: pointer;
          background-color: rgba(#f1f0f0, 0.45);
          margin-bottom: 0;
          padding-right: 0;
          padding-left: 0;
          width: 250px;
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
          width: 40%;
          direction: ltr;
          padding: 1rem;
          border-radius: 5px;
          @include fbx-ai-start-jc-between;
          background-color: rgba(#f1f0f0, 0.45);
          .left {
            @include fbx-column-ai-start-jc-start;
            .name {
              font-weight: 500;
              font-size: 1rem;
              color: var(--black);
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
        }
        .upload-progressing {
          direction: ltr;
          background-color: rgba(#f1f0f0, 0.45);
          width: 40%;
          padding: 1rem;
          border-radius: 5px;
          .top {
            @include fbx-ai-center-jc-between;
            .name {
              font-weight: 500;
              font-size: 1rem;
              color: var(--black);
            }
            a {
              transition: all 0.3s;
              &:hover {
                color: #ff3434;
              }
            }
          }
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
        button {
          cursor: pointer;
          text-align: center;
          width: 25%;
          border-radius: 5px;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          color: var(--black);
          font-size: 0.8rem;
          font-weight: 500;
          background-color: var(--inner-background-color);
          border: 1px solid var(--inner-background-color);
          transition: all 0.3s;
          &:hover {
            background-color: var(--light-main-color);
            color: #2b2827;
            border-color: var(--light-main-color);
          }
        }
      }
    }
  }
}

@include mobile-device {
  .edit-motivation-request {
    .uk-modal-body {
      z-index: 9999;
      > .title {
        padding: 0.75rem 1.25rem;
        p {
          font-size: 0.8rem;
        }
      }
      > .text {
        padding: 0.75rem 1.25rem 1.25rem 1.25rem;
        .explain {
          font-size: 0.75rem;
        }
        form {
          margin-top: 1.5rem;
          textarea {
            padding: 0.5rem;
            font-size: 0.75rem;
            width: calc(99.8% - 1rem);
            &::placeholder {
              font-size: 0.75rem;
            }
          }
        }
        .upload-button {
          margin-top: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
          .js-upload {
            margin-bottom: 1.5rem;
            width: 100%;
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
            margin-bottom: 1.5rem;
            width: 100%;
            padding: 0.75rem;
            .left {
              .name {
                font-size: 0.9rem;
              }
            }
          }
          .upload-progressing {
            margin-bottom: 1.5rem;
            width: 100%;
            padding: 0.75rem;
            .top {
              .name {
                font-size: 0.9rem;
              }
            }
          }
          button {
            width: 40%;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}
</style>
