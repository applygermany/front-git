<template>
  <div class="page-title">
    <div class="return-back">
      <nuxt-link to="/expert/telSupports">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uk-svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </nuxt-link>
      <h1>تاریخچه جلسات مشاوره</h1>
    </div>
    <p v-if="form.day !== 0">
      گزارش زیر از تاریخ
      <span>{{
        telSupportsHistory.startDate.split("-").reverse().join("-")
      }}</span>
      تا امروز
      <span>{{
        telSupportsHistory.endDate.split("-").reverse().join("-")
      }}</span>
      می‌باشد
    </p>
    <p v-else>
      گزارش زیر تا تاریخ
      <span>{{
        telSupportsHistory.endDate.split("-").reverse().join("-")
      }}</span>
      می‌باشد
    </p>
    <div class="sort-search">
      <div class="search">
        <form @submit.prevent="getHistoryTel">
          <input
            type="search"
            placeholder="جستجو"
            v-model="form.name"
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
      <div class="sort" style="justify-content: flex-end">
        <!-- <div class="custom-select" v-if="$auth.user.level === 3">
          <select v-model="form.type" @change="getHistoryTel">
            <option value="0">همه کاربران</option>
            <option value="1">کاربران ویژه</option>
            <option value="2">کاربران عادی</option>
          </select>
        </div> -->
        <!-- <div class="custom-select">
          <select v-model="form.day" @change="getHistoryTel">
            <option value="7">هفته گذشته</option>
            <option value="30">ماه گذشته</option>
            <option value="90">سه ماه گذشته</option>
            <option value="180">شش ماه گذشته</option>
            <option value="360">یکسال گذشته</option>
            <option value="0">تا به امروز</option>
          </select>
        </div> -->
        <div class="custom-select" v-click-outside-element="outSide">
          <div class="select-selected" @click="selectShow = !selectShow">
            <p>{{ selectTitle }}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            style="transition: 0.3s all; fill: var(--black)"
              :class="{ rotate: selectShow }"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
              />
            </svg>
          </div>
          <transition name="fade">
            <div class="select-items" v-show="selectShow">
              <div
                style="text-align: right"
                @click="changeSelect(7, 'هفته گذشته')"
              >
                هفته گذشته
              </div>
              <div
                style="text-align: right"
                @click="changeSelect(30, 'ماه گذشته')"
              >
                ماه گذشته
              </div>
              <div
                style="text-align: right"
                @click="changeSelect(90, 'سه ماه گذشته')"
              >
                سه ماه گذشته
              </div>
              <div
                style="text-align: right"
                @click="changeSelect(180, 'شش ماه گذشته')"
              >
                شش ماه گذشته
              </div>
              <div
                style="text-align: right"
                @click="changeSelect(360, 'یکسال گذشته')"
              >
                یکسال گذشته
              </div>
              <div
                style="text-align: right"
                @click="changeSelect(0, 'تا به امروز')"
              >
                تا به امروز
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectShow: false,
      selectTitle: "هفته گذشته",
      form: {
        name: null,
        day: 7,
        type: 0,
      },
    };
  },
  computed: {
    telSupportsHistory() {
      return this.$store.getters["telSupports/telSupportsHistory"];
    },
  },
  methods: {
    changeSelect(val, name) {
      this.form.day = val;
      this.selectTitle = name;
      this.selectShow = false;
      this.getHistoryTel();
    },
    outSide(){
      this.selectShow = false;
    },
    async getHistoryTel() {
      this.errors = [];
      let getHistoryTel = await this.$axios.post(
        "v1/expert/getHistoryTel",
        this.form
      );
      if (getHistoryTel.data.status === 1) {
        this.$store.commit("telSupports/SET_TelSupportsHistory", {
          telSupports: getHistoryTel.data.telSupports,
          startDate: getHistoryTel.data.startDate,
          endDate: getHistoryTel.data.endDate,
        });
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
