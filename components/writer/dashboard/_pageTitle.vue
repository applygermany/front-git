<template>
  <div class="page-title page-title-userList">
    <div class="return-back">
      <h1>لیست سفارشات</h1>
    </div>
    <p v-if="$auth.user.level == 6">
      شما در اپلای جرمنی ، نگارنده <span>{{ usersCount }}</span> انگیزه نامه / رزومه
      هستید
    </p>
    <div class="sort-search">
      <div class="search">
        <form @submit.prevent="search">
          <input
              type="search"
              :value="filterForm.name"
              placeholder="جستجو"
              @keyup="searchInput($event.target.value)"
          />
          <span>جستجو : </span>
          <button>
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
      <div class="sort">
        <div class="custom-select" v-click-outside-element="outSide">
          <div class="select-selected" @click="selectShow = !selectShow">
            <p v-if="filterForm.category == 0">فیلتر بر اساس</p>
            <p v-else>{{ showCategory.title }}</p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                style="transition: 0.3s all; fill: var(--black)"
                :class="{ rotate: selectShow }"
            >
              <path fill="none" d="M0 0h24v24H0z"/>
              <path
                  d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
              />
            </svg>
          </div>
          <transition name="fade">
            <div class="select-items" v-show="selectShow">
              <div @click="changeSelect(0)">فیلتر بر اساس</div>
              <div
                  style="text-align: right"
                  v-for="(category, index) in categories"
                  :key="index"
                  @click="changeSelect(category.id)"
              >
                {{ category.title }}
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

    <ChangeFilterModal :categories="categories"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectShow: false,
      timer: null,
    };
  },
  computed: {
    usersCount() {
      return this.$store.getters["writer/ordersCount"];
    },
    categories() {
      return this.$store.getters["writer/categories"];
    },
    filterForm() {
      return this.$store.getters["writer/filterForm"];
    },
    showCategory() {
      return this.categories.filter(
          (item) => item.id == this.filterForm.category
      )[0];
    },
  },
  methods: {
    outSide() {
      this.selectShow = false;
    },
    searchInput(val) {
      this.$store.commit("writer/changeFilterFormName", val);
      // clearTimeout(this.timer);

      // this.timer = setTimeout(() => {
      //   this.search();
      // }, 3000);
    },
    changeSelect(val) {
      this.$store.commit("writer/changeFilterFormCategory", val);
      this.search();
      this.selectShow = false;
    },
    async search() {
      const getAllOrders = await this.$axios.post(`v1/writer/dashboard`, {
        ...this.filterForm,
        take: 10,
      });
      this.$store.commit("writer/SET_Orders", getAllOrders.data.orders);
      this.$store.commit(
          "writer/SET_OrdersCountLimit",
          getAllOrders.data.ordersCount
      );
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/expert/scss/_mixins.scss";

.custom-select {
  width: 50%;
  position: relative;
  margin-right: 250px;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  width: 85%;
  border: 1px solid #e4e3e1;
  border: 1px solid var(--gray);
  padding-right: 1rem;
  padding-left: 1rem;
  position: absolute;
  background-color: #fff;
  background-color: var(--white);
  margin-top: 0.5rem;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
}

.select-items div {
  cursor: pointer;
  color: var(--black);
  font-size: 0.8rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray);

  &:last-child {
    border-bottom: 0;
  }
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.rotate {
  transform: rotateZ(180deg);
}

@include mobile-device {
  .custom-select {
    margin-right: 0;
  }
}
</style>
