<template>
  <div class="duty__items">
    <div
      :class="{
        'box blue-box': duty.status === 1,
        'box red-box': duty.status === 2,
        'box yellow-box': duty.status === 3,
      }"
      v-for="(duty, index) in duties"
      :key="index"
    >
      <div class="title">
        <h3>{{ duty.title }}</h3>
        <span v-if="duty.status !== 3">
          <template v-if="duty.diff[0] < 0">
            {{ Math.abs(duty.diff[0]) }} روز گذشته
          </template>
          <template v-else-if="duty.diff[0] == 0">
            {{ Math.abs(duty.diff[1]) }} ساعت باقی مانده
          </template>
          <template v-else-if="duty.diff[0] > 0">
            {{ Math.abs(duty.diff[0]) }} روز باقی مانده
          </template>
        </span>
      </div>
      <div class="text">
        <p>{{ duty.text }}</p>
      </div>
      <div class="other">
        <div class="date-status">
          <span>{{ duty.deadlineJalali }}</span>
          -
          <span class="status" v-if="duty.status === 1">در دست اقدام</span>
          <span class="status" v-if="duty.status === 2">رد شده</span>
          <span class="status" v-if="duty.status === 3">انجام شده</span>
        </div>
        <div class="edit">
          <a
            href="#edit-box-modal"
            @click="editDuty(duty)"
            uk-toggle
            v-if="duty.status === 1 || duty.status === 2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="uk-svg"
            >
              <path
                d="M4.75 19.25L9 18.25L18.2929 8.95708C18.6834 8.56655 18.6834 7.93339 18.2929 7.54286L16.4571 5.70708C16.0666 5.31655 15.4334 5.31655 15.0429 5.70708L5.75 15L4.75 19.25Z"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M19.25 19.25H13.75"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <div class="uk-inline">
            <button class="more-action">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="uk-svg"
              >
                <path
                  d="M12.5 8C12.5 8.27614 12.2761 8.5 12 8.5C11.7239 8.5 11.5 8.27614 11.5 8C11.5 7.72386 11.7239 7.5 12 7.5C12.2761 7.5 12.5 7.72386 12.5 8Z"
                  stroke="#141414"
                ></path>
                <path
                  d="M12.5 12C12.5 12.2761 12.2761 12.5 12 12.5C11.7239 12.5 11.5 12.2761 11.5 12C11.5 11.7239 11.7239 11.5 12 11.5C12.2761 11.5 12.5 11.7239 12.5 12Z"
                  stroke="#141414"
                ></path>
                <path
                  d="M12.5 16C12.5 16.2761 12.2761 16.5 12 16.5C11.7239 16.5 11.5 16.2761 11.5 16C11.5 15.7239 11.7239 15.5 12 15.5C12.2761 15.5 12.5 15.7239 12.5 16Z"
                  stroke="#141414"
                ></path>
              </svg>
            </button>
            <div uk-dropdown="mode: click">
              <ul class="uk-nav uk-dropdown-nav">
                <li
                  @click="updateStatusDuty(duty.id, 3)"
                  v-if="duty.status === 1"
                >
                  <a> انجام شد </a>
                </li>
                <li @click="deleteDuty(duty.id)">
                  <a> حذف کردن </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a class="empty-box" href="#empty-box-modal" uk-toggle>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="uk-svg"
      >
        <path
          d="M12 5.75V18.25"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18.25 12H5.75"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>
    <a class="empty-box" href="#empty-box-modal" uk-toggle>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="uk-svg"
      >
        <path
          d="M12 5.75V18.25"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18.25 12H5.75"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>
    <a class="empty-box" href="#empty-box-modal" uk-toggle>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="uk-svg"
      >
        <path
          d="M12 5.75V18.25"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18.25 12H5.75"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>
    <a class="empty-box" href="#empty-box-modal" uk-toggle>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="uk-svg"
      >
        <path
          d="M12 5.75V18.25"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M18.25 12H5.75"
          stroke="#141414"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </a>

    <client-only>
      <EmptyBoxModal />

      <EditBoxModal />
    </client-only>
  </div>
</template>

<script>
import EmptyBoxModal from "@/components/expert/duties/modal/_emptyBoxModal.vue";
import EditBoxModal from "@/components/expert/duties/modal/_editBoxModal.vue";
export default {
  components: {
    EmptyBoxModal,
    EditBoxModal,
  },
  data() {
    return {
      deleting: false,
      updating: false,
    };
  },
  computed: {
    duties() {
      return this.$store.getters["expert/duties"];
    },
    id() {
      return this.$store.getters["expert/userId"];
    },
  },
  methods: {
    editDuty(duty) {
      console.log(duty);
      this.$store.commit("expert/SET_UpdateDuty", duty);
    },

    async deleteDuty(id) {
      this.deleting = true;
      this.errors = [];
      const deleteDuty = await this.$axios.delete("v1/expert/deleteDuty/" + id);
      if (deleteDuty.data.status === 1) {
        this.$toasted.success(deleteDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });

        this.$store.dispatch("expert/duties", this.id);
      } else if (deleteDuty.data.status === 422) {
        this.errors = deleteDuty.data.errors;
        this.$toasted.info(deleteDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(deleteDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.deleting = false;
    },
    async updateStatusDuty(id, status) {
      this.updating = true;
      this.errors = [];
      const updateStatusDuty = await this.$axios.put(
        "v1/expert/updateStatusDuty/" + id,
        { status: status }
      );
      if (updateStatusDuty.data.status === 1) {
        this.$toasted.success(updateStatusDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/duties", this.id);
      } else if (updateStatusDuty.data.status === 422) {
        this.errors = updateStatusDuty.data.errors;
        this.$toasted.info(updateStatusDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(updateStatusDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.updating = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.duty__items {
  @include fbx-ai-start-jc-start;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  margin-right: -0.5rem;

  .box {
    @include boxshadow();
    height: 205px;
    // min-height: 10rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.5rem;
    width: calc(24.8% - 3rem);
    padding: 1rem;
    border-radius: 8px;
    background-color: var(--white);
    @include fbx-column-ai-start-jc-start;

    > .title {
      @include fbx-ai-center-jc-between;
      width: 100%;

      h3 {
        font-weight: 800;
        font-size: 0.9rem;
        color: var(--black);
      }

      span {
        font-weight: 600;
        font-size: 0.8rem;
      }
    }

    > .text {
      width: 100%;
      word-break: break-word;
      max-height: 7rem;
      overflow-y: auto;
      margin-bottom: 1rem;
      margin-top: 1rem;
      line-height: 1.5rem;
      font-size: 0.8rem;
      color: var(--black);
      text-align: justify;
      &::-webkit-scrollbar {
        width: 4px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: #cacaca;
        border-radius: 15px;
      }
    }

    > .other {
      @include fbx-ai-center-jc-between;
      width: 100%;
      padding-top: 1rem;
      border-top: 1px solid var(--gray);
      margin-top: auto;

      .date-status {
        font-size: 0.8rem;
        font-weight: 600;
        border-bottom: 1px solid var(--gray);
      }

      .edit {
        button {
          background-color: inherit;
          cursor: pointer;
          border: 0;
          padding: 0;
        }
        svg {
          fill: none;
          color: var(--text-gray);
          transition: all 0.3s;
          &:hover {
            color: var(--black);
          }
        }
        .uk-dropdown {
          margin-top: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          background-color: var(--inner-background-color);
          border: 1px solid var(--gray);
          min-width: 120px;
          ul {
            padding-right: 0;
            list-style-type: none;
            li {
              border-bottom: 1px solid var(--gray);
              padding-bottom: 0.5rem;
              padding-top: 0.5rem;
              a {
                font-size: 0.8rem;
                color: var(--black);
              }
            }
            li:last-child {
              border-bottom: 0;
            }
          }
        }
      }
    }
  }

  .yellow-box {
    border-right: 2px solid var(--main-color);

    > .title {
      span {
        color: var(--main-color);
      }
    }

    > .other {
      .date-status {
        border-color: var(--main-color);
        color: var(--main-color);
      }
    }
  }

  .blue-box {
    border-right: 2px solid var(--blue);

    > .title {
      span {
        color: var(--blue);
      }
    }

    > .other {
      .date-status {
        border-color: var(--blue);
        color: var(--blue);
      }
    }
  }

  .red-box {
    border-right: 2px solid var(--red);

    > .title {
      span {
        color: var(--red);
      }
    }

    > .other {
      .date-status {
        border-color: var(--red);
        color: var(--red);
      }
    }
  }

  .empty-box {
    min-height: 10rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-bottom: 1.5rem;
    width: calc(24.8% - 3rem);
    padding: 1rem;
    border-radius: 8px;
    border: 1px dashed var(--gray);
    @include fbx-ai-center-jc-center;
    svg {
      color: var(--text-gray);
    }
  }
}

@include mobile-device {
  .duty__items {
    margin-left: 0;
    margin-right: 0;

    .box {
      margin-left: 0;
      margin-right: 0;
      width: calc(100% - 2rem);
      > .title {
        h3 {
          font-size: 0.8rem;
        }
        span {
          font-size: 0.75rem;
        }
      }

      > .text {
        font-size: 0.75rem;
      }

      > .other {
        .date-status {
          font-size: 0.75rem;
        }

        .edit {
          .uk-dropdown {
            padding: 0.25rem 0.75rem;
            ul {
              li {
                a {
                  font-size: 0.75rem;
                }
              }
            }
          }
        }
      }
    }

    .empty-box {
      min-height: 7rem;
      margin-left: 0;
      margin-right: 0;
      width: calc(100% - 2rem);
    }
  }
}

@include tablet-device {
  .duty__items {
    .box {
      width: calc(33% - 3rem);
      > .title {
        h3 {
          font-size: 0.8rem;
        }
        span {
          font-size: 0.75rem;
        }
      }

      > .text {
        font-size: 0.75rem;
      }

      > .other {
        .date-status {
          font-size: 0.75rem;
        }

        .edit {
          .uk-dropdown {
            padding: 0.25rem 0.75rem;
            ul {
              li {
                a {
                  font-size: 0.75rem;
                }
              }
            }
          }
        }
      }
    }

    .empty-box {
      min-height: 7rem;
      width: calc(33% - 3rem);
    }
  }
}

@include large-device {
  .duty__items {
    .box {
      width: calc(33% - 3rem);
    }
    .empty-box {
      width: calc(33% - 3rem);
    }
  }
}
</style>
