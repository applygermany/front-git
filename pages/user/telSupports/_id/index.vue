<template>
  <div>
    <section
        class="wrapper"
        id="detail-reserved-page"
        :class="[vuexUserMenuState ? 'collapse' : '']"
    >
      <NameImgExplain/>

      <TimeRemain/>

      <ReservedComment/>

      <SendRequestConsultingModal/>

      <EditRequestConsultingModal/>

      <BusyRequestConsultingModal/>

      <CantRequestConsultingModal/>
    </section>

    <client-only>
      <VuexTurnOffVpnModal/>
    </client-only>

  </div>
</template>

<script>
import NameImgExplain from "@/components/user/telSupports/_nameImgExplain.vue";
import TimeRemain from "@/components/user/telSupports/_timeRemain.vue";
import ReservedComment from "@/components/user/telSupports/_reservedComment.vue";
import SendRequestConsultingModal from "@/components/user/telSupports/modal/_sendRequestConsultingModal.vue";
import EditRequestConsultingModal from "@/components/user/telSupports/modal/_editRequestConsultingModal.vue";
import BusyRequestConsultingModal from "@/components/user/telSupports/modal/_busyRequestConsultingModal.vue";
import CantRequestConsultingModal from "@/components/user/telSupports/modal/_cantRequestConsultingModal.vue";
import VuexTurnOffVpnModal from "~/components/user/layoutModal/_vuexTurnOffVpnModal.vue";

export default {
  layout: "userLayout",
  components: {
    NameImgExplain,
    TimeRemain,
    ReservedComment,
    SendRequestConsultingModal,
    EditRequestConsultingModal,
    BusyRequestConsultingModal,
    CantRequestConsultingModal,
    VuexTurnOffVpnModal,
  },
  data() {
    return {
      id: 0,
      panel: 1,
      telSupport: {
        price: 0,
      },
    };
  },
  async asyncData({params, store, $auth, $axios, redirect}) {
    if (!$auth.loggedIn) redirect("/auth/signin");
    else {
      if ($auth.user.level !== 1) {
        $auth.logout();
        redirect("/auth/signin");
      }
    }

    try {
      const ipChecker = await $axios.get(`https://ipwho.is`);
      if (ipChecker.data.country === 'Iran' && ipChecker.data.country_code === 'IR') {
        store.dispatch("telSupports/setVuexTurnOffVpnModal", true);
      } else {
        store.dispatch("telSupports/setVuexTurnOffVpnModal", false);
      }
    } catch (error) {
      store.dispatch("telSupports/setVuexTurnOffVpnModal", false);
    }

    const {data} = await $axios.post(`v1/user/expertTelSupports`, {
      id: params.id,
    });

    store.commit("telSupports/SET_ExpertId", data.expert.id);
    store.commit("telSupports/SET_Expert", data.expert);
    store.commit("telSupports/SET_Times", data.times);
    store.commit("telSupports/SET_Comments", data.comments);
    if (data.nextTelSupport != null)
      store.commit("telSupports/SET_TelSupportReserve", data.nextTelSupport);
    store.commit("telSupports/SET_NextTelSupport", data.nextTelSupport);
  },
  computed: {
    vuexUserMenuState() {
      return this.$store.getters["user/vuexUserMenuState"];
    },
    vuexTurnOffVpnModal() {
      return this.$store.getters.vuexTurnOffVpnModal;
    },
  },
  head() {
    return {
      title: "پشتبانی تلفنی",
    };
  },
};
</script>
<style lang="scss">
@import "~/assets/user/scss/_mixins.scss";

#detail-reserved-page
.reserved-comment
.uk-switcher
.comments
.comment-box
.title
.right
.name
.star {
  width: auto !important;
}

.w-31 {
  width: 31.39% !important;
}

.request-consulting-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    border-radius: 8px;
    width: 60%;

    > .title {
      @include fbx-ai-center-jc-between;
      background-color: var(--inner-background-color);
      padding: 1rem 1.5rem;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;

      button {
        position: inherit;

        &:hover {
          svg {
            color: var(--red);
          }
        }
      }

      p {
        font-size: 0.9rem;
        font-weight: bold;
        color: var(--black);
      }
    }

    > .text {
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;

      .explain {
        line-height: 1.8rem;
        font-size: 0.8rem;
        color: var(--text-gray);
        font-weight: 500;
      }

      form {
        margin-top: 2rem;
        width: 100%;

        .form-group {
          p {
            font-size: 12px;
          }

          input {
            border: 1px solid var(--gray);
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 0.8rem;
            color: var(--black);
            background-color: var(--white);
            width: calc(99.8% - 1.5rem);
            transition: all 0.3s;

            &::placeholder {
              color: var(--text-gray);
              font-size: 0.8rem;
            }

            &:focus {
              outline: 0;
              border-color: var(--main-color);
            }
          }
        }
      }

      .price-buttons {
        margin-top: 2rem;
        @include fbx-ai-start-jc-between;
        align-items: flex-end;

        .price {
          @include fbx-column-ai-start-jc-start;

          span {
            color: var(--text-gray);
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          p {
            font-size: 0.9rem;
            color: var(--black);
            font-weight: 600;
          }
        }

        .buttons {
          @include fbx-ai-start-jc-start;
          justify-content: flex-end;
          width: 60%;

          .submit {
            text-align: center;
            width: 40%;
            border-radius: 5px;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            color: var(--black);
            font-size: 0.8rem;
            font-weight: 500;
            background-color: var(--inner-background-color);
            border: 1px solid var(--inner-background-color);
            transition: all 0.3s;

            &:hover {
              background-color: var(--light-main-color);
              color: #2b2827;
              border-color: var(--light-main-color);
            }
          }

          .cancel {
            text-align: center;
            margin-right: 1rem;
            width: 40%;
            font-weight: 500;
            background-color: var(--white);
            border: 1px solid var(--gray);
            border-radius: 5px;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            color: var(--black);
            font-size: 0.8rem;
            transition: all 0.3s;

            &:hover {
              background-color: var(--inner-background-color);
              border-color: var(--inner-background-color);
            }
          }
        }
      }

      .edit-price-buttons {
        .buttons {
          justify-content: center;
          width: 100%;

          .submit {
            width: 20%;
          }

          .cancel {
            width: 20%;

            &:hover {
              background-color: var(--red);
              color: #fff;
            }
          }
        }
      }

      .whatsapp-got {
        @include fbx-ai-start-jc-between;
        margin-top: 2rem;

        .got {
          align-self: flex-end;
          @include fbx-ai-start-jc-start;
          width: 25%;

          a {
            width: 100%;
            border-radius: 5px;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            color: var(--black);
            font-size: 0.8rem;
            font-weight: 500;
            background-color: var(--inner-background-color);
            border: 1px solid var(--inner-background-color);
            transition: all 0.3s;
            text-align: center;

            &:hover {
              background-color: var(--light-main-color);
              color: #2b2827;
              border-color: var(--light-main-color);
            }
          }
        }

        .whatsapp {
          @include fbx-ai-center-jc-end;
          border-radius: 5px;
          border: 1px solid var(--gray);
          padding: 0.75rem;
          width: 40%;

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
              font-size: 1rem;
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
    }
  }
}

@include mobile-device {
  .w-31 {
    width: 100% !important;
  }
  .request-consulting-modal {
    .uk-modal-body {
      width: 100%;

      > .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.8rem;
        }
      }

      > .text {
        padding: 0.75rem 1.25rem 1.25rem 1.25rem;

        .explain {
          font-size: 0.75rem;
        }

        form {
          margin-top: 1.5rem;

          input {
            padding: 0.5rem;
            font-size: 0.75rem;
            width: calc(99.8% - 1rem);

            &::placeholder {
              font-size: 0.75rem;
            }
          }
        }

        .price-buttons {
          margin-top: 2rem;
          @include fbx-ai-start-jc-between;
          align-items: flex-end;
          flex-wrap: wrap;

          .price {
            width: 100%;
            flex-direction: row;
            margin-bottom: 1.5rem;

            span {
              font-size: 0.75rem;
              margin-bottom: 0;
              margin-left: 0.5rem;
            }

            p {
              font-size: 0.8rem;
            }
          }

          .buttons {
            justify-content: center;
            width: 100%;

            .submit {
              width: 40%;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 0.75rem;
            }

            .cancel {
              margin-right: 1rem;
              width: 40%;
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 0.75rem;
            }
          }
        }

        .edit-price-buttons {
          .buttons {
            justify-content: center;

            .submit {
              width: 40%;
            }

            .cancel {
              width: 40%;
            }
          }
        }

        .whatsapp-got {
          @include fbx-ai-start-jc-between;
          margin-top: 1.5rem;

          .got {
            align-self: flex-end;
            @include fbx-ai-start-jc-start;
            width: 25%;

            a {
              padding-top: 0.5rem;
              padding-bottom: 0.5rem;
              font-size: 0.75rem;
            }
          }

          .whatsapp {
            padding: 0.5rem;
            width: 60%;

            .icon {
              margin-right: 0.75rem;
            }

            .text {
              span {
                font-size: 0.9rem;
              }

              p {
                font-size: 0.9rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
