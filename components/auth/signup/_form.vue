<template>
    <div class="form">
        <form @submit.prevent="signUp">
            <div class="form-group">
                <input
                        type="text"
                        id="firstname"
                        placeholder=" "
                        v-model="signUpForm.firstname"
                        @keyup="checkPrLang"
                        :class="{
            'error-input':
              errors.includes('firstname') || errors.includes('firstname-pr'),
          }"
                        @focus="removeFromError('firstname')"
                />
                <label class="floating" for="firstname">نام (فارسی)</label>
                <div v-if="errors.includes('firstname')" class="error">
                    ورود نام الزامی است
                </div>
                <div v-else-if="errors.includes('firstname-pr')" class="error">
                    نام را به درستی وارد کنید
                </div>
            </div>

            <div class="form-group">
                <input
                        type="text"
                        id="lastname"
                        placeholder=" "
                        @keyup="checkPrLang"
                        v-model="signUpForm.lastname"
                        :class="{
            'error-input':
              errors.includes('lastname') || errors.includes('lastname-pr'),
          }"
                        @focus="removeFromError('lastname')"
                />
                <label class="floating" for="lastname">نام خانوادگی (فارسی)</label>
                <div v-if="errors.includes('lastname')" class="error">
                    ورود نام خانوادگی الزامی است
                </div>
                <div v-else-if="errors.includes('lastname-pr')" class="error">
                    نام خانوادگی را به درستی وارد کنید
                </div>
            </div>

            <div class="form-group">
                <input type="tel"
                       id="mobile"
                       placeholder=" "
                       v-model="signUpForm.mobile"
                       :class="{ 'error-input': errors.includes('mobile') }"
                />
                <label class="floating" for="mobile">موبایل</label>

                <div v-if="errors.includes('mobile')" class="error">
                    ورود موبایل الزامی است
                </div>
            </div>

            <div class="form-group">
                <input
                        type="email"
                        id="email"
                        placeholder=" "
                        v-model="signUpForm.email"
                        :class="{ 'error-input': errors.includes('email') }"
                />
                <label class="floating" for="mobile">ایمیل</label>
                <div v-if="errors.includes('email')" class="error">
                    ورود ایمیل الزامی است
                </div>
                <div v-else-if="errors.includes('invalid-email')" class="error">
                    ایمیل معتیر نمی باشد
                </div>
            </div>

            <div class="form-group submit">
                <button type="submit" v-if="signingUp === false">مرحله بعد</button>
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
            signUpForm: {
                firstname: null,
                lastname: null,
                mobile: null,
                email: null,
                mobileCode: '+98'
            },
            signingUp: false,
            errors: [],
        };
    },
    methods: {

        checkPrLang(event) {
            if (event.target.value == "") return true;
            let check = /^[\u0600-\u06FF\s]+$/.test(
                event.target.value.replace(/\s/g, "")
            );

            let id = event.target.getAttribute("id") + "-pr";

            if (!check) {
                event.preventDefault();
                event.target.value = event.target.value.slice(0, -1);
                this.errors.push(id);
            } else {
                this.errors = this.errors.filter((item) => item != id);
            }
        },
        removeFromError(name) {
            this.errors = this.errors.filter((item) => item != name);
            return true;
        },
        async signUp() {
            this.errors = [];

            for (const key in this.signUpForm) {
                if (this.signUpForm[key] == null || this.signUpForm[key] === "") {
                    if (key !== "acquaintedWay") this.errors.push(String(key));
                } else {
                    if (key === "firstname" && this.signUpForm[key] !== "") {
                        let check = /^[\u0600-\u06FF\s]+$/.test(
                            this.signUpForm[key].replace(/\s/g, "")
                        );
                        if (!check) {
                            this.errors.push('firstname-pr');
                        }
                    }
                    if (key === "lastname" && this.signUpForm[key] !== "") {
                        let check = /^[\u0600-\u06FF\s]+$/.test(
                            this.signUpForm[key].replace(/\s/g, "")
                        );
                        if (!check) {
                            this.errors.push('lastname-pr');
                        }
                    }
                    if (key === "email" && this.signUpForm[key] !== ""){
                        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.signUpForm[key])) {
                            this.errors.push('invalid-email');
                        }
                    }
                }
            }
            console.log(this.errors)

            if (this.errors.length !== 0) return;

            this.signingUp = true;
            try {
                await this.$store.dispatch("customAuth/signUp", this.signUpForm);
            } catch (err) {
                // if (err.message.includes("ارسال")) {
                if (err.message.includes("ثبت نام")) {
                    this.$toasted.success(err.message, {
                        position: "bottom-left",
                        duration: 5000,
                    });
                    this.$cookies.set("mobile", this.signUpForm.mobile, {
                        path: "/",
                        maxAge: 300,
                    });

                    // this.$router.push("/auth/verification");
                    this.$router.push("/auth/setPassword");
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

            this.signingUp = false;
        },
    },
};
</script>

<style lang="scss">
.custom-select {
  position: relative;
  width: 80%;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 1rem;
  border: 1px solid var(--gray);
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  width: 100%;
  border: 1px solid var(--gray);
  padding-right: 1rem;
  padding-left: 1rem;
  position: absolute;
  background-color: var(--white);
  margin-top: 0.5rem;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  border-radius: 5px;
  height: 200px;
  overflow-y: scroll;
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
