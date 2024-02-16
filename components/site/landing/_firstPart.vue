<template>
    <section class="first-part">
        <div class="uk-container">
            <div class="img-title-float">
                <div class="title">
                    <h1 class="title-font">اپلایءء جرمنیءء همــراه تو تا آلمانـــــ</h1>
                    <p>
                        شما با کمک پورتال اپلای جرمنی که تنها پورتال جامع اپلای برای دانشگاه‌های آلمان است، به تمام
                        اطلاعات موردنیاز برای شروع مهاجرت تحصیلی دسترسی دارید.
                    </p>
                    <nuxt-link @click.native="$store.commit('fromLand', true)" to="/auth/signin">ورود به داشبورد
                    </nuxt-link>
                </div>
                <div class="img">
                    <img alt="" src="@/assets/site/images/Girl.svg"/>
                </div>
            </div>
       
            <img alt="" class="back-img" src="@/assets/site/images/city_fade.svg"/>
        </div>
    </section>
</template>

<script>
    export default {};
</script>

<style lang="scss" scoped>
    @import "@/assets/site/css/mixins";

    .first-part {
        padding-top: 2rem;
        padding-bottom: 6rem;
        background-color: #F4F4F4;
        position: relative;

        .img-title-float {
            z-index: 999;
            position: relative;

            .title {
                @include fbx-column-ai-center-jc-center;
                width: 50%;
                z-index: 999;
                margin-right: auto;
                margin-left: auto;

                h1 {
                    line-height: 2rem;
                    font-weight: 800;
                    font-size: 2.5rem;
                    color: var(--black);
                    margin-bottom: 3rem;
                }

                p {
                    margin-bottom: 3rem;
                    text-align: center;
                    line-height: 2.5rem;
                    font-size: 0.8rem;
                    color: var(--black);
                    font-weight: 500;
                }

                a {
                    background-color: var(--main-red-color);
                    font-size: 0.9rem;
                    color: var(--white);
                    border-radius: 25px;
                    width: 30%;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    text-align: center;
                }
            }

            .img {
                width: 20%;

                img {
                    z-index: 999;
                    position: absolute;
                    width: 25%;
                    bottom: -8rem;
                    left: 0;
                }
            }
        }

        .back-img {
            position: absolute;
            bottom: 0;
            z-index: 1;
        }

        .new-sign {
            position: absolute;
            bottom: 2rem;
            z-index: 999;

            .label {
                border-radius: 5px;
                color: var(--white);
                font-size: 0.8rem;
                background-color: var(--main-red-color);
                padding: 0.25rem 0.5rem;
            }

            a {
                margin-right: 0.75rem;
                color: var(--black);
                font-size: 0.9rem;
                font-weight: 600;
            }
        }

        .feedback-link {
            position: absolute;
            right: -2rem;
            bottom: 50%;
            transform: rotate(-90deg);

            a {
                border-top-left-radius: 5px;
                border-top-right-radius: 5px;
                background-color: var(--main-red-color);
                padding: 0.25rem 0.5rem;
                @include fbx-ai-center-jc-center;
                color: var(--white);
                font-size: 0.8rem;
                font-weight: 500;

                svg {
                    fill: none;
                }
            }
        }
    }

    @include mobile-device {
        .first-part {
            padding-top: 0;
            padding-bottom: 2rem;

            .img-title-float {
                @include fbx-column-ai-center-jc-center;

                .title {
                    order: 2;
                    width: 100%;
                    margin-right: inherit;
                    margin-left: inherit;

                    h1 {
                        line-height: 2.5rem;
                        font-size: 1.5rem;
                        margin-bottom: 1.5rem;
                        text-align: center;
                    }

                    p {
                        margin-bottom: 1.5rem;
                        line-height: 2rem;
                        font-size: 0.75rem;
                        text-align: center;
                    }

                    a {
                        font-size: 0.75rem;
                        width: 50%;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                    }
                }

                .img {
                    order: 1;
                    width: 100%;
                    text-align: center;
                    margin-bottom: 1.5rem;

                    img {
                        position: inherit;
                        width: 60%;
                        //bottom: -3.5rem;
                        //left: 0;
                    }
                }
            }

            .back-img {
                width: 92%;
            }

            .new-sign {
                display: none;
            }

            .feedback-link {
                display: none;
            }
        }
    }

    @include tablet-device {
        .first-part {
            padding-top: 2rem;
            padding-bottom: 2rem;

            .img-title-float {
                .title {
                    align-items: flex-start;
                    width: 65%;
                    margin-right: inherit;
                    margin-left: inherit;

                    h1 {
                        line-height: 2.5rem;
                        font-size: 1.5rem;
                        margin-bottom: 1.5rem;
                    }

                    p {
                        margin-bottom: 1.5rem;
                        line-height: 2rem;
                        font-size: 0.75rem;
                        text-align: right;
                    }

                    a {
                        font-size: 0.75rem;
                        width: 50%;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                    }
                }

                .img {
                    img {
                        width: 25%;
                        bottom: -3.5rem;
                        left: 0;
                    }
                }
            }

            .back-img {
                width: 92%;
            }

            .new-sign {
                display: none;
            }

            .feedback-link {
                display: none;
            }
        }
    }

    @include large-device {
        .first-part {
            .img-title-float {
                .img {
                    img {
                        width: 35%;
                        //bottom: -14.5rem;
                        //left: -6rem;
                    }
                }
            }

            .back-img {
                width: 92%;
            }
        }
    }
</style>
