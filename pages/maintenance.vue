<template>
    <main class="main" id="error">
        <section>
            <div class="right">
                <img src="@/assets/site/images/maintenance.svg" alt="">
            </div>
            <div class="left">
                <h1 class="latin-font">
                    <span class="title-font">ما در حال بروزرسانی هستیم</span>
                </h1>
                <p>لطفا در ساعات بعد تلاش کنید. از صبر و شکیبایی شما سپاسگزاریم.</p>
            </div>
        </section>
    </main>
</template>

<script>
    export default {
        head() {
            return {
                title: "در حال بروزرسانی",
            };
        },
    };
</script>

<style lang="scss" scoped>
    @import "@/assets/site/css/mixins.scss";

</style>
