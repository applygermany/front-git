<template>
    <div>
        <section
                class="wrapper"
                id="user-duty"
                :class="[vuexUserMenuState ? 'collapse' : '']"
        >
            <PageTitle/>
            <DutyItems/>

        </section>
    </div>
</template>

<script>
import PageTitle from "@/components/expert/duties/_pageTitle.vue";
import DutyItems from "@/components/expert/duties/_dutyItems.vue";

export default {
    layout: "expertLayout",
    components: {
        PageTitle,
        DutyItems,
    },
    data() {
        return {};
    },
    async asyncData({params, store, $auth, $axios, redirect}) {
        if (!$auth.loggedIn) redirect("/auth/signin");
        else {
            if ($auth.user.level === 1 || $auth.user.level === 6 || $auth.user.level === 4) {
                $auth.logout();
                redirect("/auth/signin");
            }
        }
        const {data} = await $axios.get("v1/expert/getDuties/" + params.id);

        store.commit("expert/SET_Duties", data.duties);
        store.commit("expert/SET_User", data.user);
        store.commit("expert/SET_UserId", params.id);
        store.commit("expert/SET_Categories", data.categories);
    },

    computed: {
        vuexUserMenuState() {
            return this.$store.getters["expert/vuexUserMenuState"];
        },
    },
    head() {
        return {
            title: "وظایف کاربر",
        };
    },
};
</script>
<style lang="scss">
@import "~/assets/expert/scss/_mixins.scss";

.duty-box-modal {
  .uk-modal-body {
    padding: 1.5rem;
    background-color: var(--white);
    border-radius: 8px;
    width: 400px;

    .title {
      margin-bottom: 2rem;

      h3 {
        font-size: 1rem;
        font-weight: bold;
        color: var(--black);
        padding-bottom: 0.5rem;
        border-bottom: 1px solid var(--gray);
      }
    }

    .form {
      form {
        @include fbx-column-ai-start-jc-start;

        .form-group {
          margin-bottom: 1.5rem;
          position: relative;

          input {
            width: calc(99% - 1.5rem);
            background-color: var(--white);
            padding: 0.75rem;
            font-size: 0.8rem;
            border-radius: 5px;
            border: 1px solid var(--gray);
            color: var(--black);
            //box-sizing: border-box;
            &:focus {
              outline: 0;
              border-color: var(--main-color);
            }
          }

          svg {
            top: 20%;
            left: 2%;
            position: absolute;
            fill: none;
            color: var(--main-color);
          }

          select {
            //box-sizing: border-box;
            width: 100%;
            background-color: var(--white);
            padding: 0.75rem;
            font-size: 0.8rem;
            border-radius: 5px;
            border: 1px solid var(--gray);
            color: var(--black);

            &:focus {
              outline: 0;
              border-color: var(--main-color);
            }
          }

          .select-selected {
            font-size: 0.8rem;
          }

          .select-items div {
            font-size: 0.8rem;
          }

          textarea {
            background-color: var(--white);
            padding: 0.75rem;
            width: calc(100% - 1.5rem);
            color: var(--black);
            font-size: 0.8rem;
            border: 0;

            &:focus {
              outline: 0;
            }
          }
        }

        .submit {
          text-align: center;

          button {
            width: 40%;
            background-color: var(--inner-background-color);
            font-size: 0.8rem;
            border: 0;
            padding: 0.5rem 2rem;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s;
            color: var(--black);

            &:hover {
              color: #2b2827;
              background-color: var(--light-main-color);
            }
          }

          .loading-button {
            font-size: 0.8rem;
            padding: 0.5rem 2rem;
            color: var(--black);
          }
        }
      }
    }
  }
}

@include mobile-device {
  .duty-box-modal {
    .uk-modal-body {
      padding: 1rem;

      .title {
        margin-bottom: 1.5rem;

        h3 {
          font-size: 0.9rem;
        }
      }

      .form {
        form {
          @include fbx-column-ai-start-jc-start;

          .form-group {
            input {
              font-size: 0.75rem;
            }

            select {
              font-size: 0.75rem;
            }

            .select-selected {
              font-size: 0.8rem;
            }

            .select-items div {
              font-size: 0.8rem;
            }

            textarea {
              font-size: 0.75rem;
            }
          }

          .submit {
            button {
              width: 40%;
              font-size: 0.75rem;
              padding: 0.5rem 1.5rem;
            }

            .loading-button {
              font-size: 0.75rem;
              padding: 0.5rem 1.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
