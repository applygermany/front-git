<template>
  <div id="show-user-tel-support-information-modal" class="request-tel-support-modal" @click.self="closeModal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>اطلاعات اولیه مشاوره</p>
        <button class="uk-modal-close-default" type="button" @click="closeModal" uk-close></button>
      </div>
      <transition v-if="information != null" mode="out-in" name="fade">
        <div style="padding: 15px">
          <div class="row">
            <div class="form-group w-31">
              <p>شماره همراه</p>
              <input disabled placeholder="شماره" :value="information.mobile" />
            </div>
            <div class="form-group w-31">
              <p>ایمیل</p>
              <input disabled placeholder="ایمیل" :value="information.email" />
            </div>
            <div class="form-group w-31">
              <p>تاریخ تولد</p>
              <input disabled placeholder="تاریخ تولد" :value="information.birthDate" />
            </div>
            <div class="form-group w-31" style="margin-top: 10px">
              <p>زبان تحصیل</p>
              <input disabled placeholder="زبان تحصیل" :value="information.language" />
            </div>
            <div class="form-group w-31" style="margin-top: 10px">
              <p>مدرک زبان</p>
              <input disabled placeholder="مدرک زبان" :value="information.languageDocument" />
            </div>
            <div class="form-group w-31" style="margin-top: 10px">
              <p>وضعیت خدمت</p>
              <input disabled placeholder="وضعیت خدمت" :value="information.military" />
            </div>
          </div>
          <div class="row" style="margin-top: 10px">
            <div class="form-group w-100">
              <p>رشته تحصیلی / مقظع / معدل</p>
              <input disabled placeholder="رشته تحصیلی / مقظع / معدل" :value="information.grade" />
            </div>
          </div>
          <div class="row" style="margin-top: 10px">
            <div class="form-group w-100">
              <p>موضوع مشاوره</p>
              <input disabled placeholder="موضوع مشاوره" :value="information.title" />
            </div>
          </div>
          <div class="row" style="margin-top: 20px; display: none">
            <form>
              <textarea rows="5" id="comment" placeholder=" " v-model="comment" :class="{
                'error-input': errors.includes('comment'),
              }" @focus="errors = []"></textarea>
              <label class="floating" for="comment"> کامنت</label>
              <button type="button" v-if="comment == null || comment == ''" @click="sendComment">
                ذخیره
              </button>
              <button v-else type="button" class="uk-button-default uk-modal-close" @click="sendComment">
                ذخیره
              </button>
            </form>
          </div>
        </div>
      </transition>
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
      errors: [],
    };
  },
  computed: {
    information() {
      return this.$store.getters["telSupports/userTelSupportInformation"];
    },
    userComment() {
      if (this.$store.getters["telSupports/userTelSupportInformation"])
        return this.$store.getters["telSupports/userTelSupportInformation"]["comment"];
      return null;
    }
  },
  watch: {
    userComment() {
      if (this.userComment != null) {
        this.comment = this.userComment.text;
      } else {
        this.comment = null;
      }
    },
  },
  methods: {
    closeModal() {
      setTimeout(() => {
        this.reserved = false;
        this.choosing = false;
      }, 200);
    },

    async sendComment() {

      this.sendingComment = true;
      let sendComment = null;
      if (this.userComment == null) {
        sendComment = await this.$axios.post(
          "v1/expert/sendCommentFree/" + this.information.user_id,
          { text: this.comment }
        );
      } else {
        sendComment = await this.$axios.put(
          "v1/expert/updateCommentFree/" + this.userComment.id,
          { text: this.comment }
        );
      }
      if (sendComment.data.status === 1) {
        this.$toasted.success(sendComment.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });

        const {data: monthTels} = await this.$axios.get("/v1/expert/getMonthTel");

        // monthName: monthTels.data.monthName,
        this.$store.commit("expert/SET_MonthTels", monthTels.telSupports);

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

  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.custom-select {
  width: 50%;
  position: relative;
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

/*style items (options):*/
.select-items {
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
  z-index: 9999;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
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

.error {
  color: red !important;
  font-size: 14px;
  padding-top: 5px;
  font-weight: 600;
}

.row {
  @include fbx-ai-center-jc-start;
  flex-wrap: wrap;

  position: relative;

  .form-group {
    margin-left: 1rem;
  }


  form {
    @include fbx-column-ai-start-jc-start;
    width: 99%;

    textarea {
      width: 99%;
      line-height: 1.8rem;
      background-color: var(--white);
      border: 1px solid lightgray;
      border-radius: 5px;
      padding: 5px;
      -ms-box-sizing: content-box;
      -moz-box-sizing: content-box;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      transition: 0.3s ease-in-out all;
    }

    textarea::placeholder {
      font-size: 0.8rem;
      font-weight: 300;
      transition: 0.2s ease-in;
    }

    textarea:focus {
      // border: 0;
    }

    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    textarea:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

    .floating {
      right: 15px;
      top: 1rem;
      position: absolute;
      pointer-events: none;
      transition: 0.2s ease all;
      background-color: white;
      font-size: 0.8rem;
      font-weight: 300;
    }

    textarea:focus~label,
    textarea:not(:placeholder-shown)~label {
      top: -6%;
      padding: 0 0.5rem;
    }

    button {
      margin-top: 1rem;
      margin-right: auto;
      cursor: pointer;
      font-size: 0.9rem;
      color: var(--black);
      background-color: var(--inner-background-color);
      padding: 0.5rem;
      border-radius: 5px;
      border: 0;
      width: 20%;
      transition: all 0.3s;
      &:hover {
        color: #2b2827;
        background-color: var(--light-main-color);
      }
    }

    .loading-button {
      margin-right: auto;
    }
  }
}
</style>