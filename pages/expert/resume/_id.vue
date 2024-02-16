<template>
    <main class="main resume_main">

        <section class="wrapper">
            <div class="page-title">

                <div class="return-back">

                    <nuxt-link to="/expert/dashboard">
                        <svg
                                class="uk-svg"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                    </nuxt-link>
                    <h1>رزومه کاربری</h1>
                </div>
            </div>
            <div id="resume">

                <img
                        alt=""
                        class="yellow-background"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMTUwIiB2aWV3Qm94PSIwIDAgMjQwIDE1MCI+DQogIDxwYXRoIGlkPSJQYXRoXzEzNzcxIiBkYXRhLW5hbWU9IlBhdGggMTM3NzEiIGQ9Ik0yNTAsMEgxMFYxMjMuOTEzTDI1MCwxNTBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTApIiBmaWxsPSIjZmZlMTYzIi8+DQo8L3N2Zz4NCg=="
                />
                <div>
                    <div class="img-name">
                        <div class="img" v-if="resume.image !== null">
                            <img :alt="resume.name" :src="resume.image+'?dark='+this.darkmode"/>

                        </div>
                        <div class="name">
                            <h1>{{ resume.firstname ? resume.firstname : resume.acceptance.firstname }}
                                {{ resume.lastname ? resume.lastname : resume.acceptance.lastname }}</h1>
                            <p>{{ resume.mobile ? resume.mobile : resume.acceptance.phone }}</p>
                            <p class="latin-font">{{ resume.email }}</p>
                        </div>
                    </div>

                    <div class="educate-info" v-if="resume.acceptance !== null">
                        <h2>اطلاعات پایه</h2>
                        <div>
                            <p>
                                <span>تاریخ تولد : </span>
                                <span>{{
                                    resume.birth_date ? resume.birth_date
                                        : resume.acceptance.birth_date
                                    }}</span>
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
                                <span>{{ resume.codemelli ? resume.codemelli : resume.acceptance.mellicode }}</span>
                            </p>
                            <p>
                                <span>نام پدر : </span>
                                <span>{{
                                    resume.father_name ? resume.father_name : resume.acceptance.fatherName
                                    }}</span>
                            </p>
                            <p>
                                <span>ادرس دقیق : </span>
                                <span>{{ resume.acceptance.address }}</span>
                            </p>
                            <p>
                                <span>تاریخ ثبت : </span>
                                <span>{{ resume.acceptance.created_at_jalali }}</span>
                            </p>
                        </div>
                    </div>


                    <div class="educate-info" v-if="resume.acceptance !== null">
                        <h2>اطلاعات تحصیلی</h2>
                        <div>
                            <h3>پایه</h3>
                            <p>
                                <span>رشته دیپلم</span>
                                <span v-if="resume.acceptance.field_grade != null">{{
                                    resume.acceptance.field_grade
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>معدل دیپلم</span>
                                <span v-if="resume.acceptance.diploma_grade_average != null">{{
                                    resume.acceptance.diploma_grade_average
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>معدل پیش دانشگاهی</span>
                                <span
                                        v-if="resume.acceptance.pre_university_grade_average != null"
                                >{{ resume.acceptance.pre_university_grade_average }}</span
                                >
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>گواهی قبولی کنکور </span>
                                <span v-if="resume.acceptance.is_entrance_exam != null">{{
                                    resume.acceptance.is_entrance_exam
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                        </div>
                        <div>
                            <h3>لیسانس</h3>
                            <p>
                                <span>فارغ التحصیل</span>
                                <span v-if="resume.acceptance.license_graduated != null">{{
                                    resume.acceptance.license_graduated
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>رشته</span>
                                <span v-if="resume.acceptance.field_license != null">{{
                                    resume.acceptance.field_license
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>دانشگاه</span>
                                <span v-if="resume.acceptance.university_license != null">{{
                                    resume.acceptance.university_license
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p v-if="resume.acceptance.license_graduated === 'بله'">
                                <span>معدل لیسانس</span>
                                <span v-if="resume.acceptance.average_license != null">{{
                                    resume.acceptance.average_license
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p v-if="resume.acceptance.license_graduated === 'خیر'">
                                <span>معدل لیسانس</span>
                                <span v-if="resume.acceptance.average_now_license != null">{{
                                    resume.acceptance.average_now_license
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p v-if="resume.acceptance.license_graduated === 'بله'">
                                <span>سال گرفتن لیسانس</span>
                                <span v-if="resume.acceptance.year_license != null">{{
                                    resume.acceptance.year_license
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p v-if="resume.acceptance.license_graduated === 'خیر'">
                                <span>سال احتمالی گرفتن لیسانس</span>
                                <span v-if="resume.acceptance.predicted_year_license != null">{{
                                    resume.acceptance.predicted_year_license
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>تعداد واحدهای پاس شده </span>
                                <span v-if="resume.acceptance.total_number_passes != null">{{
                                    resume.acceptance.total_number_passes
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>قبل از اپلای حداقل 35 واحد در ایران پاس میکنید؟</span>
                                <span v-if="resume.acceptance.Pass_30_units != null">{{
                                    resume.acceptance.Pass_30_units
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                        </div>
                        <div>
                            <h3>ارشد</h3>
                            <p>
                                <span>آیا در مقطع ارشد تحصیل اید؟</span>
                                <span v-if="resume.acceptance.senior_educate != null">{{
                                    resume.acceptance.senior_educate
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <p>
                                <span>آیا در مقطع ارشد فارغ التحصیل شده اید؟</span>
                                <span v-if="resume.acceptance.master_graduated != null">{{
                                    resume.acceptance.master_graduated
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                            <div v-if="resume.acceptance.master_graduated == 'بله'">
                                <p>
                                    <span>رشته</span>
                                    <span v-if="resume.acceptance.field_senior != null">{{
                                        resume.acceptance.field_senior
                                        }}</span>
                                    <span v-else>-----</span>
                                </p>
                                <p>
                                    <span>دانشگاه</span>
                                    <span v-if="resume.acceptance.university_senior != null">{{
                                        resume.acceptance.university_senior
                                        }}</span>
                                    <span v-else>-----</span>
                                </p>
                                <p>
                                    <span>معدل</span>
                                    <span v-if="resume.acceptance.average_senior != null">{{
                                        resume.acceptance.average_senior
                                        }}</span>
                                    <span v-else>-----</span>
                                </p>
                                <p>
                                    <span>سال گرفتن ارشد</span>
                                    <span v-if="resume.acceptance.year_senior != null">{{
                                        resume.acceptance.year_senior
                                        }}</span>
                                    <span v-else>-----</span>
                                </p>
                            </div>
                            <div v-if="resume.acceptance.master_graduated == 'خیر'">
                                <p>
                                    <span>معدل فعلی</span>
                                    <span v-if="resume.acceptance.average_now_master != null">{{
                                        resume.acceptance.average_now_master
                                        }}</span>
                                    <span v-else>-----</span>
                                </p>
                                <p>
                                    <span>سال احتمالی فارغ التحصیلی ارشد</span>
                                    <span v-if="resume.acceptance.predicted_year_master != null">{{
                                        resume.acceptance.predicted_year_master
                                        }}</span>
                                    <span v-else>-----</span>
                                </p>
                                <p>
                                    <span>مجموع واحد پاس شده</span>
                                    <span v-if="resume.acceptance.master_total_number_passes != null">{{
                                        resume.acceptance.master_total_number_passes
                                        }}</span>
                                    <span v-else>-----</span>
                                </p>
                            </div>
                            <p>
                                <span>تحصیل در مقطع دیگر : </span>
                                <span v-if="resume.acceptance.another_educate != null">{{
                                    resume.acceptance.another_educate
                                    }}</span>
                                <span v-else>-----</span>
                            </p>
                        </div>
                    </div>
                </div>

                <aside>
                    <div v-if="resume.acceptance != null">
                        <h3>اطلاعات زبان</h3>
                        <p>
                            <span>زبان مورد علاقه : </span>
                            <span v-if="resume.acceptance.language_favor != null">{{
                                resume.acceptance.language_favor
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
                            <span>مدرک زبان دارید ؟ </span>
                            <span v-if="resume.acceptance.license_language != null">{{
                                resume.acceptance.license_language
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
                            <span>چه مدرکی : </span>
                            <span v-if="resume.acceptance.what_grade_language != null">{{
                                resume.acceptance.what_grade_language
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
                            <span>نمره زبان : </span>
                            <span v-if="resume.acceptance.score_grade_language != null">{{
                                resume.acceptance.score_grade_language
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
                            <span>تاریخ اخذ : </span>
                            <span v-if="resume.acceptance.date_get_grade_language != null">{{
                                resume.acceptance.date_get_grade_language
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
                            <span>قصد گرفتن چه مدرکی دارید ؟ </span>
                            <span v-if="resume.acceptance.what_intent_grade_language != null">{{
                                resume.acceptance.what_intent_grade_language
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
                            <span>تاریخ احتمالی : </span>
                            <span v-if="resume.acceptance.date_intent_grade_language != null">{{
                                resume.acceptance.date_intent_grade_language
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
                            <span>سطح زبان فعلی : </span>
                            <span v-if="resume.acceptance.current_language_status != null">{{
                                resume.acceptance.current_language_status ? resume.acceptance.current_language_status : '---'
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                    </div>

                    <!--                    <div v-if="resume.acceptance != null">-->
                    <!--                        <h3>سفارت</h3>-->
                    <!--                        <p>-->
                    <!--                            <span>وقت سفارت : </span>-->
                    <!--                            <span v-if="resume.acceptance.embassy_apoinment != null">{{-->
                    <!--              resume.acceptance.embassy_apoinment-->
                    <!--            }}</span>-->
                    <!--                            <span v-else>-&#45;&#45;&#45;&#45;</span>-->
                    <!--                        </p>-->
                    <!--                        <p>-->
                    <!--                            <span>تاریخ : </span>-->
                    <!--                            <span v-if="resume.acceptance.embassy_date != null">{{-->
                    <!--              resume.acceptance.embassy_date-->
                    <!--            }}</span>-->
                    <!--                            <span v-else>-&#45;&#45;&#45;&#45;</span>-->
                    <!--                        </p>-->
                    <!--                    </div>-->

                    <div v-if="resume.acceptance != null">
                        <h3>ترجمه</h3>
                        <p>
                            <span>آیا مدارک ترجمه شده اند ؟ </span>
                            <span v-if="resume.acceptance.doc_translate != null">{{
                                resume.acceptance.doc_translate
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                        <p>
            <span>ترجمه بیش از یکسال : </span
            ><span v-if="resume.acceptance.doc_translate_year_passed != null">{{
                            resume.acceptance.doc_translate_year_passed
                            }}</span>
                            <span v-else>-----</span>
                        </p>
                        <!--                      <p>-->
                        <!--            <span>تاریخ : </span-->
                        <!--            ><span v-if="resume.acceptance.tab_status != null">{{-->
                        <!--              resume.acceptance.tab_status-->
                        <!--            }}</span>-->
                        <!--                            <span v-else>-&#45;&#45;&#45;&#45;</span>-->
                        <!--                        </p>-->
                        <p>
                            <span>تایید شده سفارت : </span>
                            <span v-if="resume.acceptance.doc_embassy != null">{{
                                resume.acceptance.doc_embassy
                                }}</span>
                            <span v-else>-----</span>
                        </p>
                    </div>

                    <div v-if="resume.acceptance != null">
                        <h3>توضیحات</h3>
                        <p v-if="resume.acceptance.description != null">
                            {{ resume.acceptance.description }}
                        </p>
                        <p v-else>-----</p>
                    </div>
                    <div v-if="resume.type === 1 && resume.acceptance != null">
                        <h3>چقدر احتمال دارد از خدمات اپلای جرمنی استفاده کنید؟</h3>
                        <p v-if="resume.acceptance.apply_percent != 0">
                            {{ resume.acceptance.apply_percent }} %
                        </p>
                        <p v-else>-----</p>
                        <br/>
                    </div>
                    <div v-if="resume.type === 1 && resume.acceptance != null">
                        <h3>درنظر دارید چه زمانی اپلای کنید؟</h3>
                        <p v-if="resume.acceptance.apply_time != 'none'">
                            {{ resume.acceptance.apply_time }}
                        </p>
                        <p v-else>-----</p>
                    </div>

                </aside>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    layout: "expertLayout",
    data() {
        return {
            resume: [],
        };
    },
    async asyncData({params, $auth, $axios, redirect}) {
        if (!$auth.loggedIn) redirect("/auth/signin");
        else {
            if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
                $auth.logout();
                redirect("/auth/signin");
            }
        }
        const {data} = await $axios.get("v1/expert/getResume/" + params.id);
        return {
            resume: data.resume,
        };
    },
    computed: {
        vuexUserMenuState() {
            return this.$store.getters.vuexUserMenuState;
        },
        vuexUserDarkMode() {
            return this.$store.getters.vuexUserDarkMode;
        },
        darkmode() {
            const updatedUser = {...this.$auth.user};

            return updatedUser.darkmode;
        },

    },
    head() {
        return {
            title: "رزومه",
        };
    },
};
</script>
<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.resume_main {
  margin-right: calc(20% - 2rem);
}

.wrapper {
  margin-right: 0 !important;
  overflow-x: hidden !important;
  width: unset !important;
}

#resume {
  @include fbx-ai-start-jc-between;
  background-color: var(--white);
  padding: 5rem;
  z-index: 1 !important;
  border-radius: 8px;
  width: 85%;
  @include boxshadow();
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
        width: 100%;
        font-size: 0.9rem;
        color: var(--black);
        margin-bottom: 1rem;
        text-align: justify;
        line-height: 1.8rem;

        span:first-child {
          width: 50%;
        }

        span:last-child {
          width: 50%;
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
      width: 33rem;
      margin-right: -16px;
      right: unset !important;
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
        background-color: var(--white);
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
  .resume_main {
    margin-right: unset !important;
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
