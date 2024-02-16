<template>
  <section class="all-questions uk-container">
    <ul uk-accordion class="uk-accordion">
      <li v-for="(faq, index) in faqs" :key="index" :class="index === 0 ? 'uk-open' : ''">
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
</template>

<script>
export default {
  computed: {
    faqs() {
      return this.$store.getters.cfaq;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins.scss";
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

@include mobile-device {
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

@include tablet-device {
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

.vpd-icon-btn {
  display: none !important;
}
.dz-preview {
  display: none;
}

#resume {
  width: 100%;
  cursor: pointer;

  > .dz-message {
    height: 100% !important;

    > .dropzone-custom-content {
      width: 100% !important;
      height: 255px;
      display: flex;
      align-content: center;
      justify-content: center;
      flex-direction: column;

      .js-upload {
        margin: 0 !important;
      }
    }
  }
}

.dz-clickable .dz-message {
  height: 100% !important;
}

.uploaded-file-info,
.upload-progressing {
  display: flex;
  padding: 30px 0;
  gap: 30px;
  flex-direction: row-reverse;
  width: 100%;
  height: 75%;
  align-items: center;

  > div {
    width: 100%;
    direction: ltr;

    > .left {
      width: 100% !important;
    }
  }
}
</style>
