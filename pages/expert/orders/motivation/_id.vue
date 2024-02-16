<template>
  <main class="main resume_main">

    <section class="wrapper">
      <div class="page-title">

        <div class="return-back">

          <nuxt-link to="/expert/orders">
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
          <h1>انگیزه نامه</h1>
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
            <div class="img" v-if="motivation.user.image !== null">
              <img :alt="motivation.name" :src="motivation.user.image+'?dark='+this.darkmode"/>

            </div>
            <div class="name">
              <h1>{{ motivation.name ? motivation.name : motivation.user.acceptance.firstname }}
                {{ motivation.family ? motivation.family : motivation.user.acceptance.lastname }}</h1>
              <p>{{ motivation.phone ? motivation.phone : motivation.user.acceptance.phone }}</p>
              <p class="latin-font">{{ motivation.email }}</p>
            </div>
          </div>

          <div class="educate-info">
            <h2>درباره</h2>
            <div>
              {{ motivation.about }}
            </div>
          </div>
          <div class="educate-info">
            <h2>رزمه</h2>
            <div>
              {{ motivation.resume }}
            </div>
          </div>
          <div class="educate-info">
            <h2>چرا آلمان</h2>
            <div>
              {{ motivation.why_germany }}
            </div>
          </div>
          <div class="educate-info">
            <h2>برنامه پس از فارغ التحصیلی</h2>
            <div>
              {{ motivation.after_graduation }}
            </div>
          </div>
          <div class="educate-info">
            <h2>توضیحات بیشتر</h2>
            <div>
              {{ motivation.extra_text }}
            </div>
          </div>
          <div class="educate-info">
            <h2>دانشگاه ها</h2>
            <div>
              <div v-if="motivation.to===1">
                <University :key="0" :university="motivation.universities[0]"/>
              </div>
              <div v-else>
                <University :key="index" :university="university" v-for="(university, index) in motivation.universities"/>
              </div>

            </div>
          </div>
        </div>

        <aside>
          <div>
            <h3>اطلاعات </h3>
            <p>
              <span>شماره سفارش : </span>
              <span>{{ motivation.id }}</span>
            </p>
            <p>
              <span>نام : </span>
              <span>{{ motivation.name }}</span>
            </p>
            <p>
              <span>نام خانوادگی : </span>
              <span>{{ motivation.family }}</span>
            </p>
            <p>
              <span>تاریخ تولد : </span>
              <span>{{ motivation.birth_date }}</span>
            </p>
            <p>
              <span>محل تولد : </span>
              <span>{{ motivation.birth_place }}</span>
            </p>
            <p>
              <span>آدرس : </span>
              <span>{{ motivation.address }}</span>
            </p>
            <p>
              <span>ارائه به : </span>
              <span v-if="motivation.to === 1">سفارت</span>
              <span v-else>دانشگاه</span>
            </p>
            <p v-if="motivation.to === 1">
              <span>کشور : </span>
              <span v-if="motivation.country === 1">ایران</span>
              <span v-else>کشور های دیگر</span>
            </p>
            <div class="btn-pdf">
              <a :href="motivation.pdf" target="_blank"><span>دانلود PDF</span></a>
            </div>

            <div v-if="motivation.files.length">
              <span>آپلود های کاربر</span>
              <br/>
              <div v-for="(file, index) in motivation.files">
                <div class="btn-download">
                  <a target="_blank" :href="file.file"> {{file.title}}</a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>

<script>

import University from "@/components/expert/orders/motivation/university.vue"

export default {
  layout: "expertLayout",
  components: {
    University
  },
  data() {
    return {
      motivation: [],
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
    const {data} = await $axios.get("v1/expert/getMotivation/" + params.id);
    return {
      motivation: data.motivation,
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
      title: "انگیزه نامه",
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

.btn-pdf{
  background: var(--main-color);
  width: 100%!important;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
}
.btn-pdf a{
  width: 100%!important;
  color: var(--white);
  text-align: center;
}

.btn-download{
  background: var(--background-color);
  width: 100%!important;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
}
.btn-download a{
  width: 100%!important;
  color: var(--main-color);
  text-align: center;
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
