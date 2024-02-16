<template>
    <div id="write-comment-modal" uk-modal @click.self="closeModal">
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <button
                        class="uk-modal-close-default"
                        type="button"
                        uk-close
                        style="right: unset; left: 10px"
                ></button>
                <h3>یادداشت ها</h3>
            </div>
            <div class="text">
                <div class="flex">
                    <div class="flex-1">
                        <form>
                            <div class="comment-box">
                                <img style="width: 50px; height: 50px; border-radius: 50%" :src="$auth.user.image"
                                     alt=""/>
                                <div style="border-radius: 20px; border: 1px solid var(--gray);
                             padding: 10px; margin-right: 20px; width: 80%" v-if="isOpenComment">
                            <textarea
                                    rows="2"
                                    placeholder="نوشتن کامنت..."
                                    v-model="comment"
                                    :class="{
                        'error-input': errors.includes('comment'),
                      }"
                                    @focus="errors = []"></textarea>
                                    <button
                                            type="button"
                                            v-if="comment == null || comment == ''"
                                            @click="sendComment"
                                    >
                                        {{sendingComment ? 'درحال ارسال' : 'ذخیره'}}

                                    </button>
                                    <button
                                            v-else
                                            type="button"
                                            class="uk-button-default "
                                            @click="sendComment"
                                    >
                                        {{sendingComment ? 'درحال ارسال' : 'ذخیره'}}
                                    </button>
                                </div>
                                <div v-else style="border-radius: 20px; border: 1px solid var(--gray);
                             padding: 10px; margin-right: 10px; width: 80%; cursor: pointer" @click="handleOpenComment">
                                    <p style="font-size: 13px; vertical-align: center; color: var(--text-gray); margin-top: 5px">
                                        نوشتن کامنت ...</p>
                                </div>
                            </div>
                        </form>

                        <div style="max-height: 350px; overflow: auto">
                            <div v-for="(_comment, index) in user.comments">
                                <div style="display: flex; margin-top: 40px; ">
                                    <img style="width: 50px; height: 50px; border-radius: 50%" :src="_comment.image"
                                         alt=""/>

                                    <div style="margin-right: 20px; width: 90%">
                                        <div style="display: flex; flex-flow: row wrap;">
                                            <strong style="text-align: right; font-size: 15px">{{
                                                _comment.owner
                                                }}</strong>
                                            <small style="text-align: left; margin-right: 5px; color: var(--text-gray)">{{
                                                _comment.date
                                                }}</small>
                                        </div>
                                        <p style="margin-top: 5px; font-size: 13px; line-height: 30px">{{
                                            _comment.text
                                            }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex-0">
                        <div style="display: flex; flex-direction: row; margin-bottom: 20px;" v-if="!unableToWork">
                            <input type="checkbox" id="uploadAccess" name="uploadAccess"
                                   @click="changeUploadAccess()" :checked="uploadAccessM ? 'checked' : ''">
                            <label for="uploadAccess" class="radio-label">فعالسازی قرارداد ({{user.contractUser ? user.contractUser.lastname : '-'}} {{user.contractUser ? user.contractUser.firstname : '-'}})</label>
                        </div>
                        <div style="display: flex; flex-direction: row; margin-bottom: 20px;" v-else>
                            <input type="checkbox" id="uploadAccess" name="uploadAccess" disabled>
                            <label for="uploadAccess" class="radio-label">فعالسازی قرارداد</label>
                        </div>

                        <div style="display: flex; flex-direction: row; margin-bottom: 20px">
                            <input type="checkbox" id="notWorkDocument" name="notWorkDocument"
                                   @click="changeUnableToWork()" :checked="unableToWorkM ? 'checked' : ''">
                            <label for="notWorkDocument" class="radio-label">امکان همکاری وجود ندارد</label>
                        </div>

                        <div style="display: flex; flex-direction: row" v-if="uploadAccess && !unableToWork">
                            <input type="radio" id="gov-university" name="contractType"
                                   @click="changeContractType('gov-university')"
                                   :checked="user.contractType === 'gov-university' ? 'checked' : ''">
                            <label for="gov-university" class="radio-label">قرارداد دانشگاه دولتی</label>
                        </div>
                        <div style="display: flex; flex-direction: row" v-else>
                            <input type="radio" id="gov-university" name="contractType"
                                   disabled>
                            <label for="gov-university" class="radio-label">قرارداد دانشگاه دولتی</label>
                        </div>

                        <div style="display: flex; flex-direction: row" v-if="uploadAccess && !unableToWork">
                            <input type="radio" id="all-university" name="contractType"
                                   @click="changeContractType('all-university')"
                                   :checked="user.contractType === 'all-university' ? 'checked' : ''">
                            <label for="all-university" class="radio-label">قرارداد دانشگاه دولتی و خصوصی</label>
                        </div>
                        <div style="display: flex; flex-direction: row" v-else>
                            <input type="radio" id="all-university" name="contractType"
                                   disabled>
                            <label for="all-university" class="radio-label">قرارداد دانشگاه دولتی و خصوصی</label>
                        </div>

                        <div style="display: flex; flex-direction: row" v-if="uploadAccess && !unableToWork">
                            <input type="radio" id="pri-university" name="contractType"
                                   @click="changeContractType('pri-university')"
                                   :checked="user.contractType === 'pri-university' ? 'checked' : ''">
                            <label for="pri-university" class="radio-label">قرارداد دانشگاه خصوصی</label>
                        </div>
                        <div style="display: flex; flex-direction: row" v-else>
                            <input type="radio" id="pri-university" name="contractType"
                                   disabled>
                            <label for="pri-university" class="radio-label">قرارداد دانشگاه خصوصی</label>
                        </div>

                        <div style="display: flex; flex-direction: row" v-if="uploadAccess && !unableToWork">
                            <input type="radio" id="pre-pay" name="contractType"
                                   @click="changeContractType('pre-pay')"
                                   :checked="user.contractType === 'pre-pay' ? 'checked' : ''">
                            <label for="pre-pay" class="radio-label">قرارداد با پیش پرداخت</label>
                        </div>
                        <div style="display: flex; flex-direction: row" v-else>
                            <input type="radio" id="pre-pay" name="contractType"
                                   disabled>
                            <label for="pre-pay" class="radio-label">قرارداد با پیش پرداخت</label>
                        </div>

                        <div class="custom-select" style="margin-top: 20px" v-click-outside-element="outSide">
                            <div @click="selectShow = !selectShow" class="select-selected">
                                <p v-if="category === null">دسته بندی نشده</p>
                                <p v-else>
                                    {{ category }}
                                </p>
                                <svg :class="{ rotate: selectShow }" height="24"
                                     style="transition: 0.3s all; fill: var(--black)"
                                     viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                                </svg>
                            </div>
                            <transition name="fade">
                                <div :key="`fade-${user.id}`" class="select-items" v-show="selectShow">
                                    <div @click="updateUserCategory()">دسته بندی نشده</div>
                                    <div :key="index" @click="updateUserCategory(category.id, category.title)"
                                         style="text-align: right"
                                         v-for="(category, index) in categories">
                                        {{ category.title }}
                                    </div>
                                </div>
                            </transition>
                        </div>


                        <button
                                type="button"
                                class="save-btn"
                                @click="saveInformation"
                        >
                            {{savedInformation ? 'درحال ذخیره' : 'ذخیره'}}

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
            reserved: false,
            choosing: false,
            comment: null,
            sendingComment: false,
            savedInformation: false,
            comments: null,
            isOpenComment: false,
            errors: [],
            selectShow: false,
            category: null,
            categoryId: null,
            unableToWork: false,
            contractType: null,
            uploadAccess: false
        };
    },
    computed: {
        user() {
            return this.$store.getters["expert/user"];
        },
        categories() {
            this.category = this.user.category ? this.$store.getters["expert/categories"].filter(item => item.id === this.user.category)[0].title : null
            this.categoryId = this.user.category

            return this.$store.getters["expert/categories"];
        },
        openComment() {
            if (this.comment === null)
                return this.isOpenComment = false;
            else
                return this.isOpenComment = true;
        },
        unableToWorkM() {
            this.unableToWork = this.user.unableToWork
            return this.user.unableToWork
        },
        uploadAccessM() {
            this.uploadAccess = this.user.hasUploadAccess
            return this.user.hasUploadAccess
        },
    },
    created() {
        this.contractType = this.user.contractType
        this.unableToWork = this.user.unableToWork
        this.uploadAccess = this.user.hasUploadAccess
        this.category = this.user.category ? this.categories.filter(item => item.id === this.user.category)[0].title : null
        this.categoryId = this.user.category
    },
    watch: {
        openComment() {
            if (this.comment === null)
                return this.isOpenComment = false;
            else
                return this.isOpenComment = true;
        }
    },
    methods: {
        updateUserCategory(id, val) {
            this.category = val;
            this.categoryId = id;
            this.selectShow = false
        },
        outSide() {
            this.selectShow = false;
        },
        handleOpenComment() {
            return this.isOpenComment = true;
        },
        closeModal() {
            setTimeout(() => {
                this.reserved = false;
                this.choosing = false;

                return this.isOpenComment = false;
            }, 200);
        },

        changeContractType(type) {
            this.contractType = type
        },

        changeUnableToWork() {
            this.unableToWork = !this.unableToWork
        },

        changeUploadAccess() {
            this.uploadAccess = !this.uploadAccess
        },

        async sendComment() {

            this.sendingComment = true;
            let sendComment = null;
            sendComment = await this.$axios.post(
                "v1/expert/sendCommentFree/" + this.user.id,
                {text: this.comment}
            );
            if (sendComment.data.status === 1) {
                this.$toasted.success(sendComment.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });

                const {data: monthTels} = await this.$axios.get("/v1/expert/getMonthTel");

                // monthName: monthTels.data.monthName,
                this.$store.commit("expert/SET_MonthTels", monthTels.telSupports);

                this.$store.commit("expert/SET_User", monthTels.telSupports.filter(item => item.user.id === this.user.id)[0].user);

                setTimeout(() => (this.comment = ""), 300);
            } else if (sendComment.data.status === 422) {
                this.errors = sendComment.data.errors;
                this.$toasted.info(sendComment.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            } else {
                this.$toasted.error(sendComment.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
            this.sendingComment = false;
        },

        async saveInformation() {
            this.savedInformation = true;
            let saveInformation = null;
            saveInformation = await this.$axios.post(
                "v1/expert/saveUserContractInfo/" + this.user.id,
                {
                    category: this.categoryId,
                    unableToWork: this.unableToWork,
                    contractType: this.contractType,
                    uploadAccess: this.uploadAccess,
                }
            );
            if (saveInformation.data.status === 1) {
                this.$toasted.success(saveInformation.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });

                const {data: monthTels} = await this.$axios.get("/v1/expert/getMonthTel");

                // monthName: monthTels.data.monthName,
                this.$store.commit("expert/SET_MonthTels", monthTels.telSupports);

                setTimeout(() => (this.comment = ""), 300);
            } else if (saveInformation.data.status === 422) {
                this.errors = saveInformation.data.errors;
                this.$toasted.info(saveInformation.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            } else {
                this.$toasted.error(saveInformation.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
            this.savedInformation = false;
        }

    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";


.custom-select {
  width: 100%;
  position: relative;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
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

input[type="radio"] {
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: var(--gray);
  width: 1em;
  height: 1em;
  border: 0.15em solid var(--gray);
  border-radius: 50%;
  margin-top: 5px;
}

input[type="radio"]:checked {
  color: var(--main-color);
  background: var(--main-color);
}

.radio-label {
  font-size: 0.8rem;
  padding: 5px;
}

input[type="checkbox"] {
  appearance: none;
  background-color: #fff;
  font: inherit;
  color: var(--gray);
  width: 1em;
  height: 1em;
  border: 0.15em solid var(--gray);
}

input[type="checkbox"]:checked {
  color: var(--main-color);
  background: var(--main-color);
}


.uk-modal-dialog {
  width: 50%;
}

.comment-box {
  display: flex;
  width: 105%;
  margin-top: 20px;
  margin-left: 20px;
}

.flex {
  width: 100%;
  flex-direction: row-reverse;
  display: flex
}

.flex-1 {
  flex: 1.5;
}

.flex-0 {
  flex: 0.75;
  border-left: 1px solid var(--gray);
  padding: 10px;
  margin-left: 20px;
}

.save-btn {
  margin-top: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  background-color: var(--light-main-color);
  padding: 0.5rem;
  border-radius: 50px;
  border: 0;
  width: 100%;
  transition: all 0.3s;
  color: #2b2827;
}

.loading-button {
  margin-right: auto;
}

#write-comment-modal {
  .uk-modal-body {
    padding: 2rem;
    border-radius: 8px;
    background-color: var(--white);

    .title {
      margin-bottom: 1.5rem;

      h3 {
        font-size: 1rem;
        color: var(--black);
        font-weight: 800;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray);
      }
    }

    .text {
      form {
        @include fbx-column-ai-start-jc-start;

        textarea {
          border: 0;
          width: 99%;
          line-height: 1.8rem;
          background-color: var(--white);
        }

        textarea:focus {
          outline: 0;
        }

        button {
          margin-top: 1rem;
          margin-bottom: 1rem;
          margin-right: 80%;
          cursor: pointer;
          font-size: 0.9rem;
          background-color: var(--light-main-color);
          padding: 0.5rem;
          border-radius: 50px;
          border: 0;
          width: 22%;
          transition: all 0.3s;
          color: #2b2827;
        }

        .loading-button {
          margin-right: auto;
        }
      }
    }

    .comments:first-child {
      margin-top: 20px;
    }

    .comments {
      padding: 10px;
      margin: 5px;
      border-radius: 10px;
    }
  }
}

@include mobile-device {
  .flex {
    width: 100%;
    flex-direction: column;
  }

  .flex-1 {
    flex: 1
  }

  .flex-0 {
    flex: 1
  }

  .uk-modal-dialog {
    width: 100%;
  }

  .comment-box {
    width: 100%;
  }

  #write-comment-modal {
    .uk-modal-body {
      padding: 1rem;

      .title {
        margin-bottom: 1rem;

        h3 {
          font-size: 0.9rem;
        }
      }

      .text {
        form {
          button {
            font-size: 0.8rem;
            width: 20%;
            margin-bottom: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
