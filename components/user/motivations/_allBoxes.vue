<template>
  <div class="all-boxes">
    <div
      :class="{
        box: motivation.status === 1 || motivation.status === 4 || motivation.status === 6 || motivation.status === 7 || motivation.status === 2,
        'box box-done': motivation.status === 5,
        'box box-new': motivation.status === 3,
      }"
      v-for="(motivation, index) in motivations"
      :key="index"
    >
      <div class="img-text">

        <div class="text">
          <div class="top">
            <div class="right">
              <span>سفارش شماره {{ motivation.id }}</span>
              <span>تاریخ ثبت : {{ motivation.date }}</span>
              <span>
                مبلغ پرداخت شده :
                {{ motivation.price | numberFilter }} {{motivation.currency}}
              </span>
            </div>
            <div class="uk-inline left" v-if="motivation.status === 5">
              <button type="button">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="uk-svg"
                >
                  <path
                    d="M12.5 8C12.5 8.27614 12.2761 8.5 12 8.5C11.7239 8.5 11.5 8.27614 11.5 8C11.5 7.72386 11.7239 7.5 12 7.5C12.2761 7.5 12.5 7.72386 12.5 8Z"
                    stroke="#141414"
                  ></path>
                  <path
                    d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
                    stroke="#141414"
                  ></path>
                  <path
                    d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
                    stroke="#141414"
                  ></path>
                </svg>
              </button>
              <div uk-dropdown="mode: click">
                <ul class="uk-nav uk-dropdown-nav">
                  <li @click="showEditRequestModal(motivation.id)">
                    <a href="#edit-motivation-request" uk-toggle>
                      درخواست ویرایش
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div>
              <span>وضعیت سفارش</span>
              <p v-if="motivation.status === 1 || motivation.status === 4 || motivation.status === 6 || motivation.status === 7 || motivation.status === 2">
                انگیزه نامه شما در مرحله نگارش است. لطفا طی چند روز مجددا مراجعه
                فرمایید .
              </p>
              <p v-if="motivation.status === 5">
                انگیزه نامه آماده است ! می توانیـد آن را از لینک روبرو دانلـود
                کنید .
              </p>
              <p v-if="motivation.status === 3">
                موارد <span>اصلاحیه</span> برای شما ثبت شد! لطفا در اسرع وقت
                درخواست کارشناس را در کادر زیر پاسخ دهید
              </p>
            </div>
            <a @click="downloadFile(motivation.id,motivation.main_file)"
              class="download"
              v-if="
                motivation.main_file !== null && motivation.main_file !== '' && motivation.status === 5
              "
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
                  d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 14.25L12 4.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.75 10.75L12 14.25L15.25 10.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              دانلود انگیزه نامه
            </a>
          </div>
        </div>
      </div>
      <div class="explain" v-if="motivation.status === 3">
        <div class="tips">
          <span>شرح اصلاحیه</span>
          <div class="tips-div" v-html="motivation.admin_edit"></div>
        </div>
        <form>
          <textarea
            rows="7"
            placeholder="توضیحات خود را وارد کنید..."
            v-model="extraText"
            :class="{ 'error-input': errors.includes('extraText') }"
            @focus="errors = []"
          >
          </textarea>
          <div class="actions">
            <div
              class="attach"
              v-show="
                motivation.admin_attachments.length > 0
              "
            >
              <p>پیوست های کارشناس</p>
              <div class="d-flex">
                <a style="margin-right: 5px" v-for="(item,index) in motivation.admin_attachments" :href="item">
                  <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          class="uk-svg"
                  >
                    <path
                            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
                            stroke="#141414"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                    ></path>
                    <path
                            d="M12 14.25L12 4.75"
                            stroke="#141414"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                    ></path>
                    <path
                            d="M8.75 10.75L12 14.25L15.25 10.75"
                            stroke="#141414"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                    ></path>
                  </svg>
                  دانلود پیوست  {{1+index}}
                </a>
              </div>
            </div>
            <div class="buttons">
              <nuxt-link
                :to="`/user/motivations/` + motivation.id"
                class="preview"
              >
                پیش نمایش اطلاعات
              </nuxt-link>
              <a
                class="submit"
                @click="updateMotivationExtra(motivation.id, extraText)"
                v-if="updating === false"
              >
                ثبت و ارسال
              </a>
              <a class="submit" v-else> چند لحظه صبر کنید </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      updating: false,
      errors: [],
      extraText: "",
    };
  },
  created() {
    this.$store.dispatch("motivations/getMotivations");
  },
  computed: {
    motivations() {
      return this.$store.getters["motivations/motivations"];
    },
  },
  methods: {
    async downloadFile(id,fileName) {
          try {
              const parts = fileName.split('/');
              let lastPartOfId = parts[parts.length - 1];
              const response = await this.$axios.get('v1/user/getWriterFile/'+id+'/'+lastPartOfId+'/motivation', {
                  responseType: 'blob'
              });
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download',lastPartOfId);
              document.body.appendChild(link);
              link.click();
              window.URL.revokeObjectURL(url);
          } catch (error) {
              console.error('Error downloading file:', error);
              this.$toasted.info('مشکلی رخ داده است، لینک دانلود وجود ندارد و یا اتصال اینترنت شما قطع است !', {
                  position: "bottom-left",
                  duration: 5000,
              });
          }
      },
    showEditRequestModal(id) {
      this.$store.dispatch("setEditRequestId", id);
    },
    async updateMotivationExtra(id, extraText) {
      this.errors = [];
      if (extraText == "") this.errors.push("extraText");
      if (this.errors.length > 0) return;

      this.updating = true;
      try {
        await this.$store.dispatch("motivations/updateMotivationExtra", {
          id: id,
          extraText: extraText,
        });
      } catch (err) {
        if (err.message.includes("موفقیت")) {
          this.$store.dispatch("motivations/getMotivations");
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        } else {
          this.$toasted.error(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        }
      }
      this.updating = false;
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/user/scss/_mixins.scss";

.all-boxes {
  .box {
    margin-bottom: 1.5rem;
    width: 100%;
    background-color: var(--white);
    border-radius: 8px;
    border: 3px solid var(--white);
    .img-text {
      @include fbx-ai-start-jc-start;
      .img {
        width: 30%;
        img {
          width: 100%;
          border-top-right-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
      .text {
        @include fbx-column-ai-start-jc-start;
        padding: 1.5rem 2rem 0 1.5rem;
        width: 70%;
        .top {
          @include fbx-ai-center-jc-between;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--gray);
          width: 100%;
          .right {
            span {
              margin-left: 1.5rem;
              font-size: 0.8rem;
              color: var(--black);
            }
          }
          .left {
            button {
              margin-left: -0.8rem;
              background-color: inherit;
              cursor: pointer;
              border: 0;
              padding: 0;
              svg {
                transition: all 0.3s;
                width: 2rem;
                fill: none;
                color: var(--text-gray);
              }
              &:hover {
                svg {
                  color: var(--black);
                }
              }
            }
            .uk-dropdown {
              left: 0 !important;
              margin-top: 0.5rem;
              padding: 0.5rem 1rem;
              border-radius: 5px;
              background-color: var(--inner-background-color);
              border: 1px solid var(--gray);
              min-width: 130px;
              box-shadow: inherit;
              z-index: 1;
              ul {
                padding-right: 0;
                list-style-type: none;
                li {
                  text-align: center;
                  a {
                    font-size: 0.8rem;
                    color: var(--black);
                    transition: all 0.3s;
                  }
                }
              }
            }
          }
        }
        .bottom {
          padding-bottom: 1.5rem;
          width: 100%;
          margin-top: auto;
          @include fbx-ai-center-jc-between;
          span {
            font-size: 0.8rem;
            color: var(--black);
          }
          p {
            margin-top: 0.5rem;
            font-weight: 600;
            font-size: 0.9rem;
            color: var(--black);
            span {
              color: var(--red);
            }
          }
        }
      }
    }
  }

  .box-done {
    .text {
      .bottom {
        .download {
          @include fbx-ai-center-jc-center;
          border-radius: 5px;
          background-color: var(--inner-background-color);
          padding: 0.5rem 0;
          width: 20%;
          color: var(--black);
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.3s;
          svg {
            transition: all 0.3s;
            margin-left: 0.25rem;
            fill: none;
            color: var(--black);
          }
          &:hover {
            svg {
              color: #2b2827;
            }
            color: #2b2827;
            background-color: var(--light-main-color);
          }
        }
      }
    }
  }

  .box-new {
    .text {
      .bottom {
        border-bottom: 1px solid var(--gray);
      }
    }

    .explain {
      margin-top: 0.5rem;
      padding: 1.5rem 2rem;
      .tips {
        span {
          font-size: 0.9rem;
          color: var(--black);
        }
        .tips-div {
          margin-top: 0.5rem;
          @include fbx-ai-start-jc-start;
          flex-wrap: wrap;

          p {
            margin-bottom: 1.5rem;
            font-size: 0.8rem;
            color: var(--black);
            margin-left: 0.75rem;
            font-weight: 500;
          }
        }
      }
      form {
        textarea {
          background-color: var(--white);
          padding: 0.75rem;
          width: calc(99.7% - 1.5rem);
          font-size: 0.8rem;
          color: var(--black);
          line-height: 1.8rem;
          border-radius: 5px;
          border: 1px solid var(--gray);
          transition: all 0.3s;
          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }
          &::placeholder {
            color: var(--text-gray);
            font-size: 0.8rem;
          }
        }
        .actions {
          margin-top: 2rem;
          @include fbx-ai-center-jc-between;
          align-items: flex-end;
          .attach {
            @include fbx-column-ai-start-jc-start;
            p {
              font-weight: 500;
              font-size: 0.8rem;
              color: var(--black);
              margin-bottom: 0.5rem;
            }
            a {
              @include fbx-ai-center-jc-center;
              border-radius: 5px;
              background-color: var(--inner-background-color);
              padding: 0.5rem 2rem;
              color: var(--black);
              font-size: 0.8rem;
              font-weight: 500;
              transition: all 0.3s;
              svg {
                margin-left: 0.25rem;
                fill: none;
                color: var(--black);
              }
              &:hover {
                background-color: var(--light-main-color);
              }
            }
          }
          .buttons {
            .submit {
              border-radius: 5px;
              background-color: var(--light-main-color);
              border: 1px solid var(--light-main-color);
              font-size: 0.8rem;
              padding: 0.5rem 2rem;
              color: #2b2827;
              width: 20%;
            }
            .preview {
              margin-left: 0.5rem;
              border-radius: 5px;
              border: 1px solid var(--gray);
              font-size: 0.8rem;
              color: var(--black);
              padding: 0.5rem 2rem;
              width: 20%;
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .all-boxes {
    .box {
      .img-text {
        flex-wrap: wrap;
        .img {
          width: 100%;
          img {
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 0;
          }
        }
        .text {
          padding: 1rem 1rem 0 1rem;
          width: 100%;
          .top {
            padding-bottom: 1rem;
            margin-bottom: 1rem;
            .right {
              span {
                margin-left: 0.75rem;
                font-size: 0.75rem;
              }
            }
            .left {
              .uk-dropdown {
                padding: 0.25rem 0.5rem;
                min-width: 110px;
                ul {
                  li {
                    a {
                      font-size: 0.75rem;
                    }
                  }
                }
              }
            }
          }
          .bottom {
            padding-bottom: 1rem;
            flex-direction: column;
            span {
              font-size: 0.75rem;
            }
            p {
              line-height: 1.8rem;
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    .box-done {
      .text {
        .bottom {
          .download {
            margin-top: 0.5rem;
            width: 40%;
            font-size: 0.75rem;
          }
        }
      }
    }

    .box-new {
      .explain {
        margin-top: 0;
        padding: 1rem 1rem;
        .tips {
          span {
            font-size: 0.75rem;
          }
          .tips-div {
            margin-top: 1rem;
            p {
              font-size: 0.75rem;
              margin-left: 0;
            }
          }
        }
        form {
          textarea {
            padding: 0.5rem;
            font-size: 0.75rem;
            width: calc(99.8% - 1rem);
            &::placeholder {
              font-size: 0.75rem;
            }
          }
          .actions {
            margin-top: 1rem;
            flex-wrap: wrap;
            .attach {
              margin-bottom: 2rem;
              p {
                font-size: 0.75rem;
                margin-bottom: 1rem;
              }
              a {
                padding: 0.5rem 1rem;
                font-size: 0.75rem;
              }
            }
            .buttons {
              //@include fbx-column-ai-start-jc-start;
              width: 100%;
              text-align: center;
              .submit {
                font-size: 0.75rem;
                padding: 0.5rem 1rem;
                width: 20%;
              }
              .preview {
                font-size: 0.75rem;
                padding: 0.5rem 1rem;
                width: 20%;
              }
            }
          }
        }
      }
    }
  }
}

@include tablet-device {
  .all-boxes {
    .box {
      .img-text {
        .text {
          padding: 1rem 1rem 0 1rem;
          .top {
            .right {
              span {
                margin-left: 0.75rem;
                font-size: 0.75rem;
              }
            }
            .left {
              .uk-dropdown {
                padding: 0.25rem 0.5rem;
                min-width: 110px;
                ul {
                  li {
                    a {
                      font-size: 0.75rem;
                    }
                  }
                }
              }
            }
          }
          .bottom {
            padding-bottom: 1rem;
            span {
              font-size: 0.75rem;
            }
            p {
              font-size: 0.75rem;
            }
          }
        }
      }
    }

    .box-done {
      .text {
        .bottom {
          .download {
            font-size: 0.75rem;
          }
        }
      }
    }

    .box-new {
      .explain {
        margin-top: 0;
        padding: 1rem 1rem;
        .tips {
          span {
            font-size: 0.75rem;
          }
          .tips-div {
            margin-top: 1rem;
            p {
              font-size: 0.75rem;
              margin-left: 0;
            }
          }
        }
        form {
          textarea {
            padding: 0.5rem;
            font-size: 0.75rem;
            width: calc(99.8% - 1rem);
            &::placeholder {
              font-size: 0.75rem;
            }
          }
          .actions {
            .attach {
              p {
                font-size: 0.75rem;
                margin-bottom: 1rem;
              }
              a {
                padding: 0.5rem 1rem;
                font-size: 0.75rem;
              }
            }
            .buttons {
              .submit {
                font-size: 0.75rem;
                padding: 0.5rem 1rem;
                width: 20%;
              }
              .preview {
                font-size: 0.75rem;
                padding: 0.5rem 1rem;
                width: 20%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
