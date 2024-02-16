<template>
    <div id="confirm-duty-modal" class="duty-box-modal" uk-modal>
        <div class="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
            <div class="title">
                <button
                        class="uk-modal-close-default"
                        type="button"
                        @click="emptyData"
                        uk-close
                        style="right: unset; left: 10px"
                ></button>
                <p>ایجاد وظایف {{dutyType}}</p>
            </div>
            <div class="text">
                <p>
                    آیا از ایجاد وظایف اطمینان دارید؟
                </p>
                <div class="submit-cancel">
                    <button class="cancel uk-modal-close">انصراف</button>
                    <button
                        @click="createDuty()"
                        class="submit uk-modal-close"
                    >
                        ثبت و ایجاد
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newDutyForm: {
                title: null,
                deadline: null,
                text: null,
            },
        };
    },
    mounted() {
        this.newDutyForm = {
            title: null,
            deadline: null,
            text: null,
        };
    },
    computed: {
        id() {
            return this.$store.getters["expert/userId"];
        },
        dutyType() {
            return this.$store.getters["expert/dutyType"];
        },
        dutyTypeId() {
            return this.$store.getters["expert/dutyTypeId"];
        },
    },

    methods: {
        emptyData() {
            this.newDutyForm = {
                title: null,
                deadline: null,
                text: null,
            };
        },
        async createDuty() {
            this.errors = [];
            const saveDuty = await this.$axios.post(
                "v1/expert/saveDutyAll/" + this.id,
                { dutyTypeId: this.dutyTypeId}
            );
            if (saveDuty.data.status === 1) {
                this.$toasted.success(saveDuty.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
                this.$store.dispatch("expert/duties", this.id);
            } else if (saveDuty.data.status === 422) {
                this.errors = saveDuty.data.errors;
                this.$toasted.info(saveDuty.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            } else {
                this.$toasted.error(saveDuty.data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
            }
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";


.duty-box-modal {
    .uk-modal-body {
        padding: 0;
        background-color: var(--white);
        //width: 400px;
        border-radius: 8px;
        z-index: 99999;

        .title {
            @include fbx-ai-center-jc-between;
            padding: 1rem 1.5rem;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            direction: ltr;
            margin-bottom: 0px !important;

            button {
                position: inherit;

                &:hover {
                    svg {
                        color: var(--red);
                    }
                }
            }

            p {
                font-size: 0.75rem;
                font-weight: bold;
                color: var(--black);
            }
        }

        .text {
            padding: 1rem 1.5rem 1.5rem 1.5rem;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            z-index: 9999999;

            p {
                line-height: 1.8rem;
                text-align: justify;
                font-size: 0.8rem;
                color: var(--black);
                margin-bottom: 2rem;
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
                        background-color: #ff3535 !important;
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
    .duty-box-modal {
        .uk-modal-body {
            .title {
                padding: 0.75rem 1.25rem;

                p {
                    font-size: 0.9rem;
                }
            }

            .text {
                padding: 0.75rem 1.25rem 1.25rem 1.25rem;

                p {
                    font-size: 0.75rem;
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
