<template>
    <div class="submit-request">
        <form>
            <div class="form-group">
                <!--        <input v-model="agreed" type="checkbox" id="check" class="uk-checkbox">-->
                <!--        <label for="check">-->
                <!--          .از تعرفه مذکور مطلع شدم و تقاضای اخذ پذیرش دارم-->
                <!--        </label>-->
            </div>
            <div class="go-pay">
                <button type="button">فعال شده</button>
                <button type="button" @click="showAcceptance(3)">پکیج {{ prices.package.EUR }} یورویی</button>
                <button type="button" @click="showAcceptance(2)">پکیج {{ prices.package.EUR2 }} یورویی</button>
            </div>
        </form>
    </div>


</template>

<script>

export default {
    data() {
        return {
            agreed: false,
        };
    },
    methods: {
        async showAcceptance(type) {
            // if (this.agreed === false) {
            //   this.$toasted.error("لطفا گزینه مطلع شدم را چک کنید", {
            //     position: "bottom-left",
            //     duration: 5000,
            //   });
            //   return false;
            // }
            //

            const {data} = await this.$axios.post(`v1/user/submitPackage`, {type: type});
            if (data.hasTelSupport) {
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
                this.$router.push("/user/dashboard");
            } else {
                this.$router.push("/user/acceptance/submit/" + type);
            }

        },
    },
    computed: {
        prices() {
            return this.$store.getters["user/prices"];
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.submit-request {
  border-top: 1px solid var(--gray);
  padding-top: 2rem;
  width: 80%;
  margin: 4rem auto 0 auto;

  form {
    @include fbx-ai-center-jc-between;

    .form-group {
      .uk-checkbox:checked {
        background-image: url("@/assets/user/images/icons/white-check.svg");
        background-size: 80%;
      }

      label {
        color: var(--black);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }

    .go-pay {
      width: 40%;
      display: flex;

      button {
        margin-right: 0.5em;
        margin-left: 0.5em;
        cursor: pointer;
        border: 0;
        background-color: var(--main-color);
        color: var(--white);
        font-size: 0.8rem;
        font-weight: 600;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 100%;
        border-radius: 5px;
      }

      button:first-child {
        background-color: var(--gray);
        color: var(--text-gray);
      }
    }
  }
}

@include mobile-device {
  .submit-request {
    padding-top: 1rem;
    width: 95%;
    margin: 2rem auto 0 auto;

    form {
      justify-content: center;
      flex-wrap: wrap;

      .form-group {
        label {
          font-size: 0.75rem;
        }
      }

      .go-pay {
        width: 40%;
        margin-top: 1rem;
      }
    }
  }
}

@include tablet-device {
  .submit-request {
    padding-top: 1rem;
    margin: 2rem auto 0 auto;

    form {
      .form-group {
        label {
          font-size: 0.75rem;
        }
      }

      .go-pay {
        width: 20%;
      }
    }
  }
}
</style>
