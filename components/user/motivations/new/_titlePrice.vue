<template>
    <div class="title-price">
        <div class="page-title">
            <div class="return-back">
                <h1>درخواست انگیزه نامه</h1>
            </div>
            <p v-if="!canFill">
                نگـارش انگیزه نامه از زمان ثبت سفـارش تا تحویل، هفت تا ده روز کـاری
                زمان می‌بـــــرد.
                در این بخش براساس اطلاعات دریافتی از شما، انگیزه‌نامه مناسب برای دانشگاه یا سفارت تنظیم می‌شود.
                انگیزه‌نامه طراحی‌شده ترجمه جملات شما نیست بنابراین ممکن است با صلاح‌دید کارشناسان، جملاتی از متون شما
                حذف یا به آن اضافه شود. بیان جزئیات بیشتر در هر بخش منجر به انگیزه‌نامه قوی‌تری خواهد شد.
            </p>
            <p v-else-if="$auth.user.type == 1" style="color: black">
          <span>
برای دسترسی به این قسمت باید ابتدا
          </span>
                <nuxt-link style="color: red" to="/user/acceptance" class="submit-new">
                    درخواست اخذ پذیرش
                </nuxt-link>
                <span>
              تکمیل گردد و پس از امضای قرارداد با کارشناس و پشتیبان مربوطه هماهنگی های لازم انجام گیرد.
          </span>
            </p>
            <p v-else style="color: black">
             <span>
برای دسترسی به این قسمت باید ابتدا
          </span>
                <nuxt-link style="color: red" to="/user/universities" class="submit-new">
                    از لیست انتخاب دانشگاه
                </nuxt-link>
                <span>
             ، دانشگاه های مدنظر خود را انتخاب کرده و با کارشناس و پشتیبان مربوطه هماهنگی های لازم انجام گیرد.
          </span>
            </p>
        </div>
        <div class="resume-price">
            <div class="text" v-if="$auth.user.type == 2">
                <p>رایگان</p>
                <span>مبلغ نگارش انگیزه نامه</span>
            </div>
            <div class="text" v-else>
                <p>{{ totalPrice | numberFilter }}</p>
                <span>مبلغ نگارش انگیزه نامه (ریال)</span>
            </div>
            <div class="icon">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="35.999"
                        viewBox="0 0 22 35.999"
                        class="uk-svg"
                >
                    <path
                            id="Icon"
                            d="M-19158-280a3,3,0,0,1-3-3v-30a3,3,0,0,1,3-3h16a3,3,0,0,1,3,3v30a3,3,0,0,1-3,3Zm-.5-33v30a.5.5,0,0,0,.5.5h16a.5.5,0,0,0,.5-.5v-30a.5.5,0,0,0-.5-.5h-16A.5.5,0,0,0-19158.5-313Zm6.5,25a2,2,0,0,1,2-2,2,2,0,0,1,2,2,2,2,0,0,1-2,2A2,2,0,0,1-19152-288Zm-2-10a4,4,0,0,1,4-4,4,4,0,0,1,4,4,4,4,0,0,1-4,4A4,4,0,0,1-19154-298Zm2,0a2,2,0,0,0,2,2,2.006,2.006,0,0,0,2-2,2.006,2.006,0,0,0-2-2A2,2,0,0,0-19152-298Zm0-10a2,2,0,0,1,2-2,2,2,0,0,1,2,2,2,2,0,0,1-2,2A2,2,0,0,1-19152-308Z"
                            transform="translate(19161.002 315.999)"
                            fill="#e2ad42"
                    ></path>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created() {
        this.$store.dispatch("user/pricing");
    },
    computed: {
        prices() {
            return this.$store.getters["user/prices"];
        },
        totalPrice() {

            const universities =
                this.$store.getters["motivations/universities"].length - 1;

            return universities * this.prices.extra_university + this.prices.motivation;
        },
        canFill() {
            return this.$store.getters['motivations/canFill'];
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.title-price {
  @include fbx-ai-start-jc-between;
  border-bottom: 1px solid var(--gray);
  padding-bottom: 1.5rem;
  margin-bottom: 3rem;

  .resume-price {
    width: 20%;
    margin-right: 0.25rem;
    border: 1px solid var(--gray);
    border-radius: 5px;
    padding: 0.75rem;
    @include fbx-ai-center-jc-end;

    .icon {
      margin-right: 1rem;

      svg {
        fill: none;
        color: var(--main-color);
      }
    }

    .text {
      direction: ltr;

      span {
        font-weight: 300;
        font-size: 0.8rem;
        color: var(--black);
      }

      p {
        font-weight: 600;
        font-size: 1rem;
        color: var(--black);
      }
    }
  }
}

@include mobile-device {
  .title-price {
    @include fbx-column-ai-start-jc-start;
    align-items: flex-end;
    margin-bottom: 1.5rem;

    .resume-price {
      margin-top: 1rem;
      width: fit-content;

      .text {
        span {
          font-size: 0.75rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}

@include tablet-device {
  .title-price {
    align-items: flex-start;
    margin-bottom: 1.5rem;

    .resume-price {
      width: 40%;

      .text {
        span {
          font-size: 0.75rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }
}

@include large-device {
  .title-price {
    align-items: flex-start;

    .resume-price {
      width: 40%;
      margin-right: 1rem;
    }
  }
}
</style>
