<template>
  <div class="sort-search">
    <div class="sort w-100 uk-margin-small-top">
      <div class="w-18 custom-select" v-click-outside-element="outSideField">
        <div class="select-selected" @click="selectField = !selectField">
          <p v-if="form.field == null">همه رشته ها</p>
          <p v-else>{{ form.field }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style="transition: 0.3s all; fill: var(--black)"
            :class="{ rotate: selectField }"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
            />
          </svg>
        </div>
        <transition name="fade">
          <div class="select-items" v-show="selectField">
            <div @click="changeField(null)">همه رشته ها</div>
            <div
              style="text-align: right"
              v-for="(field, index) in fields"
              :key="index"
              @click="changeField(field.field)"
            >
              {{ field.field }}
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="w-18 custom-select">
        <select ref="fields" @change="changeField">
          <option value="" selected>همه رشته ها</option>
          <option
            v-for="(field, index) in fields"
            :key="index"
            :value="field.field"
          >
            {{ field.field }}
          </option>
        </select>
      </div> -->
      <div class="w-18 custom-select" v-click-outside-element="outSideState">
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
            <path fill="none" d="M0 0h24v24H0z" />
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
              @click="changeState(state.state)"
            >
              {{ state.state }}
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="w-18 custom-select">
        <select ref="states" @change="changeState">
          <option value="" selected>همه ایالت ها</option>
          <option v-for="(state, index) in states" :key="index">
            {{ state.state }}
          </option>
        </select>
      </div> -->
      <div class="w-18 custom-select" v-click-outside-element="outSideCity">
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
            <path fill="none" d="M0 0h24v24H0z" />
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
              @click="changeCity(city.city)"
            >
              {{ city.city }}
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="w-18 custom-select">
        <select ref="cities" @change="changeCity">
          <option value="" selected>همه شهر ها</option>
          <option v-for="(city, index) in cities" :key="index">
            {{ city.city }}
          </option>
        </select>
      </div> -->
      <div
        class="w-18 custom-select"
        v-click-outside-element="outSideGeographicalLocation"
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
            <path fill="none" d="M0 0h24v24H0z" />
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
              @click="changeGeographicalLocation(geographicalLocation.geographical_location)"
            >
              {{ geographicalLocation.geographical_location }}
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="w-18 custom-select">
        <select
          ref="geographicalLocations"
          @change="changeGeographicalLocation"
        >
          <option value="" selected>همه موقعیت های جغرافیایی</option>
          <option
            v-for="(geographicalLocation, index) in geographicalLocations"
            :key="index"
          >
            {{ geographicalLocation.geographical_location }}
          </option>
        </select>
      </div> -->
      <div class="w-18 custom-select" v-click-outside-element="outSideOrder">
        <div class="select-selected" @click="selectOrder = !selectOrder">
          <p v-if="form.order == null">مرتب سازی بر اساس</p>
          <p v-else>{{ form.order }}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            style="transition: 0.3s all; fill: var(--black)"
            :class="{ rotate: selectOrder }"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
            />
          </svg>
        </div>
        <transition name="fade">
          <div class="select-items" v-show="selectOrder">
            <div style="text-align: right" @click="changeOrder(null)">
              مرتب سازی بر اساس
            </div>
            <div style="text-align: right" @click="changeOrder('جمعیت')">
              جمعیت
            </div>
            <div
              style="text-align: right"
              @click="changeOrder('هزینه های زندگی')"
            >
              هزینه های زندگی
            </div>
            <div
              style="text-align: right"
              @click="changeOrder('احتمال اخذ پذیرش')"
            >
              احتمال اخذ پذیرش
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="w-18 custom-select">
        <select>
          <option>مرتب سازی بر اساس</option>
          <option>جمعیت</option>
          <option>هزینه های زندگی</option>
        </select>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectField: false,
      selectCity: false,
      selectState: false,
      selectGeographicalLocation: false,
      selectOrder: false,
      form: {
        field: null,
        city: null,
        state: null,
        geographicalLocation: null,
        order: null,
      },
    };
  },
  computed: {
    cities() {
      return this.$store.getters["user/cities"];
    },
    fields() {
      return this.$store.getters["user/fields"];
    },
    geographicalLocations() {
      return this.$store.getters["user/geographicalLocations"];
    },
    states() {
      return this.$store.getters["user/states"];
    },
  },
  methods: {
    outSideField() {
      this.selectField = false;
    },
    outSideCity() {
      this.selectCity = false;
    },
    outSideState() {
      this.selectState = false;
    },
    outSideGeographicalLocation() {
      this.selectGeographicalLocation = false;
    },
    outSideOrder() {
      this.selectOrder = false;
    },
    changeField(val) {
      this.form.field = val;
      this.selectField = false;
      this.updateUniversities();
    },
    changeGeographicalLocation(val) {
      this.form.geographicalLocation = val;
      this.selectGeographicalLocation = false;
      this.updateUniversities();
    },
    changeState(val) {
      this.form.state = val;
      this.selectState = false;
      this.updateUniversities();
    },
    changeCity(val) {
      this.form.city = val;
      this.selectCity = false;
      this.updateUniversities();
    },
    changeOrder(val) {
      this.form.order = val;
      this.selectOrder = false;
      this.updateUniversities();
    },
    async updateUniversities() {
      const universities = await this.$axios.post(
        "v1/user/universities",
        this.form
      );

      console.log(universities)
      if (universities.data.status === 1) {
        this.$store.commit("user/Set_Universities", universities.data.universities);
        this.$store.commit("user/Set_Cities", universities.data.cities);
        this.$store.commit("user/Set_Fields", universities.data.fields);
        this.$store.commit(
          "user/Set_GeographicalLocations",
          universities.data.geographicalLocations
        );
        this.$store.commit("user/Set_States", universities.data.states);
      } else if (universities.data.status === 422) {
        this.errors = universities.data.errors;
        this.$toasted.info(universities.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(universities.data.msg, {
          position: "bottom-left",
          duration: 5000,
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
