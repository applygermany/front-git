<template>
  <div :class="'resume-box second '+(canFill ? 'fade' : '')">
    <h3>2-اطلاعات فردی دقیقا مطابق با پاسپورت</h3>
    <hr />
    <div class="body">
      <form @submit.prevent="">
        <div class="row">
          <div class="form-group">
            <input
              :value="resume.name"
              @focus="removeFromError('name')"
              @change="
                changeName($event.target.value);
                checkFirst();
              "
              placeholder=" "
              :class="{ 'error-input': errors.includes('name') }"
              @keyup="checkEnLang"
            />
            <label class="floating">نام (انگلیسی)</label>
          </div>
          <div class="form-group">
            <input
              :value="resume.family"
              @focus="removeFromError('family')"
              @change="
                changeFamily($event.target.value);
                checkFirst();
              "
              placeholder=" "
              :class="{ 'error-input': errors.includes('family') }"
              @keyup="checkEnLang"
            />
            <label class="floating">نام خانوادگی (انگلیسی)</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <client-only>
              <input
                      :class="{ 'error-input': errors.includes('birthDate') }"
                      @focus="removeFromError('birthDate')"
                      id="birthDate"
                      placeholder=" "
                      ref="birthDate"
              />
              <label class="floating" for="birthDate">تاریخ تولد</label>

              <date-picker
                      :show="showDatePicker"
                      :value="resume.birthDate"
                      @input="changeBirthDate($event)"
                      color="#e2ad42"
                      custom-input="#birthDate"

                      display-format="jDD jMMMM jYYYY"
                      format="YYYY-MM-DD"
                      locale="en"
                      onclose="showDatePicker = false"
              />
              <div class="calender">
                <svg @click="showDate()"
                     class="uk-svg uk-svg"
                     fill="none"
                     height="24"
                     viewBox="0 0 24 24"
                     width="24"
                     xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                          d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"
                          stroke="#141414"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                  ></path>
                </svg>
              </div>
            </client-only>
          </div>
          <div class="form-group">
            <input
              :value="resume.birthPlace"
              @change="
                changeBirthPlace($event.target.value);
                checkFirst();
              "
              placeholder=" "
              :class="{ 'error-input': errors.includes('birthPlace') }"
              @focus="removeFromError('birthPlace')"
            />
            <label class="floating">محل تولد</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <input
                :value="resume.phone"
              @change="
                changePhone($event.target.value);
                checkFirst();
              "
              @focus="removeFromError('phone')"
              type="number"
              placeholder=" "
              :class="{ 'error-input': errors.includes('phone') }"
            />
            <label class="floating">شماره تماس</label>
          </div>
          <div class="form-group">
            <input
                :value="resume.email"
              @change="
                changeEmail($event.target.value);
                checkFirst();
              "
              @focus="removeFromError('email')"
              type="email"
              placeholder=" "
              :class="{ 'error-input': errors.includes('email') }"
            />
            <label class="floating">ایمیل</label>
          </div>
        </div>
        <div class="row">
          <div class="form-group">
            <input
              :value="resume.address"
              @change="
                changeAddress($event.target.value);
                checkFirst();
              "
              @focus="removeFromError('address')"
              placeholder=" "
              :class="{ 'error-input': errors.includes('address') }"
            />
            <label class="floating">آدرس</label>
          </div>
          <div class="form-group">
            <input
              :value="resume.socialmediaLinks"
              @change="
                changeSocialMediaLinks($event.target.value);
                checkFirst();
              "
              @focus="removeFromError('socialmediaLinks')"
              placeholder=" "

            />
            <label class="floating">لینک شبکه اجتماعی لینکدین (اختیاری)</label>
          </div>
        </div>
      </form>
      <div class="personal-image">
        <div class="img"
             :class="{ 'error-input': errors.includes('image') }">
          <img
            :src="imagePreview"
            v-if="imagePreview !== null"
            style="opacity: 1 !important"
          />
          <template v-else>
            <img
              :src="resume.image"
              v-if="resume.image !== false && resume.image !== null"
              style="opacity: 1 !important"
            />
            <template v-else>
              <img
                src="/user/assets/user/Personal_Light..png"
                class="img_light"
                alt="" />
              <img
                src="/user/assets/user/personal_dark..png"
                class="img_dark"
                alt=""
            /></template>
          </template>
          <div class="js-upload">
            <input
              type="file"
              ref="image"
              @change="uploadImage"
              style="display: none"
            />
            <button type="button" tabindex="-1" @click="chooseImage">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M12 5.75V18.25"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.25 12H5.75"
                  stroke="#141414"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <span>عکس پرسنلی</span>
        <p>
          ،توصیـه می‌شود عکـس پرسنلی شمـا بصورت سه‌رخ با لباس رسمی و همراه با
          لبخند باشد و لطفا از آپلود عکس پاسپورت اجتناب کنید
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["resume"],
  data() {
    return {
      showDatePicker: false,
      setTime: null,
    };
  },
  computed: {
    errors() {
      return this.$store.getters["resume/errors"];
    },
    canFill() {
      return this.$store.getters["resume/canFill"];
    },
    imagePreview(){
      return this.$store.getters["resume/image"];
    }
  },
  created() {
    this.$store.commit("resume/SET_ResumeName", this.$auth.user.firstnameEn)
    this.$store.commit("resume/SET_ResumeFamily", this.$auth.user.lastnameEn)
    this.$store.commit("resume/SET_ResumePhone", this.$auth.user.mobile)
    this.$store.commit("resume/SET_ResumeBirthPlace", null)
    this.$store.commit("resume/SET_ResumeEmail", this.$auth.user.email)
    this.$store.commit("resume/SET_ResumeAddress", null)
    this.$store.commit("resume/SET_ResumeBirthDate", this.$auth.user.birthDate)
    this.$store.commit("resume/SET_ResumeSocialMediaLinks", null)
  },
  methods: {
    ...mapMutations({
      changeName: "resume/SET_ResumeName",
      changeFamily: "resume/SET_ResumeFamily",
      changePhone: "resume/SET_ResumePhone",
      changeBirthPlace: "resume/SET_ResumeBirthPlace",
      changeEmail: "resume/SET_ResumeEmail",
      changeAddress: "resume/SET_ResumeAddress",
      changeSocialMediaLinks: "resume/SET_ResumeSocialMediaLinks",
    }),
    checkFirst() {
      clearTimeout(this.setTime);

      console.log(true);
      // this.setTime = setTimeout(
      //   () => this.$store.dispatch("resume/updateResumeInformation"),
      //   10000
      // );
    },
    changeBirthDate(event) {
      this.showDatePicker = false;
      this.$store.commit("resume/SET_ResumeBirthDate", event)
    },
    focusBirthDate() {
      console.log(this.$refs.birthDate.$el)
    },
    showDate() {
      this.showDatePicker = false;
      setTimeout(() => {
        this.showDatePicker = true
      }, 250)
    },
    async uploadImage() {
      const fd = new FormData();
      const file = this.$refs.image.files[0];
      fd.append("image", file);
      fd.append("id", this.$store.getters["resume/resumeId"]);

      try {
        await this.$store.dispatch("resume/resumeUploadImage", fd);
      } catch (err) {
        if (err.message.includes("موفقیت")) {
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
          this.$store.commit("resume/SET_Image", {src: URL.createObjectURL(file)})
        } else {
          this.$toasted.error(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        }
      }
    },
    chooseImage() {
      this.$refs.image.click();
    },
    removeFromError(name) {
      this.$store.dispatch("resume/removeFromError", name);
      return true;
    },
    checkEnLang(event) {
      this.$nextTick(() => {
        if (event.target.value == "") return true;
        let check = /^[a-zA-Z.]+$/.test(event.target.value.replace(/\s/g, ""));

        if (!check) {
          event.preventDefault();
          event.target.value = event.target.value.slice(0, -1);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.second {
  .body {
    @include fbx-ai-start-jc-between;
    form {
      width: 70%;
      max-width: 70%;
      .row {
        @include fbx-ai-start-jc-between;
        margin-bottom: 1.5rem;
        .form-group {
          width: 48%;
        }
      }
    }
    .personal-image {
      width: 25%;
      max-width: 25%;
      @include fbx-column-ai-center-jc-center;
      .img {
        width: 280px;
        max-height: 280px;
        border-radius: 8px;
        border: 1px solid var(--gray);
        padding: 0.75rem 0.75rem 0 0.75rem;
        margin-bottom: 1rem;
        position: relative;
        overflow: hidden;
        img {
          opacity: 0.06;
          &.img_dark {
            display: none;
          }
        }
        .js-upload {
          position: absolute;
          left: 0.75rem;
          bottom: 0.75rem;
          button {
            background-color: inherit;
            border: 0;
            padding: 0;
            svg {
              background-color: var(--main-color);
              border-radius: 50%;
              color: var(--white);
              width: 1.25rem;
            }
          }
        }
      }
      span {
        font-size: 0.9rem;
        font-weight: 800;
        color: var(--black);
        margin-bottom: 0.5rem;
      }
      p {
        color: var(--text-gray);
        font-weight: 500;
        font-size: 0.8rem;
        line-height: 1.8rem;
        text-align: center;
      }
    }
  }
}

@include mobile-device {
  .second {
    .body {
      flex-wrap: wrap;
      form {
        width: 100%;
        max-width: 100%;
        .row {
          margin-bottom: 0;
          flex-wrap: wrap;
          .form-group {
            margin-bottom: 1.5rem;
            width: 100%;
          }
        }
      }
      .personal-image {
        text-align: center;
        width: 100%;
        max-width: 100%;
        @include fbx-column-ai-center-jc-center;
        .img {
          padding: 0.75rem 0.75rem 0 0.75rem;
          margin-bottom: 1rem;
          img {
            opacity: 0.06;
          }
          .js-upload {
            position: absolute;
            left: 0.75rem;
            bottom: 0.75rem;
          }
        }
        span {
          font-size: 0.8rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include tablet-device {
  .second {
    .body {
      flex-wrap: wrap;
      form {
        width: 100%;
        max-width: 100%;
        .row {
          margin-bottom: 0;
          flex-wrap: wrap;
          .form-group {
            margin-bottom: 1.5rem;
            width: 100%;
          }
        }
      }
      .personal-image {
        text-align: center;
        width: 40%;
        max-width: 40%;
        @include fbx-column-ai-center-jc-center;
        .img {
          padding: 0.75rem 0.75rem 0 0.75rem;
          margin-bottom: 1rem;
          img {
            opacity: 0.06;
          }
          .js-upload {
            position: absolute;
            left: 0.75rem;
            bottom: 0.75rem;
          }
        }
        span {
          font-size: 0.8rem;
        }
        p {
          font-size: 0.75rem;
        }
      }
    }
  }
}
</style>
