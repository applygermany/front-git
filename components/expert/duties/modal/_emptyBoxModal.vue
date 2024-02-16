<template>
  <div id="empty-box-modal" class="duty-box-modal" uk-modal>
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <button
          class="uk-modal-close-default"
          type="button"
          @click="emptyData"
          uk-close
          style="right: unset; left: 10px"
        ></button>
        <h3>ایجاد وظیفه جدید</h3>
      </div>
      <div class="form">
        <form>
          <div class="form-group w-100">
            <input placeholder="عنوان" v-model="newDutyForm.title" />
          </div>
          <div class="form-group w-100">
            <input placeholder="تاریخ" id="date" />
            <date-picker
              v-model="newDutyForm.deadline"
              custom-input="#date"
              color="#e2ad42"
              format="YYYY-MM-DD"
              display-format="jDD jMMMM jYYYY"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="uk-svg uk-svg"
            >
              <path
                d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"
                stroke="#141414"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="form-group w-100">
            <textarea
              rows="7"
              placeholder="توضیحات..."
              v-model="newDutyForm.text"
              maxlength="255"
            ></textarea>
          </div>
          <div class="submit w-100">
            <button type="button" @click="createDuty" class="uk-modal-close">
              ثبت و ایجاد
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDutyForm: {
        title: null,
        deadline: null,
        text: null,
      },
    };
  },
  mounted() {
    this.newDutyForm = {
      title: null,
      deadline: null,
      text: null,
    };
  },
  computed: {
    id() {
      return this.$store.getters["expert/userId"];
    },
  },

  methods: {
    emptyData() {
      this.newDutyForm = {
        title: null,
        deadline: null,
        text: null,
      };
    },
    async createDuty() {
      this.errors = [];
      const saveDuty = await this.$axios.post(
        "v1/expert/saveDuty/" + this.id,
        this.newDutyForm
      );
      if (saveDuty.data.status === 1) {
        this.$toasted.success(saveDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("expert/duties", this.id);
        this.newDutyForm = {
          title: null,
          deadline: null,
          text: null,
        };
      } else if (saveDuty.data.status === 422) {
        this.errors = saveDuty.data.errors;
        this.$toasted.info(saveDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(saveDuty.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
    },
  },
};
</script>

<style></style>
