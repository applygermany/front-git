<template>
    <div
            @click.self="closeModal"
            class="uk-flex-top"
            id="admission-modal"
            uk-modal
    >
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
            <div
                    class="uk-child-width-1-3@m d-flex is-justify-content-space-evenly"
                    uk-grid
            >
                <div
                        :key="index"
                        v-for="(item, index) in images"
                        v-if="item !== null && item !== ''"
                >
                    <a @click="setIndex(index)" class="uk-inline">
                        <div class="my-img">
                            <img :src="item" alt=""/>
                            <svg
                                    class="hover-icon uk-svg"
                                    height="34.002"
                                    style="cursor: pointer"
                                    viewBox="0 0 34.002 34.002"
                                    width="34.002"
                                    xmlns="http://www.w3.org/2000/svg"
                            >
                                <g style="transform: scale(0.08)">
                                    <g>
                                        <path d="M384.97,12.03c0-6.713-5.317-12.03-12.03-12.03H264.847c-6.833,0-11.922,5.39-11.934,12.223    c0,6.821,5.101,11.838,11.934,11.838h96.062l-0.193,96.519c0,6.833,5.197,12.03,12.03,12.03c6.833-0.012,12.03-5.197,12.03-12.03    l0.193-108.369c0-0.036-0.012-0.06-0.012-0.084C384.958,12.09,384.97,12.066,384.97,12.03z"/>
                                        <path d="M120.496,0H12.403c-0.036,0-0.06,0.012-0.096,0.012C12.283,0.012,12.247,0,12.223,0C5.51,0,0.192,5.317,0.192,12.03    L0,120.399c0,6.833,5.39,11.934,12.223,11.934c6.821,0,11.838-5.101,11.838-11.934l0.192-96.339h96.242    c6.833,0,12.03-5.197,12.03-12.03C132.514,5.197,127.317,0,120.496,0z"/>
                                        <path d="M120.123,360.909H24.061v-96.242c0-6.833-5.197-12.03-12.03-12.03S0,257.833,0,264.667v108.092    c0,0.036,0.012,0.06,0.012,0.084c0,0.036-0.012,0.06-0.012,0.096c0,6.713,5.317,12.03,12.03,12.03h108.092    c6.833,0,11.922-5.39,11.934-12.223C132.057,365.926,126.956,360.909,120.123,360.909z"/>
                                        <path d="M372.747,252.913c-6.833,0-11.85,5.101-11.838,11.934v96.062h-96.242c-6.833,0-12.03,5.197-12.03,12.03    s5.197,12.03,12.03,12.03h108.092c0.036,0,0.06-0.012,0.084-0.012c0.036-0.012,0.06,0.012,0.096,0.012    c6.713,0,12.03-5.317,12.03-12.03V264.847C384.97,258.014,379.58,252.913,372.747,252.913z"/>

                                    </g>
                                </g>

                            </svg>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            images() {
                return this.$store.getters.acceptanceAdmission;
            },
        },
        methods: {
            closeModal() {
                setTimeout(() => this.$store.dispatch("setAcceptanceAdmission", []), 500);
            },
            setIndex(index) {
                this.$store.commit("Set_AcceptanceImages", this.images);
                this.$store.commit("Set_LightBoxIndex", index);
            },
        },
    };
</script>

<style lang="scss" scoped>


    .my-img {

        margin-left: 0.5rem;
        margin-right: 0.5rem;
        margin-bottom: 1rem;
        position: relative;

        img {
            transition: all 0.3s;
            width: 100%;
            border-radius: 5px;
        }

        &:hover {

            img {
                filter: brightness(0.5);
            }

            .hover-icon {
                opacity: 1;
            }
        }
    }

    .hover-icon {
        opacity: 0;
        position: absolute;
        //width: 60.5%;
        object-fit: cover;
        color: white;
        top: 45%;
        right: 45%;
        transition: all 0.3s;
    }

    .uk-modal-dialog {
        width: fit-content !important;
        max-width: unset !important;
    }

    .uk-child-width-1-3\@m > * {
        width: 20vw;
    }

    .uk-child-width-1-3\@m > * {
        width: 45vh !important;
    }
</style>
