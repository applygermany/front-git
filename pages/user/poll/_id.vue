<template>
        <section class="wrapper" id="vote">
            <!--  Page Title  -->
            <div class="page-title">
                <div class="return-back">
                    <h1>نظر سنجی</h1>
                </div>
                <p>
                    لطفا چند دقیقه از وقت خود را صرف تکمیل نظرسنجی زیر کنید. با تشکر از همراهی شما کاربر عزیز
                </p>
            </div>

            <form class="body" id="myForm" method="post">
                <div class="first">
                    <div class="labels">
                        <p>به چه میزان از موارد زیر رضایت دارید؟</p>
                        <div>
                            <span>بسیار زیاد</span>
                            <span>زیاد</span>
                            <span>متوسط</span>
                            <span>کم</span>
                            <span>خیلی کم</span>
                        </div>
                    </div>
                    <div class="item">
                        <p>تسلط کارشناسان به امور اپلای</p>
                        <div>
                            <span>
                                <input class="uk-radio" name="answers[1]" type="radio" value="5">
                            </span>
                            <span>
                                <input class="uk-radio" name="answers[1]" type="radio" value="4">
                            </span>
                            <span>
                                <input class="uk-radio" name="answers[1]" type="radio" value="3">
                            </span>
                            <span>
                                <input class="uk-radio" name="answers[1]" type="radio" value="2">
                            </span>
                            <span>
                                <input class="uk-radio" name="answers[1]" type="radio" value="1">
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>سرعت پاسخگویی و در دسترس بودن کارشناس</p>
                        <div>
                            <span>
                                <input class="uk-radio" name="answer[2]" type="radio" value="5">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[2]" type="radio" value="4">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[2]" type="radio" value="3">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[2]" type="radio" value="2">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[2]" type="radio" value="1">
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>شیوه پاسخگویی و برخورد کارشناس</p>
                        <div>
                            <span>
                                <input class="uk-radio" name="answer[3]" type="radio" value="5">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[3]" type="radio" value="4">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[3]" type="radio" value="3">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[3]" type="radio" value="2">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[3]" type="radio" value="1">
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>کیفیت نگارش رزومه و انگیزه نامه خود توسط تیم اپلای جرمنی</p>
                        <div>
                              <span>
                                <input class="uk-radio" name="answer[4]" type="radio" value="5">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[4]" type="radio" value="4">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[4]" type="radio" value="3">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[4]" type="radio" value="2">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[4]" type="radio" value="1">
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>پشتیبانی بعد از پذیرش و انجام امور مرتبط با ویزا, ثبت نام دانشگاه, بیمه و درخواست خوابگاه</p>
                        <div>
                         <span>
                                <input class="uk-radio" name="answer[5]" type="radio" value="5">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[5]" type="radio" value="4">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[5]" type="radio" value="3">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[5]" type="radio" value="2">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[5]" type="radio" value="1">
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>به طور کلی چه میزان از خدمات و کیفیت کار تیم اپلای جرمنی رضایت داشتید؟</p>
                        <div>
                                <span>
                                <input class="uk-radio" name="answer[6]" type="radio" value="5">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[6]" type="radio" value="4">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[6]" type="radio" value="3">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[6]" type="radio" value="2">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[6]" type="radio" value="1">
                            </span>
                        </div>
                    </div>
                    <div class="item">
                        <p>چقدر احتمال دارد اپلای جرمنی را به دوستان و اشنایان خود معرفی کنید؟</p>
                        <div>
                             <span>
                                <input class="uk-radio" name="answer[7]" type="radio" value="5">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[7]" type="radio" value="4">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[7]" type="radio" value="3">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[7]" type="radio" value="2">
                            </span>
                            <span>
                                <input class="uk-radio" name="answer[7]" type="radio" value="1">
                            </span>
                        </div>
                    </div>
                </div>
                <div class="second">
                    <p>
                        آیا تمایل به همکاری با تیم اپلای جرمنی در هر یک از زمینه های زیر را دارید؟ (اختیــاری)
                    </p>
                    <div>
                        <div>
                            <input class="uk-radio" id="1" name="types[]" type="checkbox" value="1">
                            <label for="1">کارشناس</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="2" name="types[]" type="checkbox" value="2">
                            <label for="2">مشــاور</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="3" name="types[]" type="checkbox" value="3">
                            <label for="3">امور گرافیکی</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="4" name="types[]" type="checkbox" value="4">
                            <label for="4">گرافیست</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="5" name="types[]" type="checkbox" value="5">
                            <label for="5">ادیتور ویدیو</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="6" name="types[]" type="checkbox" value="6">
                            <label for="6">برنامه نویس</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="7" name="types[]" type="checkbox" value="7">
                            <label for="7">تولیـــد محتوای متنی</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="8" name="types[]" type="checkbox" value="8">
                            <label for="8">روابط عمومی و فــــروش</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="9" name="types[]" type="checkbox" value="9">
                            <label for="9">تولید محتوای ویدیویی</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="10" name="types[]" type="checkbox" value="10">
                            <label for="10">نگارش رزومه و انگیـــــزه‌نامه</label>
                        </div>
                        <div>
                            <input class="uk-radio" id="11" name="types[]" type="checkbox" value="11">
                            <label for="11">سفیر اپلای جرمنی در شهر سکونت خود در آلمان</label>
                        </div>
                    </div>
                </div>
                <div class="third">
                    <div>
                        <p>
                            در چند جمله نظرتون راجع به همکاری با اپلای جرمنی را بیان کنید. این نظــر .در صفحه اصلی منتشر
                            خواهد شد
                        </p>
                        <textarea name="comment" rows="7"></textarea>
                    </div>
                    <div>
                        <p>
                            اگر انتقاد یا پیشنهادی داریــد آن را به ما بگویید. ما حتما پیشنهـــادات شما را بررسی
                            می‌کنیم. (اختیــاری)
                        </p>
                        <textarea name="recommend" rows="7"></textarea>
                    </div>
                </div>
                <div class="submit">
                    <button @click="saveVote" type="button">ثبت و ارسال نظر</button>
                </div>
            </form>
        </section>


</template>
<script>

    export default {
        layout: "userLayout",
        data() {
            return {
                webinar: null,
                userWebinar: null,

            };
        },
        methods: {
            async saveVote() {
                let formData = new FormData(document.getElementById('myForm'))
                formData.append('expertId', this.$route.params.id);
                formData.append('userId', this.$auth.user.id);
                const {data} = await this.$axios.post(`v1/vote`, formData);
                if (data.toString() === '1'){
                    this.$toasted.success("نظر با موفقیت ثبت شد", {
                        position: "bottom-left",
                        duration: 5000,
                    });

                    setTimeout(() => {
                        this.$router.replace("/user/dashboard")
                    },3000)
                } else {
                    this.$toasted.error("خطایی رخ داد", {
                        position: "bottom-left",
                        duration: 5000,
                    });

                }
            },
        },
        async created() {
            if (!(this.$route.params.id > 0)){
                this.$router.push("/user/dashboard");
            }
        },

        head() {
            return {
                title: "وبینار",
            };
        },
    };
</script>
<style lang="scss" scoped>
    @import "@/assets/site/css/mixins.scss";

    #vote {
        .body {
            background-color: var(--white);
            border-radius: 8px;
            @include boxshadow();
            padding-top: 2rem;
            padding-bottom: 2rem;
            @include fbx-column-ai-center-jc-center;

            .first {
                width: 80%;
                border-bottom: 1px solid var(--gray);

                .labels {
                    @include fbx-ai-center-jc-between;
                    margin-bottom: 2rem;

                    p {
                        width: 60%;
                        color: var(--black);
                        font-size: 0.8rem;
                        font-weight: 800;
                    }

                    div {
                        width: 40%;
                        @include fbx-ai-center-jc-between;

                        span {
                            width: 20%;
                            text-align: center;
                            color: var(--black);
                            font-size: 0.8rem;
                            font-weight: 800;
                        }
                    }
                }

                .item {
                    @include fbx-ai-center-jc-between;
                    margin-bottom: 1.5rem;

                    &:last-child {
                        margin-bottom: 2.5rem;
                    }

                    p {
                        width: 60%;
                        color: var(--black);
                        font-size: 0.8rem;
                    }

                    div {
                        width: 40%;

                        span {
                            width: 20%;
                            text-align: center;
                        }

                        @include fbx-ai-center-jc-between;
                    }
                }
            }

            .second {
                margin-top: 2.5rem;
                padding-bottom: 2.5rem;
                width: 80%;
                border-bottom: 1px solid var(--gray);

                p {
                    color: var(--black);
                    font-size: 0.8rem;
                    font-weight: 800;
                }

                > div {
                    @include fbx-ai-center-jc-start;
                    flex-wrap: wrap;
                    margin-left: -0.5rem;
                    margin-right: -0.5rem;

                    > div {
                        margin-right: 0.5rem;
                        margin-left: 0.5rem;
                        margin-top: 1.5rem;
                        width: calc(16.6% - 1rem);
                        @include fbx-ai-center-jc-start;

                        label {
                            width: 85%;
                            line-height: 1.5rem;
                            color: var(--black);
                            font-size: 0.8rem;
                            margin-right: 0.25rem;
                        }
                    }
                }
            }

            .third {
                width: 80%;
                margin-top: 2.5rem;
                @include fbx-ai-center-jc-between;

                > div {
                    width: 45%;

                    p {
                        color: var(--black);
                        font-size: 0.8rem;
                        font-weight: 800;
                        line-height: 1.5rem;
                        margin-bottom: 1rem;
                    }

                    textarea {
                        background-color: var(--white);
                        line-height: 2rem;
                        padding: 0.75rem;
                        font-size: 0.8rem;
                        border-radius: 5px;
                        border: 1px solid var(--gray);
                        color: var(--black);
                        width: calc(100% - 1.7rem);
                        transition: all 0.3s;

                        &:focus {
                            outline: 0;
                            border-color: var(--main-color);
                        }
                    }
                }
            }

            .submit {
                width: 80%;
                text-align: center;
                margin-top: 2.5rem;

                button {
                    border: 0;
                    cursor: pointer;
                    color: #2B2827;
                    background-color: var(--light-main-color);
                    font-size: 0.8rem;
                    border-radius: 5px;
                    width: 30%;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    font-weight: 600;
                }
            }
        }
    }

    @include mobile-device {
        #vote {
            .body {
                padding: 1.5rem 1rem;

                .first {
                    width: 100%;

                    .labels {
                        flex-direction: column;
                        margin-bottom: 1.5rem;

                        p {
                            width: 100%;
                            font-size: 0.75rem;
                            margin-bottom: 1rem;
                        }

                        div {
                            width: 100%;

                            span {
                                font-size: 0.75rem;
                            }
                        }
                    }

                    .item {
                        flex-direction: column;
                        margin-bottom: 1rem;

                        &:last-child {
                            margin-bottom: 1.5rem;
                        }

                        p {
                            width: 100%;
                            font-size: 0.75rem;
                            margin-bottom: 0.5rem;
                        }

                        div {
                            width: 100%;
                        }
                    }
                }

                .second {
                    margin-top: 1.5rem;
                    padding-bottom: 1.5rem;
                    width: 100%;

                    p {
                        font-size: 0.75rem;
                        line-height: 1.5rem;
                    }

                    > div {
                        > div {
                            margin-top: 1rem;
                            width: calc(33.3% - 1rem);

                            label {
                                font-size: 0.75rem;
                            }
                        }
                    }
                }

                .third {
                    width: 100%;
                    margin-top: 0;
                    flex-wrap: wrap;

                    > div {
                        margin-top: 1.5rem;
                        width: 100%;

                        p {
                            font-size: 0.75rem;
                        }

                        textarea {
                            font-size: 0.75rem;
                        }
                    }
                }

                .submit {
                    width: 100%;
                    margin-top: 1.5rem;

                    button {
                        font-size: 0.75rem;
                        width: 50%;
                    }
                }
            }
        }
    }

</style>