<template>
    <div id="upgrade-user-modal" class="delete-uploads-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>سطح کاربری</p>
                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
            <div class="text">
                <p>
                    آیا از تغییر سطح کاربری
                    <span style="color: var(--dark-main-color)">{{
                        selectedUser.name
                        }}</span>
                    به ویژه/پایه/عادی اطمینان دارید؟
                </p>
                <div class="submit-cancel">
                    <a
                            href="#confirm-upgrade-user-modal"
                            uk-toggle
                            :class="selectedUser.type === 3 ? 'submit-border uk-modal-close ' : 'submit'"
                            @click="changePackage(3,selectedUser.id)"
                    >
                        پکیج پایه
                    </a>

                    <a
                            href="#confirm-upgrade-user-modal"
                            uk-toggle
                            :class="selectedUser.type === 2 ? 'submit-border ' : 'submit uk-modal-close'"
                            @click="changePackage(2,selectedUser.id)"
                    >
                        پکیج ویژه
                    </a>
                    <a
                        href="#confirm-upgrade-user-modal"
                        uk-toggle
                        :class="selectedUser.type === 1 ? 'submit-border ' : 'submit uk-modal-close'"
                        @click="changePackage(1,selectedUser.id)"
                    >
                        کاربر عادی
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sending: false,
        };
    },
    computed: {
        user() {
            return this.$store.getters["expert/user"];
        },
        selectedUser() {
            return this.$store.getters["expert/selectedUser"];
        },
        userId() {
            return this.$store.getters["expert/userId"];
        },
    },
    methods: {
        async changePackage(type, id) {
            this.$store.commit("expert/SET_SelectedType", type);
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.delete-uploads-modal {
  .uk-modal-body {
    padding: 0;
    background-color: var(--white);
    //width: 400px;
    border-radius: 8px;
    z-index: 99999;


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

    .text {
      padding: 1rem 1.5rem 1.5rem 1.5rem;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      z-index: 9999999;

      p {
        line-height: 1.8rem;
        text-align: justify;
        font-size: 0.8rem;
        color: var(--black);
        margin-bottom: 2rem;
      }

      .submit-cancel {
        text-align: center;
        width: 100%;

        .submit {
          border: 1px solid var(--inner-background-color);
          border-radius: 5px;
          background-color: var(--inner-background-color);
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          padding-right: 2rem;
          padding-left: 2rem;
          margin-left: 0.75rem;
          width: 150px !important;
          text-align: center;
          color: var(--black);
          transition: all 0.3s;

          &:hover {
            background-color: #ff3535 !important;
            color: #2b2827;
          }
        }

        .submit-border {
          border: 1px solid var(--main-color);
          border-radius: 5px;
          background-color: var(--inner-background-color);
          font-weight: 500;
          font-size: 0.8rem;
          cursor: pointer;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          padding-right: 2rem;
          padding-left: 2rem;
          margin-left: 0.75rem;
          text-align: center;
          color: var(--black);
          transition: all 0.3s;

          &:hover {
            background-color: #ff3535 !important;
            color: #2b2827;
          }
        }

        .cancel {
          cursor: pointer;
          font-weight: 500;
          border: 1px solid var(--gray);
          border-radius: 5px;
          color: var(--black);
          font-size: 0.8rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          width: 25%;
          background-color: var(--white);
          transition: all 0.3s;

          &:hover {
            background-color: var(--gray);
            border-color: var(--gray);
            color: var(--black);
          }
        }
      }
    }
  }
}

@include mobile-device {
  .delete-uploads-modal {
    .uk-modal-body {
      .title {
        padding: 0.75rem 1.25rem;

        p {
          font-size: 0.9rem;
        }
      }

      .text {
        padding: 0.75rem 1.25rem 1.25rem 1.25rem;

        p {
          font-size: 0.75rem;
        }

        .submit-cancel {
          .submit {
            font-size: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: 40%;
          }

          .submit-border {
            font-size: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: 40%;
          }

          .cancel {
            font-size: 0.75rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            width: 40%;
          }
        }
      }
    }
  }
}
</style>
