<template>
    <main class="main" id="webinar">
        <section v-if="webinar !== null && userWebinar !== null">
            <div class="title"><p>ثبت نام</p></div>
            <div class="text">
                <p>ثبت نام شما در وبینار "{{webinar.title}}" با موفقیت انجام شد.
                    <br>
                    نحوه
                    ورود به وبینار:<br>سمینار در پلتفورم اسکای روم و از طریق سایت ایسمینار برگزار میشه برای ورود از
                    اطلاعات
                    زیر استفاده کنین:<br>لینک: <a href="#https://eseminar.tv/login">https://eseminar.tv/login</a><br>نام
                    کاربری: {{userWebinar.email}}<br>پسوورد: 123456<br>بعد از ورود به حساب کاربری از بخش وبینارهای خریداری
                    شده
                    من بر روی گزینه ورود به وبینار کلیک کنین تا به صورت خودکار وارد وبینار شین.<br>▪️در صورت وجود هرگونه
                    مشکل میتونین به پشتیبانی سایت در واتس آپ پیام بدید: 09001822474<br>(سعی کنین نیم ساعت قبل از شروع
                    وبینار
                    وارد حساب کاربریتون بشین که در صورت وقوع مشکل پشتیبانی فرصت ایجاد راه حل برای شما رو داشته باشه)<br>⚠️نکات:<br>1️⃣
                    برای ورود به وبینار احتیاج به نصب هیچ اپلیکیشنی نیست<br>2️⃣ برای استفاده بهتر از وبینار ترجیحا از PC
                    یا
                    لپ تاپ استفاده کنین<br>3️⃣ حساب شما از 24 ساعت قبل از شروع سمینار فعال میشود<br>4️⃣ حضور در هر دو
                    روز
                    الزامیه</p>
                <div class="buttons"><a class="change" href="/">تایید</a></div>
            </div>
        </section>

    </main>
</template>
<script>

    export default {
        layout: "siteLayout",
        data() {
            return {
                webinar: null,
                userWebinar: null,

            };
        },
        async created() {
            const {data} = await this.$axios.post(`v1/userWebinar`, {'id': this.$route.params.id});
            if (data.status == 0){
                this.$toasted.error(data.msg, {
                    position: "bottom-left",
                    duration: 5000,
                });
                return ;
            }
            this.webinar = data.webinar;
            this.userWebinar = data.userWebinar;
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

    #webinar {
        /*height: 100vh;*/
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
            background: #CACACA;
            border-radius: 15px;
        }

        > section {
            width: 900px;
            background-color: var(--white);
            padding: 0 !important;
            border-radius: 8px;
            margin: 2rem auto 2rem auto;
            @include boxshadow();

            .title {
                @include fbx-ai-center-jc-between;
                background-color: #F1F0F0;
                padding: 1rem 1.5rem;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;

                button {
                    position: inherit;

                    &:hover {
                        svg {
                            color: #CC2A2A;
                        }
                    }
                }

                p {
                    font-size: 1rem;
                    font-weight: bold;
                    color: #2B2827;
                }
            }

            .text {
                padding: 1.5rem;

                p {
                    font-weight: 500;
                    font-size: 0.8rem;
                    color: #2B2827;
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
                        color: #2B2827;
                        transition: all 0.3s;

                        &.cancel {
                            position: inherit;
                            border: 1px solid #E4E3E1;
                            background-color: #fff;

                            &:hover {
                                border-color: #F1F0F0;
                                background-color: #F1F0F0;
                            }
                        }

                        &.change {
                            color: #fff;
                            background-color: #E2AD42;
                            border: 1px solid #E2AD42;
                        }
                    }
                }
            }
        }
    }

    @include mobile-device {
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
                            }
                        }

                        .left {
                            width: 100%;

                            > div {
                                img {
                                    width: 2.5rem;
                                    height: 2.5rem;
                                    margin-left: .75rem;
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

                    .row {
                        .form-group {
                            label {
                                font-size: 0.75rem;
                            }

                            input, textarea {
                                padding: 0.5rem;
                                width: calc(99.5% - 1rem);
                            }
                        }

                        .custom-select {
                            margin-top: 0;

                            label {
                                font-size: 0.75rem;
                            }

                            select {
                                font-size: 0.75rem;
                                padding: 0.5rem;
                            }
                        }

                        .row-upload {
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

                        .negative-margin {
                            margin-top: 0;
                        }

                        .submit {
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
                                    margin-left: .75rem;
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

                            input, textarea {
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