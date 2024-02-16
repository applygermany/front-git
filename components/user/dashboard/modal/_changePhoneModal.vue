<template>
  <div
    id="change-phone-modal"
    class="change-email-phone-password-modal"
    uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>تغییر موبایل</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="form">
        <p>
          لطفا توجه داشته باشید که پس از تغییـر شمـاره فعلی، مجددا نیـاز به
          تایید شمـاره جدید دارید
        </p>
        <form>
          <div class="form-group">
            <input
              type="text"
              placeholder=" "
              v-model="newMobile"
              :class="{ 'error-input': errors.includes('newMobile') }"
            />
            <label class="floating">موبایل جدید</label>
          </div>
          <div class="submit">
            <a
              href="#send-code-modal-mobile"
              uk-toggle
              @click="changeEmailMobile"
            >
              ارسال کد
            </a>
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
      newMobile: null,
      updatingEmailMobile: false,
      errors: [],
    };
  },
  methods: {
    async changeEmailMobile() {
      this.errors = [];

      if (this.newMobile == null || this.newMobile == "")
        this.errors.push("newMobile");

      if (this.errors.length != 0) return;

      this.updatingEmailMobile = true;

      try {
        await this.$store.dispatch("user/changeEmailMobile", {
          newEmail: this.newEmail,
          newMobile: this.newMobile,
        });
      } catch (err) {
        if (err.message.includes("ارسال")) {
          this.$toasted.success(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        } else if (err.message.includes("اشتباه")) {
          this.$toasted.error(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        } else {
          this.$toasted.info(err.message, {
            position: "bottom-left",
            duration: 5000,
          });
        }
      }

      this.updatingEmailMobile = false;
    },
  },
};
</script>

<style></style>
