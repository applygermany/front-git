<template>
  <main class="main" id="error">
    <section v-if="error.statusCode === 401">
      <div class="right">
        <img src="@/assets/error/images/401.svg" alt="" />
      </div>
      <div class="left">
        <h1 class="latin-font">
          401
          <span class="title-font">عدم احراز هویت</span>
        </h1>
        <p>
          شما ناشناخته هستید. لازم است دوباره به پرتال
          <nuxt-link to="/auth/signin">وارد شوید.</nuxt-link>
        </p>
      </div>
    </section>
    <section v-else-if="error.statusCode === 403">
      <div class="right">
        <img src="@/assets/error/images/403.svg" alt="" />
      </div>
      <div class="left">
        <h1 class="latin-font">
          403
          <span class="title-font">دسترسی غیرمجاز</span>
        </h1>
        <p>شما اجازه دسترسی به این صفحه از وبسایت را ندارید!</p>
      </div>
    </section>
    <section v-else-if="error.statusCode === 404">
      <div class="right">
        <img src="@/assets/error/images/404.svg" alt="" />
      </div>
      <div class="left">
        <h1 class="latin-font">
          404
          <span class="title-font">صفحه پیدا نشد</span>
        </h1>
        <p>آدرس مورد نظر شما در وبسایت یافت نشد!</p>
      </div>
    </section>
    <section v-else-if="error.statusCode === 405">
      <div class="right">
        <img src="@/assets/error/images/500.svg" alt="" />
      </div>
      <div class="left">
        <h1 class="latin-font">
          500
          <span class="title-font">خطای سرور داخلی</span>
        </h1>
        <p>مشکلی رخ داده است! لطفا به پشتیبانی اطلاع دهید.</p>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  props: ["error"],
};
</script>
<style>
@font-face {
  font-family: "morabbavf";
  src: url("@/static/site/assets/fonts/MorabbaVF.woff")
      format("woff-variations"),
    /* will be the standard and works in Safari now */
      url("@/static/site/assets/fonts/MorabbaVF.woff") format("woff");
  /* for the other supporting browsers */
  font-weight: 100 900;
  font-display: fallback;
}

@font-face {
  font-family: "iransansxv";
  src: url("@/static/site/assets/fonts/IRANSansXV.woff")
      format("woff-variations"),
    /* will be the standard and works in Safari now */
      url("@/static/site/assets/fonts/IRANSansXV.woff") format("woff");
  /* for the other supporting browsers */
  font-weight: 100 900;
  font-display: fallback;
}

@font-face {
  font-family: iransansx;
  src: url("@/static/site/assets/fonts/IRANSansX-Regular.woff") format("woff");
}

@font-face {
  font-family: iransansx;
  src: url("@/static/site/assets/fonts/IRANSansX-Bold.woff") format("woff");
  font-weight: 700;
}

@font-face {
  font-family: baloo;
  font-style: normal;
  font-weight: bold;
  src: url("@/static/site/assets/fonts/Baloo2-Bold.ttf") format("truetype");
}

@font-face {
  font-family: baloo;
  font-style: normal;
  font-weight: normal;
  src: url("@/static/site/assets/fonts/Baloo2-Regular.ttf") format("truetype");
}

@font-face {
  font-family: baloo;
  font-style: normal;
  font-weight: 500;
  src: url("@/static/site/assets/fonts/Baloo2-Medium.ttf") format("truetype");
}

@font-face {
  font-family: baloo;
  font-style: normal;
  font-weight: 750;
  src: url("@/static/site/assets/fonts/Baloo2-SemiBold.ttf") format("truetype");
}

@font-face {
  font-family: baloo;
  font-style: normal;
  font-weight: 800;
  src: url("@/static/site/assets/fonts/Baloo2-ExtraBold.ttf") format("truetype");
}

body {
  font-family: iransansx !important;
  -webkit-font-feature-settings: "ss02";
  font-feature-settings: "ss02";
}

h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
button,
select {
  font-family: iransansx !important;
  -webkit-font-feature-settings: "ss02";
  font-feature-settings: "ss02";
}

h1 {
  font-weight: bold;
}

@supports (font-variation-settings: normal) {
  body {
    font-family: "iransansxv" !important;
    -webkit-font-feature-settings: "ss02";
    font-feature-settings: "ss02";
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    font-family: "iransansxv" !important;
    -webkit-font-feature-settings: "ss02";
    font-feature-settings: "ss02";
  }
  .title-font {
    font-family: "morabbavf" !important;
    -webkit-font-feature-settings: "ss02";
    font-feature-settings: "ss02";
  }
}

.latin-font {
  font-family: "baloo" !important;
}

html {
  font-size: 16px;
  background: var(--background-color);
}

html body {
  margin: 0;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  html {
    overflow-x: hidden !important;
  }
}

#error > section {
  width: 100%;
  height: 100vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

#error > section > div {
  width: calc(50% - 6rem);
  height: 100%;
  padding: 0 3rem;
}

#error > section > div.right {
  background-color: #f0f0f0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

#error > section > div.right img {
  width: 40%;
}

#error > section > div.left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: #f7f7f7;
}

#error > section > div.left h1 {
  color: #797979;
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-size: 3.5rem;
}

#error > section > div.left h1 span {
  font-size: 1.5rem;
}

#error > section > div.left p {
  color: #797979;
  font-size: 0.9rem;
}

#error > section > div.left p a {
  color: #c5973a;
}

@media (max-width: 767.98px) {
  #error > section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  #error > section > div {
    padding: 0;
    width: 100%;
  }
  #error > section > div.right {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  #error > section > div.left {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  #error > section > div.left p {
    text-align: center;
  }
}
/*# sourceMappingURL=public.css.map */
</style>
