<template>
  <div
    id="edit-request-consulting-modal"
    class="request-consulting-modal"
    uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>درخواست وقت مشاوره</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="text">
        <p class="explain">
          شما درخواست مشاوره تلفنی در روز
          <span>{{ telSupport.date.split("-").reverse().join("-") }}</span> و در
          بازه زمانی {{ telSupport.fromTime }} تا {{ telSupport.toTime }} را
          دارید لطفا موضوع درخواست مشاوره را در کــادر زیر وارد کنید
        </p>
        <form>
          <input
            placeholder="موضوع مشاوره"
            v-model="title"
            @focus="removeFromError"
            :class="{
              'error-input': errors.length > 0,
            }"
          />
          <span v-if="errors.length > 0" class="error">موضوع را وارد کنید</span>
        </form>
        <div class="price-buttons edit-price-buttons">
          <div class="buttons">
            <button
              class="submit uk-modal-close"
              v-if="choosing === false"
              @click="updateTelSupport"
            >
              بروزرسانی
            </button>
            <span class="submit loading-button" v-else>چند لحظه صبر کنید</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      choosing: false,
      canceling: false,
      title: null,
      errors: [],
    };
  },
  computed: {
    telSupport() {
      return this.$store.getters["telSupports/telSupport"];
    },
    expertId() {
      return this.$store.getters["telSupports/expertId"];
    },
  },
  methods: {
    async updateTelSupport() {
      this.errors = [];
      if (this.title == "" || this.title == null) this.errors.push("error");
      if (this.errors.length > 0) return;

      this.choosing = true;
      const chooseTelSupport = await this.$axios.post(
        "v1/user/updateTelSupport",
        { id: this.telSupport.id, title: this.title }
      );
      if (chooseTelSupport.data.status === 1) {
        this.$toasted.success(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });

        this.$store.dispatch("telSupports/expertTelSupports", this.expertId);
      } else if (chooseTelSupport.data.status === 422) {
        this.errors = chooseTelSupport.data.errors;
        this.$toasted.info(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.choosing = false;
      this.title = "";
    },
    async cancelTelSupport() {
      this.errors = [];
      this.canceling = true;
      const chooseTelSupport = await this.$axios.post(
        "v1/user/cancelTelSupport",
        { id: this.telSupport.id }
      );
      if (chooseTelSupport.data.status === 1) {
        this.$toasted.success(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
        this.$store.dispatch("telSupports/expertTelSupports", this.expertId);
      } else if (chooseTelSupport.data.status === 422) {
        this.errors = chooseTelSupport.data.errors;
        this.$toasted.info(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      } else {
        this.$toasted.error(chooseTelSupport.data.msg, {
          position: "bottom-left",
          duration: 5000,
        });
      }
      this.canceling = false;
      this.title = "";
    },
    removeFromError() {
      this.errors = [];
      return true;
    },
  },
};
</script>

<style></style>
