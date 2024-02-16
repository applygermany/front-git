<template>
  <div class="name-img-explain">
    <div class="img"><img :src="expert.image" alt="" /></div>
    <div class="name-explain">
      <div class="name">
        <h1>{{ expert.firstname }} {{ expert.lastname }}</h1>
        <nuxt-link to="/user/telSupports" v-if="$auth.user.type != 2">تغیر مشاور</nuxt-link>
      </div>
      <div class="explain">
        <p> {{ expert.description }} </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    expert() {
      return this.$store.getters["telSupports/expert"];
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.name-img-explain {
  @include fbx-ai-start-jc-between;
  width: 100%;
  .img {
    width: 12%;
    img {
      width: 100%;
      //height: 5rem;
      border-radius: 50%;
    }
  }
  .name-explain {
    width: 85%;
    @include fbx-column-ai-start-jc-start;
    .name {
      @include fbx-ai-center-jc-start;
      margin-bottom: 1.5rem;
      h1 {
        font-size: 1.2rem;
        color: var(--black);
        font-weight: 800;
      }
      a {
        margin-right: 1rem;
        font-size: 0.8rem;
        font-weight: bold;
        color: var(--main-color);
      }
    }
    .explain {
      text-align: justify;
      font-size: 0.9rem;
      line-height: 2rem;
      color: var(--black);
    }
  }
}

@include mobile-device {
  .name-img-explain {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .img {
      width: 30%;
      margin-bottom: 1.5rem;
      img {
        width: 100%;
      }
    }
    .name-explain {
      width: 100%;
      align-items: center;
      .name {
        margin-bottom: 1.5rem;
        h1 {
          font-size: 1rem;
        }
        a {
          margin-right: 1rem;
          font-size: 0.75rem;
        }
      }
      .explain {
        font-size: 0.75rem;
        line-height: 1.8rem;
      }
    }
  }
}

@include tablet-device {
  .name-img-explain {
    .name-explain {
      .name {
        margin-bottom: 1.5rem;
        h1 {
          font-size: 1rem;
        }
        a {
          margin-right: 1rem;
          font-size: 0.75rem;
        }
      }
      .explain {
        font-size: 0.75rem;
        line-height: 1.8rem;
      }
    }
  }
}
</style>
