<template>
  <div
      id="send-request-consulting-modal"
      class="request-consulting-modal"
      @click.self="closeModal"
      uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <!--                <p v-if="$auth.user.type === 1">فرم اطلاعات لازم برای مشاوره</p>-->
        <p>درخواست وقت مشاوره</p>
        <button
            class="uk-modal-close-default"
            type="button"
            @click="closeModal"
            uk-close
        ></button>
      </div>
      <transition mode="out-in" name="fade">
        <div class="text" v-if="reserved == false" key="reserved">
          <p class="explain">
            شما درخواست مشاوره تلفنی در روز
            <span>{{ telSupport.date.split("-").reverse().join("-") }}</span> و در بازه
            زمانی {{ telSupport.fromTime }} تا {{ telSupport.toTime }} را دارید لطفا موضوع
            درخواست مشاوره را در کــادر زیر وارد کنید
          </p>
          <form @submit.prevent="">
            <!--                        <div class="row" v-if="$auth.user.type === 1">-->
            <!--                            <div class="form-group w-31">-->
            <!--                                <input-->
            <!--                                        type="text"-->
            <!--                                        id="mobile"-->
            <!--                                        placeholder=" "-->
            <!--                                        v-model="mobile"-->
            <!--                                        @focus="removeFromError"-->
            <!--                                        :class="{-->
            <!--                    'error-input': errors.includes('mobile'),-->
            <!--                  }"-->
            <!--                                />-->
            <!--                                <label class="floating" for="mobile">شماره همراه</label>-->
            <!--                                <span v-if="errors.includes('mobile')" class="error"> سوابق تحصیلی را وارد کنید </span>-->
            <!--                            </div>-->
            <!--                            <div class="form-group w-31">-->
            <!--                                <input-->
            <!--                                        type="text"-->
            <!--                                        id="email"-->
            <!--                                        placeholder=" "-->
            <!--                                        v-model="email"-->
            <!--                                        @focus="removeFromError"-->
            <!--                                        :class="{-->
            <!--                    'error-input': errors.includes('email'),-->
            <!--                  }"-->
            <!--                                />-->
            <!--                                <label class="floating" for="email"> ایمیل</label>-->
            <!--                                <span v-if="errors.includes('email')" class="error"> سوابق تحصیلی را وارد کنید </span>-->
            <!--                            </div>-->
            <!--                            <div class="form-group w-31">-->
            <!--                                <input-->
            <!--                                        type="text"-->
            <!--                                        autocomplete="off"-->
            <!--                                        id="birthDate"-->
            <!--                                        placeholder=" "-->
            <!--                                        v-model="birthDate"-->
            <!--                                        @focus="removeFromError"-->
            <!--                                        :class="{-->
            <!--                    'error-input': errors.includes('birthDate'),-->
            <!--                  }"-->
            <!--                                />-->
            <!--                                <label class="floating" for="birthDate"> تاریخ تولد</label>-->
            <!--                                <span v-if="errors.includes('birthDate')" class="error"> تاریخ تولد را وارد کنید </span>-->
            <!--                            </div>-->
            <!--                            <div class="form-group w-31">-->
            <!--                                <input-->
            <!--                                        type="text"-->
            <!--                                        id="language"-->
            <!--                                        placeholder=" "-->
            <!--                                        v-model="language"-->
            <!--                                        @focus="removeFromError"-->
            <!--                                        :class="{-->
            <!--                    'error-input': errors.includes('language'),-->
            <!--                  }"-->
            <!--                                />-->
            <!--                                <label class="floating" for="language">زبان تحصیل</label>-->
            <!--                                <span v-if="errors.includes('language')" class="error"> زبان تحصیل را وارد کنید </span>-->
            <!--                            </div>-->
            <!--                            <div class="form-group w-31">-->
            <!--                                <input-->
            <!--                                        type="text"-->
            <!--                                        id="languageDocument"-->
            <!--                                        placeholder=" "-->
            <!--                                        v-model="languageDocument"-->
            <!--                                        @focus="removeFromError"-->
            <!--                                        :class="{-->
            <!--                    'error-input': errors.includes('languageDocument'),-->
            <!--                  }"-->
            <!--                                />-->
            <!--                                <label class="floating" for="languageDocument">مدرک زبان</label>-->
            <!--                                <span v-if="errors.includes('languageDocument')" class="error"> مدرک زبان را وارد کنید </span>-->
            <!--                            </div>-->

            <!--                            <div-->
            <!--                                    class="form-group custom-select w-31"-->
            <!--                                    v-click-outside-element="outSideMilitary"-->
            <!--                            >-->
            <!--                                <div @click="selectMilitary = !selectMilitary" class="select-selected">-->
            <!--                                    <p v-if="military == null">وضعیت خدمت</p>-->
            <!--                                    <p v-else>{{ military }}</p>-->
            <!--                                    <svg-->
            <!--                                            :class="{ rotate: selectMilitary }"-->
            <!--                                            height="24"-->
            <!--                                            style="transition: 0.3s all; fill: var(&#45;&#45;black)"-->
            <!--                                            viewBox="0 0 24 24"-->
            <!--                                            width="24"-->
            <!--                                            xmlns="http://www.w3.org/2000/svg"-->
            <!--                                    >-->
            <!--                                        <path d="M0 0h24v24H0z" fill="none"/>-->
            <!--                                        <path-->
            <!--                                                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"-->
            <!--                                        />-->
            <!--                                    </svg>-->
            <!--                                </div>-->
            <!--                                <transition name="fade">-->
            <!--                                    <div class="select-items" v-show="selectMilitary">-->
            <!--                                        <div-->
            <!--                                                @click="-->
            <!--                        Military('دارای کارت پایان خدمت');-->
            <!--                        outSideMilitary();-->
            <!--                      "-->
            <!--                                                style="text-align: right"-->
            <!--                                        >-->
            <!--                                            دارای کارت پایان خدمت-->
            <!--                                        </div>-->
            <!--                                        <div-->
            <!--                                                @click="-->
            <!--                        Military('در حال خدمت');-->
            <!--                        outSideMilitary();-->
            <!--                      "-->
            <!--                                                style="text-align: right"-->
            <!--                                        >-->
            <!--                                            در حال خدمت-->
            <!--                                        </div>-->
            <!--                                        <div-->
            <!--                                                @click="-->
            <!--                        Military('معافیت دائم');-->
            <!--                        outSideMilitary();-->
            <!--                      "-->
            <!--                                                style="text-align: right"-->
            <!--                                        >-->
            <!--                                            معافیت دائم-->
            <!--                                        </div>-->
            <!--                                        <div-->
            <!--                                                @click="-->
            <!--                        Military('معافیت تحصیلی');-->
            <!--                        outSideMilitary();-->
            <!--                      "-->
            <!--                                                style="text-align: right"-->
            <!--                                        >-->
            <!--                                            معافیت تحصیلی-->
            <!--                                        </div>-->
            <!--                                        <div-->
            <!--                                                @click="-->
            <!--                        Military('در فرجه تحصیلی یکساله');-->
            <!--                        outSideMilitary();-->
            <!--                      "-->
            <!--                                                style="text-align: right"-->
            <!--                                        >-->
            <!--                                            در فرجه تحصیلی یکساله-->
            <!--                                        </div>-->
            <!--                                        <div-->
            <!--                                                @click="-->
            <!--                        Military('مشمول وضعیت خدمت نیستم');-->
            <!--                        outSideMilitary();-->
            <!--                      "-->
            <!--                                                style="text-align: right"-->
            <!--                                        >-->
            <!--                                            مشمول وضعیت خدمت نیستم-->
            <!--                                        </div>-->
            <!--                                    </div>-->
            <!--                                </transition>-->
            <!--                                <span v-if="errors.includes('military')" class="error"> وضعیت خدمت را وارد کنید </span>-->
            <!--                            </div>-->
            <!--                        </div>-->
            <!--                        <div class="row" v-if="$auth.user.type === 1" style="margin-top: 10px">-->
            <!--                            <div class="form-group w-100">-->
            <!--                                <input-->
            <!--                                        type="text"-->
            <!--                                        id="grade"-->
            <!--                                        placeholder=" "-->
            <!--                                        v-model="grade"-->
            <!--                                        @focus="removeFromError"-->
            <!--                                        :class="{-->
            <!--                    'error-input': errors.includes('grade'),-->
            <!--                  }"-->
            <!--                                />-->
            <!--                                <label class="floating" for="grade"-->
            <!--                                >سوابق تحصیلی (رشته تحصیلی ، مقطع ، معدل)</label-->
            <!--                                >-->
            <!--                            </div>-->
            <!--                            <span v-if="errors.includes('grade')" class="error"> سوابق تحصیلی را وارد کنید </span>-->
            <!--                        </div>-->
            <div class="row" style="margin-top: 10px">
              <div class="form-group w-100">
                <input
                    type="text"
                    id="title"
                    placeholder=" "
                    v-model="title"
                    @focus="removeFromError"
                    :class="{
                    'error-input': errors.includes('title'),
                  }"
                />
                <label class="floating" for="title">موضوع مشاوره</label>
              </div>
            </div>
            <span v-if="errors.includes('title')" class="error"> موضوع را وارد کنید </span>
          </form>
          <div class="price-buttons">
            <div class="price" v-if="telSupport.price !== null">
              <span>هزینه مشاوره</span>
              <p v-if="$auth.user.type === 2 || $auth.user.type === 3">رایگان</p>
              <p v-else-if="$auth.user.type === 1 && $auth.user.tel_support_flag">
                رایگان
              </p>
              <p v-else>ریال {{ telSupport.price | numberFilter }}</p>
            </div>
            <div
                class="buttons"
                v-if="$auth.user.type === 1 && !$auth.user.tel_support_flag"
            >
              <button class="submit uk-modal-close" @click="chooseTelSupport">
                ثبت و پرداخت
              </button>
              <a class="cancel uk-modal-close" @click="title = ''">انصراف</a>
            </div>
            <div class="buttons" v-else>
              <button
                  class="submit"
                  v-if="choosing === false"
                  @click="chooseTelSupportSpecial"
              >
                ثبت
              </button>
              <button class="submit" v-else>چند لحظه صبر کنید</button>
              <a class="cancel uk-modal-close">انصراف</a>
            </div>
          </div>
        </div>
        <div class="text" v-else key="reserved-true">
              <p class="explain" v-if="expert.id != 26214 && expert.id!=26212">
                  کار
                  بر گرامی! تایم مشاوره شما برای تاریخ
                  <span>{{
                      telSupport ? telSupport.date.split("-").reverse().join("-") : ""
                      }}</span>
                  در بازه زمانی {{ telSupport.fromTime }} تا {{ telSupport.toTime }} با موفقیت
                  رزرو شد. توجه داشته باشید که مشاوره به صورت تماس صوتی در اپلیکیشن واتساپ انجام
                  می‌شود. لطفا .در تایم مقرر با شماره زیر تماس بگیرید
              </p>
              <p v-else>
                  کار
                  بر گرامی! تایم مشاوره شما برای تاریخ
                  <span>{{
                      telSupport ? telSupport.date.split("-").reverse().join("-") : ""
                      }}</span>
                  در بازه زمانی {{ telSupport.fromTime }} تا {{ telSupport.toTime }} با موفقیت
                  رزرو شد. توجه داشته باشید که مشاور مربوطه در موعد مقرر با شما تماس خواهد گرفت.
              </p>
              <div class="whatsapp-got">
                  <div class="got">
                      <a class="uk-modal-close" @click="closeModal">متوجه شدم</a>
                  </div>
                  <div v-if="expert.id != 26214 && expert.id!=26212" class="whatsapp">
                      <div class="text">
                          <span class="latin-font">whatsapp</span>
                          <p class="latin-font">
                              <a :href="expertNumber(expert.mobile)">
                                  {{ expert.mobile }}
                              </a>
                          </p>
                      </div>
                      <div class="icon">
                          <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="36"
                                  height="36"
                                  viewBox="0 0 36 36"
                                  class="uk-svg"
                          >
                              <path
                                      id="whatsapp"
                                      d="M31,5.232A17.942,17.942,0,0,0,.4,17.838a17.741,17.741,0,0,0,2.393,8.918L.25,36l9.5-2.481a17.974,17.974,0,0,0,8.566,2.171h.008A17.908,17.908,0,0,0,36.25,17.852,17.686,17.686,0,0,0,31,5.232ZM18.325,32.678h-.006a14.934,14.934,0,0,1-7.583-2.067l-.544-.321L4.554,31.762l1.505-5.471L5.7,25.73A14.822,14.822,0,0,1,18.331,3.013a14.833,14.833,0,1,1-.006,29.665Zm8.172-11.1c-.448-.223-2.65-1.3-3.06-1.45s-.709-.223-1.007.223-1.157,1.45-1.418,1.747-.522.335-.97.112a12.246,12.246,0,0,1-3.6-2.212,13.455,13.455,0,0,1-2.492-3.088c-.261-.446,0-.664.2-.91a12.611,12.611,0,0,0,1.12-1.525.816.816,0,0,0-.038-.781c-.112-.223-1.007-2.417-1.381-3.31-.364-.869-.733-.751-1.008-.765s-.56-.016-.858-.016a1.649,1.649,0,0,0-1.194.558,4.989,4.989,0,0,0-1.567,3.718,8.65,8.65,0,0,0,1.829,4.611c.224.3,3.158,4.8,7.651,6.73a25.715,25.715,0,0,0,2.553.939,6.168,6.168,0,0,0,2.821.177c.861-.128,2.65-1.078,3.023-2.119a3.708,3.708,0,0,0,.261-2.12c-.112-.186-.41-.3-.858-.521Zm0,0"
                                      transform="translate(-0.25)"
                                      fill="#e2ad42"
                                      fill-rule="evenodd"
                              ></path>
                          </svg>
                      </div>
                  </div>
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
      selectMilitary: false,
      title: null,
      military: null,
      mobile: this.$auth.user.mobile,
      email: this.$auth.user.email,
      birthDate: null,
      language: null,
      languageDocument: null,
      grade: null,
      errors: [],
    };
  },
  computed: {
    telSupport() {
      return this.$store.getters["telSupports/telSupport"];
    },
    expertId() {
      return this.$store.getters["telSupports/expertId"];
    },
    expert() {
      return this.$store.getters["telSupports/expert"];
    },

  },
  methods: {
    expertNumber(number){
      if(number.startsWith('00')) {
        number = '+' + number.slice(2);
      }
      return 'whatsapp://send?text=سلام '+this.expert.firstname+' من برای تاریخ: '+this.telSupport.date+'و در بازه زمانی: '+this.telSupport.fromTime+' تا '+this.telSupport.toTime+ 'با شما تایم مشاوره گرفته ام، با اینکه خودم تمام تلاشم رو میکنم تا سر موقع با شما تماس بگیرم، اگر فراموش کردم خوشحال میشم شما با بنده تماس بگیرید.&phone='+number+'&abid='+number;
    },
    Military(military) {
      this.military = military;
    },
    outSideMilitary() {
      this.selectMilitary = false;
    },
    closeModal() {
      setTimeout(() => {
        this.reserved = false;
        this.choosing = false;
      }, 200);
    },
    async chooseTelSupport() {
      this.errors = [];
      if (this.title === "" || this.title == null) this.errors.push("title");
      if (this.errors.length > 0) return;

      this.choosing = true;
      const chooseTelSupport = await this.$axios.post("v1/user/chooseTelSupport", {
        id: this.telSupport.id,
        title: this.title,
        military: this.military,
        mobile: this.mobile,
        email: this.email,
        birthDate: this.birthDate,
        language: this.language,
        languageDocument: this.languageDocument,
        grade: this.grade,
      });

      if (chooseTelSupport.data.status === 1) {
        this.$toasted.success(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.closeModal();
        this.$router.push(`/payment/${chooseTelSupport.data.hash}`);
        this.$store.dispatch("telSupports/expertTelSupports", this.expertId);
      } else if (chooseTelSupport.data.status === 422) {
        this.errors = chooseTelSupport.data.errors;
        this.$toasted.info(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.choosing = false;
      this.title = "";
    },
    async chooseTelSupportSpecial() {
      this.errors = [];
      // if(this.$auth.user.type === 1 && this.$auth.user.tel_support_flag) {
      //     if (this.mobile === "" || this.mobile == null) this.errors.push("mobile");
      //     if (this.email === "" || this.email == null) this.errors.push("email");
      //     if (this.birthDate === "" || this.birthDate == null) this.errors.push("birthDate");
      //     if (this.language === "" || this.language == null) this.errors.push("language");
      //     if (this.languageDocument === "" || this.languageDocument == null) this.errors.push("languageDocument");
      //     if (this.military === "" || this.military == null) this.errors.push("military");
      //     if (this.grade === "" || this.grade == null) this.errors.push("grade");
      // }
      if (this.title === "" || this.title == null) this.errors.push("title");
      if (this.errors.length > 0) return;

      this.choosing = true;
      const chooseTelSupport = await this.$axios.post("v1/user/chooseTelSupport", {
        id: this.telSupport.id,
        title: this.title,
        military: this.military,
        mobile: this.mobile,
        email: this.email,
        birthDate: this.birthDate,
        language: this.language,
        languageDocument: this.languageDocument,
        grade: this.grade,
      });
      if (chooseTelSupport.data.status === 1) {
        this.$toasted.success(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });

        const {data} = await this.$axios.post(`v1/user/expertTelSupports`, {
          id: this.expertId,
        });

        this.$store.commit("telSupports/SET_ExpertId", data.expert.id);
        this.$store.commit("telSupports/SET_Expert", data.expert);
        this.$store.commit("telSupports/SET_Times", data.times);
        this.$store.commit("telSupports/SET_NextTelSupport", data.nextTelSupport);
        this.$store.commit("telSupports/SET_TelSupportReserve", data.nextTelSupport);
        this.$store.commit("telSupports/SET_Comments", data.comments);

        this.$store.dispatch("telSupports/expertTelSupports", this.expertId);

        this.reserved = true;
      } else if (chooseTelSupport.data.status === 422) {
        this.errors = chooseTelSupport.data.errors;
        this.$toasted.info(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.choosing = false;
      this.title = "";
    },
    removeFromError() {
      this.errors = [];
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.form-group {
  width: 100%;
  margin-bottom: 1.5rem;
  position: relative;

  input {
    width: 80%;
    border: 1px solid rgba(black, 0.1);
    padding: 1rem;
    border-radius: 5px;
    font-size: 0.9rem;
    -ms-box-sizing: content-box;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    transition: 0.3s ease-in-out all;
  }

  input::placeholder {
    font-size: 0.8rem;
    font-weight: 300;
    transition: 0.2s ease-in;
  }

  input:focus,
  select:focus {
    // border: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
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

  .error {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    color: red;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label {
    top: -12%;
    padding: 0 0.5rem;
  }
}

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
}

w-31 {
  width: 31% !important;
}

@media screen and (max-width: 1535px) {
  .w-31 {
    width: 31.3% !important;
  }
}

@media screen and (max-width: 1370px) {
  .w-31 {
    width: 30.5% !important;
  }
}

@media screen and (max-width: 1280px) {
  .w-31 {
    width: 30.5% !important;
  }
}

@media screen and (max-width: 1070px) {
  .w-31 {
    width: 30.4% !important;
  }
}

@media screen and (max-width: 1038px) {
  .w-31 {
    width: 30.3% !important;
  }
}

@media screen and (max-width: 1008px) {
  .w-31 {
    width: 30.1% !important;
  }
}

@media screen and (max-width: 934px) {
  .w-31 {
    width: 30% !important;
  }
}

@media screen and (max-width: 910px) {
  .w-31 {
    width: 46.5% !important;
  }
}

@media screen and (max-width: 875px) {
  .w-31 {
    width: 46.3% !important;
  }
}

@media screen and (max-width: 830px) {
  .w-31 {
    width: 45.6% !important;
  }
}

@include mobile-device {
  .w-31 {
    width: 100% !important;
  }
}
</style>
