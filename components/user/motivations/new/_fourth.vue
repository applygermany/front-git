<template>
    <div :class="'resume-box fourth '+(canFill ? 'fade' : '')">
        <h3>به چه علت آلمان را برای تحصیل انتخاب کرده اید؟</h3>
        <hr/>
        <form>
      <textarea
              :class="{ 'error-input': errors.includes('whyGermany') }"
              :value="motivation.whyGermany"
              @change="changeWhyGermany($event.target.value)"
              @focus="removeFromError('whyGermany')"
              placeholder="بعد از اینکه متوجه شدم تحصیل در رشته مورد علاقه من در ایران ممکن نیست شروع به جستجو برای یافتن کشورهایی کردم که می‌توانم در آن‌ها ادامه تحصیل دهم. بعد از جستجوی فراوان متوجه شدم کشور آلمان یکی از کشورهایی هست که من می‌توانم در آن تحصیل کنم و شرایط ایده الی برای تحصیل در این رشته دارد. بنابراین اگر من زبان آلمانی بلد باشم می‌توانم با تحصیل در این رشته، در حوزه مورد علاقه خودم موفق شوم. به همین دلیل از سال 1398 شروع به یادگیری زبان آلمانی کردم و تا مقطع مناسب یاد گرفتم تا بتوانم آزمون موردنیاز را پاس کنم.
هرچقدر که بیشتر آلمانی یاد می‌گرفتم، بیشتر به زبان و فرهنگ آلمانی‌ و در نهایت فرهنگ کشور آلمان علاقه‌مند می‌شدم. چون با افزایش دانسته‌ها به عمق فرهنگ غنی آلمان پی‌ می‌بردم و این برای من بسیار قابل احترام بود. در طول مسیر با افزایش آگاهی تصمیم من برای مهاجرت تحصیلی به کشور آلمان بسیار جدی شد. بسیار مصرانه زبان آلمانی را فرا گرفتم و آزمون تست‌داف دادم و مدرک موردنیاز را گرفتم. با این کار شرایط رو به شکلی پیش بردم که اگر در کشور آلمان تحصیل کنم بتوانم فردی مفید باشم و بتوانم راحت با افراد ارتباط بگیرم و شرایط تحصیلیم طوری باشد که به زبان آلمانی تحصیل کنم."
              rows="10"
      ></textarea>
        </form>
    </div>
</template>

<script>
    import {mapMutations} from "vuex";

    export default {
        computed: {
            motivation() {
                return this.$store.getters["motivations/motivation"];
            },
            canFill() {
                return this.$store.getters['motivations/canFill'];
            },
            errors() {
                return this.$store.getters["motivations/errors"];
            },
        },
        methods: {
            ...mapMutations({
                changeWhyGermany: "motivations/SET_MotivationWhyGermany",
            }),
            removeFromError(name) {
                this.$store.dispatch("motivations/removeFromError", name);
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
</style>