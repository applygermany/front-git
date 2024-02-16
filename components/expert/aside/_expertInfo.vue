<template>
    <div class="expert-info">
        <div class="img-rate">
            <div class="img">
                <a href="#edit-user-profile" uk-toggle>
                    <img :src="imagePreview" v-if="imagePreview !== null"/>
                    <img :src="$auth.user.image" v-else/>
                </a>
            </div>
            <div class="rate">
                <span class="score-number">{{ score }}</span>
                <div class="rate-stars">
                    <client-only
                    >
                        <star-rating
                                :increment="0.1"
                                :padding="0"
                                :rating="score"
                                :read-only="true"
                                :rtl="true"
                                :show-rating="false"
                                :star-size="20"
                        />
                    </client-only>
                </div>
            </div>


        </div>
        <div class="name-email">
            <p class="name">{{ $auth.user.firstname }} {{ $auth.user.lastname }}</p>
            <p class="email latin-font">{{ $auth.user.email }}</p>

        </div>
        <a @click="changeDarkMode" class="switch-theme">
            <svg class="moon uk-svg" height="28.812" viewBox="0 0 27.337 28.812" width="27.337"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M6598.5,989.758a13.5,13.5,0,0,1-2.254-26.812,12.437,12.437,0,0,0,14.093,19.806A13.511,13.511,0,0,1,6598.5,989.758Z"
                      fill="none"
                      id="Moon" stroke="#000" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="2" transform="translate(-6584 -961.947)"></path>
            </svg>
            <svg class="sun uk-svg" fill="none" height="24" viewBox="0 0 24 24" width="24"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
                      stroke="#141414" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path>
                <path d="M12 2.75V4.25" stroke="#141414" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5"></path>
                <path d="M17.2501 6.75L16.0659 7.93417" stroke="#141414" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="1.5"></path>
                <path d="M21.25 12.0001L19.75 12.0001" stroke="#141414" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="1.5"></path>
                <path d="M17.2501 17.2501L16.0659 16.066" stroke="#141414" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="1.5"></path>
                <path d="M12 19.75V21.25" stroke="#141414" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5"></path>
                <path d="M7.93414 16.0659L6.75 17.25" stroke="#141414" stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"></path>
                <path d="M4.25 12.0001L2.75 12.0001" stroke="#141414" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="1.5"></path>
                <path d="M7.93402 7.93423L6.74988 6.75003" stroke="#141414" stroke-linecap="round"
                      stroke-linejoin="round" stroke-width="1.5"></path>
            </svg>
        </a>

    </div>
</template>

<script>
const avg = arr => arr.reduce((acc, v, i, a) => (a ? (acc + v / a.length) : 0), 0);

export default {

    data() {
        return {
            imagePreview: null,
        };
    },
    methods: {
        async changeDarkMode() {
            document.querySelector("html").classList.toggle("dark-mode");
            const updatedUser = {...this.$auth.user};
            updatedUser.darkmode == 1
                ? (updatedUser.darkmode = 0)
                : (updatedUser.darkmode = 1);
            this.darkMode = updatedUser.darkmode == 1;
            this.$auth.setUser(updatedUser);
            await this.$axios.get("v1/user/changeDarkMode");
        },
    },
    computed: {
        score() {
            let votes = this.$store.getters['chat/votes']

            return votes && votes.length > 0 ? ((avg(votes.map(e => e.score)) * 2) / 2).toFixed(1) : 0;
        }
    },
};
</script>

<style type="scss">
.score-number {
    padding-top: 0.25em;
}

.sidebar .expert-info .img-rate {
    justify-content: start !important;
}

.sidebar .expert-info .img-rate .rate {
    justify-content: start !important;
    margin-right: 0.75em;
}

.rate-stars {
    margin-right: 0.25em;

}

.sidebar .expert-info .img-rate .rate span {
    margin-left: 0 !important;
}
</style>
