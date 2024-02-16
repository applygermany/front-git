<template>
    <div
            class="change-email-phone-password-modal"
            id="change-password-modal"
            uk-modal
    >
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <p>تغییر رمز عبور</p>
                <button class="uk-modal-close-default" ref="closeButton" type="button" uk-close></button>
            </div>
            <div class="form">
                <form>
                    <div class="form-group">
                        <input
                                :class="{ 'error-input': errors.includes('oldPassword') }"
                                placeholder=" "
                                type="password"
                                v-model="changePasswordForm.oldPassword"
                        />
                        <label class="floating">رمز عبور فعلی</label>
                    </div>
                    <div class="form-group">
                        <input
                                :class="{ 'error-input': errors.includes('newPassword') }"
                                placeholder=" "
                                type="password"
                                v-model="changePasswordForm.newPassword"
                        />
                        <label class="floating">رمز عبور جدید</label>
                    </div>
                    <div class="form-group">
                        <input
                                :class="{
                'error-input': errors.includes('newPassword_confirmation'),
              }"
                                placeholder=" "
                                type="password"
                                v-model="changePasswordForm.newPassword_confirmation"
                        />
                        <label class="floating">تکرار رمز عبور جدید</label>
                    </div>
                    <div class="submit">
                        <a

                                @click="updatePassword"
                                type="button"
                                v-if="updatingPassword === false"
                        >
                            تایید
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
                changePasswordForm: {
                    oldPassword: null,
                    newPassword: null,
                    newPassword_confirmation: null,
                },
                updatingPassword: false,
                errors: [],
            };
        },
        methods: {
            async updatePassword() {
                this.errors = [];

                for (const key in this.changePasswordForm) {
                    if (
                        this.changePasswordForm[key] == null ||
                        this.changePasswordForm[key] == ""
                    )
                        this.errors.push(String(key));
                }

                if (this.errors.length != 0) return;

                this.updatingPassword = true;
                try {
                    await this.$store.dispatch(
                        "user/updatePassword",
                        this.changePasswordForm
                    );

                } catch (err) {

                    if (err.message === "تغییرات اعمال شد") {
                        this.$toasted.success(err.message, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                        this.$refs.closeButton.click()

                        this.changePasswordForm = {
                            oldPassword: null,
                            newPassword: null,
                            newPassword_confirmation: null,
                        };
                    } else {
                        this.$toasted.error(err.message, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                    }
                }
                this.updatingPassword = false;
            },
        },
    };
</script>

<style></style>
