<template>
  <div class="ninth-tenth-eleventh">
    <div class="resume-box ninth">
      <h3>9- تفریحات</h3>
      <hr />
      <form @submit.prevent="">
        <div class="row">
          <div class="form-group w-100">
            <input placeholder=" " disabled />
            <label class="floating">عنوان تفریح</label>
          </div>
        </div>
      </form>
      <div class="items">
        <div
          class="item"
          v-for="(hobby, index) in previewResume.hobbies"
          :key="index"
        >
          <span>{{ hobby.title }}</span>
        </div>
      </div>
    </div>
    <div class="resume-box tenth">
      <h3>10- آپلود رزومه</h3>
      <hr />
      <p>
        چنـانچـه از قبـل رزومـه خود را طراحـی کرده‌ایـد، آن را آپلود کنید. تکمیل
        یا ناقص بودن آن اهمیتی ندارد
      </p>
      <div
        class="js-upload uk-placeholder uk-text-center"
        v-if="previewResume.url_uploaded_from_user == null"
      >
        <div class="left">
          <span class="uk-text-middle latin-font">
            You did not upload a file
          </span>
        </div>
      </div>
      <div class="js-upload uk-placeholder uk-text-center" v-else>
        <div class="left">
          {{ previewResume.url_uploaded_from_user.split("/")[4] }}
        </div>
      </div>
    </div>
    <div class="resume-box eleventh">
      <h3>11- توضیحات</h3>
      <hr />
      <form>
        <div class="row">
          <div class="form-group w-100">
            <textarea
              placeholder="نوشتن"
              v-model="previewResume.text"
              disabled
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    previewResume() {
      return this.$store.getters["resume/previewResume"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.ninth-tenth-eleventh {
  @include fbx-ai-start-jc-between;
  align-items: stretch;
  > div {
    width: 28%;
  }
  .ninth {
    form {
      .row {
        @include fbx-ai-center-jc-between;
        flex-wrap: wrap;
      }
    }
    .items {
      margin-top: 1rem;
      @include fbx-ai-start-jc-start;
      flex-wrap: wrap;
      width: 100%;
      margin-left: -0.5rem;
      margin-right: -0.5em;
      .item {
        margin-left: 0.5rem;
        margin-right: 0.5em;
        margin-bottom: 0.5rem;
        @include fbx-ai-center-jc-between;
        border-radius: 5px;
        padding: 0.5rem 0.75rem;
        background-color: var(--main-color);
        span {
          font-size: 0.8rem;
          color: var(--white);
          margin-left: 1rem;
        }
        button {
          color: var(--white);
          svg {
            width: 0.75rem;
          }
        }
      }
    }
  }
  .tenth {
    p {
      line-height: 1.8rem;
      text-align: justify;
      color: var(--text-gray);
      font-size: 0.8rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
      cursor: pointer;
    }
    .js-upload {
      margin-top: 0;
      margin-bottom: 0;
      border-radius: 5px;
      direction: ltr;
      border-color: var(--gray);
      background-color: var(--inner-background-color);
      .uk-text-middle {
        color: var(--black);
        font-weight: 500;
        font-size: 1rem;
      }
      .uk-link {
        color: var(--main-color);
        font-size: 1rem;
        font-weight: 500;
      }
      .rule {
        font-size: 0.9rem;
        color: var(--text-gray);
      }
    }
  }
  .eleventh {
    form {
      height: 70%;

      .row {
        height: 100%;

        .form-group {
          height: 100%;

          textarea {
            height: 85%;

            &::placeholder {
              color: var(--text-gray);
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .ninth-tenth-eleventh {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
    .ninth {
      .items {
        .item {
          padding: 0.5rem 0.5rem;
        }
      }
    }
    .eleventh {
      form {
        height: 40%;
        position: relative;
        textarea {
          font-size: 0.8rem;
          border: 1px solid var(--gray);
          border-radius: 5px;
          width: calc(99.8% - 1.5rem);
          padding: 0.75rem;
          color: var(--black);
          background-color: var(--white);
          transition: all 0.3s;
          height: 5rem;
          &.error {
            border: 1px solid red;
            &:focus {
              outline: 0;
              border-color: red;
            }
          }
          &::placeholder {
            font-family: iransansx;
            font-size: 0.8rem;
            color: var(--main-color);
            direction: rtl;
            text-align: right;
            font-weight: 300;
            transition: 0.2s ease-in;
          }
          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }
        }
        .floating {
          top: 0.75rem;
          right: 0.75rem;
          position: absolute;
          pointer-events: none;
          transition: 0.2s ease all;
          background-color: var(--white);
          color: var(--text-gray);
          font-size: 0.8rem;
          font-weight: 300;
        }
        span.error {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: red;
        }
        textarea:focus ~ label,
        textarea:not(:placeholder-shown) ~ label {
          top: -7%;
          padding: 0 0.5rem;
        }
      }
    }
  }
}

@include tablet-device {
  .ninth-tenth-eleventh {
    flex-wrap: wrap;
    > div {
      width: 100%;
    }
    .ninth {
      .items {
        .item {
          padding: 0.5rem 0.5rem;
        }
      }
    }
    .eleventh {
      form {
        height: 40%;
        position: relative;
        textarea {
          font-size: 0.8rem;
          border: 1px solid var(--gray);
          border-radius: 5px;
          width: calc(99.8% - 1.5rem);
          padding: 0.75rem;
          color: var(--black);
          background-color: var(--white);
          transition: all 0.3s;
          height: 5rem;
          &.error {
            border: 1px solid red;
            &:focus {
              outline: 0;
              border-color: red;
            }
          }
          &::placeholder {
            font-family: iransansx;
            font-size: 0.8rem;
            color: var(--main-color);
            direction: rtl;
            text-align: right;
            font-weight: 300;
            transition: 0.2s ease-in;
          }
          &:focus {
            outline: 0;
            border-color: var(--main-color);
          }
        }
        .floating {
          top: 0.75rem;
          right: 0.75rem;
          position: absolute;
          pointer-events: none;
          transition: 0.2s ease all;
          background-color: var(--white);
          color: var(--text-gray);
          font-size: 0.8rem;
          font-weight: 300;
        }
        span.error {
          font-size: 0.8rem;
          margin-top: 0.5rem;
          color: red;
        }
        textarea:focus ~ label,
        textarea:not(:placeholder-shown) ~ label {
          top: -7%;
          padding: 0 0.5rem;
        }
      }
    }
  }
}

.vpd-icon-btn {
  display: none !important;
}
.dz-preview {
  display: none;
}

.uploaded-file-info,
.upload-progressing {
  display: flex;
  padding: 30px 15px;
  gap: 30px;
  flex-direction: row-reverse;
  width: calc(100% - 30px);
  height: 30%;
  align-items: center;
  background-color: rgba(241, 240, 240, 0.45);

  > div {
    width: 100%;
    direction: ltr;
    display: flex;
    align-items: center;

    > .left {
      width: 100% !important;
      display: flex;
      flex-direction: column;
    }

    progress {
      margin: 0.5rem 0 0 0;
      height: 3px;
    }
    /* For Firefox */
    progress::-moz-progress-bar {
      background-color: var(--light-main-color);
    }

    /* For Chrome or Safari */
    progress::-webkit-progress-value {
      background-color: var(--light-main-color);
    }
    progress::-webkit-progress-bar {
      background-color: var(--black);
    }
  }
}
</style>
