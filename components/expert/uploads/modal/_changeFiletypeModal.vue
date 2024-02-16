<template>
    <div id="change-uploads-modal" class="delete-uploads-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>تغییر نوع فایل</p>
                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
            <div class="text">
                <div class="custom-select" v-click-outside-element="outSide">
                    <div class="select-selected" @click="selectShow = !selectShow">
                        <p class="p" v-if="type === 0">{{ fileType.title }}</p>
                        <p class="p" v-else>{{ typeTitle }}</p>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                style="transition: 0.3s all; fill: var(--black)"
                                :class="{ rotate: selectShow }"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                            />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div class="select-items" v-show="selectShow">
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('تمامی مدارک دبیرستان', 1)"
                            >
                                تمامی مدارک دبیرستان
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('گواهی قبولی کنکور', 2)"
                            >
                                گواهی قبولی کنکور
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('مدرک زبان', 3)"
                            >
                                مدرک زبان
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('پاسپورت', 4)"
                            >
                                پاسپورت
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('گواهی کار', 5)"
                            >
                                گواهی کار
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('عکس پرسنلی', 6)"
                            >
                                عکس پرسنلی
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('قرارداد', 7)"
                            >
                                قرارداد
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('تمامی مدارک دوره کارشناسی', 8)"
                            >
                                تمامی مدارک دوره کارشناسی
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('توصیه نامه', 9)"
                            >
                                توصیه نامه
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('گواهی شرکت در دوره های تخصصی', 10)"
                            >
                                گواهی شرکت در دوره های تخصصی
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('گواهی شرح دروس', 11)"
                            >
                                گواهی شرح دروس
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('گواهی سیستم نمره دهی', 12)"
                            >
                                گواهی سیستم نمره دهی
                            </div>
                            <div
                                    style="text-align: right"
                                    @click="changeSelect('سایر مدارک', 13)"
                            >
                                سایر مدارک
                            </div>
                        </div>
                    </transition>
                </div>
                <p>
                    آیا از تغییر نوع فایل
                    <span style="color: var(--dark-main-color)">{{
                        fileType.title
                        }}</span>
                    اطمینان دارید؟
                </p>
                <div class="submit-cancel">
                    <button class="cancel uk-modal-close">انصراف</button>
                    <button
                            class="submit uk-modal-close"
                            @click="SubmitUpdate(fileType.id)"
                    >
                        بله
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sending: false,
            selectShow: false,
            typeTitle: '',
            type: 0
        };
    },
    computed: {
        fileType() {
            return this.$store.getters["expert/fileType"];
        },
        userId() {
            return this.$store.getters["expert/userId"];
        },
    },
    methods: {
        outSide() {
            this.selectShow = false;
        },
        changeSelect(val, type) {
            this.typeTitle = val
            this.type = type;
            this.selectShow = false;
        },
        async SubmitUpdate(id) {
            this.deleting = true;
            this.errors = [];
            const changeDocument = await this.$axios.post(
                "v1/expert/changeDocument/" + id,
                {
                    type: this.type,
                    title: this.typeTitle
                }
            );
            if (changeDocument.data.status === 1) {
                this.$toasted.success(changeDocument.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
                this.$store.dispatch("expert/getDocument", this.userId);
            } else if (changeDocument.data.status === 422) {
                this.errors = changeDocument.data.errors;
                this.$toasted.info(changeDocument.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            } else {
                this.$toasted.error(changeDocument.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
            this.deleting = false;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";


.custom-select {
  width: 100%;
  position: relative;
  margin-bottom: 10px;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
}

.p {
    text-align: justify;
    font-size: 0.8rem;
    color: var(--black);
    margin-bottom: 0 !important;
}

/*style items (options):*/
.select-items {
  width: 85%;
  border: 1px solid #e4e3e1;
  border: 1px solid var(--gray);
  padding-right: 1rem;
  padding-left: 1rem;
  position: absolute;
  background-color: #fff;
  background-color: var(--white);
  margin-top: 0.5rem;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
}

.select-items div {
  cursor: pointer;
  color: var(--black);
  font-size: 0.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray);

  &:last-child {
    border-bottom: 0;
  }
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.rotate {
  transform: rotateZ(180deg);
}

@include mobile-device {
  .custom-select {
    margin-right: 0;
  }
}

.delete-uploads-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    width: 400px;
    border-radius: 8px;
    z-index: 99999;

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

    .text {
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      z-index: 9999999;

      p {
        line-height: 1.8rem;
        text-align: justify;
        font-size: 0.8rem;
        color: var(--black);
        margin-bottom: 2rem;
      }

      .submit-cancel {
        text-align: center;
        width: 100%;

        .submit {
          border: 1px solid var(--inner-background-color);
          border-radius: 5px;
          background-color: var(--inner-background-color);
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          width: 25%;
          color: var(--black);
          transition: all 0.3s;

          &:hover {
            background-color: #ff3535 !important;
            color: #2b2827;
          }
        }

        .cancel {
          cursor: pointer;
          font-weight: 500;
          border: 1px solid var(--gray);
          border-radius: 5px;
          color: var(--black);
          font-size: 0.8rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          width: 25%;
          background-color: var(--white);
          transition: all 0.3s;

          &:hover {
            background-color: var(--gray);
            border-color: var(--gray);
            color: var(--black);
          }
        }
      }
    }
  }
}

@include mobile-device {
  .delete-uploads-modal {
    .uk-modal-body {
      .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.9rem;
        }
      }

      .text {
        padding: 0.75rem 1.25rem 1.25rem 1.25rem;

        p {
          font-size: 0.75rem;
        }

        .submit-cancel {
          .submit {
            font-size: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: 40%;
          }

          .cancel {
            font-size: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: 40%;
          }
        }
      }
    }
  }
}
</style>
