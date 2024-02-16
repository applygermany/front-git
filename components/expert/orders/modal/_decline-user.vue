<template>
    <div v-if="data" id="accept-file-modal" class="delete-uploads-modal uk-modal uk-flex uk-open" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p v-if="data.type==='motivation'"> رد انگیزه نامه</p>
                <p v-else>رد رزومه</p>
                <button @click="falseUserData()" uk-close></button>
            </div>
            <div class="text">
                <p>
                    آیا مایل به
                    <span v-if="data.type==='motivation'"> رد انگیزه نامه</span>
                    <span v-else>رد رزومه</span>
                    از سمت کاربر میباشید؟
                </p>
                <textarea class="uk-textarea"
                          rows="7"
                          placeholder="توضیحات"
                          v-model="editRequestText"
                ></textarea>
                <div class="submit-cancel">
                    <button @click="falseUserData()" class="cancel">انصراف</button>
                    <button
                            @click="declineUserMotivation"
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
        };
    },
    props:{
        data:null,
        editRequestText:null,
    },
    methods: {
        declineUserMotivation(){
            this.$axios.post('v1/expert/orders/declineAsUser',{id:this.data.modelId,type:this.data.type,editRequestText:this.editRequestText}).then((res)=>{
                console.log(res,'res is here guys')
                if(res.data==1){
                    this.$emit('changeStatus')
                    this.falseUserData();
                }
            }).catch((err)=>{
                console.log(err,'err is here guys')
            })
        },
        falseUserData(){
            this.$emit('falseUserSelected',false)
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";
.uk-textarea{
  margin-bottom: 20px;
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
