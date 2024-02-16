<template>
  <div>
    <main class="main" id="landing4">
      <section class="landing-title uk-container">
        <h1 class="title-font">سوالــــات متداول</h1>
        <form action="#">
          <input type="search" placeholder="جستجو..." v-model="question" />
          <span>جستجو : </span>
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="uk-svg"
            >
              <path
                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </form>
      </section>
      <section class="all-questions uk-container">
        <ul uk-accordion class="uk-accordion">
          <li v-for="(faq, index) in faqs" :key="index">
            <a class="uk-accordion-title" aria-expanded="false">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                class="uk-svg"
              >
                <circle
                  id="Ellipse_1600"
                  data-name="Ellipse 1600"
                  cx="8"
                  cy="8"
                  r="8"
                  fill="#e4c064"
                ></circle>
              </svg>
              {{ faq.question }}
            </a>
            <div class="uk-accordion-content" hidden>
              <div v-html="faq.answer"></div>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  layout: "siteLayout",
  data() {
    return {
      question: "",
    };
  },
  computed: {
    faqs() {
      const faqs = this.$store.getters.faq;
      return faqs.filter((item) => item.question.includes(this.question));
    },
  },
  async asyncData({ store, $axios }) {
    const { data } = await $axios.post("v1/faqs");

    store.commit("Set_Faq", data.faqs);
  },
  head() {
    return {
      title: "سوالات متداول",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins.scss";
#landing4 {
  .all-questions {
    ul {
      li {
        border-top: 1px solid var(--gray);
        padding-top: 2rem;
        padding-bottom: 2rem;
        margin-top: 0;
        a.uk-accordion-title {
          color: var(--black);
          font-size: 0.9rem;
          font-weight: 600;
          svg {
            color: var(--main-color);
            width: 0.8rem;
            margin-left: 0.5rem;
          }
          &::before {
            background-image: url("@/assets/site/images/icons/chevron-down.svg");
            background-size: 2rem;
            float: left;
          }
        }
        .uk-accordion-content {
          width: 95%;
          margin-left: auto;
          margin-right: auto;
          color: #847f74;
          line-height: 2.5rem;
          font-size: 0.8rem;
        }
      }
      .uk-open > .uk-accordion-title::before {
        background-image: url("@/assets/site/images/icons/chevron-up.svg");
      }
    }
  }
}

@include mobile-device {
  #landing4 {
    .all-questions {
      ul {
        li {
          padding-top: 1rem;
          padding-bottom: 1rem;
          a.uk-accordion-title {
            font-size: 0.8rem;
            line-height: 1.8rem;
            svg {
              width: 0.6rem;
            }
            &::before {
              background-size: 1.8rem;
            }
          }
          .uk-accordion-content {
            width: 100%;
            line-height: 2rem;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  #landing4 {
    .all-questions {
      ul {
        li {
          padding-top: 1rem;
          padding-bottom: 1rem;
          a.uk-accordion-title {
            font-size: 0.8rem;
            svg {
              width: 0.6rem;
            }
            &::before {
              background-size: 1.8rem;
            }
          }
          .uk-accordion-content {
            width: 100%;
            line-height: 2rem;
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}
</style>
