<template>
    <nav class="fix-bottom-nav">

        <a href="https://www.instagram.com/apply.germany" class="floating-instagram" style="margin-bottom: 50px;">
            <div style="margin-right: 12px; margin-top: 10px;">
                <SocialInstagram style="fill: #ffffff"/>
            </div>
        </a>
        <a href="https://t.me/ApplyGermanyAdmin" class="floating-telegram">
            <div style="margin-right: 15px; margin-top: 10px;">
                <SocialTelegram style="fill: #ffffff"/>
            </div>
        </a>

        <div class="uk-container">
            <ul>
                <li>
                    <nuxt-link to="/">صفحه اصلی پورتال</nuxt-link>
                </li>
                <li><a target="_blank" href="https://applygermany.net/blog">مجله مهاجرتی</a></li>
                <li>
                    <nuxt-link to="/acceptance">پذیرفته شدگان</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/faq">سوالات متداول</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/contactus">تماس با ما</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/team">تیم ما</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/collaboration">درخواست همکاری</nuxt-link>
                </li>
            </ul>
            <div class="socials">
                <a href="https://www.instagram.com/apply.germany" target="_blank">
                    <span class="latin-font" style="color: #fff ">Instagram</span>
                    <SocialInstagram style="fill: #fff"/>
                </a>
                <a href="https://t.me/ApplyGermany.net" target="_blank">
                    <span class="latin-font" style="color: #fff">Telegram</span>
                    <SocialTelegram style="fill: #fff"/>
                </a>
                <a
                        href="https://www.youtube.com/channel/UCdKxPe4iFhVqG7VMXrZevng"
                        target="_blank"
                >
                    <span class="latin-font" style="color: #fff">Youtube</span>
                    <SocialYoutube style="fill: #fff"/>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import SocialInstagram from "@/components/svg/social-instagram.vue";
import SocialTelegram from "@/components/svg/social-telegram.vue";
import SocialYoutube from "@/components/svg/social-youtube.vue";

export default {
    components: {
        SocialInstagram,
        SocialTelegram,
        SocialYoutube,
    },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins";

.floating-instagram {
  position: fixed;
  width: 45px;
  height: 45px;
  bottom: 40px;
  right: 40px;
  background-color: #E1360c;
  color: #FFF;
  border-radius: 50px;
  align-items: center;
}

.floating-telegram {
  position: fixed;
  width: 45px;
  height: 45px;
  bottom: 40px;
  right: 40px;
  background-color: #27a7e7;
  color: #FFF;
  border-radius: 50px;
  align-items: center;
}

.fix-bottom-nav {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: auto;

  > div {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 5vw !important;
    padding-left: 5vw !important;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;
    background-color: #000000;
    @include fbx-ai-center-jc-between;

    ul {
      padding-right: 0;
      @include fbx-ai-start-jc-start;
      list-style-type: none;

      li {
        margin-left: 2rem;

        a {
          color: var(--white);
          font-size: 0.8rem;
        }
      }
    }

    .socials {
      @include fbx-ai-start-jc-start;

      a {
        margin-right: 1.5rem;

        span {
          font-size: 0.8rem;
          color: var(--white);
        }

        &:first-child {
          border-left: 1px solid rgba(#FFFFFF, 0.16);
          padding-left: 1rem;
        }

        &:last-child {
          padding-right: 1rem;
          border-right: 1px solid rgba(#FFFFFF, 0.16);
        }
      }
    }
  }
}

@include mobile-device {
  .fix-bottom-nav {
    display: none;
  }
}

@include tablet-device {
  .fix-bottom-nav {
    display: none;
  }
}

@include large-device {
  .fix-bottom-nav {
    display: none;
  }
}

</style>
