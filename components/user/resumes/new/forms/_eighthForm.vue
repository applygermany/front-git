<template>
  <form @submit.prevent="">
    <div class="row">
      <div
              class="form-group custom-select w-30"
              v-click-outside-element="outSideRes"
      >
        <div class="select-selected" @click="selectRes = !selectRes"
             :class="{
          'error-input': errors.includes(`type-${index}`),
        }">
          <p v-if="research.type == null">نوع پژوهش</p>
          <p v-else>{{ research.type }}</p>
          <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  style="transition: 0.3s all; fill: var(--black)"
                  :class="{ rotate: selectRes }"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
                    d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
            />
          </svg>
        </div>
        <transition name="fade">
          <div class="select-items" v-show="selectRes">

            <div
                    style="text-align: right"
                    @click="
                    changeResearchsType({
                      val: 'مقاله',
                      index: index,
                    });
                    outSideRes();
                  "
            >
              مقاله
            </div>
            <div
                    style="text-align: right"
                    @click="
                    changeResearchsType({
                      val: 'پژوهش',
                      index: index,
                    });
                    outSideRes();
                  "
            >
              پژوهش
            </div>
            <div
                    style="text-align: right"
                    @click="
                    changeResearchsType({
                      val: 'کتاب',
                      index: index,
                    });
                    outSideRes();
                  "
            >
              کتاب
            </div>
            <div
                    style="text-align: right"
                    @click="
                    changeResearchsType({
                      val: 'سایر',
                      index: index,
                    });
                    outSideRes();
                  "
            >
              سایر
            </div>
          </div>
        </transition>
      </div>
      <!-- <div class="form-group custom-select w-30">
        <div>
          <select :value="research.type" @change="checkAddResearch">
            <option>نوع پژوهش</option>
            <option>مقاله</option>
            <option>پژوهش</option>
            <option>کتاب</option>
            <option>سایر</option>
          </select>
        </div>
      </div> -->
      <div class="form-group w-30">
        <input
                :value="research.title"
                placeholder=" "
                @change="changeResearchsTitle({ val: $event.target.value, index })"
                :class="{ 'error-input': errors.includes('title-'+index) }"
        />
        <label class="floating">عنوان پژوهش</label>
      </div>
      <div class="form-group w-30">
        <input
                :value="research.year"
                placeholder=" "
                @change="changeResearchsYear({ val: $event.target.value, index })"
                maxLength="4"
                type="number"
                :class="{ 'error-input': errors.includes('year-'+index) }"
        />
        <label class="floating">تاریخ (سال)</label>
      </div>
    </div>
    <div class="row">
      <div class="form-group w-100">
        <input
                :value="research.text"
                placeholder=" "
                @change="changeResearchsText({ val: $event.target.value,index })"

                :class="{ 'error-input': errors.includes('text-'+index) }"

        />
        <label class="floating">توضیحات</label>
      </div>
    </div>
    <div v-if="index > 0" class="delete-form" @click="deleteResearch(index)">
      <a>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="uk-svg"
        >
          <path
            d="M17.25 6.75L6.75 17.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M6.75 6.75L17.25 17.25"
            stroke="#141414"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </a>
    </div>
  </form>
</template>
<script>
import { mapMutations } from "vuex";
import DeleteIcon from "@/components/svg/delete-icon.vue";
export default {
  props: ["research", "index"],
  components: {
    DeleteIcon,
  },
  data() {
    return {
      selectRes: false,
    };
  },
  computed: {
    errors() {
      return this.$store.getters["resume/researchErrors"];
    },
  },
  methods: {
    ...mapMutations({
      changeResearchsType: "resume/SET_ResearchsType",
      changeResearchsTitle: "resume/SET_ResearchsTitle",
      changeResearchsYear: "resume/SET_ResearchsYear",
      changeResearchsText: "resume/SET_ResearchsText",
      deleteResearch: "resume/Delete_Research",
    }),

    outSideRes() {
      this.selectRes = false;
    },

  },
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

form {
  .row {
    @include fbx-ai-center-jc-between;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
  }
  .add-more {
    a {
      @include fbx-ai-center-jc-center;
      background-color: var(--inner-background-color);
      border-radius: 5px;
      width: 2rem;
      height: 2rem;
      transition: all 0.3s;
      svg {
        transition: all 0.3s;
        color: var(--text-gray);
      }
      &:hover {
        background-color: var(--light-main-color);
        svg {
          color: #2b2827;
        }
      }
    }
  }
}

@include mobile-device {
  form {
    .row {
      margin-bottom: 0;
      .form-group {
        margin-bottom: 1.5rem;
        width: 100% !important;
      }
    }
  }
}

@include tablet-device {
  form {
    .row {
      margin-bottom: 0;
      .form-group {
        margin-bottom: 1.5rem;
        width: 100% !important;
      }
    }
  }
}
</style>
