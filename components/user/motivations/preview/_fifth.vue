<template>
  <div class="resume-box fifth">
    <ul class="uk-subnav uk-subnav-pill" uk-switcher>
      <li v-for="(university, index) in previewUniversities" :key="index">
        <a>
          {{ university.name }}
        </a>
      </li>
    </ul>
    <ul class="uk-switcher uk-margin">
      <li
        v-for="(university, index) in previewUniversities"
        :key="index"
        :class="{ 'uk-active': index == 0 }"
      >
        <form  >
          <div>
            <p>علت انتخاب این دانشگاه</p>
            <textarea
              rows="8"
              placeholder="علت انتخاب این دانشگاه"
              :value="university.text1" disabled 
            ></textarea>
          </div>
          <div>
            <p>علت انتخاب این رشته</p>
            <textarea
              rows="8"
              placeholder="علت انتخاب این رشته"
              :value="university.text2" disabled 
            ></textarea>
          </div>
        </form>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    previewUniversities() {
      return this.$store.getters["motivations/previewUniversities"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.error {
  color: red !important;
}

.fifth {
  .uk-subnav {
    border-bottom: 1px solid var(--gray);
    margin-right: -1.5rem;
    margin-left: -1.5rem;
    li {
      padding-right: 1.5rem;
      padding-left: 0.5rem;
      a {
        padding: 0 0 0.75rem 0;
        color: var(--black);
        font-size: 0.9rem;
        transition: all 0.3s;
      }
      &.uk-active {
        a {
          border-bottom: 1px solid var(--main-color);
          font-weight: bold;
          background-color: inherit;
        }
      }
      &:hover {
        a {
          background-color: inherit;
        }
      }
    }
  }
  .uk-switcher {
    form {
      @include fbx-ai-start-jc-between;
      div {
        width: 48%;
        max-width: 48%;
        @include fbx-column-ai-start-jc-start;
        p {
          color: var(--black);
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
      }
    }
  }
}

@include mobile-device {
  .fifth {
    .uk-subnav {
      li {
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 0.5rem;
        a {
          padding: 0 0 0.25rem 0;
          font-size: 0.75rem;
        }
      }
    }
    .uk-switcher {
      margin-bottom: 0;
      form {
        flex-wrap: wrap;
        div {
          margin-bottom: 1.5rem;
          width: 100%;
          max-width: 100%;
          &:last-child {
            margin-bottom: 0;
          }
          p {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  .fifth {
    .uk-subnav {
      li {
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 0.5rem;
        a {
          padding: 0 0 0.25rem 0;
          font-size: 0.75rem;
        }
      }
    }
    .uk-switcher {
      form {
        div {
          p {
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
        }
      }
    }
  }
}

@include large-device {
  .fifth {
    .uk-subnav {
      li {
        margin-bottom: 1rem;
        padding-right: 1rem;
        padding-left: 0.5rem;
      }
    }
  }
}
</style>
