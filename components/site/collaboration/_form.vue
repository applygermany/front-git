<template>
    <section class="form uk-container">
        <form>
            <div class="right">
                <div class="row">
                    <div class="form-group w-50">
                        <label for="name">نام</label>
                        <input
                                id="name"
                                v-model="form.name"
                                :class="{ 'error-input': errors.includes('name') }"
                                @focus="removeFromError('name')"
                        />
                        <div v-if="errors.includes('name')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <label for="family">نام خانوادگی</label>
                        <input
                                id="family"
                                v-model="form.family"
                                :class="{ 'error-input': errors.includes('family') }"
                                @focus="removeFromError('family')"
                        />
                        <div v-if="errors.includes('family')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group w-50">
                        <label for="email">ایمیل یا شماره همراه</label>
                        <input
                                id="email"
                                v-model="form.email"
                                :class="{ 'error-input': errors.includes('email') }"
                                @focus="removeFromError('email')"
                        />
                        <div v-if="errors.includes('email')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <label for="major">رشته تحصیلی</label>
                        <input
                                id="major"
                                v-model="form.field"
                                :class="{ 'error-input': errors.includes('field') }"
                                @focus="removeFromError('field')"
                        />
                        <div v-if="errors.includes('field')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group w-100">
                        <label for="explain">شرح درخواست</label>
                        <textarea
                                rows="10"
                                id="explain"
                                v-model="form.text"
                                :class="{ 'error-input': errors.includes('text') }"
                                @focus="removeFromError('text')"
                        ></textarea>
                        <div v-if="errors.includes('text')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                    </div>
                </div>
            </div>
            <div class="left">
                <div class="row w-100">
                    <div class="form-group w-100">
                        <label for="birthday">تاریخ تولد</label>
                        <input
                                id="birthday"
                                v-model="form.birthDate"
                                autocomplete="off"
                                :class="{ 'error-input': errors.includes('birthDate') }"
                                @focus="removeFromError('birthDate')"
                        />
                        <div v-if="errors.includes('birthDate')" class="error">
                            پر کردن این فیلد اجباری است
                        </div>
                        <date-picker
                                v-model="form.birthDate"
                                custom-input="#birthday"
                                color="#e2ad42"
                                format="YYYY-MM-DD"
                                display-format="jDD jMMMM jYYYY"
                        />
                    </div>
                </div>
                <div class="row w-100 row-upload">
                    <div class="form-group w-100">
                        <label>آپلود رزومه</label>
                        <dropzone
                                id="resume"
                                ref="resume"
                                @vdropzone-file-added="uploadResume"
                                :options="options"
                                :destroyDropzone="true"
                                :useCustomSlot="true"
                                :include-styling="false"
                                v-if="sending === false && sent === false"
                        >
                            <div class="dropzone-custom-content">
                                <div
                                        class="js-upload uk-placeholder uk-text-center uk-form-custom"
                                        uk-form-custom
                                        :class="{ 'error-input': errors.includes('resumeName') }"
                                >
                                    <!-- <input type="file" disabled /> -->
                                    <div>
                    <span class="uk-text-middle latin-font">
                      Drag and drop or
                    </span>
                                        <span class="uk-link latin-font">Browse</span>
                                    </div>
                                    <span class="rule latin-font">
                    Only PDF files are allowed
                  </span>
                                </div>
                                <div v-if="errors.includes('resumeName')" class="error">
                                    پر کردن این فیلد اجباری است
                                </div>
                            </div>
                        </dropzone>
                        <div
                                class="upload-progressing uk-placeholder"
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
                        </div>
                        <div
                                class="uploaded-file-info uk-placeholder"
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
                        </div>
                    </div>
                </div>
                <div class="row submit w-100">
                    <button
                            type="button"
                            @click="sendCollaboration"
                            v-if="sendingCollaboration === false"
                    >
                        ارسال درخواست
                    </button>
                    <button type="button" v-else>چند لحظه صبر کنید</button>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import Dropzone from "nuxt-dropzone";

export default {
    components: {Dropzone},
    data() {
        return {
            options: {
                url: "http://httpbin.org/anything",
                acceptedFiles: ["application/pdf"],
            },
            sending: false,
            sent: false,
            form: {
                resumeName: null,
                name: null,
                family: null,
                email: null,
                field: null,
                text: null,
                birthDate: null,
            },
            uploadPercent: 0,
            fileSize: 0,
            fileName: 0,
            sendingCollaboration: false,
            errors: [],
        };
    },
    methods: {
        removeFromError(name) {
            this.errors = this.errors.filter((item) => item != name);
            return true;
        },
        async uploadResume() {
            if (this.$refs.resume.dropzone.files.length === 0) {
                this.$toasted.error("لطفا ابتدا یک فایل را انتخاب کنید", {
                    position: "bottom-left",
                    duration: 5000,
                });
                return false;
            }
            this.$refs.resume.dropzone.files[0] =
                this.$refs.resume.dropzone.files[
                this.$refs.resume.dropzone.files.length - 1
                    ];

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
                .post("v1/uploadResumeCollaboration", fd, {
                    onUploadProgress: (uploadEvent) => {
                        this.uploadPercent = Math.round(
                            (uploadEvent.loaded / uploadEvent.total) * 100
                        );
                    },
                })
                .then((res) => {
                    if (res.data.status === 1) {
                        this.form.resumeName = res.data.name;
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
        async sendCollaboration() {
            this.errors = [];

            for (const key in this.form) {
                if (this.form[key] == null || this.form[key] == "")
                    if (key != "resumeName") this.errors.push(String(key));
            }

            if (this.errors.length != 0) return;

            this.sendingCollaboration = true;

            try {
                await this.$store.dispatch("sendCollaboration", this.form);
            } catch (err) {
                if (err.message.includes("موفقیت")) {
                    this.$toasted.success(err.message, {
                        position: "bottom-left",
                        duration: 5000,
                    });

                    this.form = {
                        resumeName: null,
                        name: null,
                        family: null,
                        email: null,
                        field: null,
                        text: null,
                        birthDate: null,
                    };
                } else {
                    this.$toasted.info(err.message, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
            }

            this.sendingCollaboration = false;
            this.sending = false;
            this.sent = false;
        },
    },
};
</script>
<style lang="scss" scoped>
@import "@/assets/site/css/mixins.scss";

.error {
  color: red !important;
  font-size: 14px;
  padding-top: 5px;
  font-weight: 600;
}

.form {
  margin-top: 3rem;

  form {
    @include fbx-ai-start-jc-between;
    align-items: stretch;

    .left {
      @include fbx-column-ai-start-jc-start;
      width: 30%;
    }

    .right {
      width: 67%;
    }

    .row {
      @include fbx-ai-start-jc-between;

      .form-group {
        @include fbx-column-ai-start-jc-start;
        margin-bottom: 1.5rem;

        label {
          color: #5e5e5e;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
          margin-right: 1rem;
        }

        input,
        textarea {
          background-color: rgba(#f1f0f0, 0.45);
          border: 1px solid #d9d9d9;
          border-radius: 5px;
          padding: 0.75rem;
          width: calc(99.5% - 1.5rem);
          transition: all 0.3s;

          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }
        }
      }

      &.row-upload {
        height: 100%;

        .form-group {
          height: 100%;

          .js-upload {
            @include fbx-column-ai-center-jc-center;
            padding-right: 0;
            padding-left: 0;
            width: 100%;
            height: 100%;
            margin-top: 0;
            margin-bottom: 1.5rem;
            border-radius: 5px;
            direction: ltr;
            border-color: var(--gray);
            background-color: rgba(#f1f0f0, 0.45);

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
        }
      }

      &.submit {
        margin-bottom: 1.5rem;
        margin-top: auto;

        button {
          cursor: pointer;
          color: var(--white);
          background-color: #e6c55b;
          width: 100%;
          font-size: 0.8rem;
          text-align: center;
          font-weight: 600;
          border-radius: 5px;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          border: 0;
        }
      }
    }
  }
}

@include mobile-device {
  .form {
    margin-top: 2rem;

    form {
      flex-wrap: wrap;

      .left {
        width: 100%;
      }

      .right {
        width: 100%;
      }

      .row {
        flex-wrap: wrap;

        .form-group {
          label {
            font-size: 0.75rem;
          }

          input,
          textarea {
            padding: 0.5rem;
            width: calc(99.5% - 1rem);
          }
        }

        &.row-upload {
          .form-group {
            .js-upload {
              .uk-text-middle {
                font-size: 0.9rem;
              }

              .uk-link {
                font-size: 0.9rem;
              }

              .rule {
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }
  }
}

@include tablet-device {
  .form {
    margin-top: 2rem;

    form {
      .row {
        .form-group {
          label {
            font-size: 0.75rem;
          }

          input,
          textarea {
            padding: 0.5rem;
            width: calc(99.5% - 1rem);
          }
        }

        &.row-upload {
          .form-group {
            height: 80%;

            .js-upload {
              .uk-text-middle {
                font-size: 0.9rem;
              }

              .uk-link {
                font-size: 0.9rem;
              }

              .rule {
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }
  }
}

@include large-device {
  .form {
    form {
      .row {
        &.row-upload {
          .form-group {
            height: 80%;
          }
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

#resume {
  width: 100%;
  cursor: pointer;

  > .dz-message {
    height: 100% !important;

    > .dropzone-custom-content {
      width: 100% !important;
      height: 255px;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;

      .js-upload {
        margin: 0 !important;
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
  height: 75%;
  align-items: center;
  background-color: rgba(241, 240, 240, 0.45);

  > div {
    width: 100%;
    direction: ltr;

    > .left {
      width: 100% !important;
    }
  }
}
</style>
