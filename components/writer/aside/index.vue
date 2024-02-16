<template>
  <aside class="sidebar" :class="[vuexUserMenuState ? 'collapse' : '']">
    <WriterInfo/>
    <hr/>
    <SidebarMenu/>

    <EditUserProfile/>
    <div class="version latin-font">Version {{ writerVersion }}</div>
  </aside>
</template>

<script>
import WriterInfo from "@/components/writer/aside/_expertInfo.vue";
import SidebarMenu from "@/components/writer/aside/_sidebarMenu.vue";
import EditUserProfile from "@/components/writer/aside/modal/_editUserProfile.vue";

export default {
  components: {
    WriterInfo,
    SidebarMenu,
    EditUserProfile,
  },
  async mounted() {
    const {data} = await this.$axios.get(`v1/version/writer`);
    if (data) {
      this.$store.commit("writer/Set_writer_version", data);
    }
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters["writer/vuexUserMenuState"];
    },
    writerVersion() {
      return this.$store.getters['writer/writerVersion']
    },
  },
};
</script>
<style lang="scss">
@import "~/assets/expert/scss/_mixins.scss";

.sidebar {
  padding: 2rem 1rem;
  margin-top: 3.5rem;
  background-color: var(--white);
  width: calc(15% - 2rem);
  //border-left: 1px solid var(--gray);
  min-height: calc(100vh - 5.5rem);
  position: fixed;
  top: 0;
  right: 0;

  transition: all 0.3s;

  .expert-info {
    .img-rate {
      @include fbx-ai-center-jc-between;
      //flex-wrap: wrap;
      margin-bottom: 1.5rem;

      .img {
        width: 28%;

        img {
          border-radius: 50%;
          width: 3rem;
          height: 3rem;
          object-fit: cover;
        }
      }

      .rate {
        @include fbx-ai-center-jc-end;
        width: 68%;

        span {
          color: var(--main-color);
          font-weight: 800;
          margin-left: 0.5rem;
          font-size: 1rem;
          margin-bottom: -0.25rem;
        }

        > div {
          @include fbx-ai-center-jc-start;

          img {
            color: var(--gray);
            width: 1.2rem;
          }

          svg {
            color: var(--gray);
            width: 1.2rem;
          }

          img.full {
            color: var(--main-color);
          }

          svg.full {
            color: var(--main-color);
          }
        }
      }
    }

    .switch-theme {
      display: none;
    }

    .name-email {
      @include fbx-column-ai-start-jc-start;
      transition: all 0.5s;
      overflow: hidden;
      height: 3.25rem;

      .name {
        color: var(--black);
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .email {
        font-size: 0.9rem;
        color: var(--text-gray);
      }
    }
  }

  hr {
    border-color: var(--gray);
  }

  &__menu {
    margin-top: 2rem;

    ul {
      list-style-type: none;
      padding-right: 0;

      li {
        margin-bottom: 1.5rem;

        a {
          @include fbx-ai-center-jc-start;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-gray);
          transition: all 0.3s;

          &:hover {
            color: var(--dark);

            svg {
              color: var(--dark);
            }
          }

          img {
            margin-left: 0.5rem;
            fill: none;
            color: var(--text-gray);
            stroke-width: 1px;
            stroke-linejoin: round;
          }

          svg {
            margin-left: 0.5rem;
            fill: none;
            color: var(--text-gray);
            stroke-width: 1px;
            stroke-linejoin: round;
            transition: all 0.3s;
          }

          span {
            overflow: hidden;
          }
        }
      }
    }
  }

  .version {
    position: absolute;
    width: 100%;
    margin-top: auto;
    font-size: 0.8rem;
    bottom: 7%;
    right: 0;
    color: var(--text-gray);
    opacity: 0.65;
    font-weight: 500;
    text-align: center;
  }
}

.sidebar.collapse {
  width: calc(6% - 2rem);

  .expert-info {
    .img-rate {
      .img {
        margin-left: 0;
        width: 100%;
      }

      .rate {
        opacity: 0;
        max-height: 0;
        width: 0;
      }
    }

    .name-email {
      opacity: 0;
      //max-height: 0;
      //width: 0;
    }
  }

  .sidebar__menu {
    ul {
      li {
        a {
          justify-content: center;

          img {
            margin-left: 0;
          }

          svg {
            margin-left: 0;
          }

          span {
            opacity: 0;
            max-height: 0;
            width: 0;
          }
        }
      }
    }
  }

  .version {
    width: 0;
    opacity: 0;
  }
}

@include mobile-device {
  .sidebar {
    width: 50%;
    z-index: 1000;
    padding: 0;
    right: -50%;
    min-height: calc(100% - 3.5rem);

    .expert-info {
      position: relative;
      padding: 1rem 1rem;
      background-color: rgba(#737284, 0.06);

      .img-rate {
        margin-bottom: 1rem;

        .img {
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        .rate {
          display: none;
        }
      }

      .switch-theme {
        display: block;
        position: absolute;
        left: 1rem;
        top: 1rem;

        svg {
          color: var(--black);
          width: 1.2rem;
        }

        .sun {
          display: none;
        }
      }

      .name-email {
        height: 3.25rem;

        .name {
          font-size: 0.75rem;
        }

        .email {
          font-size: 0.75rem;
        }
      }
    }

    hr {
      display: none;
    }

    &__menu {
      margin-top: 0;
      padding: 1rem 1rem;

      ul {
        li {
          a {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
  .sidebar.collapse {
    right: 0;
    width: 50%;

    .expert-info {
      .name-email {
        opacity: 1;
      }
    }

    .sidebar__menu {
      ul {
        li {
          a {
            justify-content: flex-start;

            svg {
              margin-left: 0.5rem;
            }

            span {
              opacity: inherit;
              max-height: inherit;
              width: 85%;
            }
          }
        }
      }
    }

    .version {
      width: 100%;
      opacity: inherit;
    }
  }
}

@include tablet-device {
  .sidebar {
    width: 30%;
    z-index: 1000;
    padding: 0;
    right: -30%;
    min-height: calc(100% - 3.5rem);

    .expert-info {
      position: relative;
      padding: 1rem 1rem;
      background-color: rgba(#737284, 0.06);

      .img-rate {
        margin-bottom: 1rem;

        .img {
          img {
            width: 2.5rem;
            height: 2.5rem;
          }
        }

        .rate {
          display: none;
        }
      }

      .switch-theme {
        display: block;
        position: absolute;
        left: 1rem;
        top: 1rem;

        svg {
          color: var(--black);
          width: 1.2rem;
        }

        .sun {
          display: none;
        }
      }

      .name-email {
        height: 3.25rem;

        .name {
          font-size: 0.75rem;
        }

        .email {
          font-size: 0.75rem;
        }
      }
    }

    hr {
      display: none;
    }

    &__menu {
      padding: 1rem 1rem;

      ul {
        li {
          a {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
  .sidebar.collapse {
    right: 0;
    width: 30%;

    .expert-info {
      .name-email {
        opacity: 1;
      }
    }

    .sidebar__menu {
      ul {
        li {
          a {
            justify-content: flex-start;

            svg {
              margin-left: 0.5rem;
            }

            span {
              opacity: inherit;
              max-height: inherit;
              width: 85%;
            }
          }
        }
      }
    }

    .version {
      width: 100%;
      opacity: inherit;
    }
  }
}
</style>
