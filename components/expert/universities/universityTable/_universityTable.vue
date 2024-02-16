<template>
  <div class="university__table">
    <div class="uk-overflow-auto">
      <table class="uk-table expert-table latin-table">
        <thead>
        <tr>
          <th class="align-right">#</th>
          <th class="align-right">نام دانشگاه</th>
          <th class="align-right">شهر</th>
          <th class="align-right">ایالت</th>
          <th class="align-right">جغرافیا</th>
          <th class="align-right">جمعیت</th>
          <th class="align-right">هزینه زندگی</th>
          <th class="align-right">انتخاب</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(university, index) in allUniversities" :key="index">
          <td class="counter">{{ index + 1 }}</td>
          <td class="university-name uk-width-1-7 align-right">{{ university.title }}</td>
          <td class="subject uk-width-1-7 align-right">{{ university.city }}</td>
          <td class="subject uk-width-1-6 align-right">{{ university.state }}</td>
          <td class="subject uk-width-1-6 align-right">{{ university.geographicalLocation }}</td>
          <td class="subject uk-width-1-6 align-right">{{ university.cityCrowd | numberFilter }}</td>
          <td class="subject uk-width-1-6 align-right">{{ university.costLiving }}</td>
          <td class="subject uk-width-1-6 align-right">
            <input
                class="uk-checkbox"
                type="checkbox"
                @change="addUniversity(university.id)"
            />
          </td>
        </tr>
        </tbody>
      </table>
      <div class="table-filter">
        <form>
          <input
              type="number"
              id="choose"
              :value="count"
              @keyup="changeCount($event.target.value)"
              @change="updateMaxUniversityCount"
          />
          <label for="choose">حداکثر مجاز انتخاب دانشگاه</label>
        </form>
        <div class="clear-submit">
          <a
              class="clear"
              href="#delete-university-modal"
              uk-toggle
              v-if="deletingAll === false && userUniversities.length > 0"
          >
            پاک کردن لیست
          </a>
          <a class="clear" v-if="deletingAll === true">چند لحظه صبر کنید</a>
          <a
              class="submit"
              @click="submitUniversities"
              v-if="submiting === false"
          >
            افزودن دانشگاه
          </a>
          <a class="submit" v-else>چند لحظه صبر کنید</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deletingAll: false,
      submiting: false,
      universities: [],
    };
  },
  computed: {
    userUniversities() {
      return this.$store.getters["expert/userUniversities"];
    },
    count() {
      return this.$store.getters["expert/count"];
    },
    allUniversities() {
      return this.$store.getters["expert/allUniversities"];
    },
    id() {
      return this.$store.getters["expert/userId"];
    },
  },
  methods: {
    changeCount(val) {
      this.$store.commit("expert/SET_Count", val);
    },
    addUniversity(id) {
      if (!this.universities.includes(id)) this.universities.push(id);
      else this.universities.splice(this.universities.indexOf(id), 1);
    },
    async submitUniversities() {
      this.submiting = true;
      const submitUniversities = await this.$axios.post(
          "v1/expert/submitUniversities/" + this.id,
          {universities: this.universities}
      );
      if (submitUniversities.data.status === 1) {
        this.$toasted.success(submitUniversities.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/getUniversities", this.id);
        this.universities = [];
        let universities = document.getElementsByClassName("uk-checkbox");
        for (var i = 0; i < universities.length; i++) {
          universities[i].checked = false;
        }
      } else if (submitUniversities.data.status === 422) {
        this.errors = submitUniversities.data.errors;
        this.$toasted.info(submitUniversities.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(submitUniversities.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.submiting = false;
    },
    async updateMaxUniversityCount() {
      const updateMaxUniversityCount = await this.$axios.post(
          "v1/expert/updateMaxUniversityCount",
          {id: this.id, count: this.count}
      );
      if (updateMaxUniversityCount.data.status === 1) {
        this.$toasted.success(updateMaxUniversityCount.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else if (updateMaxUniversityCount.data.status === 422) {
        this.$toasted.info(updateMaxUniversityCount.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(updateMaxUniversityCount.data.msg, {
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

.university__table {
  background-color: var(--white);
  border-radius: 8px;
  @include boxshadow();
  padding: 1.5rem;
  margin-bottom: 5rem;

  div.uk-overflow-auto {
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;

    tbody {
      display: block;
      width: 100%;
      overflow: auto;
      height: 500px;

      &::-webkit-scrollbar {
        width: 0px;
      }

      /* Track */
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: var(--main-color);
        border-radius: 15px;
      }
    }

    thead tr {
      display: block;

      th {
        width: calc(97% * 1 / 6.001);

        &:nth-child(1) {
          width: 4.5%;
        }

        &:last-child {
          width: 4.5%;
        }
      }
    }
  }

  table {
    th.check,
    td.check {
      text-align: right;

      .uk-checkbox:checked {
        background-image: url("@/assets/expert/images/icons/white-check.svg");
        background-size: 80%;
      }
    }
  }

  .table-filter {
    @include fbx-ai-center-jc-between;

    form {
      width: 40%;

      input {
        background-color: inherit;
        text-align: center;
        direction: ltr;
        width: 10%;
        padding: 0.5rem;
        border: 1px solid var(--gray);
        font-size: 1rem;
        color: var(--black);
        border-radius: 5px;
        transition: all 0.3s;
      }

      input:focus {
        border-color: var(--main-color);
        outline: 0;
      }

      label {
        font-size: 0.8rem;
        color: var(--black);
        margin-right: 0.5rem;
      }
    }

    .clear-submit {
      width: 48%;
      @include fbx-ai-center-jc-end;

      .clear {
        text-align: center;
        border-radius: 5px;
        border: 1px solid var(--gray);
        font-size: 0.8rem;
        color: var(--black);
        padding: 0.75rem 0;
        width: 35%;
        transition: all 0.3s;
        font-weight: 500;

        &:hover {
          background-color: var(--text-gray);
          color: var(--white);
        }
      }

      .submit {
        text-align: center;
        width: 35%;
        font-weight: 500;
        margin-right: 1rem;
        font-size: 0.8rem;
        color: var(--black);
        border: 1px solid var(--inner-background-color);
        border-radius: 5px;
        background-color: var(--inner-background-color);
        padding: 0.75rem 0;
        transition: all 0.3s;

        &:hover {
          color: #2b2827;
          background-color: var(--light-main-color);
        }
      }
    }
  }
}

@include mobile-device {
  .university__table {
    direction: ltr;
    padding: 0.5rem;
    margin-bottom: 2rem;

    .table-filter {
      direction: rtl;
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;

      form {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;

        input {
          padding: 0.25rem;
          font-size: 0.9rem;
        }

        label {
          font-size: 0.75rem;
        }
      }

      .clear-submit {
        justify-content: flex-start;
        width: 100%;

        .clear {
          font-size: 0.75rem;
          padding: 0.5rem 0;
          width: 40%;
        }

        .submit {
          width: 40%;
          font-size: 0.75rem;
          padding: 0.5rem 0;
        }
      }
    }
  }
}

@include tablet-device {
  .university__table {
    direction: ltr;
    padding: 0.5rem;
    margin-bottom: 2rem;

    .table-filter {
      direction: rtl;
      @include fbx-ai-center-jc-between;
      flex-wrap: wrap;

      form {
        width: 50%;
        margin-top: 1rem;
        margin-bottom: 1rem;

        input {
          padding: 0.25rem;
          font-size: 0.9rem;
        }

        label {
          font-size: 0.75rem;
        }
      }

      .clear-submit {
        width: 50%;

        .clear {
          font-size: 0.75rem;
          padding: 0.5rem 0;
          width: 40%;
        }

        .submit {
          width: 40%;
          font-size: 0.75rem;
          padding: 0.5rem 0;
        }
      }
    }
  }
}
</style>
