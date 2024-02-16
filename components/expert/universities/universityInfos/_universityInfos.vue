<template>
  <div class="university-infos">
    <div
      class="box"
      v-for="(university, index) in userUniversities"
      :key="index"
    >
      <div class="box__top">
        <div class="img">
          <img :src="university.image" :alt="university.university.title" />
        </div>
        <div class="title-major-probability">
          <div class="title">
            <h3 class="latin-font">{{ university.university.title }}</h3>
            <div class="uk-inline" style="margin-right: 0.5rem">
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
                  <li @click="deleteUserUniversity(university.id)">
                    <a> حذف کردن </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="major">
            <label :for="`field` + university.id">رشته دانشگاهی</label>
            <input
              :id="`field` + university.id"
              class="latin-font"
              :value="university.field"
              @keyup="updateFieldUserUniversity(index, $event.target.value)"
              :refs="`field` + university.id"
              placeholder="For Example: Tourism Development"
            />
          </div>
          <div class="probability">
            <span>احتمال اخذ پذیرش</span>
            <div>
              <a
                :class="{ active: university.chanceGetting === 1 }"
                @click="updateChanceUserUniversity(index, 1)"
              >
                1
              </a>
              <a
                :class="{ active: university.chanceGetting === 2 }"
                @click="updateChanceUserUniversity(index, 2)"
              >
                2
              </a>
              <a
                :class="{ active: university.chanceGetting === 3 }"
                @click="updateChanceUserUniversity(index, 3)"
              >
                3
              </a>
              <a
                :class="{ active: university.chanceGetting === 4 }"
                @click="updateChanceUserUniversity(index, 4)"
              >
                4
              </a>
              <a
                :class="{ active: university.chanceGetting === 5 }"
                @click="updateChanceUserUniversity(index, 5)"
              >
                5
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="box__bottom">
        <textarea
          :id="`desc` + university.id"
          rows="4"
          placeholder="نوشتن توضیحات"
          maxlength="255"
          :value="university.description"
          @keyup="updateDescUserUniversity(index, $event.target.value)"
        >
        </textarea>
        <div class="other">
          <div>
            <input
              type="checkbox"
              class="uk-checkbox"
              :id="`offer` + university.id"
              :refs="`offer` + university.id"
              :checked="university.offer === 1"
              @change="updateOfferUserUniversity(index, university.offer)"
            />
            <label :for="`offer` + university.id">پیشنهاد کارشناس</label>
          </div>
          <div>
            <input
              :id="`link` + university.id"
              class="latin-font link"
              :value="university.link"
              @keyup="updateLinkUserUniversity(index, $event.target.value)"
              :refs="`link` + university.id"
              placeholder="link:"
            />
            <a class="edit" @click="updateUserUniversity(university)">
              آپدیت
            </a>
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
      updating: false,
    };
  },
  computed: {
    userUniversities() {
      return this.$store.getters["expert/userUniversities"];
    },
    id() {
      return this.$store.getters["expert/userId"];
    },
  },
  methods: {
    updateFieldUserUniversity(index, value) {
      this.$store.commit("expert/updateFieldUserUniversity", {
        index,
        value,
      });
    },
    updateOfferUserUniversity(index, offer) {
      let value;
      offer == 1 ? (value = 0) : (value = 1);
      this.$store.commit("expert/updateOfferUserUniversity", {
        index,
        value,
      });
    },
    updateDescUserUniversity(index, value) {
      this.$store.commit("expert/updateDescUserUniversity", {
        index,
        value,
      });
    },
    updateChanceUserUniversity(index, number) {
      this.$store.commit("expert/updateChanceUserUniversity", {
        index,
        value: number,
      });
    },
    updateLinkUserUniversity(index, value) {
      this.$store.commit("expert/updateLinkUserUniversity", {
        index,
        value,
      });
    },
    async updateUserUniversity(userUniversity) {
      this.updating = true;
      const updateUniversity = await this.$axios.put(
        "v1/expert/updateUniversity/" + userUniversity.id,
        {
          field: userUniversity.field,
          chanceGetting: userUniversity.chanceGetting,
          offer: userUniversity.offer,
          description: userUniversity.description,
          link: userUniversity.link,
        }
      );
      if (updateUniversity.data.status === 1) {
        this.$toasted.success(updateUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });

        this.$store.dispatch("expert/getUniversities", this.id);
      } else if (updateUniversity.data.status === 422) {
        this.errors = updateUniversity.data.errors;
        this.$toasted.info(updateUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(updateUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.updating = false;
    },
    async deleteUserUniversity(id) {
      let elements = document.getElementsByClassName('uk-dropdown');
      for (const element of elements) {
        element.classList.remove('uk-open')
      }
      const deleteUserUniversity = await this.$axios.delete(
        "v1/expert/deleteUserUniversity/" + id
      );
      if (deleteUserUniversity.data.status === 1) {
        this.$toasted.success(deleteUserUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });

        this.$store.dispatch("expert/getUniversities", this.id);
      } else if (deleteUserUniversity.data.status === 422) {
        this.errors = deleteUserUniversity.data.errors;
        this.$toasted.info(deleteUserUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(deleteUserUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
    },
    async cloneUniversity(id) {
      const cloneUniversity = await this.$axios.post(
        "v1/expert/cloneUniversity/" + id
      );
      if (cloneUniversity.data.status === 1) {
        this.$toasted.success(cloneUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        const userUniversities = await this.$axios.get(
          "v1/expert/getUniversities/" + this.id
        );
        this.userUniversities = userUniversities.data.universities;
      } else if (cloneUniversity.data.status === 422) {
        this.errors = cloneUniversity.data.errors;
        this.$toasted.info(cloneUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(cloneUniversity.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.university-infos {
  @include fbx-ai-start-jc-between;
  flex-wrap: wrap;
  .box {
    background-color: var(--white);
    padding: 0 1.5rem 1.5rem 1.5rem;
    border-radius: 8px;
    @include boxshadow();
    width: calc(48% - 2.5rem);
    margin-bottom: 2rem;
    &__top {
      @include fbx-ai-start-jc-between;
      border-bottom: 1px solid var(--gray);
      padding-bottom: 2rem;
      .img {
        width: 28%;
        align-self: stretch;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
        }
      }
      .title-major-probability {
        width: 68%;
        padding-top: 1.5rem;
        @include fbx-column-ai-start-jc-start;
        .title {
          @include fbx-ai-start-jc-start;
          align-self: flex-end;
          margin-bottom: 2rem;
          text-align: left;
          h3 {
            color: var(--black);
            font-weight: bold;
            font-size: 1.3rem;
            border-bottom: 1px solid var(--gray);
            padding-bottom: 0.5rem;
          }
          button {
            background-color: inherit;
            cursor: pointer;
            border: 0;
            padding: 0;
            svg {
              transition: all 0.3s;
              width: 2rem;
              fill: none;
              color: var(--text-gray);
            }
            &:hover {
              svg {
                color: var(--black);
              }
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
                  transition: all 0.3s;
                  &:hover {
                    color: var(--red);
                  }
                }
              }
              li:last-child {
                border-bottom: 0;
              }
            }
          }
        }
        .major {
          align-self: flex-end;
          width: 100%;
          @include fbx-ai-center-jc-between;
          margin-bottom: 2rem;
          label {
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--black);
            line-height: 1.5rem;
            width: 20%;
          }
          input {
            color: #000;
            background-color: inherit;
            //direction: ltr;
            width: 70%;
            font-size: 0.8rem;
            padding: 0.75rem;
            border-radius: 5px;
            border: 1px solid var(--gray);
            transition: all 0.3s;
            &:focus {
              border-color: var(--main-color);
              outline: 0;
            }
            &::placeholder {
              font-size: 0.8rem;
              color: #acac9d;
            }
          }
        }
        .probability {
          align-self: flex-end;
          width: 100%;
          @include fbx-ai-center-jc-between;
          span {
            font-size: 0.8rem;
            font-weight: 500;
            color: var(--black);
            line-height: 1.5rem;
            width: 20%;
          }
          > div {
            @include fbx-ai-start-jc-start;
            direction: ltr;
            a {
              margin-right: 0.5rem;
              @include fbx-ai-center-jc-center;
              width: 2rem;
              height: 2rem;
              border-radius: 50%;
              border: 1px solid var(--gray);
              font-size: 0.9rem;
              color: var(--black);
              transition: all 0.3s;
              &.active {
                background-color: var(--main-color);
                color: var(--white);
              }
              &:not(.active):hover {
                background-color: var(--inner-background-color);
              }
            }
          }
        }
      }
    }
    &__bottom {
      margin-top: 2rem;
      textarea {
        background-color: inherit;
        box-sizing: border-box;
        width: 100%;
        border: 0;
        font-size: 0.8rem;
        color: var(--black);
        transition: all 0.3s;
        &::placeholder {
          font-size: 0.8rem;
          color: var(--text-gray);
        }
        &:focus {
          outline: 0;
        }
      }
      .other {
        margin-top: 1.5rem;
        width: 100%;
        @include fbx-ai-center-jc-between;
        label {
          font-size: 0.8rem;
          color: var(--black);
          font-weight: 500;
          margin-right: 0.25rem;
        }
        input.uk-checkbox {
          border-radius: 2px;
        }
        .uk-checkbox:checked {
          background-image: url("@/assets/expert/images/icons/white-check.svg");
          background-size: 80%;
        }
        div:last-child {
          @include fbx-ai-start-jc-start;
          justify-content: flex-end;
          input.link {
            background-color: inherit;
            width: 50%;
            direction: ltr;
            padding: 0.5rem;
            font-size: 0.8rem;
            transition: all 0.3s;
            color: var(--main-color);
            border-radius: 5px;
            border: 1px solid var(--gray);
            &::placeholder {
              color: #acac9d;
            }
            &:focus {
              border-color: var(--main-color);
              outline: 0;
            }
          }
          .edit {
            border: 2px solid var(--inner-background-color);
            margin-right: 0.5rem;
            background-color: var(--inner-background-color);
            padding: 0.5rem 2.5rem;
            font-size: 0.8rem;
            color: var(--black);
            border-radius: 5px;
            transition: all 0.3s;
            &:hover {
              border-color: var(--light-main-color);
              background-color: var(--light-main-color);
              color: #2b2827;
            }
          }
        }
      }
    }
  }
}

@include mobile-device {
  .university-infos {
    .box {
      padding: 0 1rem 1rem 1rem;
      width: calc(100% - 1.5rem);
      margin-bottom: 1.5rem;
      &__top {
        @include fbx-column-ai-start-jc-start;
        padding-bottom: 1rem;
        .img {
          width: 100%;
        }
        .title-major-probability {
          width: 100%;
          padding-top: 1rem;
          .title {
            margin-bottom: 1rem;
            h3 {
              font-size: 1rem;
            }
            .uk-dropdown {
              ul {
                li {
                  a {
                    font-size: 0.75rem;
                  }
                }
              }
            }
          }
          .major {
            margin-bottom: 1rem;
            label {
              font-size: 0.75rem;
            }
            input {
              font-size: 0.75rem;
              &::placeholder {
                font-size: 0.75rem;
              }
            }
          }
          .probability {
            span {
              font-size: 0.75rem;
            }
          }
        }
      }
      &__bottom {
        margin-top: 1rem;
        textarea {
          font-size: 0.75rem;
          &::placeholder {
            font-size: 0.75rem;
          }
        }
        .other {
          label {
            font-size: 0.75rem;
          }
          div:last-child {
            input.link {
              font-size: 0.75rem;
            }
            .edit {
              padding: 0.5rem 1rem;
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}

@include tablet-device {
  .university-infos {
    .box {
      padding: 0 1rem 1rem 1rem;
      width: calc(48% - 1.5rem);
      margin-bottom: 1.5rem;
      &__top {
        @include fbx-column-ai-start-jc-start;
        padding-bottom: 1rem;
        .img {
          width: 100%;
        }
        .title-major-probability {
          width: 100%;
          padding-top: 1rem;
          .title {
            margin-bottom: 1rem;
            h3 {
              font-size: 1rem;
            }
            .uk-dropdown {
              ul {
                li {
                  a {
                    font-size: 0.75rem;
                  }
                }
              }
            }
          }
          .major {
            margin-bottom: 1rem;
            label {
              font-size: 0.75rem;
            }
            input {
              font-size: 0.75rem;
              &::placeholder {
                font-size: 0.75rem;
              }
            }
          }
          .probability {
            span {
              font-size: 0.75rem;
            }
          }
        }
      }
      &__bottom {
        margin-top: 1rem;
        textarea {
          font-size: 0.75rem;
          &::placeholder {
            font-size: 0.75rem;
          }
        }
        .other {
          label {
            font-size: 0.75rem;
          }
          div:last-child {
            input.link {
              font-size: 0.75rem;
            }
            .edit {
              padding: 0.5rem 1rem;
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }
}
</style>
