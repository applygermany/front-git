<template>
    <main class="main" id="webinar">
        <section class="about-webinar uk-container" v-if="webinar != null">
            <div class="img">
                <img :src="webinar.image"/>
                <div class="wrapper">
                    <div class="container">
                        <span class="num count" :data-val="webinar.count">000</span>
                        <span class="title" style="font-weight: bold">ظرفیت باقیمانده</span>
                    </div>
                    <!--                     <div class="container">-->
                    <!--                       <div class="row">-->
                    <!--                         <div class="col">-->
                    <!--                            <span class="num endHour" :data-val="endHour">00</span>-->
                    <!--                            <span class="title">ساعت</span>-->
                    <!--                         </div>-->
                    <!--                         <div class="col">-->
                    <!--                          <span class="num endDay" :data-val="endDay">00</span>-->
                    <!--                          <span class="title">روز</span>-->
                    <!--                         </div>-->
                    <!--                       </div>-->
                    <!--                     </div> -->
                </div>
            </div>
            <div class="text">
                <section class="uk-container" style="padding: unset !important;">
                    <div class="form">
                        <div class="form-title">
                            <h2 class="title-font">ثبت نام</h2>
                            <p>لطفا اطلاعات خواسته شده را با دقت کامل کنید.</p>
                        </div>
                        <form action="#" id="myForm">
                            <div class="d-flex w-100" style="justify-content: space-between">

                                <div class="right">
                                    <div class="row w-100">
                                        <div class="form-group w-100">
                                            <label for="name">نام</label>
                                            <input
                                                :class="{ 'error-input': errors.includes('name')}"
                                                @focus="removeFromError('name')" id="name" name="name" required
                                                type="text"
                                                v-model="form.name"/>
                                        </div>
                                    </div>
                                    <div class="row w-100">
                                        <div class="form-group w-100">
                                            <label for="mobile">شماره همراه</label>
                                            <input
                                                :class="{ 'error-input': errors.includes('mobile')}"
                                                @focus="removeFromError('mobile')"
                                                id="mobile" name="mobile"
                                                required
                                                type="tel"
                                                v-model="form.mobile"
                                            />
                                        </div>
                                    </div>
                                    <div class="row w-100">
                                        <div class="form-group w-100">
                                            <label for="field">رشته تحصیلی</label>
                                            <input :class="{ 'error-input': errors.includes('field')}"
                                                   @focus="removeFromError('field')" id="field" name="field" required
                                                   type="text"
                                                   v-model="form.field"/>
                                        </div>
                                    </div>
                                    <div class="row w-100">
                                        <div class="form-group w-100">
                                            <label for="telegram">آی دی تلگرام</label>
                                            <input :class="{ 'error-input': errors.includes('telegram')}"
                                                   @focus="removeFromError('telegram')" id="telegram" name="telegram"
                                                   type="text"
                                                   v-model="form.telegram"/>
                                        </div>
                                    </div>

                                    <div class="row w-100" v-if="webinar && webinar.price == null">
                                        <div class="form-group w-100">
                                            <label for="price">مبلغ واریزی</label>
                                            <input
                                                :class="{ 'error-input': errors.includes('price')}"
                                                @focus="removeFromError('price')"
                                                id="price"
                                                name="price"
                                                required
                                                type="number"
                                                v-model="form.price"
                                            />
                                            <span class="toman">ریال</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="left">
                                    <div class="row w-100">
                                        <div class="form-group w-100">
                                            <label for="family">نام خانوادگی</label>
                                            <input
                                                :class="{ 'error-input': errors.includes('family')}"
                                                @focus="removeFromError('family')"
                                                id="family"
                                                name="family"
                                                required
                                                type="text"
                                                v-model="form.family"
                                            />
                                        </div>
                                    </div>
                                    <div class="row w-100">
                                        <div class="form-group w-100">
                                            <label for="email">ایمیل</label>
                                            <input
                                                :class="{ 'error-input': errors.includes('email')}"
                                                @focus="removeFromError('email')"
                                                id="email"
                                                name="email"
                                                required
                                                type="email"
                                                v-model="form.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="row w-100">
                                        <div class="custom-select w-100">
                                            <p class="title-input-p">
                                                متقاضی کدام مقطع هستید؟
                                            </p>
                                            <select required v-model="form.grade">
                                                <option :value="null">انتخاب کنید</option>
                                                <option :value="`کالج`">کالج</option>
                                                <option :value="`لیسانس`">لیسانس</option>
                                                <option :value="`ارشد`">ارشد</option>
                                                <option :value="`دکترا`">دکترا</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="row w-100">
                                        <div class="form-group w-100">
                                            <label for="instagram">آی دی اینستا</label>
                                            <input
                                                :class="{ 'error-input': errors.includes('instagram')}"
                                                @focus="removeFromError('instagram')" id="instagram"
                                                name="instagram"
                                                type="text"
                                                v-model="form.instagram"/>
                                        </div>
                                    </div>

                                    <div class="row w-100">
                                        <div class="custom-select w-100">
                                            <p class="title-input-p">
                                                نحوه آشنایی؟
                                            </p>
                                            <select required v-model="form.method_of_introduction">
                                                <option :value="null">اننتخاب کنید</option>
                                                <option :value="`اینستاگرام`">اینستاگرام</option>
                                                <option :value="`تلگرام`">تلگرام</option>
                                                <option :value="`سایت`">سایت</option>
                                                <option :value="`موسسه کارن`">موسسه کارن</option>
                                                <option :value="`معرفی دوستان`">معرفی دوستان</option>
                                                <option :value="`موسسه آوای شهیر`">موسسه آوای شهیر</option>
                                            </select>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="uploadSection">
                                <div class="row w-100 row-upload" v-if="webinar.price == null">
                                    <div class="form-group w-100">
                                        <div class="charityAlert">
                                            <p>مبلغ دلخواه را به
                                                <a target="_blank" href="https://mahak-charity.org/online-payment/"
                                                   class="charity">
                                                    خیریه محک
                                                </a>
                                                یا
                                                <a target="_blank"
                                                   href="https://www.nikancharity.org/immediate-support/"
                                                   class="charity">
                                                    نیکان ماموت
                                                </a>
                                                واریز کرده و فیش مربوطه را در قسمت
                                                <span>
                                                آپلود رسید
                                                </span>
                                                آپلود نمایید.

                                            </p>
                                            <div class="uk-grid charityImageSection">
                                                <div class="uk-width-1-2">
                                                    <a target="_blank" href="https://mahak-charity.org/online-payment/"
                                                       class="link is-justify-content-center"
                                                       style="text-align: center;font-family: 'morabbavf';direction: rtl;justify-content: center"
                                                    >
                                                        <img src="/mahak.svg" alt=""/>
                                                    </a>
                                                </div>
                                                <div class="uk-width-1-2">
                                                    <a target="_blank"
                                                       href="https://www.nikancharity.org/immediate-support/"
                                                       class="link is-justify-content-center"
                                                       style="text-align: center;font-family: 'morabbavf';direction: rtl;justify-content: center;margin: 15px auto"
                                                    >
                                                        <img src="/mamot.svg" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div style="margin: 20px auto;width: 100%;">
                                            <dropzone
                                                :destroyDropzone="true"
                                                :include-styling="false"
                                                :options="options"
                                                :useCustomSlot="true"
                                                @vdropzone-file-added="uploadReceipt"
                                                id="uploadReceipt"
                                                ref="uploadReceipt"
                                                style="width: 100%"
                                                v-if="sending === false && sent === false"
                                            >
                                                <div class="dropzone-custom-content">
                                                    <div class="js-upload uk-placeholder uk-text-center">
                        <span class="uk-text-middle" style="font-weight: bold;position: relative"
                        >
                            <span class="bounce" uk-icon="icon: upload; ratio: 1"></span>
                            آپلود رسید
                        </span
                        >
                                                        <div uk-form-custom>
                                                            <span class="uk-link">انتخاب فایل</span>
                                                        </div>
                                                        <br/><span class="rule" style="direction: rtl"
                                                    >فقط از فرمت jpg استفاده کنید</span
                                                    >
                                                    </div>
                                                </div>
                                            </dropzone>
                                        </div>

                                        <div
                                            class="js-upload uk-placeholder uk-text-center"
                                            uk-form-custom
                                            v-if="sending === true && sent === false"
                                        >
                                            <div>
                                                <span class="uk-text-middle latin-font">Please Wait</span>
                                                <br/>
                                                <span class="uk-link latin-font">{{ fileSize }}</span>
                                            </div>
                                            <span class="rule latin-font"
                                            >{{ uploadPercent }}% uploading ...</span
                                            >
                                        </div>
                                        <div class="js-upload uk-placeholder uk-text-center"
                                             uk-form-custom
                                             v-if="sending === false && sent === true"
                                        >
                                            <div>
                                                <span class="uk-text-middle latin-font">Done</span>
                                                <br/>
                                                <span class="uk-link latin-font">{{ fileName }}</span>
                                            </div>
                                            <span class="rule latin-font">{{ fileSize }}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <!--                            <div class="descriptions">-->
                            <!--                                <div class="right">-->
                            <!--                                    <h3>سرفصل های مورد بحث</h3>-->
                            <!--                                    <div v-html="webinar.headlines"></div>-->
                            <!--                                </div>-->
                            <!--                                <div class="middle">-->
                            <!--                                    <h3>پرداخت</h3>-->
                            <!--                                    <div v-html="webinar.paymentText"></div>-->
                            <!--                                    <a href="https://mahak-charity.org/online-payment/" class="link is-justify-content-center"-->
                            <!--                                       style="text-align: center;font-family: 'morabbavf';direction: rtl;justify-content: center"-->
                            <!--                                       v-if="webinar.paymentLink !== null && webinar.paymentLink !== ''"-->
                            <!--                                    >-->
                            <!--                                        <img src="/mahak.svg" alt=""/>-->
                            <!--                                    </a>-->
                            <!--                                    <a href="https://www.nikancharity.org/immediate-support/" class="link is-justify-content-center"-->
                            <!--                                       style="text-align: center;font-family: 'morabbavf';direction: rtl;justify-content: center;margin: 15px auto"-->
                            <!--                                       v-if="webinar.paymentLink !== null && webinar.paymentLink !== ''"-->
                            <!--                                    >-->
                            <!--                                        <img src="/mamot.svg" alt=""/>-->
                            <!--                                    </a>-->
                            <!--                                    <a class="link d-flex is-justify-content-center"-->
                            <!--                                       style="text-align: center;font-family: 'morabbavf';direction: rtl;justify-content: center"-->
                            <!--                                       v-if="webinar.paymentLink === null && webinar.price !== null"-->
                            <!--                                    >-->
                            <!--                                        <span>{{ webinar.price | numberFilter }}</span>-->
                            <!--                                        <span style="margin-right: 3px;"> ریال</span>-->
                            <!--                                    </a>-->
                            <!--                                </div>-->
                            <!--                                <div class="left">-->
                            <!--                                    <h3>برگزار کننده</h3>-->
                            <!--                                    <div>-->
                            <!--                                        <img :src="webinar.imageOrganizer" alt=""/>-->
                            <!--                                        <div>-->
                            <!--                                            <p>{{ webinar.organizerName }}</p>-->
                            <!--                                            <span>{{ webinar.organizerField }}</span>-->
                            <!--                                        </div>-->
                            <!--                                    </div>-->
                            <!--                                </div>-->
                            <!--                            </div>-->

                            <div class="row submit w-100">
                                <button v-if="!loading" @click="submitWebinar" type="button">
                                    ارسال و تکمیل ثبت نام
                                </button>
                                <button v-else>
                                    <div uk-spinner></div>
                                    چندلحظه صبر کنید ..
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </section>
        <!--  Modal  -->

        <a href="#turn-off-vpn-modal"
           ref="turn_off_vpn_modal_trigger"
           style="display: none"
           uk-toggle></a>
        <a href="/"
           ref="redirect_home_trigger"
           style="display: none"></a>
        <TurnVpnOff/>
    </main>
</template>
<script>
import Dropzone from "nuxt-dropzone";
import TurnVpnOff from "@/components/webinar/_vuexTurnOffVpnModal.vue";

export default {
    layout: "siteLayout",
    components: {
        Dropzone,
        TurnVpnOff
    },
    data() {
        return {
            options: {
                url: "http://httpbin.org/anything",
            },
            loading: false,
            submitingWebinar: false,
            sending: false,
            sent: false,
            fileSize: 0,
            fileName: 0,
            uploadPercent: 0,
            webinar: {},
            errors: [],
            form: {
                id: null,
                imageName: null,
                name: null,
                family: null,
                price: null,
                email: null,
                mobile: null,
                telegram: null,
                instagram: null,
                field: null,
                grade: null,
                method_of_introduction: null,
            },
            error: {type: null, msg: null},
            useVpn: false,
            endDay: 0,
            endHour: 0
        };
    },
    methods: {
        submitForm() {
            this.$axios.post("v1/submitSocial", this.form).then((res) => {
                this.error = res.data;
                setTimeout(() => {
                    this.error = null;
                }, 4500)
            }).catch((err) => {
                this.error = {
                    msg: 'از اتصال خود به اینترنت اطمینان حاصل نمایید و مجدداً تلاش کنید',
                    type: 'danger'
                }
                setTimeout(() => {
                    this.error = null;
                }, 4500)
            })
        },
        removeFromError(name) {
            this.errors = this.errors.filter((item) => item !== name);
        },
        async uploadReceipt() {
            if (this.$refs.uploadReceipt.dropzone.files.length === 0) {
                this.$toasted.error("لطفا ابتدا یک فایل را انتخاب کنید", {
                    position: "bottom-left",
                    duration: 5000,
                });
                return false;
            }
            const file = this.$refs.uploadReceipt.dropzone.files[0];
            this.sending = true;
            const fd = new FormData();
            fd.append("file", file);
            var _size = file.size;
            var fSExt = ["Bytes", "KB", "MB", "GB"],
                i = 0;
            while (_size > 900) {
                _size /= 1024;
                i++;
            }
            this.fileSize = Math.round(_size * 100) / 100 + " " + fSExt[i];
            this.fileName = file.name;
            this.$axios
                .post("v1/uploadWebinarReceipt", fd, {
                    onUploadProgress: (uploadEvent) => {
                        this.uploadPercent = Math.round(
                            (uploadEvent.loaded / uploadEvent.total) * 100
                        );
                    },
                })
                .then((res) => {
                    if (res.data.status === 1) {
                        this.$toasted.success(res.data.msg, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                        this.form.imageName = res.data.imageName;
                        this.sending = false;
                        this.sent = true;
                    } else if (res.data.status === 422) {
                        this.errors = res.data.errors;
                        this.$toasted.info(res.data.msg, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                        this.sending = false;
                    } else {
                        this.$toasted.error(res.data.msg, {
                            position: "bottom-left",
                            duration: 5000,
                        });
                        this.sending = false;
                    }
                });
        },
        submitWebinar() {
            this.errors = [];
            this.checkErrorsNew();
            if (this.errors.length == 0) {
                this.uploadWebinarData();
            } else {
                this.$toasted.info('وارد کردن تمامی فیلدها اجباری است', {
                    position: "bottom-left",
                    duration: 5000,
                });
                this.submitingWebinar = false;
            }
        },
        async uploadWebinarData() {
            this.submitingWebinar = true;
            this.loading = true;
            const submitWebinar = await this.$axios.post(
                "v1/submitWebinar",
                this.form
            );

            if (submitWebinar.data.status === 1) {
                if (submitWebinar.data.data && submitWebinar.data.data.type == 'paid') {
                    this.$router.push("/payment/" + submitWebinar.data.data.transaction_id);
                } else {
                    this.$router.push("/success/" + submitWebinar.data.data.userWebinar.id);
                }
            } else if (submitWebinar.data.status === 422) {
                this.errors = submitWebinar.data.errors;
                this.$toasted.info(submitWebinar.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
                this.submitingWebinar = false;
                this.loading = false;
            } else {
                this.$toasted.error(submitWebinar.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
                this.submitingWebinar = false;
                this.loading = false;
            }
        },
        checkErrorsNew() {
            for (let key in this.form) {
                if (this.form[key] == null || this.form[key] == "") {
                    this.errors.push(`${key}`);
                }
            }

        },
        checkErrors() {
            let formData = new FormData(document.getElementById('myForm'));
            console.log(formData, 'formData is here')
            formData.forEach((value, key) => {
                if (value == null || value == "") {
                    this.errors.push(`${key}`);
                }
            })
        },

    },
    async created() {

        const {data} = await this.$axios.post(`v1/webinar`, {'id': this.$route.params.slug});
        if (data.status === 1) {
            this.webinar = data.webinar;
            this.form.id = this.webinar.id;
            // this.endDay = this.dateDiff(new Date(), new Date(2023, 9, 19))
            // this.endHour = this.hourDiff(new Date(), new Date(2023, 9, 19))

            const ipChecker = await this.$axios.get(`https://ipwho.is`);
            if (!(ipChecker.data.country === 'Iran' && ipChecker.data.country_code === 'IR')) {
                this.$refs.turn_off_vpn_modal_trigger.click();
            }
        }
        let valueDisplays = document.querySelectorAll(".count");
        valueDisplays.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let counter = setInterval(function () {
                if (startValue !== endValue && endValue > 0) {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }
            });
        });

        let valueDisplaysEndDay = document.querySelectorAll(".endDay");
        valueDisplaysEndDay.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let counter = setInterval(function () {
                if (startValue !== endValue && endValue > 0) {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }
            });
        });

        let valueDisplaysEndHour = document.querySelectorAll(".endHour");
        valueDisplaysEndHour.forEach((valueDisplay) => {
            let startValue = 0;
            let endValue = parseInt(valueDisplay.getAttribute("data-val"));
            let counter = setInterval(function () {
                if (startValue !== endValue && endValue > 0) {
                    startValue += 1;
                    valueDisplay.textContent = startValue;
                    if (startValue === endValue) {
                        clearInterval(counter);
                    }
                }
            });
        });
    },
    head() {
        return {
            title: "وبینار",
        };
    },
};
</script>
<style lang="scss">
@import "@/assets/site/css/mixins.scss";
.title-input-p{
    display: block;
    color: #5e5e5e;
    font-size: 0.8rem;
    margin-bottom: 0.49rem;
    margin-right: 0.95rem;
}
.bounce {
    position: absolute;
    left: -20px;
    top: 3px;
    animation: bounce 2s infinite;
    -webkit-animation: bounce 2s infinite;
    -moz-animation: bounce 2s infinite;
    -o-animation: bounce 2s infinite;
}

@-webkit-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        -webkit-transform: translateY(0);
    }
    40% {
        -webkit-transform: translateY(-10px);
    }
    60% {
        -webkit-transform: translateY(-10px);
    }
}

@-moz-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        -moz-transform: translateY(-5px);
    }
    40% {
        -moz-transform: translateY(-10px);
    }
    60% {
        -moz-transform: translateY(-10px);
    }
}

@-o-keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        -o-transform: translateY(-5px);
    }
    40% {
        -o-transform: translateY(-10px);
    }
    60% {
        -o-transform: translateY(-10px);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(-5px);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-10px);
    }
}

.charityAlert {
    padding: 10px;

    .charity {
        color: #e2ad42;
        font-weight: bold;
    }
}

.charityImageSection img {
    background: #fff;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    padding: 15px;
    margin: 20px auto;
    box-shadow: 1px 0px 3px 2px lightgray !important;
}

.charityImageSection img:hover {
    box-shadow: 1px 0px 3px 2px #878787 !important;
    transition: .4s;
}

.form {
    margin-top: unset !important;
}

.wrapper {
    @include fbx-ai-center-jc-between;
    margin-top: 20px;
}

.uk-radio {
    height: 15px !important;
    width: 15px !important;
}

.container {
    @include boxshadow();
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 1em 2em;
    position: relative;
    font-size: 16px;
    border-radius: 0.5em;
    background-color: var(--gray);
    border-bottom: 10px solid var(--main-color);

    &:first-child {
        margin-left: 5px;
    }

    &:last-child {
        margin-right: 5px;
    }
}

i {
    color: var(--main-color);
    font-size: 2.8em;
    text-align: center;
}

span.num {
    color: var(--main-color);
    text-align: center;
    font-weight: 600;
    font-size: 3em;
}

span.title {
    color: var(--black);
    text-align: center;
    font-weight: 400;
}

.row {
    @include fbx-ai-center-jc-between;

    &:first-child {
        margin-right: 4px;
    }

    &:last-child {
        margin-left: 4px;
    }
}

.col {
    display: flex;
    flex-direction: column;
}

.dz-preview {
    display: none;
}

.footer {
    z-index: 21;
    //position: absolute;
}

@media (min-width: 950px) {
    .uk-container {
        padding-right: 9vw !important;
        padding-left: 9vw !important;
    }
}

@media (min-width: 950px) and (max-width: 1400px) {
    .uk-container {
        padding-right: 6vw !important;
        padding-left: 6vw !important;
    }

}

#webinar {
    .about-webinar {
        @include fbx-ai-start-jc-between;

        .img {
            width: 35%;
            position: sticky;
            top: 0;
            /*z-index: 20;*/

            img {
                width: 100%;
                /*height: 28rem;*/
                object-fit: cover;
                border: 1px solid var(--gray);
                border-radius: 5px;
            }
        }

        .text {
            width: 58%;

            .title-date {
                h1 {
                    font-size: 1.8rem;
                    color: var(--black);
                    font-weight: 700;
                    margin-bottom: 1.5rem;
                }

                p {
                    color: var(--dark-main-color);
                    font-size: 1rem;
                    font-weight: 500;

                    svg {
                        fill: none;
                    }
                }
            }

            .descriptions {
                @include fbx-ai-start-jc-between;
                align-items: stretch;
                margin-top: 2rem;

                > div {
                    border-right: 1px solid var(--gray);
                    padding-right: 1rem;
                    padding-left: 1rem;
                }

                h3 {
                    font-size: 0.9rem;
                    color: #5e5e5e;
                    font-weight: 300;
                    margin-bottom: 1.5rem;
                }

                .right {
                    width: 30%;

                    ul {
                        list-style-type: none;
                        padding-right: 0;

                        li {
                            font-weight: 500;
                            margin-top: 1rem;
                            color: var(--black);
                            font-size: 0.8rem;
                            line-height: 1.8rem;

                            svg {
                                color: var(--main-color);
                                width: 0.5rem;
                                margin-left: 0.5rem;
                            }
                        }
                    }
                }

                .middle {
                    width: 30%;
                    @include fbx-column-ai-start-jc-start;

                    p {
                        font-weight: 500;
                        color: var(--black);
                        font-size: 0.8rem;
                        line-height: 2rem;
                        text-align: justify;
                    }

                    .link {
                        direction: ltr;
                        margin-top: auto;
                        width: calc(100% - 1rem);
                        background-color: rgba(#c5973a, 0.08);
                        border-radius: 25px;
                        padding: 0.5rem;
                        color: var(--dark-main-color);
                        font-size: 0.9rem;
                    }
                }

                .left {
                    width: 30%;

                    > div {
                        @include fbx-ai-start-jc-start;

                        img {
                            width: 3rem;
                            height: 3rem;
                            object-fit: cover;
                            border-radius: 50%;
                            margin-left: 1rem;
                        }

                        div {
                            @include fbx-column-ai-center-jc-center;

                            p {
                                font-size: 0.9rem;
                                font-weight: 500;
                                color: var(--black);
                                margin-bottom: 0.5rem;
                            }

                            span {
                                color: var(--dark-main-color);
                                font-size: 0.8rem;
                                font-weight: 500;
                            }
                        }
                    }
                }
            }

            .sessions {
                margin-top: 3rem;
                @include fbx-ai-start-jc-start;
                flex-wrap: wrap;

                .item {
                    @include boxshadow();
                    @include fbx-ai-start-jc-start;
                    justify-content: center;
                    margin-left: 1rem;
                    margin-bottom: 1rem;
                    width: 40%;
                    padding: 2.5rem 1.5rem;
                    background-color: var(--white);
                    border-radius: 5px;
                    position: relative;

                    span.counter {
                        top: 40%;
                        right: 0;
                        position: absolute;
                        transform: rotate(90deg);
                        padding: 0 1rem 0.75rem 1rem;
                        border-bottom: 1px solid var(--gray);
                        font-weight: 300;
                        font-size: 0.9rem;
                        color: var(--black);
                    }

                    div {
                        p {
                            font-size: 0.9rem;
                            font-weight: 600;
                            color: var(--black);
                        }

                        p:last-child {
                            margin-top: 1rem;

                            svg {
                                fill: none;
                                color: var(--dark-main-color);
                            }
                        }
                    }
                }
            }
        }
    }

    .form {
        margin-top: 3rem;
        border-top: 1px solid var(--gray);
        padding-top: 3rem;
        @include fbx-column-ai-start-jc-start;
        justify-content: flex-end;
        align-items: flex-end;
        margin-right: auto;
        width: 100%;


        .form-title {
            width: 100%;
            margin-bottom: 2rem;

            h2 {
                font-size: 1.2rem;
                color: var(--black);
                font-weight: 700;
                margin-bottom: 1rem;
            }

            p {
                color: var(--black);
                font-size: 0.8rem;
            }
        }

        form {
            //@include fbx-ai-start-jc-between;
            align-items: stretch;
            width: 100%;
            max-width: 800px;
            margin: 0 auto;

            .right {
                width: 48%;
                @include fbx-column-ai-start-jc-start;
            }

            .left {
                width: 48%;
                @include fbx-column-ai-start-jc-start;
            }

            .row {
                @include fbx-ai-start-jc-between;

                .form-group {
                    @include fbx-column-ai-start-jc-start;
                    margin-bottom: 1.5rem;
                    position: relative;

                    span.toman {
                        position: absolute;
                        left: 0.75rem;
                        top: 58%;
                        font-size: 0.8rem;
                        color: #5e5e5e;
                    }

                    label {
                        color: #5e5e5e;
                        font-size: 0.8rem;
                        margin-bottom: 0.5rem;
                        margin-right: 1rem;
                    }

                    input,
                    textarea {
                        background-color: rgba(#f1f0f0, 0.45);
                        border: 1px solid #d9d9d9;
                        border-radius: 5px;
                        padding: 0.75rem;
                        width: calc(99.5% - 1.5rem);

                        &:focus {
                            outline: 1px solid var(--main-color) !important;
                        }
                    }
                }

                .custom-select {
                    //margin-top: 1.75rem;
                    margin-bottom: 1.5rem;
                    position: relative;

                    label {
                        color: #5e5e5e;
                        font-size: 0.8rem;
                        margin-bottom: 0.5rem;
                        margin-right: 1rem;
                    }

                    select {
                        background-color: rgba(#f1f0f0, 0.45);
                        border-radius: 5px;
                        color: var(--black);
                        font-size: 0.8rem;
                        padding: 0.75rem;
                        border: 1px solid #d9d9d9;
                        cursor: pointer;
                        user-select: none;
                        width: 100%;

                        &:focus {
                            outline: 1px solid var(--main-color) !important;
                        }
                    }
                }

                &.row-upload {
                    height: 100%;

                    .form-group {
                        height: 100%;

                        .js-upload {
                            @include fbx-column-ai-center-jc-center;
                            padding-right: 0;
                            padding-left: 0;
                            width: 100%;
                            height: 100%;
                            margin-top: 0;
                            margin-bottom: 1.5rem;
                            border-radius: 5px;
                            direction: ltr;
                            border-color: var(--gray);
                            background-color: rgba(#f1f0f0, 0.45);

                            .uk-text-middle {
                                color: var(--black);
                                font-weight: 500;
                                font-size: 1rem;
                            }

                            .uk-link {
                                color: var(--main-color);
                                font-size: 1rem;
                                font-weight: 500;
                            }

                            .rule {
                                font-size: 0.9rem;
                                color: var(--text-gray);
                            }
                        }
                    }
                }

                &.submit {
                    margin-bottom: 1.5rem;
                    margin-top: auto;

                    button {
                        cursor: pointer;
                        color: var(--white);
                        background-color: #e6c55b;
                        width: 100%;
                        font-size: 0.8rem;
                        text-align: center;
                        font-weight: 600;
                        border-radius: 5px;
                        padding-top: 0.75rem;
                        padding-bottom: 0.75rem;
                        border: 0;
                    }
                }
            }
        }
    }
}

.webinar-modal {
    .uk-modal-body {
        width: 850px;
        padding: 0 !important;
        background-color: var(--white);
        border-radius: 8px;

        .title {
            @include fbx-ai-center-jc-between;
            background-color: #f1f0f0;
            padding: 1rem 1.5rem;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            button {
                position: inherit;

                &:hover {
                    svg {
                        color: #cc2a2a;
                    }
                }
            }

            p {
                font-size: 1rem;
                font-weight: bold;
                color: #2b2827;
            }
        }

        .text {
            max-height: 25rem;
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
                background: #cacaca;
                border-radius: 15px;
            }

            padding: 1.5rem;

            p {
                font-weight: 500;
                font-size: 0.8rem;
                color: #2b2827;
                text-align: justify;
                line-height: 2rem;
            }

            .buttons {
                margin-top: 2rem;
                @include fbx-ai-center-jc-center;

                a {
                    margin-left: 0.25rem;
                    margin-right: 0.25rem;
                    font-size: 0.8rem;
                    width: 20%;
                    padding-top: 0.5rem;
                    padding-bottom: 0.5rem;
                    border-radius: 5px;
                    text-align: center;
                    color: #2b2827;
                    transition: all 0.3s;

                    &.cancel {
                        position: inherit;
                        border: 1px solid #e4e3e1;
                        background-color: #fff;

                        &:hover {
                            border-color: #f1f0f0;
                            background-color: #f1f0f0;
                        }
                    }

                    &.change {
                        color: #fff;
                        background-color: #e2ad42;
                        border: 1px solid #e2ad42;
                    }
                }
            }
        }
    }
}

@include mobile-device {
    .form-group {
        margin-left: 5px !important;
    }

    #webinar {
        .about-webinar {
            flex-wrap: wrap;

            .img {
                width: 100%;
                margin-bottom: 1.5rem;

                img {
                    height: auto;
                }
            }

            .text {
                width: 100%;

                .title-date {
                    h1 {
                        font-size: 1.2rem;
                        margin-bottom: 1.5rem;
                        line-height: 1.8rem;
                    }

                    p {
                        font-size: 0.9rem;
                    }
                }

                .descriptions {
                    flex-wrap: wrap;
                    align-items: stretch;
                    margin-top: 1.5rem;

                    > div {
                        border-right: 0;
                        padding-right: 0.5rem;
                        padding-left: 0;
                    }

                    h3 {
                        font-size: 0.8rem;
                        margin-bottom: 1rem;
                    }

                    .right {
                        width: 100%;

                        ul {
                            li {
                                margin-top: 0.5rem;
                                font-size: 0.75rem;
                                line-height: 1.8rem;
                            }
                        }
                    }

                    .middle {
                        width: 100%;
                        margin-bottom: 1.5rem;
                        margin-top: 1.5rem;

                        p {
                            font-size: 0.75rem;
                            line-height: 1.8rem;
                            margin-bottom: 1rem;
                        }

                        .link {
                            font-size: 0.75rem;
                            margin-top: 5px;
                        }
                    }

                    .left {
                        width: 100%;

                        > div {
                            img {
                                width: 2.5rem;
                                height: 2.5rem;
                                margin-left: 0.75rem;
                            }

                            div {
                                p {
                                    font-size: 0.8rem;
                                }

                                span {
                                    font-size: 0.75rem;
                                }
                            }
                        }
                    }
                }

                .sessions {
                    margin-top: 2rem;

                    .item {
                        margin-left: 0;
                        width: calc(100% - 2rem);
                        padding: 2rem 1rem;

                        span.counter {
                            top: 40%;
                            right: 0;
                            padding: 0 0.75rem 0.5rem 0.75rem;
                            font-size: 0.8rem;
                        }

                        div {
                            p {
                                font-size: 0.8rem;
                            }
                        }
                    }
                }
            }
        }

        .form {
            margin-top: 1rem;
            padding-top: 1rem;
            width: 100%;

            .form-title {
                width: 100%;

                h2 {
                    font-size: 1rem;
                }

                p {
                    font-size: 0.75rem;
                }
            }

            form {
                @include fbx-ai-start-jc-between;
                flex-wrap: wrap;
                width: 100%;

                .right {
                    width: 100%;
                }

                .left {
                    width: 100%;
                }

                .row {
                    .form-group {
                        label {
                            font-size: 0.75rem;
                        }

                        input,
                        textarea {
                            padding: 0.5rem;
                            width: calc(99.5% - 1rem);
                        }
                    }

                    .custom-select {

                        label {
                            font-size: 0.75rem;
                        }

                        select {
                            font-size: 0.75rem;
                            padding: 0.5rem;
                        }
                    }

                    &.row-upload {
                        .form-group {
                            .js-upload {
                                .uk-text-middle {
                                    font-size: 0.9rem;
                                }

                                .uk-link {
                                    font-size: 0.9rem;
                                }

                                .rule {
                                    font-size: 0.8rem;
                                }
                            }
                        }
                    }

                    &.submit {
                        margin-bottom: 0;

                        button {
                            font-size: 0.75rem;
                        }
                    }
                }
            }
        }
    }
}

@include tablet-device {
    #webinar {
        .about-webinar {
            flex-wrap: wrap;

            .img {
                width: 100%;
                margin-bottom: 1.5rem;

                img {
                    height: 20rem;
                }
            }

            .text {
                width: 100%;

                .title-date {
                    h1 {
                        font-size: 1.2rem;
                        margin-bottom: 1.5rem;
                        line-height: 1.8rem;
                    }

                    p {
                        font-size: 0.9rem;
                    }
                }

                .descriptions {
                    flex-wrap: wrap;
                    margin-top: 1.5rem;

                    h3 {
                        font-size: 0.8rem;
                        margin-bottom: 1rem;
                    }

                    .right {
                        width: 30%;

                        ul {
                            li {
                                margin-top: 0.5rem;
                                font-size: 0.75rem;
                                line-height: 1.8rem;
                            }
                        }
                    }

                    .middle {
                        width: 30%;

                        p {
                            font-size: 0.75rem;
                            line-height: 1.8rem;
                            margin-bottom: 1rem;
                        }

                        .link {
                            font-size: 0.75rem;
                        }
                    }

                    .left {
                        width: 25%;

                        > div {
                            img {
                                width: 2.5rem;
                                height: 2.5rem;
                                margin-left: 0.75rem;
                            }

                            div {
                                p {
                                    font-size: 0.8rem;
                                }

                                span {
                                    font-size: 0.75rem;
                                }
                            }
                        }
                    }
                }

                .sessions {
                    margin-top: 2rem;
                    justify-content: space-between;

                    .item {
                        margin-left: 0;
                        width: calc(48% - 2rem);
                        padding: 2rem 1rem;

                        span.counter {
                            top: 40%;
                            right: 0;
                            padding: 0 0.75rem 0.5rem 0.75rem;
                            font-size: 0.8rem;
                        }

                        div {
                            p {
                                font-size: 0.8rem;
                            }
                        }
                    }
                }
            }
        }

        .form {
            margin-top: 1rem;
            padding-top: 1rem;
            width: 100%;

            .form-title {
                width: 100%;

                h2 {
                    font-size: 1rem;
                }

                p {
                    font-size: 0.75rem;
                }
            }

            form {
                @include fbx-ai-start-jc-between;
                width: 100%;

                .row {
                    .form-group {
                        label {
                            font-size: 0.75rem;
                        }

                        input,
                        textarea {
                            padding: 0.5rem;
                            width: calc(99.5% - 1rem);
                        }
                    }

                    .custom-select {
                        //margin-top: 0;
                        label {
                            font-size: 0.75rem;
                        }

                        select {
                            font-size: 0.75rem;
                            padding: 0.5rem;
                        }
                    }

                    &.row-upload {
                        .form-group {
                            .js-upload {
                                .uk-text-middle {
                                    font-size: 0.9rem;
                                }

                                .uk-link {
                                    font-size: 0.9rem;
                                }

                                .rule {
                                    font-size: 0.8rem;
                                }
                            }
                        }
                    }

                    &.submit {
                        margin-bottom: 0;

                        button {
                            font-size: 0.75rem;
                        }
                    }
                }
            }
        }
    }
}

@include large-device {
    #webinar {
        .about-webinar {
            flex-wrap: wrap;

            .img {
                width: 100%;
                margin-bottom: 1.5rem;

                img {
                    height: 20rem;
                }
            }

            .text {
                width: 100%;

                .descriptions {
                    flex-wrap: wrap;
                    margin-top: 1.5rem;

                    .right {
                        width: 30%;
                    }

                    .middle {
                        width: 30%;
                    }

                    .left {
                        width: 25%;
                    }
                }

                .sessions {
                    justify-content: space-between;

                    .item {
                        width: calc(48% - 3rem);
                    }
                }
            }
        }
    }
}
</style>
