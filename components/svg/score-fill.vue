<template>
    <svg
            :class="'uk-svg ' + className"
            class="uk-svg"
            fill="none"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
    >
        <path
                d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                stroke="#141414"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
        ></path>
    </svg>
</template>

<script>
    export default {
        props: ["i", "rate"],
        mounted() {

        },
        computed: {
            className() {
                return this.rate && this.i ? this.rate >= this.i ? 'full' : '' : "";
            }
        }
    };
</script>

<style></style>
