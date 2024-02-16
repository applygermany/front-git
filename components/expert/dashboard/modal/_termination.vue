<template>
    <div v-if="data" id="accept-file-modal" class="delete-uploads-modal uk-modal uk-flex uk-open" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>فسخ اتوماتیک قرارداد</p>
                <button @click="closeModal()" uk-close></button>
            </div>
            <div class="text">
                <div class="containerSection">
                    <h5>
                        آیا از فسخ قرارداد
                        <span>
                        {{data.firstname+' '+data.lastname}}
                        </span>
                        مطمئن هستید ؟!
                    </h5>
                    <p>
                        پشتیبان/کارشناس گرامی ، بعد از تایید، ایمیلی با عنوان فسخ قرارداد و حاوی فرم فسخ برای ایشان ارسال خواهد شد.
                        <br>
                        لازم به ذکر است که کاربر از حالت ویژه نیز به عادی نیز تغییر پیدا میکند، لذا قبل از تایید از اقدام خود مطمئن شوید.
                    </p>
                    <!--                    <div>-->
                    <!--                        <p>-->
                    <!--                            علت فسخ-->
                    <!--                        </p>-->
                    <!--                        <p class="hint">-->
                    <!--                            توجه:-->
                    <!--                            علت فسخ قرارداد برای کاربر ارسال خواهد شد-->
                    <!--                        </p>-->
                    <!--                        <textarea v-model="reason" class="uk-textarea"></textarea>-->
                    <!--                    </div>-->
                </div>
                <div class="submit-cancel">
                    <button @click="closeModal()" class="cancel">انصراف</button>
                    <button
                            v-if="!loading"
                            @click="submitTermination"
                            class="submit "
                    >
                        ثبت
                    </button>
                    <button
                            v-else
                            class="submit"
                    >
                        درحال پردازش..
                        <div uk-spinner></div>
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
            reason:null,
            loading:false,
        };
    },
    props:{
        data:null,
    },
    methods:{
        submitTermination(){
            this.loading=true;
            this.$axios.post('v1/expert/modalTerminationByExpert',{reason:this.reason,user_id:this.data.id}).then((res)=>{
                if(res.data.type=='success'){
                    this.$toasted.success(res.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }else{
                    this.$toasted.error(res.data.msg, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                }
                this.loading=false;
                this.closeModal();
            }).catch((err)=>{
                console.log(err,'error of submit motivation');
                this.loading=false;
                this.$toasted.error('مشکل مهمی رخ داده است با تیم it چک بفرمایید', {
                    position: "bottom-left",
                    duration: 5000,
                });
            })
        },
        closeModal(){
            this.$emit('closeTerminationModal',false)
        }
    }


};
</script>

<style lang="scss" scoped>
.hint{
  font-size: 7pt !important;
  margin: -20px auto 10px;
  color: burlywood !important;
}
.btnAddUniverses{
  border-radius: 5px;
  background: var(--dark-main-color);
}
@import "~/assets/user/scss/_mixins.scss";
.containerSection{
  padding: 20px 5px;
  text-align:center;
  h5{
    color: #fff !important;
    margin: 15px auto;
    span{
      color: #b29630 !important;
      font-weight: bold !important;
      margin: 0 5px;
    }
  }
  p{
    text-align: center !important;
    font-size: 8.5pt !important;
    margin: 20px auto;
  }
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
            color: var(--dark-main-color);
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
        margin-bottom: 1rem;
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
            background-color: var(--main-color) !important;
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
