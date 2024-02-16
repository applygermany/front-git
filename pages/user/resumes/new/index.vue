<template>
  <div>
    <section
        class="wrapper"
        id="submit-resume"
        :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <TitlePrice/>

      <First :resume="resume"/>

      <Second :resume="resume"/>

      <Third :resume="resume"/>

      <Fourth :resume="resume"/>

      <Fifth :resume="resume"/>

      <SixthSeventh :resume="resume"/>

      <Eighth :resume="resume"/>

      <NinthTenthEleventh :resume="resume"/>

      <Final :resume="resume"/>
    </section>
  </div>
</template>

<script>
import TitlePrice from "@/components/user/resumes/new/_titlePrice.vue";
import First from "@/components/user/resumes/new/_first.vue";
import Second from "@/components/user/resumes/new/_second.vue";
import Third from "@/components/user/resumes/new/_third.vue";
import Fourth from "@/components/user/resumes/new/_fourth.vue";
import Fifth from "@/components/user/resumes/new/_fifth.vue";
import SixthSeventh from "@/components/user/resumes/new/_sixthSeventh.vue";
import Eighth from "@/components/user/resumes/new/_eighth.vue";
import NinthTenthEleventh from "@/components/user/resumes/new/_ninthTenthEleventh.vue";
import Final from "@/components/user/resumes/new/_final.vue";

export default {
  layout: "userLayout",
  components: {
    TitlePrice,
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    SixthSeventh,
    Eighth,
    NinthTenthEleventh,
    Final,
  },
  async asyncData({$auth, store, redirect}) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }

    // store.dispatch("resume/resume");
  },
  created() {
    this.$store.dispatch("resume/removeResume");
    this.$store.dispatch("resume/resume");
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters['user/vuexUserMenuState']
    },
    resume() {
      return this.$store.getters["resume/resume"];
    },
  },
  head() {
    return {
      title: "رزومه",
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/user/scss/_mixins.scss";

.resume-box.fade {
  opacity: 0.5;
  padding: 2rem;
  pointer-events: none;
  user-select: none;
  @include boxshadow();
  border-radius: 8px;
  background-color: var(--white);
  margin-bottom: 2rem;

  h3 {
    color: var(--black);
    font-size: 0.9rem;
    font-weight: 800;
  }

  hr {
    width: 15%;
    border-color: var(--gray);
    margin-bottom: 2.5rem;
  }
}

.resume-box:not(.fade) {
  padding: 2rem;
  @include boxshadow();
  border-radius: 8px;
  background-color: var(--white);
  margin-bottom: 2rem;

  h3 {
    color: var(--black);
    font-size: 0.9rem;
    font-weight: 800;
  }

  hr {
    width: 15%;
    border-color: var(--gray);
    margin-bottom: 2.5rem;
  }
}

form {
  position: relative;

  .row {
    .form-group {
      position: relative;

      input {
        font-size: 0.8rem;
        border: 1px solid var(--gray);
        border-radius: 5px;
        width: calc(99.8% - 1.5rem);
        padding: 0.75rem;
        color: var(--black);
        background-color: var(--white);
        transition: all 0.3s;

        &.error {
          border: 1px solid red;

          &:focus {
            outline: 0;
            border-color: red;
          }
        }

        &::placeholder {
          font-family: iransansx;
          font-size: 0.8rem;
          color: var(--main-color);
          direction: rtl;
          text-align: right;
          font-weight: 300;
          transition: 0.2s ease-in;
        }

        &:focus {
          outline: 0;
          border-color: var(--main-color);
        }
      }

      input:focus,
      select:focus {
        outline-color: var(--main-color);
      }

      span.error {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        color: red;
      }

      .floating {
        top: 0.75rem;
        right: 0.75rem;
        position: absolute;
        pointer-events: none;
        transition: 0.2s ease all;
        background-color: var(--white);
        color: var(--text-gray);
        font-size: 0.8rem;
        font-weight: 300;
      }

      input:focus ~ label,
      input:not(:placeholder-shown) ~ label {
        top: -21%;
        padding: 0 0.5rem;
      }

      .calender {
        svg {
          top: 20%;
          left: 2%;
          position: absolute;
          fill: none;
          color: var(--main-color);
        }
      }
    }
  }

  textarea {
    font-size: 0.8rem;
    border: 1px solid var(--gray);
    border-radius: 5px;
    width: calc(99.8% - 1.5rem);
    padding: 0.75rem;
    color: var(--black);
    background-color: var(--white);
    transition: all 0.3s;
    height: calc(100% - 1.5rem);

    &.error {
      border: 1px solid red;

      &:focus {
        outline: 0;
        border-color: red;
      }
    }

    &::placeholder {
      font-family: iransansx;
      font-size: 0.8rem;
      color: var(--text-gray);
      direction: rtl;
      text-align: right;
      font-weight: 300;
      transition: 0.2s ease-in;
    }

    &:focus {
      outline: 0;
      border-color: var(--main-color);
    }
  }

  .delete-form {
    @include fbx-column-ai-center-jc-center;
    position: absolute;
    right: -1.75rem;
    top: 0;
    height: 100%;
    transition: all 0.3s;

    a {
      @include fbx-column-ai-center-jc-center;
      width: 100%;
      height: 100%;
    }

    svg {
      color: var(--text-gray);
    }

    &:hover {
      background-color: rgba(#cc2a2a, 0.08);

      svg {
        color: #cc2a2a;
      }
    }
  }
}

@include mobile-device {
  .resume-box {
    padding: 1rem;
    margin-bottom: 1.5rem;

    h3 {
      font-size: 0.8rem;
    }

    hr {
      width: 40%;
      margin-bottom: 1.5rem;
    }
  }
  form {
    .row {
      @include fbx-ai-start-jc-between;
      flex-wrap: wrap;
      margin-bottom: 0;

      .form-group {
        margin-bottom: 1.5rem;
        width: 100% !important;

        input {
          padding: 0.5rem;
          font-size: 0.75rem;
          width: calc(100% - 1rem);

          &::placeholder {
            font-size: 0.75rem;
          }

          &:focus ~ label,
          &:not(:placeholder-shown) ~ label {
            top: -25%;
          }
        }

        .floating {
          top: 25%;
          font-size: 0.75rem;
        }
      }
    }

    textarea {
      line-height: 1.5rem;
      padding: 0.5rem;
      font-size: 0.75rem;
      width: calc(100% - 1.2rem);
    }

    .delete-form {
      @include fbx-column-ai-center-jc-center;
      position: absolute;
      right: 0;
      top: inherit;
      height: inherit;
      bottom: -0.75rem;
      width: 100%;

      a {
        @include fbx-column-ai-center-jc-center;
        width: 100%;
        height: 100%;
      }
    }
  }
}

@include tablet-device {
  .resume-box {
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    h3 {
      font-size: 0.8rem;
    }

    hr {
      width: 40%;
      margin-bottom: 1.5rem;
    }
  }
}
</style>
