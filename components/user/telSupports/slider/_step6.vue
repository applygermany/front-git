<template>
    <div class="first current">
        <div class="img">
            <img src="@/assets/user/images/apply-request/picture-6.jpg" alt=""/>
            <div class="counter-name">
                <span class="name title-font">توضیحــات</span>
            </div>
        </div>
        <div class="form">
            <form>
                <div class="row">
                    <div class="form-group w-50">
                        <div class="label">
                            <label for="explain">
                                چقدر احتمال دارد از خدمات اپلای جرمنی استفاده کنید؟
                            </label>
                        </div>

                        <div class="custom-select">
                            <div class="select-selected"
                                 :class="{'error-input': errors.includes('applyPercent')}"
                                 @click="data.selectShow = !data.selectShow">
                                <p v-if="data.applyPercentTitle == null">
                                    انتخاب کنید
                                </p>
                                <p dir="ltr" v-else>{{ data.applyPercentTitle }}</p>
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        style="transition: 0.3s all"
                                        :class="{ rotate: data.selectShow }"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path
                                            d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                    />
                                </svg>
                            </div>
                            <transition name="fade">
                                <div class="select-items" v-show="data.selectShow">
                                    <div dir="ltr" style="text-align: right" @click="changeSelect('10', '0 - 10%')">
                                        0 - 10%
                                    </div>
                                    <div dir="ltr"
                                         style="text-align: right"
                                         @click="changeSelect('20', '10 - 20%')"
                                    >
                                        10 - 20%
                                    </div>
                                    <div dir="ltr" style="text-align: right" @click="changeSelect('30', '20 - 30%')">
                                        20 - 30%
                                    </div>
                                    <div dir="ltr"
                                         style="text-align: right"
                                         @click="changeSelect('40', '30 - 40%')"
                                    >
                                        30 - 40%
                                    </div>
                                    <div dir="ltr"
                                         style="text-align: right"
                                         @click="changeSelect('50', '40 - 50%')"
                                    >
                                        40 - 50%
                                    </div>
                                    <div dir="ltr" style="text-align: right" @click="changeSelect('60', '50 - 60%')">
                                        50 - 60%
                                    </div>
                                    <div dir="ltr" style="text-align: right" @click="changeSelect('70', '60 - 70%')">
                                        60 - 70%
                                    </div>
                                    <div dir="ltr" style="text-align: right" @click="changeSelect('80', '70 - 80%')">
                                        70 - 80%
                                    </div>
                                    <div dir="ltr" style="text-align: right" @click="changeSelect('90', '80 - 90%')">
                                        80 - 90%
                                    </div>
                                    <div dir="ltr" style="text-align: right" @click="changeSelect('100', '90 - 100%')">
                                        90 - 100%
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div v-if="errors.includes('applyPercent')" class="error">
                            انتخاب این فیلد الزامی است
                        </div>
                    </div>
                    <div class="form-group w-50">
                        <div class="label">
                            <label for="explain">
                                درنظر دارید چه زمانی اپلای کنید؟
                            </label>
                        </div>
                        <div class="custom-select">
                            <div class="select-selected"
                                 :class="{'error-input': errors.includes('timeStatus')}"
                                 @click="data.selectShowStatus = !data.selectShowStatus">
                                <p v-if="data.timeStatus == null">
                                    انتخاب کنید
                                </p>
                                <p dir="ltr" v-else>{{ data.timeStatus }}</p>
                                <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                        style="transition: 0.3s all"
                                        :class="{ rotate: data.selectShowStatus }"
                                >
                                    <path fill="none" d="M0 0h24v24H0z"/>
                                    <path
                                            d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"
                                    />
                                </svg>
                            </div>
                            <transition name="fade">
                                <div class="select-items" v-show="data.selectShowStatus">
                                    <div style="text-align: right" @click="changeStatus('کمتر از 6 ماه')">
                                        کمتر از 6 ماه
                                    </div>
                                    <div
                                            style="text-align: right"
                                            @click="changeStatus('تا 1 سال آینده')"
                                    >
                                        تا 1 سال آینده
                                    </div>
                                    <div style="text-align: right" @click="changeStatus('1 تا 2 سال اینده')">
                                        1 تا 2 سال اینده
                                    </div>
                                    <div
                                            style="text-align: right"
                                            @click="changeStatus('بیش از 2 سال')"
                                    >
                                        بیش از 2 سال
                                    </div>
                                </div>
                            </transition>
                        </div>
                        <div v-if="errors.includes('timeStatus')" class="error">
                            انتخاب این فیلد الزامی است
                        </div>
                    </div>
                    <div class="form-group w-100">
                        <div class="label">
                            <label for="explain">
                                اگر توضیحات دیگری دارید، آن را در کادر زیر وارد کنید
                            </label>
                        </div>
                        <textarea
                                rows="16"
                                id="explain"
                                v-model="data.description"></textarea>
                    </div>
                </div>

                <div class="submit-return">
                    <a class="return" uk-slider-item="previous"> بازگشت </a>
                    <a class="submit" href="#" @click="checkErrors">
                        ثبت درخواست
                    </a>
                </div>

                <a
                        href="#submit-apply-request-modal"
                        ref="start_modal_trigger"
                        style="display: none"
                        uk-toggle
                ></a>
            </form>
        </div>
        <client-only>
            <SubmitApplyRequestModal :data='data'/>
        </client-only>
    </div>
</template>

<script>
import SubmitApplyRequestModal
    from "@/components/user/applyRequest/slider/step2-slides/modal/_submitApplyRequestModal.vue";
import applyLevels from "@/pages/user/applyLevels.vue";

export default {
    computed: {
        applyLevels() {
            return applyLevels
        }
    },
    el: "input[type^='range']",
    components: {
        SubmitApplyRequestModal,
    },
    data() {
        return {
            data: {
                description: null,
                timeStatus: null,
                applyPercent: -1,
                applyPercentTitle: null,
                selectShow: false,
                selectShowStatus: false,
            },
            errors: [],
            modalUrl: '#'
        };
    },
    async created() {
        const {data} = await this.$axios.get(`v1/user/acceptance`);
    },
    methods: {
        changeSelect(val, val2) {
            this.data.applyPercent = val;
            this.data.applyPercentTitle = val2;
            this.data.selectShow = false;
        },
        changeStatus(status) {
            this.data.timeStatus = status;
            this.data.selectShowStatus = false;
        },
        checkErrors() {
            this.errors = []

            if (this.data.timeStatus == null)
                this.errors.push("timeStatus");
            if (this.data.applyPercent === -1)
                this.errors.push("applyPercent");

            if (this.errors.length === 0) {
                this.$refs.start_modal_trigger.click();
            }
        },
        handleInputChange(e) {
            let target = e.target
            if (e.target.type !== 'range') {
                target = document.getElementById('range')
            }
            const min = target.min
            const max = target.max
            const val = target.value

            target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'

            var position = (val - min) * 75 / (max - min);
            var value = document.getElementsByName('rangeVal')[0];

            if (position < 50) {
                value.style.left = 'calc(' + position + '% + 10px)'
            } else {
                value.style.left = 'calc(' + position + '% - 10px)'
            }
            value.value = val;
        }
    },
    mounted() {
        this.$el.addEventListener('input', this.handleInputChange);
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

#apply-request2 .body form .row .form-group {
  position: relative;
  margin-bottom: 1.5rem;
  width: 100%;
}

.c-w {
  width: 22% !important;
}

@include mobile-device {
  .c-w {
    width: 44% !important;
  }
}

.custom-select {
  width: 95%;
  position: relative;
}

.select-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  color: var(--black);
  font-size: 0.8rem;
  padding: 0.5rem;
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

output {
  position: absolute;
  width: 50px;
  height: 24px;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  border-radius: 3px;
  color: #777;
  font-size: .8em;
  line-height: 24px;
  text-align: center;
  margin-top: -55px;
}

input[type="range"] {
  direction: ltr;
  -webkit-appearance: none;
  width: 100%;
  height: 7px;
  background: var(--gray);
  border-radius: 5px;
  background-image: linear-gradient(var(--main-color), var(--main-color));
  background-size: 0% 100%;
  background-repeat: no-repeat;
}

/* Input Thumb */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--white);
  border: 5px solid var(--main-color);
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--main-color);
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

input[type="range"]::-ms-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: var(--main-color);
  cursor: ew-resize;
  box-shadow: 0 0 2px 0 #555;
  transition: background .3s ease-in-out;
}

/* Input Track */
input[type=range]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type=range]::-moz-range-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

input[type="range"]::-ms-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}

</style>
