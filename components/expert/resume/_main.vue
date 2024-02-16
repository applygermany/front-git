<template>
  <main class="main">
    <section id="resume">
      <img
          class="yellow-background"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjQwIDE1MCI+DQogIDxwYXRoIGlkPSJQYXRoXzEzNzcxIiBkYXRhLW5hbWU9IlBhdGggMTM3NzEiIGQ9Ik0yNTAsMEgxMFYxMjMuOTEzTDI1MCwxNTBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTApIiBmaWxsPSIjZmZlMTYzIi8+DQo8L3N2Zz4NCg=="
          alt=""
      />
      <div>
        <div class="img-name">
          <div class="img" v-if="resume.image !== null">
            <img :src="resume.image+'?dark='+this.darkmode" :alt="resume.name"/>
          </div>
          <div class="name">
            <h1>{{ resume.name }}</h1>
            <p>{{ resume.mobile ? resume.mobile : resume.acceptance.phone }}</p>
            <p class="latin-font">{{ resume.email }}</p>
          </div>
        </div>

        <div class="educate-info" v-if="resume.acceptance !== null">
          <h2>اطلاعات پایه</h2>
          <div>
            <p>
              <span>تاریخ تولد : </span>
              <span>{{ resume.acceptance.birth_date }}</span>
            </p>
            <p>
              <span>شهر : </span>
              <span>{{ resume.acceptance.city }}</span>
            </p>
            <p>
              <span>مقطع اخذ پذیرش : </span>
              <span>{{ resume.acceptance.admittance }}</span>
            </p>
            <p>
              <span>وضعیت سربازی : </span>
              <span>{{ resume.acceptance.military_service }}</span>
            </p>
            <p>
            <span>کد ملی : </span>
              <span>{{ resume.acceptance.mellicode }}</span>
            </p>
            <p>
              <span>نام پدر : </span>
              <span>{{ resume.acceptance.fatherName }}</span>
            </p>
            <p>
            <span>ادرس دقیق : </span>
              <span>{{ resume.acceptance.address }}</span>
            </p>
          </div>
        </div>

        <div class="educate-info" v-if="resume.acceptance !== null">
          <h2>اطلاعات تحصیلی</h2>
          <div>
            <h3>پایه</h3>
            <p>
              <span>رشته دیپلم</span>
              <span>{{ resume.acceptance.field_grade }}</span>
            </p>
            <p>
              <span>معدل دیپلم</span>
              <span>{{ resume.acceptance.diploma_grade_average }}</span>
            </p>
            <!--            <p>-->
            <!--              <span>رشته پیش دانشگاهی</span>-->
            <!--              <span>{{ resume.acceptance.pre_university_field }}</span>-->
            <!--            </p>-->
            <p>
              <span>معدل پیش دانشگاهی</span>
              <span>{{ resume.acceptance.pre_university_grade_average }}</span>
            </p>
            <p>
              <span>گواهی قبولی کنکور </span
              ><span>{{ resume.acceptance.is_entrance_exam }}</span>
            </p>
          </div>
          <div>
            <!--            <h3>لیسانس</h3>-->
            <!--            <p><span>تعداد ترم تحصیلی</span> <span>-&#45;&#45;&#45;&#45;</span></p>-->
            <p>
              <span>رشته</span>
              <span>{{ resume.acceptance.field_license }}</span>
            </p>
            <p>
              <span>دانشگاه</span>
              <span>{{ resume.acceptance.university_license }}</span>
            </p>
            <p>
              <span>فارغ التحصیل</span>
              <span>{{ resume.acceptance.license_graduated }}</span>
            </p>
            <p>
              <span>سال گرفتن لیسانس</span>
              <span>{{ resume.acceptance.year_license }}</span>
            </p>
            <p>
              <span>تعداد واحدهای پاس شده </span
              ><span>{{ resume.acceptance.total_number_passes }}</span>
            </p>
            <p>
              <span>قبل از اپلای حداقل 35 واحد در ایران پاس میکنید؟</span>
              <span>{{ resume.acceptance.Pass_30_units }}</span>
            </p>
          </div>
          <div>
            <h3>ارشد</h3>
            <p>
              <span>آیا در مقطع ارشد فارغ التحصیل شده اید؟</span>
              <span>{{ resume.acceptance.senior_educate }}</span>
            </p>
            <p>
              <span>رشته</span>
              <span>{{ resume.acceptance.field_senior }}</span>
            </p>
            <p>
              <span>دانشگاه</span>
              <span>{{ resume.acceptance.university_senior }}</span>
            </p>
            <p>
              <span>معدل</span>
              <span>{{ resume.acceptance.average_senior }}</span>
            </p>
            <p>
              <span>سال گرفتن ارشد</span>
              <span>{{ resume.acceptance.year_senior }}</span>
            </p>
          </div>
        </div>
        <div class="educate-info" v-else>
          <h2>اطلاعات تحصیلی :</h2>
          <div>
            <h3>پایه</h3>
            <p><span>رشته دیپلم</span> <span>-----</span></p>
            <p><span>معدل دیپلم</span> <span>-----</span></p>
            <p><span>رشته پیش دانشگاهی</span> <span>-----</span></p>
            <p><span>معدل پیش دانشگاهی</span> <span>-----</span></p>
            <p><span>گواهی قبولی کنکور </span><span>-----</span></p>
          </div>
        </div>
      </div>
      <aside>
        <div v-if="resume.acceptance !== null">
          <h3>اطلاعات زبان</h3>
          <p>
            <span>زبان مورد علاقه : </span
            ><span>{{ resume.acceptance.language_favor }}</span>
          </p>
          <p>
            <span>مدرک زبان دارید ؟ </span
            ><span>{{ resume.acceptance.license_language }}</span>
          </p>
          <p>
            <span>چه مدرکی : </span
            ><span>{{ resume.acceptance.what_grade_language }}</span>
          </p>
          <p>
            <span>نمره زبان : </span
            ><span>{{ resume.acceptance.score_grade_language }}</span>
          </p>
          <p>
            <span>تاریخ اخذ : </span
            ><span>{{ resume.acceptance.date_get_grade_language }}</span>
          </p>
          <p>
            <span>قصد گرفتن چه مدرکی دارید ؟ </span
            ><span>{{ resume.acceptance.what_intent_grade_language }}</span>
          </p>
          <p>
            <span>تاریخ احتمالی : </span
            ><span>{{ resume.acceptance.date_intent_grade_language }}</span>
          </p>
        </div>
        <div v-else>
          <h3>اطلاعات زبان</h3>
          <p><span>زبان مورد علاقه : </span><span>-----</span></p>
          <p><span>مدرک زبان دارید ؟ </span><span>-----</span></p>
          <p><span>چه مدرکی : </span><span>-----</span></p>
          <p><span>قصد گرفتن چه مدرکی دارید ؟ </span><span>-----</span></p>
          <p><span>تاریخ احتمالی : </span><span>-----</span></p>
        </div>

        <div v-if="resume.acceptance !== null && false">
          <h3>سفارت</h3>
          <p>
            <span>وقت سفارت : </span
            ><span>{{ resume.acceptance.embassy_apoinment }}</span>
          </p>
          <!--          <p>-->
          <!--            <span>تاریخ : </span-->
          <!--            ><span>{{ resume.acceptance.embassy_date }}</span>-->
          <!--          </p>-->
        </div>
        <!--        <div v-else>-->
        <!--          <h3>سفارت</h3>-->
        <!--          <p><span>وقت سفارت : </span><span>-&#45;&#45;&#45;&#45;</span></p>-->
        <!--          <p><span>تاریخ : </span><span>-&#45;&#45;&#45;&#45;</span></p>-->
        <!--        </div>-->

        <div v-if="resume.acceptance !== null">
          <h3>ترجمه</h3>
          <p>
            <span>آیا مدارک ترجمه شده اند ؟ </span
            ><span>{{ resume.acceptance.doc_translate }}</span>
          </p>
          <!--          <p>-->
          <!--            <span>تاریخ : </span><span>{{ resume.acceptance.tab_status }}</span>-->
          <!--          </p>-->
          <p>
            <span>ترجمه بیش از یکسال : </span
            ><span>{{ resume.acceptance.doc_translate_year_passed }}</span>
          </p>
          <p>
            <span>تایید شده سفارت : </span
            ><span>{{ resume.acceptance.doc_embassy }}</span>
          </p>
        </div>
        <div v-else>
          <h3>ترجمه</h3>
          <p><span>آیا مدارک ترجمه شده اند ؟ </span><span>-----</span></p>
          <!--          <p><span>تاریخ : </span><span>-&#45;&#45;&#45;&#45;</span></p>-->
          <p><span>تایید شده سفارت : </span><span>-----</span></p>
        </div>

        <div v-if="resume.acceptance !== null">
          <h3>توضیحات</h3>
          <p>{{ resume.acceptance.description }}</p>
        </div>
        <div v-else>
          <h3>توضیحات</h3>
          <p>-----</p>
        </div>
      </aside>
    </section>
  </main>
</template>

<script>
export default {
  props: ["resume"],
  computed: {
    darkmode() {
      return document.querySelector("html").classList.contains('dark-mode')
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

#resume {
  @include fbx-ai-start-jc-between;
  background-color: var(--white);
  margin: 5.5rem auto 2rem auto;
  padding: 5rem;
  border-radius: 8px;
  @include boxshadow();
  width: 70%;
  position: relative;

  .yellow-background {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 4rem;
    width: 12rem;
  }

  > div {
    width: 68%;
    z-index: 100;

    .img-name {
      @include fbx-ai-start-jc-start;

      .img {
        margin-left: 5rem;

        img {
          margin-top: -1rem;
          width: 10rem;
          height: 10rem;
          object-fit: cover;
          border-radius: 50%;
          border: 8px solid var(--white);
        }
      }

      .name {
        h1 {
          color: var(--main-color);
          font-size: 1.8rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
        }

        p {
          color: var(--black);
          font-size: 1rem;
          margin-bottom: 0.5rem;
        }
      }
    }

    .personal-info {
      margin-top: 3rem;
      @include fbx-ai-start-jc-between;
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--gray);

      p {
        font-weight: 500;
        color: var(--black);
        font-size: 0.9rem;
      }
    }

    .educate-info {
      margin-top: 3rem;

      > div {
        border-right: 1px solid var(--gray);
        padding-right: 2rem;
        padding-bottom: 2rem;
      }

      > div:last-child {
        padding-bottom: 0;
      }

      h2 {
        font-weight: 800;
        font-size: 1.3rem;
        color: var(--main-color);
        margin-bottom: 2rem;
      }

      h3 {
        color: var(--main-color);
        font-weight: 500;
        font-size: 1rem;
        text-decoration: underline var(--main-color);
        margin-bottom: 1.5rem;
        width: fit-content;
      }

      p {
        @include fbx-ai-start-jc-between;
        width: 75%;
        font-size: 0.9rem;
        color: var(--black);
        margin-bottom: 1rem;
        text-align: justify;
        line-height: 1.8rem;

        span:first-child {
          width: 75%;
        }

        span:last-child {
          width: 25%;
        }
      }
    }
  }

  > aside {
    align-self: stretch;
    width: 23%;
    border-right: 1px solid var(--gray);
    padding-right: 2rem;

    > div {
      margin-bottom: 3rem;
    }

    h3 {
      color: var(--main-color);
      font-weight: 800;
      font-size: 1rem;
      text-decoration: underline var(--main-color);
      margin-bottom: 1.5rem;
      width: fit-content;
    }

    p {
      font-size: 0.9rem;
      color: var(--black);
      margin-bottom: 0.5rem;
      text-align: justify;
      line-height: 1.8rem;
    }
  }
}

@include mobile-device {
  #resume {
    margin: 5rem auto 2rem auto;
    width: calc(100% - 4rem);
    padding: 1rem;
    flex-wrap: wrap;

    .yellow-background {
      width: 14rem;
    }

    > div {
      width: 100%;

      .img-name {
        @include fbx-ai-start-jc-start;

        .img {
          margin-left: 1rem;

          img {
            width: 5rem;
            height: 5rem;
            border: 5px solid var(--white);
          }
        }

        .name {
          h1 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 0.9rem;
          }
        }
      }

      .personal-info {
        @include fbx-column-ai-start-jc-start;
        width: calc(100% - 1rem);
        padding: 0.5rem;

        p {
          margin-bottom: 0.5rem;
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }
      }

      .educate-info {
        margin-top: 1.5rem;

        > div {
          border-right: 0;
          padding-right: 0;
          padding-bottom: 1rem;
        }

        > div:last-child {
          padding-bottom: 1rem;
        }

        h2 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        h3 {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        p {
          width: 100%;
          font-size: 0.8rem;

          span:first-child {
            width: 50%;
          }

          span:last-child {
            width: 40%;
          }
        }
      }
    }

    > aside {
      width: 100%;
      border-right: 0;
      padding-right: 0;

      > div {
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
}

@include tablet-device {
  #resume {
    margin: 5rem auto 2rem auto;
    width: calc(100% - 5rem);
    padding: 1.5rem;

    .yellow-background {
      width: 14rem;
    }

    > div {
      .img-name {
        .img {
          margin-left: 1rem;

          img {
            width: 7rem;
            height: 7rem;
            border: 5px solid var(--white);
          }
        }

        .name {
          h1 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
          }

          p {
            font-size: 0.9rem;
          }
        }
      }

      .personal-info {
        width: calc(100% - 1rem);
        padding: 0.5rem;

        p {
          line-height: 1.8rem;
          font-size: 0.8rem;
        }
      }

      .educate-info {
        margin-top: 1.5rem;

        > div {
          padding-right: 1rem;
          padding-bottom: 1rem;
        }

        > div:last-child {
          padding-bottom: 1rem;
        }

        h2 {
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        h3 {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        p {
          width: 100%;
          font-size: 0.8rem;
        }
      }
    }

    > aside {
      padding-right: 1rem;

      > div {
        margin-bottom: 1.5rem;
      }

      h3 {
        font-size: 0.9rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
