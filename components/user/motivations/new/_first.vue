<template>
  <div :class="'resume-box first '+(canFill ? 'fade' : '')">
    <div style="display: flex;justify-content: space-between">
      <h3>جزئیات درخواست</h3>
      <button @click="resetList" type="button">
        پاک کردن لیست
      </button>
    </div>
    <hr/>
    <form>
      <div class="row">
        <div
            class="form-group custom-select w-22"
            v-click-outside-element="outSideTo"
        >
          <div @click="selectTo = !selectTo" class="select-selected"
          >
            <p v-if="motivation.to == null">برای ارائه به</p>
            <p v-else>{{ motivation.to }}</p>
            <svg
                :class="{ rotate: selectTo }"
                height="24"
                style="transition: 0.3s all; fill: var(--black)"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"/>
              <path
                  d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
              />
            </svg>
          </div>
          <transition name="fade">
            <div class="select-items" v-show="selectTo">

              <div
                  @click="
                  motivationTo('سفارت');
                  outSideTo();
                "
                  style="text-align: right"
              >
                سفارت
              </div>
              <div
                  @click="
                  motivationTo('دانشگاه');
                  outSideTo();
                "
                  style="text-align: right"
              >
                دانشگاه
              </div>
            </div>
          </transition>
        </div>
        <!-- <div class="form-group custom-select w-22">
          <div>
            <select
              :value="motivation.to"
              @change="motivationTo($event.target.value)"
            >
              <option>برای ارائه به</option>
              <option>سفارت</option>
              <option>دانشگاه</option>
            </select>
          </div>
        </div> -->
        <div
            class="form-group custom-select w-22"
            v-click-outside-element="outSideCountry"
            v-if="motivation.to === 'سفارت'"
        >
          <div @click="selectCountry = !selectCountry" class="select-selected"
          >
            <p v-if="motivation.country == null">انتخاب سفارت</p>
            <p v-else>{{ motivation.country }}</p>
            <svg
                :class="{ rotate: selectCountry }"
                height="24"
                style="transition: 0.3s all; fill: var(--black)"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"/>
              <path
                  d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
              />
            </svg>
          </div>
          <transition name="fade">
            <div class="select-items" v-show="selectCountry">

              <div
                  @click="
                  changeCountry('ایران');
                  outSideCountry();
                "
                  style="text-align: right"
              >
                ایران
              </div>
              <div
                  @click="
                  changeCountry('کشورهای دیگر');
                  outSideCountry();
                "
                  style="text-align: right"
              >
                کشورهای دیگر
              </div>
            </div>
          </transition>
        </div>
        <!-- <div
          class="form-group custom-select w-22"
          v-if="motivation.to === 'سفارت'"
        >
          <div>
            <select
              :value="motivation.country"
              @change="changeCountry($event.target.value)"
            >
              <option value="">انتخاب سفارت</option>
              <option value="ایران">ایران</option>
              <option value="کشورهای دیگر">کشورهای دیگر</option>
            </select>
          </div>
        </div> -->
      </div>
      <div v-if="motivation.to==='سفارت' || motivation.to==='برای ارائه به'">
        <UniRow />
      </div>
      <div v-if="motivation.to === 'دانشگاه'">
        <UniRows
            :index="index"
            :key="index"
            :university="university"
            v-for="(university, index) in universities"/>
      </div>
      <div class="add-more" v-if="motivation.to === 'دانشگاه' && $auth.user.type != 2">
        <a @click="addUniversity">
          <svg
              class="uk-svg"
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                d="M12 5.75V18.25"
                stroke="#141414"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
            ></path>
            <path
                d="M18.25 12H5.75"
                stroke="#141414"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
            ></path>
          </svg>
          <span>افزودن دانشگاه</span>
        </a>
      </div>
      <br/>
      <div class="notice" v-if="motivation.to === 'دانشگاه'">
        <div v-if="$auth.user.type != 2">
          <strong>نکات:</strong>
          <p dir="rtl">
            1) به ازای هر دانشگاه {{ prices.extra_university | numberFilter }} ریال به مبلغ کل انگیزه نامه اضافه خواهد
            شد.
          </p>
          <p dir="rtl">
            2) تمامی دانشگاه ها در یک سفارش ثبت شود.
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import UniRows from "@/components/user/motivations/new/rows/_uniRows.vue";
import UniRow from "@/components/user/motivations/new/rows/_uniRow.vue";

export default {
  components: {
    UniRows,
    UniRow
  },
  data() {
    return {
      errors2: [],
      selectTo: false,
      selectCountry: false,
    };
  },
  computed: {
    created() {
      this.$store.commit("motivations/SET_MotivationTo", null)
    },
    canFill() {
      return this.$store.getters["motivations/canFill"]
    },
    motivation() {
      return this.$store.getters["motivations/motivation"];
    },
    prices() {
      return this.$store.getters["user/prices"];
    },
    universities() {
      return this.$store.getters["motivations/universities"];
    },
    errors() {
      return this.$store.getters["motivations/errors"];
    },
  },
  methods: {
    ...mapMutations({
      motivationTo: "motivations/SET_MotivationTo",
      changeCountry: "motivations/SET_MotivationCountry",
    }),
    resetList() {
      this.$store.commit("motivations/Remove_Motivation");
    },
    outSideTo() {
      this.selectTo = false;
    },
    outSideCountry() {
      this.selectCountry = false;
    },
    addUniversity() {
      const errors = [];
      this.$store.dispatch("motivations/checkUniversitiesErrors", 1);
      this.universities.forEach((item, index) => {
        if(index>=1) {
          if (item['name'] == null || item['name'] == "") {
            errors.push(`name-${index}`);
          }
          if (item['field'] == null || item['field'] == "") {
            errors.push(`field-${index}`);
          }
          if (item['language'] == null || item['language'] == "زبان تحصیل") {
            errors.push(`language-${index}`);
          }
          if (item['grade'] == null || item['grade'] == "") {
            errors.push(`grade-${index}`);
          }
        }
      });

      if (errors.length != 0) return;
      this.$store.commit("motivations/Add_Universities");
    },
  },
};
</script>

<style lang="scss" scoped>

@import "~/assets/user/scss/_mixins.scss";

button {
  cursor: pointer;
  border: 0;
  background-color: var(--light-main-color);
  color: #2b2827;
  font-size: 0.8rem;
  font-weight: 600;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  width: 20%;
  border-radius: 5px;
}

.custom-select {
  width: 50%;
  position: relative;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
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

.first {
  form {
    .row {
      @include fbx-ai-center-jc-start;
      flex-wrap: wrap;

      .form-group {
        margin-left: 1rem;
      }
    }

    .add-more {
      @include fbx-ai-center-jc-start;

      a {
        @include fbx-ai-center-jc-center;
        background-color: var(--inner-background-color);
        border-radius: 5px;
        width: 8rem;
        height: 2rem;
        transition: all 0.3s;

        svg {
          transition: all 0.3s;
          color: var(--text-gray);
        }

        span {
          color: var(--text-gray);
          font-size: 13px;
          padding: 2px;
        }

        &:hover {
          background-color: var(--light-main-color);

          svg {
            color: #2b2827;
          }
        }
      }

      p {
        margin-right: 1rem;
        color: var(--red);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }

    .notice {
      p {
        margin-right: 1rem;
        color: var(--red);
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
}

@include mobile-device {
  .first {
    form {
      .row {
        .form-group {
          margin-left: 0;
        }
      }

      .add-more {
        p {
          margin-right: auto;
          width: 85%;
          font-size: 0.75rem;
        }
      }

      .notice {
        p {
          margin-right: 1rem;
          color: var(--red);
          font-size: 0.8rem;
          font-weight: 500;
        }
      }
    }
  }
}

@include tablet-device {
  .first {
    form {
      .row {
        @include fbx-ai-start-jc-between;

        .form-group {
          margin-left: 0;
        }
      }

      .add-more {
        p {
          width: 85%;
          font-size: 0.75rem;
        }
      }
    }
  }
}

@include large-device {
}
</style>
