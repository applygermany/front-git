<template>
    <div class="page-title">
        <div class="return-back">
            <nuxt-link to="/expert/dashboard">
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
            <h1>انتخاب دانشگاه</h1>
        </div>
        <p>
            لطفا توجه داشته باشید بعد از انتخاب دانشگاه، حتما اطلاعات مربوط به رشته یا
            توضیحات یا ... وارد شود وگرنه تا ورود اطلاعات مورد نظر دانشگاه برای کاربر
            <span class="not-show">نمایش داده نمیشود</span>
        </p>
        <div class="sort-search">
            <div class="search">
                <form @submit.prevent="getUniversities">
                    <input type="search" placeholder="جستجو" v-model="form.title"/>
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
            <div class="sort w-100 uk-margin-small-top">
                <div class="w-20 custom-select" v-click-outside-element="outSideState">
                    <div class="select-selected" @click="selectState = !selectState">
                        <p v-if="form.state == null">همه ایالت ها</p>
                        <p v-else>{{ form.state }}</p>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                style="transition: 0.3s all; fill: var(--black)"
                                :class="{ rotate: selectState }"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                            />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div class="select-items" v-show="selectState">
                            <div @click="changeState(null)">همه ایالت ها</div>
                            <div
                                    style="text-align: right"
                                    v-for="(state, index) in states"
                                    :key="index"
                                    @click="changeState(state)"
                            >
                                {{ state }}
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="w-20 custom-select" v-click-outside-element="outSideCity">
                    <div class="select-selected" @click="selectCity = !selectCity">
                        <p v-if="form.city == null">همه شهر ها</p>
                        <p v-else>{{ form.city }}</p>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                style="transition: 0.3s all; fill: var(--black)"
                                :class="{ rotate: selectCity }"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                            />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div class="select-items" v-show="selectCity">
                            <div @click="changeCity(null)">همه شهر ها</div>
                            <div
                                    style="text-align: right"
                                    v-for="(city, index) in cities"
                                    :key="index"
                                    @click="changeCity(city)"
                            >
                                {{ city }}
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="w-20 custom-select" v-click-outside-element="outSideGeographicalLocation"
                >
                    <div
                            class="select-selected"
                            @click="selectGeographicalLocation = !selectGeographicalLocation"
                    >
                        <p v-if="form.geographicalLocation == null">
                            موقعیت های جغرافیایی
                        </p>
                        <p v-else>{{ form.geographicalLocation }}</p>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                style="transition: 0.3s all; fill: var(--black)"
                                :class="{ rotate: selectGeographicalLocation }"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                            />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div class="select-items" v-show="selectGeographicalLocation">
                            <div @click="changeGeographicalLocation(null)">
                                موقعیت های جغرافیایی
                            </div>
                            <div
                                    style="text-align: right"
                                    v-for="(geographicalLocation, index) in geographicalLocations"
                                    :key="index"
                                    @click="changeGeographicalLocation(geographicalLocation)"
                            >
                                {{ geographicalLocation }}
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="w-20 custom-select" v-click-outside-element="outChangeUser">
                    <div class="select-selected"
                         @click="selectUser = !selectUser">
                        <p v-if="selectedUser === null">
                            ایمپورت از
                        </p>
                        <div v-else>
                            <p>{{ selectedUser.firstname }} {{ selectedUser.lastname }} |
                                {{ selectedUser.mobile }}</p>
                            <a href="#clone-university-modal" uk-toggle
                               ref="start_modal_trigger"></a>
                        </div>

                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                style="transition: 0.3s all; fill: var(--black)"
                                :class="{ rotate: selectUser }"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"/>
                        </svg>
                    </div>
                    <transition name="fade">
                        <div class="select-items" v-show="selectUser">
                            <div @click="changeUser(null)">
                                ایمپورت از
                            </div>

                            <input type="text"
                                   id="search"
                                   :value="searchText"
                                   class="searchText"
                                   placeholder="جستجو کاربر"
                                   @keyup="updateUserList($event.target.value)"/>

                            <div style="text-align: right" v-for="(user, index) in searchUsers"
                                 :key="index"
                                 @click="changeUser(user)"
                            >
                                {{ user.firstname }} {{ user.lastname }} | {{ user.mobile }}
                            </div>
                        </div>
                    </transition>
                </div>
                <div class="w-20 custom-select" v-click-outside-element="outSideOrder">
                    <div class="select-selected" @click="selectOrder = !selectOrder">
                        <p v-if="form.order == '' || form.order == null">مرتب سازی بر اساس</p>
                        <p v-else-if="form.order == 'cityCrowd'">جمعیت</p>
                        <p v-else-if="form.order == 'costLiving'">هزینه های زندگی</p>
                        <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                                style="transition: 0.3s all; fill: var(--black)"
                                :class="{ rotate: selectOrder }"
                        >
                            <path fill="none" d="M0 0h24v24H0z"/>
                            <path
                                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                            />
                        </svg>
                    </div>
                    <transition name="fade">
                        <div class="select-items" v-show="selectOrder">
                            <div style="text-align: right" @click="changeOrder('')">
                                مرتب سازی بر اساس
                            </div>
                            <div style="text-align: right" @click="changeOrder('cityCrowd')">
                                جمعیت
                            </div>
                            <div style="text-align: right" @click="changeOrder('costLiving')">
                                هزینه های زندگی
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
            selectCity: false,
            selectState: false,
            selectGeographicalLocation: false,
            selectOrder: false,
            selectUser: false,
            form: {
                title: null,
                city: null,
                state: null,
                geographicalLocation: null,
                order: null,
            },
            selectedUser: null,
            searchText: null,
            searchUsers: []
        };
    },
    computed: {
        states() {
            return this.$store.getters["expert/states"];
        },
        cities() {
            return this.$store.getters["expert/cities"];
        },
        geographicalLocations() {
            return this.$store.getters["expert/geographicalLocations"];
        },
        allUniversities() {
            return this.$store.getters["expert/allUniversities"];
        },
        users() {
            this.searchUsers = this.$store.getters["expert/users"]
            return this.$store.getters["expert/users"];
        },
    },
    methods: {
        outSideCity() {
            this.selectCity = false;
        },
        outSideState() {
            this.selectState = false;
        },
        outSideGeographicalLocation() {
            this.selectGeographicalLocation = false;
        },
        outChangeUser() {
            this.selectUser = false;
        },
        outSideOrder() {
            this.selectOrder = false;
        },
        changeGeographicalLocation(val) {
            this.form.geographicalLocation = val;
            this.selectGeographicalLocation = false;
            this.getUniversities();
        },
        changeState(val) {
            this.form.state = val;
            this.selectState = false;
            this.getUniversities();
        },
        changeCity(val) {
            this.form.city = val;
            this.selectCity = false;
            this.getUniversities();
        },
        changeOrder(val) {
            this.form.order = val;
            this.selectOrder = false;
            this.getUniversities();
        },
        changeUser(val) {
            this.selectedUser = val;
            this.selectUser = false;
            this.$store.commit('expert/SET_User', val)

            setTimeout(() => {
                this.selectUser = false;
                this.$refs.start_modal_trigger.click();
            }, 10);
        },
        updateUserList(val) {
            this.searchText = val;
            const users = this.users.filter(item => item.firstname === (val) ||
                item.lastname === (val) ||
                item.mobile === (val))
            this.searchUsers = users

        },
        async getUniversities() {
            const getAllUniversities = await this.$axios.post(
                "v1/expert/getAllUniversities",
                this.form
            );
            if (getAllUniversities.data.status === 1) {
                this.$store.commit(
                    "expert/SET_AllUniversities",
                    getAllUniversities.data.universities
                );
                this.$store.commit("expert/SET_Cities", getAllUniversities.data.cities);
                this.$store.commit("expert/SET_States", getAllUniversities.data.states);
                this.$store.commit(
                    "expert/SET_GeographicalLocations",
                    getAllUniversities.data.geographicalLocations
                );
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.custom-select {
  width: 60%;
  position: relative;
}

.searchText {
  width: 90%;
  border: 1px solid var(--gray);
  border-radius: 5px;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.searchText:focus {
  border: 1px solid var(--main-color);
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;
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
  width: 70%;
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
  z-index: 9999;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
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
