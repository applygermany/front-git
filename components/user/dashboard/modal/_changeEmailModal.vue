<template>
  <div
    id="change-email-modal"
    class="change-email-phone-password-modal"
    uk-modal
  >
    <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
      <div class="title">
        <p>تغییر ایمیل</p>
        <button class="uk-modal-close-default" type="button" uk-close></button>
      </div>
      <div class="form">
        <p>
          لطفا توجه داشته باشید که پس از تغییر ایمیــل فعلی، مجددا نیـاز به
          تایید ایمیل جدید دارید
        </p>
        <form>
          <div class="form-group">
            <input
              type="email"
              placeholder=" "
              v-model="newEmail"
              :class="{ 'error-input': errors.includes('newEmail') }"
            />
            <label class="floating">ایمیل جدید</label>
          </div>
          <div class="submit">
            <a
              href="#send-code-modal-email"
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
      newEmail: null,
      updatingEmailMobile: false,
      errors:[],
    };
  },
  methods: {
    async changeEmailMobile() {
      this.errors = [];

      if (this.newEmail == null || this.newEmail == "")
        this.errors.push("newEmail");

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
