<template>
    <aside :class="[vuexUserMenuState ? 'collapse' : '']" class="sidebar">
        <div class="user-info">
            <div class="img">
                <img :src="user.image" v-if="user.image !== false && user.hasImage"/>

                <img alt="" src="/user_light.svg" v-else-if="!darkMode"/>
                <img alt="" src="/user_dark.svg" v-else/>
            </div>
            <div class="name">
                <p>{{ user.firstname }} {{ user.lastname }}</p>
                <span class="latin-font" v-if="user.mobile">{{ user.mobile }}</span>
                <span class="latin-font" v-else>{{ user.email }}</span>
            </div>
            <a @click="changeDarkMode" class="switch-theme">
                <svg
                        class="moon uk-svg"
                        height="28.812"
                        viewBox="0 0 27.337 28.812"
                        width="27.337"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            d="M6598.5,989.758a13.5,13.5,0,0,1-2.254-26.812,12.437,12.437,0,0,0,14.093,19.806A13.511,13.511,0,0,1,6598.5,989.758Z"
                            fill="none"
                            id="Moon"
                            stroke="#000"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            transform="translate(-6584 -961.947)"
                    ></path>
                </svg>
                <svg
                        class="sun uk-svg"
                        fill="none"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                            d="M15.25 12C15.25 13.7949 13.7949 15.25 12 15.25C10.2051 15.25 8.75 13.7949 8.75 12C8.75 10.2051 10.2051 8.75 12 8.75C13.7949 8.75 15.25 10.2051 15.25 12Z"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M12 2.75V4.25"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M17.2501 6.75L16.0659 7.93417"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M21.25 12.0001L19.75 12.0001"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M17.2501 17.2501L16.0659 16.066"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M12 19.75V21.25"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M7.93414 16.0659L6.75 17.25"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M4.25 12.0001L2.75 12.0001"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                    <path
                            d="M7.93402 7.93423L6.74988 6.75003"
                            stroke="#141414"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                    ></path>
                </svg>
            </a>
        </div>

        <div class="sidebar__menu">
            <ul v-if="$auth.user.type === 1">
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/dashboard"
                    >
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                    d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H9.25C9.80228 4.75 10.25 5.19772 10.25 5.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25H5.75C5.19772 10.25 4.75 9.80228 4.75 9.25V5.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H9.25C9.80228 13.75 10.25 14.1977 10.25 14.75V18.25C10.25 18.8023 9.80228 19.25 9.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V14.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M13.75 5.75C13.75 5.19772 14.1977 4.75 14.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H14.75C14.1977 10.25 13.75 9.80228 13.75 9.25V5.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M13.75 14.75C13.75 14.1977 14.1977 13.75 14.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H14.75C14.1977 19.25 13.75 18.8023 13.75 18.25V14.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>داشبورد</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/acceptance"
                    >
                        <svg
                                height="20"
                                viewBox="0 0 23 23"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <style>
                                    .aaaaaa {
                                        fill: none;
                                        stroke: var(--main-color);
                                        stroke-width: 2px;
                                    }
                                </style>
                            </defs>
                            <g transform="translate(-135.5 -8.5)">
                                <path
                                        class="aaaaaa"
                                        d="M3,0H18a3,3,0,0,1,3,3V18a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z"
                                        transform="translate(136.5 9.5)"
                                />
                                <line class="aaaaaa" transform="translate(148 20)" x1="9.5"/>
                            </g>
                        </svg>

                        <span>درخواست اخذ پذیرش</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/applyLevels"
                    >
                        <svg
                                class="uk-svg"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>نقشه راه اپلای</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/telSupports"
                    >
                        <!--          <a href="#user-normal-user-modal" uk-toggle>-->
                        <svg
                                class="uk-svg"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M14 5.02936C16.4312 5.72562 18.3396 7.65944 19 10.1056"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>مشاوره تلفنی</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/motivations"
                    >
                        <svg
                                class="acceptance"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
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
                                    <path
                                            class="b"
                                            d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                            transform="translate(-2 -1.312)"
                                    />
                                    <path
                                            class="b"
                                            d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                            transform="translate(-1.121 -4)"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span>انگیزه نامه</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/resumes"
                    >
                        <svg
                                class="acceptance"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
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
                                    <path
                                            class="b"
                                            d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                            transform="translate(-2 -1.312)"
                                    />
                                    <path
                                            class="b"
                                            d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                            transform="translate(-1.121 -4)"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span>رزومه ساز</span>
                    </nuxt-link>
                </li>
                <li>
                    <a href="#user-normal-user-modal" uk-toggle>
                        <svg
                                class="acceptance"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
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
                                    <path
                                            class="b"
                                            d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                            transform="translate(-2 -1.312)"
                                    />
                                    <path
                                            class="b"
                                            d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                            transform="translate(-1.121 -4)"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span>انتخاب دانشگاه</span>
                    </a>
                </li>
                <li>
                    <a href="#user-normal-user-modal" uk-toggle>
                        <svg
                                class="acceptance"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
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
                                    <path
                                            class="b"
                                            d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                            transform="translate(-2 -1.312)"
                                    />
                                    <path
                                            class="b"
                                            d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                            transform="translate(-1.121 -4)"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span>وضعیت اپلای</span>
                    </a>
                </li>
                <li>
                    <a href="#user-normal-user-modal" uk-toggle>
                        <svg
                                class="acceptance"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
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
                                    <path
                                            class="b"
                                            d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                            transform="translate(-2 -1.312)"
                                    />
                                    <path
                                            class="b"
                                            d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                            transform="translate(-1.121 -4)"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span>آپلود مدارک</span>
                    </a>
                </li>
                <li>
                    <a @click="logout">
                        <svg
                                class="uk-svg"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M15.75 8.75L19.25 12L15.75 15.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M19 12H10.75"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>خروج از حساب</span>
                    </a>
                </li>
            </ul>
            <ul v-else>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/dashboard"
                    >
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                    d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75 4.75H9.25C9.80228 4.75 10.25 5.19772 10.25 5.75V9.25C10.25 9.80228 9.80228 10.25 9.25 10.25H5.75C5.19772 10.25 4.75 9.80228 4.75 9.25V5.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M4.75 14.75C4.75 14.1977 5.19772 13.75 5.75 13.75H9.25C9.80228 13.75 10.25 14.1977 10.25 14.75V18.25C10.25 18.8023 9.80228 19.25 9.25 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V14.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M13.75 5.75C13.75 5.19772 14.1977 4.75 14.75 4.75H18.25C18.8023 4.75 19.25 5.19772 19.25 5.75V9.25C19.25 9.80228 18.8023 10.25 18.25 10.25H14.75C14.1977 10.25 13.75 9.80228 13.75 9.25V5.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M13.75 14.75C13.75 14.1977 14.1977 13.75 14.75 13.75H18.25C18.8023 13.75 19.25 14.1977 19.25 14.75V18.25C19.25 18.8023 18.8023 19.25 18.25 19.25H14.75C14.1977 19.25 13.75 18.8023 13.75 18.25V14.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>داشبورد</span>
                    </nuxt-link>
                </li>
                <li class="locked">
                    <a href="#user-special-user-modal" uk-toggle>
                        <svg
                                class="acceptance"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
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
                                    <path
                                            class="b"
                                            d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                            transform="translate(-2 -1.312)"
                                    />
                                    <path
                                            class="b"
                                            d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                            transform="translate(-1.121 -4)"
                                    />
                                </g>
                            </g>
                        </svg>

                        <span>درخواست اخذ پذیرش</span>
                    </a>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/applyLevels"
                    >
                        <svg
                                class="uk-svg"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M4.75 6.75L9.25 4.75V17.25L4.75 19.25V6.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M14.75 6.75L19.25 4.75V17.25L14.75 19.25V6.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M14.75 6.75L9.25 4.75V17.25L14.75 19.25V6.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>نقشه راه اپلای</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/telSupports"
                    >
                        <svg
                                class="uk-svg"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M8.89286 4.75H6.06818C5.34017 4.75 4.75 5.34017 4.75 6.06818C4.75 13.3483 10.6517 19.25 17.9318 19.25C18.6598 19.25 19.25 18.6598 19.25 17.9318V15.1071L16.1429 13.0357L14.5317 14.6468C14.2519 14.9267 13.8337 15.0137 13.4821 14.8321C12.8858 14.524 11.9181 13.9452 10.9643 13.0357C9.98768 12.1045 9.41548 11.1011 9.12829 10.494C8.96734 10.1537 9.06052 9.76091 9.32669 9.49474L10.9643 7.85714L8.89286 4.75Z"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M14 5.02936C16.4312 5.72562 18.3396 7.65944 19 10.1056"
                                    stroke="#141414"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>مشاوره تلفنی</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/motivations"
                    >
                        <svg
                                height="20"
                                viewBox="0 0 24 24"
                                width="20"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <style>
                                    .aaa {
                                        fill: none;
                                        stroke: #a6a6a6;
                                        stroke-linecap: round;
                                        stroke-linejoin: round;
                                        stroke-width: 2px;
                                    }
                                </style>
                            </defs>
                            <g transform="translate(-137.02 -8.498)">
                                <path
                                        class="aaa"
                                        d="M-19051.1,5314.05c.467,7.148,7.563,7.167,7.631,13.662.053,4.878-3.547,7.125-7.795,7.312-4.73.283-9.006-1.768-9.984-5.913a10.008,10.008,0,0,1,2.9-9.257c.154,2.6,2.119,6.1,5.844,6.533C-19054.4,5324.32-19055.3,5317.55-19051.1,5314.05Z"
                                        transform="translate(19199.516 -5304.552)"
                                />
                            </g>
                        </svg>
                        <span>انگیزه نامه</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/resumes"
                    >
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                    d="M7.75 19.25H16.25C17.3546 19.25 18.25 18.3546 18.25 17.25V9L14 4.75H7.75C6.64543 4.75 5.75 5.64543 5.75 6.75V17.25C5.75 18.3546 6.64543 19.25 7.75 19.25Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M18 9.25H13.75V5"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M9.75 15.25H14.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M9.75 12.25H14.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>رزومه ساز</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/universities"
                    >
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                    d="M18.25 11.5V19.25M5.75 19.25V11.5M9.75 19.25V11.5M14.25 19.25V11.5"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M12 4.75L19.25 11.25H4.75L12 4.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M4.75 19.25H19.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>انتخاب دانشگاه</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/applyStatus"
                    >
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                    d="M12 4.75L13.75 10.25H19.25L14.75 13.75L16.25 19.25L12 15.75L7.75 19.25L9.25 13.75L4.75 10.25H10.25L12 4.75Z"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>وضعیت اپلای</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link
                            @click.native="closeMenu"
                            active-class="sidenav-active"
                            exact-active-class="sidenav-active"
                            to="/user/uploads"
                            v-if="user.upload_access == 1 || true"
                    >
                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
                            <path
                                    d="M12.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V7.75H17.25C18.3546 7.75 19.25 8.64543 19.25 9.75V12.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M13.5 7.5L12.5685 5.7923C12.2181 5.14977 11.5446 4.75 10.8127 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V11"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M17 14.75V19.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M19.25 17L14.75 17"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>آپلود مدارک</span>
                    </nuxt-link>
                    <a href="#user-expert-banned-modal" uk-toggle v-else>
                        <svg
                                class="acceptance"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
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
                                    <path
                                            class="b"
                                            d="M5.75,12.2A1.444,1.444,0,0,1,7.19,10.75H22.31A1.444,1.444,0,0,1,23.75,12.2v7.961a2.887,2.887,0,0,1-2.88,2.895H8.63a2.887,2.887,0,0,1-2.88-2.895Z"
                                            transform="translate(-2 -1.312)"
                                    />
                                    <path
                                            class="b"
                                            d="M7.751,13.076v-.232c0-2.258-.13-4.776,1.44-6.4a6.216,6.216,0,0,1,4.68-1.693,6.216,6.216,0,0,1,4.68,1.693c1.57,1.621,1.44,4.139,1.44,6.4v.232"
                                            transform="translate(-1.121 -4)"
                                    />
                                </g>
                            </g>
                        </svg>
                        <span>آپلود مدارک</span>
                    </a>
                </li>
                <li>
                    <a @click="logout">
                        <svg
                                class="uk-svg"
                                fill="none"
                                height="24"
                                viewBox="0 0 24 24"
                                width="24"
                                xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                    d="M15.75 8.75L19.25 12L15.75 15.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M19 12H10.75"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                            <path
                                    d="M15.25 4.75H6.75C5.64543 4.75 4.75 5.64543 4.75 6.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H15.25"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="1.5"
                            ></path>
                        </svg>
                        <span>خروج از حساب</span>
                    </a>
                </li>
            </ul>
        </div>

        <nuxt-link v-if="user.tel_support_flag && user.type === 1" class="free" to="/user/telSupports">
            <svg
                    enable-background="new 0 0 64 64"
                    height="64px"
                    id="Layer_1"
                    version="1.0"
                    viewBox="0 0 64 64"
                    width="64px"
                    xml:space="preserve"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
            >
        <path
                d="M53.92,10.081c12.107,12.105,12.107,31.732,0,43.838  c-12.106,12.108-31.734,12.108-43.839,0c-12.107-12.105-12.107-31.732,0-43.838C22.186-2.027,41.813-2.027,53.92,10.081z"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
        />
                <path
                        d="M42,43c0,0-1,4-10,4s-12-7-12-15s3-15,12-15  s10,4,10,4"
                        fill="none"
                        stroke="#ffffff"
                        stroke-miterlimit="10"
                        stroke-width="2"
                />
                <line
                        fill="none"
                        stroke="#ffffff"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        x1="15"
                        x2="34"
                        y1="30"
                        y2="30"
                />
                <line
                        fill="none"
                        stroke="#ffffff"
                        stroke-miterlimit="10"
                        stroke-width="2"
                        x1="15"
                        x2="34"
                        y1="34"
                        y2="34"
                />
      </svg>
            <br/>
            <span>توکن مشاوره تلفنی رایگان</span>
        </nuxt-link>
        <div class="version latin-font">Version {{ userVersion }}</div>
    </aside>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    methods: {
        async changeDarkMode() {
            document.querySelector("html").classList.toggle("dark-mode");
            const updatedUser = {...this.$auth.user};
            updatedUser.darkmode == 1 ? (updatedUser.darkmode = 0) : (updatedUser.darkmode = 1);
            this.$auth.setUser(updatedUser);
            await this.$axios.get("v1/user/changeDarkMode");
        },
        showSpecialUserModal() {
            if (this.vuexUserSpecialUserModal === true) {
                this.$store.dispatch("setVuexUserSpecialUserModal", false);
            } else {
                this.$store.dispatch("setVuexUserSpecialUserModal", true);
            }
        },
        showNormalUserModal() {
            if (this.vuexUserNormalUserModal === true) {
                this.$store.dispatch("setVuexUserNormalUserModal", false);
            } else {
                this.$store.dispatch("setVuexUserNormalUserModal", true);
            }
        },
        closeMenu() {
            this.$store.commit('user/SET_FromTelSupport', false)
            this.$store.dispatch("user/setVuexUserMenuState", false);
        },
        logout() {
            this.$auth.logout();
        },
    },

    async mounted() {
        this.path = $nuxt.$route.path;

        const {data} = await this.$axios.get(`v1/user/dashboard`);

        if (data.user) {
            this.$store.commit("user/Set_User", data.user);
            this.$store.commit("user/Set_Acceptance", data.acceptance);
            this.$store.commit("user/Set_user_version", data.user_version);
        }
    },
    computed: {
        userVersion() {
            return this.$store.getters["user/userVersion"];
        },
        vuexUserSpecialUserModal() {
            return this.$store.getters.vuexUserSpecialUserModal;
        },
        vuexUserNormalUserModal() {
            return this.$store.getters.vuexUserNormalUserModal;
        },
        vuexUserMenuState() {
            return this.$store.getters["user/vuexUserMenuState"];
        },
        ...mapGetters({
            user: "user/user",
            userVersion: "user/userVersion",
            acceptance: "user/acceptance",
            userSupervisorFirstTelSupport: "user/userSupervisorFirstTelSupport",
            userSupervisor: "user/userSupervisor",
            userSupport: "user/userSupport",
        }),
        darkMode() {
            const updatedUser = {...this.$auth.user};

            return updatedUser.darkmode === 1;
        },
    },

    async data() {
        return {
            path: null,
        };
    },
};
</script>

<style lang="scss" scoped>
@import "~/assets/user/scss/_mixins.scss";

.sidebar__menu {
  ul {
    li:not(.locked):nth-child(2) {
      a {
        svg {
          color: var(--main-color) !important;

          path {
            stroke: var(--main-color) !important;
          }
        }
      }
    }

    li:last-child:hover {
      svg {
        color: var(--red) !important;
      }
    }
  }
}

.sidebar {
  padding: 2rem 1rem;
  margin-top: 3.5rem;
  background-color: var(--white) !important;
  width: calc(15% - 2rem);
  min-height: calc(100vh - 5.5rem);
  position: fixed;
  top: 0;
  right: 0;
  transition: all 0.3s;

  .user-info {
    display: none;
  }

  &__menu {
    ul {
      list-style-type: none;
      padding-right: 0;

      li {
        margin-bottom: 1.5rem;

        a {
          @include fbx-ai-center-jc-between;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-gray);
          transition: all 0.3s;

          &:hover {
            color: var(--dark);

            svg {
              color: var(--dark);
            }

            svg.acceptance {
              stroke: var(--dark);
            }
          }

          img {
            margin-left: 0.5rem;
            fill: none;
            color: var(--text-gray);
            stroke-width: 1px;
            stroke-linejoin: round;
          }

          svg {
            margin-left: 0.5rem;
            fill: none;
            color: var(--text-gray);
            //stroke-width: 1px;
            stroke-linejoin: round;
            transition: all 0.3s;
            //width: 13%;
            //&.motivation-svg{
            //    width: 10%;
            //}
          }

          svg.acceptance {
            padding: 3px;
            stroke: var(--text-gray);
            stroke-linejoin: round;
            transition: all 0.3s;
            stroke-width: 4px;
          }

          span {
            overflow: hidden;
            width: 85%;
          }
        }
      }
    }
  }

  .free {
    position: absolute;
    width: 80%;
    background: var(--main-color);
    padding: 10px;
    border-radius: 10px;
    bottom: 12%;
    right: 0;
    margin-right: 0.7rem;
    text-align: center;

    svg {
      width: 30px;
      text-align: center;
      fill: none;
      stroke: var(--white);
      color: var(--white);
      stroke-linejoin: round;
      transition: all 0.3s;
      margin-bottom: 10px;

      path {
        stroke: var(--white);
      }

      line {
        stroke: var(--white);
      }
    }

    span {
      text-align: center;
      color: var(--white);
      font-size: 11px;
      padding: 6px;
      width: 100%;
    }
  }

  .version {
    position: absolute;
    width: 100%;
    margin-top: auto;
    font-size: 0.8rem;
    bottom: 7%;
    right: 0;
    color: var(--text-gray);
    opacity: 0.65;
    font-weight: 500;
    text-align: center;
  }
}

.sidebar.collapse {
  width: calc(6% - 2rem);

  .sidebar__menu {
    ul {
      li {
        a {
          transition: inherit;
          justify-content: center;

          img {
            margin-left: 0;
          }

          svg {
            margin-left: 0;
          }

          span {
            opacity: 0;
            max-height: 0;
            width: 0;
          }
        }
      }
    }
  }

  .version {
    width: 0;
    opacity: 0;
  }
}

@include mobile-device {
  .sidebar {
    width: 50%;
    z-index: 1000;
    padding: 0;
    right: -50%;
    min-height: calc(100vh - 3.5rem);

    .user-info {
      padding: 1rem 1rem;
      background-color: rgba(#737284, 0.06);
      @include fbx-column-ai-start-jc-start;
      position: relative;

      .switch-theme {
        position: absolute;
        left: 1rem;
        top: 1rem;

        svg {
          color: var(--black);
          width: 1.2rem;
        }

        .sun {
          display: none;
        }
      }

      .img {
        margin-bottom: 1rem;

        img {
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          object-fit: cover;
        }
      }

      .name {
        p {
          font-size: 0.75rem;
          color: var(--black);
          font-weight: 600;
        }

        span {
          color: var(--main-color);
          font-size: 0.75rem;
        }
      }
    }

    &__menu {
      padding: 1rem 1rem;

      ul {
        li {
          a {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
  .sidebar.collapse {
    right: 0;
    width: 50%;

    .sidebar__menu {
      ul {
        li {
          a {
            justify-content: flex-start;

            svg {
              margin-left: 0.5rem;
            }

            span {
              opacity: inherit;
              max-height: inherit;
              width: 85%;
            }
          }
        }
      }
    }

    .version {
      width: 100%;
      opacity: inherit;
    }
  }
}

@include tablet-device {
  .sidebar {
    width: 30%;
    z-index: 1000;
    padding: 0;
    right: -30%;
    min-height: calc(100vh - 3.5rem);

    .user-info {
      padding: 1rem 1rem;
      background-color: rgba(#737284, 0.06);
      @include fbx-column-ai-start-jc-start;
      position: relative;

      .switch-theme {
        position: absolute;
        left: 1rem;
        top: 1rem;

        svg {
          color: var(--black);
          width: 1.2rem;
        }

        .sun {
          display: none;
        }
      }

      .img {
        margin-bottom: 1rem;

        img {
          border-radius: 50%;
          width: 2.5rem;
          height: 2.5rem;
          object-fit: cover;
        }
      }

      .name {
        p {
          font-size: 0.75rem;
          color: var(--black);
          font-weight: 600;
        }

        span {
          color: var(--main-color);
          font-size: 0.75rem;
        }
      }
    }

    &__menu {
      padding: 1rem 1rem;

      ul {
        li {
          a {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
  .sidebar.collapse {
    right: 0;
    width: 30%;

    .sidebar__menu {
      ul {
        li {
          a {
            justify-content: flex-start;

            svg {
              margin-left: 0.5rem;
            }

            span {
              opacity: inherit;
              max-height: inherit;
              width: 85%;
            }
          }
        }
      }
    }

    .version {
      width: 100%;
      opacity: inherit;
    }
  }
}
</style>
