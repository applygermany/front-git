<template>
    <div>
        <section
                :class="[vuexUserMenuState ? 'collapse' : '']"
                class="wrapper"
                id="dashboard"
        >
            <SuccessStatus/>

            <Timeline/>

            <ProfileExpert/>

            <InviteFiance/>
            <a
                    href="#start-modal"
                    ref="start_modal_trigger"
                    style="display: none"
                    uk-toggle
            ></a>
            <StartModal/>


            <client-only>
                <ApplyLevelModal/>
                <DoneDutyModal/>
            </client-only>
        </section>
    </div>
</template>

<script>
import SuccessStatus from "@/components/user/dashboard/_successStatus.vue";
import Timeline from "@/components/user/dashboard/_timeline.vue";
import ProfileExpert from "@/components/user/dashboard/_profileExpert.vue";
import InviteFiance from "@/components/user/dashboard/_inviteFinance.vue";
import StartModal from "@/components/user/layoutModal/_startModal.vue";
import ApplyLevelModal from "@/components/user/applyLevels/modal/_applyLevelModal.vue";
import DoneDutyModal from "@/components/user/layoutModal/_doneDutyModal.vue";
import PollModal from "@/components/user/layoutModal/_pollModal.vue";

export default {
    layout: "userLayout",
    components: {
        PollModal, DoneDutyModal,
        ApplyLevelModal,
        SuccessStatus,
        Timeline,
        ProfileExpert,
        InviteFiance,
        StartModal,
    },
    async asyncData({$auth, $axios, redirect, store}) {
        if (!$auth.loggedIn) redirect("/auth/signin");
        else {
            if ($auth.user.level !== 1) {
                $auth.logout();
                redirect("/auth/signin");
                return false;
            }
        }

        const {data} = await $axios.get(`v1/user/dashboard`);
        store.commit("user/Set_user_version", data.user_version);
        if (data.user) {
            store.commit("user/Set_User", data.user);
            store.commit("chat/Set_votes", data.votes);
            store.commit("user/Set_Acceptance", data.acceptance);
            store.commit("user/Set_UserApplyLevelStatus", data.userApplyLevelStatus);
            store.commit("user/Set_UserDuties", data.userDuties);
            store.commit(
                "user/Set_UserSupervisorFirstTelSupport",
                data.userSupervisorFirstTelSupport
            );
            store.commit("user/Set_UserSupervisor", data.userSupervisor);
            store.commit("user/Set_UserSupport", data.userSupport);
            store.commit("user/Set_Transactions", data.transactions);
            store.commit("user/Set_Users", data.users);
            store.commit("user/Set_Profile", data.user);
            store.commit("user/Set_Balance", data.balance);
        } else {
            redirect("/auth/signin");
        }
    },
    mounted() {
        let user = this.$store.getters["user/user"];
        if (user.seenModalCount < 0) {
            setTimeout(() => {
                this.$refs.start_modal_trigger.click();
            }, 750);
        }
    },
    computed: {
        vuexUserChatState() {
            return this.$store.getters.vuexUserChatState;
        },

        vuexUserMenuState() {
            return this.$store.getters["user/vuexUserMenuState"];
        },
    },
    head() {
        return {
            title: "داشبورد کاربر",
        };
    },
};
</script>

<style lang="scss">
@import "~/assets/user/scss/_mixins.scss";

.change-email-phone-password-modal {
  .uk-modal-body {
    width: 500px;
    padding: 0 !important;
    background-color: var(--white);
    border-radius: 8px;

    .title {
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
        font-size: 1rem;
        font-weight: bold;
        color: var(--black);
      }
    }

    .form {
      padding: 2.5rem;

      p {
        text-align: center;
        font-size: 0.9rem;
        color: var(--text-gray);
        line-height: 1.8rem;
        margin-bottom: 1.5rem;
      }

      form {
        @include fbx-column-ai-start-jc-start;

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;
          width: 100%;

          input {
            background-color: var(--white);
            padding: 0.75rem;
            border: 1px solid var(--gray);
            border-radius: 5px;
            width: calc(99% - 1.5rem);
            transition: all 0.3s;
            font-size: 0.8rem;
            color: var(--text-gray);

            &:focus {
              outline: 0;
              border-color: var(--main-color);
            }
          }

          input::placeholder {
            font-size: 0.8rem;
            color: var(--text-gray);
            transition: 0.2s ease-in;
          }

          input:focus,
          select:focus {
            outline-color: var(--main-color);
          }

          .floating {
            top: 0.75rem;
            right: 5%;
            position: absolute;
            pointer-events: none;
            transition: 0.2s ease all;
            background-color: var(--white);
            color: var(--text-gray);
            font-size: 0.9rem;
            font-weight: 300;
          }

          .error {
            font-size: 0.8rem;
            margin-top: 0.5rem;
            color: red;
          }

          input:focus ~ label,
          input:not(:placeholder-shown) ~ label {
            top: -21%;
            padding: 0 0.5rem;
          }
        }

        .code {
          @include fbx-ai-center-jc-between;
          direction: ltr;

          input {
            font-size: 0.9rem;
            background-color: var(--white);
            border-radius: 5px;
            width: 18%;
            height: 4rem;
            padding: 0;
            text-align: center;
            font-weight: 500;
            border: 1px solid var(--gray);
            margin-bottom: 0.5rem;
            color: var(--black);
            transition: all 0.3s;

            &:focus {
              outline: 0;
              border-color: var(--main-color);
            }
          }

          input[type="number"] {
            -webkit-appearance: none;
          }

          input::-webkit-outer-spin-button,
          input::-webkit-inner-spin-button {
            -webkit-appearance: none;
          }
        }

        .email-counter {
          @include fbx-ai-start-jc-between;
          width: 100%;
          margin-bottom: 1.5rem;

          .email {
            @include fbx-column-ai-start-jc-start;

            p {
              font-size: 0.9rem;
              color: var(--black);
              margin-bottom: 0.5rem;
            }

            a {
              font-size: 0.8rem;
              color: var(--main-color);
              font-weight: 500;
              text-decoration: underline !important;
              text-decoration-color: var(--main-color) !important;
            }
          }

          .counter {
            span {
              font-size: 0.9rem;
              color: var(--black);
            }
          }
        }

        .submit {
          width: 100%;
          text-align: center;

          a {
            background-color: var(--inner-background-color);
            width: 30%;
            cursor: pointer;
            border-radius: 5px;
            padding: 0.5rem 2rem;
            font-size: 0.8rem;
            border: 0;
            transition: all 0.3s;
            color: var(--black);

            &:hover {
              background-color: var(--light-main-color) !important;
              color: #2b2827;
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .change-email-phone-password-modal {
    .uk-modal-body {
      .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.9rem;
        }
      }

      .form {
        padding: 1.5rem;

        p {
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }

        form {
          .form-group {
            input {
              padding: 0.5rem;
              width: calc(99% - 1rem);
              font-size: 0.75rem;
            }

            input::placeholder {
              font-size: 0.75rem;
            }

            .floating {
              top: 0.5rem;
              font-size: 0.75rem;
            }

            .error {
              font-size: 0.75rem;
            }
          }

          .code {
            input {
              font-size: 0.8rem;
              width: 18%;
              height: 3rem;
            }
          }

          .email-counter {
            .email {
              p {
                font-size: 0.8rem;
              }

              a {
                font-size: 0.75rem;
              }
            }

            .counter {
              span {
                font-size: 0.8rem;
              }
            }
          }

          .submit {
            a {
              width: 40%;
            }
          }
        }
      }
    }
  }
}
</style>
