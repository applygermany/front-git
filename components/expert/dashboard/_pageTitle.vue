<template>
    <div class="page-title page-title-userList">
        <div class="return-back">
            <h1>لیست کاربران</h1>
        </div>
        <p v-if="$auth.user.level == 3">
            شما در اپلای جرمنی ، کارشناس ارشد <span>{{ usersCount }}</span> کاربر ویژه
            هستید
        </p>
        <p v-if="$auth.user.level == 5">
            شما در اپلای جرمنی ، کارشناس <span>{{ usersCount }}</span> کاربر ویژه
            هستید
        </p>
        <p v-else-if="$auth.user.level == 2">
            شما در اپلای جرمنی ، پشتیبان <span>{{ usersCount }}</span> کاربر ویژه
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
                  <button v-if="!loadingSearch">
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
                  <button v-else>
                    <div uk-spinner></div>
                  </button>
                </form>
            </div>
            <div class="sort">
                <!--                <div class="custom-select" v-click-outside-element="outSide">-->
                <!--                    <div class="select-selected" @click="selectShow = !selectShow">-->
                <!--                        <p v-if="filterForm.category === 0">فیلتر بر اساس</p>-->
                <!--                        <p v-else-if="filterForm.category === -1">قرارداد</p>-->
                <!--                        <p v-else-if="filterForm.category === -2">کاربران ویژه</p>-->
                <!--                        <p v-else-if="filterForm.category === -3">کاربران عادی</p>-->
                <!--                        <p v-else>{{ showCategory.title }}</p>-->
                <!--                        <svg-->
                <!--                                xmlns="http://www.w3.org/2000/svg"-->
                <!--                                viewBox="0 0 24 24"-->
                <!--                                width="24"-->
                <!--                                height="24"-->
                <!--                                style="transition: 0.3s all; fill: var(&#45;&#45;black)"-->
                <!--                                :class="{ rotate: selectShow }"-->
                <!--                        >-->
                <!--                            <path fill="none" d="M0 0h24v24H0z"/>-->
                <!--                            <path-->
                <!--                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"-->
                <!--                            />-->
                <!--                        </svg>-->
                <!--                    </div>-->
                <!--                    <transition name="fade">-->
                <!--                        <div class="select-items" v-show="selectShow">-->
                <!--                            <div @click="changeSelect(0)">فیلتر بر اساس</div>-->
                <!--                            <div v-if="$auth.user.level === 3" @click="changeSelect(-1)">قرارداد</div>-->
                <!--                            <div v-if="$auth.user.level === 3" @click="changeSelect(-2)">کاربران ویژه</div>-->
                <!--                            <div v-if="$auth.user.level === 3" @click="changeSelect(-3)">کاربران عادی</div>-->
                <!--                            <div-->
                <!--                                    style="text-align: right"-->
                <!--                                    v-for="(category, index) in categories"-->
                <!--                                    :key="index"-->
                <!--                                    @click="changeSelect(category.id)"-->
                <!--                            >-->
                <!--                                {{ category.title }}-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                    </transition>-->
                <!--                </div>-->

                <multiselect
                        v-model="selectedValues"
                        :options="options"
                        track-by="name"
                        label="name"
                        @select="changeSelect"
                        @click="changeSelect"
                        @close="changeSelect"
                        @remove="changeSelect"
                        :selected-label="'انتخاب شده'"
                        deselect-label=""
                        class="multiselect-class"
                        placeholder="فیلتر بر اساس"
                        multiple="multiple"/>

                    <a href="#change-filter-modal" class="change-filter" uk-toggle>
                        <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                class="uk-svg"
                        >
                            <path
                                    d="M13.1191 5.61336C13.0508 5.11856 12.6279 4.75 12.1285 4.75H11.8715C11.3721 4.75 10.9492 5.11856 10.8809 5.61336L10.7938 6.24511C10.7382 6.64815 10.4403 6.96897 10.0622 7.11922C10.006 7.14156 9.95021 7.16484 9.89497 7.18905C9.52217 7.3524 9.08438 7.3384 8.75876 7.09419L8.45119 6.86351C8.05307 6.56492 7.49597 6.60451 7.14408 6.9564L6.95641 7.14408C6.60452 7.49597 6.56492 8.05306 6.86351 8.45118L7.09419 8.75876C7.33841 9.08437 7.3524 9.52216 7.18905 9.89497C7.16484 9.95021 7.14156 10.006 7.11922 10.0622C6.96897 10.4403 6.64815 10.7382 6.24511 10.7938L5.61336 10.8809C5.11856 10.9492 4.75 11.372 4.75 11.8715V12.1285C4.75 12.6279 5.11856 13.0508 5.61336 13.1191L6.24511 13.2062C6.64815 13.2618 6.96897 13.5597 7.11922 13.9378C7.14156 13.994 7.16484 14.0498 7.18905 14.105C7.3524 14.4778 7.3384 14.9156 7.09419 15.2412L6.86351 15.5488C6.56492 15.9469 6.60451 16.504 6.9564 16.8559L7.14408 17.0436C7.49597 17.3955 8.05306 17.4351 8.45118 17.1365L8.75876 16.9058C9.08437 16.6616 9.52216 16.6476 9.89496 16.811C9.95021 16.8352 10.006 16.8584 10.0622 16.8808C10.4403 17.031 10.7382 17.3519 10.7938 17.7549L10.8809 18.3866C10.9492 18.8814 11.3721 19.25 11.8715 19.25H12.1285C12.6279 19.25 13.0508 18.8814 13.1191 18.3866L13.2062 17.7549C13.2618 17.3519 13.5597 17.031 13.9378 16.8808C13.994 16.8584 14.0498 16.8352 14.105 16.8109C14.4778 16.6476 14.9156 16.6616 15.2412 16.9058L15.5488 17.1365C15.9469 17.4351 16.504 17.3955 16.8559 17.0436L17.0436 16.8559C17.3955 16.504 17.4351 15.9469 17.1365 15.5488L16.9058 15.2412C16.6616 14.9156 16.6476 14.4778 16.811 14.105C16.8352 14.0498 16.8584 13.994 16.8808 13.9378C17.031 13.5597 17.3519 13.2618 17.7549 13.2062L18.3866 13.1191C18.8814 13.0508 19.25 12.6279 19.25 12.1285V11.8715C19.25 11.3721 18.8814 10.9492 18.3866 10.8809L17.7549 10.7938C17.3519 10.7382 17.031 10.4403 16.8808 10.0622C16.8584 10.006 16.8352 9.95021 16.8109 9.89496C16.6476 9.52216 16.6616 9.08437 16.9058 8.75875L17.1365 8.4512C17.4351 8.05308 17.3955 7.49599 17.0436 7.1441L16.8559 6.95642C16.504 6.60453 15.9469 6.56494 15.5488 6.86353L15.2412 7.09419C14.9156 7.33841 14.4778 7.3524 14.105 7.18905C14.0498 7.16484 13.994 7.14156 13.9378 7.11922C13.5597 6.96897 13.2618 6.64815 13.2062 6.24511L13.1191 5.61336Z"
                                    stroke="#141414"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            ></path>
                            <path
                                    d="M13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12Z"
                                    stroke="#141414"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                            ></path>
                        </svg>
                    </a>
            </div>
        </div>

        <ChangeFilterModal :categories="categories"/>
    </div>
</template>

<script>
import ChangeFilterModal from "@/components/expert/dashboard/modal/_changeFilterModal.vue";
import Multiselect from 'vue-multiselect'

export default {
    components: {
        ChangeFilterModal,
        Multiselect
    },
    data() {
        return {
            loadingSearch: false,
            selectShow: false,
            timer: null,
            selected: null,
            options: [],
            selectedValues: []
        };
    },
    created() {
        if (this.$store.getters["expert/categories"] !== null) {
            this.options.push({
                name: 'قرارداد',
                value: 'contract'
            })
            this.options.push({
                name: 'کاربران ویژه',
                value: 'special'
            })
            this.options.push({
                name: 'کاربران پایه',
                value: 'base'
            })
            this.options.push({
                name: 'کاربران عادی',
                value: 'normal'
            })
            for (var i = 0; i < this.$store.getters["expert/categories"].length; i++) {
                this.options.push({
                    name: this.$store.getters["expert/categories"][i].title,
                    value: this.$store.getters["expert/categories"][i].id
                })
            }
        }
    },
    computed: {
        usersCount() {
            return this.$store.getters["expert/usersCount"];
        },
        categories() {
            return this.$store.getters["expert/categories"];
        },
        filterForm() {
            return this.$store.getters["expert/filterForm"];
        },
        showCategory() {
            return this.categories.filter(
                (item) => item.id === this.filterForm.category
            )[0];
        },
    },
    methods: {
        outSide() {
            this.selectShow = false;
        },
        searchInput(val) {
            this.$store.commit("expert/changeFilterFormName", val);
            // clearTimeout(this.timer);

            // this.timer = setTimeout(() => {
            //   this.search();
            // }, 3000);
        },
        changeSelect() {
            this.$store.commit("expert/changeFilterFormCategory", this.selectedValues);
            this.search();
            this.selectShow = false;
            console.log(this.selectedValues)
        },
      async search() {
        if(!this.loadingSearch){
          this.loadingSearch = true;
          const getAllUser = await this.$axios.post(`v1/expert/getAllUser`, {
            ...this.filterForm,
            take: 10,
          });
          this.$store.commit("expert/SET_Users", getAllUser.data.users);
          this.$store.commit(
              "expert/SET_UsersCountLimit",
              getAllUser.data.usersCount
          );
          this.loadingSearch = false;
        }

      },
    },
};
</script>


<style lang="scss" scoped>


.custom-select {
  width: 50%;
  position: relative;
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
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
