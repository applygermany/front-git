<template>
  <div id="submit-university-modal" class="submit-university-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>ثبت دانشگاه</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="text" v-if="chosenUni < maxUniversities">
        <p>
          شما درخواست ثبت دانشگاه و افزودن آن به سبـد اپلای را داریـد. توجه
          داشته باشیـد که پس از ثبت دانشگاه، حذف آن به سادگی امکانپذیر نخواهد
          بود و باید با پشتیبانی هماهنگ کنید آیا از درخواست خود اطمینان دارید؟
        </p>
        <div class="submit-cancel">
          <button class="cancel uk-modal-close">انصراف</button>
          <button class="submit uk-modal-close" @click="sendChooseUniversity">
            ثبت دانشگاه
          </button>
        </div>
      </div>
      <div class="text" v-else>
        <p>
          کاربر عزیز!

          تعداد دانشگاه های انتخابی شما بیش از تعداد تعیین شده است.
          توجه داشته باشید که اگر میخواهید بیشتر از
          <span class="numbers-of-unies">
                      {{ maxUniversities }}
          </span>
          دانشگاه به سبد خود اضافه کنید، به ازای هر کدام
         &nbsp;
          <span class="numbers-of-unies">
                     {{price.add_college_price}}
                      یورو
          </span>
          &nbsp;
          باید پرداخت کنید.

        </p>
        <div class="submit-cancel">
          <button class="cancel uk-modal-close">انصراف</button>
          <button class="submit uk-modal-close" @click="sendChooseUniversity">
            ثبت دانشگاه
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
    };
  },
  computed: {
    id() {
      return this.$store.getters["user/universityId"];
    },
    maxUniversities() {
      return this.$store.getters["user/maxUniversities"];
    },
    chosenUni() {
      return this.$store.getters["user/chosenUni"];
    },
    price(){
      return this.$store.getters['user/prices']
    }
  },

  methods: {
    async sendChooseUniversity() {
      this.sending = true;
      const chooseUniversity = await this.$axios.post(
        "v1/user/chooseUniversity",
        { id: this.id }
      );
      if (chooseUniversity.data.status === 1) {
        console.log('here0')
        this.$toasted.success(chooseUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });

        this.$store.commit("user/chooseUniversity", this.id);
        this.$store.commit("user/Set_ChosenUni", Number(this.$store.getters["user/chosenUni"]) + 1);
        // console.log(this.$store.getters["user/chosenUni"],'after set chosenUni is here')
      } else if (chooseUniversity.data.status === 422) {
        console.log('here1')
        this.errors = chooseUniversity.data.errors;
        this.$toasted.info(chooseUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        console.log(chooseUniversity.data,'here2')
        this.$toasted.error(chooseUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.sending = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";
.numbers-of-unies{
  color: #e2ad42;
  font-weight: bold;
  text-decoration: underline;
}
.submit-university-modal {
  .uk-modal-body {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
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
            background-color: var(--light-main-color);
            border-color: var(--light-main-color);
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
  .submit-university-modal {
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
