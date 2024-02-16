<template>
  <section id="coming-soon" class="coming-soon">
    <div class="uk-container">
      <div class="coming-soon-text">
        <h3 class="title-font">
          <span>بزودی</span>
          <span>اپلیکیشن اپلای جرمنی</span>
        </h3>
        <p>
          با اپلای اپ می‌توانید مدیریت راحت‌تری برروی حساب کاربری خود داشته باشید.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins";
.coming-soon {
  background-image: url("@/assets/site/images/coming-soon.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 5rem 3vw;

  .coming-soon-text {
    width: 85%;
    margin-right: auto;
    z-index: 999;
    h3 {
      @include fbx-column-ai-start-jc-start;
      margin-bottom: 2rem;
      span:first-child {
        color: var(--main-red-color);
        font-size: 1.3rem;
        margin-bottom: 1rem;
        font-weight: 500;
      }
      span:last-child {
        color: var(--black);
        font-size: 1.8rem;
        font-weight: 700;
      }
    }
    p {
      width: 30%;
      font-size: 0.9rem;
      color: var(--black);
      line-height: 2rem;
    }
  }
}

@include mobile-device {
  .coming-soon {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .coming-soon-text {
      width: 100%;
      h3 {
        margin-bottom: 1rem;
        span:first-child {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        span:last-child {
          font-size: 1.2rem;
        }
      }
      p {
        display: none;
      }
    }
  }
}
@include tablet-device {
  .coming-soon {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    .coming-soon-text {
      width: 100%;
      h3 {
        margin-bottom: 1rem;
        span:first-child {
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
        span:last-child {
          font-size: 1.2rem;
        }
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
}
@include extra-extra-large-device{
    .coming-soon{
        .coming-soon-text{
            width: 100%;
        }
    }
}
</style>
