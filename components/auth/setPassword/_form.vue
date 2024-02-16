<template>
    <div class="form">
        <form @submit.prevent="completeSignUp">

            <div class="form-group">
                <input
                        type="password"
                        id="password"
                        placeholder=" "
                        v-model="form.password"
                        :class="{ 'error-input': errors.includes('password') }"
                />
                <label class="floating" for="password">گذرواژه</label>
                <div v-if="errors.password" class="uk-text-danger uk-text-small">
                    {{ errors.password[0] }}
                </div>
            </div>

            <div class="form-group">
                <input
                        type="password"
                        id="password_confirmation"
                        placeholder=" "
                        v-model="form.password_confirmation"
                        :class="{ 'error-input': errors.includes('password_confirmation') }"
                />
                <label class="floating" for="password_confirmation">
                    تکرار گذرواژه
                </label>
                <div
                        v-if="errors.password_confirmation"
                        class="uk-text-danger uk-text-small"
                >
                    {{ errors.password_confirmation[0] }}
                </div>
            </div>

            <div class="form-group">
                <input
                        type="text"
                        id="affCode"
                        placeholder=" "
                        v-model="form.affCode"
                        :class="{ 'error-input': errors.includes('affCode') }"
                />
                <label class="floating" for="affCode">کد دعوت (اختیاری)</label>
                <div v-if="errors.affCode" class="uk-text-danger uk-text-small">
                    {{ errors.affCode[0] }}
                </div>
            </div>

            <div class="form-group">
                <div class="custom-select">
                    <div class="select-selected" @click="selectShow = !selectShow">
                        <p v-if="form.acquaintedWay == null">
                            نحوه آشنایی بااپلای جرمنی
                        </p>
                        <p v-else>{{ form.acquaintedWay }}</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            style="transition: 0.3s all"
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
                            <div style="text-align: right" @click="changeSelect('تلگرام')">
                                تلگرام
                            </div>
                            <div
                                style="text-align: right"
                                @click="changeSelect('اینستاگرام')"
                            >
                                اینستاگرام
                            </div>
                            <div style="text-align: right" @click="changeSelect('یوتیوب')">
                                یوتیوب
                            </div>
                            <div
                                style="text-align: right"
                                @click="changeSelect('موتورهای جستجو')"
                            >
                                موتورهای جستجو
                            </div>
                            <div
                                style="text-align: right"
                                @click="changeSelect('معرفی آشنایان')"
                            >
                                معرفی آشنایان
                            </div>
                            <div style="text-align: right" @click="changeSelect('تبلیغات')">
                                تبلیغات
                            </div>
                            <div style="text-align: right" @click="changeSelect('سایر')">
                                سایر
                            </div>
                        </div>
                    </transition>
                </div>
            </div>

            <div class="form-group submit">
                <button type="submit" v-if="completingSignUp === false" @click="$store.commit('fromLand', true)">
                    ورود به پنل کاربری
                </button>
                <button type="button" v-else>چند لحظه صبر کنید</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectShow: false,
            form: {
                password: null,
                password_confirmation: null,
                affCode: null,
                acquaintedWay: null,
            },
            completingSignUp: false,
            errors: [],
        };
    },
    computed: {
        mobile() {
            return this.$store.getters["customAuth/mobileRecovery"];
        },
    },
    methods: {
        changeSelect(val) {
            this.form.acquaintedWay = val;
            this.selectShow = false;
        },
        async completeSignUp() {
            this.errors = [];

            for (const key in this.form) {
                if (this.form[key] == null || this.form[key] == "")
                    if (key != "affCode") this.errors.push(String(key));
            }

            if (this.errors.length != 0) return;

            if (
                this.form.password.length < 6 ||
                this.form.password_confirmation.length < 6
            ) {
                this.$toasted.error("گذرواژه نباید زیر 6 حرف باشد", {
                    position: "bottom-left",
                    duration: 5000,
                });

                return;
            }

            if (this.form.password != this.form.password_confirmation) {
                this.$toasted.error("تکرار گذرواژه اشتباه است", {
                    position: "bottom-left",
                    duration: 5000,
                });

                return;
            }

            this.completingSignUp = true;

            try {
                await this.$store.dispatch("customAuth/completeSignUp", {
                    ...this.form,
                    mobile: this.mobile,
                });
            } catch (err) {
                if (err.message.includes("موفقیت")) {
                    this.$toasted.success(err.message, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    this.$router.push("/user/dashboard");
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

            this.completingSignUp = false;
        },
    },
};
</script>

<style></style>
