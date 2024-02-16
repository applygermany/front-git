<template>
  <div>
    <main class="main" id="landing5">
      <section class="landing-title uk-container">
        <h1 class="title-font">خــانواده اپلای جرمنی</h1>
      </section>
      <section class="banner uk-container">
        <img :src="teams.banner" alt="" />
      </section>
      <section class="uk-container cooperation">
        <div class="item" v-for="(item, index) in teams.teams" :key="index">
          <div class="img">
            <span class="dot"></span>
          </div>
          <div class="name-expert">
            <span class="name">{{ item.name }}</span>
            <span class="expert">{{ item.field }}</span>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  layout: "siteLayout",
  computed: {
    teams() {
      return this.$store.getters.teams;
    },
  },
  async asyncData({ store, $axios }) {

    const { data } = await $axios.get("v1/teams");

    store.commit("Set_Teams", {
      teams: data.teams,
      banner: data.teamHeader,
    });
  },
  head() {
    return {
      title: "خانواده اپلای جرمنی",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins.scss";
#landing5 {
  .banner {
    img {
      width: 100%;
      border-radius: 5px;
      object-fit: cover;
      height: auto;
    }
  }

  .cooperation {
    margin-top: 3rem;
    @include fbx-ai-start-jc-start;
    flex-wrap: wrap;
    .item {
      width: 22.5%;
      padding-bottom: 3rem;
      padding-top: 3rem;
      padding-right: 1rem;
      border-right: 1px solid var(--gray);
      @include fbx-ai-start-jc-start;
      .img {
        margin-left: 1rem;
        img {
          border-radius: 50%;
          width: 3.5rem;
          height: 3.5rem;
        }
      }
      .name-expert {
        @include fbx-column-ai-start-jc-start;
        .name {
          font-size: 0.9rem;
          color: var(--main-color);
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .expert {
          font-weight: 500;
          font-size: 0.9rem;
          color: var(--black);
        }
      }
    }
  }
}

@include mobile-device {
  #landing5 {
    .banner {
      img {
        height: auto;
      }
    }

    .cooperation {
      margin-top: 1.5rem;
      .item {
        width: 45%;
        padding-bottom: 1rem;
        padding-top: 1rem;
        padding-right: 0.75rem;
        .img {
          margin-left: 0.75rem;
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
        .name-expert {
          .name {
            font-size: 0.75rem;
            line-height: 1.8rem;
          }
          .expert {
            font-size: 0.75rem;
            line-height: 1.8rem;
          }
        }
      }
    }
  }
}

@include tablet-device {
  #landing5 {
    .banner {
      img {
        height: auto;
      }
    }

    .cooperation {
      margin-top: 1.5rem;
      .item {
        width: 31%;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
        padding-right: 0.75rem;
        .img {
          margin-left: 0.75rem;
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }
        .name-expert {
          .name {
            font-size: 0.8rem;
            line-height: 1.8rem;
          }
          .expert {
            font-size: 0.8rem;
            line-height: 1.8rem;
          }
        }
      }
    }
  }
}

@include large-device {
  #landing5 {
    .banner {
      img {
        height: auto;
      }
    }

    .cooperation {
      .item {
        width: 31%;
      }
    }
  }
}
</style>
