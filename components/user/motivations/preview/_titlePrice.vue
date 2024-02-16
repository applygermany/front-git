<template>
  <div class="title-price">
    <div class="page-title">
      <div class="return-back">
        <h1>درخواست انگیزه نامه</h1>
      </div>
      <p>
        لیست زیر مشاوران و کاشناسان اپلای جرمنی می‌باشند. لطفا دقت داشته باشید
        که هزینه و مدت هر جلسه مشاوره برای کارشناسان متفاوت می‌باشد
      </p>
    </div>
    <div class="resume-price">
      <div class="text">
        <p>{{ previewMotivation.price | numberFilter }}</p>
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
    this.$store.dispatch(
      "motivations/previewMotivation",
      this.$route.params.id
    );
  },
  computed: {
    previewMotivation() {
      return this.$store.getters["motivations/previewMotivation"];
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
