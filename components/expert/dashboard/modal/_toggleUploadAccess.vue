<template>
    <div class="delete-uploads-modal" id="toggle-upload-access" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>قرارداد</p>
                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
            <div class="text">
                <p>
                    آیا از تغییر دسترسی آپلود و نوع قرارداد اطمینان دارید؟
                </p>

                <div style="display: flex; flex-direction: row; margin-bottom: 20px;" v-if="!unableToWork">
                    <input type="checkbox" id="uploadAccess" name="uploadAccess"
                           @click="changeUploadAccess()" :checked="uploadAccessM ? 'checked' : ''">
                    <label for="uploadAccess" class="radio-label">فعالسازی قرارداد ({{user.contractUser ? user.contractUser.lastname : '-'}} {{user.contractUser ? user.contractUser.firstname : '-'}})</label>
                </div>
                <div style="display: flex; flex-direction: row; margin-bottom: 20px;" v-else>
                    <input type="checkbox" id="uploadAccess" name="uploadAccess"
                           disabled>
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

                <div class="submit-cancel" style="margin-top: 10px">
                    <button class="cancel uk-modal-close">انصراف</button>
                    <button
                            @click="submitDownGrade(selectedUser.id)"
                            class="submit uk-modal-close"
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
            unableToWork: false,
            contractType: null,
            uploadAccess: false
        };
    },
    computed: {
        selectedUser() {
            return this.$store.getters["expert/selectedUser"];
        },
        userId() {
            return this.$store.getters["expert/userId"];
        },
        user() {
            return this.$store.getters["expert/user"];
        },
        unableToWorkM() {
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
    },
    methods: {
        changeContractType(type) {
            this.contractType = type
        },

        changeUnableToWork() {
            this.unableToWork = !this.unableToWork
        },
        changeUploadAccess() {
            this.uploadAccess = !this.uploadAccess
        },

        async submitDownGrade(id) {
            const res = await this.$axios.post(
                "v1/expert/saveUserContractInfo/" + id,
                {
                    uploadAccess: this.uploadAccess,
                    unableToWork: this.unableToWork,
                    contractType: this.contractType,
                }
            );
            if (res.data.status == 1) {
                this.$toasted.success(res.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });

                const {data: monthTels} = await this.$axios.get("/v1/expert/getMonthTel");

                // monthName: monthTels.data.monthName,
                this.$store.commit("expert/SET_MonthTels", monthTels.telSupports);

                setTimeout(() => (this.comment = ""), 300);
            } else {

                this.$toasted.error(res.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

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


.delete-uploads-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    //width: 400px;
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
