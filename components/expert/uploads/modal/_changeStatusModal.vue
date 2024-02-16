<template>
  <div id="change-status-modal" class="delete-uploads-modal" uk-modal>
    <div v-if="upload" class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>وضعیت فعلی:
          <span v-if="upload.status!=2" :class="upload.status==1?'uk-text-success':'uk-text-danger'">
         {{upload.status==1?'تایید شده':'بررسی نشده'}}
        </span>
          <span v-else class="uk-text-danger">
         رد شده
        </span>
        </p>
        <button class="uk-modal-close-default" @click="rejectModal=false" uk-close></button>
      </div>
      <div v-if="!rejectModal" class="text">
        <p style="text-align: center">
          شما میتوانید از این قسمت وضعیت تایید یا عدم تایید فایل را تغییر دهید
          <br>
          <span v-if="upload.status==0" style="color: var(--dark-main-color);font-size: 8pt">
          (در صورت تایید فایل کاربر قادر به حذف آن نخواهد بود.)
          </span>
          <span v-else style="color: var(--dark-main-color);font-size: 8pt">
          (در صورت عدم تایید فایل، کاربر قادر به حذف آن خواهد بود.)
        </span>
        </p>
        <div class="submit-cancel">
          <button class="cancel uk-modal-close" @click="rejectModal=false">انصراف</button>
          <button @click="changeStatus(1)"
                  class="submit uk-modal-de uk-modal-close"
          >
            {{upload.status==1 ? 'بررسی نشده':'تایید'}}
          </button>
          <button @click="reject()" class="submit uk-modal-de">
            عدم تایید
          </button>
        </div>
      </div>
      <div v-else class="text">
        <p>
          لطفاً برای رد فایل علت رد را برای کاربر بنویسید تا بهتر بتواند مشکل فایل خودرا متوجه شود.
        </p>
        <div class="uk-margin">
          <textarea v-model="reasonOfReject" class="uk-textarea" rows="5" placeholder="علت رد مدرک.." aria-label="Textarea"></textarea>
        </div>

        <div class="submit-cancel">
          <button class="cancel uk-modal-close" @click="rejectModal=false">انصراف</button>
          <button @click="changeStatus(2)"
                  class="submit uk-modal-de uk-modal-close"
          >
            رد فایل
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
      rejectModal:false,
      reasonOfReject:null,
    };
  },
  props:{
    upload:Array
  },
  mounted(){
    // this.reasonOfReject=this.upload.reasonOfReject;
  },
  methods: {
    reject(){
      this.rejectModal=true;
    },
    changeStatus(status) {
      this.$axios.post('v1/expert/changeStatus',{id:this.upload.id,status:status,reasonOfReject:this.reasonOfReject}).then((res)=>{

        let emitData={upload:res.data.upload,id:this.upload.id};
        this.upload=res.data.upload;
        this.rejectModal=false;
        this.$emit('childData',emitData);
        this.$toasted.success(res.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }).catch((err)=>{
        console.log(err,'error is here guys')
      })
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
