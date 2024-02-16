<template>
  <div>
    <div :class="'resume-box fifth '+(canFill ? 'fade' : '')" v-if="universities[0].type === 'سفارت'">
      <ul class="uk-subnav uk-subnav-pill" uk-switcher>
        <li :key="index" v-for="(university, index) in universities" v-if="index===0">
          <a
              :class="{
            error:
              universitiesErrors.includes(`text1-${index}`) ||
              universitiesErrors.includes(`text2-${index}`),
          }"
              @click="selectUniversity(university.name)"
          >
            {{ university.name }}
          </a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li
            :class="{ 'uk-active': index == 0 }"
            :key="index"
            v-for="(university, index) in universities"
        >
          <h3>درباره هر کدام از موضوعات زیر توضیح دهید</h3>
          <hr/>
          <form>
            <div>
              <p>علت انتخاب این دانشگاه</p>
              <textarea
                  :class="{
                'error-input': universitiesErrors.includes(`text1-${index}`),
              }"
                  :value="university.text1"
                  @change="changeText1({ val: $event.target.value, index })"
                  @focus="removeFromUniversitiesError(`text1-${index}`)"
                  placeholder="دانشگاه فنی فرانکفورت سالها‌ است که به‌صورت تخصصی در راستای تعلیم و آماده‌سازی دانشجویان مرتبط با رشته مورد علاقه من فعالیت می‌کند. این دانشگاه در رنکینگ موقعیت بسیار خوبی دارد و همواره برگزارکننده دوره‌های علمی و دانشجویی است. دانشگاه فرانکفورت قطب اصلی ارائه رشته‌های مرتبط با مدیریت ساخت به صورت تخصصی است. این دانشگاه می‌تواند سکوی پرتابی برای تمام دانشجویانی باشد که در این رشته فعالیت می‌کنند."
                  rows="8"
              ></textarea>
            </div>
            <div>
              <p>علت انتخاب این رشته</p>
              <textarea
                  :class="{
                'error-input': universitiesErrors.includes(`text2-${index}`),
              }"
                  :value="university.text2"
                  @change="changeText2({ val: $event.target.value, index })"
                  @focus="removeFromUniversitiesError(`text2-${index}`)"
                  placeholder="بعد از دو سال که درس می‌خواندم کلاسی داشتم که واحد آن را برداشته بودم. به اسم مدیریت ساخت که این درس من را به شدت به ادامه تحصیل در این رشته علاقه‌مند کرد. دانشجویان در این درس به معنای واقعی کلمه صفر تا صد پروژه ساخت و مدیریت یک بنا را فرا می‌گیرند. بزرگترین ویژگی این رشته تحصیلی برای من چندوجهی بودن آن است. این ویژگی باعث می‌شود درکنار مسائل فنی وتکنیکی علم مهندسی، به علوم نرم‌افزاری کامپیوتر و حتی علوم مدیریتی و مدیریت پروژه هم احتیاج باشد. بنابراین دانشجویی که از این رشته فارغ‌التحصیل می‌شود، می‌تواند با استفاده از علم روز و با نگاه چند بعدی در بازار موفق شود. ولی متاسفانه این رشته در ایران به دلیل مسائل اقتصادی رشته مطرح و شناخته‌شده‌ای نیست. بنابراین به این فکر افتادم که علی‌رغم داشتن تجربه تجربه کاری، برای ادامه تحصیل در این رشته به یک کشور خوب مهاجرت کنم."
                  rows="8"
              ></textarea>
            </div>
          </form>
        </li>
      </ul>
    </div>
    <div :class="'resume-box fifth '+(canFill ? 'fade' : '')" v-if="universities[0].type === 'دانشگاه'">
      <ul class="uk-subnav uk-subnav-pill" uk-switcher>
        <li :key="index" v-for="(university, index) in universities" v-if="index>=1">
          <a
              :class="{
            error:
              universitiesErrors.includes(`text1-${index}`) ||
              universitiesErrors.includes(`text2-${index}`),
          }"
              @click="selectUniversity(university.name)"
          >
            {{ university.name }}
          </a>
        </li>
      </ul>
      <ul class="uk-switcher uk-margin">
        <li
            :class="{ 'uk-active': index == 0 }"
            :key="index"
            v-for="(university, index) in universities"
        >
          <h3>درباره هر کدام از موضوعات زیر توضیح دهید</h3>
          <hr/>
          <form>
            <div>
              <p>علت انتخاب این دانشگاه</p>
              <textarea
                  :class="{
                'error-input': universitiesErrors.includes(`text1-${index}`),
              }"
                  :value="university.text1"
                  @change="changeText1({ val: $event.target.value, index })"
                  @focus="removeFromUniversitiesError(`text1-${index}`)"
                  placeholder="دانشگاه فنی فرانکفورت سالها‌ است که به‌صورت تخصصی در راستای تعلیم و آماده‌سازی دانشجویان مرتبط با رشته مورد علاقه من فعالیت می‌کند. این دانشگاه در رنکینگ موقعیت بسیار خوبی دارد و همواره برگزارکننده دوره‌های علمی و دانشجویی است. دانشگاه فرانکفورت قطب اصلی ارائه رشته‌های مرتبط با مدیریت ساخت به صورت تخصصی است. این دانشگاه می‌تواند سکوی پرتابی برای تمام دانشجویانی باشد که در این رشته فعالیت می‌کنند."
                  rows="8"
              ></textarea>
            </div>
            <div>
              <p>علت انتخاب این رشته</p>
              <textarea
                  :class="{
                'error-input': universitiesErrors.includes(`text2-${index}`),
              }"
                  :value="university.text2"
                  @change="changeText2({ val: $event.target.value, index })"
                  @focus="removeFromUniversitiesError(`text2-${index}`)"
                  placeholder="بعد از دو سال که درس می‌خواندم کلاسی داشتم که واحد آن را برداشته بودم. به اسم مدیریت ساخت که این درس من را به شدت به ادامه تحصیل در این رشته علاقه‌مند کرد. دانشجویان در این درس به معنای واقعی کلمه صفر تا صد پروژه ساخت و مدیریت یک بنا را فرا می‌گیرند. بزرگترین ویژگی این رشته تحصیلی برای من چندوجهی بودن آن است. این ویژگی باعث می‌شود درکنار مسائل فنی وتکنیکی علم مهندسی، به علوم نرم‌افزاری کامپیوتر و حتی علوم مدیریتی و مدیریت پروژه هم احتیاج باشد. بنابراین دانشجویی که از این رشته فارغ‌التحصیل می‌شود، می‌تواند با استفاده از علم روز و با نگاه چند بعدی در بازار موفق شود. ولی متاسفانه این رشته در ایران به دلیل مسائل اقتصادی رشته مطرح و شناخته‌شده‌ای نیست. بنابراین به این فکر افتادم که علی‌رغم داشتن تجربه تجربه کاری، برای ادامه تحصیل در این رشته به یک کشور خوب مهاجرت کنم."
                  rows="8"
              ></textarea>
            </div>
          </form>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  computed: {
    universities() {
      console.log(this.$store.getters["motivations/universities"])
      return this.$store.getters["motivations/universities"];
    },
    canFill() {
      return this.$store.getters['motivations/canFill'];
    },
    selectedUniversity() {
      return this.$store.getters["motivations/selectedUniversity"];
    },
    universitiesErrors() {
      return this.$store.getters["motivations/universitiesErrors"];
    },
  },
  methods: {
    ...mapMutations({
      changeText1: "motivations/SET_UniversityText1",
      changeText2: "motivations/SET_UniversityText2",
      selectUniversity: "motivations/SET_SelectUniversity",
    }),
    removeFromUniversitiesError(name) {
      this.$store.dispatch("motivations/removeFromUniversitiesError", name);
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

textarea::placeholder {
  color: var(--text-gray);
}

.error {
  color: red !important;
}

.fifth {
  .uk-subnav {
    border-bottom: 1px solid var(--gray);
    margin-right: -1.5rem;
    margin-left: -1.5rem;

    li {
      padding-right: 1.5rem;
      padding-left: 0.5rem;

      a {
        padding: 0 0 0.75rem 0;
        color: var(--black);
        font-size: 0.9rem;
        transition: all 0.3s;
      }

      &.uk-active {
        a {
          border-bottom: 1px solid var(--main-color);
          font-weight: bold;
          background-color: inherit;
        }
      }

      &:hover {
        a {
          background-color: inherit;
        }
      }
    }
  }

  .uk-switcher {
    form {
      @include fbx-ai-start-jc-between;

      div {
        width: 48%;
        max-width: 48%;
        @include fbx-column-ai-start-jc-start;

        p {
          color: var(--black);
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
    }
  }
}

@include mobile-device {
  .fifth {
    .uk-subnav {
      li {
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 0.5rem;

        a {
          padding: 0 0 0.25rem 0;
          font-size: 0.75rem;
        }
      }
    }

    .uk-switcher {
      margin-bottom: 0;

      form {
        flex-wrap: wrap;

        div {
          margin-bottom: 1.5rem;
          width: 100%;
          max-width: 100%;

          &:last-child {
            margin-bottom: 0;
          }

          p {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .fifth {
    .uk-subnav {
      li {
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 0.5rem;

        a {
          padding: 0 0 0.25rem 0;
          font-size: 0.75rem;
        }
      }
    }

    .uk-switcher {
      form {
        div {
          p {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}

@include large-device {
  .fifth {
    .uk-subnav {
      li {
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
