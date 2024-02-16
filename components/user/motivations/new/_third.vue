<template>
  <div :class="'resume-box third '+(canFill ? 'fade' : '')">
    <h3>درباره هر کدام از موضوعات زیر توضیح دهید</h3>
    <hr />
    <form  >
      <div>
        <p>درباره خودتان</p>
        <textarea
          rows="8"
          placeholder="من رضا رضایی هستم. متولد هفتم مرداد 1370 در تهران متولد و بزرگ شدم. از کودکی بسیار به حوزه‌های ساخت و خلق ابزار جدی علاقه‌مند بودم. در دوره راهنمایی در مدرسه‌ای درس خواندم که هیئت امنایی بود بعد برای رفتن به دبیرستان باید ازمون میدادیم من هم نمونه دولتی قبول شدم و هم دبیرستان البرز و من دبیرستان دانشمند که نمونه دولتی منطقه 8 بود را انتخاب و شروع به درس خوندن در این دبیرستان کردم. از همان ابتدا به شدت علاقه‌ام به رشته ریاضی فیزیک بود و با فکر قبلی آن را انتخاب کردم. در طول دوران دبیرستان هر زمان فعالیت علمی فوق برنامه‌ای بود من در آن شرکت می‌کردم و به ویژه در زمان‌هایی که قرار به ساختن چیزی بود من یکی از افرادی بودم که حتما مشارکت می‌کردم.
بعد از گرفتن دیپلم و مدرک پیش‌دانشگاهی در کنکور شرکت کردم در دوران دبیرستان متوجه شده بودم که علاقه من به رشته عمران هست.  یعنی چون از کودکی افراد خانواده رو مشاهده می‌کردم که در حوزه ساخت و ساز مشغول هستند، هر موقع که می‌دیدم چقدر جذاب می‌تواند باشد که انسان توانایی خلق یک چیز جدید را داشته باشد، یا سازه‌ای را مانند یک فرزند خلق کنیم و آن را مرحله بلوغ برسانیم. فرزندی که انسان می‌تواند همه چیز آن را مشخص کند که چه شکلی یا چه قیافه‌ای داشته باشد. همه چیز آن دست خود ما است و همین ویژگی برای من همیشه جذاب بود."
          :value="motivation.about"
            @focus="removeFromError('about')"
          @change="changeAbout($event.target.value)"
            :class="{ 'error-input': errors.includes('about') }"
        ></textarea>
      </div>
      <div>
        <p>درباره سوابق تحصیلی و کاری</p>
        <textarea
          rows="8"
          placeholder="در کنار این موضوع من همیشه خودم را به عنوان یک مهندس عمران می‌دیدم و تصورم از آینده خودم مهندسی بود که پروژه‌های عمرانی زیادی دارد و این کار را انجام میدهد به همین دلیل واقعا علاقه صددرصدیم رشته عمران بود و من خاطرم است که برای کنکور خواندم و رتبه 5780 کنکور سراسری شدم و از آن جهت که می‌خواستم تهران بمانم برای تحصیل دانشگاه ازاد تهران جنوب را انتخاب کردم که تعریف آن را شنیده بودم که بین دانشگاه‌ها، دانشگاه خوبی است و وقتی که می‌خواستم انتخاب رشته کنم، کلا 27 رشته انتخاب کردم و انتخاب‌های من فقط شهرسازی و عمران و معماری بود و از این سه تا خارج نبود و در نهایت من دانشگاه تهران جنوب را انتخاب کردم و شروع به تحصیل در رشته عمران کردم.
 از همان روزهای اول که من این رشته را شروع کردم قصدم کار کردن در آن و ساختن پروژه‌های ساختمانی بود. دوست داشتم با علم اینکار را انجام دهم. از همون ابتدا رفتم سر پروژه‌های مختلف از دوست و آشنا و بالاسر پروژه‌ها می‌ایستادم و کار یاد میگرفتم، کارهای عمرانی که انجام میدادن حتی جابه جایی مصالح را هم انجام میدادم تا با تمام بخش‌های کار به صورت عملی هم آشنا شوم. همه این موارد را من در دو سال اول تحصیلم در کنار درس و دانشگاه سر پروژه‌های عمرانی می‌رفتم و کار یاد می‌گرفتم. مطالب مهم، نکته‌های مهم رو از مهندس ناظر پروژه که او هم یک مهندس عمرانی بود و پرونده و شماره نظام مهندسی داشت، یاد گرفتم. حتی من کارهای اداری را هم انجام می‌دادم تا با روال مختلف آن آشنا شوم. در مجموع در دو سال ابتدای تحصیل در دانشگاه هم درسم را خواندم و هم سر پروژه می‌رفتم."
          :value="motivation.resume"
            @focus="removeFromError('resume')"
          @change="changeResume($event.target.value)"
            :class="{ 'error-input': errors.includes('resume') }"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  computed: {
    motivation() {
      return this.$store.getters["motivations/motivation"];
    },
    canFill() {
      return this.$store.getters["motivations/canFill"];
    },
    errors() {
      return this.$store.getters["motivations/errors"];
    },
  },
  methods: {
    ...mapMutations({
      changeAbout: "motivations/SET_MotivationAbout",
      changeResume: "motivations/SET_MotivationResume",
    }),
    removeFromError(name) {
      this.$store.dispatch("motivations/removeFromError", name);
      return true;
    },
    created(){
      this.$store.commit("motivations/SET_MotivationAbout", null)
      this.$store.commit("motivations/SET_MotivationResume", null)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

textarea::placeholder {
  color: var(--text-gray);
}
.third {

  form {
    @include fbx-ai-start-jc-between;
    div {
      position: relative;
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

@include mobile-device {
  .third {
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

@include tablet-device {
  .third {
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

@include large-device {
}
</style>
