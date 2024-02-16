<template>
    <div id="done-duty-modal" class="request-consulting-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>ثبت انجام وظیفه</p>
                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
            <div class="text">
                <p class="explain" v-if="dutyInfo !== null">
                    آیا از انجام وظیفه {{ dutyInfo.title }} اطمینان دارید؟
                </p>
                <div class="price-buttons edit-price-buttons">
                    <div class="buttons">
                        <a
                                class="submit uk-modal-close"
                                @click="submit">تایید انجام</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: "",
        };
    },
    methods: {
        async submit() {
            await this.$axios.post('v1/user/doneDuty', {
                id: this.dutyInfo.id,
                timestamp: this.dutyInfo.timestamp
            })

            const {data} = await this.$axios.get(`v1/user/dashboard`);
            this.$store.commit("user/Set_user_version", data.user_version);
            if (data.user) {
                this.$store.commit("user/Set_User", data.user);
                this.$store.commit("chat/Set_votes", data.votes);
                this.$store.commit("user/Set_Acceptance", data.acceptance);
                this.$store.commit("user/Set_UserApplyLevelStatus", data.userApplyLevelStatus);
                this.$store.commit("user/Set_UserDuties", data.userDuties);
                this.$store.commit(
                    "user/Set_UserSupervisorFirstTelSupport",
                    data.userSupervisorFirstTelSupport
                );
                this.$store.commit("user/Set_UserSupervisor", data.userSupervisor);
                this.$store.commit("user/Set_UserSupport", data.userSupport);
                this.$store.commit("user/Set_Transactions", data.transactions);
                this.$store.commit("user/Set_Users", data.users);
                this.$store.commit("user/Set_Profile", data.user);
                this.$store.commit("user/Set_Balance", data.balance);
            }

            this.$toasted.success("وظیفه با موفقیت انجام گردید", {
                position: "bottom-left",
                duration: 5000,
            });
        },
    },
    computed: {
        dutyInfo() {
            return this.$store.getters['expert/dutyArg']
        }
    }
};
</script>
<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.error {
  color: red !important;
  font-size: 14px;
  padding-top: 5px;
  font-weight: 600;
}

.error-border {
  border-color: red !important;
}

.request-consulting-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    border-radius: 8px;

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

        label {
          font-size: 0.8rem;
          color: var(--black);
          margin-right: 1rem;
        }

        input,
        textarea {
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

      .poll {
        margin-top: 1rem;
        @include fbx-ai-center-jc-between;

        .img {
          width: 20%;

          img {
            border-radius: 50%;
            width: 4rem;
            height: 4rem;
          }
        }

        .stars {
          width: 75%;
          @include fbx-ai-start-jc-between;
          border-radius: 25px;
          border: 1px solid var(--gray);
          padding: 0.75rem;

          span {
            font-size: 0.8rem;
            font-weight: 700;
            color: var(--main-color);
          }

          a {
            transition: all 0.3s;

            svg {
              transition: all 0.3s;
              width: 1.8rem;
              fill: none;
              color: var(--main-color);
            }

            &.full {
              svg {
                fill: var(--main-color);
              }
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .request-consulting-modal {
    .uk-modal-body {
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

        .poll {
          .img {
            img {
              width: 2.5rem;
              height: 2.5rem;
            }
          }

          .stars {
            padding: 0.5rem;

            span {
              font-size: 0.75rem;
            }

            a {
              svg {
                width: 1.5rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
