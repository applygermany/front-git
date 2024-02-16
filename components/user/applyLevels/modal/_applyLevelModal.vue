<template>
  <div
    id="apply-level-modal"
    class="apply-level-modal"
    @click.self="closeModal"
    uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>مراحل اپلای : فاز {{ phase.phase }} مرحله {{ phase.pos }}</p>
        <button
          class="uk-modal-close-default"
          type="button"
          @click="closeModal"
          uk-close
        ></button>
      </div>
      <div class="body">
        <div class="text" ref="modalText">
          <div class="img">
            <img :src="phase.image" alt="" v-if="phase.image !== null" />
          </div>
          <div class="video" v-if="phase.link !== null">
            <div class="r1_iframe_embed">
              <iframe
                :src="phase.link"
                style="border: 0 #ffffff none"
                name="applygermany-video.mp4"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen="true"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                id="videoFrame"
              ></iframe>
            </div>
          </div>
          <p v-html="phase.text"></p>
        </div>
        <div class="infos">
          <div class="attach" v-if="phase.file !== null && phase.files && phase.files.length > 0">
            <p>پیوست ها</p>
            <div v-for="(item, index) in phase.files" :key="index">
              <a class="w-100" target="_blank" :href="item.file">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="uk-svg uk-svg"
                >
                  <path
                    d="M19.25 17.25V9.75C19.25 8.64543 18.3546 7.75 17.25 7.75H4.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H17.25C18.3546 19.25 19.25 18.3546 19.25 17.25Z"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"
                    stroke="#141414"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <div class="name">
                  <span>{{
                    item.filename ? item.filename : "file " + index
                  }}</span>
                  <span class="latin-font">Format : {{ item.type }}</span>
                </div>
              </a>
            </div>
          </div>

          <div class="support">
            <p>پشتیبانی</p>
            <p class="explain">
              چنانچه مشکل یا سوالی دارید در صورتی که کاربر ویژه هستین برای سوالات و اطلاعات بیشتر با پشتیبان اختصاصی خود در تماس باشید و اگر کاربر عادی هستید میتوانید از قسمت مشاوره تلفنی درخواست مشاوره کنید تا با کارشناسان ما مشورت کنید.
            </p>
            <div class="calls">
              <p class="latin-font">
                <span>Telegram : </span><span>ApplyGermanyAdmin</span>
              </p>
              <p class="latin-font">
                <span>Instagram : </span><span>apply.germany</span>
              </p>
            </div>
          </div>
          <div class="submit">
            <button
              class="filled w-100 uk-modal-close"
              @click="checkPhase"
              v-if="phase.seen === 0"
            >
              {{ phase.nextLevelButton }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkingPhase: false,
    };
  },
  computed: {
    phase() {
      return this.$store.getters["applyLevels/applyLevelPhase"];
    },
  },
  methods: {
    async checkPhase() {
      this.checkingPhase = true;
      this.errors = [];
      const checkApplyLevel = await this.$axios.post(
        "v1/user/checkApplyLevel",
        { id: this.phase.id }
      );
      if (checkApplyLevel.data.status === 1) {
        this.$toasted.success(checkApplyLevel.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("applyLevels/applyLevels");
      } else if (checkApplyLevel.data.status === 422) {
        this.errors = checkApplyLevel.data.errors;
        this.$toasted.info(checkApplyLevel.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(checkApplyLevel.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.checkingPhase = false;
    },
    closeModal() {
      setTimeout(() => {
        this.$refs.modalText.scrollTop = 0;
        this.$store.dispatch("applyLevels/setApplyLevelPhase", {});
      }, 200);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.apply-level-modal {
  padding: 0 30px;
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    width: 1000px;
    border-radius: 8px;
    position: relative;
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
        color: var(--black);
      }
    }
    .body {
      padding: 1.5rem;
      @include fbx-ai-start-jc-between;
      align-items: stretch;
      flex-wrap: wrap;
      height: 30rem;
      max-height: 30rem;
      > .text {
        width: 65%;
        line-height: 1.8rem;
        color: var(--black);
        font-size: 0.8rem;
        text-align: justify;
        padding-left: 1rem;
        max-height: 30rem;
        &::-webkit-scrollbar {
          width: 5px;
        }

        /* Track */
        &::-webkit-scrollbar-track {
          box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
          border-radius: 15px;
        }

        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: var(--main-color);
          border-radius: 15px;
        }
        overflow-y: auto;
        .level-name {
          font-size: 1rem;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 1rem;
        }
        .img {
          position: relative;
          margin-bottom: 1.5rem;
          video {
            width: 100%;
            border-radius: 8px;
          }
          img {
            width: 100%;
            border-radius: 8px;
          }
          .level-name {
            position: absolute;
            margin-bottom: 0;
            bottom: 1rem;
            right: 1rem;
            color: #fff;
            font-weight: 700;
          }
        }
      }
      > .infos {
        border-right: 1px solid var(--gray);
        padding-right: 1rem;
        width: 30%;
        @include fbx-column-ai-start-jc-start;
        align-items: stretch;
        height: calc(100% - 5.75rem);
        left: 1.5rem;
        top: 4.75rem;
        position: fixed;
        .attach {
          p {
            font-weight: 600;
            font-size: 0.8rem;
            color: var(--black);
            margin-bottom: 1rem;
          }
          > div {
            @include fbx-ai-start-jc-between;
            flex-wrap: wrap;
            margin-bottom: 1rem;
            a {
              border: 1px solid var(--gray);
              border-radius: 5px;
              padding: 0.5rem;
              margin-bottom: 1rem;
              @include fbx-ai-center-jc-start;
              svg {
                color: var(--main-color);
                width: 3rem;
              }
              .name {
                margin-right: 0.5rem;
                @include fbx-column-ai-start-jc-start;
                span {
                  font-size: 0.8rem;
                  color: var(--black);
                }
              }
              &.w-50 {
                width: calc(48% - 1rem) !important;
              }
            }
          }
        }

        .support {
          > p {
            font-weight: 600;
            font-size: 0.8rem;
            color: var(--black);
            margin-bottom: 1rem;
          }
          .explain {
            line-height: 1.8rem;
            font-weight: 400;
            text-align: justify;
          }
          .calls {
            p {
              margin-bottom: 1rem;
              direction: ltr;
              @include fbx-ai-center-jc-between;
              span {
                color: #bf9339;
                font-size: 0.9rem;
              }
            }
          }
        }

        .submit {
          @include fbx-ai-start-jc-between;
          margin-top: auto;
          button.filled {
            cursor: pointer;
            border: none;
            outline: none;
            text-align: center;
            color: var(--white);
            background-color: var(--main-color);
            font-size: 0.8rem;
            padding: 0.5rem 0;
            border-radius: 5px;
            transition: all 0.3s;
            &:hover {
              background-color: var(--light-main-color);
              color: #2b2827;
            }
          }
          button.share {
            cursor: pointer;
            border: none;
            outline: none;
            text-align: center;
            color: var(--black);
            border-radius: 5px;
            font-size: 0.8rem;
            padding: 0.5rem 0;
            background-color: var(--inner-background-color);
          }
        }
      }
    }
  }
}

@include mobile-device {
  .apply-level-modal {
    padding: 15px 15px;
    .uk-modal-body {
      width: 400px;
      .title {
        padding: 0.75rem 1.25rem;
        p {
          font-size: 0.9rem;
        }
      }
      .body {
        padding: 1.25rem;
        flex-wrap: wrap;
        height: inherit;
        max-height: inherit;
        > .text {
          width: 100%;
          font-size: 0.75rem;
          padding-left: 0.5rem;
          margin-left: -0.5rem;
          max-height: 20rem;
          margin-bottom: 1rem;
          .level-name {
            font-size: 0.9rem;
          }
        }
        > .infos {
          padding-top: 1rem;
          border-top: 1px solid var(--gray);
          padding-right: 0;
          border-right: 0;
          width: 100%;
          height: inherit;
          position: inherit;
          .attach {
            p {
              font-size: 0.75rem;
              margin-bottom: 0.5rem;
            }
            > div {
              @include fbx-ai-start-jc-between;
              flex-wrap: wrap;
              margin-bottom: 0.5rem;
              a {
                padding: 0.5rem;
                margin-bottom: 0.5rem;
                .name {
                  span {
                    font-size: 0.75rem;
                  }
                }
                &.w-50 {
                  width: calc(48% - 1rem) !important;
                }
              }
            }
          }

          .support {
            > p {
              font-size: 0.75rem;
              margin-bottom: 0.5rem;
            }
            .calls {
              p {
                span {
                  font-size: 0.75rem;
                }
              }
            }
          }

          .submit {
            a.filled {
              font-size: 0.75rem;
            }
            a.share {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}

@include tablet-device {
  .apply-level-modal {
    padding: 15px 15px;
    .uk-modal-body {
      .title {
        padding: 0.75rem 1.25rem;
        p {
          font-size: 0.9rem;
        }
      }
      .body {
        padding: 1.25rem;
        flex-wrap: wrap;
        > .text {
          font-size: 0.75rem;
          padding-left: 0.5rem;
          .level-name {
            font-size: 0.9rem;
          }
        }
        > .infos {
          padding-right: 0.5rem;
          .attach {
            p {
              font-size: 0.75rem;
              margin-bottom: 0.5rem;
            }
            > div {
              margin-bottom: 0.5rem;
              a {
                padding: 0.5rem;
                margin-bottom: 0.5rem;
                .name {
                  span {
                    font-size: 0.75rem;
                  }
                }
              }
            }
          }

          .support {
            > p {
              font-size: 0.75rem;
              margin-bottom: 0.5rem;
            }
            .calls {
              p {
                span {
                  font-size: 0.75rem;
                }
              }
            }
          }

          .submit {
            a.filled {
              font-size: 0.75rem;
            }
            a.share {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}

.r1_iframe_embed {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: auto;
  padding-top: 56.25%;
}
.r1_iframe_embed iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
