<template>
  <div class="page-title">
    <div class="return-back">
      <h1>پیشرفت پرونده</h1>
    </div>
    <div class="sort-search">
      <div class="search">
        <form @submit.prevent="">
          <input
            type="search"
            v-model="form.name"
            placeholder="جستجو"
            @keyup="search"
          />
          <button type="button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="uk-svg"
            >
              <path
                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <div class="sort w-100 uk-margin-small-top">
        <div class="w-30 custom-select">
          <select v-model="form.expert" @change="search">
            <option value="0">همه کارشناسان</option>
            <option
              v-for="(expert, index) in experts"
              :key="index"
              :value="expert.id"
            >
              {{ expert.firstname }} {{ expert.lastname }}
            </option>
          </select>
        </div>
        <div class="w-30 custom-select">
          <select v-model="form.category" @change="search">
            <option class="latin-font" value="0">ترم جاری</option>
            <option
              v-for="(category, index) in categories"
              :key="index"
              :value="category.id"
            >
              {{ category.title }}
            </option>
            <option class="latin-font" value="-1">همه</option>
          </select>
        </div>
        <div class="w-30 custom-select">
          <select v-model="form.order" @change="search">
            <option class="latin-font" :value="0">مرتب سازی بر اساس</option>
            <option class="latin-font" :value="1">دسته بندی</option>
            <option class="latin-font" :value="2">پیشرفت</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["experts",'categories'],
  data() {
    return {
      form: {
        name: null,
        expert: 0,
        category: 0,
        order: 0,
      },
    };
  },
  methods: {
    async search() {
      const getProcesses = await this.$axios.post(
        `v1/expert/getProcesses`,
        this.form
      );
      this.universitiesCount = 0;
      getProcesses.data.processes.forEach((element) => {
        if (element.universitiesCount > this.universitiesCount)
          this.universitiesCount = element.universitiesCount;
      });
      this.processes = getProcesses.data.processes;
      this.categories = getProcesses.data.categories;
      this.experts = getProcesses.data.experts;
    },
  },
};
</script>

<style></style>
