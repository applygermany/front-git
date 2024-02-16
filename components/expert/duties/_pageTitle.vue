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
            <h1>وظایف کاربر</h1>


            <div class="buttons">
                <div class="custom-select" v-click-outside-element="outSide">
                    <div class="select-selected" @click="selectShow = !selectShow">
                        <p v-if="category === 0">انتخاب وظایف از</p>
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
                            <div @click="confirmDuty(0, 0)">انتخاب وظایف از</div>
                            <div
                                    style="text-align: right"
                                    v-for="(category, index) in categories"
                                    :key="index"
                                    @click="confirmDuty(category.title, category.id)"
                            >
                                {{ category.title }}
                            </div>
                        </div>
                    </transition>
                </div>
            </div>


        </div>
        <p>
            لیست وظایف تعریف شده کاربر
            <nuxt-link :to="'/expert/resume/' + $route.params.id">
                <span class="name">{{ user.firstname }} {{ user.lastname }}</span>
            </nuxt-link>
            در
            اپلای جرمنی
        </p>

        <a
            href="#confirm-duty-modal"
            ref="start_confirm_duty_modal_trigger"
            style="display: none"
            uk-toggle
        ></a>
        <confirmDuty/>

    </div>
</template>

<script>
import confirmDuty from "@/components/expert/duties/modal/_confirmDutymodal.vue";

export default {
    components: {confirmDuty},
    data(){
        return{
            selectShow: false,
            selected: null,
            category: 0
        }
    },
    computed: {
        user() {
            return this.$store.getters["expert/user"];
        },
        categories() {
            return this.$store.getters["expert/categories"];
        },
        showCategory() {
            return this.categories.filter(
                (item) => item.id === this.category
            )[0];
        },
    },
    methods: {
        confirmDuty(type, id) {
            this.$store.commit('expert/SET_DutyType', type)
            this.$store.commit('expert/SET_DutyTypeId', id)
            this.selectShow = false;
            this.category = id
            this.$refs.start_confirm_duty_modal_trigger.click();
        },
        outSide() {
            this.selectShow = false;
        },
    }
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";


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


.buttons {
  margin-right: 75%;
  position: absolute;
  width: 50%;
  display: table;
}

.button {
  border: 1px solid var(--inner-background-color);
  border-radius: 5px;
  background-color: var(--inner-background-color);
  font-weight: 500;
  font-size: 0.8rem;
  cursor: pointer;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 100%;
  text-align: center;
  color: var(--black);
  transition: all 0.3s;

  &:hover {
    background-color: var(--main-color) !important;
    color: #ffffff;
  }
}

.margin {
  margin-top: 50px
}


@include tablet-device {
  .buttons {
    margin-right: 80%;
    position: absolute;
    width: 200px;
    display: table;
  }
}

@include mobile-device {
  .page-title {
    padding-bottom: 3.5rem;
  }
  .buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: 60px;
    margin-right: 0;
    width: 100%
  }
  .button {
    width: 49%;
    flex: 1
  }
  .margin {
    margin-top: 0px;
    margin-right: 200px;
  }
}

</style>
