<template>
    <div class="upload-box-modal" id="turn-off-vpn-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="text">
                <svg class="acceptance" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <style>
                            .a {
                                fill: #fff;
                                stroke: #a5a29b;
                                opacity: 0;
                            }

                            .b,
                            .d {
                                fill: none;
                            }

                            .b {
                                stroke: #a6a6a6;
                                stroke-linecap: round;
                                stroke-linejoin: round;
                                stroke-width: 2px;
                            }

                            .c {
                                stroke: none;
                            }
                        </style>
                    </defs>
                    <g>
                        <g>
                            <path class="b"
                                d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                transform="translate(-2 -1.312)" />
                            <path class="b"
                                d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                transform="translate(-1.121 -4)" />
                        </g>
                    </g>
                </svg>


                <p>
                    به نظر می رسد شما از فیلتر شکن استفاده می کنید. برای ثبت نام پیشنهاد می کنیم که فیلترشکن خود را خاموش کنید
                </p>
                <button class="uk-modal-close-default" type="button" uk-close></button>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

#turn-off-vpn-modal {
    .uk-margin-auto-vertical {
        margin-bottom: 0 !important;
    }

    .uk-modal-close-default {
        right: unset !important;
        left: 20px;
        margin-top: 0;
        margin-bottom: auto;

        padding-right: 1em;
        height: 70%;
        border-right: var(--white) 1px solid;
    }
}

#turn-off-vpn-modal {
    .uk-modal-body {
        padding: 0;
        width: 60%;
        background-color: var(--red);
        //width: 400px;
        border-radius: 8px;
        z-index: 99999;

        .title {
            @include fbx-ai-center-jc-between;
            background-color: var(--inner-background-color);
            padding: 1rem 1.5rem;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;

            button {
                position: inherit;

                &:hover {
                    svg {
                        color: var(--red);
                    }
                }
            }

            p {
                font-size: 1rem;
                font-weight: bold;
                color: var(--black);

            }
        }

        .text {
            padding: 1rem 1.5rem 1rem 1.5rem;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            display: flex;
            z-index: 9999999;

            p {
                line-height: 1.8rem;
                margin-right: 1em;

                text-align: justify;
                font-size: 0.8rem;
                color: var(--white);

                a {
                    color: var(--white);
                    font-weight: bolder;
                }
            }

            svg {
                fill: var(--white) !important;

                .a {
                    fill: var(--white);
                    stroke: #ffffff;
                    opacity: 0;
                }

                .b,
                .d {
                    fill: none;
                }

                .b {
                    stroke: #ffffff;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-width: 2px;
                }

                .c {
                    stroke: none;
                }

            }

            .submit-cancel {
                text-align: center;
                width: 100%;

                .submit {
                    border: 1px solid var(--inner-background-color);
                    border-radius: 5px;
                    background-color: var(--inner-background-color);
                    font-weight: 500;
                    font-size: 0.8rem;
                    cursor: pointer;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    width: 25%;
                    color: var(--black);
                    transition: all 0.3s;

                    &:hover {
                        background-color: var(--light-main-color);
                        border-color: var(--light-main-color);
                        color: #2b2827;
                    }
                }

                .cancel {
                    cursor: pointer;
                    font-weight: 500;
                    border: 1px solid var(--gray);
                    border-radius: 5px;
                    color: var(--black);
                    font-size: 0.8rem;
                    padding-top: 0.75rem;
                    padding-bottom: 0.75rem;
                    width: 25%;
                    background-color: var(--white);
                    transition: all 0.3s;

                    &:hover {
                        background-color: var(--gray);
                        border-color: var(--gray);
                        color: var(--black);
                    }
                }
            }
        }
    }
}

@include mobile-device {
    #turn-off-vpn-modal {
        .uk-modal-body {
            width: 100%;
            .title {
                padding: 0.75rem 1.25rem;

                p {
                    font-size: 0.9rem;
                }
            }

            .text {
                padding: 0.75rem 1.25rem 1.25rem 1.25rem;

                p {
                    width: 75%;
                    font-size: 0.6rem;
                }

                .submit-cancel {
                    .submit {
                        font-size: 0.75rem;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        width: 40%;
                    }

                    .cancel {
                        font-size: 0.75rem;
                        padding-top: 0.5rem;
                        padding-bottom: 0.5rem;
                        width: 40%;
                    }
                }
            }
        }
    }
}
</style>
