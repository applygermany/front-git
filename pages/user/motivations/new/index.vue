<template>
  <div>
    <section
        class="wrapper"
        id="motivation"
        :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <TitlePrice/>

      <First/>

      <Second/>

      <Third :motivation="motivation"/>

      <Fourth :motivation="motivation"/>

      <Fifth :universities="universities"/>

      <NinthTenthEleventh :motivation="motivation" :errors="errors"/>

      <Final/>
    </section>
  </div>
</template>

<style>
.dz-preview {
  display: none;
}
</style>

<script>
import TitlePrice from "@/components/user/motivations/new/_titlePrice.vue";
import First from "@/components/user/motivations/new/_first.vue";
import Second from "@/components/user/motivations/new/_second.vue";
import Third from "@/components/user/motivations/new/_third.vue";
import Fourth from "@/components/user/motivations/new/_fourth.vue";
import Fifth from "@/components/user/motivations/new/_fifth.vue";
import NinthTenthEleventh from "@/components/user/motivations/new/_ninthTenthEleventh.vue";
import Final from "@/components/user/motivations/new/_final.vue";

export default {
  layout: "userLayout",
  components: {
    TitlePrice,
    First,
    Second,
    Third,
    Fourth,
    Fifth,
    NinthTenthEleventh,
    Final,
  },
  data() {
    return {
      motivation: {
        to: "برای ارائه به",
        country: "انتخاب سفارت",
        name: null,
        family: null,
        phone: null,
        birthDate: null,
        birthPlace: null,
        email: null,
        address: null,
        about: null,
        resume: null,
        whyGermany: null,
        afterGraduation: null,
        extraText: null,
        status: null,
        adminMessage: null,
      },
      universities: [
        {
          name: null,
          field: null,
          grade: null,
          language: "زبان تحصیل",
          text1: null,
          text2: null,
          type: 'سفارت'
        },
      ],
      errors: [],
    };
  },

  async asyncData({$auth, store, $axios, redirect}) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }

    const {data} = await $axios.post(`v1/user/universities`);
    const chosenUni = data.universities ? data.universities.filter((item) => item.status == 1) : [];
    const universities = []

    universities[0] = {
      name: null,
      field: null,
      grade: null,
      language: "زبان تحصیل",
      text1: null,
      text2: null,
      type: null
    }
    chosenUni.forEach((uni, index) => {
      universities[++index] = {
        name: uni.title,
        field: uni.field,
        grade: null,
        language: "زبان تحصیل",
        text1: null,
        text2: null,
        type: 'دانشگاه'
      }
    })
    store.commit('motivations/SET_University', universities)

    return {
      motivation: {
        id: store.getters["motivations/motivations"],
        to: "برای ارائه به",
        country: "انتخاب سفارت",
        name: $auth.user.firstnameEn,
        family: $auth.user.lastnameEn,
        phone: $auth.user.mobile,
        birthDate: $auth.user.birthDate,
        birthPlace: null,
        email: $auth.user.email,
        address: null,
        about: null,
        resume: null,
        whyGermany: null,
        afterGraduation: null,
        extraText: null,
        status: null,
        adminMessage: null,
      },
    };
  },

  created() {
    // this.$store.dispatch("motivations/removeMotivation");
    this.$store.dispatch("motivations/motivations");
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters["user/vuexUserMenuState"];
    },
  },
  head() {
    return {
      title: "انگیزه نامه",
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
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  box-shadow: 0px 0px 15px rgb(0 0 0 / 10%);
  border-radius: 8px;
  background-color: var(--white);
  margin-bottom: 2rem;
}

form {
  .row {
    @include fbx-ai-start-jc-between;
    margin-bottom: 1.5rem;

    .form-group {
      width: 30%;
      position: relative;

      input {
        background-color: var(--white);
        padding: 0.75rem;
        font-size: 0.8rem;
        border-radius: 5px;
        border: 1px solid var(--gray);
        width: calc(100% - 1.5rem);
        color: var(--black);
        transition: all 0.3s;

        &::placeholder {
          transition: all 0.3s;
          color: var(--text-gray);
          font-size: 0.8rem;
        }

        &:focus {
          outline: 0;
          border-color: var(--main-color);
        }

        &:focus ~ label,
        &:not(:placeholder-shown) ~ label {
          top: -20%;
          padding-right: 0.25rem;
          padding-left: 0.25rem;
        }
      }

      label {
        pointer-events: none;
        transition: all 0.3s;
        color: var(--text-gray);
        position: absolute;
        top: 30%;
        right: 0.75rem;
        font-size: 0.8rem;
        background-color: var(--white);
      }

      svg {
        top: 20%;
        left: 2%;
        position: absolute;
        fill: none;
        color: var(--main-color);
      }
    }
  }

  textarea {
    background-color: var(--white);
    line-height: 2rem;
    padding: 0.75rem;
    font-size: 0.8rem;
    border-radius: 5px;
    border: 1px solid var(--gray);
    color: var(--black);
    width: calc(100% - 1.7rem);
    transition: all 0.3s;

    &:focus {
      outline: 0;
      border-color: var(--main-color);
    }
  }
}

.resume-box {
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

@include mobile-device {
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

        label {
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
  }
  .resume-box {
    padding: 1rem;
    margin-bottom: 2rem;

    h3 {
      font-size: 0.8rem;
    }

    hr {
      width: 30%;
      margin-bottom: 1.5rem;
    }
  }
}

@include tablet-device {
  form {
    .row {
      @include fbx-ai-start-jc-between;
      flex-wrap: wrap;
      margin-bottom: 0;

      .form-group {
        margin-bottom: 1.5rem;
        width: 48% !important;

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

        label {
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
  }
  .resume-box {
    padding: 1rem;
    margin-bottom: 2rem;

    h3 {
      font-size: 0.8rem;
    }

    hr {
      margin-bottom: 1.5rem;
    }
  }
}
</style>
