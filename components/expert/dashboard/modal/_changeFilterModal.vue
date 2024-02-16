<template>
  <div id="change-filter-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <button
          class="uk-modal-close-default"
          type="button"
          uk-close
          style="right: unset; left: 10px"
        ></button>
        <h3>مدیریت فیلترها</h3>
      </div>
      <div class="add__filter">
        <input type="text" v-model="title" placeholder="فیلتر جدید ..." />
        <a @click="saveCategory">افزودن</a>
      </div>
      <div class="text">
        <div v-for="(category, index) in categories" :key="index">
          <span>{{ category.title }}</span>
          <a @click="deleteCategory(category.id)" uk-close></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categories"],
  data() {
    return {
      title: null,
    };
  },
  methods: {
    async saveCategory() {
      this.errors = [];
      const saveCategory = await this.$axios.post("v1/expert/saveCategory", {
        title: this.title,
      });
      if (saveCategory.data.status === 1) {
        this.$toasted.success(saveCategory.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/getAllUser");
      } else if (saveCategory.data.status === 422) {
        this.errors = saveCategory.data.errors;
        this.$toasted.info(saveCategory.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(saveCategory.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
    },
    async deleteCategory(id) {
      this.errors = [];
      const deleteCategory = await this.$axios.post(
        "v1/expert/deleteCategory",
        { id: id }
      );
      if (deleteCategory.data.status === 1) {
        this.$toasted.success(deleteCategory.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/getAllUser");
      } else if (deleteCategory.data.status === 422) {
        this.errors = deleteCategory.data.errors;
        this.$toasted.info(deleteCategory.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(deleteCategory.data.msg, {
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

#change-filter-modal {
  .uk-modal-body {
    padding: 1.5rem;
    border-radius: 8px;
    background-color: var(--white);
    .title {
      margin-bottom: 1.5rem;
      h3 {
        font-size: 1rem;
        color: var(--black);
        font-weight: 800;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--gray);
      }
    }
    .add__filter {
      border-radius: 5px;
      padding: 0.75rem;
      border: 1px dashed var(--gray);
      margin-bottom: 1.5rem;
      width: calc(32.5% - 2rem);
      @include fbx-ai-start-jc-between;
      input {
        background-color: var(--white);
        width: 60%;
        border: 0;
        font-size: 0.8rem;
      }
      input::placeholder {
        font-size: 0.8rem;
      }
      input:focus {
        outline: 0;
      }
      a {
        font-size: 0.8rem;
        color: var(--main-color);
        border-bottom: 1px solid var(--main-color);
      }
    }
    .text {
      @include fbx-ai-start-jc-start;
      flex-wrap: wrap;
      margin-left: -0.5rem;
      margin-right: -0.5rem;
      > div {
        @include fbx-ai-center-jc-between;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        width: calc(32.9% - 2.5rem);
        border: 1px solid var(--gray);
        border-radius: 5px;
        padding: 0.75rem;
        margin-bottom: 1rem;
        span {
          font-size: 0.8rem;
          color: var(--black);
          font-weight: 500;
        }
        a {
          transition: all 0.3s;
          &:hover {
            color: var(--red);
          }
        }
      }
    }
  }
}

@include mobile-device {
  #change-filter-modal {
    .uk-modal-body {
      padding: 1rem;
      .title {
        margin-bottom: 1rem;
        h3 {
          font-size: 0.9rem;
        }
      }
      .add__filter {
        padding: 0.5rem;
        margin-bottom: 1rem;
        width: calc(80% - 2rem);
        input {
          width: 60%;
          font-size: 0.75rem;
        }
        input::placeholder {
          font-size: 0.75rem;
        }
        a {
          font-size: 0.75rem;
        }
      }
      .text {
        > div {
          width: calc(49.5% - 2.5rem);
          padding: 0.5rem;
          span {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
}
</style>
