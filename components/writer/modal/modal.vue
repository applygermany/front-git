<template>
  <div id="motivations-modal" class="motivations-modal uk-modal uk-flex uk-open" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>اطلاعات رزومه ها</p>
        <button class="uk-modal-close-default" type="button" @click="changeModalNumber"  uk-close></button>
      </div>
      <div class="text">
        <p>
          نگارنده عزیز!

          این کاربر علاوه بر انگیزه نامه رزومه هم دارد و میتوانید اطلاعات رزومه های ایشان را با کلیک بر روی هر کدام مشاهده نمایید.

        </p>
        <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
          <div v-for="(res,index) in resumes" :key="'resumes'+index">
            <nuxt-link :to="`/writer/resume/` + res.id" class="uk-modal-close">
              <div class="uk-card uk-card-default uk-card-body resumeCard" style="padding: 20px;">
                <span uk-icon="icon:info; ratio: 2" style="display: block;text-align: center;font-size: 45pt !important;margin: 10px auto 20px;color: #e2ad42;"></span>
                <h3 class="uk-card-title" style="font-size: 11pt;font-weight: bold;text-align: center">
                  {{res.name}}</h3>
                <p v-if="res.text" style="font-size: 8pt !important;">{{ res.text.length  > 65 ? res.text.substring(0,65)+'..':res.text }}</p>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="submit-cancel">
          <button class="cancel " @click="changeModalNumber">انصراف</button>
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
    resumes:Array,
  },
  methods:{
    changeModalNumber(){
      this.$emit('closeModal',false);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";
.resumeCard{
  p{
    margin-bottom: unset !important;
    line-height: 20px !important;
    text-align: center !important;
  }
}
.resumeCard:hover{
  border-radius: 10px;
  border: 1px dashed #2b2b2b;
}
.numbers-of-unies{
  color: #e2ad42;
  font-weight: bold;
  text-decoration: underline;
}
.motivations-modal {
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
  .motivations-modal {
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
