<template>
  <section id="comments-slider" class="comments-slider">
    <div class="uk-container">
      <div
        class="uk-position-relative uk-visible-toggle"
        tabindex="-1"
        uk-slider
      >
        <div class="slider-title">
          <h2 class="title-font">نظرات کاربران</h2>
          <div class="next-prev">
            <a uk-slider-item="previous">
              <img src="@/assets/site/images/icons/chevron-right.svg" alt="" />
            </a>
            <a uk-slider-item="next">
              <img src="@/assets/site/images/icons/chevron-left.svg" alt="" />
            </a>
          </div>
        </div>
        <ul
          class="
            uk-slider-items uk-child-width-1-1 uk-child-width-1-2@s uk-grid
          "
        >
          <li class="items" v-for="(item, index) in comments" :key="index">
            <div class="uk-panel">
              <div class="title">
                <div class="user-info">
                  <div class="img">
                    <img :src="item.photo" alt="" />
                  </div>
                  <div class="name">
                    <p>{{ item.name }}</p>
                    <div class="stars">
                      <ScoreFill
                        v-for="i in 5"
                        :i="i"
                        :rate="parseInt(item.rating)"
                        :key="i + 'a'"
                      />
                    </div>
                  </div>
                </div>
                <div class="uni-info">
                  <p class="latin-name">{{ item.university }}</p>
                  <span>{{ item.field }}</span>
                </div>
              </div>
              <div class="text">
                <p>
                  {{ item.text }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import ScoreFill from "@/components/svg/score-fill.vue";
import ScoreLine from "@/components/svg/score-line.vue";

export default {
  components: {
    ScoreFill,
    ScoreLine,
  },
  computed: {
    comments() {
      return this.$store.getters.comments;
    },
  },
  async created() {
    this.$store.dispatch("getComments");
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/site/css/mixins";.comments-slider{
  background-color: var(--background-color);
  padding-top: 4rem;
  //padding-bottom: 2rem;
  >div.uk-container{
    @include fbx-ai-start-jc-between;
    align-items: stretch;
  }
  .uk-position-relative{
    overflow-x: clip;
    width: 85%;
    margin-right: auto;
    z-index: 2;
    .slider-title{
      @include fbx-ai-center-jc-between;
      margin-bottom: 2.5rem;
      h2{
        color: var(--black);
        font-weight: 700;
        font-size: 1.5rem;
      }
      .next-prev{
        @include fbx-ai-start-jc-start;
        a{
          @include fbx-ai-center-jc-center;
          border-radius: 50%;
          border: 1px solid var(--gray);
          margin-right: 1rem;
          padding: 0.15rem;
          img{
            width: 2rem;
          }
        }
      }
    }
    .uk-slider-items{
      li.items{
        .uk-panel{
          background-color: #FCFCFC;
          border-radius: 5px;
          padding: 1.5rem;
          height: 90%;
          .title{
            @include fbx-ai-start-jc-between;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--gray);
            margin-bottom: 1rem;
            .user-info{
              @include fbx-ai-start-jc-start;
              .img{
                margin-left: 0.75rem;
                img{
                  width: 3rem;
                  height: 3rem;
                  object-fit: cover;
                  border-radius: 50%;
                }
              }
              .name{
                p{
                  color: var(--black);
                  font-weight: 700;
                  font-size: 0.9rem;
                  margin-bottom: 0.5rem;
                }
                .stars{
                  svg{
                    width: 1.2rem;
                  }
                  svg:not(.full){
                    fill: none;
                    color: #E6CC26;
                  }
                  .full{
                    color: #E6CC26;
                  }
                }
              }
            }
            .uni-info{
              direction: ltr;
              text-align: left;
              p{
                color: var(--main-red-color);
                font-size: 0.9rem;
                font-weight: 600;
                margin-bottom: 0.5rem;
              }
              span{
                color: var(--text-gray);
                font-size: 0.8rem;
              }
            }
          }
          .text{
            line-height: 2rem;
            color: var(--black);
            font-size: 0.8rem;
            text-align: justify;
          }
        }
      }
    }
  }
}

@include mobile-device{
  .comments-slider{
    padding-top: 2rem;
    .uk-position-relative{
      width: 100%;
      .slider-title{
        margin-bottom: 1.5rem;
        h2{
          font-size: 1.2rem;
        }
        .next-prev{
          a{
            img{
              width: 1.5rem;
            }
          }
        }
      }
      .uk-slider-items{
        li.items{
          .uk-panel{
            padding: 1rem;
            .title{
              padding-bottom: 1rem;
              margin-bottom: 1rem;
              .user-info{
                .img{
                  margin-left: 0.5rem;
                  width: 25%;
                  img{
                    width: 2.5rem;
                    height: 2.5rem;
                  }
                }
                .name{
                  p{
                    font-size: 0.9rem;
                  }
                  .stars{
                    svg{
                      width: 1rem;
                    }
                  }
                }
              }
              .uni-info{
                p{
                  font-size: 0.8rem;
                }
                span{
                  font-size: 0.75rem;
                }
              }
            }
            .text{
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}

@include tablet-device{
  .comments-slider{
    padding-top: 2rem;
    .uk-position-relative{
      width: 100%;
      .slider-title{
        margin-bottom: 1.5rem;
        h2{
          font-size: 1.2rem;
        }
        .next-prev{
          a{
            img{
              width: 1.5rem;
            }
          }
        }
      }
      .uk-slider-items{
        li.items{
          .uk-panel{
            padding: 1rem;
            .title{
              padding-bottom: 1rem;
              margin-bottom: 1rem;
              .user-info{
                .img{
                  margin-left: 0.5rem;
                  width: 25%;
                  img{
                    width: 2.5rem;
                    height: 2.5rem;
                  }
                }
                .name{
                  p{
                    font-size: 0.9rem;
                  }
                  .stars{
                    svg{
                      width: 1rem;
                    }
                  }
                }
              }
              .uni-info{
                p{
                  font-size: 0.8rem;
                }
                span{
                  font-size: 0.75rem;
                }
              }
            }
            .text{
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}

@include extra-extra-large-device{
  .comments-slider{
    .uk-position-relative{
      width: 100%;
    }
  }
}

@include middle-extra-large-device{
  .comments-slider{
    .uk-position-relative{
      width: 96%;
    }
  }
}
</style>
