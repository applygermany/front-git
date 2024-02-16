<template>
  <div class="resume-box third">
    <h3>درباره هر کدام از موضوعات زیر توضیح دهید</h3>
    <hr />
    <form  >
      <div>
        <p>درباره خودتان</p>
        <textarea
          rows="8"
          placeholder="درباره خودتان"
          :value="previewMotivation.about" disabled 
        ></textarea>
      </div>
      <div>
        <p>درباره سوابق تحصیلی و کاری</p>
        <textarea
          rows="8"
          placeholder="درباره سوابق تحصیلی و کاری"
          :value="previewMotivation.resume" disabled 
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  computed: {
    previewMotivation() {
      return this.$store.getters["motivations/previewMotivation"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.third {
  form {
    @include fbx-ai-start-jc-between;
    div {
      position: relative;
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

@include mobile-device {
  .third {
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

@include tablet-device {
  .third {
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

@include large-device {
}
</style>
