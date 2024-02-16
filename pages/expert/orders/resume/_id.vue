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
          <h1>رزومه</h1>
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
              <img :alt="resume.name" :src="resume.image"/>
            </div>
            <div v-else>
              <img :alt="resume.name" :src="resume.user.image+'?dark='+this.darkmode"/>
            </div>
            <div class="name">
              <h1>{{ resume.name ? resume.name : resume.user.acceptance.firstname }}
                {{ resume.family ? resume.family : resume.user.acceptance.lastname }}</h1>
              <p>{{ resume.phone ? resume.phone : resume.user.acceptance.phone }}</p>
              <p class="latin-font">{{ resume.email }}</p>
            </div>
          </div>

          <div class="educate-info">
            <h2>سوابق تحصیلی</h2>
            <div>
              <Education :key="index" :education="education" v-for="(education, index) in resume.educations"/>
            </div>
          </div>
          <div class="educate-info">
            <h2>زبان ها</h2>
            <div>
              <Language :key="index" :language="language" v-for="(language, index) in resume.languages"/>
            </div>
          </div>
          <div class="educate-info">
            <h2>فروش موفق</h2>
            <div>
              <Works :key="index" :work="work" v-for="(work, index) in resume.works"/>
            </div>
          </div>
          <div class="educate-info">
            <h2>دانش نرم افزاری</h2>
            <div>
              <SoftwareKnowledge :key="index" :SoftwareKnowledge="SoftwareKnowledge" v-for="(worSoftwareKnowledgek, index) in resume.SoftwareKnowledges"/>
            </div>
          </div>
          <div class="educate-info">
            <h2>دوره ها و مدارک</h2>
            <div>
              <Courses :key="index" :course="course" v-for="(course, index) in resume.courses"/>
            </div>
          </div>
          <div class="educate-info">
            <h2>سوابق کاری و افتخارات</h2>
            <div>
              <Researchs :key="index" :research="research" v-for="(research, index) in resume.researchs"/>
            </div>
          </div>
          <div class="educate-info">
            <h2>تفریحات</h2>
            <ul>
              <Hobbies :key="index" :hobby="hobby" v-for="(hobby, index) in resume.hobbies"/>
            </ul>
          </div>
        </div>
        <aside>
          <div>
            <h3>اطلاعات </h3>
            <p>
              <span>شماره سفارش : </span>
              <span>{{ resume.id }}</span>
            </p>
            <p>
              <span>نام قالب : </span>
              <span>{{ resume.theme }}</span>
            </p>
            <p>
              <span>نام رنگ : </span>
              <span>{{ resume.color }}</span>
            </p>
            <p>
              <span>زبان : </span>
              <span>{{ resume.language }}</span>
            </p>
            <p>
              <span>تاریخ تولد : </span>
              <span>{{ resume.birth_date }}</span>
            </p>
            <p>
              <span>محل تولد : </span>
              <span>{{ resume.birth_place }}</span>
            </p>
            <p>
              <span>آدرس : </span>
              <span>{{ resume.address }}</span>
            </p>
            <p>
              <span>شبکه های اجتماعی : </span>
              <span>{{ resume.socialmedia_links }}</span>
            </p>
            <div class="btn-pdf">
              <a :href="resume.pdf" target="_blank"><span>دانلود PDF</span></a>
            </div>

            <div v-if="resume.files.length">
              <span>آپلود های کاربر</span>
              <br/>
              <div v-for="(file, index) in resume.files">
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


import Education from "@/components/expert/orders/resume/education.vue";
import Language from "@/components/expert/orders/resume/language.vue";
import Works from "@/components/expert/orders/resume/works.vue";
import SoftwareKnowledge from "@/components/expert/orders/resume/softwareKnowledge.vue";
import Courses from "@/components/expert/orders/resume/courses.vue";
import Researchs from "@/components/expert/orders/resume/researchs.vue";
import Hobbies from "@/components/expert/orders/resume/hobbies.vue";

export default {
  layout: "writerLayout",
  components: {Hobbies, Researchs, Courses, SoftwareKnowledge, Works, Language, Education},
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
    const {data} = await $axios.get("v1/expert/data/getResume/" + params.id);
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
          width: 100%
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
